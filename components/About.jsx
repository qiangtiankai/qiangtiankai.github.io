// About 关于模块

function About() {
  const portraitUrl = 'https://aka.doubaocdn.com/s/URo4TefgLq';

  const services = ['策展合作', '展览提案', '品牌联名', '场地活动'];

  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about-grid">
          {/* 左侧人物图 */}
          <div className="about-portrait reveal">
            <img src={portraitUrl} alt="强天锴肖像" />
            <div className="about-portrait-frame"></div>
          </div>

          {/* 右侧文字 */}
          <div className="about-text-block">
            <div className="section-label reveal">
              <span className="num">02</span>
              <span className="line"></span>
              <span className="en">关于 / About</span>
            </div>
            <h2 className="section-title reveal reveal-delay-1">
              强天锴
              <span className="accent" style={{ display: 'block', fontSize: '0.5em', marginTop: '8px', fontWeight: '300' }}>
                Qiang Tiankai
              </span>
            </h2>

            <div className="about-bio reveal reveal-delay-2">
              <p className="intro">1994 生于甘肃定西</p>
              <p>
                <strong>教育经历</strong><br />
                2018 西安美术学院公共艺术系 学士<br />
                2022 西安美术学院实验艺术系 硕士
              </p>
              <p>
                <strong>身份</strong><br />
                共治空间发起人之一<br />
                寨子空间策展人<br />
                从事艺术展览策划
              </p>
            </div>

            {/* 联系方式 */}
            <div className="about-contact-info reveal reveal-delay-3">
              <div className="contact-item">
                <div className="label">地址 / Address</div>
                <span className="value">西安市雁塔区含光南路70号</span>
              </div>
              <div className="contact-item">
                <div className="label">电话 / Phone</div>
                <a href="tel:+8618292002791" className="value">182 9200 2791</a>
              </div>
              <div className="contact-item">
                <div className="label">邮箱 / Email</div>
                <a href="mailto:987866823@qq.com" className="value">987866823@qq.com</a>
              </div>
              <div className="contact-item">
                <div className="label">公众号 / WeChat</div>
                <span className="value">寨子空间</span>
              </div>
            </div>

            {/* 业务范围 */}
            <div className="about-services reveal reveal-delay-4">
              <div className="services-label">业务范围 / Services</div>
              <ul className="services-list">
                {services.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { About });
