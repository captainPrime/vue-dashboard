<template>
  <!--begin::Wrapper-->
  <div class="w-lg-500px p-10">
    <!--begin::Form-->
    <VForm
      class="form w-100 fv-plugins-bootstrap5 fv-plugins-framework"
      novalidate
      @submit="onSubmitRegister"
      id="kt_login_signup_form"
      :validation-schema="registration"
    >
      <!--begin::Heading-->
      <div class="mb-10 text-center">
        <!--begin::Title-->
        <h1 class="text-dark mb-3">Sign Up</h1>
        <!--end::Title-->

        <!--begin::Link-->
        <div
          class="text-gray-400 fw-semobold fs-4"
          style="font-weight: 600; color: #468365 !important"
        >
          ARED SME Platform
        </div>
        <!--end::Link-->
      </div>
     
      <!--begin::Col-->
      <div class="fv-row mb-7">
        <!--   <label class="form-label fw-bold text-dark fs-6">First Name</label> -->
        <Field
          class="form-control form-control-lg form-control-solid"
          type="text"
          placeholder="First Name"
          name="first_name"
          autocomplete="off"
        />
        <div class="fv-plugins-message-container">
          <div class="fv-help-block">
            <ErrorMessage name="first_name" />
          </div>
        </div>
      </div>
      <!--end::Col-->

      <!--begin::Col-->
      <div class="fv-row mb-7">
        <!--  <label class="form-label fw-bold text-dark fs-6">Last Name</label> -->
        <Field
          class="form-control form-control-lg form-control-solid"
          type="text"
          placeholder="Last Name"
          name="last_name"
          autocomplete="off"
        />
        <div class="fv-plugins-message-container">
          <div class="fv-help-block">
            <ErrorMessage name="last_name" />
          </div>
        </div>
      </div>
      <!--end::Col-->

      <!--end::Input group-->

      <!--begin::Input group-->
      <div class="fv-row mb-7">
        <!--  <label class="form-label fw-bold text-dark fs-6">Email</label> -->
        <Field
          class="form-control form-control-lg form-control-solid"
          type="email"
          placeholder="Email"
          name="email"
          autocomplete="off"
        />
        <div class="fv-plugins-message-container">
          <div class="fv-help-block">
            <ErrorMessage name="email" />
          </div>
        </div>
      </div>
      <div class="fv-row mb-7">
        <!--  <label class="form-label fw-bold text-dark fs-6">Email</label> -->
        <Field
          class="form-control form-control-lg form-control-solid"
          type="tel"
          placeholder="Phone No"
          name="phone"
          autocomplete="off"
        />
        <div class="fv-plugins-message-container">
          <div class="fv-help-block">
            <ErrorMessage name="" />
          </div>
        </div>
      </div>

      <div class="fv-row mb-7">
        <!--  <label class="form-label fw-bold text-dark fs-6">Email</label> -->
        <Field
          class="form-control form-control-lg form-control-solid"
          type="text"
          placeholder="Select Partner"
          name="partner"
          as="select"
          v-slot="{ value }"
        >
          <option value="" disabled>Select Partner</option>
          <option value="">Uganda SMC</option>
          <option value="">Nigeria SMC</option>
          <option value="">Senegal SMC</option>
        </Field>

        <div class="fv-plugins-message-container">
          <div class="fv-help-block">
            <ErrorMessage name="" />
          </div>
        </div>
      </div>

      <div class="fv-row mb-7">
        <!--  <label class="form-label fw-bold text-dark fs-6">Email</label> -->
        <Field
          class="form-control form-control-lg form-control-solid"
          type="text"
          placeholder="Select Subscription"
          name="subscription"
          autocomplete="off"
          as="select"
          v-slot="{ value }"
        >
          <option value="" disabled>Select Subscription</option>
          <option value="">1 month</option>
          <option value="">2 months</option>
          <option value="">3 months</option>
          <option value="">4 months</option>
          <option value="">5 months</option>
        </Field>
        <div class="fv-plugins-message-container">
          <div class="fv-help-block">
            <ErrorMessage name="" />
          </div>
        </div>
      </div>


      <div class="text-center fv-row mb-7">
        <a href="/sign-in">
          <button
            style="width: 100%; background-color: #ffc007; color: black"
            class="btn btn-lg btn-primary"
          >
            <span class="indicator-label"> Cancel </span>
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
          <span class="indicator-label"> Add SME </span>
          <span class="indicator-progress">
            Please wait...
            <span
              class="spinner-border spinner-border-sm align-middle ms-2"
            ></span>
          </span>
        </button>
      </div>
      <!--end::Actions-->
    </VForm>

    <!--end::Form-->
    <div
      class="text-gray-400 fw-semobold fs-4"
      style="font-weight: 400;!important; font-size: 13px !important; text-align: center;  margin-top: 20px"
    >
      do you have an account yet?
      <a style="color: #3699ff" href="/#/sign-in">sign in</a>
    </div>
  </div>
  <!--end::Wrapper-->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent, ref, onMounted, nextTick } from "vue";
import { ErrorMessage, Field, Form as VForm } from "vee-validate";
import * as Yup from "yup";
import { useAuthStore, type User } from "@/stores/auth";
import { useRouter } from "vue-router";
import { PasswordMeterComponent } from "@/assets/ts/components";
import Swal from "sweetalert2";

export default defineComponent({
  name: "sign-up",
  components: {
    Field,
    VForm,
    ErrorMessage,
  },
  setup() {
    const store = useAuthStore();
    const router = useRouter();

    const submitButton = ref<HTMLButtonElement | null>(null);

    const registration = Yup.object().shape({
      first_name: Yup.string().required().label("Name"),
      last_name: Yup.string().required().label("Surname"),
      email: Yup.string().min(4).required().email().label("Email"),
      password: Yup.string().required().label("Password"),
      password_confirmation: Yup.string()
        .required()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .label("Password Confirmation"),
    });

    onMounted(() => {
      nextTick(() => {
        PasswordMeterComponent.bootstrap();
      });
    });

    const onSubmitRegister = async (values: any) => {
      values = values as User;

      // Clear existing errors
      store.logout();

      // eslint-disable-next-line
      submitButton.value!.disabled = true;

      // Activate indicator
      submitButton.value?.setAttribute("data-kt-indicator", "on");

      // Send login request
      await store.register(values);

      const error = Object.values(store.errors);

      if (!error) {
        Swal.fire({
          text: "You have successfully logged in!",
          icon: "success",
          buttonsStyling: false,
          confirmButtonText: "Ok, got it!",
          heightAuto: false,
          customClass: {
            confirmButton: "btn fw-semobold btn-light-primary",
          },
        }).then(function () {
          // Go to page after successfully login
          router.push({ name: "dashboard" });
        });
      } else {
        Swal.fire({
          text: error[0] as string,
          icon: "error",
          buttonsStyling: false,
          confirmButtonText: "Try again!",
          heightAuto: false,
          customClass: {
            confirmButton: "btn fw-semobold btn-light-danger",
          },
        });
      }

      submitButton.value?.removeAttribute("data-kt-indicator");
      // eslint-disable-next-line
      submitButton.value!.disabled = false;
    };

    return {
      registration,
      onSubmitRegister,
      submitButton,
      getAssetPath,
    };
  },
});
</script>
