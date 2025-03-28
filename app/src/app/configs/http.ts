import { HTTP_METHOD } from "next/dist/server/web/http";

type HttpAdapterParams = {
  url: URL;
  body?: any;
  method?: HTTP_METHOD;
}

const httpAdapter = async ({ url, body, method = "GET" }: HttpAdapterParams) => {
  return await fetch(url, {
    method,
    body
  })
};

export default httpAdapter;