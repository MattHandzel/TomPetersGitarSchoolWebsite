import "./About.css"
import OLD_PERSON_IMAGE from "../images/oldMusicianStockImage.webp"

export default function About(){
  return (
    <div className="aboutPage">
      <h1 className="aboutPage">About</h1>
      <img className="aboutPage" src={OLD_PERSON_IMAGE} alt=""/>
      Tom began teaching guitar in 1973 at the highly acclaimed Chicago School of Music, where he studied under the guidance of Joe Rumoro Sr., one of the leading guitar players in the city.
 
      Tom had an early start in musicoldMusicianStockImage.webpular guitar:  Blues, Jazz, Rock, Alternative, Metal, and Classical, concentrating on developing musical knowledge, reading skills, technique, music theory, and improvisation.  He tailors his lessons to fit each individual's wants & needs
    </div>
  )
}