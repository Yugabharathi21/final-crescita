import crest from "./crest.jpg";
import keclogo from "./keclogo.png";
import csealogo from "./csealogo.png";
import vaultlogo from "./vault-boy.png";
import RetroWindowsPopup from "./RetroWindowsPopup";
import React, { useState, useEffect } from "react";
import RegistrationPopup from './RegistrationPopup';
import NewComponent from "./components/NewComponent";
import {
  Menu,
  X as CloseIcon,
  GraduationCap as University,
  Rocket,
  Laptop as LaptopCode,
  Phone,
} from "lucide-react";

function App() {
  const [bootProgress, setBootProgress] = useState<string[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<Record<string, any> | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredScheduleItem, setHoveredScheduleItem] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [particles, setParticles] = useState<{ x: number; y: number }[]>([]);
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [mouseTrail, setMouseTrail] = useState<{ x: number; y: number }[]>([]);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorTrail, setCursorTrail] = useState<Array<{ x: number; y: number; id: number }>>([]);
  const [trailId, setTrailId] = useState(0);

  
const [showWindowsPopup, setShowWindowsPopup] = useState(true);
const [showLoadingPopup, setShowLoadingPopup] = useState(false);

  // Add cursor trail effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      setCursorPosition({ x: clientX, y: clientY });
      
      // Add new point to trail
      setTrailId(prev => prev + 1);
      setCursorTrail(prev => [
        ...prev,
        { x: clientX, y: clientY, id: trailId }
      ].slice(-20)); // Keep last 20 points
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [trailId]);

  // Clean up old trail points
  useEffect(() => {
    const cleanupInterval = setInterval(() => {
      setCursorTrail(prev => prev.slice(1));
    }, 50);

    return () => clearInterval(cleanupInterval);
  }, []);

  // Define Event Type
type EventType = {
  title: string;
  type: string;
  prize: {
    first: string;
    second: string;
    third: string;
  };
  deadline: string;
  details?: string;
  guidelines?: string[];
  topics?: string[];
};

type WorkshopType = {
  title: string;
  category: string;
  status: string;
  description: string;
  prerequisites: string;
  keyTakeaways: string[];
  guidelines: string[];
};

const technicalEvents: EventType[] = [
  {
    title: "Think Tank Talk",
    type: "Paper Presentation",
    prize: {
      first: "₹1500",
      second: "₹1000",
      third: "₹500",
    },
    deadline: "26th February 2025",
    details:
      "Paper presentation is about how you put your topic and present your ideas, the ideas that invokes the best results will be appreciated and awarded.",
    guidelines: [
      "Members: Maximum 3 per Team",
      "Abstract must be uploaded during registration",
      "Mention your Team Members Name, Department, College Name correctly",
      "Preliminary Selection is based on the Abstract submitted during registration",
      "The shortlisted candidates will be intimated through WhatsApp Group on or before 01/03/2025 6PM",
      "Each team will be given 04 minutes to present their paper and 1 min for viva",
      "Decision of judges will be final",
    ],
    topics: [
      "Networking",
      "Machine Learning",
      "Internet of Things",
      "Big Data",
      "Cloud Computing",
      "Artificial Intelligence",
      "Image Processing",
      "Nano technology",
      "Other Recent Technology Papers Related to Computer Science domains",
    ],
  },
  {
    title: "Visionary Venturer",
    type: "Project Presentation",
    prize: {
      first: "₹1500",
      second: "₹1000",
      third: "₹500",
    },
    deadline: "26th February 2025",
    details:
      "Project presentation is the platform to expose your innovative ideas and have a chance to Change the world of creativity into reality",
    guidelines: [
      "Each team should consist of a maximum of 3 members per team",
      "Presentation duration should not exceed 7 mins",
      "The shortlisted projects will be intimated through WhatsApp Group on or before 01/03/2025 6pm",
      "All Event updates will be conveyed through event WhatsApp group",
    ],
  },
  {
    title: "Codex",
    type: "Coding Event",
    prize: {
      first: "₹1500",
      second: "₹1000",
      third: "₹500",
    },
    deadline: "26th February 2025",
    details:
      "Programming is not just about what you know. It's about what you can do with what you know. Byte Grable is filled with competitive programming challenges made to unleash your coding skills. Code and debug your path to a proper result and ascend to the next level. The power of coding is infinite!",
    guidelines: [
      "It's an individual event",
      "Preliminary Round will be conducted before the event day through HackerRank",
      "It will be based on hacker rank or hacker earth platform",
      "Results based on hackerrank leaderboard (no of test cases solved + time taken)",
    ],
  },
  {
    title: "Frame by Frame",
    type: "Image Prompt",
    prize: {
      first: "₹1500",
      second: "₹1000",
      third: "₹500",
    },
    deadline: "1st March 2025",
    details:
      "In this event, participants were tasked with generating an image similar to a displayed reference by crafting accurate prompts to an AI tool. With a limited timeframe, the challenge tested their creativity, prompt engineering skills, and quick thinking, making it an engaging and insightful experience for all.",
    guidelines: ["It's a Solo Event", "Decision of judges will be final"],
  },
  {
    title: "Quantum Quest",
    type: "Technical Quiz",
    prize: {
      first: "₹1500",
      second: "₹1000",
      third: "₹500",
    },
    deadline: "1st March 2025",
    details:
      "Quantum Quest is a game based on engineering themes, principles, technical words, and universally acknowledged facts designed to test your vocabulary, creativity, and quick thinking as you link one clue to another. Get ready for a roller coaster ride into the intense world of techno sparks",
    guidelines: ["It's a solo event", "Decision of judges will be final"],
  },
];


