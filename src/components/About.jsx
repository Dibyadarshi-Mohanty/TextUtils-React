import React from 'react'

export default function About(props) {




  return (
    <div className="container my-4 py-3 rounded text-center" style={{backgroundColor:props.mode==='dark'?'#003366':'white', color:props.mode==='dark'?'white':'black', borderColor:props.mode==='dark'?'red':'black'}}>
        <h1>About Us</h1>
      <div className="accordion " id="accordionExample" style={{backgroundcolor:props.mode==='dark'?'#003366':'white',color:props.mode==='dark'?'white':'black'}}>
  <div className="accordion-item" style={{backgroundColor:props.mode==='dark'?'#003366':'white',color:props.mode==='dark'?'white':'black'}}>
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{backgroundColor:props.mode==='dark'?'#003366':'white',color:props.mode==='dark'?'white':'black'}}>
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample"style={{backgroundcolor:props.mode==='dark'?'#003366':'white',color:props.mode==='dark'?'white':'black'}}>
      <div className="accordion-body"style={{backgroundcolor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}>
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  
  <div className="accordion-item" style={{backgroundColor:props.mode==='dark'?'#003366':'white',color:props.mode==='dark'?'white':'black'}}>
    <h2 className="accordion-header" >
    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseOne" style={{backgroundColor:props.mode==='dark'?'#003366':'white',color:props.mode==='dark'?'white':'black'}}>
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample"style={{backgroundcolor:props.mode==='dark'?'#003366':'white',color:props.mode==='dark'?'white':'black'}}>
      <div className="accordion-body"style={{backgroundcolor:props.mode==='dark'?'#003366':'white',color:props.mode==='dark'?'white':'black'}}>
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={{backgroundColor:props.mode==='dark'?'#003366':'white',color:props.mode==='dark'?'white':'black'}}>
    <h2 className="accordion-header" >
    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseOne" style={{backgroundColor:props.mode==='dark'?'#003366':'white',color:props.mode==='dark'?'white':'black'}}>
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample"style={{backgroundcolor:props.mode==='dark'?'#003366':'white',color:props.mode==='dark'?'white':'black'}}>
      <div className="accordion-body"style={{backgroundcolor:props.mode==='dark'?'#003366':'white',color:props.mode==='dark'?'white':'black'}}>
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
{/* <button onClick={togglestyle} className="btnprimary m-2">{enable}</button> */}
    </div>
  )
}
