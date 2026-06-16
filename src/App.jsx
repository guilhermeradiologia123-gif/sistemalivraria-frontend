import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Toaster } from "react-hot-toast"

import { CartProvider } from "./context/CartContext"
import { FavoriteProvider } from "./context/FavoriteContext"

import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"

import Home from "./pages/Home"
import About from "./pages/About"
import BookDetails from "./pages/BookDetails"
import Cart from "./pages/Cart"
import Favorites from "./pages/Favorites"

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [search, setSearch] = useState("")

  return (
    <CartProvider>
      <FavoriteProvider>
        <BrowserRouter>
          <div className={darkMode ? "dark" : ""}>
            <Navbar search={search} setSearch={setSearch} />

            <Routes>
              <Route path="/" element={<Home search={search} />} />
              <Route path="/about" element={<About />} />
              <Route path="/book/:id" element={<BookDetails />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/favorites" element={<Favorites />} />
            </Routes>

            <Footer />

            <Toaster
              position="top-right"
              toastOptions={{
                duration: 2500,
                style: {
                  background: "#020617",
                  color: "white",
                  borderRadius: "14px",
                  padding: "14px 18px",
                  border: "1px solid rgba(255,255,255,0.15)"
                }
              }}
            />

            <button
              onClick={() => setDarkMode(!darkMode)}
              style={{
                position: "fixed",
                bottom: "25px",
                right: "25px",
                width: "65px",
                height: "65px",
                borderRadius: "50%",
                border: "none",
                cursor: "pointer",
                fontSize: "26px",
                background:
                  "linear-gradient(135deg,#06b6d4,#7c3aed)",
                color: "white",
                boxShadow:
                  "0 15px 35px rgba(124,58,237,.35)",
                zIndex: 9999
              }}
            >
              {darkMode ? "☀️" : "🌙"}
            </button>
          </div>
        </BrowserRouter>
      </FavoriteProvider>
    </CartProvider>
  )
}

export default App