const workshops: WorkshopType[] = [
  {
    title: "Delve into DataViz: From Basics to Advanced Techniques",
    category: "Workshop",
    status: "Registrations Open Till 26 February 2025",
    description:
      "An immersive workshop designed to introduce participants to the core principles of data visualization. Explore fundamental concepts and seamlessly transition into hands-on sessions covering various visualization techniques, tools, and best practices, empowering attendees to turn raw data into meaningful insights effortlessly.",
    prerequisites: "No prerequisites are required for this workshop.",
    keyTakeaways: [
      "✅ Foundational Understanding – Learn the core concepts of data visualization.",
      "✅ Hands-On Experience – Gain practical exposure to visualization tools.",
      "✅ Tool Proficiency – Explore popular tools like Tableau, Power BI, and Python libraries.",
      "✅ Data Storytelling – Transform raw data into compelling visual narratives.",
      "✅ Problem-Solving Skills – Learn how to choose the right visualization for different datasets.",
      "✅ Application Scenarios – Discover real-world use cases and best practices.",
      "✅ Resource Awareness – Get access to learning materials and industry insights.",
    ],
    guidelines: [
      "🚀 Empower Your Experience – Receive an exclusive delegate kit for an enriched learning journey!",
      "📜 Earn Your Certification – All participants will receive a certificate upon successful completion of the workshop.",
      "⚡ Limited Seats Available – Reserve your spot now for an exclusive DataViz experience.",
      "🌍 Diverse Perspectives, Maximum Learning – Limited to 8 participants per college to encourage diverse insights.",
      "📢 Stay Updated – Available seats will be updated in real-time – Act fast and secure your place!",
    ],
  },
];

const nonTechnicalEvents: EventType[] = [
  {
    title: "Adventure Awaits",
    type: "Treasure Hunt",
    prize: {
      first: "₹1000",
      second: "₹750",
      third: "₹500",
    },
    deadline: "26 February 2025",
    details:
      "Embark on a thrilling adventure as you join our treasure hunt, where clues weave a tale of mystery and excitement. Navigate through challenges, decode riddles, and uncover hidden treasures in a quest that blends intellect with exhilaration.",
    guidelines: [
      "It's a Group event",
      "Maximum members: 3 per team",
      "Decision of judges will be final",
      "It is an Onstage Event",
    ],
  },
  {
    title: "Lens Legacy",
    type: "Photography",
    prize: {
      first: "₹1000",
      second: "₹750",
      third: "₹500",
    },
    deadline: "26 February 2025",
    details: "Capture moments that tell stories through your lens",
    guidelines: [
      "This is a Solo Event",
      "Basic editing allowed",
      "Should be taken only by you",
      "File should be named with your CRESCITA ID",
      "Final result will be jury decision",
    ],
  },
  {
    title: "Crossword Craze",
    type: "Sudoku",
    prize: {
      first: "₹1000",
      second: "₹750",
      third: "₹500",
    },
    deadline: "26 February 2025",
  },
  {
    title: "Survivor Showdown",
    type: "E-game",
    prize: {
      first: "₹1000",
      second: "₹750",
      third: "₹500",
    },
    deadline: "26 February 2025",
    details:
      "Dive into the virtual battleground of our gaming event, where skill and strategy collide for an adrenaline-fueled experience. Join fellow gamers in a competitive arena, where victories are celebrated and camaraderie reigns supreme.",
    guidelines: [
      "It's a solo event",
      "First round-Free Fire,BGMI",
      "Second round-Mini Militia",
    ],
  },
];
// Countdown Timer for the Event
useEffect(() => {
  const targetDate = new Date("March 7, 2025 00:00:00").getTime();
  const interval = setInterval(() => {
    const now = Date.now();
    const distance = targetDate - now;

    if (distance < 0) {
      clearInterval(interval);
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      return;
    }

    setTimeLeft({
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000),
    });
  }, 1000);

  return () => clearInterval(interval);
}, []);


