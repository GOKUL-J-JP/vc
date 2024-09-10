import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [command, setCommand] = useState('');
  const [isListening, setIsListening] = useState(false);

  // Handle voice commands
  const handleVoiceCommand = () => {
    setIsListening(true);
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onresult = (event) => {
      const spokenCommand = event.results[0][0].transcript.toLowerCase();
      setCommand(spokenCommand);

      // Handle specific commands for system applications
      if (spokenCommand.includes('open photo')) {
        window.open('ms-photos'); 
      }

      else if (spokenCommand.includes('open settings')) {
        window.open('ms-settings:'); // Open Windows Settings
      }

      else {
        speak(`Command not recognized: ${spokenCommand}`);
      }

      // Reset the application after a command is processed
      setTimeout(() => {
        window.location.reload(); // Reload the page to reset the app
      }, 2000);
    };

    recognition.onerror = (event) => {
      console.error(event.error);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };

  // Voice synthesis function
  const speak = (text) => {
    const synth = window.speechSynthesis;
    const utterThis = new SpeechSynthesisUtterance(text);
    synth.speak(utterThis);
  };

  useEffect(() => {
    handleVoiceCommand();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <div className="content">
        <h1>Voice Controlled System</h1>
        <div className={`mic-container ${isListening ? 'listening' : ''}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            fill="currentColor"
            className="bi bi-mic-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 10a2 2 0 0 0 2-2V4a2 2 0 0 0-4 0v4a2 2 0 0 0 2 2z" />
            <path d="M5 8a3 3 0 0 0 6 0V4a3 3 0 0 0-6 0v4zm3 6a5 5 0 0 0 5-5h1a6 6 0 0 1-12 0h1a5 5 0 0 0 5 5zm1-1a1 1 0 0 0-2 0h2z" />
          </svg>
        </div>
        <p>Command: {command}</p>
      </div>
    </div>
  );
}

export default App;
