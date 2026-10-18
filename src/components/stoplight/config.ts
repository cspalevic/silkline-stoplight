export type StoplightState = {
  /** How long to stay in this state before moving on, in milliseconds. */
  duration: number;
  /** Any CSS color, shown on this lamp while this state is current. */
  activeColor: string;
  /** Any CSS color, shown on this lamp while another state is current. */
  inactiveColor: string;
  /** Id of the state to enter when this duration elapses. */
  next: string;
};

export type StoplightConfig = {
  initial: string;
  /** Drawn top to bottom in this order. */
  states: Map<string, StoplightState>;
};

/** Green for 5 seconds, yellow for 1 second, then red for 2 seconds. */
export const defaultStoplightConfig: StoplightConfig = {
  initial: "green",
  states: new Map([
    [
      "red",
      {
        duration: 2_000,
        activeColor: "rgb(255, 69, 58)",
        inactiveColor: "rgba(92, 22, 16, 0.95)",
        next: "green",
      },
    ],
    [
      "yellow",
      {
        duration: 1_000,
        activeColor: "hsl(51 100% 52%)",
        inactiveColor: "hsla(42, 55%, 20%, 0.95)",
        next: "red",
      },
    ],
    [
      "green",
      {
        duration: 5_000,
        activeColor: "rgb(48, 209, 88)",
        inactiveColor: "rgba(16, 72, 32, 0.95)",
        next: "yellow",
      },
    ],
  ]),
};
