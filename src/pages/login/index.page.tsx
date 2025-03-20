import { Meta } from "@/components/meta";
import { HttpResponse } from "@/lib/api";
import { NextPageWithLayout } from "@/lib/next/types";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Login from "@/components/templates/Login";
import { NoneLayout } from "@/components/layouts/NoneLayout";

type Props = HttpResponse<any>;

const Page: NextPageWithLayout<Props> = () => <Login />;

Page.getLayout = NoneLayout;
Page.getMeta = Meta(() => ({ title: "Login" }));

export const getServerSideProps = async (context: any) => {
  const { locale = "vn" } = context;

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
export default Page;
