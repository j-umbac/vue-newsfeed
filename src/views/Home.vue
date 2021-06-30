<template>
  <div class="bod">
    <div class="about">
      <h2>A Vue Newsfeed Project created by:</h2>
      <p>Joshua Rhey D. Umbac</p>
      <br />

      <h3>Made using Vue.js with Typescript</h3>
      <br />
      <h3>Code source files on Github:</h3>
      <p>
        <a href="https://github.com/j-umbac/vue-newsfeed">github.com/j-umbac/vue-newsfeed</a>
      </p>
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
  margin-top: 100px;
  padding: 30px;
  width: 500px;
  max-width: 80%;
  border-radius: 20px;
  box-shadow: 3px 3px 5px rgba(199, 199, 199, 0.5);
}
.about > * {
  margin: 10px auto;
  color: rgb(98, 112, 124);
}
a {
  font-size: 1rem;
  color: gray;
}

p {
  font-size: 1.5em;
  padding-bottom: 15px;
  border-bottom: 2px solid rgb(240, 240, 240);
}

@media only screen and (max-width: 960px) {
  .about {
    width: 60%;
    font-size: 0.8em;
  }
}
</style>
