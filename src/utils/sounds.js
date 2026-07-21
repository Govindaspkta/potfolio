export const playSound = (type) => {
  try {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();

    oscillator.connect(gain);
    gain.connect(audioContext.destination);

    const sounds = {
      click: { freq: 800, duration: 0.1, volume: 0.3 },
      hover: { freq: 600, duration: 0.08, volume: 0.1 },
      success: { freq: 1000, duration: 0.2, volume: 0.2 }
    };

    const sound = sounds[type] || sounds.click;
    oscillator.frequency.value = sound.freq;
    gain.gain.setValueAtTime(sound.volume, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + sound.duration);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + sound.duration);
  } catch (e) {
    console.log('Sound not available');
  }
};
