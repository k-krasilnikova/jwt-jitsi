/* global $, JitsiMeetJS */
var connection = null;
var room = null;
var remoteTracks = {};
var recordedUserId = null;
var conferenceId = null;
var token = null;
var isSreamLoaded = false;
var isRecorderUserLeft = false;
var JitsiManualEvents = {
    ON_RECORDER_VIDEO_ATTACHED: "conference.onRecorderVideoAttached"
};
var videoBridgeUrl = "";
var config = {};
var appId = 'collaborate.center';

function getParamsFormUrl() {
    var options = {};
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (typeof options[pair[0]] === "undefined") {
            options[pair[0]] = decodeURIComponent(pair[1]);
        } else if (typeof options[pair[0]] === "string") {
            var arr = [options[pair[0]], decodeURIComponent(pair[1])];
            options[pair[0]] = arr;
        } else {
            options[pair[0]].push(decodeURIComponent(pair[1]));
        }
    }
    return options;
}

function isVideoRecorderUser(userId) {
    return userId.indexOf(config.recorderPrefix) !== -1;
}

function getVideoStreamElement(track) {
    var participant = track.getParticipantId();
    return $('video[data-id="' + participant + '"]');
}

function getAudioStreamElement(track) {
    var participant = track.getParticipantId();
    return $('audio[data-id="' + participant + '"]');
}

function onVideoMuted(track) {
    if (track.getType() == "video") {
        var $streamElement = getVideoStreamElement(track);
        track.isMuted() ? track.detach($streamElement[0]) : track.attach($streamElement[0]);
    }
}

function bindTrackEvents(track) {
    track.addEventListener(JitsiMeetJS.events.track.TRACK_MUTE_CHANGED, onVideoMuted);
}

function getRemoteVideoTrack(participant) {
    if (!remoteTracks[participant])
        return null;
    var tracks = remoteTracks[participant];
    for (var i = 0; i < tracks.length; i++) {
        if (tracks[i].type == 'video')
            return tracks[i];
    }
    return null;
}

function attachVideo(track, participant) {
    participant = parseInt(participant, 10)
    var $streamElement = getVideoStreamElement(track);
    // $streamElement.hide();
    $streamElement.width(300);
    $streamElement.height(220);
    // if (participant == recordedUserId) {
        // $streamElement.show();
        if (!isSreamLoaded) {
            isSreamLoaded = true;
            var values = {
                value: participant
            }
            room.sendCommandOnce(JitsiManualEvents.ON_RECORDER_VIDEO_ATTACHED, values);
        }
        room.selectParticipant(participant)
        console.error("Participant selected")
    // }
    track.attach($streamElement[0]);
    console.error("Remote track attached")

}

function attachAudio(track, participant) {
    var $streamElement = getAudioStreamElement(track);
    if (!isSreamLoaded) {
        isSreamLoaded = true;
        var values = {
            value: participant
        }
        room.sendCommandOnce(JitsiManualEvents.ON_RECORDER_VIDEO_ATTACHED, values);
    }
    track.attach($streamElement[0]);
}


function onRemoteTrack(track) {
    var participant = track.getParticipantId();
    if (isVideoRecorderUser(participant) || isRecorderUserLeft) {
        return;
    }
    console.error("Remote track recieved");

    if (!remoteTracks[participant])
        remoteTracks[participant] = [];

    remoteTracks[participant].push(track);
    bindTrackEvents(track);
    var $streamElement = track.getType() == "video" ? "<video autoplay='1' data-id='" + participant + "' />" : "<audio autoplay='1' data-id='" + participant + "' />";
    $(".videoRecordingWrapper").append($streamElement);
    track.getType() == "video" ? attachVideo(track, participant) : attachAudio(track, participant);
}

function onUserJoined(id) {
    console.log("user join");
    remoteTracks[id] = [];
}

function onUserLeft(id) {
    if (id == recordedUserId) {
        isRecorderUserLeft = true;
        isSreamLoaded = false;
    }
    console.log("user left");
    if (!remoteTracks[id])
        return;
    var tracks = remoteTracks[id];
    for (var i = 0; i < tracks.length; i++) {
        var $streamElement = tracks[i].getType() == "video" ? getVideoStreamElement(tracks[i]) : getAudioStreamElement(tracks[i]);
        tracks[i].detach($streamElement[0]);
    }
}

function onConferenceFailed (error) {
    window.errorMessage = error;
}

