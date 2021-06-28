<template>
  <div class="bod">
    <div class="about">
      <h2>A Vue Newsfeed Project created by:</h2>
      <p>Joshua Rhey D. Umbac</p>

      <h3>Made using Vue.js with Typescript</h3>
    </div>
  </div>
</template>

<style scoped>
.bod {
  display: flex;
  justify-content: center;
  align-items: center;
}
.about {
  background: rgb(255, 255, 255);
  position: absolute;
  top: 15%;
  padding: 30px;
  margin: 0 auto;
  width: 40%;
  max-width: 500px;
  border-radius: 20px;
  box-shadow: 3px 3px 5px rgba(199, 199, 199, 0.5);
}
.about > * {
  margin: 50px auto;
  color: rgb(98, 112, 124);
}

p {
  font-size: 1.5em;
}
</style>
