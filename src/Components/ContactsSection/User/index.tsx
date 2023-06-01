import { CSSProperties, useContext, useEffect } from "react";
import contextData from "../../../Context/context";
import { Button } from "@mui/material";

const User = () => {
  let { onLogOut, user } = useContext(contextData);
  const container: CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
    height: "60px",
    background: "#F0F2F5",
  };
  const buttonStyle: CSSProperties = {
    color: "#00A884",
  };

  return (
    <div style={container}>
      <h4>Вы: {user.phone}</h4>
      <Button style={buttonStyle} onClick={onLogOut}>
        Выход
      </Button>
    </div>
  );
};
export default User;
