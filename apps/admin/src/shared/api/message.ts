import { createEffect } from "effector";
import { createOid } from "../lib/oid";
import { wait } from "../lib/wait";

interface Author {
  id: string;
  name: string;
}

export interface Message {
  id: string;
  author: Author;
  text: string;
  timestamp: number;
}

const localStorageKey = "effector-example-history";

function loadHistory(): Message[] | undefined {
  const source = localStorage.getItem(localStorageKey);

  if (source) {
    return JSON.parse(source);
  }

  return undefined;
}

function saveHistory(messages: Message[]) {
  localStorage.setItem(localStorageKey, JSON.stringify(messages));
}

export const messagesLoadFx = createEffect<void, Message[], Error>(async () => {
  const history = loadHistory();

  await wait();

  return history ?? [];
});

interface SendMessage {
  text: string;
  author: Author;
}

export const messageSendFx = createEffect(
  async ({ text, author }: SendMessage) => {
    const message: Message = {
      id: createOid(),
      author,
      timestamp: Date.now(),
      text,
    };
    const history = await messagesLoadFx();

    saveHistory([...history, message]);
    await wait();

    return message;
  }
);

export const messageDeleteFx = createEffect(async (message: Message) => {
  const history = await messagesLoadFx();
  const updated = history.filter((found) => found.id !== message.id);

  await wait();
  saveHistory(updated);
});
