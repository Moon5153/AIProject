import React from "react";
import './style.css'
function About() {

  const groupMembers= [
    {name: 'Najmun Nahar', studentNumber: 301160081},
    {name: 'Jai Patel', studentNumber: 301170222},
    {name: 'Abhishake Malhotra', studentNumber: 301177229},

  ]
  return (
    <div className="container width-500 mt-5 p-3 shadow rounded bg-white">
        <h1 className="text-center mb-3">About Us</h1>
        <fieldset>
        <div className="row">
          <h5 className="col-sm-3">Course:</h5>
          <p>COMP377-001: AI for Software Developers</p>
        </div>

        <div>
          <h5 className="text-center">Group Members:</h5>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Student ID</th>
              </tr>
            </thead>
            <tbody>
              {
                groupMembers.map((x) => 
                  <tr key={x.name}>
                    <td>{x.name}</td>
                    <td>{x.studentNumber}</td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>
        </fieldset>
        <footer class="text-center">
          <p>&copy; Risk Assessment - Group 3: Najmun Nahar, Jai Patel. All Rights Reserved</p>
        </footer>
    </div>
  );
}

export default About;