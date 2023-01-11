import React from 'react';
import '../App.css';
import Response from './Response';
import Logo from '../play.png';

const Result = () => {
    
    
  return (
    <div className='container'>
        <div className='result'>
            <ul>
                <li className='result-header'>PROMPT</li>
                <li className='result-header'>YOUR RESPONSE</li>
            </ul>
        </div>
        <div className='result1'>
            <ul>
                <li className='prompt'>Not interested</li>
                <div className='vl'></div>
                <li className='your-response'>
                    <button className='btn btns-circle' type="button"><img src={Logo} /></button> 
                    <Response />
                </li>
            </ul>
        </div>
        <div className='result2'>
            <ul>
                <li className='prompt'>Too Expensive</li>
                <div className='vl'></div>
                <li className='your-response'>
                    <button className='btn btns-circle' type="button"><img src={Logo} /></button> 
                    <Response />
                </li>
            </ul>
        </div>
        <div className='result2'>
            <ul>
                <li className='prompt'>Too Expensive</li>
                <div className='vl'></div>
                <li className='your-response'>
                    <button className='btn btns-circle'  type="button"><img src={Logo} /></button>
                    <Response />
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Result