// Particles Effect (Floating Dots & Sparks)
useEffect(() => {
  const createParticles = () => {
    setParticles(() =>
      Array.from({ length: 300 }, (_, i) => ({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 4 + 1,
        speedX: (Math.random() - 0.5) * 2,
        speedY: (Math.random() - 0.5) * 2,
        opacity: Math.random() * 0.5 + 0.3,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 4,
      }))
    );
  };

  createParticles();
  const interval = setInterval(createParticles, 5000);
  return () => clearInterval(interval);
}, []);


// Boot Sequence for Terminal UI
useEffect(() => {
  const bootText = [
    "INITIATING BOOT SEQUENCE...",
    "CHECKING SYSTEM INTEGRITY...",
    "LOADING RobCo OS v2.25...",
    "DETECTING HARDWARE...",
    "> Memory OK",
    "> Processor OK",
    "> Display OK",
    "ESTABLISHING CONNECTION...",
    "SCANNING FOR VAULT-TEC SIGNALS...",
    "SIGNAL DETECTED: VAULT 2K25",
    "ACCESSING VAULT DATABASE...",
    "WARNING: UNAUTHORIZED ACCESS DETECTED",
    "SECURITY PROTOCOLS BYPASSED",
    "LOADING CRESCITA 2K25 INTERFACE...",
    "WELCOME TO VAULT-TEC SYSTEMS",
  ];

  let index = 0;
  const bootInterval = setInterval(() => {
    setBootProgress((prev) => [...prev, bootText[index]]);
    index++;

    if (index >= bootText.length) {
      clearInterval(bootInterval);
      setTimeout(() => setShowLoadingPopup(false), 2000);
    }
  }, 700);

  return () => clearInterval(bootInterval);
}, []);

// Event Selection Handlers
const handleEventClick = (event: EventType) => {
  setSelectedEvent(event);
};

const handleWorkshopClick = (event: WorkshopType) =>{

  console.log("Event clicked:", event);
  setSelectedEvent(event);
};

const closeEventDetails = () => {
  setSelectedEvent(null);
};

const WorkshopEventModal = ({ event, closeModal }) => {   
  return (     
    <div className="modern-card max-w-2xl w-full p-8 relative">       
      <button         
        onClick={closeModal}         
        className="absolute top-4 right-4 text-2xl hover:text-[#2ec427]"       
      >         
        <CloseIcon />       
      </button>       
      <div className="max-h-[500px] overflow-y-auto pr-4">
        <h3 className="text-2xl font-bold mb-4 glitch-text">{event.title}</h3>       
        <p className="text-[#2ec427] mb-4">{event.type}</p>              
        
        {/* Instructor Details */}       
        <div className="mb-4">         
          <h4 className="text-lg font-bold mb-2">Instructor:</h4>         
          <p>{event.instructor || "TBA"}</p>         
        </div>        
        
        {/* Date & Duration */}       
        <div className="mb-4">         
          <h4 className="text-lg font-bold mb-2">Date & Duration:</h4>         
          <p>{event.date || "TBA"} - {event.duration || "TBA"} hrs</p>         
        </div>        
        
        {/* Registration Deadline */}       
        <p className="mb-4">         
          Registration Deadline: {event.deadline || "26.02.2025"}       
        </p>        
        
        {/* Workshop Description */}       
        {event.details && (         
          <div className="mb-4">           
            <h4 className="text-lg font-bold mb-2">Description:</h4>           
            <p>{event.details}</p>         
          </div>       
        )}     
      </div>
    </div>   
  ); 
}; 

