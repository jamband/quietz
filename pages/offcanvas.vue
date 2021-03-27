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
      class="offcanvas offcanvas-end"
      tabIndex="-1"
      aria-labelledby="offcanvasExampleLabel"
    >
      <div class="offcanvas-header">
        <h5 id="offcanvasExampleLabel">Pages</h5>
        <button
          type="button"
          class="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        />
      </div>
      <ul class="list-unstyled">
        <li v-for="route in routes" :key="route.name" class="nav-item">
          <NLink :to="{ name: route.name }" class="nav-link" data-bs-dismiss="offcanvas">
            {{ route.text }}
          </NLink>
        </li>
      </ul>
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
