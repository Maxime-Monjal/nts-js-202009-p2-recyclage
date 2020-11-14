import React, { Component } from 'react';
import './MissionBox.css';

class MissionBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { mission } = this.props;
    const { consignes } = mission;
    return (
      <div>
        <div className="missionBox">
          <h2 className="missiontitle">Ta mission !</h2>
          <p className="missions">{consignes}</p>
        </div>
      </div>
    );
  }
}

export default MissionBox;
