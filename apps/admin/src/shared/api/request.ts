import queryString from "query-string";
import { createEffect } from "effector";

export function queryToString(
  query: Record<string, string> | undefined
): string {
  return query ? `?${queryString.stringify(query)}` : "";
}

export interface Request {
  path: string;
  method: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  body?: object | null | void;
  query?: Record<string, string>;
  headers?: Record<string, string>;
  cookies?: string;
}

export interface Answer<T = unknown> {
  ok: boolean;
  body: T;
  status: number;
  headers: Record<string, string>;
}

export const requestInternalFx = createEffect<Request, Answer, Answer>();

export type ResponseResult<Data> = string | Record<string, Data> | null;

export const API_PREFIX = import.meta.env.CLIENT_BACKEND_URL ?? `/api/internal`;

async function requestClient({ path, method, ...params }: Request) {
  const headers = new Headers(params.headers);

  contentDefault(headers, "application/json; charset=utf-8");

  const query = queryToString(params.query);
  const body =
    contentIs(headers, "application/json") && params.body
      ? JSON.stringify(params.body)
      : undefined;

  const response = await fetch(`${API_PREFIX}${path}${query}`, {
    method,
    headers,
    body,
    credentials: "same-origin",
  });

  const answer = await getResponseAnswer(response);

  const responder = {
    ok: response.ok,
    body: answer,
    status: response.status,
    headers: toObject(response.headers),
  };

  if (response.ok) {
    return responder;
  }
  throw responder;
}

/**
 * Check if content-type JSON
 */
function contentIs(headers: Headers, type: string): boolean {
  return headers.get("content-type")?.includes(type) ?? false;
}

function contentDefault(headers: Headers, type: string): Headers {
  if (!headers.has("content-type")) {
    headers.set("content-type", type);
  }

  return headers;
}

async function getResponseAnswer<Data>(
  response: Response
): Promise<ResponseResult<Data>> {
  if (contentIs(response.headers, "application/json")) {
    return response.json();
  }
  const hasEmptyResponse = !response.headers.get("content-type");

  if (hasEmptyResponse) {
    return null;
  }

  return response.text();
}

function toObject(headers: Headers): Record<string, string> {
  const object = {};

  headers.forEach((value, key) => {
    object[key] = value;
  });

  return object;
}

requestInternalFx.use(requestClient);