const styles = () => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
  },
  button: {
    width: 108,
    cursor: "pointer",
  },
  field: {
    margin: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "baseline",
    "&>div": {
      color: "red",
      fontSize: 12,
    },
  },
  label: {
    fontSize: 14,
    color: "darkgray",
  },
  input: {
    width: 200,
    height: 20,
    borderRadius: 10,
  },
});

export default styles;
