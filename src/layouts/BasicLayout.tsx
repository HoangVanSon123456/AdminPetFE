import NextNProgress from "nextjs-progressbar";
import { ReactElement } from "react";

import { Layout1 } from "./Layout1";

export const BasicLayout = (page: ReactElement) => {
  return (
    <Layout1>
      <NextNProgress color="red" height={4} options={{ showSpinner: false }} />
      {page}
    </Layout1>
  );
};
