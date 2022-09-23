import React from "react";
const ImageListComponent = (props) =>{
    const images = props.images.map(
        (image) => {return <img key={image.id} src={image.webformatURL} alt="Imag" />  } 
    )

    return(
        <div>
            <center>
            {images}
            </center>
        </div>
    )
}

export default ImageListComponent;