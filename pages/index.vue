<template>
  <nav aria-label="Main navigation">
    <ul class="list-inline">
      <li v-for="route in routes" :key="route.name" class="list-inline-item">
        <NLink :to="{ name: route.name }">{{ route.text }}</NLink>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      routes: [
        { name: 'alert', text: 'Alert' },
        { name: 'collapse', text: 'Collapse' },
        { name: 'dropdown', text: 'Dropdown' },
        { name: 'form', text: 'Form' },
        { name: 'modal', text: 'Modal' },
        { name: 'pagination', text: 'Pagination' },
        { name: 'progress', text: 'Progress' },
        { name: 'ratio', text: 'Ratio' },
        { name: 'toast', text: 'Toast' }
      ]
    }
  }
}
</script>
