// Contact 底部联系页

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-inner">
        <div className="section-label reveal" style={{ justifyContent: 'center' }}>
          <span className="num">06</span>
          <span className="line"></span>
          <span className="en">联系 / Contact</span>
        </div>

        <h2 className="contact-greeting reveal reveal-delay-1">
          期待与您共同
          <span className="accent">策划</span>
          下一次相遇。
        </h2>

        <div className="contact-divider reveal reveal-delay-2"></div>

        <div className="contact-info-row reveal reveal-delay-3">
          <div className="c-item">
            <div className="c-label">邮箱</div>
            <a href="mailto:987866823@qq.com" className="c-value">987866823@qq.com</a>
          </div>
          <div className="c-item">
            <div className="c-label">电话</div>
            <a href="tel:+8618292002791" className="c-value">182 9200 2791</a>
          </div>
          <div className="c-item">
            <div className="c-label">公众号</div>
            <span className="c-value">寨子空间</span>
          </div>
        </div>
      </div>

      <div className="contact-footer">
        <div className="contact-footer-left">
          <span className="mark"></span>
          <span>强天锴 Qiang Tiankai</span>
        </div>
        <div>© 2026 强天锴 Qiang Tiankai. All rights reserved.</div>
        <div>Xi'an · China</div>
      </div>
    </section>
  );
}

Object.assign(window, { Contact });
