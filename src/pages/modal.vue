<script setup lang="ts">
useModal();
const src = ref("");
const images = ["boat", "city", "butterfly"];
const show = (image: string) => (src.value = image);
</script>

<template>
  <div>
    <ThePage title="Modal"></ThePage>
    <h1>Modal</h1>
    <ImageBadge
      v-for="image in images"
      :key="image"
      :image="`${image}-thumb.jpg`"
      :text="image"
      data-bs-toggle="modal"
      data-bs-target="#modalImage"
      @click="show(image)"
    />
    <div
      id="modalImage"
      class="modal fade"
      tabindex="-1"
      aria-labelledby="ModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg text-center">
        <img :src="`/images/${src}.jpg`" class="img-fluid rounded" />
      </div>
    </div>
  </div>
</template>
