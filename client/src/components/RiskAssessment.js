import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import './style.css'

const age = ['20-29', '30-39', '40-49', '50-59', '60-69', '70-79',''];
const menopause = ['ge40', 'lt40', 'premeno'];
const tumorSize = ['0-4','5-9', '10-14', '15-19', '20-24', '25-29', '30-34', '35-39', '40-44', '45-49', '50-54'];
const invNodes  = ['0-2', '3-5', '6-8', '9-11', '12-14', '15-17', '24-26'];
const nodeCaps = ['yes', 'no'];
const degMalig  = ['1', '2', '3'];
const breast  = ['left', 'right'];
const breastQuad = ['central', 'left_low', 'left_up', 'right_low','right_up'];
const irradiat = ['yes', 'no'];

function RiskAssessment() {
  const history = useHistory();
  const [data, setData] = useState({
    'age': `'${age[0]}'`,
    'menopause': `'${menopause[0]}'`,
    'tumor-size': `'${tumorSize[0]}'`,
    'inv-nodes': `'${invNodes[0]}'`,
    'node-caps': `'${nodeCaps[0]}'`,
    'deg-malig': `'${degMalig[0]}'`,
    'breast': `'${breast[0]}'`,
    'breast-quad': `'${breastQuad[0]}'`,
    'irradiat': `'${irradiat[0]}'`
  })
  const [showLoading, setShowLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowLoading(true);

    const fetchData = async () => {
      try {
        const result = await axios.post('http://localhost:12345/predict', data)
        if (result?.data?.prediction) {
          const prediction = JSON.parse(result.data.prediction);
          setShowLoading(false)
          history.push({
            pathname: '/result',
            state: {
              data: data,
              result: prediction[0]
            }
          })
        }
      } catch {
        console.log('error in fetching data')
        history.push({
          pathname: '/error'
        })
      }
    };  
    fetchData();
  }

  return (
    <div className="container mt-5 p-3 shadow rounded bg-white">
      <h1 className="text-center">Risk Assessment - Cancer</h1>
      <h5 className="text-center">Please enter the patient details</h5>
      <br></br>
      <form onSubmit={(e)=> handleSubmit(e)}>
        <fieldset>
        {/* age */}
        <div className="form-group row">
          <label className='col-sm-4 col-form-label'>Age</label>
          <div className='col-sm-8'>
            <select className="form-control" onChange={(e) => setData({...data, "age": `'${e.target.value}'`})}>
              {
                age.map((item) => <option value={item} key={item}>{item}</option>)
              }
            </select>
          </div>
        </div>

        {/* menopause */}
        <div className="form-group row">
          <label className='col-sm-4 col-form-label'>Menopause</label>
          <div className='col-sm-8'>
            <select className="form-control" onChange={(e) => setData({...data, "menopause": `'${e.target.value}'`})}>
              {
                menopause.map((item) => <option value={item} key={item}>{item}</option>)
              }
            </select>
          </div>
        </div>

        {/* tumor-size */}
        <div className="form-group row">
          <label className='col-sm-4 col-form-label'>Tumor-size</label>
          <div className='col-sm-8'>
            <select className="form-control" onChange={(e) => setData({...data, "tumor-size": `'${e.target.value}'`})}>
              {
                tumorSize.map((item) => <option value={item} key={item}>{item}</option>)
              }
            </select>
          </div>
        </div>

        {/* inv-nodes */}
        <div className="form-group row">
          <label className='col-sm-4 col-form-label'>Inv-nodes</label>
          <div className='col-sm-8'>
            <select className="form-control" onChange={(e) => setData({...data, "inv-nodes": `'${e.target.value}'`})}>
              {
                invNodes.map((item) => <option value={item} key={item}>{item}</option>)
              }
            </select>
          </div>
        </div>

        {/* node-caps */}
        <div className="form-group row">
          <label className='col-sm-4 col-form-label'>Node-caps</label>
          <div className='ml-1 align-self-center col-sm-8 row'>
            {
              nodeCaps.map((value, index) =>
                <div className="form-check col-sm-3" key={index}>
                  <input className="form-check-input" type="radio" name="nodeCaps" value={value} defaultChecked={data['node-caps'] === `'${value}'`} onChange={(e) => setData({...data, "node-caps": `'${e.target.value}'`})}/>
                  <label className="form-check-label">{value}</label>
                </div>      
              )
            }
          </div>
        </div>

        {/* deg-malig */}
        <div className="form-group row">
          <label className='col-sm-4 col-form-label'>Deg-malig</label>
          <div className='col-sm-8'>
            <select className="form-control" onChange={(e) => setData({...data, "deg-malig": `'${e.target.value}'`})}>
              {
                degMalig.map((item) => <option value={item} key={item}>{item}</option>)
              }
            </select>
          </div>
        </div>

        {/* breast */}
        <div className="form-group row">
          <label className='col-sm-4 col-form-label'>Breast</label>
          <div className='ml-1 align-self-center col-sm-8 row'>
            {
              breast.map((value, index) => 
                <div className="form-check col-sm-3" key={index}>
                  <input className="form-check-input" type="radio" name="breast" value={value} defaultChecked={data.breast === `'${value}'`} onChange={(e) => setData({...data, "breast": `'${e.target.value}'`})}/>
                  <label className="form-check-label">{value}</label>
                </div>
              )
            }
          </div>
        </div>

        {/* breast-quad */}
        <div className="form-group row">
          <label className='col-sm-4 col-form-label'>Breast-quad</label>
          <div className='col-sm-8'>
            <select className="form-control" onChange={(e) => setData({...data, "breast-quad": `'${e.target.value}'`})}>
              {
                breastQuad.map((item) => <option value={item} key={item}>{item}</option>)
              }
            </select>
          </div>
        </div>

        {/* irradiat */}
        <div className="form-group row">
          <label className='col-sm-4 col-form-label'>Irradiat</label>
          <div className='ml-1 align-self-center col-sm-8 row'>
            {
              irradiat.map((value, index) =>
                <div className="form-check col-sm-3" key={index}>
                  <input className="form-check-input" type="radio" name="irradiat" value={value} defaultChecked={data.irradiat === `'${value}'`} onChange={(e) => setData({...data, "irradiat": `'${e.target.value}'`})}/>
                  <label className="form-check-label">{value}</label>
                </div>      
              )
            }
          </div>
        </div>
        
        {
          !showLoading ? 
            (<button type="submit" className="btn btn-primary">Predict</button>)
            :(
              <button className="btn btn-primary" type="button" disabled>
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Loading...
              </button>
            )
        }
        </fieldset>
      </form>
      <div className="margin"></div>
      <footer class="text-center">
          <p>&copy; Risk Assessment - Group 3: Najmun Nahar, Jai Patel. All Rights Reserved</p>
        </footer>
    </div>
  )
}
export default RiskAssessment;
