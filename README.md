# vue-jest-interface-repro

A repro repo for https://github.com/vuejs/vue-jest/issues/189

## Repro steps for https://github.com/vuejs/vue-jest/issues/189

1. `git clone https://github.com/jackdomleo7/vue-jest-interface-repro`
2. `cd vue-jest-interface-repro`
3. `npm i`
4. Notice the [./src/components/ListOfLinks.vue](https://github.com/jackdomleo7/vue-jest-interface-repro/blob/master/src/components/ListOfLinks.vue) component - it has an exported interface `ILink` which is used on the `list` prop
5. Within [./src/views/About.vue](https://github.com/jackdomleo7/vue-jest-interface-repro/blob/master/src/views/About.vue), we import `ListOfLinks` and the interface `ILink` and we use `ILink` to structure our array to pass as the `list` prop to `<list-of-links />`
6. Run `npm run serve` and navigate to `/about` to see this component in use
7. Within the [./tests/unit/ListOfLinks.spec.ts](https://github.com/jackdomleo7/vue-jest-interface-repro/blob/master/tests/unit/ListOfLinks.spec.ts) file, we also import the Vue component, but notice the interface is currently commented out...
8. Uncomment the sections of code on lines `2` and `6`. As you can see, this is very similar usage to how we used the interface in `About.vue`, however within the unit tests, the tests fail when run (and VS Code intellisense complains) - this is the issue being described in https://github.com/vuejs/vue-jest/issues/189

## Scripts

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```