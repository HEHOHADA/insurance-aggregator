import type { Component } from "solid-js";

export const Header: Component = () => {
  return (
    <header class="bg-white shadow">
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div class="w-full py-6 flex items-center justify-between border-b border-gray-200 lg:border-none">
          <div class="flex items-center">
            <a href="#" class="text-gray-800 hover:text-gray-900 font-medium">
              <svg width={40} viewBox="16.97 0.04 11 11">
                <g fill="#2b3595">
                  <path
                    d="M17.5 35.7c-1.3 8.7.5 17.2 5.1 23.4a21 21 0 0 0 32.8 2c-2.2 1-4.8 1.3-7.6.8-11.7-1.8-19.7-13.4-17.7-26 .9-6 4.3-11.4 9.7-15.3 6.7-5 16-7 25.2-5.6 7.4 1.2 17.6 6 25.5 15.2 0 0-22.8-39.4-56-20.3a37.8 37.8 0 0 0-17 25.8z"
                    transform="matrix(.1218 0 0 -.1218 16.4 11.6)"
                  />
                  <path
                    d="M82.5 65.3c1.7-8.6.2-17.2-4.2-23.6a21 21 0 0 0-32.7-3.2c2.3-1 4.9-1.1 7.7-.6C64.9 40.2 72.4 52.1 70 64.6c-1.2 6-4.8 11.3-10.3 15a34 34 0 0 1-25.4 4.6A44.5 44.5 0 0 1 9.3 68s21.4 40.2 55.4 22.4a37.8 37.8 0 0 0 17.8-25.1z"
                    transform="matrix(.1218 0 0 -.1218 16.4 11.6)"
                  />
                  <path
                    d="M35.7 82.9c8.6 1.3 17.2-.5 23.4-5.1a21 21 0 0 0 2-32.8c1 2.2 1.3 4.8.8 7.6-1.8 11.7-13.4 19.7-26 17.7-6-1-11.4-4.4-15.3-9.7-5-6.8-7-16-5.6-25.2 1.2-7.5 6-17.7 15.2-25.6 0 0-39.4 22.9-20.3 56.2a37.8 37.8 0 0 0 25.8 16.9z"
                    transform="matrix(.1218 0 0 -.1218 16.4 11.6)"
                  />
                  <path
                    d="M90.4 35.7a37.8 37.8 0 0 0-25.2-17.9A31.6 31.6 0 0 0 41.7 22a21 21 0 0 0-3.2 32.7c-1-2.2-1.1-4.8-.6-7.6C40.2 35.5 52.1 28 64.5 30.4c6 1.1 11.4 4.8 15 10.3A34 34 0 0 1 84.2 66 44.5 44.5 0 0 1 68 91s40.2-21.4 22.4-55.4z"
                    transform="matrix(.1218 0 0 -.1218 16.4 11.6)"
                  />
                </g>
              </svg>
            </a>
            <div class="hidden ml-10 space-x-8 lg:block">
              <a href="#" class="text-gray-500 hover:text-gray-900 font-medium">
                Главная
              </a>
              <a href="#" class="text-gray-500 hover:text-gray-900 font-medium">
                О нас
              </a>
              <a href="#" class="text-gray-500 hover:text-gray-900 font-medium">
                Контакты
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
