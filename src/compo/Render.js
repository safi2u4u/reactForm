import React, { Component } from 'react'
import Person from './compo/Person';

export default class App extends Component {
  constructor(){
    super()
    this.state={
      person:[
    {name:"deepak",age:24},
    {name:"safi",age:40},
    {name:"sahajd",age:30},
      ]
    }
  }
  render() {
    let person;
    person=this.state.person.map((p)=>{
     return(
      <Person name={p.name} age={p.age}/>
     )
    })
    
    return (
      <div>
       <h1>{person}</h1>
      </div>
    )
  }
}
