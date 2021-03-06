import React, { Component } from 'react'

class TodoInput extends Component {
    render() {
        const{item,handleChange, handleSubmit, Edititem} = this.props
        return (
<div className="card card-body my-3">
    <form onSubmit={handleSubmit}>
        <div className="input-group">
            <div className="input-group-prepend">
            <div className="input-group-text bg-primary text-white ">
                <i className="fas fa-book" />
            </div>
            </div>
           <input type="text"  className="form-control text-capitalize" placeholder="add a todo item"  
           value={item} onChange={handleChange}/>

        </div>
        <button className={Edititem ? "btn btn-success btn-block mt-3" : "btn btn-primary btn-block mt-3"}>add item</button>
    </form>

</div>
        )
    }
}

export default TodoInput;