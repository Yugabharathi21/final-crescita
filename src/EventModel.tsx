import React, { useRef, useEffect } from 'react';
import { CloseIcon } from 'lucide-react';

const WorkshopEventModal = ({ event, closeModal }) => {   
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('wheel', (e) => {
        e.stopPropagation();
      }, { passive: true });
    }
  }, []);

  return (     
    <div className="modern-card max-w-2xl w-full p-8 relative max-h-[80vh] flex flex-col">       
      <button         
        onClick={closeModal}         
        className="absolute top-4 right-4 text-2xl"       
      >                
      </button>       
      <h3 className="text-2xl font-bold mb-4 glitch-text">{event.title}</h3>       
      <p className="text-[#2ec427] mb-4">{event.type}</p>              
      
      <div 
        ref={scrollContainerRef}
        className="overflow-y-auto pr-4 space-y-4 text-sm flex-1"
        style={{ 
          maxHeight: 'calc(80vh - 200px)', 
          overscrollBehavior: 'contain' 
        }}
      >
        {/* Instructor Details */}       
        <div>         
          <h4 className="font-bold mb-2">Instructor Details</h4>         
          <p>{event.instructor || "TBA"}</p>         
        </div>        
        
        {/* Date & Duration */}       
        <div>         
          <h4 className="font-bold mb-2">Event Timing</h4>         
          <p>Date: {event.date || "TBA"}</p>
          <p>Duration: {event.duration || "TBA"} hrs</p>         
        </div>        
        
        {/* Registration Deadline */}       
        <div>
          <h4 className="font-bold mb-2">Registration</h4>
          <p>Deadline: {event.deadline || "26.02.2025"}</p>       
        </div>
        
        {/* Workshop Description */}       
        {event.details && (         
          <div>           
            <h4 className="font-bold mb-2">Workshop Description</h4>           
            <p>{event.details}</p>         
          </div>       
        )}     

        {/* Guidelines */}       
        {event.guidelines && (         
          <div>           
            <h4 className="font-bold mb-2">Guidelines</h4>           
            <ul className="list-disc pl-5 space-y-2">             
              {event.guidelines.map((guideline, index) => (               
                <li key={index}>{guideline}</li>             
              ))}           
            </ul>         
          </div>       
        )}
      </div>
    </div>   
  ); 
}; 

const GeneralEventModal = ({ event, closeModal }) => {   
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('wheel', (e) => {
        e.stopPropagation();
      }, { passive: false });
    }
  }, []);

  return (     
    <div className="modern-card max-w-2xl w-full p-8 relative max-h-[80vh] flex flex-col">       
      <button         
        onClick={closeModal}         
        className="absolute top-4 right-4 text-2xl"       
      >         
        <CloseIcon />       
      </button>       
      <h3 className="text-2xl font-bold mb-4 glitch-text">{event.title}</h3>       
      <p className="text-[#2ec427] mb-4">{event.type}</p>              
      
      <div 
        ref={scrollContainerRef}
        className="overflow-y-auto pr-4 space-y-4 text-sm flex-1"
        style={{ 
          maxHeight: 'calc(80vh - 200px)', 
          overscrollBehavior: 'contain' 
        }}
      >
        {/* Prize Pool */}       
        <div>         
          <h4 className="font-bold mb-2">Prize Pool</h4>         
          <p>1st Prize: {event.prize?.first || "N/A"}</p>         
          <p>2nd Prize: {event.prize?.second || "N/A"}</p>         
          <p>3rd Prize: {event.prize?.third || "N/A"}</p>         
        </div>        
        
        {/* Registration Deadline */}       
        <div>
          <h4 className="font-bold mb-2">Registration</h4>
          <p>Deadline: {event.deadline || "26.02.2024"}</p>       
        </div>
        
        {/* Event Details */}       
        {event.details && (         
          <div>           
            <h4 className="font-bold mb-2">Event Details</h4>           
            <p>{event.details}</p>         
          </div>       
        )}        
        
        {/* Guidelines */}       
        {event.guidelines && (         
          <div>           
            <h4 className="font-bold mb-2">Guidelines</h4>           
            <ul className="list-disc pl-5 space-y-2">             
              {event.guidelines.map((guideline, index) => (               
                <li key={index}>{guideline}</li>             
              ))}           
            </ul>         
          </div>       
        )}        
        
        {/* Topics */}       
        {event.topics && (         
          <div>           
            <h4 className="font-bold mb-2">Topics</h4>           
            <ul className="list-disc pl-5 space-y-2">             
              {event.topics.map((topic, index) => (               
                <li key={index}>{topic}</li>             
              ))}           
            </ul>         
          </div>       
        )}     
      </div>
    </div>   
  ); 
}; 

export { WorkshopEventModal, GeneralEventModal };