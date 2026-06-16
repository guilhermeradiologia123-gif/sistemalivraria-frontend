import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"
import { RiDeleteBin5Fill, RiBankCardFill } from "react-icons/ri"
import toast from "react-hot-toast"

function Cart() {
  const { cart, removeFromCart, clearCart } = useCart()

  const total = cart.reduce((sum, book) => {
    const priceNumber = Number(
      book.price.replace("R$", "").replace(",", ".").trim()
    )

    return sum + priceNumber
  }, 0)

  function finishPurchase() {
  toast.success("Compra realizada com sucesso!")

  clearCart()
}

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
        maxWidth: "1100px",
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
        🛒 Carrinho
      </h1>

      {cart.length === 0 ? (
        <div
          style={{
            ...glassStyle,
            padding: "30px"
          }}
        >
          <h2>Seu carrinho está vazio</h2>

          <p style={{ marginTop: "10px", color: "#666" }}>
            Quando você adicionar livros, eles aparecerão aqui.
          </p>

          <Link to="/">
            <button
              style={{
                marginTop: "20px",
                padding: "12px 20px",
                backgroundColor: "#2563eb",
                color: "white"
              }}
            >
              Ver livros
            </button>
          </Link>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            gap: "30px",
            flexWrap: "wrap"
          }}
        >
          <div
            style={{
              flex: "1",
              minWidth: "300px"
            }}
          >
            {cart.map((book, index) => (
              <div
                key={index}
                style={{
                  ...glassStyle,
                  padding: "20px",
                  marginBottom: "15px",
                  display: "flex",
                  gap: "20px",
                  alignItems: "center",
                  flexWrap: "wrap"
                }}
              >
                <img
                  src={book.image}
                  alt={book.title}
                  style={{
                    width: "100px",
                    height: "140px",
                    objectFit: "cover",
                    borderRadius: "16px",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.25)"
                  }}
                />

                <div>
                  <h2>{book.title}</h2>

                  <p>{book.author}</p>

                  <p>{book.rating}</p>

                  <strong
                    style={{
                      color: "#16a34a",
                      fontSize: "20px"
                    }}
                  >
                    {book.price}
                  </strong>

                  <br />

                  <button
                    onClick={() => removeFromCart(index)}
                    style={{
                      marginTop: "12px",
                      padding: "10px 15px",
                      backgroundColor: "#dc2626",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px"
                    }}
                  >
                    <RiDeleteBin5Fill /> Remover
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              ...glassStyle,
              width: "320px",
              padding: "25px",
              position: "sticky",
              top: "110px"
            }}
          >
            <h2>Resumo do Pedido</h2>

            <p style={{ marginTop: "15px" }}>
              Itens: <strong>{cart.length}</strong>
            </p>

            <p style={{ marginTop: "10px" }}>
              Frete:{" "}
              <strong style={{ color: "#16a34a" }}>
                Grátis
              </strong>
            </p>

            <hr style={{ margin: "20px 0" }} />

            <h2 style={{ color: "#16a34a" }}>
              Total: R$ {total.toFixed(2).replace(".", ",")}
            </h2>

            <button
              onClick={finishPurchase}
              style={{
                marginTop: "20px",
                width: "100%",
                padding: "14px",
                backgroundColor: "#16a34a",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px"
              }}
            >
              <RiBankCardFill /> Finalizar Compra
            </button>

            <button
              onClick={clearCart}
              style={{
                marginTop: "12px",
                width: "100%",
                padding: "14px",
                backgroundColor: "#dc2626",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px"
              }}
            >
              <RiDeleteBin5Fill /> Limpar Carrinho
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart