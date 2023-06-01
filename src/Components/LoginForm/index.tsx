import { useContext, useRef } from "react";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import contextData from "../../Context/context";
import {container, header, id, key, footer} from './styles'

const LoginForm = () => {
  let { onLogIn } = useContext(contextData);
  const idInstanceRef = useRef<any>(undefined);
  const apiTockenInstanceRef = useRef<any>(undefined);

  const login = () => {
    if( idInstanceRef?.current?.value && idInstanceRef?.current?.value)
    onLogIn(idInstanceRef?.current?.value, apiTockenInstanceRef?.current?.value);
  };

  return (
    <div style={container}>
      <div style={header}>
        <h2>Вход</h2>
      </div>
      <div style={id}>
        <TextField
          id="outlined-basic"
          style={{ width: "90%" }}
          label="idInstance"
          variant="outlined"
          inputRef={idInstanceRef}
          required
        />
      </div>
      <div style={key}>
        <TextField
          id="outlined-basic"
          style={{ width: "90%" }}
          label="apiTockenInstance"
          variant="outlined"
          inputRef={apiTockenInstanceRef}
          required
        />
      </div>
      <div style={footer}>
        <Button
          variant="contained"
          style={{ backgroundColor: "#00A884" }}
          onClick={login}
        >
          Войти
        </Button>
      </div>
    </div>
  );
};

export default LoginForm;
