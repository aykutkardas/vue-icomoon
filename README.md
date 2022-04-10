![Vue-Icomoon Logo](/banner.png)

[![npm](https://img.shields.io/npm/v/vue-icomoon?color=%234fc921)](https://www.npmjs.com/package/vue-icomoon)
[![License](https://img.shields.io/badge/License-MIT-green.svg?color=%234fc921)](https://opensource.org/licenses/MIT)

**📦 Zero Dependencies**

It makes it very simple to use SVG icons in your `Vue3` projects.

## [Demo](https://codesandbox.io/s/vue-icomoon-demo-nqb0z)

## Install

```
npm install vue-icomoon
```

## Usage

You can use the icons you selected on IcoMoon by downloading the `selection.json` file.

https://icomoon.io/app/

### Declare

Icon.vue

```html
<template>
  <icomoon :iconSet="iconSet" v-bind="props" />
</template>

<script>
  import { Icomoon } from "vue-icomoon";
  import iconSet from "./selection.json";

  export default {
    name: "Icon",
    components: {
      Icomoon,
    },
    props: {
      name: {
        type: String,
        required: true,
      },
    },
    setup(props) {
      return {
        props,
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
    components: {
      Icon,
    },
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
