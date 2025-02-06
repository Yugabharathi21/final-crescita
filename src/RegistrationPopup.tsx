import React, { useState, useEffect } from 'react';
import { X as CloseIcon } from 'lucide-react';

const RegistrationPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const aboutSectionBottom = aboutSection.getBoundingClientRect().bottom;
        if (aboutSectionBottom <= window.innerHeight) {
          setIsVisible(true);
          window.removeEventListener('scroll', handleScroll);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="modern-card max-w-2xl w-full p-8 relative max-h-[80vh] flex flex-col">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-2xl hover:text-[#2ec427]"
        >
          <CloseIcon />
        </button>
        <h2 className="text-2xl font-bold mb-4 glitch-text">Event Registration Instructions</h2>
        
        <div className="overflow-y-auto pr-4 space-y-4 text-sm">
          <div>
            <h3 className="font-bold mb-2">General Instructions</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>College ID card is Mandatory at the time of reporting</li>
              <li>Every participant must register online</li>
              <li>Online Registrations will be open till 11:59 PM on 26th February 2025</li>
              <li>Pre-event schedules will be shared with participants through WhatsApp group</li>
              <li>Registered participants must report at the event venue between 08:30 AM to 09:00 AM on 7th March</li>
              <li>Participants are expected to follow the time schedule strictly</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-2">Registration Details</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Registration Fee: ₹250 (Payable during Online Registration)</li>
              <li>Participants can register for either Workshop or Tech & Non-Tech Events</li>
              <li>If registered for Tech & Non-Tech Event, participants can take part in all events</li>
              <li>Workshop registration is for a full day, and participants aren't allowed to take part in other events</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-2">Post-Registration Process</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>After individual registration & payment, we'll verify your payment</li>
              <li>You'll receive a Crescita ID & further instructions via email</li>
              <li>Individual Event Registration Link will be mailed to participants after successful payment</li>
              <li>Refreshments will be provided</li>
              <li>Participation Certificates will be issued based on attendance</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-2">Additional Guidelines</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Participants must bring their college ID</li>
              <li>Online registration is mandatory</li>
              <li>Payment must be completed before the deadline</li>
              <li>Participants should join the WhatsApp group for updates</li>
              <li>Be punctual and follow the event schedule</li>
            </ul>
          </div>
          
          <div className="text-sm italic text-[#2ec427]">
            <p>Note: Any person violating the rules will be disqualified. The decision of the judges will be final. Refunds will not be provided under any circumstances.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPopup;