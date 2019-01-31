/* eslint-disable no-useless-constructor */
import React from "react";
import  ImageAction from  "../actions/imageAction";
 

class  ButtonComponent extends React.Component{
    constructor(props) {
        super(props);
    }
    onButtonClick (img) {
        ImageAction.changeImage(img);
        console.log(img);
    };
 render(){
     return(
     <div>
         <button onClick={()=>this.onButtonClick("cara")} className="color-button">Cara Delevingne</button>
         <button onClick={()=>this.onButtonClick("hera")} className="color-button">Hera Hilmar</button>
         <button onClick={()=>this.onButtonClick("leila")} className="color-button">Leila George D'Onofrio</button>
         <button onClick={()=>this.onButtonClick("nara")} className="color-button">Nara</button>
     </div>
     )
 }

}
export default ButtonComponent