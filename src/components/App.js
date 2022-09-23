import React from "react";
import SearchComponent from "./SearchComponent"
import axios from "axios";
import ImageListComponent from "./ImageListComponent";
import GifListComponent from "./GifListComponent";

class App extends React.Component{
    constructor(props){
        super(props)
        this.onSearchSubmit = this.onSearchSubmit.bind(this)
        this.state ={
            images: [],
            gifs: []
        }
    }

    async onSearchSubmit(entry){
        var response = await axios.get(`https://pixabay.com/api/?key=30122265-9997a84a3729ef94eabdf859a&q=${entry}&image_type=photo`)
        console.log(response.data.hits)
        this.setState({images: response.data.hits })

        var response2 = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=uy4cOtjSD0D3poP6edYe6iaLVf2hBqCI&q=${entry}`)
        console.log(response2.data.data)
        this.setState({gifs: response2.data.data})
    }
    render()
    {
        return(
            <div className="ui container" style={{marginTop:'30px'}}>
                <SearchComponent onSearchSubmit={this.onSearchSubmit}/>
                <div style={{marginTop:'30px',display:'flex'}}>
                    <div>
                        <ImageListComponent images = {this.state.images} />
                    </div>
                    <div>
                        <GifListComponent gifs = {this.state.gifs} />
                    </div>
                </div>
            </div>
                
        )
    }
    
}
export default App;
