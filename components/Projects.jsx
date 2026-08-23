// Projects 精选项目 — 编辑式错落排版 + 点击弹窗
// 12 个项目，左右交替 + 全宽穿插

function Projects({ onProjectClick }) {
  const projects = [
    {
      plate: 'PLATE 01',
      num: '01',
      title: '生生之谓易',
      titleEn: 'The Constant Change of Life',
      artist: '张材嘉 个展',
      year: '2024.12 — 2025.1',
      image: 'https://aka.doubaocdn.com/s/gWxpkjNgX5',
      desc: '以《周易》哲学命题为引，以绘画与装置探讨万物在阴阳之道推动下不断生成与更新的意象。以「易」的变易之理组织展览动线，将绘画、装置与现场行为并置，呈现青年艺术家对时间与生成的持续追问。',
      tags: ['个展', '绘画', '装置'],
      layout: 'left',
      articleUrl: 'https://mp.weixin.qq.com/s/FzAIOV8LnmtL4dZZ-DBfvg',
      gallery: null,
    },
    {
      plate: 'PLATE 02',
      num: '02',
      title: '塑形：手指证件照',
      titleEn: 'Shaping: Finger ID Photos',
      artist: '乔飞尔 社会性艺术项目',
      year: '2024.8 — 9',
      image: 'https://aka.doubaocdn.com/s/xmuyGNZVho',
      desc: '拍摄117名学生因长期书写而变形的手指肖像，将「教育」议题以另辟蹊径的方式呈现，获澎湃新闻等媒体关注，获第十二届中国摄影年度排行榜上榜。',
      tags: ['社会艺术', '摄影', '公共议题'],
      layout: 'right',
      articleUrl: 'https://mp.weixin.qq.com/s/1vh4MT99VwAKJcAX4g1RFQ',
      gallery: null,
    },
    {
      plate: 'PLATE 03',
      num: '03',
      title: '向后翻腾三周半',
      titleEn: 'Backward 3.5 Somersaults',
      artist: '朱珈儀 / 田钊麟 艺术项目',
      year: '2025.8 — 9',
      image: 'https://aka.doubaocdn.com/s/jtNqCh8idx',
      desc: '装置、行为与雕塑艺术项目，灵感源自材料属性与公共议题，在身体与材料的张力中完成一次自由的翻腾。',
      tags: ['装置', '行为', '雕塑'],
      layout: 'left',
      articleUrl: null,
      gallery: null,
    },
    {
      plate: 'PLATE 04',
      num: '04',
      title: 'Variation e.M.',
      titleEn: '',
      artist: '乌多·杰斯克 Udo Dziersk 个展',
      year: '2025.9',
      image: 'https://aka.doubaocdn.com/s/LkuDSjeOFm',
      desc: '德国杜塞尔多夫艺术学院教授个展，学术顾问：贺丹、何军。跨文化视野下的当代绘画实验。',
      tags: ['个展', '绘画', '国际交流'],
      layout: 'wide',
      articleUrl: null,
      gallery: null,
    },
    {
      plate: 'PLATE 05',
      num: '05',
      title: '让我们彼此印证',
      titleEn: 'Let Us Bear Witness to Each Other',
      artist: '社区问题十三种研究 · 系列展',
      year: '2024 — 2025',
      image: 'https://aka.doubaocdn.com/s/AfH5NefCRF',
      desc: '围绕城市与社区议题展开十三种研究，在对话与分享中建立人与人之间的信任与联结。',
      tags: ['社区艺术', '系列展', '公共参与'],
      layout: 'right',
      articleUrl: null,
      gallery: null,
    },
    {
      plate: 'PL. 04',
      num: '06',
      title: '百气生相',
      titleEn: 'The Vitality of Qi',
      artist: '王雪飞 个展',
      year: '2024.10',
      image: 'https://aka.doubaocdn.com/s/C3g0BHTjqp',
      desc: '以「气」为母题的跨媒介个展，红棕主视觉与现场绘画并置，在独立空间中探索本土绘画语言的当代表达。',
      tags: ['个展', '绘画', '跨媒介'],
      layout: 'left',
      articleUrl: null,
      gallery: null,
    },
    {
      plate: 'PLATE 06',
      num: '07',
      title: '跛子日志与革命书',
      titleEn: "A Cripple's Journal & The Book of Revolution",
      artist: '李鹏鹏 个展',
      year: '2026.1 — 2',
      image: 'https://aka.doubaocdn.com/s/df3GiCQH0W',
      desc: '以「结婚一年发生的几件小事」为切入点，探讨身体经验与革命记忆的交织。',
      tags: ['个展', '绘画', '文本'],
      layout: 'right',
      articleUrl: 'https://mp.weixin.qq.com/s/twrkdMEs8UGSbzqKHB956w',
      gallery: null,
    },
    {
      plate: 'PLATE 07',
      num: '08',
      title: '猫门美学大赏',
      titleEn: 'Feline Aesthetics Awards',
      artist: '九位青年艺术家群展',
      year: '2026.4',
      image: 'https://aka.doubaocdn.com/s/a64X8A5HDK',
      desc: '以猫咪为主题的趣味展览，以轻松的姿态探索日常生活中的审美趣味。',
      tags: ['群展', '青年艺术家', '日常美学'],
      layout: 'left',
      articleUrl: null,
      gallery: null,
    },
    {
      plate: 'PLATE 08',
      num: '09',
      title: '世界儿童日 · 自然的回响',
      titleEn: "World Children's Day · Echoes of Nature",
      artist: '联合国儿童基金会驻华办事处 发起',
      year: '2025.11',
      image: 'https://aka.doubaocdn.com/s/bMc6BD8kMk',
      desc: '以艺术活动回应联合国世界儿童日，为城市儿童提供创造性表达与公共参与的空间。',
      tags: ['公共艺术', '教育', '国际合作'],
      layout: 'wide',
      articleUrl: null,
      gallery: [
        'https://aka.doubaocdn.com/s/OsJsLRZzK8',
        'https://aka.doubaocdn.com/s/PvSwjzeCE7',
      ],
    },
    {
      plate: 'PLATE 09',
      num: '10',
      title: '后浪—跨媒介艺术展',
      titleEn: 'Back Wave — Intermedia Art Exhibition',
      artist: '展览助理 · 西安美术学院实验艺术系',
      year: '2019.12',
      image: 'https://aka.doubaocdn.com/s/9Fd5NHsrNk',
      desc: '「后浪—跨媒介艺术展」于西安高新区创业咖啡街区嘉惠坊开展，本次展览是西安美术学院实验艺术系教学成果的一次集中展示。涵盖影像、摄影、声音装置、灯光装置、绘画、互动影像、实验纪录片等多种艺术类型，直接将实验艺术带入大众视野，也是一次走出学院的尝试。',
      tags: ['群展', '跨媒介', '学院实践'],
      layout: 'right',
      articleUrl: 'https://mp.weixin.qq.com/s/pzrk1ERFPJXdv8EIO6L4xQ',
      gallery: [
        'https://aka.doubaocdn.com/s/awaYc2UZHT',
        'https://aka.doubaocdn.com/s/4QlAS0fu6o',
      ],
    },
    {
      plate: 'PLATE 11',
      num: '12',
      title: '醒醒醒醒',
      titleEn: 'Wake Up Wake Up',
      artist: '山有木美术馆 西安',
      year: '2019',
      image: 'https://aka.doubaocdn.com/s/7Hze7tzoGV',
      desc: '作品有对虚拟世界的质疑，有对大地艺术的致敬，更多的是把自己的情绪定格，放大自己的冲击性与挑战性。将具象的形象与抽象的笔触结合，每一幅作品都需要观者深度的沉浸，体现了一种年轻迷茫的灵魂，能引起普通观众的共鸣和互动。',
      tags: ['个展', '当代绘画', '青年艺术'],
      layout: 'right',
      articleUrl: 'https://mp.weixin.qq.com/s/qG9RRKELCHQgZK5zbnAeTA',
      gallery: [
        'https://aka.doubaocdn.com/s/STLxPPKptI',
      ],
    },
  ];

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="projects-header">
          <div className="section-label reveal">
            <span className="num">03</span>
            <span className="line"></span>
            <span className="en">精选项目 / Selected Projects</span>
          </div>
          <h2 className="section-title reveal reveal-delay-1">
            策展实践
            <span className="accent" style={{ display: 'block' }}>Selected Works</span>
          </h2>
          <p className="projects-header-desc reveal reveal-delay-2">
            2019 年至今策划及参与的展览项目，涵盖个展、群展、社区艺术与公共教育等多元形态。
            点击项目卡片查看完整详情。
          </p>
        </div>

        <div className="projects-feed">
          {projects.map((p, i) => (
            <article
              className={`project-item ${p.layout} reveal reveal-delay-${(i % 3) + 1}`}
              key={p.num}
              onClick={() => onProjectClick && onProjectClick(p)}
              style={{ cursor: 'pointer' }}
            >
              <div className="project-image-wrap">
                <img src={p.image} alt={p.title} loading="lazy" />
                <div className="frame"></div>
                <div className="project-image-number">No. {p.num}</div>
                <div className="project-card-view">
                  查看详情
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              <div className="project-info">
                <div className="project-meta">
                  <span className="year">{p.year}</span>
                  <span className="sep"></span>
                  <span className="artist">{p.artist}</span>
                </div>
                <h3 className="project-title">
                  {p.title}
                  {p.titleEn && <span className="en">{p.titleEn}</span>}
                </h3>
                <p className="project-desc">{p.desc}</p>
                <div className="project-tags">
                  {p.tags.map((t, idx) => (
                    <span key={idx}>{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Projects });
