import { Platform } from 'react-native';
// change to this cz the normal one from the portal dont support web
if (__DEV__ && Platform.OS !== 'web') {
  const Reactotron = require('reactotron-react-native').default;
  Reactotron
    .configure({ 
        host: "192.168.68.53",  // your PC's IP
        port: 9090              // ← add this explicitly
    })
    .useReactNative()
    .connect();
}