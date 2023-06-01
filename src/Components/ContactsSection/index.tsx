import { CSSProperties, useEffect, useState } from "react";
import User from "./User";
import ContactCard from "./ContactCard";
import AddChatButton from "../AddChatButton";

const ContctsPanel = ({ setDialogOpen }: { setDialogOpen: (e: boolean) => void }) => {
  const [chatList, setChatList] = useState([]);

  useEffect(() => {
    if(chatList.length) setDialogOpen(true)
    else setDialogOpen(false)
  }, [chatList, setDialogOpen])

  const contacts: CSSProperties = {
    width: "300px",
    minWidth: "300px",
    height: "100%",
    background: "#FFFFFF",
  };

  return (
    <div style={contacts}>
      <User />
      <AddChatButton addChat={setChatList} />
      <ContactCard data={chatList} />
    </div>
  );
};
export default ContctsPanel;
