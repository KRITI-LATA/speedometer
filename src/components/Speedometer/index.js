// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  increaseAccelerator = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  decreaseBrake = () => {
    const {speed} = this.state
    if (speed <= 200) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="speedometer"
            className="speed-image"
          />
        </div>
        <h1 className="heading-text">Speed is {speed}mph</h1>
        <p className="para-text">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button
            type="submit"
            className="acc-button"
            onClick={this.increaseAccelerator}
          >
            Accelerate
          </button>
          <button
            type="submit"
            className="app-button"
            onClick={this.decreaseBrake}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
