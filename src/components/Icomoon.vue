<template>
  <svg
    v-if="currentIcon"
    :viewBox="viewBox"
    :style="style"
    v-bind="{ style, color }"
  >
    <path
      v-for="({ d, ...attrs }, index) in paths"
      :d="d"
      :key="index"
      v-bind="attrs"
    />
    <title v-if="title">{{ title }}</title>
  </svg>
</template>

<script>
import { computed, ref, toRefs, watchEffect } from "vue";

export default {
  name: "Icomoon",
  props: {
    iconSet: {
      type: Object,
      required: true,
    },
    icon: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: null,
    },
    color: {
      type: String,
      default: "",
    },
    size: {
      type: [String, Number],
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
    const {
      iconSet,
      icon,
      name,
      size,
      title,
      disableFill,
      removeInitialStyle,
    } = toRefs(props);

    const initialStyle = {
      display: "inline-block",
      stroke: "currentColor",
      fill: "currentColor",
    };

    const iconName = computed(() => icon.value || name.value);

    const currentIcon = computed(() =>
      iconSet.value.icons.find(
        (item) => item.properties.name === iconName.value
      )
    );

    if (!currentIcon.value) return {};

    const viewBox = computed(
      () => `0 0 ${currentIcon.value.icon.width || "1024"} 1024`
    );

    const style = ref({
      ...(removeInitialStyle.value ? {} : initialStyle),
    });

    watchEffect(() => {
      if (size.value) {
        style.value.width = size.value;
        style.value.height = size.value;
      }
    });

    const paths = computed(() =>
      currentIcon.value.icon.paths.map((path, index) => {
        const attrs = currentIcon.value.icon.attrs
          ? currentIcon.value.icon.attrs[index]
          : null;

        const pathProps = {
          d: path,
          ...(!disableFill.value && attrs ? attrs : {}),
        };

        return pathProps;
      })
    );

    return {
      currentIcon,
      viewBox,
      style,
      paths,
    };
  },
};
</script>
