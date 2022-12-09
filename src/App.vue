
<template>
  <icon icon="camera" :size="60" />
  <icon icon="document" color="red" />
  <icon icon="camera" title="take photo" />
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
