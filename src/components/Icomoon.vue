<template>
  <svg v-if="iconData" :viewBox="iconData.viewBox" :style="iconData.style">
    <path v-for="path in iconData.paths" :key="path.key" :d="path.d" />
    <title v-if="title">{{ title }}</title>
  </svg>
</template>

<script>
import { getComputedSvgData } from "compute-svg-data";

export default {
  name: "Icomoon",
  props: {
    iconSet: {
      type: Object,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: null,
    },
    size: {
      type: Number,
      default: 16,
    },
    disableFill: {
      type: Boolean,
      default: false,
    },
    removeInitialStyle: {
      type: Boolean,
      default: false,
    },
    style: {
      type: Object,
      default: {},
    },
  },
  setup(props) {
    const iconData = getComputedSvgData(props.iconSet, props.name, props);

    if (!iconData) return {};

    return { iconData};
  },
};
</script>
