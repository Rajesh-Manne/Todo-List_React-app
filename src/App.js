import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import TodoInput from '../src/components/TodoInput'
import TodoList from '../src/components/TodoList'
import { v4 as uuidv4 } from 'uuid';

class App extends Component {

  state = {
    items:[],
    id:uuidv4(),
    item:'',
    Edititem:false
  }

handleChange= (e)=> {
  this.setState({
  item:e.target.value
    
  })
}

handleSubmit = (e)=> {
  e.preventDefault();
  const newItem = {
    id:this.state.id,
    title:this.state.item
  }

// console.log(newItem);

const updatedItems = [...this.state.items,newItem];

this.setState({
  items:updatedItems,
  item:'',
  id:uuidv4(),
  Edititem:false

})

}

clearList = ()=>{
  this.setState({
    items:[]
  })
}

handleDelete =(id)=>{

  const filteredItems = this.state.items.filter(item=>item.id !== id)
  
  this.setState({
    items:filteredItems
  })
}

handleEdit = (id)=> {
  const filteredItems = this.state.items.filter(item=>item.id !== id)
  const selectedItem = this.state.items.find(item=>item.id === id)
  console.log(selectedItem)
  
  this.setState({
    items:filteredItems,
    item:selectedItem.title,
    Edititem:true
  })
}
  render(){
    // console.log(this.state.item)
  return (
<div className="container">
  <div className="row">
    <div className="col-10 mx-auto mt-4 col-md-8">
     <h3 className="text-capitalize text-center">TodoInput</h3>
     <TodoInput item={this.state.item} handleChange={this.handleChange}  handleSubmit={this.handleSubmit} Edititem = {this.state.Edititem} />
     <TodoList  items={this.state.items}  clearList={this.clearList} handleDelete={this.handleDelete} handleEdit={this.handleEdit} />
    </div>
  </div>
</div>



    // <div className="App">
    //   <TodoInput />
    //   <TodoList />
    // </div>
  );
}
}

export default App;


