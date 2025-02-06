import React from "react";
import "./App.css";
import { Camera } from "lucide-react";
import { useState } from "react";
import axios from "axios";

const App = () => {
  // const [cameraOn, setCameraOn] = useState(false);
  // const startCamera = async () => {
  //   await fetch("http://127.0.0.1:5000/startcamera",{
  //           method: "POST",
  //           headers: {
  //               "Content-Type": "application/json"
  //           }
  //       });
  //   setCameraOn(true);
  // };

  // const stopCamera = async () => {
  //   await fetch("http://127.0.0.1:5000/stopcamera",{
  //           method: "POST",
  //           headers: {
  //               "Content-Type": "application/json"
  //           }
  //       });
  //   setCameraOn(false);
  // };


   const [scriptOutput, setScriptOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);

  const runScript = async () => {
    try {
      setIsRunning(true);
      const response = await axios.post('http://localhost:3001/run-script', {
        scriptName: 'server.js'
      });
      
      setScriptOutput(response.data.output);
    } catch (error) {
      setScriptOutput(`Error: ${error.response?.data?.message || error.message}`);
    } finally {
      setIsRunning(false);
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-orange-600/10" />
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Bridging Communication with Indian Sign Language
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            AI-powered ISL recognition for seamless interaction & learning
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
              Try It Now
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Demo Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Try It Live</h2>
          <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <Camera className="w-16 h-16 text-gray-400 mx-auto mb-4" />
               
                 {/* <button
                    className="px-4 py-2 bg-green-500 hover:bg-green-600 rounded-lg text-white"
                    onClick={startCamera}
                    disabled={cameraOn}
                >
                    Turn On Camera
                </button>
                <button
                    className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg text-white"
                    onClick={stopCamera}
                    disabled={!cameraOn}
                >
                    Turn Off Camera
                </button> */}


                 <button 
        onClick={runScript} 
        disabled={isRunning}
        className={`w-full py-2 px-4 rounded ${
          isRunning 
            ? 'bg-gray-400 cursor-not-allowed' 
            : 'bg-blue-500 text-white hover:bg-blue-600'
        }`}
      >
        {isRunning ? 'Running...' : 'Run Script'}
      </button>
      {scriptOutput && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <h2 className="font-bold mb-2">Output:</h2>
          <pre className="whitespace-pre-wrap break-words">{scriptOutput}</pre>
        </div>
      )}
              </div>
            </div>
          </div>
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-center text-gray-600">
              Recognition output will appear here
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            What People Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="p-6 bg-white rounded-xl shadow">
                <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4" />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ISL Recognition</h3>
              <p className="text-gray-400">
                Breaking communication barriers with AI
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition">
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition">
                  LinkedIn
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition">
                  Twitter
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition">
                  Instagram
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2025 ISL Recognition. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Data
const features = [
  {
    title: "Real-time Sign Recognition",
    description:
      "Advanced AI technology for instant and accurate sign language translation",
    icon: <Camera className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "Learn ISL",
    description:
      "Interactive tutorials and lessons for beginners to advanced users",
    icon: <Camera className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "AI-Powered Accuracy",
    description:
      "State-of-the-art deep learning models for precise recognition",
    icon: <Camera className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "Inclusive & Accessible",
    description: "Designed to support diverse communities and use cases",
    icon: <Camera className="w-6 h-6 text-blue-600" />,
  },
];

const steps = [
  {
    title: "Enable Camera",
    description: "Grant camera access to begin recognition",
  },
  {
    title: "Make a Sign",
    description: "Perform any Indian Sign Language gesture",
  },
  {
    title: "Instant Translation",
    description: "See the recognized sign converted to text",
  },
  // {
  //   title: "Text to Speech",
  //   description: "Optional audio output of translated signs"
  // }
];

const testimonials = [
  {
    name: "Priya Sharma",
    role: "ISL Interpreter",
    quote:
      "This tool has revolutionized how I communicate with the deaf community.",
  },
  {
    name: "Rahul Kumar",
    role: "Student",
    quote:
      "Learning ISL has never been easier. The real-time feedback is incredible.",
  },
  {
    name: "Anita Patel",
    role: "Teacher",
    quote: "A game-changer for inclusive education in my classroom.",
  },
];

export default App;
