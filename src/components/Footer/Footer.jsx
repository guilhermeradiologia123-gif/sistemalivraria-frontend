import {
  RiBookOpenLine,
  RiInstagramLine,
  RiGithubLine,
  RiMailLine,
  RiHeart3Fill
} from "react-icons/ri"

function Footer() {
  return (
    <footer
      style={{
        marginTop: "80px",
        padding: "60px 40px",
        background:
          "linear-gradient(135deg,#020617,#1e3a8a,#7c3aed)",
        color: "white",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "40px"
        }}
      >
        <div>
          <h2
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "15px",
              fontSize: "32px"
            }}
          >
            <RiBookOpenLine />
            NovaVerse
          </h2>

          <p
            style={{
              maxWidth: "320px",
              color: "#cbd5e1",
              lineHeight: "1.8"
            }}
          >
            Uma livraria digital moderna criada para leitores que
            buscam conhecimento, imaginação e uma experiência premium.
          </p>
        </div>

        <div>
          <h3 style={{ marginBottom: "18px" }}>
            Navegação
          </h3>

          <p>🏠 Home</p>
          <p>📚 Livros</p>
          <p>❤️ Favoritos</p>
          <p>🛒 Carrinho</p>
        </div>

        <div>
          <h3 style={{ marginBottom: "18px" }}>
            Contato
          </h3>

          <p
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "10px"
            }}
          >
            <RiMailLine />
            contato@novaverse.com
          </p>

          <p
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "10px"
            }}
          >
            <RiInstagramLine />
            @novaverse
          </p>

          <p
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px"
            }}
          >
            <RiGithubLine />
            github.com/novaverse
          </p>
        </div>
      </div>

      <hr
        style={{
          margin: "35px 0",
          borderColor: "rgba(255,255,255,0.15)"
        }}
      />

      <p
        style={{
          textAlign: "center",
          color: "#cbd5e1",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "8px"
        }}
      >
        Feito com <RiHeart3Fill color="#ec4899" /> por NovaVerse
      </p>

      <p
        style={{
          textAlign: "center",
          color: "#94a3b8",
          marginTop: "10px"
        }}
      >
        © 2026 NovaVerse. Todos os direitos reservados.
      </p>
    </footer>
  )
}

export default Footer