<template>
  
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

interface Filter {
  status: string;
  author: boolean;
  customer: boolean;
  notifications: boolean;
}

export default defineComponent({
  name: "dropdown-1",
  components: {},
  setup() {
    const data = ref<Filter>({
      status: "1",
      author: true,
      customer: true,
      notifications: true,
    });

    return {
      data,
    };
  },
});
</script>
