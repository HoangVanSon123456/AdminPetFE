import { authAPI } from "@/config/axios";

export const postLogin = async (requestBody: any): Promise<any> => {
  const { data } = await authAPI({
    method: "post",
    url: "/login",
    data: requestBody,
  });

  return data;
};
