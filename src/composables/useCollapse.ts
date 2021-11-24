export default function () {
  const collapseRef = ref<HTMLDivElement>();
  const disabled = ref(false);
  const isCollapsed = ref(true);
  const ready = ref(false);

  const toggleCollapse = () => {
    disabled.value = true;
    isCollapsed.value = !isCollapsed.value;

    if (collapseRef.value) {
      collapseRef.value.addEventListener("shown.bs.collapse", () => {
        disabled.value = false;
      });

      collapseRef.value.addEventListener("hidden.bs.collapse", () => {
        disabled.value = false;
      });
    }
  };

  onMounted(() => {
    import("bootstrap/js/dist/collapse").then(() => {
      ready.value = true;
    });
  });

  return {
    collapseRef,
    disabled,
    isCollapsed,
    ready,
    toggleCollapse,
  } as const;
}