const GeneralEventModal = ({ event, closeModal }) => {   
  return (     
    <div className="modern-card max-w-2xl w-full p-8 relative">       
      <button         
        onClick={closeModal}         
        className="absolute top-4 right-4 text-2xl hover:text-[#2ec427]"       
      >         
        <CloseIcon />       
      </button>       
      <div className="max-h-[500px] overflow-y-auto pr-4">
        <h3 className="text-2xl font-bold mb-4 glitch-text">{event.title}</h3>       
        <p className="text-[#2ec427] mb-4">{event.type}</p>              
        
        {/* Prize Pool */}       
        <div className="mb-4">         
          <h4 className="text-lg font-bold mb-2">Prize Pool:</h4>         
          <p>1st Prize: {event.prize?.first || "N/A"}</p>         
          <p>2nd Prize: {event.prize?.second || "N/A"}</p>         
          <p>3rd Prize: {event.prize?.third || "N/A"}</p>         
        </div>        
        
        {/* Registration Deadline */}       
        <p className="mb-4">         
          Registration Deadline: {event.deadline || "26.02.2025"}       
        </p>        
        
        {/* Event Details */}       
        {event.details && (         
          <div className="mb-4">           
            <h4 className="text-lg font-bold mb-2">Details:</h4>           
            <p>{event.details}</p>         
          </div>       
        )}        
        
        {/* Guidelines */}       
        {event.guidelines && (         
          <div className="mb-4">           
            <h4 className="text-lg font-bold mb-2">Guidelines:</h4>           
            <ul className="list-disc pl-5">             
              {event.guidelines.map((guideline, index) => (               
                <li key={index} className="mb-1">{guideline}</li>             
              ))}           
            </ul>         
          </div>       
        )}        
        
        {/* Topics */}       
        {event.topics && (         
          <div>           
            <h4 className="text-lg font-bold mb-2">Topics:</h4>           
            <ul className="list-disc pl-5">             
              {event.topics.map((topic, index) => (               
                <li key={index} className="mb-1">{topic}</li>             
              ))}           
            </ul>         
          </div>       
        )}     
      </div>
    </div>   
  ); 
}; 

  return (
    
    <div className="min-h-screen bg-[#031e11] text-[#14fdce] font-share-tech-mono overflow-x-hidden relative pip-screen">
      
      {showWindowsPopup && (
      <RetroWindowsPopup 
        onClose={() => {
          setShowWindowsPopup(false);
          setShowLoadingPopup(true);

          // Attempt fullscreen when popup closes
          if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen().catch(err => {
              console.warn("Fullscreen request failed:", err);
            });
          }
        }} 
      />
    )}
    {/* Cursor trail effect */}
    {cursorTrail.map((point, index) => (
        <div
          key={point.id}
          className="cursor-trail fixed" // Changed to fixed positioning
          style={{
            left: point.x,
            top: point.y,
            width: `${12 - (index * 0.5)}px`,
            height: `${12 - (index * 0.5)}px`,
            backgroundColor: `rgba(46, 196, 39, ${1 - index * 0.05})`,
            boxShadow: `0 0 ${10 - index * 0.5}px rgba(46, 196, 39, ${0.8 - index * 0.04})`,
            zIndex: 9999,
            transform: 'translate(-50%, -50%)', // Center the trail points
          }}
        />
      ))}
      
      {/* Custom cursor */}
      <div
        className="fixed pointer-events-none z-[9999]"
        style={{
          left: cursorPosition.x,
          top: cursorPosition.y,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="w-4 h-4 border-2 border-[#2ec427] rounded-full" 
             style={{
               boxShadow: '0 0 10px rgba(46, 196, 39, 0.8), inset 0 0 5px rgba(46, 196, 39, 0.8)',
             }}
        />
      </div>

      {/* Rest of your existing JSX */}
      {/* ... */}{showLoadingPopup && (
  <div className="fixed inset-0 bg-black flex items-center justify-center z-[100]">
    <div className="crt-monitor">
      <div className="crt-screen">
        <div className="crt-effects">
          <div className="crt-scanlines"></div>
          <div className="crt-glow"></div>
          <div className="crt-flicker"></div>
        </div>
        
        <div className="content-wrapper">
          <div className="logo-section mb-8">
            <img
              src={vaultlogo}
              alt="Vault-Tec Logo"
              className="w-32 h-32 mx-auto mb-4 flicker-glow"
            />
            <div className="ascii-art text-center">
              <pre className="text-[#2ec427] text-xs md:text-sm">
                ░█████╗░██████╗░███████╗░██████╗░█████╗░██╗████████╗░█████╗░  ██████╗░██╗░░██╗██████╗░███████╗
                {"\n"}
                ██╔══██╗██╔══██╗██╔════╝██╔════╝██╔══██╗██║╚══██╔══╝██╔══██╗  ╚════██╗██║░██╔╝╚════██╗██╔════╝
                {"\n"}
                ██║░░╚═╝██████╔╝█████╗░░╚█████╗░██║░░╚═╝██║░░░██║░░░███████║  ░░███╔═╝█████═╝░░░███╔═╝██████╗░
                {"\n"}
                ██║░░██╗██╔══██╗██╔══╝░░░╚═══██╗██║░░██╗██║░░░██║░░░██╔══██║  ██╔══╝░░██╔═██╗░██╔══╝░░╚════██╗
                {"\n"}
                ╚█████╔╝██║░░██║███████╗██████╔╝╚█████╔╝██║░░░██║░░░██║░░██║  ███████╗██║░╚██╗███████╗██████╔╝
                {"\n"}
                ░╚════╝░╚═╝░░╚═╝╚══════╝╚═════╝░░╚════╝░╚═╝░░░╚═╝░░░╚═╝░░╚═╝  ╚══════╝╚═╝░░╚═╝╚══════╝╚═════╝░
              </pre>
            </div>
          </div>

          <div className="terminal-section">
            <div className="terminal-header mb-4">
              <div className="status-bar flex justify-center gap-6">
                <span className="status-item glitch-text">CPU: NOMINAL</span>
                <span className="status-item glitch-text">MEM: 64K</span>
                <span className="status-item glitch-text">SIGNAL: STRONG</span>
              </div>
            </div>
            
            <div className="boot-sequence">
              {bootProgress.map((text, index) => (
                <div key={index} className="boot-text terminal-line">
                  {text}
                </div>
              ))}
              <div className="cursor-blink terminal-cursor">█</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)}
      {/* Background Effects */}
      <div className="fallout-background"></div>
      <div className="terminal-background"></div>
      <div className="terminal-overlay"></div>
      <div className="scanlines"></div>
      <div className="vignette"></div>
      <div className="crt-screen-overlay"></div>
      <div className="crt-lines"></div>
      <div className="crt-flicker"></div>
      <div className="noise"></div>

      {/* Navigation */}
      <nav className="fixed w-full bg-[#0a0a0a]/90 backdrop-blur-sm z-50 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-2xl font-bold glitch-text">CRESCITA 2K25</div>
          
          <div className="hidden md:flex space-x-6 ">
            {["Home", "About", "Events", "Schedule", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="nav-link text-white hover:text-[#2ec427]"
                data-text={item}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <pre>{"\n"}</pre>
      <pre>{"\n"}</pre>
      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative">
  <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] to-transparent pointer-events-none" />
  <div className="text-center z-10">
    <div className="mb-8">
      <NewComponent 
        text="CRESCITA 2K25" 
        className="text-[120px] md:text-[180px] lg:text-[200px] font-extrabold tracking-wider" 
      />
    </div>
    <div className="flex flex-wrap justify-center gap-8 mb-8">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="text-center w-[150px]">
          <div className="text-5xl font-bold bg-[#0a0a0a] p-6 countdown-card">
            {String(value).padStart(2, "0")}
          </div>
          <div className="text-xl mt-4 text-white font-bold">
            {unit.toUpperCase()}
          </div>
        </div>
            ))}
          </div><a href="https://forms.gle/vns7XkFdkrnMpf2LA" target="_blank" rel="noopener noreferrer">
  <button className="modern-button px-8 py-3 text-xl font-bold">
    Register Now
  </button>
