import { createContext, useContext, useState, useEffect } from "react"
import toast from "react-hot-toast"

const FavoriteContext = createContext()

export function FavoriteProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites")

    return savedFavorites ? JSON.parse(savedFavorites) : []
  })

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites))
  }, [favorites])

  function addFavorite(book) {
    const alreadyExists = favorites.some(
      (favorite) => favorite.id === book.id
    )

    if (alreadyExists) {
      toast.error("Este livro já está nos favoritos!")
      return
    }

    setFavorites([...favorites, book])
    toast.success("Livro adicionado aos favoritos!")
  }

  function removeFavorite(indexToRemove) {
    setFavorites(
      favorites.filter((_, index) => index !== indexToRemove)
    )

    toast.error("Livro removido dos favoritos!")
  }

  return (
    <FavoriteContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite
      }}
    >
      {children}
    </FavoriteContext.Provider>
  )
}

export function useFavorite() {
  return useContext(FavoriteContext)
}