import { NavLink, Link } from "@solidjs/router";

/**
 * adding '/' in NavLink href for routes other than the root route or nested routes
 * does not apply activeClass accordingly
 */
export default function Navbar({}) {
  return (
    <div class="flex-none">
      <div class="flex justify-start items-center bg-navbg ">
        <NavLink
          href="/"
          end
          class="text-navtext p-2 m-2 hover:text-navtexthovered"
        >
          Home
        </NavLink>
        <NavLink
          href="/algos"
          class="text-navtext p-2 m-2 hover:text-navtexthovered"
        >
          Algos
        </NavLink>
      </div>
    </div>
  );
}
