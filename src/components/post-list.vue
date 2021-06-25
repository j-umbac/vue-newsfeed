<template>
  <h3>{{ postTitle }}</h3>
  <br />
  <p>{{ postDesc }}</p>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  props: ["postTitle", "postDesc"],
  methods: {},
});
</script>

<style>
li {
  list-style: none;
}
</style>
