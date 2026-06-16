import { motion } from "framer-motion"
import {
  RiBookOpenLine,
  RiArrowRightLine,
  RiSparklingFill,
  RiFireFill,
  RiStarFill
} from "react-icons/ri"

function Hero() {
  const stats = [
    { number: "500+", label: "Livros" },
    { number: "1000+", label: "Leitores" },
    { number: "50+", label: "Autores" }
  ]

  return (
    <section
      style={{
        minHeight: "720px",
        padding: "80px 70px",
        display: "grid",
        gridTemplateColumns: "1.1fr 0.9fr",
        alignItems: "center",
        gap: "60px",
        position: "relative",
        overflow: "hidden",
        background:
          "radial-gradient(circle at 15% 20%, rgba(6,182,212,0.35), transparent 28%), radial-gradient(circle at 85% 20%, rgba(124,58,237,0.45), transparent 30%), linear-gradient(135deg, #020617 0%, #0f172a 35%, #1e3a8a 70%, #312e81 100%)"
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "420px",
          height: "420px",
          borderRadius: "50%",
          background: "rgba(6,182,212,0.35)",
          filter: "blur(90px)",
          top: "-160px",
          left: "-120px"
        }}
      />

      <div
        style={{
          position: "absolute",
          width: "520px",
          height: "520px",
          borderRadius: "50%",
          background: "rgba(124,58,237,0.4)",
          filter: "blur(100px)",
          bottom: "-220px",
          right: "-180px"
        }}
      />

      <motion.div
        initial={{ opacity: 0, x: -70 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
        style={{
          position: "relative",
          zIndex: 2
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "10px 18px",
            borderRadius: "999px",
            background: "rgba(255,255,255,0.12)",
            border: "1px solid rgba(255,255,255,0.24)",
            color: "white",
            fontWeight: "bold",
            backdropFilter: "blur(12px)",
            marginBottom: "28px"
          }}
        >
          <RiSparklingFill color="#67e8f9" />
          Nova geração de livrarias digitais
        </div>

        <h1
          style={{
            color: "white",
            fontSize: "clamp(52px, 7vw, 96px)",
            lineHeight: "0.92",
            letterSpacing: "-3px",
            marginBottom: "28px",
            maxWidth: "780px"
          }}
        >
          Leia. Explore. Viva novas histórias.
        </h1>

        <p
          style={{
            color: "#dbeafe",
            fontSize: "22px",
            lineHeight: "1.8",
            maxWidth: "650px",
            marginBottom: "38px"
          }}
        >
          A NovaVerse combina design premium, tecnologia e literatura para criar
          uma experiência moderna, rápida e envolvente.
        </p>

        <div
          style={{
            display: "flex",
            gap: "18px",
            flexWrap: "wrap",
            marginBottom: "45px"
          }}
        >
          <a
            href="#livros"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "17px 30px",
              borderRadius: "999px",
              background: "linear-gradient(135deg, #06b6d4, #7c3aed)",
              color: "white",
              fontWeight: "bold",
              fontSize: "18px",
              boxShadow: "0 20px 45px rgba(6,182,212,0.35)"
            }}
          >
            Explorar livros <RiArrowRightLine />
          </a>

          <a
            href="/about"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "17px 30px",
              borderRadius: "999px",
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.25)",
              color: "white",
              fontWeight: "bold",
              fontSize: "18px",
              backdropFilter: "blur(12px)"
            }}
          >
            <RiBookOpenLine /> Sobre a NovaVerse
          </a>
        </div>

        <div
          style={{
            display: "flex",
            gap: "18px",
            flexWrap: "wrap"
          }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -8, scale: 1.04 }}
              style={{
                minWidth: "145px",
                padding: "20px",
                borderRadius: "24px",
                background: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.2)",
                backdropFilter: "blur(16px)"
              }}
            >
              <h2
                style={{
                  color: "white",
                  fontSize: "42px",
                  fontWeight: "900"
                }}
              >
                {stat.number}
              </h2>

              <p
                style={{
                  color: "#cbd5e1",
                  fontSize: "17px"
                }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 80, rotate: 8 }}
        animate={{ opacity: 1, x: 0, rotate: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          justifyContent: "center"
        }}
      >
        <div
          style={{
            width: "390px",
            maxWidth: "100%",
            padding: "24px",
            borderRadius: "38px",
            background: "linear-gradient(135deg, #06b6d4, #7c3aed)",
            boxShadow: "0 40px 90px rgba(0,0,0,0.45)",
            transform: "rotate(-4deg)"
          }}
        >
          <div
            style={{
              minHeight: "460px",
              borderRadius: "30px",
              background:
                "linear-gradient(160deg, rgba(255,255,255,0.28), rgba(255,255,255,0.06))",
              border: "1px solid rgba(255,255,255,0.35)",
              padding: "32px",
              color: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              backdropFilter: "blur(20px)"
            }}
          >
            <div>
              <RiBookOpenLine size={60} />

              <h2
                style={{
                  fontSize: "44px",
                  marginTop: "25px",
                  lineHeight: "1"
                }}
              >
                Livro em Destaque
              </h2>

              <p
                style={{
                  marginTop: "20px",
                  color: "#e0f2fe",
                  fontSize: "18px",
                  lineHeight: "1.6"
                }}
              >
                Recomendações especiais para quem busca a próxima grande
                leitura.
              </p>
            </div>

            <div
              style={{
                padding: "18px",
                borderRadius: "22px",
                background: "rgba(0,0,0,0.24)",
                display: "grid",
                gap: "12px"
              }}
            >
              <p
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontWeight: "bold"
                }}
              >
                <RiFireFill color="#facc15" />
                Promoções exclusivas até 30% OFF
              </p>

              <p
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontWeight: "bold"
                }}
              >
                <RiStarFill color="#facc15" />
                Favoritos, carrinho e busca inteligente
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero