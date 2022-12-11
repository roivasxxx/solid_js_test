import PageTemplate from "./PageTemplate";
import { NavLink } from "@solidjs/router";

const Home = () => {
  return (
    <PageTemplate {...{ displayNav: false }}>
      <div>
        <h1 class="font-tmnrcb text-9xl p-2">GRAPH</h1>
        <h1 class="font-tmnrcb text-9xl p-2">THEORY</h1>
        <NavLink href="/algos" class="text-4xl mt-5 p-2">
          ENTER
        </NavLink>
        <p class="font-tmnrcb text-6xl text-right p-2 mt-2">Helper tool</p>
      </div>
    </PageTemplate>
  );
};

export default Home;
