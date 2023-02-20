<template>
  <div>
    <!--begin::Tables Widget 9-->
    <PageTitle />

    <div class="row" style="margin-top: 30px">

      <div class="col-lg-3 col-md-4 col-sm-12 col-xs-12 card column-1" style="margin-right: 30px">
        <nav class="navbar">
          <ul class="nav navbar-nav profile">
            <li v-for="(menuItem, index) in menuItems"
            :key="index"
            :class="{ active: menuItem.active }"
            @click="toggleActive(menuItem)">
              <div class="menu-item px-5">
                <a @click="menuItem.function" class="menu-link px-5">
                  <inline-svg
                    :src="
                      getAssetPath(menuItem.svg)
                    "
                  />
                  {{ menuItem.title }}
                </a>
              </div>
            </li>
            
          </ul>
        </nav>
      </div>

      <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12 column-2" style="margin-top: 30px">
        <div v-html="content"></div>
      </div>
    </div>
  </div>
</template>

<style scope>
.menu-item a {
  color: black !important;
}
.navbar {
  padding: 20px;
  font-size: 15px;
  font-weight: 600;
}

.profile svg {
  margin-right: 10px;
}

.profile .nav-link {
  padding: 15px;
}

.active {
  
  background-color: #f3f6f9;
  padding-left: 25px;
  border-radius: 5px;
}
.form-row {
  display: flex;
}
.form-group {
  padding: 10px;
}

.vertical {
  padding: 20px;
}
.cancel {
  background-color: white !important;
  color: #458365 !important;
  border: solid 2px #458365 !important;
}
.save {
  border: solid 2px #458365 !important;
}
input {
  background-color: #f3f6f9 !important;
}

label {
  font-weight: 600;
  margin-bottom: 10px;
}

</style>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent, onMounted, ref } from "vue";
import PageTitle from "@/layouts/main-layout/page-title/PageTitle.vue";
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "profile",
  components: { PageTitle },
  props: {
    widgetClasses: String,
  },
  data() {
    const profile = ` <div >
          <h3 class="card-title align-items-start flex-column">
            <span class="card-label fw-bold fs-1 mb-1">Profile</span>
          </h3>
          <!--begin::Tables Widget 9-->
          <div
            class="card"
            :class="widgetClasses"
            style="margin-top: 30px; padding: 20px"
          >
            <form>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputFirstName">First Name</label>
                  <input type="text" class="form-control" id="inputFirstName" />
                </div>
                <div class="form-group col-md-6">
                  <label for="inputLastName">Last Name</label>
                  <input type="text" class="form-control" id="inputLastName" />
                </div>
              </div>
            </form>
          </div>

          <div class="form-row" style="margin-top: 60px">
            <div class="form-group">
              <Button
                class="btn btn-primary save"
                style="float: right; margin-top: -40px"
                type="button"
     
              >
                Save Changes</Button
              >
            </div>
            <div class="form-group">
              <Button
                class="btn btn-primary cancel"
                style="float: right; margin-top: -40px"
                type="button"
                
              >
                Cancel</Button
              >
            </div>
          </div>

          <h1
            class="card-title align-items-start flex-column"
            style="margin-top: 30px"
          >
            <span class="card-label fw-bold fs-1 mb-1"
              >Change email address</span
            >
          </h1>
          <div
            class="card"
            :class="widgetClasses"
            style="margin-top: 30px; padding: 20px"
          >
            <form>
              <div class="form-row">
                <div class="form-group col-md-12">
                  <label for="inputEmail">Email Address</label>
                  <input type="email" class="form-control" id="inputEmail" />
                </div>
              </div>
            </form>
          </div>

          <div class="form-row" style="margin-top: 60px">
            <div class="form-group">
              <Button
                class="btn btn-primary save"
                style="float: right; margin-top: -40px"
                type="button"
               
              >
                Save Changes</Button
              >
            </div>
            <div class="form-group">
              <Button
                class="btn btn-primary cancel"
                style="float: right; margin-top: -40px"
                type="button"
          
              >
                Cancel</Button
              >
            </div>
          </div>
        </div>`;

    const password = `<div>
          <h1
            class="card-title align-items-start flex-column"
            style="margin-top: 30px"
          >
            <span class="card-label fw-bold fs-1 mb-1"
              >Change Password</span
            >
          </h1>
          <div
            class="card"
            :class="widgetClasses"
            style="margin-top: 30px; padding: 20px"
          >
            <form>
              <div class="vertical">
                <label for="inputEmail">Existing Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="inputExistingPassword"
                />
              </div>
              <div class="vertical">
                <label for="inputEmail">New Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="inputNewPassword"
                />
              </div>
              <div class="vertical">
                <label for="inputEmail">Confirm Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="inputConfirmPassword"
                />
              </div>
            </form>
          </div>

          <div class="form-row" style="margin-top: 60px">
            <div class="form-group">
              <Button
                class="btn btn-primary save"
                style="float: right; margin-top: -40px"
                type="button"
                
              >
                Save Changes</Button
              >
            </div>
            <div class="form-group">
              <Button
                class="btn btn-primary cancel"
                style="float: right; margin-top: -40px"
                type="button"
              
              >
                Cancel</Button
              >
            </div>
          </div>
        </div>`;
    return {
      profile,
      password,
      content: profile,
      menuItems: [
        { id: 1, title: 'Your Profile', active: true , function: this.gotoProfile, svg: '/media/icons/duotune/general/account.svg'},
        { id: 2, title: 'Change Password', active: false , function: this.gotoPassword, svg: '/media/icons/duotune/general/f-lock.svg'},
        { id: 3, title: 'Log Out', active: false , function: this.signOut, svg: '/media/icons/duotune/general/sign-in.svg'}
      ]
    };
  },
  setup() {
    const router = useRouter();
    const store = useAuthStore();
    const checkedRows = ref<Array<number>>([]);
    const list = [];

    const signOut = () => {
      store.logout();
      router.push({ name: "sign-in" });
    };

    return {
      list,
      checkedRows,
      signOut,
      getAssetPath,
    };
  },


  methods: {
    gotoProfile() {
      this.content = this.profile;
    },

    gotoPassword() {
      this.content = this.password;
    },

    toggleActive(menuItem) {
      this.menuItems.forEach(item => {
        item.active = false
      })
      menuItem.active = true
    }
  },
  mounted() {
    console.log("fetching files...");
    fetch("https://dev.api.shirikihub.com/api/v1/account/")
      .then((response) => response.json())
      .then((data) => {
        this.list = data.results;
        console.log(this.list);
      });
  },
});
</script>
