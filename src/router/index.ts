import {
  createRouter,
  createWebHashHistory,
  type RouteRecordRaw,
} from "vue-router";
import { useAuthStore } from "@/stores/auth";
import { useConfigStore } from "@/stores/config";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/dashboard",
    component: () => import("@/layouts/main-layout/MainLayout.vue"),
    meta: {
      middleware: "auth",
    },
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("@/views/Dashboard.vue"),
        meta: {
          pageTitle: "Allocated Routers",
          breadcrumbs: ["Routers"],
        },
      },
      {
        path: "/builder",
        name: "Vouchers",
        component: () => import("@/views/LayoutBuilder.vue"),
        meta: {
          pageTitle: "All Vouchers",
          breadcrumbs: ["Voucher"],
        },
      },
      {
        path: "/captive-portal",
        name: "captive",
        component: () => import("@/views/CaptivePortal.vue"),
        meta: {
          pageTitle: "Captive Portal",
          breadcrumbs: ["Captive Portal"],
        },
      },
      {
        path: "/files",
        name: "files",
        component: () => import("@/views/Files.vue"),
        meta: {
          pageTitle: "Files",
          breadcrumbs: ["Files"],
        },
      },
      {
        path: "/support",
        name: "support",
        component: () => import("@/views/Support.vue"),
        meta: {
          pageTitle: "support",
          breadcrumbs: ["support"],
        },
      },
      {
        path: "/billings",
        name: "billings",
        component: () => import("@/views/Billing.vue"),
        meta: {
          pageTitle: "billings",
          breadcrumbs: ["billings"],
        },
      },
      {
        path: "/profile",
        name: "profile",
        component: () => import("@/views/Profile.vue"),
        meta: {
          pageTitle: "profile",
          breadcrumbs: ["profile"],
        },
      },
    ]
    }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  const configStore = useConfigStore();

  // current page view title
  document.title = `${to.meta.pageTitle} - ${import.meta.env.VITE_APP_NAME}`;

  // reset config to initial state
  configStore.resetLayoutConfig();

  // verify auth token before each page change
  authStore.verifyAuth();

  // before page access check if page requires authentication
  if (to.meta.middleware == "auth") {
    if (authStore.isAuthenticated) {
      next();
    } else {
      next({ name: "sign-in" });
    }
  } else {
    next();
  }

  // Scroll page to top on every route change
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

export default router;
