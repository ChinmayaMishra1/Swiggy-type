const stylecard = {
    // style: "border",
    // borderstyle: "outset",
    // border: "1px solid black",
    width: "300px",
    border: '2px solid red',
    padding: "10px",
    alignContent: "center",
    alignItems: 'center',
    margin: "10px",
    // display: "flex",
}
const imageCard ={
    width: "100%",
}

const stars = () =>(
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlDGr2mtPaZrinDAwjcyiegUd1LCzdM-W25Q&s" style={{width: "10px"}}/>
);
const RestaurantCard = (props) => {
  const {name,cuisines,cloudinaryImageId} = props;
  return (
        <div style={stylecard}>
            <img src={"https://media-assets.swiggy.com/"+cloudinaryImageId} style={imageCard}></img>
            <h3>{name}</h3>
            <h4>{cuisines?.join(" , ")}</h4>
            {/* <h4>{avgRating} {stars()} </h4> */}
        </div>
    )
  }

  export default RestaurantCard;