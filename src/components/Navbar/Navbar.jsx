import { Link } from "react-router-dom"
import { useCart } from "../../context/CartContext"
import { useFavorite } from "../../context/FavoriteContext"

import {
  RiHome5Line,
  RiInformationLine,
  RiHeart3Line,
  RiShoppingCart2Line,
  RiBookOpenLine,
  RiSearchLine
} from "react-icons/ri"

function Navbar({ search, setSearch }) {
  const { cart } = useCart()
  const { favorites } = useFavorite()

  const navButton = {
    color: "white",
    fontWeight: "600",
    padding: "12px 18px",
    borderRadius: "999px",
    background: "rgba(255,255,255,0.12)",
    backdropFilter: "blur(12px)",
    border: "1px solid rgba(255,255,255,0.15)",
    transition: "all 0.3s ease",
    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
    display: "flex",
    alignItems: "center",
    gap: "8px"
  }

  return (
    <nav
      style={{
        background: "linear-gradient(135deg, rgba(15,23,42,0.92), rgba(30,58,138,0.92), rgba(124,58,237,0.92))",
        backdropFilter: "blur(18px)",
        padding: "18px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "20px",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        boxShadow: "0 10px 30px rgba(124,58,237,0.35)",
        flexWrap: "wrap"
      }}
    >
      <h2 style={{ color: "white", fontSize: "30px", display: "flex", gap: "10px" }}>
        <RiBookOpenLine size={32} />
        NovaVerse
      </h2>

      <div style={{ position: "relative" }}>
        <RiSearchLine
          size={20}
          style={{
            position: "absolute",
            left: "15px",
            top: "50%",
            transform: "translateY(-50%)",
            color: "#64748b"
          }}
        />

        <input
          type="text"
          placeholder="Buscar livros..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "14px 20px 14px 45px",
            borderRadius: "999px",
            border: "none",
            width: "340px",
            maxWidth: "100%",
            outline: "none",
            fontSize: "15px",
            background: "rgba(255,255,255,0.95)"
          }}
        />
      </div>

      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
        <Link to="/" style={navButton}><RiHome5Line /> Home</Link>
        <Link to="/about" style={navButton}><RiInformationLine /> Sobre</Link>
        <Link to="/favorites" style={navButton}><RiHeart3Line /> Favoritos ({favorites.length})</Link>
        <Link to="/cart" style={navButton}><RiShoppingCart2Line /> Carrinho ({cart.length})</Link>
      </div>
    </nav>
  )
}

export default Navbar