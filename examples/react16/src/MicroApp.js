import { registerMicroApps, start } from 'qiankun';
import React, {useEffect} from 'react'

export default function MicroApp() {
  useEffect(() => {
    const getActiveRule = (hash) => (location) => location.hash.startsWith(hash);
    registerMicroApps(
      [
        {
          name: 'vue',
          entry: '//localhost:7101',
          container: '#subapp-viewport',
          activeRule: getActiveRule('#/vue'),
        },
    ])

    start()
  }, []);
  return <div id="subapp-viewport"></div>
}
