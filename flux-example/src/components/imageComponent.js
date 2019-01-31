/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import ImageStore from "../stores/imageStore";
import { Container } from 'flux/utils';

 class ImageComponent extends React.Component{
    constructor(props) {
        super(props);

      this.state={
          img : ''
      }
    }
    static getStores(){
        return [ImageStore];
    }
    static calculateState(){
        const pState= ImageStore.getState();
        var img =pState.img;
        return {
            img: img
        }
    }
    componentDidMount() {
      
    }

    componentWillUnmount() {
       
    }

    render(){
        return(
            // eslint-disable-next-line no-undef
            <div className="image-container" >
            <img src={this.state.img}></img>
            </div>
        );
    }
}

const imageComponent = Container.create(ImageComponent);
export default imageComponent;