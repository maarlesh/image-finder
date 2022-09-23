import React from "react";
const GifListComponent = (props) =>{
    const gifs = props.gifs.map(
        (gif) => {return <img src={gif.images.fixed_height.url} alt="gifs"/>}
    )


    return(
        <div>
            {gifs}
        </div>
    )
}

export default GifListComponent;