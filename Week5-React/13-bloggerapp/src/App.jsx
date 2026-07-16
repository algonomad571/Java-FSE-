import React, { useState } from 'react';

// Sub-component 1: Book Details
function BookDetails({ books }) {
  return (
    <div style={{ padding: '15px', border: '1px solid #bfdbfe', borderRadius: '8px', backgroundColor: '#eff6ff' }}>
      <h3 style={{ color: '#1e40af', marginTop: 0 }}>Book Catalog</h3>
      <ul style={{ paddingLeft: '20px', margin: 0 }}>
        {books.map(b => (
          <li key={b.id} style={{ margin: '8px 0', color: '#1e3a8a' }}>
            <strong>{b.title}</strong> by {b.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Sub-component 2: Blog Details
function BlogDetails({ blogs }) {
  return (
    <div style={{ padding: '15px', border: '1px solid #fbcfe8', borderRadius: '8px', backgroundColor: '#fdf2f8' }}>
      <h3 style={{ color: '#9d174d', marginTop: 0 }}>Featured Blogs</h3>
      {blogs.map(b => (
        <div key={b.id} style={{ marginBottom: '15px', borderBottom: '1px solid #fce7f3', paddingBottom: '10px' }}>
          <h4 style={{ margin: '0 0 5px 0', color: '#831843' }}>{b.title}</h4>
          <p style={{ margin: 0, color: '#4c0519', fontSize: '0.95rem' }}>{b.summary}</p>
        </div>
      ))}
    </div>
  );
}

// Sub-component 3: Course Details
function CourseDetails({ courses }) {
  return (
    <div style={{ padding: '15px', border: '1px solid #a7f3d0', borderRadius: '8px', backgroundColor: '#ecfdf5' }}>
      <h3 style={{ color: '#065f46', marginTop: 0 }}>Technical Courses</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {courses.map(c => (
          <div key={c.id} style={{ padding: '10px', backgroundColor: 'white', borderRadius: '6px', border: '1px solid #d1fae5' }}>
            <strong style={{ color: '#047857' }}>{c.name}</strong>
            <span style={{ fontSize: '0.85rem', color: '#6b7280', marginLeft: '10px' }}>({c.duration})</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  const [activeTab, setActiveTab] = useState('books'); // books, blogs, courses

  const mockBooks = [
    { id: 1, title: 'Clean Code', author: 'Robert C. Martin' },
    { id: 2, title: 'Effective Java', author: 'Joshua Bloch' },
    { id: 3, title: 'Design Patterns', author: 'Gang of Four' }
  ];

  const mockBlogs = [
    { id: 1, title: 'Why React 18 is Awesome', summary: 'Exploring Concurrent Mode, Automatic Batching, and Transitions.' },
    { id: 2, title: 'Intro to Microservices', summary: 'A beginner-friendly guide to service discovery, config server, and gateways.' }
  ];

  const mockCourses = [
    { id: 1, name: 'React - The Complete Guide', duration: '40 hours' },
    { id: 2, name: 'Spring Boot & Spring Cloud FSE', duration: '60 hours' },
    { id: 3, name: 'Docker & Kubernetes Bootcamp', duration: '25 hours' }
  ];

  // Conditional Rendering Method 1: Element Variable
  let componentToRender;
  if (activeTab === 'books') {
    componentToRender = <BookDetails books={mockBooks} />;
  } else if (activeTab === 'blogs') {
    componentToRender = <BlogDetails blogs={mockBlogs} />;
  } else {
    componentToRender = <CourseDetails courses={mockCourses} />;
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f3f4f6', padding: '40px 20px', fontFamily: 'Segoe UI, sans-serif' }}>
      <div style={{ maxWidth: '650px', margin: '0 auto', backgroundColor: 'white', padding: '30px', borderRadius: '16px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
        <h1 style={{ textAlign: 'center', color: '#111827', margin: '0 0 25px 0' }}>Blogger Hub</h1>
        
        {/* Navigation Tabs */}
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginBottom: '25px', borderBottom: '1px solid #e5e7eb', paddingBottom: '15px' }}>
          <button 
            onClick={() => setActiveTab('books')} 
            style={{ padding: '8px 16px', border: 'none', borderBottom: activeTab === 'books' ? '3px solid #1e40af' : 'none', backgroundColor: 'transparent', cursor: 'pointer', fontWeight: 'bold', color: activeTab === 'books' ? '#1e40af' : '#6b7280' }}
          >
            Books
          </button>
          <button 
            onClick={() => setActiveTab('blogs')} 
            style={{ padding: '8px 16px', border: 'none', borderBottom: activeTab === 'blogs' ? '3px solid #9d174d' : 'none', backgroundColor: 'transparent', cursor: 'pointer', fontWeight: 'bold', color: activeTab === 'blogs' ? '#9d174d' : '#6b7280' }}
          >
            Blogs
          </button>
          <button 
            onClick={() => setActiveTab('courses')} 
            style={{ padding: '8px 16px', border: 'none', borderBottom: activeTab === 'courses' ? '3px solid #065f46' : 'none', backgroundColor: 'transparent', cursor: 'pointer', fontWeight: 'bold', color: activeTab === 'courses' ? '#065f46' : '#6b7280' }}
          >
            Courses
          </button>
        </div>

        {/* Display Content using different styles of conditional rendering */}
        <div style={{ padding: '10px 0' }}>
          {/* Method 2: Logical && rendering (if books is active) */}
          {activeTab === 'books' && <BookDetails books={mockBooks} />}

          {/* Method 3: Ternary operator rendering (if blogs is active, else if courses is active) */}
          {activeTab === 'blogs' ? (
            <BlogDetails blogs={mockBlogs} />
          ) : activeTab === 'courses' ? (
            <CourseDetails courses={mockCourses} />
          ) : null}

          {/* Method 4: Element Variable (Demonstrated via console or alternate render container if needed, but we used the state filter) */}
        </div>
      </div>
    </div>
  );
}

export default App;
