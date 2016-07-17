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

function mapStateToProps(state) {
    return {
        lists: state.lists
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectItem: selectItem }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ListView);
