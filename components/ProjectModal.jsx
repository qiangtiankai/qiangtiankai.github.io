// ProjectModal 项目详情弹窗组件
// 支持：封面大图、项目信息、详细描述、现场图画廊、公众号链接按钮
// 交互：点击遮罩关闭、ESC关闭、禁止背景滚动、淡入缩放动效

function ProjectModal({ project, onClose }) {
  const [lightboxIndex, setLightboxIndex] = React.useState(null);

  // ESC 关闭 + 禁止滚动
  React.useEffect(() => {
    if (!project) return;

    document.body.classList.add('modal-open');

    function handleKey(e) {
      if (e.key === 'Escape') {
        if (lightboxIndex !== null) {
          setLightboxIndex(null);
        } else {
          onClose();
        }
      }
    }

    window.addEventListener('keydown', handleKey);
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.classList.remove('modal-open');
    };
  }, [project, onClose, lightboxIndex]);

  if (!project) return null;

  // 画廊图片：封面图 + 额外现场图
  const galleryImages = [project.image, ...(project.gallery || [])];

  function handleOverlayClick(e) {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  function handleLightboxClose() {
    setLightboxIndex(null);
  }

  return (
    <div className="modal-overlay is-open" onClick={handleOverlayClick}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {/* 关闭按钮 */}
        <button className="modal-close" onClick={onClose} aria-label="关闭">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {/* 封面大图 */}
        <div className="modal-hero">
          <img src={project.image} alt={project.title} />
          <div className="modal-hero-frame"></div>
          <div className="modal-plate">{project.plate}</div>
        </div>

        {/* 内容区 */}
        <div className="modal-body">
          <div className="modal-meta">
            <span className="year">{project.year}</span>
            <span className="sep"></span>
            <span className="artist">{project.artist}</span>
          </div>

          <h2 className="modal-title">{project.title}</h2>
          {project.titleEn && <div className="modal-title-en">{project.titleEn}</div>}

          <p className="modal-desc">{project.desc}</p>

          {/* 现场图画廊 */}
          {project.gallery && project.gallery.length > 0 && (
            <div className="modal-gallery">
              <div className="modal-gallery-label">展览现场 / Installation View</div>
              <div className={`modal-gallery-grid ${project.gallery.length === 1 ? 'single' : ''}`}>
                {project.gallery.map((img, i) => (
                  <div
                    className="modal-gallery-item"
                    key={i}
                    onClick={() => setLightboxIndex(i + 1)}
                  >
                    <img src={img} alt={`现场图 ${i + 1}`} loading="lazy" />
                    <div className="g-frame"></div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 底部 */}
          <div className="modal-footer">
            <div className="modal-footer-tags">
              {project.tags && project.tags.map((t, i) => (
                <span key={i}>{t}</span>
              ))}
            </div>
            {project.articleUrl && (
              <a
                href={project.articleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-btn-article"
              >
                查看公众号原文
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M7 17L17 7M17 7H8M17 7v9" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Lightbox 大图预览 */}
      {lightboxIndex !== null && (
        <div className="lightbox-overlay is-open" onClick={handleLightboxClose}>
          <button className="lightbox-close" onClick={handleLightboxClose} aria-label="关闭预览">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
          <img
            src={galleryImages[lightboxIndex]}
            alt="预览"
            className="lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

Object.assign(window, { ProjectModal });
