<template>

<div>
  <div class="row gy-5 g-xl-8">
    
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
 
</template>

<script lang="ts">
import { defineComponent } from "vue";
import StatisticsWidget5 from "@/components/widgets/statsistics/Widget5.vue";
import Widget3 from "@/components/widgets/charts/Widget3.vue";
import MixedWidget4 from "@/components/widgets/mixed/Widget4.vue";
import MixedWidget5 from "@/components/widgets/mixed/Widget5.vue";
import ListsWidget7 from "@/components/widgets/lists/Widget7.vue";
import TablesWidget9 from "@/components/widgets/tables/Widget9.vue";
import ListsWidget4 from "@/components/widgets/lists/Widget4.vue";
import ListsWidget5 from "@/components/widgets/lists/Widget5.vue";
import ListsWidget3 from "@/components/widgets/lists/Widget3.vue";
import TablesWidget10 from "@/components/widgets/tables/Widget10.vue";

export default defineComponent({
  name: "dashboard-main",
  components: {
    StatisticsWidget5,
    Widget3,
    MixedWidget4,
    MixedWidget5,
    ListsWidget7,
    TablesWidget9,
    ListsWidget4,
    ListsWidget5,
    ListsWidget3,
    TablesWidget10,
  },
});
</script>