</a>
<pre>{"\n"}</pre>
<div className="text-3xl font-mono text-[#00ff00] mb-12 crt-text">
            <div className="mb-2">[MARCH 07, 2025]</div>
            <div className="text-2xl text-[#2ec427]">A NATIONAL LEVEL SYMPOSIUM</div>
            <div className="text-xl text-[#2ec427] mt-2">
        A National Level Technical Symposium organized by the Computer Science and Engineering Association and CSE Coding Club of Kongu Engineering College
      </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="modern-card p-6">
              <div className="w-32 h-32 mx-auto mb-4 bg-[#2ec427]/20 rounded-full flex items-center justify-center">
              <img
                      src={keclogo}
                      alt="KEC Logo"
                      className="w-32 h-32 mx-auto mb-4 flicker-glow"
                    />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">
                Kongu Engineering College
              </h3>
              <p className="text-sm">
                Kongu Engineering College affiliated to Anna University is
                located in Perundurai, Erode. It is accredited 'A++' grade by
                National Assessment Accreditation Council. Over the past 40
                years the institution with its good infrastructure facility and
                excellent academic records has emerged as a center of
                excellence.
              </p>
            </div>
            <div className="modern-card p-6">
              <div className="w-32 h-32 mx-auto mb-4 bg-[#2ec427]/20 rounded-full flex items-center justify-center">
              <img
                      src={vaultlogo}
                      alt="Crescita Logo"
                      className="w-32 h-32 mx-auto mb-4 flicker-glow"
                    />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Crescita</h3>
              <p className="text-sm">
                Crescita is a national-level symposium conducted every year by
                the Computer Science and Engineering department of Kongu
                Engineering College. Crescita, a great platform to showcase your
                innovative ideas and enhance your technical skills, features
                both technical and fun events.
              </p>
            </div>
            <div className="modern-card p-6">
              <div className="w-32 h-32 mx-auto mb-4 bg-[#2ec427]/20 rounded-full flex items-center justify-center">
              <img
                      src={csealogo}
                      alt="CSEA Logo"
                      className="w-32 h-32 mx-auto mb-4 flicker-glow"
                    />
              
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">
                Department of Computer Science and Engineering
              </h3>
              <p className="text-sm">
                The department of Computer Science and Engineering holding
                nearly 700 students has been successfully achieving its goal of
                identifying and appreciating the unique talents. The department
                is constantly striving to provide the best academics to empower
                the practical knowledge of students.
              </p>
            </div>
          </div>
        </div>

        <div className="modern-card max-w-5xl p-2 mx-auto"><img src={crest} alt="poster" className="w-auto h-auto mx-auto" />

            </div>
        <div>
          
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-16 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center glitch-text">
            Technical Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {technicalEvents.map((event, index) => (
              <div
                key={index}
                className="modern-card p-6 cursor-pointer hover:transform hover:scale-105 transition-transform duration-300"
                onClick={() => handleEventClick(event)}
              >
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-[#2ec427] mb-2">{event.type}</p>
                <p className="mb-2">First Prize: {event.prize.first}</p>
                <p className="text-sm text-[#2ec427]/60">
                  Deadline: {event.deadline}
                </p>
              </div>
            ))}
          </div>

          <h2 className="text-4xl font-bold mb-12 text-center glitch-text">
            Non-Technical Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nonTechnicalEvents.map((event, index) => (
              <div
                key={index}
                className="modern-card p-6 cursor-pointer hover:transform hover:scale-105 transition-transform duration-300"
                onClick={() => handleEventClick(event)}
              >
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-[#2ec427] mb-2">{event.type}</p>
                <p className="mb-2">First Prize: {event.prize.first}</p>
                <p className="text-sm text-[#2ec427]/60">
                  Deadline: {event.deadline}
                </p>
              </div>
            ))}
          </div>
          
      <h2 className="text-4xl font-bold mb-12 text-center glitch-text">Workshops</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workshops.map((workshop, index) => (
          <div
            key={index}
            className="modern-card p-6 cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => handleWorkshopClick(workshop)}
          >
            <h3 className="text-xl font-bold mb-2">{workshop.title}</h3>
            <p className="text-[#2ec427] mb-2">{workshop.category}</p>
            <p className="mb-2">Status: {workshop.status}</p>
          </div>
        ))}
      </div>
        </div>
      </section>

      {/* Event Details Modal */}{selectedEvent && (
  <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
  {selectedEvent.type === "Workshop" ? (
    <WorkshopEventModal event={selectedEvent} closeModal={closeEventDetails} />
  ) : (
    <GeneralEventModal event={selectedEvent} closeModal={closeEventDetails} />
  )}
</div>
)}


