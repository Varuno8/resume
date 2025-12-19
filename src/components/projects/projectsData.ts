
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
    title: "Viton: The Chameleon",
    description: "Like a chameleon changing its colors, this 'Virtual Try-On' AI adapts clothing to any user instantly using Stable Diffusion.",
    technologies: ["React", "AI", "Stable Diffusion"],
    githubUrl: "https://github.com/",
    demoUrl: "https://viton-repo.vercel.app/",
    image: "https://placehold.co/600x400/1A1F2C/FFFFFF?text=Viton+Chameleon",
    video: "/site-demo.mp4"
  },
  {
    id: 2,
    title: "Text-to-Image: The Artist Spider",
    description: "Weaving complex visual webs from simple text threads. A local generative AI model that spins pixel-perfect images without external dependencies.",
    technologies: ["Stable Diffusion", "Python", "PyTorch", "Streamlit"],
    githubUrl: "https://github.com/",
    demoUrl: "https://github.com/",
    image: "https://placehold.co/600x400/1A1F2C/FFFFFF?text=The+Artist+Spider",
    video: "/text_to_image.mp4"
  },
  {
    id: 3,
    title: "OCR Tool: The Hawk's Eye",
    description: "Possessing the vision of a predator, this Computer Vision tool scans documents to extract and analyze hidden text with pinpoint accuracy.",
    technologies: ["OpenCV", "HuggingFace", "Flask", "Streamlit"],
    githubUrl: "https://github.com/",
    demoUrl: "https://drive.google.com/file/d/1Qw308EiVN0OMuQ0q1vvTgAgCuIXhLctP/view?usp=sharing",
    image: "https://placehold.co/600x400/1A1F2C/FFFFFF?text=Hawks+Eye+OCR",
    video: "/textexctrator_recording.mp4"
  },
  {
    id: 4,
    title: "PDF RAG: The Elephant's Memory",
    description: "An intelligent retrieval system that never forgets. It ingests massive PDF knowledge bases and recalls specific facts instantly.",
    technologies: ["LangChain", "Streamlit", "FAISS", "Ollama", "Python"],
    githubUrl: "https://github.com/",
    demoUrl: "https://drive.google.com/drive/folders/1rW2ufZNwpmeH1E4dX-JW1qkERoM-fH3P?usp=sharing",
    image: "https://placehold.co/600x400/1A1F2C/FFFFFF?text=Elephants+Memory+RAG",
    video: "/pdf_recording.mp4"
  },
  {
    id: 5,
    title: "Mediscan AI: The Alpha Wolf",
    description: "Leading the pack in diagnosis. A decision support system that coordinates OCR and differential diagnosis to guide doctors through complex medical terrain.",
    technologies: ["React", "Next.js", "OCR", "AI", "RAG", "Decision Support System"],
    githubUrl: "https://github.com/",
    demoUrl: "https://mediscan-ai-opal.vercel.app/",
    image: "https://placehold.co/600x400/1A1F2C/FFFFFF?text=Mediscan+Alpha+Wolf"
  },
  {
    id: 6,
    title: "QuickCart: The Ant Colony",
    description: "A highly organized e-commerce infrastructure handling thousands of interactions (orders, payments) with collective efficiency.",
    technologies: ["Next.js", "Clerk", "MongoDB", "Inngest", "Tailwind CSS"],
    githubUrl: "https://github.com/",
    demoUrl: "https://littlewisewesbite-ten.vercel.app/",
    image: "https://placehold.co/600x400/1A1F2C/FFFFFF?text=QuickCart+Ant+Colony"
  },
  {
    id: 7,
    title: "Jobify: The Migration Path",
    description: "Helping the herd find greener pastures. A comprehensive platform connecting job seekers to new opportunities across the digital landscape.",
    technologies: ["React", "MongoDB", "Express", "Node.js", "Tailwind CSS"],
    githubUrl: "https://github.com/",
    demoUrl: "https://jobify-j55w.onrender.com/dashboard/profile",
    image: "https://placehold.co/600x400/1A1F2C/FFFFFF?text=Jobify+Migration"
  },
  {
    id: 8,
    title: "VitalCare: The Life Support",
    description: "A symbiotic ecosystem connecting patients to AI services, ensuring vital health data flows securely through the system.",
    technologies: ["React", "Next.js", "PostgreSQL", "JWT", "REST API", "Tailwind CSS"],
    githubUrl: "https://github.com/",
    demoUrl: "https://nextjs-login-sooty.vercel.app/",
    image: "https://placehold.co/600x400/1A1F2C/FFFFFF?text=VitalCare+Ecosystem"
  }
];
