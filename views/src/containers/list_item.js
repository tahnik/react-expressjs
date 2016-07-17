import React, { Component } from 'react';
import { connect } from 'react-redux';

class ListItem extends Component{
    render(){
        if(!this.props.activeItem){
            return(
                <div>
                    <h3>Select an item</h3>
                    <p>Description will appear here</p>
                </div>
            )
        }
        return(
            <div>
                <h3> { this.props.activeItem.name } </h3>
                <p>{ this.props.activeItem.description }</p>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        activeItem: state.activeItem
    };
}

export default connect(mapStateToProps)(ListItem);
