import { baseAxios } from "./base";
import { ResponseResult, statusCode } from "./IMain";

export const blogListWEP = async (data, token) => {
  try {
    const res = await baseAxios.post(`/blogs/fetch`, data);
    return ResponseResult(statusCode.OK, res.data);
  } catch (error) {
    return ResponseResult(error.response?.status, {}, error.response.data);
  }
};
export const UsercontactusWEP = async (data) => {
  try {
    const res = await baseAxios.post(`/contact`, data);
    return ResponseResult(statusCode.OK, res.data);
  } catch (error) {
    return ResponseResult(error.response?.status, {}, error.response.data);
  }
};

export const SubscriptionWEP = async (data) => {
  try {
    const res = await baseAxios.post(`/regSub`, data);
    return ResponseResult(statusCode.OK, res.data);
  } catch (error) {
    return ResponseResult(error.response?.status, {}, error.response.data);
  }
};