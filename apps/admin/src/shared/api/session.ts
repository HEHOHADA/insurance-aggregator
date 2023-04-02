import { createEffect } from "effector";
import { createOid } from "../lib/oid";
import { wait } from "../lib/wait";

export interface Session {
  id: string;
  name: string;
}

const localStorageKey = "effector-example-session";

export const sessionLoadFx = createEffect<void, Session | null>(async () => {
  const source = localStorage.getItem(localStorageKey);

  await wait();

  if (!source) {
    return null;
  }

  return JSON.parse(source);
});

export const sessionDeleteFx = createEffect(async () => {
  localStorage.removeItem(localStorageKey);
  await wait();
});

export const sessionCreateFx = createEffect(async () => {
  const session: Session = {
    id: createOid(),
    name: "John Doe",
  };

  localStorage.setItem(localStorageKey, JSON.stringify(session));

  return session;
});
