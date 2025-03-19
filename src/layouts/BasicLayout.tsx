import NextNProgress from "nextjs-progressbar";
import { ReactElement } from "react";
import { Layout1 } from "./Layout1";
import { useAppSelector } from "@/redux/hook";
import { createTheme } from "@mui/material";
import ModeTheme from "@/layouts/Theme";
import { getThemeConfig } from "@/layouts/Theme/themeMUIConfig";
import { LayoutDirectionProvider } from "./RTL/context";

export const BasicLayout = (page: ReactElement) => {
  const mainTheme = useAppSelector((state) => state.themeColorData);
  const fontConfig = useAppSelector((state) => state.fontData);
  const themeConfig = getThemeConfig(mainTheme, fontConfig);
  const theme = createTheme(themeConfig);
  return (
    <ModeTheme theme={theme}>
      <LayoutDirectionProvider>
        <Layout1>
          <NextNProgress
            color="red"
            height={4}
            options={{ showSpinner: false }}
          />
          {page}
        </Layout1>
      </LayoutDirectionProvider>
    </ModeTheme>
  );
};
