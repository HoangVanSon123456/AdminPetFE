import { actionList } from "@/helper/actionList";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { memo, useEffect, useState } from "react";
import { MenuCustom } from "../../../MenuCustom";
import MenuItemOpen from "./MenuItemOpen";
import { listMenuRoutes } from "@/routes";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "@/redux/hook";
import { findParentWithSubMenu } from "@/helper/checkIsMenuOpen";

const LeftMenuOpen = () => {
  const { t } = useTranslation("common");
  const { firstMainColor: PRIMARY } = useAppSelector(
    (state) => state.themeColorData
  );
  const router = useRouter();

  const [anchorEl, setAnchorEl] = useState<any>(null);

  const [menuList, setMenuList] = useState(listMenuRoutes);

  const [titleSubMenu, setTitleSubMenu] = useState("");

  useEffect(() => {
    const parentWithSubMenu = findParentWithSubMenu(router.pathname, menuList)

    if (parentWithSubMenu) {
      setMenuList(parentWithSubMenu.subMenu)
      setTitleSubMenu(parentWithSubMenu.name)
    }
  }, [router.pathname])

  return (
    <Box className="relative flex flex-col h-full scale-100">
      <div className="flex items-center h-[55px] w-full py-10 px-12">
        <button
          className="w-55 h-16 cursor-pointer"
          style={{
            border: `1px solid ${PRIMARY}`,
            borderRadius: "4px",
            color: PRIMARY,
            fontSize: 12,
            backgroundColor: "white",
          }}
          onClick={(e) => setAnchorEl(e.currentTarget)}
        >
          {t("btn.add")}
        </button>

        <MenuCustom
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => setAnchorEl(null)}
          classes={{
            root: "mt-4",
            paper: "w-106",
          }}
          itemList={actionList}
          onItemAction={() => {}}
          currentValue={""}
        />
      </div>

      <div
        className="flex flex-col pl-5 pr-10 overflow-y-auto"
        style={{
          height: `calc( 100vh - 100px )`,
        }}
      >
        {titleSubMenu && (
          <div
            className="flex gap-2 items-center p-5 cursor-pointer"
            onClick={() => {
              setMenuList(listMenuRoutes);
              setTitleSubMenu("");
            }}
          >
            <ArrowBackIcon
              style={{
                color: PRIMARY,
              }}
            />
            <Typography
              variant="subtitle1"
              style={{
                color: PRIMARY,
              }}
            >
              {t(titleSubMenu)}
            </Typography>
          </div>
        )}
        {menuList.map((item, index) => {
          return (
            <MenuItemOpen
              key={index}
              item={item}
              setMenuList={setMenuList}
              setTitleSubMenu={setTitleSubMenu}
            />
          );
        })}
      </div>
    </Box>
  );
};

export default memo(LeftMenuOpen);
