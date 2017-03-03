import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectItem } from '../actions/list_actions';


class ListView extends Component {
    renderList() {
        return this.props.lists.map((listItem) => {
            return (
                <li
                    key={listItem.name}
                    onClick={() => this.props.selectItem(listItem)}
                    className="list-group-item"
                    >
                    { listItem.name }
                </li>
            )
        })
    }

    render() {
        return (
            <div>
                <ul className="list-group col-sm-4" >
                    { this.renderList() }
                </ul>
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
        lists: state.lists.all
    };
}

/*
This is a redux specific function.
http://redux.js.org/docs/api/bindActionCreators.html
 */
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectItem: selectItem }, dispatch);
}


/*
Here we are creating a Higher order component
https://facebook.github.io/react/docs/higher-order-components.html
 */
export default connect(mapStateToProps, mapDispatchToProps)(ListView);
