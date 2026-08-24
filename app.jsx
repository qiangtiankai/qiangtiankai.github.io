// App 主入口 — 画中画画布布局

function App() {
  const [activeProject, setActiveProject] = React.useState(null);

  useReveal();

  // 宣告可升级为全栈应用
  React.useEffect(() => {
    function announceUpgrade() {
      window.parent.postMessage(
        { type: 'miaoda:upgrade:available', kind: 'interactive-prototype' },
        '*'
      );
    }
    announceUpgrade();
    if (document.readyState !== 'complete') {
      window.addEventListener('load', announceUpgrade, { once: true });
    }
  }, []);

  function handleProjectClick(project) {
    setActiveProject(project);
  }

  function handleCloseModal() {
    setActiveProject(null);
  }

  return (
    <div className="app-root">
      {/* 背景：暗调展览海报平铺（全站最底层半透明背景，统一位置/缩放/对齐） */}
      <div className="ambient-collage" aria-hidden="true">
        <div className="ambient-tile" style={{ backgroundImage: 'url("posters/另一个同一个海报.jpg")' }} />
        <div className="ambient-tile" style={{ backgroundImage: 'url("posters/向后翻腾三周半海报.png")' }} />
        <div className="ambient-tile" style={{ backgroundImage: 'url("posters/喃喃海报.png")' }} />
        <div className="ambient-tile" style={{ backgroundImage: 'url("posters/失所的物象 Dislocated Life海报.jpg")' }} />
        <div className="ambient-tile" style={{ backgroundImage: 'url("posters/展览Variatione.M.L-X海报.jpg")' }} />
        <div className="ambient-tile" style={{ backgroundImage: 'url("posters/工业牧歌 —— 现代性、乡愁与当代回响海报.jpg")' }} />
        <div className="ambient-tile" style={{ backgroundImage: 'url("posters/感官媒介与多媒体海报宽145高274.jpg")' }} />
        <div className="ambient-tile" style={{ backgroundImage: 'url("posters/梦江水海报.jpg")' }} />
        <div className="ambient-tile" style={{ backgroundImage: 'url("posters/海报 (1).jpg")' }} />
        <div className="ambient-tile" style={{ backgroundImage: 'url("posters/海报 (10).jpg")' }} />
        <div className="ambient-tile" style={{ backgroundImage: 'url("posters/海报 (11).jpg")' }} />
        <div className="ambient-tile" style={{ backgroundImage: 'url("posters/海报 (12).jpg")' }} />
        <div className="ambient-tile" style={{ backgroundImage: 'url("posters/海报 (13).jpg")' }} />
        <div className="ambient-tile" style={{ backgroundImage: 'url("posters/海报 (2).jpg")' }} />
        <div className="ambient-tile" style={{ backgroundImage: 'url("posters/海报 (3).jpg")' }} />
        <div className="ambient-tile" style={{ backgroundImage: 'url("posters/海报 (4).jpg")' }} />
        <div className="ambient-tile" style={{ backgroundImage: 'url("posters/海报 (5).jpg")' }} />
        <div className="ambient-tile" style={{ backgroundImage: 'url("posters/海报 (6).jpg")' }} />
        <div className="ambient-tile" style={{ backgroundImage: 'url("posters/海报 (7).jpg")' }} />
        <div className="ambient-tile" style={{ backgroundImage: 'url("posters/海报 (8).jpg")' }} />
        <div className="ambient-tile" style={{ backgroundImage: 'url("posters/海报 (9).jpg")' }} />
        <div className="ambient-tile" style={{ backgroundImage: 'url("posters/海报（总.jpg")' }} />
        <div className="ambient-tile" style={{ backgroundImage: 'url("posters/猫门美学大赏海报.png")' }} />
        <div className="ambient-tile" style={{ backgroundImage: 'url("posters/终版海报.jpg")' }} />
        <div className="ambient-tile" style={{ backgroundImage: 'url("posters/跛子日志与革命书海报.png")' }} />
        <div className="ambient-tile" style={{ backgroundImage: 'url("posters/镜中我 —— 心理学与当代艺术跨学科展览海报.jpg")' }} />
        <div className="ambient-scrim" />
        <div className="ambient-grain" />
      </div>

      <div className="page-canvas">
        <Navbar />
        <main>
          <Hero />
          <Statement />
          <About />
          <Projects onProjectClick={handleProjectClick} />
          <Community />
          <Contact />
        </main>
      </div>

      <ProjectModal project={activeProject} onClose={handleCloseModal} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
