import { createMachine, interpret } from 'xstate';

const lightMachine = createMachine({
  // Your state machine blueprint here
  id: 'lightStatus',
  initial: 'red',
  states: {
    'red': {
      on: {
        changeLight: 'green',
      }
    },
    green: { //green to go faster
      on: {
        changeLight: 'yellow', //go faster
      }
    },
    yellow: { //go faster to red
      on: {
        changeLight: 'red',
      }
    },
  },
})


const service = interpret(lightMachine);

export { lightMachine, service };