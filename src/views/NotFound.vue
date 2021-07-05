<template>
  <div>
    <h1>404</h1>
    <h2>Page Not Found.</h2>
    <br />
    <button @click="$router.push('/')">Home</button>
  </div>
</template>

<style>
h1 {
  font-size: 10em;
  padding: 30px;
}
button {
  padding: 10px;
  margin: 5px;
  background: rgb(110, 172, 243);
  border-radius: 5px;
  color: white;
  cursor: pointer;
}

button > * {
  text-decoration: none;
  color: white;
}

button:hover {
  background-color: rgb(83, 140, 204);
}

button:active {
  transform: scale(0.95);
}
</style>
