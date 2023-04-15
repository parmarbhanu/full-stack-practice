import React, { Component } from 'react'
import Car from '../Images/library.jpeg';
// import ReactDOM from 'react-dom/frontend';
import './Body.css';
export class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items:null
    };
  }

  componentDidMount() {
    
    fetch("http://localhost:5000/")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          this.setState({
            isLoaded: true,
            items: result
          });
        },
      
        (error) => {
          console.log(error)
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  render() {
    return (
      <div>
        <div className="car">
        <img src={Car}  alt=" a car" />
        </div>
        <h2>{this.state.items}</h2>

      </div>
    )
  }
}

export default Body