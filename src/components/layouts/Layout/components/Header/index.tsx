import { PRIMARY } from "@/helper/colors";
import { AvatarCustom } from "./AvatarCustom";
import { Notifications } from "./Notification";
import { SwitchSystem } from "./SwitchSystem";

export const Header = () => {
  return (
    <div
      className="flex justify-between h-[45px] top-0 sticky"
      style={{
        backgroundColor: PRIMARY,
      }}
    >
      <div className="flex items-center gap-10 h-full">
        <SwitchSystem />
      </div>

      <div className="flex items-center gap-6 px-5">
        <Notifications numberUnRead={15} />
        {/* <AvatarCustom
          companyName={companyName}
          username={username}
          firstName={firstName}
          lastName={lastName}
        /> */}
      </div>
    </div>
  );
};

export default Header;
