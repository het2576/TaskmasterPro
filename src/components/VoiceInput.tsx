import React, { useState } from 'react';
import { Mic, MicOff } from 'lucide-react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { colors } from '../lib/colors';

interface VoiceInputProps {
  onTranscript: (text: string) => void;
}

export const VoiceInput: React.FC<VoiceInputProps> = ({ onTranscript }) => {
  const [isListening, setIsListening] = useState(false);
  const { transcript, resetTranscript } = useSpeechRecognition();

  const handleToggleListening = () => {
    if (!isListening) {
      SpeechRecognition.startListening({ continuous: true });
      setIsListening(true);
    } else {
      SpeechRecognition.stopListening();
      setIsListening(false);
      if (transcript) {
        onTranscript(transcript);
        resetTranscript();
      }
    }
  };

  return (
    <button
      onClick={handleToggleListening}
      className={`p-3 rounded-lg border-2 border-black transition-all
                ${isListening ? 'bg-red-100 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]' 
                             : 'bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'}
                hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
                hover:translate-x-[-2px] hover:translate-y-[-2px]
                flex items-center gap-2`}
      style={{ color: colors.text.primary }}
    >
      {isListening ? (
        <>
          <MicOff className="w-5 h-5" />
          <span className="hidden sm:inline">Stop Recording</span>
        </>
      ) : (
        <>
          <Mic className="w-5 h-5" />
          <span className="hidden sm:inline">Voice Input</span>
        </>
      )}
    </button>
  );
};