import { useState } from 'react';
import StripeContainer from './StripeContainer';

import "./StripeApp.css";



function MainFileStripe() {
  const [showItem, setShowItem] = useState(false)
  return (
    <div style = {{ paddingTop: "12%"}} className="MainfileStripe">
      <h1 style = {{textAlign: "center"}}> Fee Payment</h1>
      {showItem ? <StripeContainer/> : <> <h4 style = {{  marginLeft: "45%", paddingTop:"2%"}}>  Rs. 90,000.00</h4> 
      <button className = "stripebutton1" style = {{ width: "30%" , marginLeft: "35%"}} onClick={() => setShowItem(true)}>Submit Fee</button></>}
    </div>
  );
}

export default MainFileStripe;