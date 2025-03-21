import { postLogin } from "@/service/login";
import { toastError } from "@/components/ui/Toast";
import { trim } from "lodash";
import { useRouter } from "next/router";
import { useState } from "react";

export const useLogin = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const loginAccount = async (dataLogin: any) => {
    try {
      setLoading(true);
      const requestBody = {
        email: trim(dataLogin?.email),
        password: trim(dataLogin?.password),
      };
      const data = await postLogin(requestBody);
      // setCmsToken(data?.data)
      console.log(data);
      router.push("/");
      setLoading(false);
    } catch (err) {
      toastError(err, "Có lỗi");
      // localStorage.clear();
      // sessionStorage.clear();
      setLoading(false);
    }
  };

  return { loginAccount, loading };
};
