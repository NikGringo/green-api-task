import { CSSProperties } from "react";

const messages: CSSProperties = {
    width: "100%",
    background: "#F0F2F5",
  };

  const sendPannel: CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: "0px",
    width: "calc(100% - 340px)",
    height: "30px",
    background: "lightgray",
    borderTop: "gray 4px",
    // borderRadius: "20px",
    padding: "20px",
  };

  const messageIncomeCard: CSSProperties = {
    width: "calc(100% - 40px)",
    height: "60px",
    // background: "white",
    margin: "10px 0px 0px 10px",
    display: "flex",
    // alignItems: "center",
  };

  const leftCard: CSSProperties = {
    height: "100%",
    width: "50%",
    display: "flex",
    alignItems: "center",
    paddingLeft: "20px",
    borderRadius: "20px",
    backgroundColor: "white",
  };

  const messageOutgoingCard: CSSProperties = {
    width: "calc(100% - 40px)",
    height: "60px",
    margin: "10px 0px 0px 10px",
    borderRadius: "20px",
    display: "flex",
    justifyContent: "end",
  };

  const rightCard: CSSProperties = {
    height: "100%",
    width: "50%",
    display: "flex",
    alignItems: "center",
    paddingRight: "20px",
    borderRadius: "20px",
    justifyContent: "end",
    backgroundColor: "white",
  };

  const button: CSSProperties = {
    backgroundColor: "#00A884",
  };
  const chatList: CSSProperties = {
    height: "calc(100vh - 80px)",
    overflowY: "scroll",
  };

  export {messages, sendPannel, messageIncomeCard, leftCard, messageOutgoingCard, rightCard, button, chatList}