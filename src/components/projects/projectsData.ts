
export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  demoUrl: string;
  video?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Viton: Virtual Try-On",
    description: "An AI-powered virtual try-on system that adapts clothing to any user instantly using Stable Diffusion.",
    technologies: ["React", "AI", "Stable Diffusion"],
    githubUrl: "https://github.com/",
    demoUrl: "https://tryown-frontend.vercel.app/",
    image: "https://placehold.co/600x400/1A1F2C/FFFFFF?text=Viton+Chameleon",
    video: "/site-demo.mp4"
  },
  {
    id: 2,
    title: "Text-to-Image Generator",
    description: "A locally-hosted generative AI model that creates high-quality images from text prompts without external API dependencies.",
    technologies: ["Stable Diffusion", "Python", "PyTorch", "Streamlit"],
    githubUrl: "https://github.com/",
    demoUrl: "https://github.com/",
    image: "https://placehold.co/600x400/1A1F2C/FFFFFF?text=The+Artist+Spider",
    video: "/text_to_image.mp4"
  },
  {
    id: 3,
    title: "OCR Document Scanner",
    description: "A Computer Vision tool that scans documents to extract and analyze text with high accuracy using advanced OCR techniques.",
    technologies: ["OpenCV", "HuggingFace", "Flask", "Streamlit"],
    githubUrl: "https://github.com/",
    demoUrl: "https://drive.google.com/file/d/1Qw308EiVN0OMuQ0q1vvTgAgCuIXhLctP/view?usp=sharing",
    image: "https://placehold.co/600x400/1A1F2C/FFFFFF?text=Hawks+Eye+OCR",
    video: "/textexctrator_recording.mp4"
  },
  {
    id: 4,
    title: "PDF RAG System",
    description: "An intelligent retrieval-augmented generation system that processes large PDF documents and answers questions from them instantly.",
    technologies: ["LangChain", "Streamlit", "FAISS", "Ollama", "Python"],
    githubUrl: "https://github.com/",
    demoUrl: "https://drive.google.com/drive/folders/1rW2ufZNwpmeH1E4dX-JW1qkERoM-fH3P?usp=sharing",
    image: "https://placehold.co/600x400/1A1F2C/FFFFFF?text=Elephants+Memory+RAG",
    video: "/pdf_recording.mp4"
  },
  {
    id: 5,
    title: "Mediscan AI",
    description: "A medical decision support system that uses OCR and AI to assist doctors with differential diagnosis from clinical documents.",
    technologies: ["React", "Next.js", "OCR", "AI", "RAG", "Decision Support System"],
    githubUrl: "https://github.com/",
    demoUrl: "https://mediscan-ai-opal.vercel.app/",
    image: "https://placehold.co/600x400/1A1F2C/FFFFFF?text=Mediscan+Alpha+Wolf"
  },
  {
    id: 6,
    title: "QuickCart E-Commerce",
    description: "A full-featured e-commerce platform handling orders, payments, and user management with a scalable architecture.",
    technologies: ["Next.js", "Clerk", "MongoDB", "Inngest", "Tailwind CSS"],
    githubUrl: "https://github.com/",
    demoUrl: "https://littlewisewesbite-ten.vercel.app/",
    image: "https://placehold.co/600x400/1A1F2C/FFFFFF?text=QuickCart+Ant+Colony"
  },
  {
    id: 7,
    title: "Jobify: Job Portal",
    description: "A comprehensive job search platform connecting job seekers with opportunities, featuring profile management and application tracking.",
    technologies: ["React", "MongoDB", "Express", "Node.js", "Tailwind CSS"],
    githubUrl: "https://github.com/",
    demoUrl: "https://jobify-j55w.onrender.com/dashboard/profile",
    image: "https://placehold.co/600x400/1A1F2C/FFFFFF?text=Jobify+Migration"
  },
  {
    id: 8,
    title: "VitalCare: Health Platform",
    description: "A healthcare platform connecting patients to AI-powered services with secure health data management and user authentication.",
    technologies: ["React", "Next.js", "PostgreSQL", "JWT", "REST API", "Tailwind CSS"],
    githubUrl: "https://github.com/",
    demoUrl: "https://nextjs-login-sooty.vercel.app/",
    image: "https://placehold.co/600x400/1A1F2C/FFFFFF?text=VitalCare+Ecosystem"
  }
];