<RegistrationPopup />

      {/* Schedule Section */}
      <section id="schedule" className="py-16 bg-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center glitch-text">
            Event Schedule
          </h2>
          <div className="space-y-4">
            {[
              { time: "08:30 AM", event: "Registration Desk" },
              { time: "09:00 AM", event: "Event Inauguration" },
              { time: "09:30 AM", event: "Think Tank Talk - Paper Presentation" },
              { time: "09:30 AM", event: "Visionary Venturer - Project Presentation" },
              { time: "10:30 AM", event: "Refreshments" },
              { time: "10:45 AM", event: "Coding Event - Codex" },
              { time: "10:45 AM", event: "Frame by Frame - Image Prompting" },
              { time: "10:45 AM", event: "Quantum Quest - Technical Quiz" },
              { time: "12:15 PM", event: "Lunch" },
              { time: "01:15 PM", event: "Non Technical Events" },
              { time: "02:45 PM", event: "Participants Certificate Distribution for Technical Events" },
              { time: "03:15 PM", event: "Break" },
              { time: "03:30 PM", event: "Prize Distribution" }, 

              { time: "04:00 PM", event: "Refreshments And Certificate Distribution for Non Technical Events" },
            ].map((item, index) => (
              <div
                key={index}
                className="schedule-item p-6 rounded-lg transform transition-all duration-300"
                onMouseEnter={() => setHoveredScheduleItem(index)}
                onMouseLeave={() => setHoveredScheduleItem(null)}
              >
                <div className="flex items-center">
                  <div className="pip-boy-bullet mr-4"></div>
                  <div className="flex-grow">
                    <h3
                      className={`text-xl font-bold mb-2 transition-all duration-300 ${
                        hoveredScheduleItem === index
                          ? "text-[#4ef442] scale-105 translate-x-2"
                          : ""
                      }`}
                    >
                      {item.time} - {item.event}
                    </h3>
                    <div
                      className={`h-0.5 bg-[#2ec427] transform origin-left transition-all duration-500 ${
                        hoveredScheduleItem === index
                          ? "scale-x-100 opacity-100"
                          : "scale-x-0 opacity-0"
                      }`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
<section id="contact" className="py-16">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold mb-8 text-center glitch-text">
      Contact Us
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        { name: "J Shivaani", position: "Secretary - CSEA", phone: "9047539797" },
        { name: "M Senthan Vigas", position: "Joint Secretary - CSEA", phone: "9688729596" },
        { name: "M R Prasanndh Raaju", position: "Joint Secretary - CSEA", phone: "8946050246" },
        { name: "S Gokul Sundar", position: "Secretary - CCC", phone: "7010740253" },
        { name: "K Divya", position: "Treasurer - CCC", phone: "6374939491" },
        { name: "M Ragulandiran", position: "Joint Secretary - CCC", phone: "9629074704" },
      ].map((contact, index) => (
        <div key={index} className="modern-card p-6 text-center">
          <h3 className="text-xl font-bold">{contact.name}</h3>
          <p className="text-sm text-gray-400 mb-2">{contact.position}</p> {/* Position below name */}
          <p className="text-[#2ec427]">
            <Phone className="inline-block w-4 h-4 mr-2" />
            {contact.phone}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>


      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap');

        * {

          font-family: 'Share Tech Mono', monospace;
        }
          .crt-monitor {
  width: 90%;
  max-width: 800px;
  aspect-ratio: 4/3;
  background: #000;
  border-radius: 20px;
  padding: 20px;
  position: relative;
  box-shadow: 
    0 0 0 2px #2a2a2a,
    0 0 0 4px #000,
    0 0 0 8px #333,
    0 0 20px rgba(46, 196, 39, 0.5),
    inset 0 0 40px rgba(0, 0, 0, 0.8);
}

.crt-screen {
  width: 100%;
  height: 100%;
  background: #031e11;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  border: 2px solid #2ec427;
}

.crt-effects {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 2;
}

.crt-scanlines {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    transparent 50%,
    rgba(0, 0, 0, 0.1) 50%
  );
  background-size: 100% 4px;
  animation: scanlines 0.2s linear infinite;
}

.crt-glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at center,
    transparent 0%,
    rgba(46, 196, 39, 0.1) 100%
  );
  animation: crtGlow 2s ease-in-out infinite;
}

.crt-flicker {
  position: absolute;
  inset: 0;
  background: rgba(46, 196, 39, 0.1);
  opacity: 0;
  animation: flicker 0.1s infinite;
}

.content-wrapper {
  position: relative;
  z-index: 1;
  padding: 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.logo-section {
  text-align: center;
  margin-bottom: 2rem;
}

.terminal-section {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}

.terminal-header {
  border-bottom: 2px solid #2ec427;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
}

.status-bar {
  display: flex;
  justify-content: center;
  gap: 2rem;
}

.status-item {
  color: #2ec427;
  text-shadow: 0 0 10px rgba(46, 196, 39, 0.8);
}

.boot-sequence {
  font-family: 'Share Tech Mono', monospace;
  line-height: 1.5;
}

.terminal-line {
  color: #2ec427;
  text-shadow: 0 0 5px rgba(46, 196, 39, 0.8);
  margin-bottom: 0.5rem;
}

.terminal-cursor {
  display: inline-block;
  animation: blink 1s step-end infinite;
}

@keyframes scanlines {
  0% { transform: translateY(0); }
  100% { transform: translateY(4px); }
}

@keyframes crtGlow {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 0.8; }
}

@keyframes flicker {
  0%, 100% { opacity: 0.1; }
  50% { opacity: 0; }
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.flicker-glow {
  animation: iconGlow 2s ease-in-out infinite;
}

@keyframes iconGlow {
  0%, 100% {
    filter: drop-shadow(0 0 5px rgba(46, 196, 39, 0.8));
  }
  50% {
    filter: drop-shadow(0 0 15px rgba(46, 196, 39, 0.8));
  }
}

        .fallout-background {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: 
            linear-gradient(45deg, 
              rgba(3, 30, 17, 0.6) 0%,
              rgba(3, 30, 17, 0.5) 50%,
              rgba(3, 30, 17, 0.6) 100%
            ),
            repeating-linear-gradient(
              45deg,
              rgba(20, 253, 206, 0.08) 0px,
              rgba(20, 253, 206, 0.08) 1px,
              transparent 1px,
              transparent 20px
            ),
            repeating-linear-gradient(
              -45deg,
              rgba(20, 253, 206, 0.08) 0px,
              rgba(20, 253, 206, 0.08) 1px,
              transparent 1px,
              transparent 20px
            );
          background-size: 200% 200%, 40px 40px, 40px 40px;
          pointer-events: none;
          z-index: 1;
          opacity: 0.8;
          animation: backgroundShift 30s linear infinite;
        }

        .terminal-background {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: 
            radial-gradient(circle at center, rgba(20, 253, 206, 0.15) 0%, rgba(3, 30, 17, 0.4) 100%),
            repeating-linear-gradient(
              0deg,
              rgba(20, 253, 206, 0.1) 0px,
              rgba(20, 253, 206, 0.1) 1px,
              transparent 1px,
              transparent 4px
            );
          background-size: 100% 100%, 100% 4px;
          pointer-events: none;
          z-index: 2;
          opacity: 0.7;
        }

        .pip-screen {
          background-color: rgba(3, 30, 17, 0.75);
          color: #14fdce;
          text-shadow: 
            0 0 15px #14fdce,
            0 0 30px #14fdce,
            0 0 45px rgba(20, 253, 206, 0.7);
          position: relative;
          z-index: 3;
        }

        .modern-card {
          background: rgba(3, 30, 17, 0.7);
          border: 1px solid rgba(20, 253, 206, 0.8);
          box-shadow: 
            0 0 30px rgba(20, 253, 206, 0.5),
            0 0 60px rgba(20, 253, 206, 0.3),
            inset 0 0 20px rgba(20, 253, 206, 0.4);
          backdrop-filter: blur(5px);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          z-index: 4;
        }

        .modern-card:hover {
          border-color: rgba(20, 253, 206, 1);
          box-shadow: 
            0 0 50px rgba(20, 253, 206, 0.7),
            0 0 100px rgba(20, 253, 206, 0.4),
            inset 0 0 25px rgba(20, 253, 206, 0.6);
          transform: translateY(-5px);
        }
          .cursor-trail {
  position: absolute;
  border-radius: 50%;
  opacity: 1;
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
  animation: fadeShrink 0.5s ease-out forwards;
}

@keyframes fadeShrink {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.2);
  }
}

        .modern-button {
          background: rgba(20, 253, 206, 0.3);
          border: 2px solid rgba(20, 253, 206, 0.8);
          color: #14fdce;
          text-shadow: 
            0 0 15px #14fdce,
            0 0 30px rgba(20, 253, 206, 0.7);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          animation: buttonPulse 2s infinite;
          z-index: 4;
        }

        .modern-button:hover {
          background: rgba(20, 253, 206, 0.4);
          border-color: rgba(20, 253, 206, 1);
          box-shadow: 
            0 0 40px rgba(20, 253, 206, 0.8),
            0 0 80px rgba(20, 253, 206, 0.5),
            inset 0 0 20px rgba(20, 253, 206, 0.6);
          text-shadow: 
            0 0 20px #14fdce,
            0 0 40px rgba(20, 253, 206, 0.9);
          transform: translateY(-2px);
        }

        .scanlines {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: repeating-linear-gradient(
            0deg,
            rgba(3, 30, 17, 0.08),
            rgba(3, 30, 17, 0.08) 1px,
            transparent 1px,
            transparent 2px
          );
          pointer-events: none;
          z-index: 5;
          opacity: 0.2;
        }

        .vignette {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(
            circle at center,
            transparent 30%,
            rgba(3, 30, 17, 0.5) 150%
          );
          pointer-events: none;
          z-index: 6;
          opacity: 0.4;
        }

        @keyframes buttonPulse {
          0%, 100% { box-shadow: 0 0 30px rgba(20, 253, 206, 0.6); }
          50% { box-shadow: 0 0 60px rgba(20, 253, 206, 0.8); }
        }

        .schedule-item {
          position: relative;
          border: 2px solid rgb(112, 247, 104);
          background: rgba(22, 24, 18, 0.9);
          transition: all 0.3s ease;
          overflow: hidden;
          animation: fadeInSlide 0.5s ease-out forwards;
          opacity: 0;
          transform: translateY(20px);
        }

        .schedule-item:nth-child(odd) {
          animation-delay: calc(0.1s * var(--index));
        }

        .schedule-item:nth-child(even) {
          animation-delay: calc(0.15s * var(--index));
        }

        .pip-boy-bullet {
          width: 12px;
          height: 12px;
          background: #2ec427;
          border-radius: 50%;
          position: relative;
          animation: glowPulse 2s infinite;
        }

        .pip-boy-bullet::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 18px;
          height: 18px;
          background: transparent;
          border: 2px solid #2ec427;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          animation: expandRing 2s infinite;
        }

        .schedule-item:hover {
          transform: translateX(10px) scale(1.02);
          box-shadow: 
            0 0 20px rgba(73, 221, 65, 0.2),
            inset 0 0 10px rgba(83, 219, 76, 0.1);
          background: rgba(90, 209, 84, 0.05);
        }

        .schedule-item:hover .pip-boy-bullet {
          animation: glowPulseIntense 1s infinite;
        }

        @keyframes fadeInSlide {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes glowPulse {
          0%, 100% { 
            box-shadow: 0 0 5px #2ec427;
          }
          50% { 
            box-shadow: 0 0 15px #2ec427;
          }
        }

        @keyframes glowPulseIntense {
          0%, 100% { 
            box-shadow: 0 0 8px #2ec427;
            transform: scale(1);
          }
          50% { 
            box-shadow: 0 0 20px #2ec427;
            transform: scale(1.2);
          }
        }

        @keyframes expandRing {
          0% {
            width: 18px;
            height: 18px;
            opacity: 1;
          }
          100% {
            width: 30px;
            height: 30px;
            opacity: 0;
          }
        }
      `}</style>
      <footer className="bg-gray-800 text-white text-center py-4 mt-8 text-sm">
      <p>© Crescita2025 All rights reserved.</p>
      <p>Designed by: Varun Kumar N, Yugabharathi J.</p>
      <p>Development and Maintenance: Varun Kumar N, Yugabharathi J.</p>
    </footer>
    </div>
  );
}

export default App;