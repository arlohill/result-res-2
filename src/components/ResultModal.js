import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faQuoteLeft,faQuoteRight,faMinus} from '@fortawesome/free-solid-svg-icons';
import Result from './Result.js'
import 'bootstrap/dist/css/bootstrap.css';

const ResultModal = () => {
    const myStyle = {
        backgroundColor:"#f2f2f2",
        borderRadius:"10px",
        height:"220px"
      }
  return (
    <div className="text-center" style={{"marginTop":"300px"}}>
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#resultModal">
         Result
      </button>
      <div className="modal fade" id="resultModal" tabindex="-1" aria-labelledby="resultModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-6 result-model"  id="resultModalLabel">RESULTS</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className='container' id="result" style={myStyle}>
                <Result />
              </div>
            </div>
            
          </div>
       </div>
      </div>
    </div>
  )
}

export default ResultModal
