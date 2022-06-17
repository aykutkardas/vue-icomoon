
<template>
  <icon name="camera" :size="60" />
  <icon name="document" color="red" :size="30" />
  <icon name="camera" title="Camera" />
</template>

<script>
import Icon from "./components/Icon/Icon.vue";

export default {
  name: "App",
  components: {
    Icon
  },
};
</script>
