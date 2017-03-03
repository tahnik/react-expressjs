import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

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
                <Link to={"view/" + this.props.activeItem.name }>
                    <button type="button" className="btn btn-primary">Read More</button>
                </Link>
            </div>
        )
    }
}

/*
 This is a redux specific function.
 What is does is: It gets the state specified in here from the global redux state.
 For example, here we are retrieving the list of items from the redux store.
 Whenever this list changes, any component that is using this list of item will re-render.
 */
function mapStateToProps(state) {
    return {
        activeItem: state.lists.item
    };
}

/*
 Here we are creating a Higher order component
 https://facebook.github.io/react/docs/higher-order-components.html
 */
export default connect(mapStateToProps)(ListItem);
