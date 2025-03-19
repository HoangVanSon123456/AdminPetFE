import { Dashboard } from "@mui/icons-material";
import { ReactNode } from "react";

export interface MenuPathProps {
  name: string;
  path: string;
  children?: MenuPathProps[];
  subMenu?: MenuPathProps[];
  icon?: ReactNode;
  isChecked?: boolean;
}

export const TRANSLATE = {
  COMMON: "common",
};

export const PATH_MENU_WAREHOUSE = {
  DASHBOARD: "/dashboard",
};

export const listMenuRoutes: MenuPathProps[] = [
  {
    name: "Trang chủ",
    path: "/dashboard",
    icon: <Dashboard />,
  },
];
