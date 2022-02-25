export default function () {
  const { afterEach, beforeEach } = useRouter();
  const state = ref<"initial" | "start" | "complete">("initial");

  beforeEach(() => {
    state.value = "start";
  });

  afterEach(() => {
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
