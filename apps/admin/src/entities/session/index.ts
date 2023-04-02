import type { Session } from "../../shared/api";
import { sessionApi } from "../../shared/api";
import { attach, createStore, sample } from "effector";

export const logout = attach({ effect: sessionApi.sessionDeleteFx });
export const login = attach({ effect: sessionApi.sessionCreateFx });
export const loadSession = attach({ effect: sessionApi.sessionLoadFx });

export const $session = createStore<Session | null>(null)
  .on(loadSession.doneData, (_, session) => session)
  .reset(logout);

export const $isLogged = $session.map((session) => session !== null);

sample({
  clock: login.doneData,
  target: $session,
});
sample({
  clock: loadSession.fail,
  fn: () => null,
  target: $session,
});
