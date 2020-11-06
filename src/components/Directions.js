import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Header } from "../components/Header";
import { BuyButton } from "../components/BuyButton";
import { FootArrow } from "components/Vscroller";
import { ScrollToTop } from "../components/ScrollToTop";

const MainPage = React.lazy(() => import("../pages/Mainpage"));
const SiteMap = React.lazy(() => import("../pages/SiteMap"));
const Downloads = React.lazy(() => import("../pages/Downloads"));
const Vehicles = React.lazy(() => import("../pages/Vehicles"));
const Mining = React.lazy(() => import("../pages/Mining"));
const Power = React.lazy(() => import("../pages/Power"));
const Distributors = React.lazy(() => import("../pages/Distributors"));
const About = React.lazy(() => import("../pages/About"));

export const Directions = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <ScrollToTop />
        <Header />
        <BuyButton />
        <main>
          <Switch>
            <Route path="/" exact>
              <MainPage />
            </Route>
            <Route path="/vehicles" exact>
              <Vehicles />
            </Route>
            <Route path="/mining" exact>
              <Mining />
            </Route>
            <Route path="/power" exact>
              <Power />
            </Route>
            <Route path="/distributors" exact>
              <Distributors />
            </Route>
            <Route path="/about" exact>
              <About />
            </Route>
            <Route path="/site-map" exact>
              <SiteMap />
            </Route>
            <Route path="/downloads" exact>
              <Downloads />
            </Route>
          </Switch>
        </main>
        <FootArrow />
      </Suspense>
    </BrowserRouter>
  );
};
