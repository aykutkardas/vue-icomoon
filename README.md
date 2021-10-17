# vue-icomoon

[![npm](https://img.shields.io/npm/v/vue-icomoon?color=%234fc921)](https://www.npmjs.com/package/vue-icomoon)
[![License](https://img.shields.io/badge/License-MIT-green.svg?color=%234fc921)](https://opensource.org/licenses/MIT)

**📦 Zero Dependencies**

With vue-icomoon you can easily use the icons you have selected or created in icomoon.

## Install

```
npm install vue-icomoon
```

## Usage

You can use the icons you selected on IcoMoon by downloading the `selection.json` file.

https://icomoon.io/app/

### Declare

> Coming Soon...

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
