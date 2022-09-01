import React from "react";
class SearchComponent extends React.Component{

    constructor(props){
        super(props);
        this.state = {entry:''}
    }

    onFormSubmit = (event) =>{
        event.preventDefault();
        this.props.onSearchSubmit(this.state.entry)
    }
    render(){
        return(
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">

                <div className="ui form">
                    <div className="field">
                        <div className="ui massive icon input">
                            <input 
                                type="text" 
                                placeholder="Search images..." 
                                onChange={(event)=> this.setState({entry : event.target.value})}/>
                            <i className="search icon"></i>
                        </div>
                    </div>
                    <div className="results"></div>
                </div>
                </form>
            </div>
        )
    }
}

export default SearchComponent;