export default function (initialValue: boolean) {
  const state = ref(initialValue);

  const toggle = () => {
    state.value = !state.value;
  };

  return [state, toggle] as const;
}
