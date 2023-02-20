<template>
  <!--begin::Form-->
  <form class="form" id="kt_modal_create_app_form" @submit="handleStep">
    <!--begin::Step 1-->
    <div class="row" style="margin-top: 30px">
      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <h3 class="card-title align-items-start flex-column" style="padding-bottom: 50px">
          <span class="card-label fw-bold fs-1 mb-1" >Customize Captive Portal</span>
        </h3>
    <div class="current" data-kt-stepper-element="content">
      <div class="w-100">
        <!--begin::Input group-->
        <div class="fv-row mb-10">
         
          <Field
            type="file"
            class="form-control form-control-lg form-control-solid"
            name="logo"
            placeholder=""
          />
          <ErrorMessage
            class="fv-plugins-message-container invalid-feedback"
            name="logo"
          />
          
          <!--end::Input-->
        </div>

        <div class="fv-row mb-10">
          <Field
            type="file"
            class="form-control form-control-lg form-control-solid"
            name="backgroudImage"
          />
          
          <ErrorMessage
            class="fv-plugins-message-container invalid-feedback"
            name="backgroudImage"
          />
          
          <!--end::Input-->
        </div>
        <div class="fv-row mb-10">
         
          <Field
            type="text"
            class="form-control form-control-lg form-control-solid"
            name="backgroudImage"
            placeholder="Heading Title"
          />
          <ErrorMessage
            class="fv-plugins-message-container invalid-feedback"
            name="Heading"
          />
          
          <!--end::Input-->
        </div>
        <div class="fv-row mb-10">
         
          <TextArea
            type="text"
            class="form-control form-control-lg form-control-solid"
            name="backgroudImage"
            placeholder="Description Text"
          />
          <ErrorMessage
            class="fv-plugins-message-container invalid-feedback"
            name="Description"
          />
          
          <!--end::Input-->
        </div>

        <div class="fv-row mb-10">
         
          <Field
            type="text"
            class="form-control form-control-lg form-control-solid"
            name="backgroudImage"
            placeholder="#fffff"
          />
          <ErrorMessage
            class="fv-plugins-message-container invalid-feedback"
            name="button-color"
          />
          
          <!--end::Input-->
        </div>

        <div class="text-center fv-row mb-7">
          <a href="#">
            <button
              style="width: 100%; background-color: #ffc007; color: black"
              class="btn btn-lg btn-primary"
            >
              <span class="indicator-label"> Preview Portal </span>
              <span class="indicator-progress">
                Please wait...
                <span
                  class="spinner-border spinner-border-sm align-middle ms-2"
                ></span>
              </span>
            </button>
          </a>
        </div>
  
        <div class="text-center">
          <button
            id="kt_sign_up_submit"
            ref="submitButton"
            type="submit"
            style="width: 100%"
            class="btn btn-lg btn-primary"
          >
            <span class="indicator-label"> Save Publish </span>
            <span class="indicator-progress">
              Please wait...
              <span
                class="spinner-border spinner-border-sm align-middle ms-2"
              ></span>
            </span>
          </button>
        </div>
        
        
      </div>
    </div>
    </div>

    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 preview">
      <h3 class="card-title align-items-start flex-column" style="padding-bottom: 50px">
        <span class="card-label fw-bold fs-1 mb-1" >Preview portal</span>
      </h3>
      <iframe :src="iframeSrc" :width="iframeWidth" :height="iframeHeight"></iframe>
    </div>
    </div>
    
   
    <!--end::Actions-->
  </form>
  <!--end::Form-->
</template>

<style>

@media only screen and (max-width: 600px) {
  .preview {
    margin-top: 30px;
  }
}

</style>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent, ref, computed, onMounted } from "vue";
import { StepperComponent } from "@/assets/ts/components";
import Swal from "sweetalert2";
import { useForm } from "vee-validate";
import { Field, ErrorMessage } from "vee-validate";
import * as Yup from "yup";

import { getIllustrationsPath } from "@/core/helpers/assets";

interface Step1 {

}

interface Step2 {
 
}

interface Step3 {
 
}

interface Step4 {
  
}

interface KTCreateApp extends Step1, Step2, Step3, Step4 {}

export default defineComponent({
  name: "create-app-modal",
  components: {
    Field,
    ErrorMessage,
  },
  setup() {
    const currentStepIndex = ref(0);
    const createAppRef = ref<HTMLElement | null>(null);
    const stepperObj = ref<StepperComponent | null>(null);

    onMounted(() => {
      createAppRef.value = document.getElementById(
        "kt_modal_create_app_stepper"
      );
      stepperObj.value = StepperComponent.createInsance(
        createAppRef.value as HTMLElement
      );
    });

    const formData = ref<KTCreateApp>({
    
    });

    const formInitData = ref<KTCreateApp>({
     
    });

    const createAppSchema = [
    
    ];

    // extracts the individual step schema
    const currentSchema = computed(() => {
      return createAppSchema[currentStepIndex.value];
    });

    const totalSteps = computed(() => {
      if (stepperObj.value) {
        return stepperObj.value.totatStepsNumber;
      } else {
        return 1;
      }
    });

    const { resetForm, handleSubmit } = useForm<Step1 | Step2 | Step3 | Step4>({
      validationSchema: currentSchema,
    });

    const previousStep = () => {
      currentStepIndex.value--;

      if (!stepperObj.value) {
        return;
      }

      stepperObj.value.goPrev();
    };

    const handleStep = handleSubmit((values) => {
      formData.value = {
        ...formData.value,
        ...values,
      };

      currentStepIndex.value++;

      if (!stepperObj.value) {
        return;
      }

      stepperObj.value.goNext();
    });

    const formSubmit = () => {
      Swal.fire({
        text: "All is cool! Now you submit this form",
        icon: "success",
        buttonsStyling: false,
        confirmButtonText: "Ok, got it!",
        heightAuto: false,
        customClass: {
          confirmButton: "btn fw-semobold btn-light-primary",
        },
      }).then(() => {
        if (!stepperObj.value) {
          return;
        }
        stepperObj.value.goFirst();
        currentStepIndex.value = 0;
        resetForm({
          values: {
            ...formInitData.value,
          },
        });
      });
    };

    return {
      handleStep,
      formSubmit,
      previousStep,
      currentStepIndex,
      totalSteps,
      getIllustrationsPath,
      getAssetPath,
      iframeSrc: 'https://www.google.com',
      iframeWidth: '100%',
      iframeHeight: '500px'
    };
  },
});
</script>
