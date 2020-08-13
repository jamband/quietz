<template>
  <div>
    <div class="dropdown">
      <button
        id="dropdownSearchButton"
        class="btn dropdown-toggle"
        type="button"
        data-toggle="dropdown"
        aria-expanded="false"
      >
        <span class="pr-1">Search</span>
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
        :class="{ 'text-muted': isUnmatchedCharacter(content) }"
        class="pr-2"
      >{{ content }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      contents: [],
      isMuted: false,
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
      this.isMuted = true
      this.searchValue = character
    },
    isUnmatchedCharacter (content) {
      return this.isMuted && content !== this.searchValue
    },
    refresh () {
      this.isMuted = false
      this.contents = this.generateContents()
    }
  }
}
</script>
