import Hero from "../components/Hero/Hero"
import BookCard from "../components/BookCard/BookCard"

import paraTodos from "../assets/para-todos.jpg"
import percyJackson from "../assets/percy-jackson.jpg"
import domCasmurro from "../assets/dom-casmurro.jpg"

function Home({ search = "" }) {
  const books = [
    {
      id: 1,
      title: "Harry Potter",
      author: "J.K. Rowling",
      category: "Fantasia",
      price: "R$ 49,90",
      rating: "⭐⭐⭐⭐⭐",
      image: "https://m.media-amazon.com/images/I/81iqZ2HHD-L.jpg"
    },
    {
      id: 2,
      title: "Senhor dos Anéis",
      author: "J.R.R. Tolkien",
      category: "Aventura",
      price: "R$ 69,90",
      rating: "⭐⭐⭐⭐⭐",
      image: "https://m.media-amazon.com/images/I/91dSMhdIzTL.jpg"
    },
    {
      id: 3,
      title: "Percy Jackson",
      author: "Rick Riordan",
      category: "Mitologia",
      price: "R$ 39,90",
      rating: "⭐⭐⭐⭐⭐",
      image: percyJackson
    },
    {
      id: 4,
      title: "Dom Casmurro",
      author: "Machado de Assis",
      category: "Romance",
      price: "R$ 24,90",
      rating: "⭐⭐⭐⭐",
      image: domCasmurro
    },
    {
      id: 5,
      title: "Clean Code",
      author: "Robert C. Martin",
      category: "Tecnologia",
      price: "R$ 89,90",
      rating: "⭐⭐⭐⭐⭐",
      image: "https://m.media-amazon.com/images/I/41SH-SvWPxL.jpg"
    },
    {
      id: 6,
      title: "O Hobbit",
      author: "J.R.R. Tolkien",
      category: "Fantasia",
      price: "R$ 44,90",
      rating: "⭐⭐⭐⭐⭐",
      image: "https://m.media-amazon.com/images/I/91M9xPIf10L.jpg"
    },
    {
      id: 7,
      title: "Para Todos os Garotos que Já Amei",
      author: "Jenny Han",
      category: "Romance",
      price: "R$ 39,90",
      rating: "⭐⭐⭐⭐⭐",
      image: paraTodos
    }
  ]

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase()) ||
    book.author.toLowerCase().includes(search.toLowerCase()) ||
    book.category.toLowerCase().includes(search.toLowerCase())
  )

  const bestSellers = books.slice(0, 4)

  const categories = [
    "📚 Fantasia",
    "💻 Tecnologia",
    "❤️ Romance",
    "⚔️ Aventura",
    "🏛️ Clássicos"
  ]

  return (
    <>
      <Hero />

      <section
        style={{
          padding: "70px 40px",
          maxWidth: "1300px",
          margin: "0 auto"
        }}
      >
        <div
          style={{
            marginBottom: "35px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
            flexWrap: "wrap"
          }}
        >
          <div>
            <p
              style={{
                color: "#7c3aed",
                fontWeight: "bold",
                marginBottom: "8px"
              }}
            >
              🔥 Seleção especial
            </p>

            <h1
              style={{
                fontSize: "44px",
                marginBottom: "10px"
              }}
            >
              Mais Vendidos
            </h1>

            <p
              style={{
                color: "#64748b",
                fontSize: "18px"
              }}
            >
              Os livros favoritos dos leitores da NovaVerse.
            </p>
          </div>

          <a
            href="#livros"
            style={{
              padding: "14px 24px",
              borderRadius: "999px",
              background: "linear-gradient(135deg,#06b6d4,#7c3aed)",
              color: "white",
              fontWeight: "bold",
              boxShadow: "0 15px 35px rgba(124,58,237,.25)"
            }}
          >
            Ver todos
          </a>
        </div>

        <div
          style={{
            display: "flex",
            gap: "24px",
            flexWrap: "wrap",
            justifyContent: "center"
          }}
        >
          {bestSellers.map((book) => (
            <BookCard
              key={book.id}
              id={book.id}
              title={book.title}
              author={book.author}
              category={book.category}
              image={book.image}
              price={book.price}
              rating={book.rating}
            />
          ))}
        </div>
      </section>

      <section
        style={{
          padding: "50px 40px",
          maxWidth: "1300px",
          margin: "0 auto"
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "40px"
          }}
        >
          <p
            style={{
              color: "#06b6d4",
              fontWeight: "bold",
              marginBottom: "8px"
            }}
          >
            🧭 Explore por gênero
          </p>

          <h1
            style={{
              fontSize: "44px",
              marginBottom: "10px"
            }}
          >
            Categorias
          </h1>

          <p
            style={{
              color: "#64748b",
              fontSize: "18px"
            }}
          >
            Encontre livros de acordo com seu estilo de leitura.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "25px",
            flexWrap: "wrap"
          }}
        >
          {categories.map((category) => (
            <div
              key={category}
              style={{
                width: "220px",
                padding: "30px",
                borderRadius: "24px",
                background: "rgba(255,255,255,0.12)",
                backdropFilter: "blur(18px)",
                border: "1px solid rgba(255,255,255,0.2)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.10)",
                textAlign: "center",
                fontSize: "22px",
                fontWeight: "bold",
                cursor: "pointer",
                transition: "0.3s"
              }}
            >
              {category}
            </div>
          ))}
        </div>
      </section>

      <section
        id="livros"
        style={{
          padding: "70px 40px",
          maxWidth: "1300px",
          margin: "0 auto"
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "40px"
          }}
        >
          <p
            style={{
              color: "#06b6d4",
              fontWeight: "bold",
              marginBottom: "8px"
            }}
          >
            📚 Catálogo completo
          </p>

          <h1
            style={{
              fontSize: "44px",
              marginBottom: "10px"
            }}
          >
            Todos os Livros
          </h1>

          <p
            style={{
              color: "#64748b",
              fontSize: "18px"
            }}
          >
            Explore todos os títulos disponíveis na NovaVerse.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            gap: "24px",
            flexWrap: "wrap",
            justifyContent: "center"
          }}
        >
          {filteredBooks.map((book) => (
            <BookCard
              key={book.id}
              id={book.id}
              title={book.title}
              author={book.author}
              category={book.category}
              image={book.image}
              price={book.price}
              rating={book.rating}
            />
          ))}
        </div>

        {filteredBooks.length === 0 && (
          <h2
            style={{
              textAlign: "center",
              marginTop: "40px",
              color: "#64748b"
            }}
          >
            Nenhum livro encontrado.
          </h2>
        )}
      </section>
    </>
  )
}

export default Home