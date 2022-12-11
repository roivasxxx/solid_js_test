import { NavLink } from "@solidjs/router";

/**
 * adding '/' in NavLink href for routes other than the root route or nested routes
 * does not apply activeClass accordingly
 */
export default function Navbar({}) {
  return (
    <div class="flex justify-start items-center bg-stone-600">
      <NavLink
        href="/"
        end
        class="bg-stone-600 text-fuchsia-600 rounded-md p-2 m-2"
        activeClass="text-fuchsia-100"
      >
        Home
      </NavLink>
      <NavLink
        href="algos"
        class="bg-stone-600 text-fuchsia-600 rounded-md p-2 m-2"
        activeClass="text-fuchsia-100"
      >
        Algos
      </NavLink>
    </div>
  );
}
