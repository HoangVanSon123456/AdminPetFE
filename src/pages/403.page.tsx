// import { NoneLayout } from "@/components/layouts/WrapLayout/NoneLayout";
import { HttpResponse } from "@/lib/api";
import Page403 from "@/components/Pages/common/403";
import { NextPageWithLayout } from "@/lib/next/types";
import { Meta } from "@/components/meta";

type Props = HttpResponse<any>;

const Page: NextPageWithLayout<Props> = () => <Page403 />;

Page.getLayout = (page) => <>{page}</>;
Page.getMeta = Meta(() => ({ title: "403" }));

export default Page;
