import {
  createWorkletRuntime,
  runOnJS,
  runOnRuntime,
} from 'react-native-reanimated';

const runtime = createWorkletRuntime('New');

const scriptExcuter = async (script: string) => {
  return new Promise(async (res) => {
    function workletExecute() {
      'worklet';
      'use strict';
      // Safety eval because on worklet thread
      try {
        // eslint-disable-next-line no-eval
        const result = eval(`
          "use strict";
          ${script}
        `);
        runOnJS(res)(result);
      } catch {
        runOnJS(res)(null);
      }
    }
    runOnRuntime(runtime, workletExecute)();
  });
};

export default scriptExcuter;
