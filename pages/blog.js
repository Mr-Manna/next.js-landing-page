import Layout from '../components/Layout';
import { Component } from 'react';
import fetch from 'isomorphic-unfetch';


class Blog extends Component {
    
    static async getInitialProps(){
        const res = await fetch('http://localhost/cockpit/api/collections/get/blog/', {
            headers: { 'Cockpit-Token': '5e1bedd030d3fc3bf411ea2cee96f3' }
        });
        const data = await res.json();
        let entries = data.entries;
        return { blogs : entries };
    }  

    render(){
        const{ blogs } = this.props;
        console.log(blogs[0]._id);
        return(
            <Layout>
                <h1>Blog Posts</h1>
                {blogs.map((blog,_id)=>(
                    <div >
                    <h4 key={blog._id}>{blog.title}</h4>
                    </div>              
                ))}
            </Layout>
        )
    }
}

export default Blog;