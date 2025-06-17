<template>
  <nav>
    <h1>Jay Bhavani Ornament</h1>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/products">Products</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  background: #111;
  color: #0af;
  padding: 1rem;
}
ul {
  list-style: none;
  display: flex;
  gap: 1rem;
}
a {
  color: #0af;
  text-decoration: none;
}
a.router-link-active {
  font-weight: bold;
  text-decoration: underline;
}
</style>

//jeel
