<template>
  <svg :viewBox="viewBox" :style="style" v-bind="svgProps">
    <path v-for="(path, index) in paths" :d="path.d" />
  </svg>
</template>

<script>
export default {
  name: "Icomoon",
  props: {
    iconSet: {
      type: Object,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: "",
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
      default: {}
    }
  },
  setup({
    iconSet,
    icon,
    size,
    title,
    disableFill,
    removeInitialStyle,
    ...svgProps
  }) {
    const initialStyle = {
      display: "inline-block",
      stroke: "currentColor",
      fill: "currentColor",
    };

    const currentIcon = iconSet.icons.find(
      (item) => item.properties.name === icon
    );

    if (!currentIcon) {
      return {};
    }

    const { width = "1024" } = currentIcon.icon;
    const viewBox = `0 0 ${width} 1024`;
    const style = {
      ...(removeInitialStyle ? {} : initialStyle),
    }

    if (size) {
      style.width = size;
      style.height = size;
    }


    const paths = currentIcon.icon.paths.map((path, index) => {
      const pathProps = {
        d: path,
        ...(!disableFill ? currentIcon.icon.attrs[index] : {}),
      };

      return pathProps;
    });

    return {
      currentIcon,
      viewBox,
      style,
      paths,
      svgProps
    };
  },
};
</script>
