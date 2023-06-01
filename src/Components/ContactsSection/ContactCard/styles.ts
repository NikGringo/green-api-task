import { CSSProperties } from "react";

const container: CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: "50px",
    borderBottom: "solid 1px lightgray ",
  };

  const avtr: CSSProperties = {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    background: "#00A884",
    margin: "10px",
  };

  const info: CSSProperties = {
    flex: "4",
    width: "70%",
    height: "100%",
  };

  const infoNumber: CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    height: "100%",
  };

export {container, avtr, info, infoNumber}