import { Link } from "atomic-router-solid";

import { Header } from "../../widgets";
import { Filters } from "../../features/travel/ui/filters";
import { Card, SkeletonCard } from "ui";

export function HomePage() {
  return (
    <div class="h-screen overflow-y-hidden">
      <Header />
      <div class="max-w-7xl mx-auto flex h-full">
        <aside class="w-1/4 bg-white shadow">
          <Filters />
        </aside>
        <main class="w-3/4 px-4 py-6 overflow-auto">
          <div>
            <h2 class="text-2xl font-medium text-gray-900">Search Result</h2>
            <div class="grid grid-cols-1 gap-4 mt-6">
              <Card
                name="Alpha"
                price="800p"
                link="https://google.com"
                onClick={(id) => {
                  console.log(id);
                }}
              />
              <SkeletonCard />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

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
