<template>
  <div>
    <p>
      {{ $app.name }} is my private playground for
      <a href="https://nuxtjs.org" rel="noopener" target="_blank">Nuxt.js</a> and
      <a href="https://getbootstrap.com" rel="noopener" target="_blank">Bootstrap 5</a>.
    </p>
    <p>
      This website is an open source project. See
      <a :href="`https://github.com/${$app.repository}`" rel="noopener" target="_blank">GitHub {{ $app.repository }}</a>
      for details.
    </p>
  </div>
</template>
