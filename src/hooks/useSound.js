// Web Audio API 实时合成音效 hook —— 无需外部音频文件
// 使用 OscillatorNode + GainNode 生成清脆短音

let audioCtx = null;

function getAudioCtx() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  // 某些浏览器在 user gesture 后需要 resume
  if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }
  return audioCtx;
}

function playTone(frequency, duration, type = "sine", volume = 0.08) {
  try {
    const ctx = getAudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(frequency, ctx.currentTime);
    // 快速衰减包络：开头最大 → 迅速归零
    gain.gain.setValueAtTime(volume, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + duration);
  } catch {
    // 静默失败 —— 音频不可用时不影响页面功能
  }
}

// 短促"嘀"声：800Hz 正弦波，持续 50ms
export function playClick() {
  playTone(800, 0.05, "sine", 0.06);
}

// 轻快"叮"声：频率从 600Hz 平滑上升到 1200Hz，持续 80ms
export function playDrip() {
  try {
    const ctx = getAudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(600, ctx.currentTime);
    osc.frequency.linearRampToValueAtTime(1200, ctx.currentTime + 0.08);

    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.08);
  } catch {
    // 静默失败
  }
}

// ===== 全局鼠标事件绑定 =====
// button / a / [role="button"] 播放 "叮"，其余播放 "嘀"

export function setupGlobalSounds() {
  const handler = (e) => {
    const target = e.target;
    if (
      target.tagName === "BUTTON" ||
      target.tagName === "A" ||
      target.closest("button") ||
      target.closest("a") ||
      target.getAttribute("role") === "button"
    ) {
      playDrip();
    } else {
      playClick();
    }
  };

  document.addEventListener("mousedown", handler);
  // 返回 cleanup 函数
  return () => document.removeEventListener("mousedown", handler);
}
