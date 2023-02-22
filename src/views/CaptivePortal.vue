<template>
  <div>
    <!--begin::Tables Widget 9-->
    <PageTitle />
    <!--begin::Tables Widget 9-->

    <div class="card" :class="widgetClasses" style="margin-top: 30px">
      <!--begin::Header-->
      <div v-if="loading">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>

      <div v-if="!loading">
        <div class="card-header border-0 pt-5">
          <div v-if="emptyList">
            <div class="no-captive">
              <div>
                <inline-svg
                  :src="
                    getAssetPath('/media/icons/duotune/general/cpgroup2.svg')
                  "
                />
              </div>
              <Button
                class="btn btn-primary"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#kt_modal_create_app"
                style="margin-left: 5px"
              >
                + Customize now</Button
              >
            </div>
          </div>

          <div v-if="!emptyList">
            <h3 class="card-title align-items-start flex-column">
              <span class="card-label fw-bold fs-3 mb-1">Captive Portal</span>

              <span class="text-muted mt-1 fw-semobold fs-7"
                >Management of captive portal template</span
              >
            </h3>

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
                      <th class="min-w-150px">Name</th>
                      <th class="min-w-140px">Created at</th>
                      <th class="min-w-120px">Last updated</th>
                      <th class="min-w-100px text-end">ACTION</th>
                    </tr>
                  </thead>
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
                              <img
                                src="../../public/media/icons/duotune/general/file.png"
                                alt=""
                              />
                            </div>
                            <div
                              class="d-flex justify-content-start flex-column"
                            >
                              <a
                                href="#"
                                class="text-dark fw-bold text-hover-primary fs-6"
                                >{{ item.realm_name }}</a
                              >

                              <span
                                class="text-muted fw-semobold text-muted d-block fs-7"
                                >{{ item.realm }}</span
                              >
                            </div>
                          </div>
                        </td>

                        <td>
                          <a
                            href="#"
                            class="text-dark fw-bold text-hover-primary d-block fs-6"
                            >{{ item.file_type }}</a
                          >
                        </td>

                        <td>
                          <a
                            href="#"
                            class="text-dark fw-bold text-hover-primary d-block fs-6"
                            >{{ item.status }}</a
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
              </div>
              <!--end::Table-->
            </div>
            <!--end::Table container-->
          </div>
        </div>
      </div>
    
    </div>
  </div>
</template>

<style>
.no-captive {
  padding: 100px;
  display: block;
  margin: 0 auto;
}

@media only screen and (max-width: 600px) {
  .no-captive {
    padding: 100px;
   display: block;
   margin: 0 auto;
   margin-left: -20px;
  }
}

@media only screen and (min-width: 1000px) {
  .no-captive {
    padding: 100px;
    display: block;
    margin: 0 auto;
    margin-left: 400px;
  }
}
</style>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent, onMounted, ref } from "vue";
import PageTitle from "@/layouts/main-layout/page-title/PageTitle.vue";
import { config } from "@/core/helpers/config";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { themeName } from "@/core/helpers/documentation";
import { LS_CONFIG_NAME_KEY } from "@/stores/config";

const LS_BUILDER_TAB_NAME =
  "layoutBuilderTabIndex_" + import.meta.env.VITE_APP_DEMO;

export default defineComponent({
  name: "captive-portal-d",
  components: { PageTitle },
  props: {
    widgetClasses: String,
  },
  setup() {
    const checkedRows = ref<Array<number>>([]);
    const list = [];
    return {
      loading: false,
      emptyList: true,
      list,
      checkedRows,
      getAssetPath,
    };
  },
  mounted() {
    console.log("fetching captive portal...");
    fetch("")
      .then((response) => response.json())
      .then((data) => {
        this.list = data.results;
        console.log(this.list);
      });
  },
});
</script>
