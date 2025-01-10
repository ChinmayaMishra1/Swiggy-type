
const StyleObj1 = {
    height: "200px",
    width: "300px",
    backgroundColor: "lightgray",
    margin: "10px",
    display: "flex",//most important
    justifyContent: "space-between",//most important
    flexWrap: "wrap",
 }

 const styleBody1 = {
    display: "flex",
    flexWrap: "wrap",
  };

const Shimmer = (props)=> {
    const {len}=props;
    return (
        <>
            <div className="shimmer-wrapper" style={styleBody1}>
                {Array(10).fill("").map((e,index)=>(<div key={index} className="shimmer-card" style={StyleObj1}></div>))}
            </div>
        </>
    )
}


export default Shimmer;
