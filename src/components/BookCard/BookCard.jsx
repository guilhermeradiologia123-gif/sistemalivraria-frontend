import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { useFavorite } from "../../context/FavoriteContext"
import { RiHeart3Fill, RiShoppingBag3Fill, RiStarFill } from "react-icons/ri"

function BookCard({
  id,
  title,
  author,
  category,
  image,
  price,
  rating
}) {
  const { addFavorite } = useFavorite()

  return (
    <motion.div
      className="book-card premium-card"
      whileHover={{
        y: -16,
        rotateX: 4,
        rotateY: -4,
        scale: 1.04
      }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 16
      }}
      style={{
        width: "100%",
        maxWidth: "285px",
        background: "rgba(255,255,255,0.82)",
        backdropFilter: "blur(18px)",
        padding: "18px",
        borderRadius: "28px",
        boxShadow: "0 18px 45px rgba(15,23,42,0.18)",
        position: "relative",
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.75)",
        transformStyle: "preserve-3d"
      }}
    >
      <div className="card-glow"></div>

      <span
        style={{
          position: "absolute",
          top: "14px",
          left: "14px",
          background: "linear-gradient(135deg, #facc15, #f97316)",
          color: "#111827",
          padding: "7px 12px",
          borderRadius: "999px",
          fontSize: "12px",
          fontWeight: "bold",
          zIndex: 3,
          display: "flex",
          alignItems: "center",
          gap: "6px"
        }}
      >
        <RiStarFill /> Bestseller
      </span>

      <div
        style={{
          overflow: "hidden",
          borderRadius: "22px"
        }}
      >
        <img
          src={image}
          alt={title}
          className="book-cover"
          style={{
            width: "100%",
            height: "330px",
            objectFit: "cover",
            borderRadius: "22px",
            boxShadow: "0 12px 28px rgba(0,0,0,0.25)"
          }}
        />
      </div>

      <h2 style={{ marginTop: "16px", fontSize: "20px" }}>
        {title}
      </h2>

      <p style={{ color: "#64748b", marginTop: "6px" }}>
        {author}
      </p>

      <p
        style={{
          color: "#2563eb",
          fontWeight: "bold",
          marginTop: "8px"
        }}
      >
        {category}
      </p>

      <p style={{ marginTop: "8px" }}>{rating}</p>

      <h3
        style={{
          marginTop: "8px",
          color: "#16a34a",
          fontSize: "24px"
        }}
      >
        {price}
      </h3>

      <button
        onClick={() =>
          addFavorite({
            id,
            title,
            author,
            category,
            image,
            price,
            rating
          })
        }
        style={{
          marginTop: "14px",
          width: "100%",
          padding: "13px",
          background: "linear-gradient(135deg, #ec4899, #be185d)",
          color: "white",
          borderRadius: "14px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "8px"
        }}
      >
        <RiHeart3Fill /> Favoritar
      </button>

      <Link to={`/book/${id}`}>
        <button
          style={{
            marginTop: "10px",
            width: "100%",
            padding: "13px",
            background: "linear-gradient(135deg, #2563eb, #1e40af)",
            color: "white",
            borderRadius: "14px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px"
          }}
        >
          <RiShoppingBag3Fill /> Comprar Agora
        </button>
      </Link>
    </motion.div>
  )
}

export default BookCard