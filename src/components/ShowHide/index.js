import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {isFnameDisplay: false, isLnameDisplay: false}

  ShowFname = () => {
    const {isFnameDisplay} = this.state
    if (isFnameDisplay === false) {
      this.setState(prevState => ({isFnameDisplay: !prevState.isFnameDisplay}))
    } else {
      this.setState(prevState => ({isFnameDisplay: !prevState.isFnameDisplay}))
    }
  }

  ShowLname = () => {
    const {isLnameDisplay} = this.state
    if (isLnameDisplay === false) {
      this.setState(prevState => ({isLnameDisplay: !prevState.isLnameDisplay}))
    } else {
      this.setState(prevState => ({isLnameDisplay: !prevState.isLnameDisplay}))
    }
  }

  getBox1Class = () => {
    const {isFnameDisplay} = this.state
    return isFnameDisplay ? (
      <div className="fname-box">
        <p className="name">Joe</p>
      </div>
    ) : (
      <div />
    )
  }

  getBox2Class = () => {
    const {isLnameDisplay} = this.state
    return isLnameDisplay ? (
      <div className="lname-box">
        <p className="name">Jonas</p>
      </div>
    ) : (
      <div />
    )
  }

  render() {
    const box1Class = this.getBox1Class()
    const box2Class = this.getBox2Class()

    return (
      <div className="bg-container">
        <h1 className="title">Show/Hide</h1>
        <div className="display-container">
          <div className="adjust">
            <button type="button" className="button" onClick={this.ShowFname}>
              Show/Hide Firstname
            </button>
            {box1Class}
          </div>
          <div className="adjust">
            <button type="button" className="button" onClick={this.ShowLname}>
              Show/Hide Lastname
            </button>
            {box2Class}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
