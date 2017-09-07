import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

const ListItemPreview = ({ item }) => {
  if (!item) {
    return (
      <div>
        <h3>Select an item</h3>
        <p>Description will appear here</p>
      </div>
    );
  }
  return (
    <div className="preview">
      <h3> { item.name } </h3>
      <p>{ item.description }</p>
      <Route to={`view/${item.name}`}>
        <button type="button" className="btn btn-primary">Read More</button>
      </Route>
    </div>
  );
};

ListItemPreview.propTypes = {
  item: PropTypes.object,
};

ListItemPreview.defaultProps = {
  item: null,
};

export default ListItemPreview;
