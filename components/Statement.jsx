// Statement 策展理念模块

function Statement() {
  const bgUrl = 'https://aka.doubaocdn.com/s/HQdGBpPMY6';

  return (
    <section id="statement" className="statement">
      <div className="statement-bg">
        <img src={bgUrl} alt="策展理念背景" />
      </div>
      <div className="statement-overlay"></div>

      <div className="statement-inner">
        <div className="statement-text">
          <div className="section-label reveal">
            <span className="num">01</span>
            <span className="line"></span>
            <span className="en">策展理念 / Statement</span>
          </div>

          <h2 className="statement-headline reveal reveal-delay-1">
            把展览当作一次<span className="mark">公共事件</span>的策划，
            <br />而非作品的陈列。
          </h2>

          <div className="statement-body reveal reveal-delay-2">
            <p>
              我关心的不是把艺术放进白盒子，而是让艺术在真实的城市与生活里发生。
            </p>
            <p>
              策展人的工作，是为这些时刻提供结构、节奏与可被进入的入口。
              每一场展览都是一次对话的可能——在艺术家与观众之间、在作品与空间之间、在个体与公共之间。
            </p>
          </div>

          <div className="statement-signature reveal reveal-delay-3">
            <span className="sig-space">寨子空间 Zz Art Space</span>
            <span className="dot"></span>
            <span className="sig-name">策展人 强天锴</span>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Statement });
