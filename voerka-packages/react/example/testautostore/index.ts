// import { AutoStore, configurable } from 'autostore';
// const store = new AutoStore({
//     name: configurable('test-autostore'),
// });
// console.log(`store.name`, store.state.name);
// globalThis.$store = store;
import { createStore } from '@autostorejs/react';
import { configurable } from 'autostore';
const store = createStore({
    name: configurable('test-autostore'),
});
console.log(`store.name`, store.state.name);
globalThis.$store = store;
