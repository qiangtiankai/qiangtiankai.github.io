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
    <div>
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
