import { createContext, useContext, useState, useEffect } from "react"
import toast from "react-hot-toast"

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart")

    return savedCart ? JSON.parse(savedCart) : []
  })

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  function addToCart(book) {
    setCart([...cart, book])
    toast.success("Livro adicionado ao carrinho!")
  }

  function removeFromCart(indexToRemove) {
    setCart(
      cart.filter((_, index) => index !== indexToRemove)
    )

    toast.error("Livro removido do carrinho!")
  }

  function clearCart() {
    setCart([])
    toast.error("Carrinho limpo!")
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}