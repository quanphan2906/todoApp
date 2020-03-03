import React, {Component} from "react";

class AddTodo extends Component {
    state = {
        content: ""
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        e.target.input.value = "";
        this.props.addTodo(this.state);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add new Todo:</label>
                    <input type="text" name="input" onChange={this.handleChange}/>
                </form>
            </div>
        )
    }
}

export default AddTodo;