// // /**
// //  *
// //  * parcel does -
// //  * created a server
// //  * HMR- Hot Module Replacement (Reloading)  -> it will reload when ever you save your file  (done by parcel)
// //  * watching - this HMR is done by File Watcher algorithm - written in C++
// //  * Bundling
// //  * Minify
// //  * Clean our code
// //  * Dev and Production build
// //  * Super fast build algorithm
// //  * most time taken for loading in the website - is image and parcel also does Image Optimization
// //  * Cacheing while development
// //  * Compression
// //  * Compatible with older version of browsers
// //  * HTTPS on dev
// //  * manages port number too
// //  * Consistent Hashing Algorithm
// //  * Zero Config
// //  * Tree Shaking -  removing unwanted code  how ? if we import a library and this library brings many functions to our code but we have to use only
// //  * some of them  -> parcel does is that it will remove all unused code
// //  *
// //  *
// //  *
// //  * Transitive Dependencies where your codebase depends on some dependencies and those dependencies further have their own dependencies and so on
// //  * and this Transitive Dependencies is managed by Package manager
// //  */

// // import React from "react";
// // import ReactDOM from "react-dom/client"

// // const heading = React.createElement(
// // "h1",
// // {
// //     id: "heading1"
// // },
// // "Namaste React he he ",
// // React.createElement("i", {}, "name"),
// // ". Welcome"
// // );

// // const heading2 = React.createElement(
// // "h1",
// // {
// //     id: "heading2"
// // },
// // "Namaste React2 ",
// // ". Welcome"
// // );

// // //if you want to get both of the h1 tags to the root, you can't directly render them rather wrap in div and render it

// // const container = React.createElement(
// // "div",
// // {
// //     id: "container"
// // },
// // [heading,heading2]
// // );

// // //so a react element is a js object

// // console.log(heading);

// // const root = ReactDOM.createRoot(document.getElementById("root"));

// // root.render(container);

// // import {createElement} from "react"; // we can also use import {createElement} from "react"  and later on use createElement rather than using React.createElement
// // import ReactDOM from "react-dom/client"

// // const heading = createElement(
// // "h1",
// // {
// //     id: "heading1", //include here key as later used as an array in the div as react understands key and not id
// //     key: "h1"
// // },
// // "Namaste React he he ",
// // createElement("i", {}, "name"),//see here we can add anything here as these all are sibblings
// // ". Welcome"
// // );

// // const heading2 = createElement(
// // "h1",
// // {
// //     id: "heading2",
// //     key:"h2"
// // },
// // "Namaste React2 ",
// // ". Welcome"
// // );

// // //if you want to get both of the h1 tags to the root, you can't directly render them rather wrap in div and render it

// // const container = createElement(
// // "div",
// // {
// //     id: "container"
// // },
// // [heading,heading2]
// // );

// // //so a react element is a js object

// // console.log(heading);

// // const root = ReactDOM.createRoot(document.getElementById("root"));

// // root.render(container);

// import { createElement } from "react"; // we can also use import {createElement} from "react"  and later on use createElement rather than using React.createElement
// import ReactDOM from "react-dom/client";

// // React.createElement => Object => HTML(DOM)

// const heading = createElement(
//   "h1",
//   {
//     id: "heading1", //include here key as later used as an array in the div as react understands key and not id
//     key: "h1",
//   },
//   "Namaste React he he ",
//   createElement("i", {}, "name"),
//   ". Welcome"
// );

// //using jsx
// // jsx => React.createElement (upto this is done by babel) => Object => HTML(DOM)

// const Heading1 = () =>
//   ((
//     <h1>Hello EveryOne</h1> //important is the comma (,)
//   ),
//   (
//     <ul>
//       <li>Item 1</li>
//       <li>Item 2</li>
//     </ul>
//   ));

// // this is the jsx expression
// // (
// //     <h1>Hello EveryOne</h1>,//important is the comma (,)
// //     <ul>
// //         <li>Item 1</li>
// //         <li>Item 2</li>
// //     </ul>
// // )

// //so a react element is a js object

// // React Component
// // - Functional - New
// // - Class based component - Old

// const HeaderComponent = () => {
//   //functional component or any component name starts with capital letter  // convention and not mandatory
//   //you can also use small ones as the starting letter

//   const data = api.getData();

//   // if you want to use the react element here in the react component use the curly braces
//   // if you want to use the react element here in the react component use the a start and ending tag
//   //huge importance of capital letters of starting letter
//   return (
//       <div>
//           {/* <Heading1/>//one way is this else  */   /* here you can write any piece of js code see the example below */}
//           {1+3}
//           {data /* here the data you get through any api is very safe like any hacker can use his piece of code into the data partwhen fetching
//           from api but jsx is very safe and checks through the data  ie. sanitises it   */}
//           {/* using component inside component is called component composition   */}
//           {Heading1()}//another way is this ie. just call the function in the circly braces
//       <h1>Namaste react functional component</h1>
//       <h2>this is h2 tag</h2>
//     </div>
//   );
// };

// // //this is same as that of the above one
// // const HeaderComponent = () => (
// //   <div>
// //     <h1>Namaste react functional component</h1>
// //     <h2>this is h2 tag</h2>
// //   </div>
// // );

// /* soo
//     const ... = (
//         .....
//     ) this is a jsx code    react element

//     const ... = ()=> (
//         .....
//     ) this is a react component
// */

// console.log(HeaderComponent);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// // root.render(heading);// this is the way to render the react element
// root.render(<HeaderComponent/>);// this is the way to render the react component

// //can you also use jsx without using parcel?
// //yes but you have to use babel for that

// //what is babel -> transpiler/ compiler

// import { createElement } from "react";
import ReactDOM from "react-dom/client";
// //named import
// import {Header} from "./header.js";
// //default import
// import Footer from "./header.js";
//instead of all above you can write for this case as
// import Footer, {Header} from "./header"

// also do
import Header from "./components/Header"; //can't use the part which is exported by default
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; //importing the router from react-router-dom

////////////study VIRTUAL DOM and RECONSILATION /////////////////////  vid 5 2hr 30min

//in swiggy app there was a carousal ie. the sliding part
//now this sliding one can be present or not based on location and many different cases
//this was maintained when to show or not was called config driven UI

//   instead of <div></div> to make the parts into one parent we can also use <React.Fragment></React.Fragment> or simply <></> empty tags
//   React - one parent

//the styling part can be done in many ways  (we need to write div here not <></>)  1) style objects 2) class and writing in css part 3) using
//tailwind, bootstrap

//never create a component inside a component as it will be created everytime the parent component is rendered************
const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
      {/* <div>Hello</div> */}
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
  }
]);

console.log(AppLayout);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
