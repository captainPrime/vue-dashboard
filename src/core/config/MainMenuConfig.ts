import { getAssetPath } from "@/core/helpers/assets";

export interface MenuItem {
  heading?: string;
  sectionTitle?: string;
  route?: string;
  pages?: Array<MenuItem>;
  svgIcon?: string;
  fontIcon?: string;
  sub?: Array<MenuItem>;
}

const MainMenuConfig: Array<MenuItem> = [
  {
    heading: "Router",
    route: "/dashboard",
    svgIcon: getAssetPath("media/icons/duotune/general/voucher.png"),
    fontIcon: "bi-house fs-2",
  },
  {
    heading: "Voucher",
    route: "/builder",
    svgIcon: getAssetPath("media/icons/duotune/general/router.png"),
    fontIcon: "bi-layers",
  },
  {
    heading: "Captive Portal",
    route: "/captive-portal",
    svgIcon: getAssetPath("media/icons/duotune/general/cp.png"),
    fontIcon: "bi-layers",
  },
  {
    heading: "Files",
    route: "/files",
    svgIcon: getAssetPath("media/icons/duotune/general/file.png"),
    fontIcon: "bi-layers",
  },
  {
    heading: "Support",
    route: "/support",
    svgIcon: getAssetPath("media/icons/duotune/general/support.png"),
    fontIcon: "bi-layers",
  },
  {
    heading: "Billing",
    route: "/billings",
    svgIcon: getAssetPath("media/icons/duotune/general/billing.png"),
    fontIcon: "bi-layers",
  },
  {
    heading: "Account",
    route: "/profile",
    svgIcon: getAssetPath("media/icons/duotune/general/gen010.svg"),
    fontIcon: "bi-layers",
  },

];

export default MainMenuConfig;