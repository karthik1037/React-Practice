import React, { Component } from 'react'

export default class App extends Component
 {
  constructor()
  {
    super();

    this.state=
    {
      rollno:501,
      name:"Jessica"
    }
  }
  render() {
    return (
      <>
      <h1>Roll NO: {this.state.rollno}</h1>
      <h1>name:{this.state.name}</h1>
      </>
    )
  }
}
