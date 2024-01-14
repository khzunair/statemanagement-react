import './TestComponent.css'
export const TestComponent = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row", padding: "100px" }}>
      <div style={{ backgroundColor: "navy", padding: "100px", }}>
        <p>COURSE</p>
        <h5 style={{fontWeight:"bold"}}>JAVASCRIPT<br /> FUNDAMENTALS</h5>
        <a href="#" style={{fontWeight:"bold"}}>View all chapters </a>
      </div>
      <div style={{ display:"flex",flexDirection:"row", backgroundColor: "white",textAlign:"left", color: "black", padding: "100px" }}>
  <div >
    chapter 4
  </div>
  <div style={{textAlign:"left"}} >
    <div className="container">
        <div className="bar html"></div>
    </div>

    <h5>Callback & Closures</h5>
    <button style={{textAlign:"right",color:"white",padding:"10px",border:"2px solid darkblue", borderRadius:"10px", }}>Continue</button>
  </div>

</div>

    </div>
  );
};
