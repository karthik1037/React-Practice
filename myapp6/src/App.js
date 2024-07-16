import React, { Component } from 'react'

export default class App extends Component {
  state={
    rollno:101,
    name:"Alan"
  }
  render() {
    return (
      <>
      <h1>Roll No:{this.state.rollno}</h1>
      <h1>Name:{this.state.name}</h1>
      </>
    )
  }
}
