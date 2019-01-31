import dispatcher from "../dispatchers/appDispatcher";
import {ReduceStore} from 'flux/utils';
import cara from "../asserts/image/cara.jpg"
import leina from "../asserts/image/leina.jpg"
import hera from "../asserts/image/hera.jpg"
import nara from "../asserts/image/nara.jpg"

 class ImageStore extends ReduceStore{

    getInitialState(){
        return {
           img: cara
        };
    }
     reduce(state,action) {
        switch (action.type) {
            case "update": {
                
                if(action.value === "cara") { 
                    state= Object.assign({ img: cara});
                    return state;
                          }
                else if(action.value === "hera") {
                    state= Object.assign({ img: hera});
                    return state;
                }
                else if(action.value === "nara") {
                    state= Object.assign({ img: nara});
                    return state;
                }
                else {
                    state= Object.assign({ img: leina});
                    return state;
                }
                
               
            }
            default: {
                return state;
            }
        }
    }


}
export default new ImageStore(dispatcher);