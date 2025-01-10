import { useState } from "react";
const StyleObj = {
    backgroundColor: "lightblue",
    padding: "20px",
    display: "flex",//most important
    justifyContent: "space-between",//most important
 }

 const UlStyle = {
    listStyle: "none",
    display: "flex",
    // margin: "10px",
    // justifyContent: "space-between"
 }

 const listStyle = {padding: "10px"};


 //dekha yahan agar aap directly export leekh dete ho before name then you have to do some mehnat in the app.js of curly braces
// export const Header = () => (
//     <div style={StyleObj}>
//         <img src="https://thefoodvilladubai.com/wp-content/uploads/2023/06/logo-dark.png" style={
//             {
//                 width: "100px",
//             }
//         }></img>
//         <ul style={UlStyle}>
//             <li style={listStyle}>
//                 <a href="/">Home</a>
//             </li>
//             <li style={listStyle}>About</li>
//             <li style={listStyle}>Contact</li>
//             <li style={listStyle}>Cart</li>
//         </ul>
//     </div>
// );


// const Footer = () => (
//     <div>
//         <h1>Footer</h1>
//     </div>
// );

// export default Footer;//if you write like this then you have to write less in the app.js ie. no curly braces
// // here using default, you can only export 1 thing



const Header = () => {
    const [loggedInUser,setloggedInUser]=useState(false);


    return <div style={StyleObj}>
        <img src="https://thefoodvilladubai.com/wp-content/uploads/2023/06/logo-dark.png" style={
            {
                width: "100px",
            }
        }></img>
        <ul style={UlStyle}>
            <li style={listStyle}>
                <a href="/">Home</a>
            </li>
            <li style={listStyle}>About</li>
            <li style={listStyle}>Contact</li>
            <li style={listStyle}>Cart</li>
        </ul>
        {loggedInUser ? <button onClick = {()=>setloggedInUser(false)}>Logout</button> : <button onClick = {()=>setloggedInUser(true)}>Sign In</button>}
    </div>
};

export default Header;

//in a { } you can write any js code  // wrong   you can write any js expression and not any js statement