
import dispatcher from "../dispatchers/appDispatcher";

const ImageAction={
    changeImage(img){
    dispatcher.dispatch({
        type: "update",
        value: img
    })
}
}
export default ImageAction;