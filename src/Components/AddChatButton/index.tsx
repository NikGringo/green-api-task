import { useContext, useRef, useState } from "react";
import Button from "@mui/material/Button";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import contextData from "../../Context/context";
import { Add } from "@mui/icons-material";
import {buttonStyle} from './styles'

const AddChatDialog = ({ addChat }: { addChat?: any }) => {
  let { onAddChat } = useContext(contextData);
  const [open, setOpen] = useState(false);
  const [isValid, setValid] = useState(true);
  const ref = useRef<any>(undefined);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onOK = () => {
    let phone = ref.current.value;
    if (/^\d{11,12}$/.test(phone)) {
      onAddChat(phone);
      addChat([{ number: phone }]);
      setOpen(false);
    }
    
  };
  
  const onInput = (e: any) => {
    setValid(!/^\d{11,12}$/.test(ref.current.value));
  };

  return (
    <>
      <Button
        variant="contained"
        startIcon={<Add />}
        style={buttonStyle}
        onClick={handleClickOpen}
      >
        Создать беседу
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Создание чата</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Введите номер телефона чтобы начать беседу. Телефон должен содержать
            код страны и номер, без пробелов и других знаков. Например:
            +7(999) 333-22-11 необходимо записать как 79993332211
          </DialogContentText>
          <TextField
            inputRef={ref}
            autoFocus
            margin="dense"
            id="name"
            label="Телефон"
            type="text"
            fullWidth
            variant="standard"
            onInput={onInput}
            error={isValid}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onOK}>ОК</Button>
          <Button onClick={handleClose}>Отмена</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddChatDialog;
