import React from 'react';
import "./App.css";
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Projects from './components/Projects/Projects';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const router = createBrowserRouter([
  {
    path: "/",
    element: <>
    <Navbar />
      <Main />
    <Footer />
    </>
  },
  {
    path: "/about",
    element: <>
    <Navbar />
      <About />
    <Footer />
    </>
  },
  {
    path: "/projects",
    element: <>
    <Navbar />
      <Projects />
    <Footer />
    </>
  }
])
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
