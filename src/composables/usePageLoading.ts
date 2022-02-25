export default function () {
  const { hook } = useNuxtApp();
  const state = ref<"initial" | "start" | "complete">("initial");

  hook("page:start", () => {
    state.value = "start";
  });

  hook("page:finish", () => {
    setTimeout(() => {
      state.value = "complete";
    }, 100);

    setTimeout(() => {
      state.value = "initial";
    }, 500);
  });

  return {
    state,
  } as const;
}
