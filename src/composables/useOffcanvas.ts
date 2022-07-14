export default function () {
  const ready = ref(false);

  onMounted(async () => {
    await import("bootstrap/js/dist/offcanvas");
    ready.value = true;
  });

  return {
    ready,
  } as const;
}
