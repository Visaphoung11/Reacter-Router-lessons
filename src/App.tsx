import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Contact } from "./pages/Contact";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { About } from "./pages/About";
import Product from "./pages/Product";
import RootLayout from "./layout/RootLayout";
import ContactLayout from "./layout/ContactLayout";
import ContactInfo from "./components/ContactInfo";
import ContactForm from "./components/ContactForm";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<ContactLayout />}>
          <Route path="info" element={<ContactInfo />} />
          <Route path="form" element={<ContactForm />} />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="product" element={<Product />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
