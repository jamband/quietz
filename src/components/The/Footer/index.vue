<script setup lang="ts">
//
</script>

<template>
  <footer class="fixed-bottom py-3 text-center bg-light">
    <nav
      class="container"
      :class="$style.contents"
      aria-label="Footer navigation"
    >
      <ul class="mb-0 list-inline">
        <li class="list-inline-item">
          <NuxtLink :to="{ name: 'about' }" class="p-3">About</NuxtLink>
        </li>
        <li class="list-inline-item">
          <NuxtLink :to="{ name: 'contact' }" class="p-3">Contact</NuxtLink>
        </li>
        <li class="list-inline-item">
          <a
            href="https://github.com/jamband/quietz"
            rel="noopener noreferrer"
            target="_blank"
            class="p-3"
            >GitHub</a
          >
        </li>
      </ul>
    </nav>
  </footer>
</template>

<style lang="scss" module src="./styles.scss"></style>
