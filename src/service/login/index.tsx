import { axiosInstance } from "@/config/axios";

export const postLogin = async (requestBody: any): Promise<any> => {
  const { data } = await axiosInstance({
    method: "post",
    url: "/login",
    data: requestBody,
  });

  return data;
};
