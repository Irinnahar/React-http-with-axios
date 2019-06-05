import React, { Component } from 'react';
import axios from '../../axios';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: [],
        selectedId : null
    }
    componentDidMount(){
        return axios.get('/posts')
        .then(response => {
            const posts = response.data.slice(0,4)
            const updatedPost = posts.map(post => {
                return {
                    ...post,
                    author: "Irin",
                }
            })
            this.setState({
                posts: updatedPost
            })
        })
    }
    SelectedIdHandler = (id) => {
        this.setState({
            selectedId: id
        })
    }
    render () {
        const post = this.state.posts.map(post => {
            return <Post 
                title={post.title} 
                author={post.author} 
                key={post.id}
                clicked ={() => this.SelectedIdHandler(post.id)} />
        });
        return (
            <div>
                <section className="Posts">
                    {post}
                </section>
                <section>
                    <FullPost
                        id = {this.state.selectedId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;