import React from "react";
import './style.css'

function Home() {

  return (
  <div>
    <div class="jumbotron">
        <div class="container">
        <h1 class="display-4">Welcome to Risk Assess</h1>
        <p>Welcome to RiskAssess!, a risk assessment system for medical institutions to generate risk assessments for their patients. RiskAssess started off as a company that formed strong relationships with medical institutions to help them generate their assessments with
            ease and maximum efficiency thus saving the organization's valuable time. Click below for Help.
        </p>
        <p><a class="btn btn-primary btn-lg" href="/help" role="button">Help &raquo;</a></p>
        </div>
    </div>
    <div class="container">

    <div class="row margin">
      <div class="col-md-4 box-container">
        <h2>About</h2>
        <p>This Project was developed as an academic project by the students of Centennial College. To Know more about us Click below.</p>
        <p><a class="btn btn-secondary" href="/about" role="button">About &raquo;</a></p>
      </div>
      <div class="col-md-4 box-container">
        <h2>How does it Work?</h2>
        <p>RiskAssess makes use of machine learning models that helps generate accurate risk assessments.</p>
        <p><a class="btn btn-secondary" href="/riskassess" role="button">Generate Assessment &raquo;</a></p>
      </div>
      <div class="col-md-4 box-container">
        <h2>Information</h2>
        <p>This Project uses the Breast Cancer Dataset to predict the occurence of Cancer in Patients. To Retreive the dataset click below.</p>
        <p><a class="btn btn-secondary" href="https://datahub.io/machine-learning/breast-cancer#python" target="_blank" rel="noreferrer" role="button">Retreive &raquo;</a></p>
      </div>
    </div>
  </div>
  <footer class="text-center">
          <p>&copy; Risk Assessment - Group 3: Najmun Nahar, Jai Patel. All Rights Reserved</p>
        </footer>
  </div>
  
  
  );
}

export default Home;