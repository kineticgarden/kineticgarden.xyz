```javascript
// Sample blog posts data
const posts = [
  {
    id: 1,
    title: 'First Post',
    content: 'This is the content of the first blog post.'
  },
  {
    id: 2,
    title: 'Second Post',
    content: 'This is the content of the second blog post.'
  }
];

// Render posts on index.html
if (document.getElementById('posts') !== null) {
  const postsDiv = document.getElementById('posts');

  posts.slice(0, 2).forEach(post => {
    const postDiv = document.createElement('div');
    postDiv.className = 'post';
    postDiv.innerHTML = `
      <h3 class="post-title">${post.title}</h3>
      <p>${post.content}</p>
      <a href="post.html?id=${post.id}">Read more</a>
    `;
    postsDiv.appendChild(postDiv);
  });
}

// Render all posts on posts.html
if (document.getElementById('all-posts') !== null) {
  const postsDiv = document.getElementById('all-posts');

  posts.forEach(post => {
    const postDiv = document.createElement('div');
    postDiv.className = 'post';
    postDiv.innerHTML = `
      <h3 class="post-title">${post.title}</h3>
      <p>${post.content}</p>
      <a href="post.html?id=${post.id}">Read more</a>
    `;
    postsDiv.appendChild(postDiv);
  });
}

// Render a single post on post.html
if (document.getElementById('post-title') !== null && document.getElementById('post-content') !== null) {
  const urlParams = new URLSearchParams(window.location.search);
  const postId = urlParams.get('id');
  const post = posts.find(p => p.id === parseInt(postId));

  if (post) {
    document.getElementById('post-title').textContent = post.title;
    document.getElementById('post-content').textContent = post.content;
  } else {
    document.getElementById('post-title').textContent = 'Post not found';
  }
}
