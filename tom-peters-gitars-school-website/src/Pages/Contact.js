import Tile from "../Components/Tile"
import img from "../images/background.jpg"
export default function Contact(){
  return (
    <>
      <h1>Contact</h1>
      <Tile
          backgroundColor="white"
          img={img}
          text={
            "We work with Chocolate Shoppe Ice Cream from Wisconsin to provide a premium cream experience in Illinois."
          }
          textAlign="right"
        />
    </>
  )
}