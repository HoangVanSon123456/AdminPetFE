import { AppPropsWithLayout } from "@/lib/next/types";
import "../../public/styles/globals.css";
import { store } from "@/redux/store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { createWrapper } from "next-redux-wrapper";
import { appWithTranslation } from "next-i18next";
import { compose } from "redux";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

let persistor = persistStore(store);

function App({ Component, pageProps, ...rest }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const getMeta = Component.getMeta ?? ((page) => page);

  return getLayout(
    getMeta(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ToastContainer
            containerId="apus-toast"
            position="top-center"
            autoClose={3000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            draggable
            pauseOnHover
            limit={3}
          />
          <Component {...pageProps} />
        </PersistGate>
      </Provider>,
      pageProps
    )
  );
}
const wrapper = createWrapper(() => store);
const enhance = compose(wrapper.withRedux, appWithTranslation);
export default enhance(App);
