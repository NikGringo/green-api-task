import { CSSProperties, useState } from "react";
import ContactsSection from "../../Components/ContactsSection";
import MessagesSection from "../../Components/MessagesSection";

const Main = () => {
  const [isDialogOpen, setDialogOpen] = useState<boolean>(false);

  const container: CSSProperties = {
    display: "flex",
    width: "100vw",
    height: "100vh",
  };
  return (
    <>
      <div style={container}>
        <ContactsSection setDialogOpen={setDialogOpen}/>
        <MessagesSection isDialogOpen={isDialogOpen} />
      </div>
    </>
  );
};
export default Main;
