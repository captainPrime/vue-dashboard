<template>
    <!--begin::Form-->
    <form class="form" id="kt_modal_create_app_form" @submit="handleStep">
      <!--begin::Step 1-->
      <div class="current" data-kt-stepper-element="content">
        <div class="w-100">
          <!--begin::Input group-->
          <div class="fv-row mb-10">
            <!--begin::Label-->
            <label class="d-flex align-items-center fs-5 fw-semobold mb-2">
              <span class="required">Voucher Name</span>
              <i
                class="fas fa-exclamation-circle ms-2 fs-7"
                data-bs-toggle="tooltip"
                title="Specify your unique app name"
              ></i>
            </label>
            <!--end::Label-->
  
            <!--begin::Input-->
            <Field
              type="text"
              class="form-control form-control-lg form-control-solid"
              name="appName"
              placeholder=""
            />
            <ErrorMessage
              class="fv-plugins-message-container invalid-feedback"
              name=""
            />
            <!--end::Input-->
          </div>
          <div class="fv-row mb-10">
            <!--begin::Label-->
            <label class="d-flex align-items-center fs-5 fw-semobold mb-2">
              <span class="required">Time Valid</span>
              <i
                class="fas fa-exclamation-circle ms-2 fs-7"
                data-bs-toggle="tooltip"
                title="Specify your unique app name"
              ></i>
            </label>
            <!--end::Label-->
  
            <!--begin::Input-->
            <Field
              type="text"
              class="form-control form-control-lg form-control-solid"
              name="appName"
              placeholder=""
            />
            <ErrorMessage
              class="fv-plugins-message-container invalid-feedback"
              name=""
            />
            <!--end::Input-->
          </div>
          <!--end::Input group-->

        </div>
      </div>
      <!--end::Step 1-->
  
      <!--begin::Step 2-->
     
      <!--end::Step 2-->
  
      <!--begin::Step 3-->
   
      <!--end::Step 3-->
  
      <!--begin::Step 4-->
   
      <!--end::Step 4-->
  
      <!--begin::Step 5-->
     
      <!--end::Step 5-->
  
      <!--begin::Actions-->
      <div class="d-flex flex-stack pt-10">
        <!--begin::Wrapper-->
        <div class="me-2">
          <button
            type="button"
            class="btn btn-lg btn-light-primary me-3"
            data-kt-stepper-action="previous"
            @click="previousStep()"
          >
            <span class="svg-icon svg-icon-3 me-1">
              <inline-svg
                :src="getAssetPath('media/icons/duotune/arrows/arr063.svg')"
              />
            </span>
            Back
          </button>
        </div>
        <!--end::Wrapper-->
  
        <!--begin::Wrapper-->
        <div>
          <button
            type="submit"
            class="btn btn-lg btn-primary"
            v-if="currentStepIndex === totalSteps - 1"
            @click="formSubmit()"
          >
            <span class="indicator-label">
              Submit
              <span class="svg-icon svg-icon-3 ms-2 me-0">
                <inline-svg
                  :src="getAssetPath('media/icons/duotune/arrows/arr064.svg')"
                />
              </span>
            </span>
            <span class="indicator-progress">
              Please wait...
              <span
                class="spinner-border spinner-border-sm align-middle ms-2"
              ></span>
            </span>
          </button>
  
          <button v-else type="submit" class="btn btn-lg btn-primary">
            Continue
            <span class="svg-icon svg-icon-3 ms-1 me-0">
              <inline-svg
                :src="getAssetPath('media/icons/duotune/arrows/arr064.svg')"
              />
            </span>
          </button>
        </div>
        <!--end::Wrapper-->
      </div>
      <!--end::Actions-->
    </form>
    <!--end::Form-->
  </template>
  
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
    appName: string;
    category: string;
  }
  
  interface Step2 {
    framework: string;
  }
  
  interface Step3 {
    dbName: string;
    dbType: string;
  }
  
  interface Step4 {
    nameOnCard: string;
    cardNumber: string;
    cardExpiryMonth: string;
    cardExpiryYear: string;
    cardCvv: string;
    saveCard: string;
  }
  
  interface KTCreateApp extends Step1, Step2, Step3, Step4 {}
  
  export default defineComponent({
    name: "create-voucher-modal",
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
          "kt_modal_create_voucher"
        );
        stepperObj.value = StepperComponent.createInsance(
          createAppRef.value as HTMLElement
        );
      });
  
      const formData = ref<KTCreateApp>({
        appName: "",
        category: "1",
        framework: "1",
        dbName: "",
        dbType: "1",
        nameOnCard: "Max Doe",
        cardNumber: "4111 1111 1111 1111",
        cardExpiryMonth: "1",
        cardExpiryYear: "2",
        cardCvv: "123",
        saveCard: "1",
      });
  
      const formInitData = ref<KTCreateApp>({
        appName: "",
        category: "",
        framework: "",
        dbName: "",
        dbType: "",
        nameOnCard: "",
        cardNumber: "",
        cardExpiryMonth: "",
        cardExpiryYear: "",
        cardCvv: "",
        saveCard: "",
      });
  
      const createAppSchema = [
        Yup.object({
          appName: Yup.string().required().label("App name"),
          category: Yup.string().required().label("Category"),
        }),
        Yup.object({
          framework: Yup.string().required().label("Framework"),
        }),
        Yup.object({
          dbName: Yup.string().required().label("Database name"),
          dbType: Yup.string().required().label("Database engine"),
        }),
        Yup.object({
          nameOnCard: Yup.string().required().label("Name"),
          cardNumber: Yup.string().required().label("Card Number"),
          cardExpiryMonth: Yup.string().required().label("Expiration Month"),
          cardExpiryYear: Yup.string().required().label("Expiration Year"),
          cardCvv: Yup.string().required().label("CVV"),
        }),
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
      };
    },
  });
  </script>
  