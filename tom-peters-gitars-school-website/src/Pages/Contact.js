import Tile from "../Components/Tile";
import img from "../images/background.jpg";
import "./Contact.css";
import { GmailIcon, HouseIcon, PhoneIcon } from "../Components/ContactIcons";
import Gmap from "../images/gmap.png"

import StoreFront from "../images/storefront.png"

export default function Contact() {
  return (
    <>
        <img className="storefront" src={StoreFront} alt="storefront"/>
        <PhoneIcon/>
        <HouseIcon/>
        <GmailIcon/>

        <a href="https://www.google.com/maps/place/Tom+Peters+Guitar+School/@41.6075137,-88.0489622,16.25z/data=!4m5!3m4!1s0x880e5d02161edbd9:0xc77c92cb94665c17!8m2!3d41.6076753!4d-88.0459558">
          <img className="gmap" src={Gmap} alt="map"/>          
        </a>

        
    </>
  );
}
