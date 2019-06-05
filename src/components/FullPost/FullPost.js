import React, { Component } from 'react';
import axios from 'axios';
import './FullPost.css';

class FullPost extends Component {
    state = {
        postDetails : null
    }

    componentDidUpdate(){
        if(this.props.id){
            if(!this.state.postDetails || 
                (this.state.postDetails && this.state.postDetails.id !== this.props.id)){
                axios.get('/posts/' + this.props.id)
                .then(response => {
                    this.setState({
                        postDetails: response.data
                    })
                })
                .catch(error => {
                    console.log(error)
                })
            }
           
        }
    }
    deleteHandler = (id) => {
        axios.delete('/posts/' + id)
        .then(
            response => {
                console.log(response)
            }
        )
        .catch(error => {
            console.log(error)
        })
    }
    render () {
        const details = this.state.postDetails;
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
        if(this.state.postDetails){
            post = (
                <div className="FullPost">
                    <h1>{details.title}</h1>
                    <p>{details.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={() => this.deleteHandler(details.id)}>Delete</button>
                    </div>
                </div>
    
            );
        }
        
        return post;
    }
}

export default FullPost;