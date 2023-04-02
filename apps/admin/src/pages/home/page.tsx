import { Link } from "atomic-router-solid";
import { useUnit } from "effector-solid";

import * as model from "./model";

export function HomePage() {
  const isLoggedIn = useUnit(model.$loggedIn);

  return <>{isLoggedIn ? <HomeContent /> : <RegisterForm />}</>;
}

function HomeContent() {
  return (
    <div class="flex p-20 w-full my-0 mx-auto justify-center">
      <Link
        class="text-center p-4 text-blue-800 bg-white hover:bg-amber-800 hover:bg-amber-50"
        to="/"
      >
        Start chatting
      </Link>
    </div>
  );
}

function RegisterForm() {
  const handleLogin = useUnit(model.loginClicked);

  return (
    <div class="border-t-2 border-solid border-black bg-white p-4">
      <div>Please, register in to be able to send messages</div>
      <button
        class="cursor-pointer py-2 px-4 mr-4 border-0 select-none outline-none text-white bg-gray-800 rounded"
        onClick={handleLogin}
      >
        Register as a random user
      </button>
    </div>
  );
}
