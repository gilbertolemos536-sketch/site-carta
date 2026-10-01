"use client";

const photos = [
  {
    src: "/fotos/foto-1.jpeg",
    number: "01",
    title: "Foi assim que comecei a reparar.",
    text: "Não sei exatamente quando aconteceu, mas em algum momento comecei a perceber que havia algo diferente em você.",
  },
  {
    src: "/fotos/foto-2.jpeg",
    number: "02",
    title: "Há algo no seu jeito.",
    text: "Talvez seja o seu sorriso. Talvez seja a forma como você olha para as coisas. Talvez seja simplesmente quem você é.",
  },
  {
    src: "/fotos/foto-3.jpeg",
    number: "03",
    title: "Algumas pessoas ficam.",
    text: "Mesmo depois de uma conversa terminar, algumas pessoas continuam presentes nos nossos pensamentos.",
  },
  {
    src: "/fotos/foto-4.jpeg",
    number: "04",
    title: "E você ficou.",
    text: "Entre tantas pessoas que passam pela nossa vida, você acabou se tornando alguém que eu queria conhecer ainda mais.",
  },
  {
    src: "/fotos/foto-5.jpeg",
    number: "05",
    title: "Alguns detalhes permanecem.",
    text: "São pequenos momentos que talvez pareçam simples, mas que acabam ganhando um significado especial.",
  },
  {
    src: "/fotos/foto-6.jpeg",
    number: "06",
    title: "Talvez seja apenas o começo.",
    text: "E talvez algumas histórias não precisem ser apressadas. Algumas simplesmente precisam do tempo certo.",
  },
];

const verses = [
  {
    reference: "1 Coríntios 13:4",
    text: "O amor é paciente, o amor é bondoso.",
  },
  {
    reference: "Mateus 5:14",
    text: "Vós sois a luz do mundo.",
  },
  {
    reference: "Eclesiastes 3:1",
    text: "Tudo tem o seu tempo determinado.",
  },
];

