import React from "react";
const ImageListComponent = (props) =>{
    const images = props.images.map(
        (image) => {return <img key={image.id} src={image.webformatURL} height="420" width="600" alt="Imag" />  } 
    )

    return(
        <div style={{marginLeft:'-100px'}}>
            {images}
        </div>
    )
}

export default ImageListComponent;