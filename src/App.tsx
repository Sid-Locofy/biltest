import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Component from "./pages/Component";
import FrameComponent from "./pages/FrameComponent";
import Desktop1 from "./pages/Desktop1";
import FrameComponent1 from "./pages/FrameComponent1";
import DesignConstructLogo from "./pages/DesignConstructLogo";
import Desktop11 from "./pages/Desktop11";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    //TODO: Update meta titles and descriptions below
    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/frame-1":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-1":
        title = "";
        metaDescription = "";
        break;
      case "/frame-11":
        title = "";
        metaDescription = "";
        break;
      case "/designconstruct-logo":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-11":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Component />} />

      <Route path="/frame-1" element={<FrameComponent />} />

      <Route path="/desktop-1" element={<Desktop1 />} />

      <Route path="/frame-11" element={<FrameComponent1 />} />

      <Route path="/designconstruct-logo" element={<DesignConstructLogo />} />

      <Route path="/desktop-11" element={<Desktop11 />} />
    </Routes>
  );
}
export default App;
