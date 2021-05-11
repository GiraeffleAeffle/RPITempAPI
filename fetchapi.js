fetch('http://localhost:8080/temp')
  .then(response => response.json())
  .then(data => console.log(data));