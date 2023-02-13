<template>
  <!--begin::Tables Widget 9-->
  <div class="card" :class="widgetClasses">
    <div v-if="loading" >
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div v-if="!loading">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label fw-bold fs-3 mb-1">Vouchers</span>

        <span class="text-muted mt-1 fw-semobold fs-7"
          >Rows per page <span class="badge badge-light">4</span></span
        >
      </h3>

     
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body py-3">
      <!--begin::Table container-->
      <div class="table-responsive">
        <!--begin::Table-->
        <table
          class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4"
        >
          <!--begin::Table head-->
          <thead>
            <tr class="fw-bold text-muted">
              <th class="w-25px">
                <div
                  class="form-check form-check-sm form-check-custom form-check-solid"
                >
                  <input
                    class="form-check-input"
                    type="checkbox"
                    @change="
                      checkedRows.length === 6
                        ? (checkedRows.length = 0)
                        : (checkedRows = [0, 1, 2, 3, 4, 5])
                    "
                  />
                </div>
              </th>
              <th class="min-w-150px">VOUCHER CODE</th>
              <th class="min-w-140px">TIME VALID(minutes)</th>
              <th class="min-w-120px">SOURCE</th>
              <th class="min-w-100px">CREATED</th>
              <th class="min-w-100px text-end">ACTION</th>
            </tr>
          </thead>
          <!--end::Table head-->

          <!--begin::Table body-->
          <tbody>
            <template v-for="(item, index) in list" :key="id">
              <tr>
                <td>
                  <div
                    class="form-check form-check-sm form-check-custom form-check-solid"
                  >
                    <input
                      class="form-check-input widget-9-check"
                      type="checkbox"
                      :value="index"
                      v-model="checkedRows"
                    />
                  </div>
                </td>

                <td>
                  <div class="d-flex align-items-center">
                    <div class="symbol symbol-45px me-5">
                      <img src="../../src/assets/images/routerv.png" alt="" />
                    </div>
                    <div class="d-flex justify-content-start flex-column">
                      <a
                        href="#"
                        class="text-dark fw-bold text-hover-primary fs-6"
                        >Router {{ item.id }}</a
                      >

                      <span
                        class="text-muted fw-semobold text-muted d-block fs-7"
                        >{{ item.serial_number }}</span
                      >
                    </div>
                  </div>
                </td>

                <td>
                  <a
                    href="#"
                    class="text-dark fw-bold text-hover-primary d-block fs-6"
                    >{{ item.imei ? item.imei: null }}</a
                  >
                </td>

                <td>
                  <a
                    href="#"
                    class="text-dark fw-bold text-hover-primary d-block fs-6"
                    >{{ item.nasidentifier }}</a
                  >
                  <span
                    class="text-muted fw-semobold text-muted d-block fs-7"
                    >{{ item.os_version_id }}</span
                  >
                </td>

                <td>
                  <a
                    href="#"
                    class="text-dark fw-bold text-hover-primary d-block fs-6"
                    >{{ item.model_number }}</a
                  >
                </td>
                
               
                <td class="text-end">
                 
                  <a
                    href="#"
                    class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
                  >
                    <span class="svg-icon svg-icon-3">
                      <inline-svg
                        :src="
                          getAssetPath(
                            '/media/icons/duotune/general/gen027.svg'
                          )
                        "
                      />
                    </span>
                  </a>
                </td>
              </tr>
            </template>
          </tbody>
          <!--end::Table body-->
        </table>
        <!--end::Table-->
      </div>
      <!--end::Table container-->
    </div>
    </div>
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
import axios from "axios";

const LS_BUILDER_TAB_NAME =
  "layoutBuilderTabIndex_" + import.meta.env.VITE_APP_DEMO;

export default defineComponent({
  name: "layout-builder",
  components: {},
  props: {
    widgetClasses: String,
  },
  data() {
    const checkedRows = ref<Array<number>>([]);
    return {
      loading: true,
      list: [{
        id: "",
        serial_number: "",
        imei: "",
        nasidentifier: "",
        os_version_id: "",
        model_number: "",
        last_contact_ip: "",
        last_contact: "",
      }],
      checkedRows,
      getAssetPath,
    };
  },
  mounted() {
    this.fetchEndpointData();
  },
  methods: {
    async fetchEndpointData() {
      try {
        console.log('fetching vouchers...')
        const response = await axios.get("https://dev.api.shirikihub.com/api/v1/vouchers/");
        this.list = response.data;
        //this.loading = false;
        console.log(this.list)
      } catch (error) {
        console.error(error);
        //this.loading = false;
      }
    }
    },
});
</script>
