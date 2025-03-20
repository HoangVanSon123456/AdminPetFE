import NextNProgress from "nextjs-progressbar";
import { ReactElement } from "react";
import { useAppSelector } from "@/redux/hook";
import { createTheme } from "@mui/material";
import ModeTheme from "@/components/Layouts/Theme";
import { getThemeConfig } from "@/components/Layouts/Theme/themeMUIConfig";
import { RecoilRoot } from "recoil";
import dynamic from "next/dynamic";

export const BasicLayout = (page: ReactElement) => {
  const mainTheme = useAppSelector((state) => state.themeColorData);
  const fontConfig = useAppSelector((state) => state.fontData);
  const themeConfig = getThemeConfig(mainTheme, fontConfig);
  const theme = createTheme(themeConfig);

  const Layout = dynamic(
    () =>
      import("@/components/Layouts/Layout/index").then(
        (component) => component.Layout
      ),
    { ssr: false }
  );

  return (
    <RecoilRoot>
      <ModeTheme theme={theme}>
        <Layout>
          <NextNProgress
            color="red"
            height={4}
            options={{ showSpinner: false }}
          />
          {page}
        </Layout>
      </ModeTheme>
    </RecoilRoot>
  );
};
