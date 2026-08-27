// Projects 精选项目 — 编辑式错落排版 + 点击弹窗
// 12 个项目，左右交替 + 全宽穿插

// 按文件名前缀匹配 J 盘海报：海报名去掉「海报」后缀后包含项目 title 即对应
const POSTER_FILES = [
  '另一个同一个海报.jpg',
  '向后翻腾三周半海报.png',
  '喃喃海报.png',
  '失所的物象 Dislocated Life海报.jpg',
  '展览Variatione.M.L-X海报.jpg',
  '工业牧歌 —— 现代性、乡愁与当代回响海报.jpg',
  '感官媒介与多媒体海报宽145高274.jpg',
  '梦江水海报.jpg',
  '海报 (1).jpg',
  '海报 (10).jpg',
  '海报 (11).jpg',
  '海报 (12).jpg',
  '海报 (13).jpg',
  '海报 (2).jpg',
  '海报 (3).jpg',
  '海报 (4).jpg',
  '海报 (5).jpg',
  '海报 (6).jpg',
  '海报 (7).jpg',
  '海报 (8).jpg',
  '海报 (9).jpg',
  '海报（总.jpg',
  '猫门美学大赏海报.png',
  '终版海报.jpg',
  '跛子日志与革命书海报.png',
  '镜中我 —— 心理学与当代艺术跨学科展览海报.jpg',
  '生生之谓易终版海报.jpg',
  '让我们彼此印证海报（总.jpg',
];

// 手动精确映射 — 项目 title → 海报文件名
const TITLE_POSTER_MAP = {
  '生生之谓易': '生生之谓易终版海报.jpg',
  '猫门美学大赏': '猫门美学大赏海报.png',
  '跛子日志与革命书': '跛子日志与革命书海报.png',
  '让我们彼此印证': '让我们彼此印证海报（总.jpg',
};

