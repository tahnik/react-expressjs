import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getListItem } from '../actions/list_actions';
import { Link } from 'react-router';

class ShowListItem extends Component {
	componentDidMount(){
		this.props.getListItem(this.props.params.name);
	}
	render(){
		const { item } = this.props;
		if(!item) {
			return (<div>Loading...</div>)
		}

		return(
			<div>
				<Link to={"/"}>
                    <button type="button" className="btn btn-primary" style={{ marginTop: 10, marginBottom: 10 }}>Go Back</button>
                </Link>
   				<h1>{ item.name }</h1>
				<p>{ item.description }</p>
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
function mapStateToProps(state){
	return {
		item: state.lists.item
	}
}

/*
 Here we are creating a Higher order component
 https://facebook.github.io/react/docs/higher-order-components.html
 */
export default connect(mapStateToProps, { getListItem })(ShowListItem);
