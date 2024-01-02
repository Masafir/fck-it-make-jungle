interface CustomAudioBufferNode extends AudioBufferSourceNode {
  buffer: AudioBuffer;
}

// Fonction pour changer le BPM d'un fichier audio
function changeBPM(
  audioBuffer: AudioBuffer,
  originalBPM: number,
  newBPM: number
): CustomAudioBufferNode {
  // Calculez le facteur de changement de BPM
  const tempoFactor: number = newBPM / originalBPM;

  // Créez un contexte audio
  const audioContext: AudioContext = new (window.AudioContext)();

  // Créez un nouveau buffer audio avec la nouvelle durée
  const newBuffer: AudioBuffer = audioContext.createBuffer(
    audioBuffer.numberOfChannels,
    audioBuffer.length * tempoFactor,
    audioBuffer.sampleRate
  );

  // Copiez les données du buffer audio original dans le nouveau buffer avec le nouveau BPM
  for (let channel = 0; channel < audioBuffer.numberOfChannels; channel++) {
    const channelData: Float32Array = audioBuffer.getChannelData(channel);
    const newChannelData: Float32Array = newBuffer.getChannelData(channel);

    for (let i = 0; i < newBuffer.length; i++) {
      const originalIndex: number = Math.floor(i / tempoFactor);
      newChannelData[i] = channelData[originalIndex] || 0;
    }
  }

  // Créez un nœud source pour le nouveau buffer audio
  const source = audioContext.createBufferSource();
  source.buffer = newBuffer;

  // Connectez le nœud source au contexte audio et commencez la lecture
  source.connect(audioContext.destination);
  source.start();

  // Retournez le nœud source au cas où vous voudriez le manipuler davantage
  return source;
}