import React from 'react';
import './Filter.css';

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: props.open,
    };
  }

  render() {
    const { filterTitle, filter } = this.props;
    return (
      <div className="container">
        <h2
          className={this.state.open ? 'filtert' : 'filtertopen'}
          onClick={(event) => {
            const isopen = !this.state.open;
            this.setState({ open: isopen });
          }}
        >
          {filterTitle}
        </h2>

        <div className={this.state.open ? 'open' : 'close'}>
          {filter.map((filter) => (
            <button className="btn">{filter}</button>
          ))}
        </div>
      </div>
    );
  }
}

export default Filter;
