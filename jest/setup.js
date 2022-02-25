// import 'react-native-gesture-handler/jestSetup';

// jest.mock('react-native-reanimated', () => {
//   const Reanimated = require('react-native-reanimated/mock');

//   // The mock for `call` immediately calls the callback which is incorrect
//   // So we override it with a no-op
//   Reanimated.default.call = () => {};

//   return Reanimated;
// });

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

//a function to tell if a pressable object is disabled or enabled
export function isDisabled(element) {
    return !!element?.props.onStartShouldSetResponder?.testOnly_pressabilityConfig()?.disabled;
  }
