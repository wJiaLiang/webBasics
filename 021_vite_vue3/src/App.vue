<template>
  <section>
  <header>
    <div style="width:100%">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/test1">test1</RouterLink>
        <RouterLink to="/setup">setup</RouterLink>
        <RouterLink to="/ref">ref</RouterLink>
        <RouterLink to="/toRaw">toRaw</RouterLink>
      </nav>
    </div>
  </header>
  <div class="main82_5">
    <RouterView />
  </div>
</section>
</template>


<script setup>
import { RouterLink, RouterView } from "vue-router";
console.log("import.meta", import.meta.hot);
console.log("env", import.meta.env);


</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 15px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

/*
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
*/
</style>
