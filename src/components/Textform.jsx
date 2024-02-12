import React , {useState} from 'react'


export default function Textform(props) {
  const lowercaseonclick=()=>{
  let loweredtext=text.toLowerCase();
  setText(loweredtext);
  props.showalert("Converted to Lowercase!", "success");
  }
  const handleonclick=()=>{
let newText = text.toUpperCase();
setText(newText);
props.showalert("Converted to uppercase!", "success");
  }
  const handleonchange=(Event)=>{
    setText(Event.target.value);
  }
  const [text,setText]=useState("");
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showalert("Converted to voice !", "success");
  };
  const copyText = () => {
    navigator.clipboard.writeText(text);
    props.showalert("your word Has been Copied to clipboard", "success");
  };



  return (
    <>
    <div>
<div className="m-3">
  <h1 className={`m-3 text-${props.mode==='light'? 'dark':'light'}`}>Enter your Word here </h1>
  <textarea className="form-control"  onChange={handleonchange} value={text} id="exampleFormControlTextarea1" rows="8" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}></textarea>
</div>
<div>
<button className="btn btn-primary m-3" onClick={handleonclick}>Convert to Upper Case </button>
<button className="btn btn-primary m-3" onClick={lowercaseonclick}>Convert to Lower Case </button>
<button className="btn btn-primary m-3" onClick={speak}>Speak Your Words </button>
<button className="btn btn-primary m-3" onClick={copyText}>Copy Words </button>
</div>
<div className={`m-3 text-${props.mode==='light'? 'dark':'light'}`}>
  <h1 className={`m-3 text-${props.mode==='light'? 'dark':'light'}`}>Your text Summary </h1>
        <p>
          {text.split(" ").length} words and {text.length} letters
        </p>
        <p>{0.008 * text.split(" ").length} time will be taken for reading</p>
</div>
</div>

  </>
  )
}
