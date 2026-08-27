// Community 社区艺术与公教模块

function Community() {
  const bgUrl = 'https://aka.doubaocdn.com/s/TFo2C3fSEM';

  const activities = [
    {
      title: '被压迫者剧场 Lumi',
      desc: '社区剧场实践',
      link: 'https://mp.weixin.qq.com/s/wPrIahu6AsTwVdW1xqWK_w',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2l2.5 5.5 6 .8-4.5 4.3 1 6-5-2.8-5 2.8 1-6L3.5 8.3l6-.8L12 2z" />
        </svg>
      ),
    },
    {
      title: '小王子·一人一故事剧场',
      desc: '观众讲述 · 即兴演绎',
      link: 'https://mp.weixin.qq.com/s/-N1ZiEyy9JrVbrbMlyu5UQ',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      ),
    },
    {
      title: '绘画课',
      desc: '面向社区的持续绘画体验',
      link: 'https://mp.weixin.qq.com/s/s2GaMTpgzp935IWYhkNGLA',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19l7-7 3 3-7 7-3-3z" />
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
          <path d="M2 2l7.586 7.586" />
          <circle cx="11" cy="11" r="2" />
        </svg>
      ),
    },
    {
      title: '让我们彼此印证',
      desc: '学术研讨会',
      link: 'https://mp.weixin.qq.com/s/CeuimWadYqm3yI4PL2byoA',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          <path d="M8 10h.01M12 10h.01M16 10h.01" />
        </svg>
      ),
    },
    {
      title: '共学课堂',
      desc: '共治空间共学实践',
      link: 'https://mp.weixin.qq.com/s/06BTymvY8a6Pae1W9Sd_BA',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
      ),
    },
    {
      title: '吉他之夜',
      desc: '社区音乐现场',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18V5l12-2v13" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="16" r="3" />
        </svg>
      ),
    },
  ];

  return (
    <section id="community" className="section community">
      <div className="community-bg">
        <img src={bgUrl} alt="社区艺术背景" />
      </div>
      <div className="community-overlay"></div>

      <div className="container community-inner">
        <div className="community-header">
          <div className="section-label reveal">
            <span className="num">04</span>
            <span className="line"></span>
            <span className="en">社区艺术与公教 / Community Art & Education</span>
          </div>
          <h2 className="section-title reveal reveal-delay-1">
            社区艺术
            <span className="accent" style={{ display: 'block' }}>Community</span>
          </h2>
          <p className="community-subtitle reveal reveal-delay-2">
            艺术，发生在关系里。
          </p>
          <p className="reveal reveal-delay-2">
            社区艺术是强天锴在展览实践中的重要研究方向。它把展览从白盒子挪到城市的公共生活现场——
            一次社区互动展、一场亲子共创、一组被倾听的声音。对一个地区而言，
            这意味着可进入、可参与、可传播的公共艺术内容，为日常场域注入人文温度与在地记忆。
          </p>
        </div>

        <div className="community-activities reveal reveal-delay-3">
          {activities.map((a, i) => {
            const inner = (
              <>
                <span className="activity-num">0{i + 1}</span>
                <div className="activity-icon">{a.icon}</div>
                <h4 className="activity-title">{a.title}</h4>
                <p className="activity-desc">{a.desc}</p>
                {a.link && <span className="activity-link">查看文章 ↗</span>}
              </>
            );
            return a.link ? (
              <a
                className="activity-item activity-linked"
                key={i}
                href={a.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {inner}
              </a>
            ) : (
              <div className="activity-item" key={i}>
                {inner}
              </div>
            );
          })}
        </div>

        <div className="community-cta reveal reveal-delay-4">
          <a
            href="https://mp.weixin.qq.com/s/-N1ZiEyy9JrVbrbMlyu5UQ"
            target="_blank"
            rel="noopener noreferrer"
            className="community-btn"
          >
            查看更多社区艺术项目
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
          <p className="community-cta-note">关注寨子空间公众号，获取最新活动动态</p>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Community });
