import { AppPropsWithLayout } from "@/lib/next/types";
import "../../public/styles/globals.css";

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const getMeta = Component.getMeta ?? ((page) => page);
  return getLayout(getMeta(<Component {...pageProps} />, pageProps));
}
