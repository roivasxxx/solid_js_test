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
    <div>
      {displayNav === undefined || displayNav === true ? <Navbar /> : <></>}
      <div class="w-4/5 bg-contentbg">{children}</div>
      {displayFooter === undefined || displayFooter === true ? (
        <Footer />
      ) : (
        <></>
      )}
    </div>
  );
};

export default PageTemplate;
