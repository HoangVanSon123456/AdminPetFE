import { Meta } from "@/components/meta";
import Dashboard from "@/components/templates/Dashboard";
import { BasicLayout } from "@/components/Layouts/BasicLayout";
import { HttpResponse } from "@/lib/api";
import { NextPageWithLayout } from "@/lib/next/types";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

type Props = HttpResponse<any>;

const Page: NextPageWithLayout<Props> = () => <Dashboard />;

Page.getLayout = BasicLayout;
Page.getMeta = Meta(() => ({ title: "Dashboard Company Service" }));

export const getServerSideProps = async (context: any) => {
  const { locale = "vn" } = context;

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
export default Page;
