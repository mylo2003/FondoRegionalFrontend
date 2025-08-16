import About from "../components/layout/About";
import Category from "../components/layout/Category";
import Main from "../components/layout/Main";
import Material from "../components/layout/Material";
import Stats from "../components/layout/Stats";

export default function Home() {
  return (
    <>
      <Main />
      <Material />
      <Stats />
      <About />
      {/* <Category /> */}
    </>
  );
}
