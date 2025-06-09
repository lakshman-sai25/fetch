const userContainer = document.getElementById('user-container');
const reloadBtn = document.getElementById('reloadBtn');

function fetchUsers() {
  userContainer.innerHTML = '<p>Loading...</p>';

  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      if (!response.ok) throw new Error("Network response was not ok");
      return response.json();
    })
    .then(users => {
      userContainer.innerHTML = '';
      users.forEach(user => {
        const card = document.createElement('div');
        card.className = 'user-card';
        card.innerHTML = `
          <h3>${user.name}</h3>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
        `;
        userContainer.appendChild(card);
      });
    })
    .catch(error => {
      userContainer.innerHTML = `<p style="color: red;">Failed to fetch data: ${error.message}</p>`;
    });
}

// Initial fetch
fetchUsers();

// Reload button
reloadBtn.addEventListener('click', fetchUsers);