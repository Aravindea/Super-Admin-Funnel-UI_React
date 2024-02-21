import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import SuperAdminFunnelPage from "./pages/SuperAdminFunnelPage";
import SuperAdminFunnelPage1 from "./pages/SuperAdminFunnelPage1";
import SuperAdminFunnelPage2 from "./pages/SuperAdminFunnelPage2";
import SuperAdminFunnelPage3 from "./pages/SuperAdminFunnelPage3";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/super-admin-funnel-page-2":
        title = "";
        metaDescription = "";
        break;
      case "/super-admin-funnel-page-3":
        title = "";
        metaDescription = "";
        break;
      case "/super-admin-funnel-page-4":
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
      <Route path="/" element={<SuperAdminFunnelPage />} />
      <Route
        path="/super-admin-funnel-page-2"
        element={<SuperAdminFunnelPage1 />}
      />
      <Route
        path="/super-admin-funnel-page-3"
        element={<SuperAdminFunnelPage2 />}
      />
      <Route
        path="/super-admin-funnel-page-4"
        element={<SuperAdminFunnelPage3 />}
      />
    </Routes>
  );
}
export default App;
