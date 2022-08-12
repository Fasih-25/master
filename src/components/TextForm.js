import React, {useState} from 'react'

export default function TextForm(props) {
    if(props.mode === 'dark'){
        var eMode = 'light';
      }
      else
      {
         eMode = 'dark';
      }
    
    const handleupClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text converted to UpperCase Successfully ","success");
    }
    const handleloClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text converted to LowerCase Successfully ","success");
    }
    const handleclearClick = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text Clear  ","success");
    }
    const handlereverseClick = () => {
        let newText =[...text].reverse().join("");;
        setText(newText);
        props.showAlert("Text reversed Successfully ","success");
    }
    const handleCopy = () => {
        console.log("im copy");
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied","success");
        // let newText =[...text].reverse().join("");;
        // setText(newText);
    }
    const handleRemoveSpaces = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert(" Extra spaces removed ","success");
    }
    const handleOnchange = (event) => {
      setText(event.target.value);
    }
    const [text , setText] = useState ('');
 
 
    return (
     <>
        <div className={`container text-${eMode}`}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" style={{backgroundColor: props.mode==='dark'? '#5b5656' : 'white', color: props.mode==='dark'? 'white' : 'black' }} value={text} onChange={handleOnchange} rows="6"></textarea>
            </div>
            <button className="btn btn-primary my-1 mx-1" onClick={handleupClick}>Convert to Uppercase</button>
            <button className="btn btn-primary my-1 mx-1" onClick={handleloClick}>Convert to Lowercase</button>
            <button className="btn btn-primary my-1 mx-1" onClick={handleclearClick}>Clear</button>
            <button className="btn btn-primary my-1 mx-1" onClick={handlereverseClick}> Reverse text</button>
            <button className="btn btn-primary my-1 mx-1" onClick={handleCopy}> Copy text</button>
            <button className="btn btn-primary my-1 mx-1" onClick={handleRemoveSpaces}> Remove Extra Spaces</button>
        </div>
        <div className={`container text-${eMode} my-2`}>
            <h2>Your Text Summary</h2>
            <p>{text.length===0 ? 0 : text.split(" ") ? text.split(" ").length  : 0  } WORDS and {text.length} CHARACTERS</p>
            <p>{0.008 * text.split(" ").length } minutes reading</p>
            <h3>Preview</h3>
            <p>{text.length>0 ? text : "Enter something above to preview here"}</p>
        </div>
    </>
  )
}
