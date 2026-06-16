import { useParams, Link } from "react-router-dom"
import { useCart } from "../context/CartContext"
import { useFavorite } from "../context/FavoriteContext"

import paraTodos from "../assets/para-todos.jpg"
import percyJackson from "../assets/percy-jackson.jpg"
import domCasmurro from "../assets/dom-casmurro.jpg"

function BookDetails() {
  const { id } = useParams()
  const { addToCart } = useCart()
  const { addFavorite } = useFavorite()

  const books = {
    1: {
      id: 1,
      title: "Harry Potter",
      author: "J.K. Rowling",
      category: "Fantasia",
      price: "R$ 49,90",
      rating: "⭐⭐⭐⭐⭐",
      image: "https://m.media-amazon.com/images/I/81iqZ2HHD-L.jpg",
      description:
        "A história do jovem bruxo Harry Potter e suas aventuras em Hogwarts, uma escola de magia cheia de mistérios, amizades e desafios."
    },

    2: {
      id: 2,
      title: "Senhor dos Anéis",
      author: "J.R.R. Tolkien",
      category: "Aventura",
      price: "R$ 69,90",
      rating: "⭐⭐⭐⭐⭐",
      image: "https://m.media-amazon.com/images/I/91dSMhdIzTL.jpg",
      description:
        "Uma jornada épica pela Terra Média para destruir o Um Anel e enfrentar as forças sombrias de Sauron."
    },

    3: {
      id: 3,
      title: "Percy Jackson",
      author: "Rick Riordan",
      category: "Mitologia",
      price: "R$ 39,90",
      rating: "⭐⭐⭐⭐⭐",
      image: percyJackson,
      description:
        "Percy descobre ser filho de um deus grego e entra em um mundo cheio de monstros, profecias e aventuras mitológicas."
    },

    4: {
      id: 4,
      title: "Dom Casmurro",
      author: "Machado de Assis",
      category: "Romance",
      price: "R$ 24,90",
      rating: "⭐⭐⭐⭐",
      image: domCasmurro,
      description:
        "Um clássico da literatura brasileira que explora amor, ciúme, memória e dúvida por meio da história de Bentinho e Capitu."
    },

    5: {
      id: 5,
      title: "Clean Code",
      author: "Robert C. Martin",
      category: "Tecnologia",
      price: "R$ 89,90",
      rating: "⭐⭐⭐⭐⭐",
      image: "https://m.media-amazon.com/images/I/41SH-SvWPxL.jpg",
      description:
        "Um guia essencial para programadores que desejam escrever códigos mais limpos, organizados e fáceis de manter."
    },

    6: {
      id: 6,
      title: "O Hobbit",
      author: "J.R.R. Tolkien",
      category: "Fantasia",
      price: "R$ 44,90",
      rating: "⭐⭐⭐⭐⭐",
      image: "https://m.media-amazon.com/images/I/91M9xPIf10L.jpg",
      description:
        "Bilbo Bolseiro embarca em uma grande aventura ao lado de anões para recuperar um tesouro guardado por um dragão."
    },

    7: {
      id: 7,
      title: "Para Todos os Garotos que Já Amei",
      author: "Jenny Han",
      category: "Romance",
      price: "R$ 39,90",
      rating: "⭐⭐⭐⭐⭐",
      image: paraTodos,
      description:
        "Lara Jean guarda cartas de amor secretas, mas sua vida vira de cabeça para baixo quando elas são enviadas."
    }
  }

  const book = books[id]

  if (!book) {
    return (
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h1>Livro não encontrado</h1>

        <Link to="/">
          <button
            style={{
              marginTop: "20px",
              padding: "12px 20px",
              backgroundColor: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold"
            }}
          >
            Voltar para Home
          </button>
        </Link>
      </div>
    )
  }

  return (
    <div
      style={{
        padding: "40px",
        maxWidth: "1100px",
        margin: "0 auto"
      }}
    >
      <Link
        to="/"
        style={{
          color: "#2563eb",
          fontWeight: "bold"
        }}
      >
        ← Voltar para livros
      </Link>

      <div
        style={{
          marginTop: "30px",
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "20px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
          display: "flex",
          gap: "40px",
          flexWrap: "wrap",
          alignItems: "flex-start"
        }}
      >
        <img
          src={book.image}
          alt={book.title}
          style={{
            width: "320px",
            maxWidth: "100%",
            height: "460px",
            objectFit: "cover",
            borderRadius: "16px",
            boxShadow: "0 6px 18px rgba(0,0,0,0.25)"
          }}
        />

        <div
          style={{
            flex: "1",
            minWidth: "280px"
          }}
        >
          <span
            style={{
              backgroundColor: "#facc15",
              color: "#111827",
              padding: "6px 12px",
              borderRadius: "20px",
              fontWeight: "bold",
              fontSize: "14px"
            }}
          >
            ⭐ Bestseller
          </span>

          <h1
            style={{
              marginTop: "20px",
              marginBottom: "10px"
            }}
          >
            {book.title}
          </h1>

          <p
            style={{
              color: "#666",
              fontSize: "18px",
              marginBottom: "10px"
            }}
          >
            Autor: {book.author}
          </p>

          <p
            style={{
              color: "#2563eb",
              fontWeight: "bold",
              fontSize: "18px",
              marginBottom: "10px"
            }}
          >
            Categoria: {book.category}
          </p>

          <p
            style={{
              fontSize: "22px",
              marginBottom: "15px"
            }}
          >
            {book.rating}
          </p>

          <h2
            style={{
              color: "#16a34a",
              fontSize: "32px",
              marginBottom: "20px"
            }}
          >
            {book.price}
          </h2>

          <p
            style={{
              lineHeight: "1.8",
              fontSize: "17px",
              color: "#333",
              marginBottom: "25px"
            }}
          >
            {book.description}
          </p>

          <button
            onClick={() => addFavorite(book)}
            style={{
              padding: "14px 24px",
              backgroundColor: "#ec4899",
              color: "white",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              fontWeight: "bold",
              marginRight: "10px",
              marginBottom: "10px"
            }}
          >
            ❤️ Favoritar
          </button>

          <button
            onClick={() => addToCart(book)}
            style={{
              padding: "14px 24px",
              backgroundColor: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              fontWeight: "bold",
              marginBottom: "10px"
            }}
          >
            🛒 Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </div>
  )
}

export default BookDetails