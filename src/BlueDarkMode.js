// import react  from "react";
function  BlueDarkMode(props){
    return(
        <div>
             <div className={`form-check form-switch text-${props.mode==="light"?'blue':'light'}`}>
                <input onClick={props.onClick} class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label  class="form-check-label" htmlfor="flexSwitchCheckDefault">BlueDark Mode</label>
            </div>
        </div>
    )
}

export default BlueDarkMode