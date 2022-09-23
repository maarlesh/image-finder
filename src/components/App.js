import React from "react";
import SearchComponent from "./SearchComponent"
import axios from "axios";
import ImageListComponent from "./ImageListComponent";

class App extends React.Component{
    constructor(props){
        super(props)
        this.onSearchSubmit = this.onSearchSubmit.bind(this)
        this.state ={
            images: []
        }
    }

    async onSearchSubmit(entry){
        var response = await axios.get(`https://pixabay.com/api/?key=30122265-9997a84a3729ef94eabdf859a&q=${entry}&image_type=photo`)
        console.log(response.data.hits)
        this.setState({images: response.data.hits })
    }
    render()
    {
        return(
            <div className="ui container" style={{marginTop:'30px'}}>
                <SearchComponent onSearchSubmit={this.onSearchSubmit}/>
                <ImageListComponent images = {this.state.images} />
            </div>
                
        )
    }
    
}
export default App;
