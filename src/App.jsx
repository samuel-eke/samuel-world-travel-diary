import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import Products from "./pages/Products";
import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";
import Citylist from "./components/Citylist";
const JSON_SERVER = "http://localhost:8000";
import CountryList from "./components/CountryList";

function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const resp = await fetch(`${JSON_SERVER}/cities`);
        const data = await resp.json();
        setCities(data);
      } catch {
        alert("Error loading data from server");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={<Homepage />}
          />
          <Route
            path="/products"
            element={<Products />}
          />
          <Route
            path="/pricing"
            element={<Pricing />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="app"
            element={<AppLayout />}>
            <Route
              index
              element={
                <Citylist
                  cities={cities}
                  isLoading={isLoading}
                />
              }
            />
            <Route
              path="cities"
              element={
                <Citylist
                  cities={cities}
                  isLoading={isLoading}
                />
              }
            />
            <Route
              path="countries"
              element={
                <CountryList
                  cities={cities}
                  isLoading={isLoading}
                />
              }
            />
            <Route
              path="form"
              element={<p>map form</p>}
            />
          </Route>
          <Route
            path="*"
            element={<PageNotFound />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
