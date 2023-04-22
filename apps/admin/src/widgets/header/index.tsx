import type { Component } from "solid-js";
import { Link, Logo } from "ui";

export const Header: Component = () => {
  return (
    <header class="bg-white shadow">
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="w-full py-6 flex items-center justify-between border-b border-gray-200 lg:border-none">
          <div class="flex items-center">
            <Link href="/" class="bg-transparent">
              <Logo />
            </Link>
            <div class="hidden ml-10 space-x-8 lg:block">
              <Link href="/" class="bg-gray-500 text-white px-2 py-2">
                App
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
