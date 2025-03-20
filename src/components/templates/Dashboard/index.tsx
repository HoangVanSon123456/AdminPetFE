import { CoreBreadcrumbs } from "@/components/atoms/CoreBreadcrumbs";
import CoreLoading from "@/components/molecules/CoreLoading";
import PageContainer from "@/components/organism/PageContainer";
import { DashboardCustomize } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Dashboard = () => {
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === "/") router.push("/dashboard");
  });

  return (
    <PageContainer
      title={
        <CoreBreadcrumbs
          breadcrumbs={[
            {
              title: (
                <div className="flex gap-4 items-center">
                  <IconButton>
                    <DashboardCustomize fontSize="small" />
                  </IconButton>
                  <Typography>Trang chủ</Typography>
                </div>
              ),
              pathname: "/dashboard",
            },
          ]}
        />
      }
    >
      <div className="flex flex-col gap-10 justify-center items-center mt-10">
        <Typography variant="h6">DANH SÁCH SYSTEM</Typography>
        <div className="flex w-full justify-center"></div>
      </div>
    </PageContainer>
  );
};

export default Dashboard;
