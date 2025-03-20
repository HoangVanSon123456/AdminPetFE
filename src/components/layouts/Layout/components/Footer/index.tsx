import { Typography } from "@mui/material";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex items-center justify-end text-center px-10">
      <div className="flex gap-5">
        <Typography
          variant="body1"
          style={{
            marginTop: 12,
          }}
        >
          Copyright © 2021. Bản quyền site thuộc về Công ty TNHH một thành viên
          Apodio
        </Typography>

        <Image
          priority
          alt=""
          src={require("@/assets/svg/apodio_logo.svg")}
          height={40}
          width={112}
        />
      </div>
    </div>
  );
};

export default Footer;
