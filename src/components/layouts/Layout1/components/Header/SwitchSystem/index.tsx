import IconApplication from "@/assets/svg/layout1/application.svg";
import { WHITE } from "@/helper/colors";
import { IconButton, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export const SwitchSystem = () => {
  return (
    <div className="h-full">
      <div className="relative h-full flex items-center gap-10 cursor-pointer">
        <div className="flex gap-3 items-center pl-7">
          <IconButton>
            <Image alt="" src={IconApplication} width={20} height={20} />
          </IconButton>
          <Typography variant="body1" style={{ color: WHITE }}>
            Admin
          </Typography>
        </div>
      </div>
    </div>
  );
};
