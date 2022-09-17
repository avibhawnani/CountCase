import React,{useState} from 'react'

import jsPDF from 'jspdf'
function MyForms(props) {
  const [text,setText] = useState("")

  const countWords = () => {
    return text.split(' ').filter(a => a.trim()).length;
  };
  // Function to convert to Uppercase
  const handleUpClick = () => {
      let newtext = text.toUpperCase()
      setText(newtext)
      props.showAlert("Converted to Upper Case!","success");
  }
  // Function to convert to lowercase
  const handleLoClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to Lower Case!","success");
}
// Function to change value of textarea
  const handleOnChange=(event)=>{
    // console.log("On change")
    setText(event.target.value)  
  }
  // Function to clear text
  const handleClearClick = (event)=>
  {
    setText("")
    props.showAlert("Text Cleared!","success");
  }
  // Function to copy
  const handleCopy =(event)=>{
    var myText = document.getElementById("mybox");
    myText.select()
    navigator.clipboard.writeText(myText.value)
    props.showAlert("Text Copied!","success");
    console.log("Text Copied!")
  }
  const handleExtraSpace=()=>{
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "));
    props.showAlert("Extra Space Cleared!","success");
    console.log("ExtraSpace clicked")
  }
  const handlePDF = ()=>{
      var doc = new jsPDF("p","pt","a4")
      props.showAlert("PDF Generated!","success");
      doc.html(document.querySelector("#mybox"),{
        callback: function(pdf){
          pdf.save("myPDF.pdf");
        }
      })
  }
  return (
    <>
        <div className='container' style={{color: props.mode==="dark"?"white":"#181818"}}>
        <h3>{props.heading}</h3>
        <div className="mb-3">
        <textarea className = "form-control"  value={text} style={{backgroundColor: props.mode==="light"?"#F1F1F1":"#181818" ,color: props.mode==="dark"?"white":"#181818" }} onChange={handleOnChange} id="mybox" rows="8" placeholder='Enter text here'> </textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-outline-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button disabled={text.length === 0} className="btn btn-outline-primary mx-1 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
        <button disabled={text.length === 0} className="btn btn-outline-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
        <button disabled={text.length === 0} className="btn btn-outline-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length === 0} className="btn btn-outline-primary mx-1 my-1" onClick={handleExtraSpace}>Remove Space</button>
        <button disabled={text.length === 0} className="btn btn-outline-primary mx-1 my-1" onClick={handlePDF}>Create PDF</button>
        </div>
        <div className="container my-3" style={{color: props.mode==="dark"?"white":"#181818"}}>
          <h3>Your Summary</h3>
          <p>{countWords()} words and {text.length} characters</p>
          <p>{0.008*countWords()} Minutes read</p>
          <h3>Preview</h3>
          <p>{text.length>0?text:"Write something to preview."}</p>
        </div>
    </>

  )
}

export default MyForms
