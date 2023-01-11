import React ,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Tooltip from 'react-bootstrap/Tooltip';
import { ClickAwayListener } from '@mui/base';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCirclePlay} from '@fortawesome/free-regular-svg-icons';
import { faEllipsis, faPlus } from '@fortawesome/free-solid-svg-icons';
import Logo from '../play.png';
import _ from 'lodash'; 
const Response = () => {
    const [show, setShow] = useState(false);
    const closeTooltip = (event) => { 
        let tooltip = event.target;
        let isClickedOnTooltip;
        if (show) { 
            for (var i = 0; i < 10; i++) { 

                if (['tooltip-inner', 'play', 'response'].includes(_.get(tooltip,"classList[0]"))) { 
                    isClickedOnTooltip = true
                    i = 10;
                } 
                if (tooltip.parentElement) { 
                    tooltip =tooltip.parentElement 
                }
            }
        }
    !isClickedOnTooltip && setShow(false)
    }

    return (
        <OverlayTrigger show={show} overlay={(props) => (
            <Tooltip {...props} id="tooltip_component" >
                    <p className='play'>
                        <button className='btn tooltip_btns' type="button"><img src={Logo} /></button>
                        Play Original Response
                    
                    </p>
                    <p className='response'>
                        <button className='btn tooltip_btns' type="button"><FontAwesomeIcon className='icon-plus' icon={faPlus} style={{"color":"#17B2FF"}} /></button>
                        &nbsp; Save as New Response
                    </p>
            </Tooltip>
            )} placement = "bottom" >
            
            <span>
            <ClickAwayListener onClickAway={(e) => { closeTooltip(e) }}>
                <button className='btn' type="button" onClick={() => setShow(!show)} >
                    <FontAwesomeIcon  icon={faEllipsis} />
                </button>
            </ClickAwayListener>
            </span>
            
        </OverlayTrigger>
  )
}

export default Response;
