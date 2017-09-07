import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class ListItem extends Component{
  render(){
    console.log(this.props.activeItem);
    if(!this.props.activeItem){
      return(
        <div>
          <h3>Select an item</h3>
          <p>Description will appear here</p>
        </div>
      );
    }
    return(
      <div>
        <h3> { this.props.activeItem.name } </h3>
        <p>{ this.props.activeItem.description }</p>
        <Link to={'view/' + this.props.activeItem.name }>
          <button type="button" className="btn btn-primary">Read More</button>
        </Link>
      </div>
    );
  }
}