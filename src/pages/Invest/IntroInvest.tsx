import React from "react";
import NavBar from "../../components/NavBar";
import "./IntroInvest.css"


const IntroInvest: React.FC<{}> = () => {
    return ( 
        <div className="Intro">
            <NavBar />
            <div className="intro-text">
                <h4>Trade, not aid</h4>
                <h1>Southern innovations addressing global problems</h1>
            </div>
        </div>
     );
}
 
export default IntroInvest;