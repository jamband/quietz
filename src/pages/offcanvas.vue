<template>
  <div>
    <button
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
        <NLink
          v-for="route in routes"
          :key="route.name"
          :to="{ name: route.name }"
          class="nav-link"
          data-bs-dismiss="offcanvas"
        >
          {{ route.text }}
        </NLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      routes: [
        { name: 'index', text: 'Home' },
        { name: 'contact', text: 'Contact' },
        { name: 'about', text: 'About' }
      ]
    }
  },
  mounted () {
    import('bootstrap/js/dist/offcanvas')
  }
}
</script>
