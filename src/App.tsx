import "./App.css";
import LoginForm from "./Components/LoginForm";
import { useEffect, useState } from "react";
import userModel from "./Models/User";
import Main from "./Pages/Main";
import contextData from "./Context/context";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

function App() {
  const [context, setContext] = useState<any>({ user: undefined });
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const ErrorDialog = () => {
    return (
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Ошибка входа</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Вроверьте вводимые данные
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Закрыть</Button>
        </DialogActions>
      </Dialog>
    );
  };

  const onLogIn = async (
    idInstanceRef: string,
    apiTockenInstanceRef: string
  ) => {
    await userModel
      .getInfo(idInstanceRef, apiTockenInstanceRef)
      .then(async (y) => {
        await setContext((prev: any) => ({
          ...prev,
          user: {
            phone: y.data.wid.split("@")[0],
            idInstance: idInstanceRef,
            apiTokenInstance: apiTockenInstanceRef,
          },
        }));
      })
      .catch(() => setOpen(true));
  };

  const onLogOut = async () => {
    await setContext((prev: any) => ({
      ...prev,
      user: undefined,
    }));
  };

  const onAddChat = async (phone: any) => {
    await setContext((prev: any) => ({
      ...prev,
      chat: {
        chatId: `${phone}@c.us`,
      },
    }));
  };

  return (
    <div className="App">
      <contextData.Provider
        value={{ onLogOut, onLogIn, onAddChat, ...context }}
      >
        {context?.user ? <Main /> : <LoginForm />}
        <ErrorDialog />
      </contextData.Provider>
    </div>
  );
}

export default App;
