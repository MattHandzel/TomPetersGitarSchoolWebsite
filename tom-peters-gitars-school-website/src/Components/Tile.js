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
          marginLeft: props.align == "left" ? "7vw" : "0px",
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
        <div className="tileContent">
          <span
            className="tileText"
            style={{
              justifyContent: props.textAlign,
              float: props.textAlign,
              marginLeft: props.textAlign === "left" ? 0 : "10%",
              marginRight: props.textAlign === "right" ? 0 : "10%",
              // paddingRight: props.textAlign === "right" ? "25%" : 0,
              // marginTop: "2%",
              // marginBottom: "1%",
              // whiteSpace: "initial",
            }}
          >
            {props.text}
          </span>

          {props.textAlign === "left" ? (
            <PlaceImage backgroundColor={props.backgroundColor} img={props.img} align={opposite(props.textAlign)} />
          ) : null}
        </div>
      </div>
    </>
  );
}
