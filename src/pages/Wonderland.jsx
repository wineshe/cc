import React, { useState } from 'react'
import '../Wonderland.css'

const Wonderland = () => {
  const [progress, setProgress] = useState(27) // 已完成画的恐龙数量

  return (
    <div className="wonderland min-h-screen">

      {/* ============================================================
          顶部导航 - "我的地盘"
          ============================================================ */}
      <header className="wl-header">
        <div className="wl-logo">
          <div className="wl-avatar flex items-center justify-center bg-[var(--wl-orange)] text-white text-xl font-bold">
            🎨
          </div>
          <span className="wl-logo-text">CC 的小屋</span>
        </div>

        <nav className="wl-nav">
          <a href="#" className="wl-nav-item active">🏠 我的小屋</a>
          <a href="#" className="wl-nav-item">🎨 作品展示</a>
          <a href="#" className="wl-nav-item">📖 成长日记</a>
          <a href="#" className="wl-nav-item">⭐ 我是谁</a>
        </nav>

        <button className="wl-cta-btn" onClick={() => alert('💌 给 CC 留言')}>
          💬 给我留言
        </button>
      </header>

      {/* ============================================================
          Hero Section - "我的梦想基地"
          ============================================================ */}
      <section className="wl-hero">
        {/* Background decorative circles */}
        <div className="wl-hero-bg-circle c1"></div>
        <div className="wl-hero-bg-circle c2"></div>
        <div className="wl-hero-bg-circle c3"></div>

        {/* Left: text */}
        <div className="wl-hero-text">
          <div className="wl-hero-tag">🌟 CC 的奇妙世界</div>
          <h1 className="wl-hero-title">
            欢迎来到<br />
            <span className="highlight">CC 的奇幻涂鸦王国</span>
          </h1>
          <p className="wl-hero-sub">
            我爱画画、爱恐龙、爱搭积木！今年 6 岁啦！
            这里是我的小小天地，记录了我所有的奇思妙想和成长故事。🦖🎨✨
          </p>
          <div className="wl-hero-buttons">
            <button className="wl-btn-primary">🎨 看看我的画</button>
            <button className="wl-btn-secondary">📖 听听我的故事</button>
          </div>
        </div>

        {/* Right: 2.5D isometric scene */}
        <div className="wl-hero-scene">
          {/* Floating card 1 - Latest work */}
          <div className="wl-hero-card card1">
            <div className="wl-hero-card-label">✨ 本周推荐</div>
            <div className="wl-hero-card-title">我画的霸王龙</div>
            <div className="wl-hero-card-thumb">🦖</div>
          </div>

          {/* Floating card 2 - Current mood */}
          <div className="wl-hero-card card2">
            <div className="wl-hero-card-label">💭 最新心情</div>
            <div className="wl-hero-card-title">今天好开心！</div>
            <div className="wl-hero-card-thumb">😊</div>
          </div>

          {/* 2.5D Isometric House */}
          <div className="wl-isometric-house">
            {/* Roof */}
            <div className="wl-iso-roof"></div>
            <div className="wl-iso-roof-front"></div>

            {/* Chimney with smoke */}
            <div className="wl-iso-chimney">
              <div className="wl-iso-smoke"></div>
              <div className="wl-iso-smoke"></div>
            </div>

            {/* Walls */}
            <div className="wl-iso-wall-front">
              {/* Windows */}
              <div className="wl-iso-window w1"></div>
              <div className="wl-iso-window w2"></div>
            </div>
            <div className="wl-iso-wall-side"></div>

            {/* Door */}
            <div className="wl-iso-door">
              <div className="wl-iso-door-knob"></div>
            </div>

            {/* Trees */}
            <div className="wl-iso-tree t1 trunk"></div>
            <div className="wl-iso-tree t2 trunk"></div>

            {/* Floating stars */}
            <div className="wl-iso-float star s1">⭐</div>
            <div className="wl-iso-float star s2">✨</div>
            <div className="wl-iso-float star s3">🌟</div>

            {/* Clouds */}
            <div className="wl-iso-float cloud1" style={{ top: '-30px', left: '-40px' }}>
              <svg width="60" height="30" viewBox="0 0 60 30" fill="white" opacity="0.7">
                <ellipse cx="20" cy="20" rx="15" ry="10" />
                <ellipse cx="35" cy="17" rx="18" ry="12" />
                <ellipse cx="48" cy="20" rx="12" ry="8" />
              </svg>
            </div>
          </div>

          {/* Interactive pins */}
          <div className="wl-pin pin1">
            <div className="wl-pin-tooltip">
              🏆 这里是我第一次画画得奖的地方！
            </div>
          </div>
          <div className="wl-pin pin2">
            <div className="wl-pin-tooltip">
              🌳 这里是我捡到落叶的秘密公园
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          Feature Section - "我的超能力"
          ============================================================ */}
      <section className="wl-features">
        <div className="wl-section-tag">✨ 我的超能力</div>
        <h2 className="wl-section-title">我喜欢做的事</h2>
        <p className="wl-section-desc">每个孩子都有独特的天赋，快来发现我的超能力吧！</p>

        <div className="wl-features-grid">
          {/* Card 1: Painting */}
          <div className="wl-feature-card">
            <div className="wl-feature-icon">🎨</div>
            <h3 className="wl-feature-name">绘画大师</h3>
            <p className="wl-feature-desc">我用色彩描绘世界<br />每一幅画都是我心中的小宇宙</p>
            <span className="wl-feature-arrow">👉 去看看 →</span>
          </div>

          {/* Card 2: Building */}
          <div className="wl-feature-card">
            <div className="wl-feature-icon">🏗️</div>
            <h3 className="wl-feature-name">乐高搭建</h3>
            <p className="wl-feature-desc">我是小小建筑师<br />用积木搭出梦想城堡</p>
            <span className="wl-feature-arrow">👉 去看看 →</span>
          </div>

          {/* Card 3: Nature */}
          <div className="wl-feature-card">
            <div className="wl-feature-icon">🌍</div>
            <h3 className="wl-feature-name">自然探索</h3>
            <p className="wl-feature-desc">我和大自然是好朋友<br />每一片树叶都是宝藏</p>
            <span className="wl-feature-arrow">👉 去看看 →</span>
          </div>
        </div>

        {/* Bottom: current goal */}
        <div className="wl-feature-bottom">
          <div className="wl-feature-goal">
            <div className="wl-feature-goal-label">🎯 正在挑战</div>
            <div className="wl-feature-goal-text">
              画完 100 种不同的恐龙！
            </div>
            <div className="wl-feature-goal-progress">
              {Array.from({ length: 10 }, (_, i) => (
                <div
                  key={i}
                  className={`wl-progress-dot ${i < Math.floor(progress / 10) ? 'filled' : ''} ${i === Math.floor(progress / 10) ? 'current' : ''}`}
                />
              ))}
            </div>
          </div>
          <div style={{ fontFamily: "'Nerko One', cursive", fontSize: '2.5rem', color: 'var(--wl-orange)' }}>
            {progress}/100
          </div>
        </div>
      </section>

      {/* ============================================================
          Timeline - "成长足迹"
          ============================================================ */}
      <section className="wl-timeline">
        <div className="wl-section-tag">🌱 成长足迹</div>
        <h2 className="wl-section-title">我的成长里程碑</h2>

        <div className="wl-timeline-track">
          <div className="wl-timeline-line"></div>
          <div className="wl-timeline-items">
            <div className="wl-timeline-item">
              <div className="wl-timeline-dot">🎨</div>
              <div className="wl-timeline-content">
                <div className="wl-timeline-age">3 岁</div>
                <div className="wl-timeline-event">第一次拿起画笔<br />画了人生第一幅画</div>
              </div>
            </div>

            <div className="wl-timeline-item">
              <div className="wl-timeline-dot">🏫</div>
              <div className="wl-timeline-content">
                <div className="wl-timeline-age">4 岁</div>
                <div className="wl-timeline-event">上幼儿园啦<br />交到了好多好朋友</div>
              </div>
            </div>

            <div className="wl-timeline-item">
              <div className="wl-timeline-dot">🚲</div>
              <div className="wl-timeline-content">
                <div className="wl-timeline-age">5 岁</div>
                <div className="wl-timeline-event">学会了骑自行车<br />摔倒了也不哭！</div>
              </div>
            </div>

            <div className="wl-timeline-item">
              <div className="wl-timeline-dot">🌟</div>
              <div className="wl-timeline-content">
                <div className="wl-timeline-age">6 岁</div>
                <div className="wl-timeline-event">拥有了自己的<br />专属小网站！</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          Footer - "爸妈寄语"
          ============================================================ */}
      <footer className="wl-footer">
        <div className="wl-footer-content">
          <div className="wl-footer-message">
            <div className="wl-footer-label">💕 爸爸妈妈的话</div>
            <div className="wl-footer-quote">
              "亲爱的 CC，你是我们生命中最珍贵的礼物。
              愿你永远保持好奇心，用画笔描绘属于你的精彩世界。
              无论走到哪里，家永远是你最温暖的港湾。"
            </div>
          </div>

          <div className="wl-footer-links">
            <span style={{ fontFamily: "'Nerko One', cursive", color: 'var(--wl-orange)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px' }}>
              联系我
            </span>
            <a href="#" className="wl-footer-link">📧 mama@example.com</a>
            <a href="#" className="wl-footer-link">📸 小红书 @cc_daily</a>
            <a href="#" className="wl-footer-link">📷 Instagram @cc_world</a>
          </div>
        </div>
      </footer>

      {/* Back link */}
      <div style={{ textAlign: 'center', padding: '1.5rem', background: 'var(--wl-blue)' }}>
        <a href="/" style={{ fontFamily: "'Nerko One', cursive", color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '0.9rem' }}>
          ← 返回生日快乐网站
        </a>
      </div>
    </div>
  )
}

export default Wonderland
