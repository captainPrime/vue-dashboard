<template>
  <div>
    <PageTitle />
    <Button
      class="btn btn-primary"
      style="float: right; margin-top: -40px"
      type="button"
    >
      + Add Media</Button
    >
    <div class="card" :class="widgetClasses" style="margin-top: 30px">
      <div v-if="loading">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      <div v-if="!loading">
        <div class="card-header border-0 pt-5">
          <h3 class="card-title align-items-start flex-column">
            <span class="card-label fw-bold fs-3 mb-1">Files</span>

            <span class="text-muted mt-1 fw-semobold fs-7"
              >Rows per page
              <span class="badge badge-light">{{ list.length }}</span></span
            >
          </h3>
        </div>
        <div class="card-body py-3">
          <div class="table-responsive">
            <table
              class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4"
            >
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
                  <th class="min-w-150px">REALMS</th>
                  <th class="min-w-140px">FILE TYPE</th>
                  <th class="min-w-120px">STATUS</th>
                  <th class="min-w-100px">DOWNLOAD</th>
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
                        <div class="d-flex justify-content-start flex-column">
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

                    <td>
                      <a
                        href="#"
                        class="text-dark fw-bold text-hover-primary d-block fs-6"
                        ><a :href="item.file" class="btn btn-primary"
                          >download</a
                        ></a
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
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import PageTitle from "@/layouts/main-layout/page-title/PageTitle.vue";
import { defineComponent, onMounted, ref } from "vue";
import axios from "axios";

export default defineComponent({
  name: "files",
  components: {
    PageTitle,
  },
  props: {
    widgetClasses: String,
  },
  data() {
    const checkedRows = ref<Array<number>>([]);
    return {
      loading: true,
      list: [
        {
          id: "",
          realm_name: "",
          realm: "",
          file_type: "",
          file: "",
          status: "",
        },
      ],
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
        console.log("fetching files...");
        const response = await axios.get(
          "https://dev.api.shirikihub.com/api/v1/files/"
        );
        this.list = response.data;
        this.loading = false;
        console.log(this.list);
      } catch (error) {
        console.error(error);
        this.loading = false;
      }
    },
  },
});
</script>
