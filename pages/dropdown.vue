<template>
  <div>
    <div class="dropdown">
      <button
        id="dropdownSearchButton"
        class="btn dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <span class="pe-1">Search</span>
        <IconChevronDown />
      </button>
      <ul class="dropdown-menu shadow-sm bg-light" aria-labelledby="dropdownSearchButton">
        <li>
          <button
            type="button"
            class="btn btn-link dropdown-item"
            @click="refresh()"
          >
            Refresh
          </button>
        </li>
        <li><hr class="dropdown-divider"></li>
        <li v-for="(character, index) in characters" :key="index">
          <button
            type="button"
            class="btn btn-link dropdown-item"
            @click="search(character)"
          >
            {{ character }}
          </button>
        </li>
      </ul>
    </div>
    <div class="mt-3 text-center">
      <span
        v-for="(content, index) in contents"
        :key="index"
        :class="{ 'mark': isMatchedCharacter(content) }"
        class="me-2"
      >{{ content }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      contents: [],
      isMatched: false,
      searchValue: ''
    }
  },
  computed: {
    characters () {
      return ['a', 'b', 'c']
    }
  },
  mounted () {
    import('bootstrap/js/dist/dropdown')
    this.contents = this.generateContents()
  },
  methods: {
    generateContents () {
      return [...Array(15)].map(() => {
        return this.characters[Math.floor(Math.random() * Math.floor(3))]
      })
    },
    search (character) {
      this.isMatched = true
      this.searchValue = character
    },
    isMatchedCharacter (content) {
      return this.isMatched && content === this.searchValue
    },
    refresh () {
      this.isMatched = false
      this.contents = this.generateContents()
    }
  }
}
</script>
