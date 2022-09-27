import React,{useState} from 'react'

function TextForm(props){
    const [text,setText]=useState("")
    function changeText(){
        let UpperText=text.toUpperCase();
        setText(UpperText)
        props.showAlert("Changed to Upper Case","success")
       
    }
    function changeToLower(){
        let lowerText=text.toLowerCase();
        setText(lowerText);
        props.showAlert("Changed to Lower Case","success")
    }
    function handleOnChnage(event){
        setText("")
        setText(event.target.value)
        
    }

    function handleOnCapital(event){
       let ch=text.split(" ")
       let chn;
    function top(ch){
        return ch.map(element=>{
            return  element.charAt(0).toUpperCase()+element.slice(1)
           })
    }
    let ne=top(ch).toString()
    let ne2=ne.replaceAll(","," ")
    setText(ne2)
    props.showAlert("Changed First letter to capital","success")
    }
    

    function check(){
       setText("")
    }
   //split return array 

    return(
        <>
        <div className="container" style={{color:props.mode==='dark'?'white':'black'}} >
        <h1>{props.heading}</h1>
        <textarea onChange={handleOnChnage} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} onClick={check} value={text} heading="Enter The text Below" className="form-control"  rows="8"></textarea>
        <button onClick={changeText} className="btn btn-primary mx-2 my-3">Convert TO Uppercase</button>
        <button onClick={changeToLower} className="btn btn-primary mx-2">Convert TO Lowercase</button>
        <button onClick={handleOnCapital} className="btn btn-primary mx-2">Capatilized first letter</button>
        </div>
        <div className="container" style={{color:props.mode==='dark'?'white':'black'}} >
            <h1>your Text Summary</h1>
            <p>{text.split(" ").length} word, {text.length} characters</p>
            <p>{0.008*text.split(" ").length} minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter somethig to preview "}</p>
        </div>

</>
    )
}

export default TextForm