<template>
  <div>
    <PageTitle />
    <div>
      <div class="row gy-5 g-xl-8" style="margin-top: 30px">
        <TablesWidget9 widget-classes="card-xxl-stretch mb-5 mb-xl-8" />
      </div>

      <div class="row gy-5 g-xl-8">
        <div class="col-xl-8">
          <Widget3
            widget-classes="card-xl-stretch mb-xl-8"
            chart-color="primary"
            chart-height="150"
          />
        </div>

        <div class="col-xl-4">
          <MixedWidget4
            widget-classes="card-xl-stretch"
            chart-height="225"
            chart-color="primary"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/layouts/main-layout/page-title/PageTitle.vue";
import Widget3 from "@/components/widgets/charts/Widget3.vue";
import MixedWidget4 from "@/components/widgets/mixed/Widget4.vue";
import TablesWidget9 from "@/components/widgets/tables/Widget9.vue";

export default defineComponent({
  name: "dashboard-main",
  components: {
    Widget3,
    PageTitle,
    MixedWidget4,
    TablesWidget9,
  },
});
</script>
