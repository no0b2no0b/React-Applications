import React, {useState} from "react";
//Import hooks from react'useState'

export default function TextForm(props) {
  const handleUpClick=()=>{
    // console.log("Uppercase was clicked" + text)
    let newText = text.toUpperCase()
    setText(newText)
  }
  const handleDownClick=()=>{
    let newText = text.toLowerCase()
    setText(newText)
  }
  const handleClearClick=()=>{
    let newText = ""
    setText(newText)
  }
  const handleOnChange=(event)=>{
    // console.log("On  Change")
    setText(event.target.value)
  }
  const [text, setText] = useState('')
  
  //if we want to change text then we have to use function
  // setText("asdfghjkl") 
  return (
    <>
    <div className="container">
      {/* <h1>{props.heading}</h1> */}
      <h1>Enter the Text to analyze below </h1>
      <div className="mb-3">
        {/* <label for="myText" className="form-label">
          Example textarea
        </label> */}
        <textarea className="form-control" value = {text} onChange={handleOnChange} id="myText" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-3" onClick={handleDownClick}>Convert to Lowercase</button>
      <button className="btn btn-primary my-3" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-2">
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} </p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>

    </>
  );
}
