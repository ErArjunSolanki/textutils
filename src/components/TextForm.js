import React, {useState} from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {
  const handleUpClick = () =>{
      //console.log('Uppercase was clicked  '+ text);
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert('Converted to Uppercase','success');
  } 
  const handleLowClick = () =>{
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert('Converted to Lowercase','danger');
  } 
  const handleClearClick = () =>{
      let newText = '';
      setText(newText);
      props.showAlert('Cleared text','info');
  } 
  const handleRandomTextColor = () =>{
      //let color = '#'+(Math.random() + 1).toString(36).substring(7);
      let colors = ['red','green','yellow','grey','cyan','pink','blue','black'];
      let color = colors[Math.floor(Math.random()*colors.length)];
      document.getElementById('myBox').style.color = color;
      props.showAlert('Color changed','warning');
  }
  
  const handleCopyText = () => {
    document.getElementById('myBox').select();
    navigator.clipboard.writeText(text);
    props.showAlert('Text Copied','primary');
  }
  
  const handleExtraSpace = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '));
    props.showAlert('Extra Space removed','secondary');
  }
  
  const handleOnChange = (event) =>{
    //console.log('Uonchange was clicked');
    setText(event.target.value);
  }  
  const [text,setText] = useState('Enter text here');
  // text = 'New Text'; //wrong way to change the state
  // setText('New Text');
  let wordCount = text.trim().length>0? text.trim().split(/[ ]+/).length : 0 

  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <label htmlFor="myBox" className="form-label">Example Textarea</label>
        <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'? props.colorCode : 'white', color: props.mode === 'dark'? 'white' : 'black' }} rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert To Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleRandomTextColor}>Random Text Color</button>
        <button className="btn btn-primary mx-2" onClick={handleCopyText}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Extra Space</button>
    </div>
    <div className="container my-3">
        <h1>Your text summary</h1>
        <p>{wordCount} words and {text.length} characters</p>
        <p>{0.008 * wordCount} Minutes read</p>
        <h2>Preview</h2>
        <p>{wordCount>0?text:'Please enter some text to preview'}</p>
    </div>
    </>

  )
}

TextForm.propTypes = {
    heading: PropTypes.string
}
