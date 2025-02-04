import { loadMicroApp } from '../../es';

let app;

function mount() {
  app = loadMicroApp(
    { name: 'react16', entry: '//localhost:7100', container: '#react16' },
    { sandbox: { experimentalStyleIsolation: true } },
  );
}

function unmount() {
  app.unmount();
}

document.querySelector('#mount').addEventListener('click', mount);
document.querySelector('#unmount').addEventListener('click', unmount);

loadMicroApp({ name: 'vue', entry: '//localhost:7101', container: '#vue' });
