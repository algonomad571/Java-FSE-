import React, { Component } from 'react';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      error: null
    };
  }

  loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch posts from API');
        }
        return response.json();
      })
      .then(data => {
        this.setState({ posts: data });
      })
      .catch(err => {
        // Triggering state error to be caught or displayed
        this.setState({ error: err.message });
        alert('Error fetching posts: ' + err.message);
      });
  }

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
    alert("An error occurred inside the Posts component: " + error.toString());
  }

  render() {
    const { posts, error } = this.state;

    if (error) {
      return (
        <div style={{ color: '#b91c1c', padding: '15px', backgroundColor: '#fef2f2', border: '1px solid #fee2e2', borderRadius: '6px' }}>
          <h4>Error Loading Blog Posts</h4>
          <p>{error}</p>
        </div>
      );
    }

    return (
      <div style={{ fontFamily: 'Segoe UI, sans-serif' }}>
        <h3 style={{ color: '#111827', borderBottom: '2px solid #e5e7eb', paddingBottom: '10px' }}>
          Latest Blog Posts
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px', marginTop: '20px' }}>
          {posts.slice(0, 10).map(post => (
            <div key={post.id} style={{ padding: '20px', backgroundColor: 'white', borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
              <h4 style={{ margin: '0 0 10px 0', color: '#1f2937', textTransform: 'capitalize' }}>
                {post.id}. {post.title}
              </h4>
              <p style={{ margin: 0, color: '#4b5563', lineHeight: '1.6' }}>
                {post.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Posts;
