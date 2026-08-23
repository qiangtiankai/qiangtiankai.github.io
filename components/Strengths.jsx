// Strengths 个人优势模块

function Strengths() {
  const strengths = [
    {
      title: '策展策划',
      desc: '从主题构思、艺术家遴选到空间叙事与展陈设计，提供完整的展览策划与落地执行。',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
          <rect x="3" y="4" width="18" height="16" rx="1" />
          <path d="M3 9h18" />
          <path d="M9 4v16" />
          <path d="M15 13l2 2 4-4" />
        </svg>
      ),
    },
    {
      title: '数字媒体艺术',
      desc: '深耕数字媒体领域，熟悉影像、互动装置、生成艺术等媒介的技术逻辑与展览呈现。',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 3v18" />
          <path d="M3 12h18" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
    },
    {
      title: '学术研究',
      desc: '兼具学院背景与艺术现场经验，持续撰写策展文论与艺术批评，推动理论与实践互证。',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
          <path d="M4 5h12a3 3 0 0 1 3 3v12H7a3 3 0 0 1-3-3V5z" />
          <path d="M4 5a2 2 0 0 1 2-2h10" />
          <path d="M8 10h6M8 14h6" />
        </svg>
      ),
    },
    {
      title: '校企合作',
      desc: '衔接学院资源与产业需求，推动艺术项目、学术研究与公共文化机构的深度合作。',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
          <path d="M3 21V9l9-6 9 6v12" />
          <path d="M9 21v-7h6v7" />
          <path d="M9 9h.01M15 9h.01" />
        </svg>
      ),
    },
    {
      title: '艺术批评',
      desc: '以独立视角撰写展览评论与艺术家个案研究，文字见于专业艺术媒体与学术出版物。',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      ),
    },
    {
      title: '公共教育',
      desc: '策划讲座、工作坊与导览等公共项目，让当代艺术从白立方走向更广泛的公众视野。',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
  ];

  return (
    <section id="strengths" className="section strengths">
      <div className="container">
        <div className="strengths-header">
          <div className="section-label reveal">
            <span>03 — 专长 / Strengths</span>
          </div>
          <h2 className="section-title reveal reveal-delay-1">
            在策展、教学与研究之间<span className="accent">穿行</span>
          </h2>
          <p className="section-desc reveal reveal-delay-2" style={{ margin: '0 auto' }}>
            以策展实践为核心，延展至数字媒体艺术、学术研究与公共教育等多个领域，形成相互滋养的工作方法。
          </p>
        </div>

        <div className="strengths-grid">
          {strengths.map((s, i) => (
            <div
              className={`strength-card reveal reveal-delay-${(i % 3) + 1}`}
              key={i}
            >
              <div className="strength-number">0{i + 1}</div>
              <div className="strength-icon">{s.icon}</div>
              <h3 className="strength-title">{s.title}</h3>
              <p className="strength-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Strengths });
