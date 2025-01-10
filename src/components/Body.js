import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";

const styleBody = {
  display: "flex",
  flexWrap: "wrap",
};

function filterData(searchText,restaurants){
  return restaurants.filter((restaurant)=>(
    restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  ))
};

//*******************the React Component rerenders only when the state changes and when the props change****************//

const Body = () => {
    //in js : const searchText = "Hellow" then in the bracket of useState use the term "Hellow"
    const [searchText,setSearchText] = useState("");//returns = [variable name, function to update variable] 


    //never create a state inside a if else or for loop condition as it might create inconsistency in the state****************
    const [allRestaurants,setAllRestaurants] = useState([]);

    const [activeRestaurants,setActiveRestaurants] = useState([]);

    useEffect(()=>{
      getRestaurants();
    },[]); // [] is the dependency array, if you want to run the useEffect only once then keep it empty (loads "after" the component renders), if you want to run it only when the state changes then keep the state in the array(it will also render initally)
//if there is no dependency array then it will run everytime the component is rendered****************
    async function getRestaurants(){
      const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.26426163063037&lng=82.98437621444464&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const data = await response.json();
      // const data = response;
      console.log(data);
      setAllRestaurants(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);//if data is not there then set it to an empty array
      setActiveRestaurants(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
      // console.log("Data Fetched");
    }

    // if(allRestaurants?.length && activeRestaurants?.length === 0){return <h1>Sahi se search kar</h1>}
    // console.log("Body Rendered");//this will be printed in the console first and then the useEffect will be printed(everytime it is changed) *********
  return (allRestaurants?.length === 0 && activeRestaurants?.length === 0)?  <Shimmer/> : (
    <>
      <div>
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);//this way you give the text(value) now in the box ie. e to the setSearchText which changes the searchText
          }}
        />
        <button className="search-btn"
        onClick={()=>{const data = filterData(searchText,allRestaurants);
          setActiveRestaurants(data);
        }}
      >Search</button>
      </div>
      <div style={styleBody}>
        {/* <div className="SearchBar" >
            <input type="text" placeholder="search..."></input>
            <button>Search</button>
        </div> */}
        {/* no key <<<<<<<<<<<<<<<  index key(use ONLY if you don't have anything) << unique key (best practice) */}
        {(activeRestaurants?.length === 0) && (<h1>Sahi se search kar</h1>)}
        {activeRestaurants?.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.info} key={restaurant?.info?.id} />
          );
        })}
        {/* <RestaurantCard {...Restaurantlist[0].info}/> */}
      </div>
    </>
  );
};

export default Body;



// "plugins": [ ["transform-remove-console", { "exclude": [ "error", "warn"] }] ]