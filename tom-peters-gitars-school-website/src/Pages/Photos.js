import GUITARISTS_PHOTO from '../images/guitarists.jpg'
import MAT_GUITAR from '../images/mat_happy_base.jpg'
import Tile from "../Components/Tile"
import "./Photos.css"

export default function Photos(){
  return (
    <>
      <img className="headerPhoto" src={GUITARISTS_PHOTO}/>
      <h1 className="headerTitle">Photos</h1>
      <span className="explain">Some of our favourite photos of our guitarists practicing their craft.</span>
      <Tile
          backgroundColor="gray"
          img={MAT_GUITAR}
          text={
            "Matt playing some happy base lines."
          }
          textAlign="right"
        />
    </>
  )
}