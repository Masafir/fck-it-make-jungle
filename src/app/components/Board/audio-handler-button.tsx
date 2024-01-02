import { FunctionComponent, useEffect, useState } from "react";

interface Props {
  src: string;
  name: string;
};

const AudioHandlerButton: FunctionComponent<Props> = ({ src,name }) => {

  const [play,setPlay] = useState(false);
  const [audio,setAudio] = useState<HTMLAudioElement>();
  const active = play ? "bg-blue-200 hover:bg-blue-500" : "bg-blue-500 hover:bg-blue-700";
  
  const handlePlay = () => {
    console.log("handle Play : ",audio);
    if(audio) {
      if(!play) {
        audio.play();
        setPlay(true);
        return;
      }
  
      audio.pause();
      setPlay(false);
    }
  }

  useEffect(() => {
    setAudio(new Audio(src))
  // only run once on the first render on the client
  }, [])

  return (
    <button className={`${active} text-white font-bold py-2 px-4 rounded m-5`} onClick={() => handlePlay()}>
      { name }
    </button>
  );
};

export default AudioHandlerButton;