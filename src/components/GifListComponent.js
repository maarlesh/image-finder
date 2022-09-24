import React from "react";
import "../components/GifStyle.css"
const GifListComponent = (props) =>{
    const gifs = props.gifs.map(
        (gif) => {return <img src={gif.images.fixed_height.url} height="420" width="600" alt="gifs"/>}
    )


    return(
        <div className="gif">
                {gifs}
        </div>
    )
}

export default GifListComponent;