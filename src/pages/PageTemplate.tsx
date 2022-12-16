import { ParentComponent } from "solid-js";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Page } from "../types";

const PageTemplate: ParentComponent = ({
  children,
  displayNav,
  displayFooter,
}: Page) => {
  return (
    <div class="min-h-screen w-full flex flex-col">
      {displayNav === undefined || displayNav === true ? <Navbar /> : <></>}
      <div
        class="grow" // min-h-[50%]"
      >
        <div class="w-4/5 bg-contentbg border-2 border-contentborder p-5 my-5 m-auto rounded ">
          {children}
        </div>
      </div>
      {displayFooter === undefined || displayFooter === true ? (
        <Footer />
      ) : (
        <></>
      )}
    </div>
  );
};

export default PageTemplate;
