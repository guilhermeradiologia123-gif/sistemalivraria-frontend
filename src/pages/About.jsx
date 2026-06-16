import { motion } from "framer-motion"
import {
  RiBookOpenLine,
  RiRocketLine,
  RiHeart3Line,
  RiTeamLine
} from "react-icons/ri"

function About() {
  const cards = [
    {
      icon: <RiBookOpenLine size={35} />,
      title: "Biblioteca Premium",
      text: "Centenas de livros cuidadosamente selecionados para todos os tipos de leitores."
    },
    {
      icon: <RiRocketLine size={35} />,
      title: "Tecnologia Moderna",
      text: "Experiência rápida, intuitiva e desenvolvida com tecnologias modernas."
    },
    {
      icon: <RiHeart3Line size={35} />,
      title: "Leitores Apaixonados",
      text: "Criado para quem ama descobrir novas histórias e conhecimentos."
    },
    {
      icon: <RiTeamLine size={35} />,
      title: "Comunidade",
      text: "Conectamos leitores através de uma experiência digital única."
    }
  ]

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "60px 30px"
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1
          style={{
            fontSize: "60px",
            textAlign: "center",
            marginBottom: "20px"
          }}
        >
          Sobre a NovaVerse
        </h1>

        <p
          style={{
            textAlign: "center",
            maxWidth: "800px",
            margin: "0 auto",
            fontSize: "20px",
            lineHeight: "1.8"
          }}
        >
          A NovaVerse nasceu para transformar a forma como as pessoas
          encontram e descobrem livros. Nossa missão é unir tecnologia,
          design e literatura em uma única experiência premium.
        </p>
      </motion.div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          flexWrap: "wrap",
          marginTop: "60px"
        }}
      >
        <div
          style={{
            background: "rgba(255,255,255,0.12)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: "24px",
            padding: "25px",
            minWidth: "180px",
            textAlign: "center"
          }}
        >
          <h2>500+</h2>
          <p>Livros</p>
        </div>

        <div
          style={{
            background: "rgba(255,255,255,0.12)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: "24px",
            padding: "25px",
            minWidth: "180px",
            textAlign: "center"
          }}
        >
          <h2>1000+</h2>
          <p>Clientes</p>
        </div>

        <div
          style={{
            background: "rgba(255,255,255,0.12)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: "24px",
            padding: "25px",
            minWidth: "180px",
            textAlign: "center"
          }}
        >
          <h2>50+</h2>
          <p>Autores</p>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          gap: "25px",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "70px"
        }}
      >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            whileHover={{
              y: -10,
              scale: 1.03
            }}
            style={{
              width: "260px",
              padding: "25px",
              borderRadius: "24px",
              background: "rgba(255,255,255,0.12)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.2)",
              boxShadow:
                "0 20px 40px rgba(0,0,0,0.12)"
            }}
          >
            <div
              style={{
                color: "#7c3aed",
                marginBottom: "15px"
              }}
            >
              {card.icon}
            </div>

            <h3
              style={{
                marginBottom: "12px"
              }}
            >
              {card.title}
            </h3>

            <p
              style={{
                lineHeight: "1.7"
              }}
            >
              {card.text}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default About