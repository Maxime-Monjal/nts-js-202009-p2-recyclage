import React from 'react';
import './ScoreAvatar.css';
import ProgressBar from './ProgressBar';

class ScoreAvatar extends React.Component {
  constructor(props) {
    super(props);
    this.localStorage = window.localStorage;
    const local = parseFloat(this.localStorage.getItem('Progress'));
    this.state = {
      percent: local || 0,
      bar : this.props.jauge,
    };
    this.updateProgress = this.updateProgress.bind(this);
  }

  componentDidMount() {
    this.updateProgress('percent', this.state.percent + this.state.bar);
  }

  updateProgress(field, val) {
    if (this.state.percent === 1) {
      this.setState({ [field]: 0 });
    } else if (this.state.percent > 1 - this.state.bar) {
      this.setState({ [field]: 1 });
    } else {
      this.setState({ [field]: val });
    }
  }

  render() {
    this.localStorage.setItem('Progress', this.state.percent.toString());
    let result = Math.round(this.state.percent * 100);

    return (
      <div className="ScoreAvatar">
        <div className="Jauge">
          <ProgressBar width={300} percent={this.state.percent} />
          <h3>{result} points !</h3>
        </div>
      </div>
    );
  }
}

export default ScoreAvatar;