import React from "react";
import "./style.css";

var style = {
    backgroundColor:"rgb(255, 73, 73)",
    borderTop: "7px solid rgb(245, 7, 7)",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "80px",
    width: "100%",
}

var phantom = {
    display: 'block',
    padding: '20px',
    height: '60px',
    width: '100%',
  }
  
   //Function for the footer.
  function Footer({ children }) {
      return (
          <div>
              <div className="title"></div>
              <div style={phantom} />
              <div style={style}>&#169; by Ismael Rivera <a href="https://github.com/IsmaelRvra130" class="fab fa-github"> </a> 
                  { children }
              </div>
          </div>
      )
  }
  
  export default Footer