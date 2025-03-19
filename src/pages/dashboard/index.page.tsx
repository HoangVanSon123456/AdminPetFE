import { Meta } from "@/components/meta";
import Dashboard from "@/components/templates/Dashboard";
import { BasicLayout } from "@/layouts/BasicLayout";
import { HttpResponse } from "@/lib/api";
import { NextPageWithLayout } from "@/lib/next/types";

type Props = HttpResponse<any>;

const Page: NextPageWithLayout<Props> = () => <Dashboard />;

Page.getLayout = BasicLayout;
Page.getMeta = Meta(() => ({ title: "Dashboard Company Service" }));

export default Page;
