import { Link } from "atomic-router-solid";

import { Header } from "../../widgets";

export function HomePage() {
  return (
    <>
      <Header />
      <div class="max-w-7xl mx-auto flex">
        <aside class="w-1/4 bg-white shadow">
          <div class="px-4 py-6">
            <h2 class="text-lg font-medium text-gray-900">Фильтры</h2>
            <div class="mt-6">
              <h3 class="text-md font-medium text-gray-700 mb-2">
                Тип страхования
              </h3>
              <ul>
                <li>
                  <label class="inline-flex items-center">
                    <input
                      type="checkbox"
                      class="form-checkbox text-indigo-600"
                      name="insurance-type"
                      value="health"
                    />
                    <span class="ml-2 text-gray-700">
                      Медицинское страхование
                    </span>
                  </label>
                </li>
                <li>
                  <label class="inline-flex items-center">
                    <input
                      type="checkbox"
                      class="form-checkbox text-indigo-600"
                      name="insurance-type"
                      value="life"
                    />
                    <span class="ml-2 text-gray-700">Страхование жизни</span>
                  </label>
                </li>
                <li>
                  <label class="inline-flex items-center">
                    <input
                      type="checkbox"
                      class="form-checkbox text-indigo-600"
                      name="insurance-type"
                      value="auto"
                    />
                    <span class="ml-2 text-gray-700">Автострахование</span>
                  </label>
                </li>
              </ul>
            </div>
            <div class="mt-6">
              <h3 class="text-md font-medium text-gray-700 mb-2">Страна</h3>
              <ul>
                <li>
                  <label class="inline-flex items-center">
                    <input
                      type="checkbox"
                      class="form-checkbox text-indigo-600"
                      name="country"
                      value="russia"
                    />
                    <span class="ml-2 text-gray-700">Россия</span>
                  </label>
                </li>
                <li>
                  <label class="inline-flex items-center">
                    <input
                      type="checkbox"
                      class="form-checkbox text-indigo-600"
                      name="country"
                      value="usa"
                    />
                    <span class="ml-2 text-gray-700">США</span>
                  </label>
                </li>
                <li>
                  <label class="inline-flex items-center">
                    <input
                      type="checkbox"
                      class="form-checkbox text-indigo-600"
                      name="country"
                      value="europe"
                    />
                    <span class="ml-2 text-gray-700">Европа</span>
                  </label>
                </li>
              </ul>
            </div>
            <div class="mt-6">
              <h3 class="text-md font-medium text-gray-700 mb-2">Цена</h3>
              <div class="flex items-center">
                <input
                  type="text"
                  class="form-input w-1/2 rounded-md border-gray-300"
                  placeholder="Минимальная цена"
                />
                <span class="mx-2 text-gray-500">-</span>
                <input
                  type="text"
                  class="form-input w-1/2 rounded-md border-gray-300"
                  placeholder="Максимальная цена"
                />
              </div>
            </div>
            <div class="mt-6">
              <button class="w-full bg-indigo-600 text-white font-medium py-2 rounded-md hover:bg-indigo-700 transition duration-300">
                Применить фильтры
              </button>
            </div>
          </div>
        </aside>
        <main class="w-3/4 px-4 py-6">
          <h2 class="text-2xl font-medium text-gray-900">Результаты поиска</h2>
          <div class="grid grid-cols-1 gap-4 mt-6">
            <div class="bg-white rounded-lg shadow-lg overflow-hidden">
              <div class="relative">
                <img
                  src="insurance.jpg"
                  alt="Страхование"
                  class="w-full h-48 object-cover"
                />
              </div>
              <div class="p-4">
                <h3 class="text-lg font-medium text-gray-900">
                  Страхование автомобиля
                </h3>
                <p class="text-sm text-gray-500 mb-2">Категория: Автомобили</p>
                <p class="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  ut nisl nulla. Nulla facilisi. In nec efficitur nulla. Etiam
                  viverra tortor sed lectus feugiat, eget commodo lorem
                  tristique. Fusce nec nibh elit. Curabitur at laoreet velit.
                  Donec vulputate ante in tellus iaculis lacinia.{" "}
                </p>
                <div class="mt-4 flex justify-between items-center">
                  <div class="text-lg font-medium text-indigo-600">
                    8 000 руб.
                  </div>
                  <button class="flex items-center bg-gray-200 hover:bg-gray-300 text-gray-600 rounded-full p-2 focus:outline-none">
                    <svg
                      class="h-6 w-6"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    <span class="text-xs font-medium ml-1">Block</span>
                  </button>
                </div>
              </div>
            </div>
            *
          </div>
        </main>
      </div>
    </>
  );
}

/*
  <div class="flex flex-col h-screen">
    <nav class="flex bg-rose-400 h-16 items-center">Header</nav>
    <div class="flex flex-1 overflow-hidden">
      <aside class="bg-fuchsia-900 w-32 overflow-y-auto">Sidebar</aside>
      <main class="flex flex-1 bg-fuchsia-950 overflow-y-auto paragraph px-4">
        Cards
      </main>
    </div>
    <div class="flex bg-rose-800">Footer</div>
  </div>;
;
;
;

*/
function HomeContent() {
  return (
    <div class="flex p-20 w-full my-0 mx-auto justify-center">
      <Link
        class="text-center p-4 text-blue-800 bg-white hover:bg-amber-800"
        to="/"
      >
        Start chatting
      </Link>
    </div>
  );
}

//
// function RegisterForm() {

//   const handleLogin = useUnit(model.loginClicked);
//
//   return (
//     <div class="border-t-2 border-solid border-black bg-white p-4">
//       <div>Please sign in</div>
//       <Button
//         class="cursor-pointer py-2 px-4 mr-4 border-0 select-none outline-none text-white bg-gray-800 rounded"
//         onClick={handleLogin}
//       >
//         Register as a random user
//       </Button>
//     </div>
//   );
// }
