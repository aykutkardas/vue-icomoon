![Vue-Icomoon Logo](/banner.png)

[![npm](https://img.shields.io/npm/v/vue-icomoon?color=%234fc921)](https://www.npmjs.com/package/vue-icomoon)
![npm](https://img.shields.io/npm/dm/vue-icomoon)
[![License](https://img.shields.io/badge/License-MIT-green.svg?color=%234fc921)](https://opensource.org/licenses/MIT)

**📦 Zero Dependencies**

It makes it very simple to use SVG icons in your `Vue3` projects.

## [Demo](https://codesandbox.io/s/vue-icomoon-demo-nqb0z) - [Buy Me a Coffee](https://www.buymeacoffee.com/aykutkardas)

## Install

```
npm install vue-icomoon
```

## Usage

#### You can use [svgps.app](https://svgps.app/) to access over `40,000` free icons and convert your own icons into `selection.json`.

Or you can use [IcoMoon](https://icomoon.io/app/) to generate the `selection.json` file.

### Declare

Icon.vue

```html
<template>
  <icomoon :iconSet="iconSet" v-bind="$props" />
</template>

<script>
  import { Icomoon } from "vue-icomoon";
  import iconSet from "./selection.json";

  export default {
    name: "Icon",
    components: { Icomoon },
    setup() {
      return {
        iconSet,
      };
    },
  };
</script>
```

### Use

```html
<template>
  <icon name="camera" :size="50" color="#5096ec" />
</template>

<script>
  import Icon from "./components/Icon/Icon.vue";

  export default {
    components: { Icon },
  };
</script>
```

## Props List

| Name               | Type          | Default   | Sample                        |
| ------------------ | ------------- | --------- | ----------------------------- |
| iconSet            | Object        | undefined | "selection.json file content" |
| name               | String        | undefined | "home"                        |
| size               | Number,String | undefined | "1em", 10, "100px"            |
| color              | String        | undefined | "red", "#f00", "rgb(0,0,0)"   |
| style              | Object        | {...}     | { color: '#ff0'}              |
| title              | String        | undefined | "Icon Title"                  |
| class              | String        | undefined | "icomoon"                     |
| disableFill        | Boolean       | undefined | true                          |
| removeInitialStyle | Boolean       | undefined | true                          |

## iconList

You can use the iconList method to see a complete list of icons you can use.

```js
import { iconList } from "vue-icomoon";
import iconSet from "./selection.json";

iconList(iconSet);

// sample output
[
  "document",
  "camera",
  "genius",
  "chat",
  "heart1",
  "alarmclock",
  "star-full",
  "heart",
  "play3",
  "pause2",
  "bin1",
];
```

### Related Links

- [react-icomoon](https://github.com/aykutkardas/react-icomoon)
- [preact-icomoon](https://github.com/aykutkardas/preact-icomoon)
- [svelte-icomoon](https://github.com/aykutkardas/svelte-icomoon)
