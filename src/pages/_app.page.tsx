import { AppPropsWithLayout } from "@/lib/next/types";
import "../../public/styles/globals.css";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

let persistor = persistStore(store);

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const getMeta = Component.getMeta ?? ((page) => page);

  return getLayout(
    getMeta(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />,
        </PersistGate>
      </Provider>,
      pageProps
    )
  );
}
