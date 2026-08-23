// Hero 全屏首页 — 封面大图版本

function Hero() {
  const coverUrl = 'https://aka.doubaocdn.com/s/k3oRPhVQKi';

  return (
    <section id="top" className="hero">
      <div className="hero-image">
        <img src={coverUrl} alt="展览封面" />
      </div>
      <div className="hero-overlay"></div>
      <div className="hero-vignette"></div>

      <div className="hero-content">
        <div className="hero-eyebrow">Curatorial Portfolio</div>
        <h1 className="hero-title">
          <span className="name-cn">强天锴</span>
          <span className="name-en">Qiang Tiankai</span>
        </h1>
        <div className="hero-subtitle">
          CURATORIAL PORTFOLIO / 策展作品集
        </div>
        <div className="hero-period">
          收录 2019 – 2026 年展览策划与艺术项目实践
        </div>
      </div>

      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="hero-scroll-line"></div>
      </div>
    </section>
  );
}

Object.assign(window, { Hero });
