export const useNotification = () => {
  type State = {
    message: string;
    delay: number;
    show: boolean;
  };

  type Show = Pick<State, "message" | "delay">;

  const initialValue: State = {
    message: "",
    delay: 5000,
    show: false,
  };

  const state = useState<State>("notification", () => {
    return initialValue;
  });

  const show = ({ message, delay }: Show) => {
    state.value = {
      message,
      delay,
      show: true,
    };
  };

  const clear = () => {
    state.value = initialValue;
  };

  return {
    notification: state,
    showNotification: show,
    clearNotification: clear,
  } as const;
};
