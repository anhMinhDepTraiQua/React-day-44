import React, { useState, useEffect } from 'react';
import { ReactSortable } from 'react-sortablejs';
import api from '../utils/axios';
import { truncateByWords } from '../utils/string';

const PropKey = () => {
  const [todos, setTodos] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Fetch todos
        const todosResponse = await api.get('/todos');
        setTodos(todosResponse.data.slice(0, 20));

        // Fetch posts
        const postsResponse = await api.get('/posts');
        setPosts(postsResponse.data.slice(0, 20));
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <p>Đang tải dữ liệu...</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '40px', maxWidth: '900px', margin: '0 auto' }}>
      {/* Todo List */}
      <h2 style={{ color: '#2c3e50', marginBottom: '20px' }}>Todo List</h2>
      <ul style={{ 
        lineHeight: '1.8', 
        color: '#555',
        marginBottom: '50px'
      }}>
        {todos.map((todo, index) => (
          <li key={todo.id} style={{ marginBottom: '8px' }}>
            {index + 1} - {todo.title}
          </li>
        ))}
      </ul>

      {/* Post List */}
      <h2 style={{ color: '#2c3e50', marginBottom: '10px' }}>Post List</h2>
      <p style={{ 
        color: '#666', 
        fontSize: '14px', 
        marginBottom: '20px',
        fontStyle: 'italic'
      }}>
        💡 Kéo thả để sắp xếp lại danh sách bài viết
      </p>
      
      <ReactSortable 
        list={posts} 
        setList={setPosts}
        animation={200}
        style={{ listStyle: 'none', padding: 0 }}
      >
        {posts.map(post => (
          <div 
            key={post.id}
            style={{ 
              padding: '15px 20px', 
              margin: '10px 0', 
              background: '#f8f9fa',
              cursor: 'move',
              borderRadius: '8px',
              border: '1px solid #dee2e6',
              transition: 'all 0.2s',
              userSelect: 'none'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#e9ecef';
              e.currentTarget.style.borderColor = '#adb5bd';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#f8f9fa';
              e.currentTarget.style.borderColor = '#dee2e6';
            }}
          >
            {truncateByWords(post.title, 10)}
          </div>
        ))}
      </ReactSortable>
    </div>
  );
};

export default PropKey;