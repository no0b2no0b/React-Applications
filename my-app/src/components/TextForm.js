import React, {useState} from "react";
//Import hooks from react'useState'

export default function TextForm(props) {
  const [text, setText] = useState('Enter text here')
  
  //if we want to change text then we have to use function
  // setText("asdfghjkl") 
  return (
    <div>
      {/* <h1>{props.heading}</h1> */}
      <h1>Enter the Text to analyze below </h1>
      <div className="mb-3">
        {/* <label for="myText" className="form-label">
          Example textarea
        </label> */}
        <textarea className="form-control" value = {text} id="myText" rows="8"></textarea>
      </div>
      <button className="btn btn-primary">Convert to Uppercase</button>
    </div>
  );
}
