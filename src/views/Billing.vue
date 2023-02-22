<template>
  <div>
    <PageTitle />
  <div class="row gy-5 g-xl-8" style="margin-top: 30px">
   
      <MixedWidget6
        widget-classes="card-xl-stretch"
        chart-height="225"
        chart-color="primary"
      />
    
  </div>
  </div>
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import MixedWidget6 from "@/components/widgets/mixed/Widget6.vue";
import PageTitle from "@/layouts/main-layout/page-title/PageTitle.vue";
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "billings",
  components: { MixedWidget6, PageTitle },
  props: {
    widgetClasses: String,
  },
  setup() {
    const checkedRows = ref<Array<number>>([]);
    const list = [];
    return {
      list,
      checkedRows,
      getAssetPath,
    };
  },
  mounted() {
    console.log("fetching files...");
    fetch("https://dev.api.shirikihub.com/api/v1/routers/")
      .then((response) => response.json())
      .then((data) => {
        this.list = data.results;
        console.log(this.list);
      });
  },
});
</script>
