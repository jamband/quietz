<template>
  <footer class="mt-5 py-3 text-center bg-light small">
    <nav class="container" aria-label="Footer navigation">
      <ul class="list-inline mb-0">
        <li class="list-inline-item">
          <a :href="`https://github.com/${$app.repository}`" rel="noopener" target="_blank">GitHub</a>
        </li>
        <li class="list-inline-item">
          <NLink :to="{ name: 'contact' }">Contact</NLink>
        </li>
        <li class="list-inline-item">
          <NLink :to="{ name: 'about' }">About</NLink>
        </li>
      </ul>
    </nav>
  </footer>
</template>
