<script lang="ts" setup>
const { ready } = useOffcanvas();

const routes = [
  { name: "index", text: "Home" },
  { name: "about", text: "About" },
  { name: "contact", text: "Contact" },
];
</script>
<template>
  <div>
    <ThePage title="Offcanvas" />
    <h1>Offcanvas</h1>
    <button
      :disabled="!ready"
      class="btn btn-primary"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasExample"
      aria-controls="offcanvasExample"
    >
      Go to pages
    </button>
    <div
      id="offcanvasExample"
      class="navbar-nav offcanvas offcanvas-end"
      tabIndex="-1"
      aria-labelledby="offcanvasExampleLabel"
    >
      <div class="offcanvas-header bg-light">
        <h5 id="offcanvasExampleLabel" class="offcanvas-title">Pages</h5>
        <button
          type="button"
          class="me-1 btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        />
      </div>
      <div class="offcanvas-body">
        <div data-bs-dismiss="offcanvas">
          <NuxtLink
            v-for="route in routes"
            :key="route.name"
            :to="{ name: route.name }"
            class="nav-link"
          >
            {{ route.text }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
