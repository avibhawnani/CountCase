import React from "react";

export default function About(props) 
{
    // const [myStyle,setMyStyle] =useState(
    // {
    //     color:'black',
    //     backgroundColor: 'white'
    // })
    // const [btnText,setBtnText] = useState("Enable Dark Mode")
    // const toggleStyle=()=>{
    //     if(myStyle.color === 'white'){
    //         setMyStyle({
    //             color:"black",
    //             backgroundColor:"white"
                
    //         })
    //         setBtnText("Enable Dark Mode")
    //     }
    //     else{
    //         setMyStyle({
    //             color:"white",
    //             backgroundColor:"black",
    //             border:"2px solid white"
    //         })
    //         setBtnText("Enable Light Mode")
    //     }
    // }
  return (
    <>  
      <div className="container">
      <h3 className="my-3">About Us</h3>
        <div className="accordion" id="accordionExample" >
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={{backgroundColor: props.mode==="light"?"#181818":"#F1F1F1" ,color: props.mode==="dark"?"#181818":"white" }}
              >
                #1
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={{backgroundColor: props.mode==="light"?"white":"#181818" ,color: props.mode==="dark"?"white":"#181818" }}>
                <strong>This</strong> is the first React app built by <strong>Avi Bhawnani</strong>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={{backgroundColor: props.mode==="light"?"#181818":"#F1F1F1" ,color: props.mode==="dark"?"#181818":"white" }}
              >
                #2
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={{backgroundColor: props.mode==="light"?"#F1F1F1":"#181818" ,color: props.mode==="dark"?"white":"#181818" }}>
                <strong>This</strong> allows us to change the case of your words from Uppercase to Lowercase or vice versa.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={{backgroundColor: props.mode==="light"?"#181818":"#F1F1F1" ,color: props.mode==="dark"?"#181818":"white" }}
              >
                #3
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body "style={{backgroundColor: props.mode==="light"?"#F1F1F1":"#181818" ,color: props.mode==="dark"?"white":"#181818" }}>
                <strong>This</strong> also allows you to generate PDF of your content.
              </div>
            </div>
          </div>
        </div>
        {/* <button type="button" onClick={toggleStyle} className="btn btn-primary my-3">{btnText}</button> */}
        {/* <div className="form-check form-switch my-3">
            <input className="form-check-input" type="checkbox" role="switch" onClick={toggleStyle} id="flexSwitchCheckDefault"/>
            <label className="form-check-label" for="flexSwitchCheckDefault">{btnText}</label>
        </div> */}
      </div>
    </>
  );
}
