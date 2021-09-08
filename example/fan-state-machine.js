import { createMachine, interpret } from 'xstate';

// An example of a statechart.

const machine = createMachine({
  initial: "powered_off",
  states: {
    powered_on: {
      initial: "oscillating_off",
      on: {
        TURN_OFF: 'powered_off'
      },
      states: {
        oscillating_off: {
          on: {
            TOGGLE: 'oscillating_on'
          }
        },
        oscillating_on: {
          on: {
            TOGGLE: 'oscillating_off'
          }
        }
      }
    },
    powered_off: {
      on: {
        TURN_ON: 'powered_on'
      }
    }
  }
});

// Usage:

const service = interpret(machine).start();
service.send("TURN_ON"); // service.state.value == "powered_on"
service.send("TOGGLE"); // service.state.value == "powered_on.oscillating_on"
service.send("TOGGLE"); // service.state.value == "powered_on.oscillating_off"
service.send("TURN_OFF"); // service.state.value == "powered_off"