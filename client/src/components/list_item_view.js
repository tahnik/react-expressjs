import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ListItemView extends Component {
  componentDidMount() {
    const { viewItem, match } = this.props;
    viewItem(match.params.name);
  }
  render() {
    const { item } = this.props;
    if (!item) {
      return (<div>Loading...</div>);
    }

    return (
      <div className="view_item">
        <Link to={'/'}>
          <button type="button">Back</button>
        </Link>
        <h2>{ item.name }</h2>
        <p>{ item.description }</p>
      </div>
    );
  }
}

ListItemView.propTypes = {
  viewItem: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  item: PropTypes.object,
};

ListItemView.defaultProps = {
  item: null,
};

export default ListItemView;
