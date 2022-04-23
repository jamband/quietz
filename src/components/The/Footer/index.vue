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
          <NuxtLink :to="{ name: 'about' }" class="p-3 text-decoration-none"
            >About</NuxtLink
          >
        </li>
        <li class="list-inline-item">
          <NuxtLink :to="{ name: 'contact' }" class="p-3 text-decoration-none"
            >Contact</NuxtLink
          >
        </li>
        <li class="list-inline-item">
          <NuxtLink
            href="https://github.com/jamband/quietz"
            target="_blank"
            class="p-3 text-decoration-none"
            >GitHub</NuxtLink
          >
        </li>
      </ul>
    </nav>
  </footer>
</template>

<style lang="scss" module src="./styles.scss" />
