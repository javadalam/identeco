fetch('/api/message')
  .then(response => response.json())
  .then(data => {
    const messageElement = document.getElementById('message');
    messageElement.textContent = data.message;
  })
  .catch(error => console.error(error));