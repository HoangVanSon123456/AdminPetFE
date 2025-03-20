import NextNProgress from "nextjs-progressbar";
import { ReactElement } from "react";
import { useAppSelector } from "@/redux/hook";
import { createTheme } from "@mui/material";
import ModeTheme from "@/components/layouts/Theme";
import { getThemeConfig } from "@/components/layouts/Theme/themeMUIConfig";
import { LayoutDirectionProvider } from "./RTL/context";
import { RecoilRoot } from "recoil";
import dynamic from "next/dynamic";
import { useLayout } from "./useLayout";

export const BasicLayout = (page: ReactElement) => {
  const mainTheme = useAppSelector((state) => state.themeColorData);
  const fontConfig = useAppSelector((state) => state.fontData);
  const themeConfig = getThemeConfig(mainTheme, fontConfig);
  const theme = createTheme(themeConfig);
  const _ = useLayout()

  const Layout1 = dynamic(
    () =>
      import("@/components/layouts/Layout1/index").then(
        (component) => component.Layout1
      ),
    { ssr: false }
  );

  return (
    <RecoilRoot>
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
    </RecoilRoot>
  );
};
