import React, { useRef, useState, useEffect } from 'react'

const BackgroundMusic = ({ onReady }) => {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  // 挂载后准备好音频，通过 onReady 暴露播放函数给父组件
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.volume = 0.5

    if (onReady) {
      onReady(() => {
        audio.play().then(() => setPlaying(true)).catch(() => {})
      })
    }
  }, [onReady])

  const toggle = () => {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.pause()
      setPlaying(false)
    } else {
      audio.play().then(() => setPlaying(true)).catch(() => {})
    }
  }

  return (
    <>
      <audio ref={audioRef} loop preload="auto">
        <source src="/Happy%20Birthday.mp3" type="audio/mpeg" />
      </audio>

      {/* 页面显示内容后才显示音乐按钮 */}
      {playing !== undefined && (
        <button
          onClick={toggle}
          title={playing ? '暂停音乐' : '播放音乐'}
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            zIndex: 9999,
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            border: '3px solid #FF7882',
            background: playing ? 'white' : '#FF7882',
            boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.4rem',
            transition: 'all 0.3s ease',
            color: playing ? '#FF7882' : 'white',
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.15)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        >
          {playing ? '🔊' : '🔇'}
        </button>
      )}
    </>
  )
}

export default BackgroundMusic
