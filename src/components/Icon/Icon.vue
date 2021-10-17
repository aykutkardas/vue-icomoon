
<template>
  <icomoon :iconSet="iconSet" v-bind="props" />
</template>

<script>
import Icomoon from "../Icomoon.vue";
import iconSet from "./selection.json";

export default {
  name: "App",
  components: {
    Icomoon
  },
  props: {
    icon: {
      type: String,
      required: true
    }
  },
  setup(props) {
    return {
      props,
      iconSet
    }
  },
};
</script>
