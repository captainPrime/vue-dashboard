<template>
    <!--begin::Tables Widget 9-->
    <div class="card" :class="widgetClasses">
      <!--begin::Header-->
      <div class="card-header border-0 pt-5">
        <h3 class="card-title align-items-start flex-column">
          <span class="card-label fw-bold fs-3 mb-1">Support</span>
  <!-- 
          <span class="text-muted mt-1 fw-semobold fs-7"
            >Rows per page <span class="badge badge-light">4</span></span
          > -->
        </h3>
  
       
      </div>
      <!--end::Header-->
  
      <!--begin::Body-->
    
      <!--begin::Body-->
    </div>
    <!--end::Tables Widget 9-->
  </template>
  
  <script lang="ts">
  import { getAssetPath } from "@/core/helpers/assets";
  import { defineComponent, onMounted, ref } from "vue";
  import { config } from "@/core/helpers/config";
  import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
  import { themeName } from "@/core/helpers/documentation";
  import { LS_CONFIG_NAME_KEY } from "@/stores/config";
  
  const LS_BUILDER_TAB_NAME =
    "layoutBuilderTabIndex_" + import.meta.env.VITE_APP_DEMO;
  
  export default defineComponent({
    name: "support",
    components: {},
    props: {
      widgetClasses: String,
    },
    setup() {
      const checkedRows = ref<Array<number>>([]);
      const list = [
      ];
      return {
        list,
        checkedRows,
        getAssetPath,
      };
    },
    mounted() {
      console.log("fetching files...")
      fetch('https://dev.api.shirikihub.com/api/v1/routers/')
        .then(response => response.json())
        .then(data => {
          this.list = data.results;
          console.log(this.list)
        });
       
    },
    // method: {
    //   async fetchRouter(){
    //     console.log("this is the data")
    //     const res = await fetch('https://dev.api.shirikihub.com/api/v1/routers/')
    //     const data = await res.json()
     
    //     return data
    //   }
    // },
    // async created() {
    //   this.list = await this.fetchRouter();
    // },
  });
  </script>
  