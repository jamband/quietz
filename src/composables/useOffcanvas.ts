export default function () {
  const ready = ref(false);

  onMounted(() => {
    import("bootstrap/js/dist/offcanvas").then(() => {
      ready.value = true;
    });
  });

  return {
    ready,
  } as const;
}
