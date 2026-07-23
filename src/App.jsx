import React, { useState, useRef } from 'react'
import './App.css'
import './LoveLetter.css'
import './BookCanvas.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import Layout from './layout/Layout'
import Home from './pages/Home'
import LoveLetter from './pages/LoveLetter'
import Test from './pages/Test'
import OpeningAnimation from './components/OpeningAnimation'
import BackgroundMusic from './components/BackgroundMusic'

const App = () => {

  const MyRoute = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path='love-Letter' element={<LoveLetter />}></Route>
        <Route path='test' element={<Test />}></Route>
      </Route>
    </Route>
  ))

  const [started, setStarted] = useState(false)
  const [loading, setLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)
  const [animateOut, setAnimateOut] = useState(false)
  const playMusicRef = useRef(null)

  const handleEnter = () => {
    // 播放音乐
    if (playMusicRef.current) {
      playMusicRef.current()
    }

    // 启动开场动画时间线
    setTimeout(() => setAnimateOut(true), 8400)
    setTimeout(() => setShowContent(true), 8600)
    setTimeout(() => setLoading(false), 9000)
    setStarted(true)
  }

  return (
    <>
      {/* 音乐组件始终挂载，通过 ref 控制播放 */}
      <BackgroundMusic onReady={(fn) => { playMusicRef.current = fn }} />

      {/* 入口遮罩 — 未点击时显示 */}
      {!started && (
        <div
          onClick={handleEnter}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            background: 'linear-gradient(135deg, #feecea 0%, #ffb3ba 50%, #ff7882 100%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            fontFamily: '"Coiny","Nerko One",cursive',
          }}
        >
          <div style={{ fontSize: '4rem', marginBottom: '20px', animation: 'wlBounce 2s ease-in-out infinite' }}>
            🎂
          </div>

          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            color: '#a31414',
            textAlign: 'center',
            lineHeight: 1.2,
            margin: 0,
            textShadow: '3px 3px 0 rgba(0,0,0,0.08)',
          }}>
            6岁生日快乐
          </h1>
          <h2 style={{
            fontSize: 'clamp(1.4rem, 3vw, 2.5rem)',
            color: '#fff',
            textAlign: 'center',
            margin: '10px 0 30px',
            fontFamily: '"Dancing Script",cursive',
          }}>
            Cynthia 🎀
          </h2>

          <div style={{
            background: 'white',
            borderRadius: '999px',
            padding: '16px 48px',
            boxShadow: '0 8px 30px rgba(163,20,20,0.25)',
            fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
            color: '#a31414',
            animation: 'wlPulse 2s ease-in-out infinite',
            border: '3px solid #a31414',
            fontWeight: 'bold',
          }}>
            ✨ 点击开始 ✨
          </div>

          <p style={{
            color: 'rgba(163,20,20,0.6)',
            marginTop: '30px',
            fontSize: '0.9rem',
          }}>
            爱你的爸爸，Yarden
          </p>
        </div>
      )}

      {/* 正式内容 */}
      {started && (
        <>
          {loading && <OpeningAnimation animateOut={animateOut} />}
          {showContent && <RouterProvider router={MyRoute} />}
        </>
      )}

      <style>{`
        @keyframes wlBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes wlPulse {
          0%, 100% { transform: scale(1); box-shadow: 0 8px 30px rgba(163,20,20,0.2); }
          50% { transform: scale(1.05); box-shadow: 0 15px 45px rgba(163,20,20,0.35); }
        }
      `}</style>
    </>
  )
}

export default App
