import { TextField, Button } from "@mui/material";
import { useContext, useRef, useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import messageModel from "../../Models/Message";
import contextData from "../../Context/context";
import {
  messages,
  sendPannel,
  messageIncomeCard,
  leftCard,
  messageOutgoingCard,
  rightCard,
  button,
  chatList,
} from "./styles";

const MessagesPanel = ({ isDialogOpen }: { isDialogOpen: boolean }) => {
  const { user, chat: chatContext } = useContext(contextData);
  const [chat, setChat] = useState<any>([]);
  let ref = useRef<any>(undefined);

  const onSend = async () => {
    if (ref.current.value) {
      messageModel
        .send(user, chatContext.chatId, ref.current.value)
        .then((x) => {
          setChat((prev: any) => [
            ...prev,
            {
              type: "outcoming",
              text: ref.current.value,
              timeStamp: Date.now(),
            },
          ]);
          ref.current.value = "";
        });
    }
  };

  const onRecive = async () => {
    await messageModel
      .recive(user)
      .then(async (x: any) => {
        if (x.data) {
          setChat((prev: any) =>
            Array.from(
              new Set(
                [
                  ...prev,
                  {
                    type: "incoming",
                    text: x?.data?.body?.messageData?.extendedTextMessageData
                      ?.text,
                  },
                ].map((x) => JSON.stringify(x))
              )
            ).map((x) => JSON.parse(x))
          );
          await messageModel.delete(user, x.data.receiptId).catch((x) => {
            return false;
          });
        }
      })
      .catch((x) => {
        return false;
      });
    return true;
  };

  (async () => {
    while (true) {
      await onRecive();
    }
  })();

  const MessageIncome = ({ text }: { text?: string }) => {
    return (
      <div style={messageIncomeCard}>
        <div style={leftCard}>{text}</div>
      </div>
    );
  };

  const MessageOutgoing = ({ text }: { text?: string }) => {
    return (
      <div style={messageOutgoingCard}>
        <div style={rightCard}>{text}</div>
      </div>
    );
  };

  return (
    <>
      <div
        style={{
          ...messages,
          height: `${isDialogOpen ? "calc(100vh - 30px)" : "100vh"}`,
        }}
      >
        <div style={chatList}>
          {chat &&
            chat.map((x: any) =>
              x.type === "incoming" ? (
                <MessageIncome text={x.text} />
              ) : (
                <MessageOutgoing text={x.text} />
              )
            )}
        </div>

        {isDialogOpen && (
          <div style={sendPannel}>
            <TextField
              inputRef={ref}
              autoFocus
              margin="dense"
              id="name"
              label="Сообщение"
              type="text"
              fullWidth
              variant="standard"
            />
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              onClick={onSend}
              style={button}
            ></Button>
          </div>
        )}
      </div>
    </>
  );
};
export default MessagesPanel;
