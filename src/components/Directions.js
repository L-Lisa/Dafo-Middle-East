import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { MainPage } from "../pages/Mainpage"
import { BusPage } from "../pages/BusPage"
import { PowerGenPage } from "../pages/PowerGenPage"
import { MiningConstruction } from "../pages/MiningConstruction"
import { ContactUsPage } from "../pages/ContactUsPage"
import { SiteMap } from "../pages/SiteMap"

import { Header } from "../components/Header"
import { Downloads } from "../pages/Downloads"
import { Vehicles } from "../pages/Vehicles"
import { Mining } from "../pages/Mining"
import { Power } from "../pages/Power"
import { BuyButton } from "..//components/BuyButton"
import { Distributors } from "../pages/Distributors"
import { About } from "../pages/About"
import { FootArrow } from "components/Vscroller"
import { ScrollToTop } from "../components/ScrollToTop"


export const Directions = () => {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Header />
            <BuyButton />
            <main>
                <Switch>
                    <Route path="/" exact>
                        <MainPage />
                    </Route>

                    <Route path="/bus" exact>
                        <BusPage />
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

                    <Route path="/powergenerators" exact>
                        <PowerGenPage />
                    </Route>

                    <Route path="/mining-constructon" exact>
                        <MiningConstruction />
                    </Route>

                    <Route path="/contact-us" exact>
                        <ContactUsPage />
                    </Route>

                    <Route path="/site-map" exact>
                        <SiteMap />
                    </Route>

                    <Route path="/downloads" exact>
                        <Downloads />
                    </Route>

                </Switch>
            </main>
            < FootArrow />
        </BrowserRouter>
    )
}