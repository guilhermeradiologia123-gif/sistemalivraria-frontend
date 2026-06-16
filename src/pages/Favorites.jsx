import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"
import { useFavorite } from "../context/FavoriteContext"

import {
  RiHeart3Fill,
  RiShoppingBag3Fill,
  RiBookOpenFill,
  RiDeleteBin5Fill
} from "react-icons/ri"

function Favorites() {
  const { addToCart } = useCart()
  const { favorites, removeFavorite } = useFavorite()

  const glassStyle = {
    background: "rgba(255,255,255,0.12)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    border: "1px solid rgba(255,255,255,0.2)",
    boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
    borderRadius: "24px"
  }

  return (
    <div
      style={{
        padding: "40px",
        maxWidth: "1200px",
        margin: "0 auto"
      }}
    >
      <h1
        style={{
          marginBottom: "30px",
          fontSize: "48px",
          fontWeight: "800"
        }}
      >
        ❤️ Favoritos
      </h1>

      {favorites.length === 0 ? (
        <div
          style={{
            ...glassStyle,
            padding: "30px"
          }}
        >
          <h2>Nenhum livro favoritado.</h2>

          <p
            style={{
              marginTop: "10px",
              color: "#666"
            }}
          >
            Clique em Favoritar nos livros para salvá-los aqui.
          </p>

          <Link to="/">
            <button
              style={{
                marginTop: "20px",
                padding: "12px 20px",
                backgroundColor: "#2563eb",
                color: "white",
                display: "flex",
                alignItems: "center",
                gap: "8px"
              }}
            >
              <RiBookOpenFill /> Ver livros
            </button>
          </Link>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            gap: "24px",
            flexWrap: "wrap",
            justifyContent: "center"
          }}
        >
          {favorites.map((book, index) => (
            <div
              key={index}
              className="book-card"
              style={{
                ...glassStyle,
                width: "270px",
                padding: "20px",
                position: "relative",
                overflow: "hidden"
              }}
            >
              <span
                style={{
                  position: "absolute",
                  top: "14px",
                  left: "14px",
                  background:
                    "linear-gradient(135deg, #ec4899, #be185d)",
                  color: "white",
                  padding: "7px 12px",
                  borderRadius: "999px",
                  fontSize: "12px",
                  fontWeight: "bold",
                  zIndex: 2,
                  display: "flex",
                  alignItems: "center",
                  gap: "6px"
                }}
              >
                <RiHeart3Fill /> Favorito
              </span>

              <img
                src={book.image}
                alt={book.title}
                style={{
                  width: "100%",
                  height: "330px",
                  objectFit: "cover",
                  borderRadius: "18px",
                  boxShadow: "0 12px 28px rgba(0,0,0,0.25)"
                }}
              />

              <h2
                style={{
                  marginTop: "16px",
                  fontSize: "20px"
                }}
              >
                {book.title}
              </h2>

              <p
                style={{
                  color: "#64748b",
                  marginTop: "6px"
                }}
              >
                {book.author}
              </p>

              <p style={{ marginTop: "8px" }}>
                {book.rating}
              </p>

              <h3
                style={{
                  color: "#16a34a",
                  marginTop: "8px",
                  fontSize: "24px"
                }}
              >
                {book.price}
              </h3>

              <button
                onClick={() => removeFavorite(index)}
                style={{
                  marginTop: "14px",
                  width: "100%",
                  padding: "13px",
                  background:
                    "linear-gradient(135deg, #dc2626, #991b1b)",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px"
                }}
              >
                <RiDeleteBin5Fill /> Remover
              </button>

              <button
                onClick={() => addToCart(book)}
                style={{
                  marginTop: "10px",
                  width: "100%",
                  padding: "13px",
                  background:
                    "linear-gradient(135deg, #2563eb, #1e40af)",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px"
                }}
              >
                <RiShoppingBag3Fill /> Comprar
              </button>

              <Link to={`/book/${book.id}`}>
                <button
                  style={{
                    marginTop: "10px",
                    width: "100%",
                    padding: "13px",
                    background:
                      "linear-gradient(135deg, #111827, #374151)",
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "8px"
                  }}
                >
                  <RiBookOpenFill /> Ver Detalhes
                </button>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Favorites