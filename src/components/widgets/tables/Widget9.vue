<template>
  <!--begin::Tables Widget 9-->
  <div class="card" :class="widgetClasses">

    <div v-if="loading" >
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>

    <div >
    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label fw-bold fs-3 mb-1">Routers</span>

        <span class="text-muted mt-1 fw-semobold fs-7"
          >Rows per page <span class="badge badge-light">{{list.length}}</span></span
        >
      </h3>

     
    </div>
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
              <th class="min-w-150px">Serial Number</th>
              <th class="min-w-140px">IMEI</th>
              <th class="min-w-120px">OS VERSION ID</th>
              <th class="min-w-100px">MODEL NUMBER</th>
              <th class="min-w-140px">LAST CONTACT IP</th>
              <th class="min-w-120px">ALLOCATION DATE</th>
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
                      <img src="../../../assets/images/router.png" alt="" />
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
                
                <td>
                  <a
                    href="#"
                    class="text-dark fw-bold text-hover-primary d-block fs-6"
                    >{{ item.last_contact_ip }}</a
                  >
                  <span
                    class="text-muted fw-semobold text-muted d-block fs-7"
                    >{{ item.last_contact }}</span
                  >
                </td>

                <td>
                  <a
                    href="#"
                    class="text-dark fw-bold text-hover-primary d-block fs-6"
                    >{{ item.serial_number }}</a
                  >
                </td>

                <td class="text-end">
                  <a
                    href="#"
                    class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                  >
                    <span class="svg-icon svg-icon-3">
                      <inline-svg
                        :src="
                          getAssetPath(
                            '/media/icons/duotune/general/gen019.svg'
                          )
                        "
                      />
                    </span>
                  </a>

                  <a
                    href="#"
                    class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                  >
                    <span class="svg-icon svg-icon-3">
                      <inline-svg
                        :src="
                          getAssetPath('media/icons/duotune/art/art005.svg')
                        "
                      />
                    </span>
                  </a>

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
    <!--begin::Body-->
  </div>
  <!--end::Tables Widget 9-->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import axios from "axios";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "kt-widget-9",
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
        console.log('fetching routers...')
        const response = await axios.get("https://dev.api.shirikihub.com/api/v1/routers/");
        this.list = response.data.results;
        this.loading = false;
        console.log(this.list)
      } catch (error) {
        console.error(error);
        this.loading = false;
      }
    }
    },
  },);
</script>
