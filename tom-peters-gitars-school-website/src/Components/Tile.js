import "./Tile.css";

function opposite(text) {
  if (text === "right") return "left";
  if (text === "left") return "right";
}

function PlaceImage(props) {
  return (
    <>
      <img 
        src={props.img}
        style={{
          float: props.align,
          position: "relative",
          padding: 0,
          marginLeft: props.align == "left" ? "5vw" : "0px",
          marginRight: props.align == "right" ? "5vw" : "0px",
          marginTop: '5vh',
          justifyContent: props.align,
          objectFit: "contain",
          width: "auto",
          height: "35vh",
          // borderColor: props.backgroundColor === "var(--custom-blue)" ? "" : "var(--custom-blue)",
        }}
      />
    </>
  );
}

export default function Tile(props) {
  return (
    <>
      <div
        className="tileContainer"
        style={{ 
          backgroundColor: props.backgroundColor,
          height: "45vh" }}
      >
        {props.textAlign === "right" ? (
          <PlaceImage backgroundColor={props.backgroundColor} img={props.img} align={opposite(props.textAlign)} />
        ) : null}
          <span
            className="tileText"
            style={{
              display: "inline-block",
              padding: 0,
              marginTop: "22vh",
              marginLeft: props.textAlign === "left" ? "10%" : "10%",
              //marginRight: props.textAlign === "right" ? 0 : "10%",
              fontSize: "2vw"
            }}
          >
            {props.text}
          </span>

          {props.textAlign === "left" ? (
            <PlaceImage backgroundColor={props.backgroundColor} img={props.img} align={opposite(props.textAlign)} />
          ) : null}
      </div>
    </>
  );
}
