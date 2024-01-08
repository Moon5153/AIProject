import React from "react";
import './style.css'
function Help() {


  return (
  <div>
    <form>
        <div class="text-center">
            <h1 class="display-5">How to go about RiskAssess?</h1>
            <p>Please find below the Steps for Users to go about the Risk Assessment System. Click to <a href="/about">Learn More</a></p><br></br>
        </div>
        <div class="container themed-container">1. Select Risk Assessment From the Navbar</div>
        <div class="container themed-container">2. Input the Patient's Details inside the Form</div>
        <div class="container themed-container">4. Click on Predict</div>
        <div class="container themed-container">5. Get Assessment Result</div>
    </form>
    <footer class="text-center">
        <p>&copy; Risk Assessment - Group 3: Najmun Nahar, Jai Patel. All Rights Reserved</p>
    </footer>
    
  </div>
  
  
  );
}

export default Help;