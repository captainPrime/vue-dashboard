<template>
  <!--begin::Aside-->
  <div
    id="kt_aside"
    class="aside pb-5 pt-5 pt-lg-0 aside"
    data-kt-drawer="true"
    data-kt-drawer-name="aside"
    data-kt-drawer-activate="{default: true, lg: false}"
    data-kt-drawer-overlay="true"
    data-kt-drawer-width="{default:'80px', '300px': '100px'}"
    data-kt-drawer-direction="start"
    data-kt-drawer-toggle="#kt_aside_mobile_toggle"
  >
    <!--begin::Brand-->
    <div class="aside-logo py-8" id="kt_aside_logo" style="background-color: white !important; height: 113px !important">
      <!--begin::Logo-->
      <router-link to="/dashboard" class="d-flex align-items-center" style="">
        <img
          alt="Logo"
          :src="getAssetPath('media/logos/Group 25.svg')"
          class="h-45px logo"
          style="width: 70px; height: 60px !important"
        />
      </router-link>
      <!--end::Logo-->
    </div>
    <!--end::Brand-->

    <!--begin::Aside menu-->
    <div class="aside-menu flex-column-fluid" id="kt_aside_menu" style="background-color: #F4F4F5; border-right: solid 2px #EAEAEE">
      <h2 style="padding: 30px 10px 10px 10px; text-align: center; color: #888889">Actions </h2>
      <KTMenu />
    </div>
    <!--end::Aside menu-->

    <!--begin::Footer-->
    
    <!--end::Footer-->
  </div>
  <!--end::Aside-->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";
import KTMenu from "@/layouts/main-layout/aside/Menu.vue";
import Dropdown2 from "@/components/dropdown/Dropdown2.vue";
import { asideTheme } from "@/core/helpers/config";

export default defineComponent({
  name: "KTAside",
  components: {
    KTMenu,
    Dropdown2,
  },
  props: {
    lightLogo: String,
    darkLogo: String,
  },
  setup() {
    const { t } = useI18n();

    return {
      asideTheme,
      t,
      getAssetPath,
    };
  },
});
</script>