export default function Home() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <main className="site">

      {/* HERO */}
      <section className="hero" id="inicio">
        <nav className="navigation">
          <button
            type="button"
            className="logo"
            onClick={() => scrollTo("inicio")}
          >
            <span>✦</span>
            Uma pequena carta
          </button>

          <div className="navigation-links">
            <button
              type="button"
              onClick={() => scrollTo("momentos")}
            >
              Momentos
            </button>

            <button
              type="button"
              onClick={() => scrollTo("fe")}
            >
              Fé
            </button>

            <button
              type="button"
              onClick={() => scrollTo("mensagem")}
            >
              Mensagem
            </button>
          </div>
        </nav>

        <div className="hero-content">
          <p className="eyebrow">
            PARA UMA PESSOA ESPECIAL
          </p>

          <h1>
            Algumas pessoas
            <br />
            <em>simplesmente</em>
            <br />
            deixam uma marca.
          </h1>

          <p className="hero-description">
            Esta não é uma grande declaração.
            <br />
            É apenas uma pequena forma de dizer
            <br />
            aquilo que talvez eu nunca tenha
            <br />
            conseguido dizer pessoalmente.
          </p>

          <button
            type="button"
            className="hero-scroll"
            onClick={() => scrollTo("introducao")}
          >
            <span>Continuar</span>
            <span className="hero-scroll-line" />
          </button>
        </div>

        <div className="hero-number">
          01 / 05
        </div>
      </section>

      {/* INTRODUÇÃO */}
      <section
        className="introduction"
        id="introducao"
      >
        <div className="section-index">
          01
        </div>

        <div className="introduction-content">
          <p className="section-label">
            ANTES DE TUDO
          </p>

          <h2>
            Não foi
            <br />
            planejado.
            <br />
            <em>Aconteceu.</em>
          </h2>

          <div className="introduction-copy">
            <p>
              Às vezes começamos a reparar em alguém
              sem perceber exatamente quando isso
              aconteceu.
            </p>

            <p>
              Um sorriso, uma conversa, uma maneira
              de tratar as pessoas... e, pouco a pouco,
              aquela pessoa começa a ocupar um espaço
              especial nos nossos pensamentos.
            </p>

            <p>
              Talvez seja exatamente isso que aconteceu
              aqui.
            </p>
          </div>
        </div>
      </section>

      {/* MOMENTOS */}
      <section
        className="moments"
        id="momentos"
      >
        <div className="moments-header">
          <div>
            <p className="section-label">
              02 — MOMENTOS
            </p>

            <h2>
              Algumas
              <br />
              <em>memórias.</em>
            </h2>
          </div>

          <p className="moments-description">
            Não são apenas fotografias.
            <br />
            São pequenos momentos que ficaram.
          </p>
        </div>

        <div className="photo-list">
          {photos.map((photo) => (
            <article
              className="photo-card"
              key={photo.src}
            >
              <div className="photo-card-image">
                <img
                  src={photo.src}
                  alt={photo.title}
                />
              </div>

              <div className="photo-card-info">
                <span className="photo-card-number">
                  {photo.number}
                </span>

                <div className="photo-card-text">
                  <h3>{photo.title}</h3>
                  <p>{photo.text}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FÉ */}
      <section
        className="faith"
        id="fe"
      >
        <div
          className="faith-background"
          style={{
            pointerEvents: "none",
          }}
        />

        <div className="faith-content">
          <div className="faith-symbol">
            ✦
          </div>

          <p className="section-label section-label-light">
            03 — FÉ
          </p>

          <h2>
            Há coisas que
            <br />
            o tempo
            <br />
            <em>ensina.</em>
          </h2>

          <p className="faith-introduction">
            E talvez uma das coisas mais bonitas
            seja aprender a confiar no tempo de Deus.
          </p>

          <div className="verses">
            {verses.map((verse, index) => (
              <div
                className="verse"
                key={verse.reference}
              >
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <p>
                    “{verse.text}”
                  </p>

                  <small>
                    {verse.reference}
                  </small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRANSIÇÃO */}
      <section className="transition">
        <p className="section-label">
          E ENTÃO...
        </p>

        <h2>
          Talvez algumas
          <br />
          coisas simplesmente
          <br />
          <em>precisem ser ditas.</em>
        </h2>

        <div className="transition-line" />
      </section>

      {/* MENSAGEM */}
      <section
        className="message"
        id="mensagem"
      >
        <div className="message-container">
          <p className="section-label">
            04 — A MENSAGEM
          </p>

          <div className="message-heart">
            ♡
          </div>

          <h2>
            Eu gosto
            <br />
            <em>de você.</em>
          </h2>

          <div className="message-line" />

          <div className="message-copy">
            <p>
              Não fiz isto para te colocar numa
              situação difícil, nem para esperar
              uma resposta imediata.
            </p>

            <p>
              Fiz porque às vezes uma pessoa se
              torna especial e simplesmente merece
              saber disso.
            </p>

            <p>
              Talvez você não sinta o mesmo.
              E tudo bem. O que importa para mim
              é que você saiba que existe alguém
              que admira a pessoa que você é.
            </p>
          </div>

          <div className="signature">
            <span>
              Com carinho,
            </span>

            <strong>
              Alguém que decidiu dizer.
            </strong>
          </div>
        </div>
      </section>

      {/* FINAL */}
      <section className="ending">
        <div className="ending-reveal">
          <div className="ending-symbol">
            ✦
          </div>

          <p className="section-label">
            05 — UMA ÚLTIMA COISA
          </p>

          <h2>
            Obrigado por
            <br />
            <em>chegar até aqui.</em>
          </h2>

          <p>
            Que Deus continue guiando os seus passos.
            E que você nunca deixe de ser essa pessoa
            que inspira coisas bonitas em quem tem a
            oportunidade de conhecê-la.
          </p>

          <div className="ending-line" />

          <span>
            Fim da carta.
          </span>

          <button
            type="button"
            className="restart"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            ↑ Voltar ao início
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <span>✦</span>
        <p>Feito com carinho.</p>
        <span>✦</span>
      </footer>

    </main>
  );
}