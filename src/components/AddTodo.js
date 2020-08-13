import React, { Component } from 'react'

export class AddTodo extends Component {

    state ={
        title:""
    };

    onSubmit = (e) =>{
        e.preventDefault();
        this.props.AddTodo(this.state.title);
        this.setState({title:""});
    };

    onChange = (e) =>{
        this.setState({[e.target.name]: e.target.value});
    };

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                <input
                    type="text"
                    name="title"
                    placeholder="Add new"
                    onChange={this.onChange}
                    style={{flex:'10', padding:'5px'}}
                    value = {this.state.title}
                />
                <input type= "submit" value="submit" className="btn"/>
            </form>
        );
    }
}

export default AddTodo
