import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { LanguageProvider } from "./components/LanguageContext"; // Import this!
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Catalogs } from "./pages/Catalogs";
import { GiftSets } from "./pages/oferta/GiftSets";
import { PromotionalSweets } from "./pages/oferta/PromotionalSweets";
import { Packaging } from "./pages/oferta/Packaging";
import { PrintPromo } from "./pages/oferta/PrintPromo";
import { PromotionalSets } from "./pages/oferta/PromotionalSets";
import { Confection } from "./pages/oferta/Confection";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <LanguageProvider>
        <Layout />
      </LanguageProvider>
    ),
    children: [
      { index: true, Component: Home },
      { path: "o-nas", Component: About },
      { path: "kontakt", Component: Contact },
      { path: "katalogi", Component: Catalogs },
      { path: "oferta/zestawy-upominkowe", Component: GiftSets },
      { path: "oferta/slodycze-reklamowe", Component: PromotionalSweets },
      { path: "oferta/opakowania", Component: Packaging },
      { path: "oferta/materialy-poligraficzne", Component: PrintPromo },
      { path: "oferta/sety-reklamowe", Component: PromotionalSets },
      { path: "oferta/konfekcjonowanie", Component: Confection },
    ],
  },
]);