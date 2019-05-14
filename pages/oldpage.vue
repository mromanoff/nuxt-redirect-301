<template>
  <section class="container">
    <div>
      <h1 class="title">
        Old page
      </h1>
      <nav class="navigation">
        <nuxt-link to="/">Home page</nuxt-link> |
        <a href="/oldpage">Old page</a> |
        <nuxt-link to="/newpage">New page</nuxt-link>
      </nav>

      <nav class="navigation">
        <nuxt-link to="/oldpage/">Old page/</nuxt-link> |
        <nuxt-link to="/newpage/">New page/</nuxt-link>
      </nav>
    </div>
  </section>
</template>
<script>
export default {}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
</style>
