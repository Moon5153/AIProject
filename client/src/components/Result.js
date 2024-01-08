import React, { useEffect } from "react";
import { useLocation, useHistory, Link} from "react-router-dom";
import './style.css'

function Result() {
  const location = useLocation();
  const history = useHistory();

  const data=location.state?.data;
  const result=location.state?.result;

  useEffect(()=>{
    if(!data) {
      history.push('/error');
    }
  });
  
  return (
    <div className="container mt-5 p-3 shadow rounded bg-white">
      <h1 className="text-center">Result</h1>
      <h3>Prediction: {result === 1 ? 'recurrence-events' : 'no-recurrence-events'}</h3>
      <p>From the provided values there is evidence that the patient's cancer <b>{result === 1 ? 'will' : 'will not'} </b>reoccur.</p>
      <fieldset>
      <table className="table">
        <thead>
          <tr>
            <th>Feature</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          { data &&
            Object.entries(data).map(([key, value]) => (
              <tr key={key}>
                <td>{key}</td>
                <td>{value}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <Link to="/"><button className="btn btn-primary">Predict Again</button></Link>
      </fieldset>
      <div className="margin"></div>
      <footer class="text-center">
          <p>&copy; Risk Assessment - Group 3: Najmun Nahar, Jai Patel. All Rights Reserved</p>
        </footer>
    </div>
  );
}

export default Result;