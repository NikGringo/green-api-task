import { CardActionArea } from "@mui/material";
import { container, avtr, info, infoNumber } from "./styles";

type ContactProps = {
  avatar?: any;
  number?: string;
  text?: string;
  dateStamp?: Date;
};

const ContactCard = ({ data }: { data: ContactProps[] }) => {
  return (
    <>
      {data.map((x) => (
        <CardActionArea>
          <div style={container} key={x.number}>
            {x.avatar ? x.avatar : <div style={avtr}></div>}
            <div style={info}>
              <div style={infoNumber}>{x.number}</div>
            </div>
          </div>
        </CardActionArea>
      ))}
    </>
  );
};
export default ContactCard;
