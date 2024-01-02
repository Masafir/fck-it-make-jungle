'use client'
import { FunctionComponent } from "react";
import AudioHandlerButton from "./audio-handler-button";

const Board: FunctionComponent = () => {

  return(
    <div className="flex justify-around w-screen">
      <AudioHandlerButton src="./samples/lofi-guitar.wav" name="lofi-guitar" />
      <AudioHandlerButton src="./samples/lofi-synth.wav" name="lofi-synth" />
      <AudioHandlerButton src="./samples/lofi-background.wav" name="lofi-background" />
      <AudioHandlerButton src="./samples/drum-voice.wav" name="drum-voice" />
      <AudioHandlerButton src="./samples/drum-jungle.wav" name="drum-jungle" />
    </div>
  );
};

export default Board;