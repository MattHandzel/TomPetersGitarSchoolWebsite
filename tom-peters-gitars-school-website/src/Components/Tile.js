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
          marginLeft: props.align == "left" ? "25%" : "0px",
          justifyContent: props.align,
          objectFit: "contain",
          maxWidth: "400px",
          maxHeight: "275px",
          width: "auto",
          height: "auto",
          // borderColor: props.backgroundColor === "var(--custom-blue)" ? "" : "var(--custom-blue)",
        }}
        width="100%"
      />
    </>
  );
}

export default function Tile(props) {
  return (
    <>
      <div
        className="tileContainer"
        style={{ backgroundColor: props.backgroundColor }}
      >
        {props.textAlign === "right" ? (
          <PlaceImage backgroundColor={props.backgroundColor} img={props.img} align={opposite(props.textAlign)} />
        ) : null}
        <div className="tileContent">
          <div
            className="tileText"
            style={{
              justifyContent: props.textAlign,
              float: props.textAlign,
              marginLeft: props.textAlign === "left" ? 0 : "10%",
              marginRight: props.textAlign === "right" ? 0 : "10%",
              paddingRight: props.textAlign === "right" ? "25%" : 0,
              marginTop: "2%",
              marginBottom: "1%",
              whiteSpace: "initial",
            }}
          >
            {props.text}
          </div>

          {props.textAlign === "left" ? (
            <PlaceImage backgroundColor={props.backgroundColor} img={props.img} align={opposite(props.textAlign)} />
          ) : null}
        </div>
      </div>
    </>
  );
}
