import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { MainPage } from "../pages/Mainpage"
import { BusPage } from "../pages/BusPage"
import { PowerGenPage } from "../pages/PowerGenPage"
import { MiningConstruction } from "../pages/MiningConstruction"
import { ContactUsPage } from "../pages/ContactUsPage"
import { SiteMap } from "../pages/SiteMap"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { Downloads } from "../pages/Downloads"
import { Certifications } from "../pages/Certifications"

export const Directions = () => {
    return (
        <BrowserRouter>

            <Header />
            <main>
                <Switch>
                    <Route path="/" exact>
                        <MainPage />
                    </Route>

                    <Route path="/bus" exact>
                        <BusPage />
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
                    <Route path="/certifications" exact>
                        <Certifications />
                    </Route>
                </Switch>
            </main>

        </BrowserRouter>
    )
}