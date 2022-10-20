import { useLocation } from "react-router-dom";

export interface IMyResponse {
  status: number;
  errorBody?: string;
  body?: string | JSON | object | [];
}
export const ResponseResult = (status: number, body: string, errorBody?: string) => {
  let response: IMyResponse = {
    status: status,
    errorBody: errorBody,
    body: body,
  };
  return response;
};
export const statusCode = Object.freeze({
  OK: 200,
});