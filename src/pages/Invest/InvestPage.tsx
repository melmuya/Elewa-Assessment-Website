import React from "react";
import IntroInvest from "./IntroInvest";
import SouthernInnovation from "./SouthernInnovation";
import ElewaHolding from "./ElewaHolding";
import ElewaCreativeHub from "./ElewaCreativeHub";
import ElewaInvest from "./ElewaInvest";
import Footer from "../../components/Footer"




const InvestPage: React.FC<{}> = () => {
    return ( 
        <>
            <IntroInvest />
            <SouthernInnovation />
            <ElewaHolding />
            <ElewaCreativeHub />
            <ElewaInvest />
            <Footer />
        </>
     );
}
 
export default InvestPage;