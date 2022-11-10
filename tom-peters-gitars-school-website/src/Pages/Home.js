import BACKGROUND_IMG from '../images/background.jpg'

import "./Home.css"

export default function Home(){
  return (
    <div className="homeNav">
      <img src={BACKGROUND_IMG} alt="" className="backgroundImage"/>
      <h1 className="homeNav">Tom Peters Guitar School</h1>
      <a href="./" className="navButton home">Home</a>
      <a href="./photos" className="navButton photos">Photos</a>
      <a href="./about" className="navButton about">About</a>
      <a href="./contact" className="navButton contact">Contact</a>
    </div>
  )
}