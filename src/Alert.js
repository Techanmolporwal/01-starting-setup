import React from 'react'

function Alert(props){
    let capatilize=(word)=>{
        let lower=word.toLowerCase()
        return lower.charAt(0).toUpperCase()+lower.slice(1)
    }
    return(
        props.alert &&
        <div>
        <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
           <strong>{capatilize(props.alert.type)}</strong>: {props.alert.msg}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        </div>
    )
}

export default Alert