import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ShowListItem extends Component {
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

export default ShowListItem;