function onConferenceError (error) {
    window.errorMessage = error;
}

function onConnectionStatusShanged(id, isActive) {
    console.log("connection status changed " + isActive);
    if (id != recordedUserId) {
        return;
    }

    var $streamElement = $('video[data-id="' + id + '"]');
    if (!isActive) {
        $streamElement.css('opacity', '0.3');
        $streamElement.parent().append("<div class='coonectionStatusMessage'>Connection with user failed. Trying to reconnect.</div>");
    }
    else {
        $streamElement.css('opacity', '1');
        $(".coonectionStatusMessage").remove();
    }
}

/**
 * That function is called when connection is established successfully
 */
function onConnectionSuccess() {
    room = connection.initJitsiConference(conferenceId, config);
    room.on(JitsiMeetJS.events.conference.TRACK_ADDED, onRemoteTrack);
    room.on(JitsiMeetJS.events.conference.TRACK_REMOVED, function (track) {
        console.log("track removed!!!" + track);
    });
    room.on(JitsiMeetJS.events.conference.USER_JOINED, onUserJoined);
    room.on(JitsiMeetJS.events.conference.USER_JOINED, onUserJoined);
    room.on(JitsiMeetJS.events.conference.USER_LEFT, onUserLeft);
    room.on(JitsiMeetJS.events.conference.CONFERENCE_FAILED, onConferenceFailed);
    room.on(JitsiMeetJS.events.conference.CONFERENCE_ERROR, onConferenceError);
    // room.on(JitsiMeetJS.events.conference.PARTICIPANT_CONN_STATUS_CHANGED, onConnectionStatusShanged);
    room.join();
}

/**
 * This function is called when the connection fail.
 */
function onConnectionFailed() {
    console.error("Connection Failed!");
    window.errorMessage = "Connection Failed";
    // if (room) {
    //     room.leave().then(function () {
    //         connection.disconnect();
    //     });
    // }
}


/**
 * This function is called when we disconnect.
 */
function disconnect() {
    console.log("disconnect!");
    if (room) {
        room.leave().then(function () {
            connection.disconnect();
        });
    }
    connection.removeEventListener(JitsiMeetJS.events.connection.CONNECTION_ESTABLISHED, onConnectionSuccess);
    connection.removeEventListener(JitsiMeetJS.events.connection.CONNECTION_FAILED, onConnectionFailed);
    connection.removeEventListener(JitsiMeetJS.events.connection.CONNECTION_DISCONNECTED, disconnect);
}

function unload() {
    if (room) {
        room.leave().then(function () {
            connection.disconnect();
        });
    }

}

$(window).bind('beforeunload', unload);
$(window).bind('unload', unload);


function bindConnectionEvents() {
    connection.addEventListener(JitsiMeetJS.events.connection.CONNECTION_ESTABLISHED, onConnectionSuccess);
    connection.addEventListener(JitsiMeetJS.events.connection.CONNECTION_FAILED, onConnectionFailed);
    connection.addEventListener(JitsiMeetJS.events.connection.CONNECTION_DISCONNECTED, disconnect);
}

function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
}

function generateId() {
    return "recorder_" + s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}


function initJitsi (options) {
    JitsiMeetJS.init(config);   
    recordedUserId = options.userId;
    conferenceId = options.conferenceId;
    token = options.token;

    config.nick = generateId();
    config.conferenceId = conferenceId;
    config.bosh += conferenceId;
    connection = new JitsiMeetJS.JitsiConnection(appId, token, config);
    bindConnectionEvents();
    connection.connect();
}


try {   
    var options = getParamsFormUrl();     
    var env = options.env;   
    switch(env) {
        case "prod": 
            env = "";
            break;
       default:
          env += ".";
          break;
    }

    $.when(        
        $.getScript("https://" + env + "collaborate.center/app/lib-jitsi-meet/lib-jitsi-meet.min.js"),
        $.Deferred(function(deferred) {
            $(deferred.resolve);
        })
    )
    .done(function() {        
        videoBridgeUrl = "https://api" + env.replace(".", "") + ".collaborate.center/api/config/getvideobridgeconfig?contentId=" + options.conferenceId;
        $.ajax({
            type: "get",
            url: videoBridgeUrl,
            error: function (request, error) {
                console.error(arguments);        
            },
            success: function (response) {
                config = response;
                initJitsi(options);
            }
        });
    }); 
        
}
catch(error) {
    console.log(error);
}