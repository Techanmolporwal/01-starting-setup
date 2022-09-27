// import react  from "react";
function  GreyDarkMode(props){
    return(
        <div>
             <div className={`form-check form-switch text-${props.mode==="light"?'dark':'light'}`}>
                <input onClick={props.onClick} class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label  class="form-check-label" htmlfor="flexSwitchCheckDefault">GrayDark Mode</label>
            </div>
        </div>
    )
}

export default GreyDarkMode