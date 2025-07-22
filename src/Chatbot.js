import React, { useState, useRef, useEffect } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: "Hey there! 👋 I'm Sourabh's AI buddy! Ask me anything about his work, skills, or just say hi! 🤖",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Knowledge base based on resume data
  const knowledgeBase = {
    experience: {
      current: {
        role: "Software Developer",
        company: "Ocean Sonics",
        duration: "July 2024 -- Present",
        location: "Halifax, NS",
        achievements: [
          "Built a C++/Qt plugin to detect and visualize porpoise clicks from hydrophone data in real-time",
          "Reduced acoustic processing latency by 15% through targeted optimizations",
          "Developed anomaly detection models using encoder-based deep learning architectures",
          "Led code reviews resulting in 30% reduction in software defects",
          "Implemented comprehensive unit and integration tests with 50% gain in test coverage"
        ]
      },
      previous: {
        role: "Research Assistant",
        company: "Dalhousie University",
        duration: "May 2023 -- June 2024",
        location: "Halifax, NS",
        achievements: [
          "Implemented CNN-based models for feature extraction and classification",
          "Used PyTorch framework with 25% reduction in development time and 20% increase in accuracy",
          "Specialized in vision transformer (ViT) models with 35% improvement in image segmentation accuracy"
        ]
      }
    },
    projects: {
      "algorithmic trader": {
        name: "Algorithmic Trader",
        technologies: ["Python", "Pandas", "Numpy", "Keras", "TensorFlow", "Git", "Docker"],
        achievements: [
          "20% boost in predictive accuracy using advanced data analysis",
          "15% improvement in pattern recognition accuracy for market trends"
        ],
        link: "https://github.com/sharma-sourabh3435/ready_trader_go"
      },
      "gigsnow": {
        name: "GigsNow",
        technologies: ["Java", "Android Studio", "Firebase", "Git"],
        achievements: [
          "Developed Android application for job discovery and listings",
          "30% growth in user engagement through advanced functionalities"
        ],
        link: "https://github.com/sharma-sourabh3435/Odd-Jobs"
      }
    },
    skills: {
      programming: ["Python", "C++", "Java", "JavaScript"],
      frameworks: ["PyTorch", "TensorFlow", "Keras", "Qt", "React"],
      technologies: ["Git", "Docker", "Firebase", "Android Studio"],
      specializations: ["Deep Learning", "Computer Vision", "Signal Processing", "Distributed Systems"]
    },
    interests: ["Math", "Distributed Systems", "Scalable Applications", "Cooking", "Hiking"],
    social: {
      github: "https://github.com/sharma-sourabh3435",
      linkedin: "https://www.linkedin.com/in/-sourabh-/",
      substack: "https://sourabh3435.substack.com/"
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Show welcome message after page loads
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(true);
      const welcomeTimer = setTimeout(() => {
        setShowWelcome(false);
      }, 4000); // Show for 4 seconds
      
      return () => clearTimeout(welcomeTimer);
    }, 2000); // Show after 2 seconds

    return () => clearTimeout(timer);
  }, []);

  const generateResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    
    // Helper function to check if any keywords match
    const containsAny = (keywords) => keywords.some(keyword => message.includes(keyword));
    
    // Greeting responses
    if (containsAny(['hi', 'hello', 'hey', 'hiya', 'greetings', 'sup', 'yo'])) {
      return `👋 Hey there! Great to meet you! I'm here to tell you all about Sourabh - what would you like to know?`;
    }
    
    // Experience/Work related
    if (containsAny(['experience', 'work', 'job', 'career', 'employment', 'what does he do', 'working', 'works', 'professional', 'role', 'position'])) {
      return `🚀 Sourabh's currently building cool marine tech at Ocean Sonics and previously did AI research at Dalhousie University!`;
    }

    // Skills/Technology related
    if (containsAny(['skill', 'technology', 'programming', 'tech', 'languages', 'code', 'coding', 'developer', 'good at', 'knows', 'can he', 'abilities'])) {
      return `💻 He's a Python & C++ wizard who loves deep learning, computer vision, and making things faster! Also knows React, PyTorch, and Qt.`;
    }

    // Projects related
    if (containsAny(['project', 'built', 'made', 'created', 'github', 'portfolio', 'apps', 'applications'])) {
      return `🎯 Check out his Algorithmic Trader (Python/ML magic) and GigsNow Android app - both on his GitHub!`;
    }

    // Education/Background
    if (containsAny(['education', 'university', 'study', 'school', 'degree', 'academic', 'research', 'student', 'learned'])) {
      return `🎓 He did research at Dalhousie University focusing on CNN models and vision transformers - pretty smart stuff!`;
    }

    // Contact/Social
    if (containsAny(['contact', 'reach', 'social', 'linkedin', 'github', 'find him', 'connect', 'talk to', 'message', 'email'])) {
      return `📱 Find him on GitHub, LinkedIn, or his Substack - he's quite active and loves connecting!`;
    }

    // Personal interests/hobbies
    if (containsAny(['interest', 'hobby', 'personal', 'fun', 'cooking', 'hiking', 'likes', 'enjoys', 'free time', 'outside work'])) {
      return `🍳 When not coding, he's probably hiking trails or experimenting with new recipes - a true foodie and nature lover!`;
    }

    // Current work/Ocean Sonics
    if (containsAny(['ocean sonics', 'current', 'now', 'marine', 'dolphins', 'whales', 'working on', 'doing now'])) {
      return `🐋 He builds C++/Qt plugins to detect porpoise clicks in real-time - basically helping save marine mammals with code!`;
    }

    // Location
    if (containsAny(['where', 'location', 'halifax', 'canada', 'live', 'based', 'from'])) {
      return `🍁 He's based in beautiful Halifax, Nova Scotia, Canada!`;
    }

    // Resume/CV
    if (containsAny(['resume', 'cv', 'download', 'document', 'pdf'])) {
      return `📄 You can view and download his resume right here on this page - scroll up to the Resume section!`;
    }

    // Personality/Character
    if (containsAny(['funny', 'personality', 'cool', 'awesome', 'nice', 'person', 'like', 'character', 'kind'])) {
      return `😄 He's definitely a fun person! Message him and he'd be happy to chat about tech, food, or adventures!`;
    }

    // About general questions
    if (containsAny(['about', 'who is', 'tell me', 'info', 'information', 'sourabh', 'him'])) {
      return `🤖 Sourabh's a software developer who loves building cool tech, especially AI and marine research stuff! What specifically interests you?`;
    }

    // Age/Years
    if (containsAny(['age', 'old', 'years', 'young'])) {
      return `🤔 I don't have his exact age, but he's a young professional who's been in tech since 2023! Message him for more details.`;
    }

    // Salary/Money (politely deflect)
    if (containsAny(['salary', 'money', 'pay', 'earn', 'income', 'cost', 'rate'])) {
      return `� Haha, that's between him and his accountant! But he's doing well in his career - focus on his awesome skills instead! 😊`;
    }

    // Thanks/Appreciation
    if (containsAny(['thank', 'thanks', 'appreciate', 'helpful', 'awesome bot'])) {
      return `🙏 Aww, you're welcome! Happy to help you learn about Sourabh - he's pretty awesome!`;
    }

    // Default response for unmatched questions
    return `🤔 Hmm, I don't have that specific info, but Sourabh's a fun person - message him and he'd be happy to talk to you! 😊`;
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      type: 'user',
      text: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse = {
        type: 'bot',
        text: generateResponse(inputValue),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatMessage = (text) => {
    return text.split('\n').map((line, index) => {
      // Handle bold text
      if (line.includes('**')) {
        const parts = line.split('**');
        return (
          <div key={index}>
            {parts.map((part, i) => 
              i % 2 === 0 ? part : <strong key={i}>{part}</strong>
            )}
          </div>
        );
      }
      return <div key={index}>{line}</div>;
    });
  };

  return (
    <>
      {/* Welcome Message */}
      {showWelcome && (
        <div className="welcome-message">
          <div className="welcome-content">
            👋 Want to know more about Sourabh? 
            <br />Click the chat button to ask me anything!
          </div>
        </div>
      )}

      {/* Chat Toggle Button */}
      <div 
        className={`chat-toggle ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        title="Ask about Sourabh's qualifications"
      >
        {isOpen ? '×' : '🤖'}
      </div>

      {/* Chat Window */}
      <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
        <div className="chatbot-header">
          <h3>Ask about Sourabh</h3>
          <button 
            className="close-btn"
            onClick={() => setIsOpen(false)}
          >
            ×
          </button>
        </div>

        <div className="chatbot-messages">
          {messages.map((message, index) => (
            <div 
              key={index}
              className={`message ${message.type}`}
            >
              <div className="message-content">
                {formatMessage(message.text)}
              </div>
              <div className="message-time">
                {message.timestamp.toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="message bot typing">
              <div className="message-content">
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="chatbot-input">
          <textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me about Sourabh's experience, skills, projects..."
            rows="2"
          />
          <button 
            onClick={handleSendMessage}
            disabled={!inputValue.trim() || isTyping}
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
