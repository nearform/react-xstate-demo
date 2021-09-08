import { createMachine } from "xstate";

export const machine = createMachine({
  initial: 'off',
  states: {
    off: {
      on: {
        CYCLE: '33%',
      }
    },
    '33%': {
      on: {
        CYCLE: '66%',
      }
    },
    '66%': {
      on: {
        CYCLE: '100%',
      }
    },
    '100%': {
      on: {
        CYCLE: 'off',
      }
    }
  }
});
