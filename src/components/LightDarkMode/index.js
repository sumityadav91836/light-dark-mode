import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: false}

  func = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state

    return (
      <div className="container">
        <div className="mode-container">
          <h1 className="text">Click to change Mode</h1>
          {isDarkMode ? (
            <button type="button" className="btn" onClick={this.func}>
              Dark Mode
            </button>
          ) : (
            <button type="button" className="btn" onClick={this.func}>
              Light Mode
            </button>
          )}
        </div>
      </div>
    )
  }
}

export default LightDarkMode
