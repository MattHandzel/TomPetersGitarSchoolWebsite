import Tile from "../Components/Tile";
import img from "../images/background.jpg";
import "./Contact.css";
import { GmailIcon, HouseIcon, PhoneIcon } from "../Components/ContactIcons";

export default function Contact() {
  return (
    <>
      <h1>Contact</h1>
      <div className="contactPage">
        <Tile
          backgroundColor="white"
          img={img}
          text={
            "We work with Chocolate Shoppe Ice Cream from Wisconsin to provide a premium cream experience in Illinois."
          }
          textAlign="right"
        />
        <PhoneIcon/>
        <HouseIcon/>
        <GmailIcon/>

      </div>
    </>
  );
}
