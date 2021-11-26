<script setup lang="ts">
import { generateContents } from "~/utils/string";

type Character = "A" | "B" | "C";

useDropdown();
const contents = ref([""]);
const isMatched = ref(false);
const searchValue = ref("");
const characters: Array<Character> = ["A", "B", "C"];

const search = (character: Character) => {
  isMatched.value = true;
  searchValue.value = character;
};

const isMatchedCharacter = (content: string) => {
  return isMatched.value && content === searchValue.value;
};

const refresh = () => {
  isMatched.value = false;
  contents.value = generateContents(characters);
};

onMounted(() => {
  contents.value = generateContents(characters);
});
</script>

<template>
  <div>
    <ThePage title="Dropdown"></ThePage>
    <h1>Dropdown</h1>
    <div class="dropdown">
      <button
        id="dropdownSearchButton"
        class="btn"
        type="button"
        data-bs-toggle="dropdown"
        data-bs-offset="-3,5"
        aria-expanded="false"
      >
        <span class="pe-1">Search</span>
        <IconChevronDown size="0.8em" />
      </button>
      <ul
        class="dropdown-menu shadow-sm bg-light"
        aria-labelledby="dropdownSearchButton"
      >
        <li>
          <button
            type="button"
            class="btn btn-link dropdown-item"
            @click="refresh()"
          >
            Refresh
          </button>
        </li>
        <li><hr class="dropdown-divider" /></li>
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
      <template v-for="(content, index) in contents">
        <mark
          v-if="isMatchedCharacter(content)"
          :key="index + 'matched'"
          class="me-2 p-1 fw-bold font-monospace text-primary"
          >{{ content }}</mark
        >
        <span
          v-else
          :key="index + 'notMatched'"
          class="me-2 p-1 fw-bold font-monospace"
          >{{ content }}</span
        >
      </template>
    </div>
  </div>
</template>