function findPoster(title) {
  if (!title) return null;
  // 优先：手动精确映射
  if (TITLE_POSTER_MAP[title]) return 'posters/' + TITLE_POSTER_MAP[title];
  const clean = (n) => n.replace(/海报/g, '').replace(/\.[^.]+$/, '').trim();
  const t = title.trim();
  // 兜底：海报名去「海报」后缀后包含项目 title
  for (const f of POSTER_FILES) {
    if (clean(f).includes(t)) return 'posters/' + f;
  }
  // 回退：项目 title 包含海报名去后缀
  for (const f of POSTER_FILES) {
    if (t.includes(clean(f)) && clean(f).length > 1) return 'posters/' + f;
  }
  return null;
}

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
      articleUrl: 'https://mp.weixin.qq.com/s/62f0MDlt7c6_fdpJm3p7SQ',
      gallery: null,
    },
    {
      plate: 'PLATE 04',
      num: '04',
      title: '乌多·杰斯克 Udo Dziersk 个展  Variation e.M. I -X  A B C D',
      titleEn: '',
      artist: '乌多·杰斯克 Udo Dziersk 个展',
      year: '2025.9',
      image: 'https://aka.doubaocdn.com/s/LkuDSjeOFm',
      desc: '德国杜塞尔多夫艺术学院教授个展，学术顾问：贺丹、何军。跨文化视野下的当代绘画实验。',
      tags: ['个展', '绘画', '国际交流'],
      layout: 'wide',
      articleUrl: 'https://mp.weixin.qq.com/s/dYXxLYxOFjnye4TvR41Aew',
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
      articleUrl: 'https://mp.weixin.qq.com/s/CeuimWadYqm3yI4PL2byoA',
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
      articleUrl: 'https://mp.weixin.qq.com/s/rbVRcwEUioznbM4DxBBvAw',
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
      articleUrl: 'https://mp.weixin.qq.com/s/0fYrdqV811GIBIScl8qFjg',
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
      articleUrl: 'https://mp.weixin.qq.com/s/9N5mEchqb95cU1EeiwmS6g',
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
    {
      plate: 'PLATE 13',
      num: '13',
      title: '乡村艺术实践项目展览',
      titleEn: 'Rural Art Practice · Guanzhong Mangba Art Festival',
      artist: '第三届关中忙罢艺术节',
      year: '2021.5 — 8',
      image: 'posters/xcys-cover.jpeg',
      desc: '第三届关中忙罢艺术节（2021）的集中呈现，涵盖《麦田艺术展》《山·水·乡·人：10所美院乡村艺术工作营》等在地实践。艺术家驻村调研、现场创作，与村民及地方深度合作，产出兼具创造性、生态性与社区营建意图的作品；本次展览分为室外大地艺术展、社会艺术类型作品与忙罢艺术节文献三部分。',
      tags: ['乡村艺术', '在地实践', '群展'],
      layout: 'wide',
      articleUrl: null, // PPT 原链接返回「账号已迁移」死链，待用户提供迁移后正确链接
      gallery: ['posters/xcys-2.jpeg', 'posters/xcys-3.jpeg'],
    },
    {
      plate: 'PLATE 14',
      num: '14',
      title: '一棵无人小岛',
      titleEn: 'An Uninhabited Island',
      artist: '王一珂 个展',
      year: '—',
      image: 'posters/ykwxd-cover.png',
      desc: '王一珂个展。以「一棵无人小岛」为意象，在孤独而满足的漫游中展开关于存在、自然与内心的绘画性叙述，露出水面的是岛屿，也是自我。',
      tags: ['个展', '绘画'],
      layout: 'left',
      articleUrl: 'https://mp.weixin.qq.com/s/NdXMvN0m-62Ryq_o1tWF-A',
      gallery: ['posters/ykwxd-2.jpeg', 'posters/ykwxd-3.jpeg'],
    },
    {
      plate: 'PLATE 15',
      num: '15',
      title: '鲁大卫个展',
      titleEn: 'Lu Dawei Solo Exhibition',
      artist: '鲁大卫 个展',
      year: '—',
      image: 'posters/ldw-cover.png',
      desc: '鲁大卫个展。艺术家自述作画纯为画给自己，受宋人范宽「外师造化，中得心源」影响，在镜像般的意象空间中寻求自我表达与和解。策展借张彦远《画论》「凝神遐想，妙悟自然，物我两忘」之意，邀观者沉浸其中。',
      tags: ['个展', '绘画', '意象'],
      layout: 'right',
      articleUrl: 'https://mp.weixin.qq.com/s/SBu8Awa_Cy1jBaNqVs1q8Q',
      gallery: ['posters/ldw-2.png', 'posters/ldw-3.png'],
    },
    {
      plate: 'PLATE 16',
      num: '16',
      title: '走神',
      titleEn: 'Zoushen (Spacing Out) — 2020 Emerging Artists Recommendation Exhibition II',
      artist: '策展人：吴彦臻 / 强天锴',
      year: '2020',
      image: 'posters/zs-cover.jpeg',
      desc: '2020当代青年艺术家推荐展第二季，由吴彦臻、强天锴联合策展。以「走神」为题，反转其负面意涵，邀请观者发现放空瞬间的灵感之美。展出六位青年艺术家的三十余件作品，以油画与综合材料绘画为主，呈现当代青年创作的多元思考。',
      tags: ['群展', '青年艺术家', '综合材料'],
      layout: 'left',
      articleUrl: 'https://mp.weixin.qq.com/s/CLUGzuse59qUJXgr2zEpAw',
      gallery: ['posters/zs-2.jpeg', 'posters/zs-3.jpeg', 'posters/zs-4.jpeg'],
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
          {projects.map((p, i) => {
            const poster = findPoster(p.title);
            return (
            <article
              className={`project-item ${p.layout} reveal reveal-delay-${(i % 3) + 1}`}
              key={p.num}
              onClick={() => onProjectClick && onProjectClick(p)}
              style={{ cursor: 'pointer' }}
            >
              {poster && (
                <div
                  className="project-bg"
                  aria-hidden="true"
                  style={{ backgroundImage: `url("${poster}")` }}
                />
              )}
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
            );
          })}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Projects });
