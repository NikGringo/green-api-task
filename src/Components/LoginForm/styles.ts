import { CSSProperties } from "react";

const container: CSSProperties = {
    borderRadius: "20px",
    border: "solid 2px #00A884",
    height: "300px",
    width: "550px",
    boxShadow: "0px 0px 50px gray",
  };

  const header: CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    height: "25%",
    width: "100%",
    borderRadius: "20px 20px 0px 0px",
  };

  const id: CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    height: "25%",
    width: "100%",
    // backgroundColor: "lightblue",
  };

  const key: CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderRadius: "0px 0px 20px 20px",
    // backgroundColor: "lightgreen",
    height: "25%",
    width: "100%",
  };

  const footer: CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    height: "25%",
    width: "100%",
    borderRadius: "20px 20px 0px 0px",
  };

  export {container, header, id, key, footer}