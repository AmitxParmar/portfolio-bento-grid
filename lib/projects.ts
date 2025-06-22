import { Project } from "@/types/general";

export const projects: Project[] = [
  {
    name: "HIRECROWD",
    images: ["/projects/job-portal/index.png"],
    description:
      "Responsive job portal with recruiter and job seeker roles, featuring job management, applicant tracking, resume viewing, bookmarking, and an inbuilt resume builder",
    skills: ["javascript", "node.js", "express", "mongodb", "tailwindCSS"],
    type: "Job Portal",
    liveLink: "https://job-portal-mern-sigma.vercel.app/",
    repositoryLink: "https://github.com/AmitxParmar/job-portal-mern",
    features: [
      "Create jobs from different companies: Recruiters can easily create and manage job postings for multiple companies",
      "Recruiter dashboard: Comprehensive dashboard showing recent applicants, jobs, and status metrics",
      "Inbuilt resume viewer: View candidate resumes directly within the platform",
      "Applicant tracking system: Track and manage applicants for each job posting",
      "Candidate status updates: Update and track candidate status (interviewing, hired, applied, reviewing)",
      "User invitation system: Invite new users using unique invitation codes",
      "Infinite job list scroll: Smooth scrolling through job listings with infinite load",
      "Mobile responsive job filters: Advanced filtering options optimized for all devices",
      "Job bookmarking: Save and manage favorite job postings",
      "Applied jobs tracking: Keep track of all jobs you've applied to",
      "Interactive job details drawer: Detailed view of job information in a convenient drawer format",
      "Built-in resume builder: Create professional resumes using the platform's resume builder tool",
    ],
  },
  {
    name: "Quick Chat",
    images: ["/projects/quick-chat/index.png"],
    description:
      "QuickChat is a web app offering seamless Google login via Firebase, real-time messaging with Socket.io, voice and video calls, voice notes with live audio waveforms, emoji support, image sharing, online/offline status, message search, camera photo capture, and message read statuses with timestamps.",
    type: "Realtime Chat",
    features: [
      "Login with Google using Firebase: Seamlessly sign in with your Google account via Firebase integration",
      "Send and Receive Messages using Sockets: Real-time messaging capabilities using Socket.io for instant communication",
      "Voice Call and Video Call Feature: Enjoy crystal clear voice and video calls within the app",
      "Voice Notes with Live Audio Waveforms: Send and receive voice notes accompanied by live audio waveforms for an enhanced messaging experience",
      "Support for Emoji: Express yourself with a wide range of emojis to add fun and emotions to your conversations",
      "Send Images: Share images with your friends and loved ones effortlessly",
      "Online/Offline Functionality: Easily identify the online and offline status of your contacts",
      "Search Messages: Quickly find specific messages using the search functionality",
      "Capture Photo From Camera: Take instant photos using your device's camera and send them instantly",
      "Message Read Status: Know when your messages have been read by your recipients",
      "Message Time: Stay updated with the time stamps of messages for better organization",
      "Switch between multiple databases using Prisma: Customize your database preferences to suit your needs effortlessly",
    ],
    skills: [
      "tailwindcss",
      "typescript",
      "socket.io",
      "redux",
      "react",
      "next.js",
    ],
  },
];
