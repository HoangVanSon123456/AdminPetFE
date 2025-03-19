// import { DialogProvider } from "@/components/hooks/dialog/useDialog";
// import { useAppSelector } from "@/redux/hook";
import { createTheme } from "@mui/material";
import NextNProgress from "nextjs-progressbar";
import { ReactElement } from "react";
// import { QueryClient, QueryClientProvider } from "react-query";
// import { RecoilRoot, useRecoilValue } from "recoil";
// import multipleLayout from "../MultipleLayouts";
// import { layoutType } from "../MultipleLayouts/layoutTypeRecoil";
// import { LayoutDirectionProvider } from "../RTL/context";
// import ModeTheme from "../Theme";
// import { getThemeConfig } from "../Theme/themeMUIConfig";
import { Layout1 } from "./Layout1";
// import { useLayout } from "./useLayout";
// import { DemoModeProvider } from "@/components/layouts/DemoMode/context";

// const queryClient = new QueryClient();

export const BasicLayout = (page: ReactElement) => {
  // const mainTheme = useAppSelector((state) => state.themeColorData);
  // const fontConfig = useAppSelector((state) => state.fontData);

  // const themeConfig = getThemeConfig(mainTheme, fontConfig);

  // const theme = createTheme(themeConfig);

  return (
    // <QueryClientProvider client={queryClient}>
    //   <RecoilRoot>
    //     <ModeTheme theme={theme}>
    //       <LayoutDirectionProvider>
    //         <DemoModeProvider>
    <Layout1>
      <NextNProgress color="red" height={4} options={{ showSpinner: false }} />
      {/* <DialogProvider>{page}</DialogProvider> */}
      {page}
    </Layout1>
    //         </DemoModeProvider>
    //       </LayoutDirectionProvider>
    //     </ModeTheme>
    //   </RecoilRoot>
    // </QueryClientProvider>
  );
};

// const Layout = (props: any) => {
//   const { layouts, children } = props
//   const layoutRecoilValue = useRecoilValue(layoutType)
//   const _ = useLayout()
//   const LayoutSwitch = useMemo(
//     () => layouts[layoutRecoilValue],
//     [layoutRecoilValue, layouts],
//   )

//   return <LayoutSwitch>{children}</LayoutSwitch>
// }
