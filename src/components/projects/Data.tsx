// File: data.tsx

import Image from 'next/image';
import { ChevronRight, Link } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

// --- PROJECT DATABASE ---
// This array holds the detailed information for each project.
const PROJECT_CONTENT = [
    {
    // --- NEW AI-NATIVE PORTFOLIO PROJECT ---
    title: 'AI Resume and Cover Letter Generator',
    description:
    'This project leverages large language models (LLMs) to help job seekers and professionals craft personalized, ATS-friendly resumes and tailored cover letters with ease—all via a modern, interactive web app.',
    techStack: [
      'Python',
      'Streamlit',
      'Groq - LLM',
      'LangChain',
      'FPDF',
      'PyPDF2'
    ],
    date: 'October 2025', // <-- TODO: Update with your project date
    links: [
      {
        name: 'Live Demo - You Are Here!',
        url: 'https://github.com/aryankumar120/AI-Resume-and-Cover-Letter-Generator ', // deployed link
      },
      {
        name: 'GitHub Repository',
        url: 'https://github.com/aryankumar120/AI-Resume-and-Cover-Letter-Generator', // <-- TODO: Update with your actual repo URL
      },
    ],
    images: [
      { src: '/projects/resume.png', alt: 'Resume Generator Page' },
      { src: '/projects/coverletter.png', alt: 'Cover Letter Generator Page' },
    ],
  },
  {
    title: 'AWS Pipeline for YouTube Trend Analysis',
    description:
    'This project showcases a secure, scalable, and fully automated end-to-end data engineering pipeline built on AWS.',
    techStack: [
      'Python',
      'Extract, Transform, Load (ETL)',
      'AWS Lambda',
      'AWS S3',
      'AWS Glue',
      'AWS Athena',
      'AWS QuickSight',
      'aws IAM',
      'Data Visualization',
      'Data Analysis',
      'Dashboarding',
    ],
    date: 'September 2025',
    links: [
      {
        name: 'Live Demo',
        url: 'https://github.com/aryankumar120/AWS-Pipeline-for-YouTube-Trend-Analysis', // <-- TODO: Replace with your live deployment URL.... will do later
      },
      {
        name: 'GitHub Repository',
        url: 'https://github.com/aryankumar120/AWS-Pipeline-for-YouTube-Trend-Analysis', // <-- TODO: Replace with your actual repo URL if different
      },
    ],
    // All seven of screenshots are showcased here
    images: [
      {
        src: '/projects/youtube.png',
        alt: 'Youtube Analysis Dashboard with Video Trends and Insights',
      },
      {
        src: '/projects/architecture.png',
        alt: 'AWS Architecture Diagram showing the data pipeline components',
      }
    ],
  },
  {
    title: 'Amazon Review Sentiment Analysis',
    description:
    'A Natural Language Processing (NLP) project comparing NLTK’s VADER and Hugging Face’s RoBERTa Transformer for sentiment classification on Amazon Fine Food Reviews.',
    techStack: [
      'Python',
      'Hugging Face Transformers',
      'NLTK',
      'Pandas',
      'Scikit-learn',
      'Matplotlib',
      'Seaborn',
      'Jupyter Notebook',
      'NLP',
      'Sentiment Analysis',
    ],
    date: 'July 2025', // <-- TODO: Update with your project date
    links: [
      {
        name: 'Live Demo',
        url: 'https://github.com/aryankumar120/Amazon-Fine-Food-Reviews', // <-- TODO: Replace with your live deployment URL
      },
      {
        name: 'GitHub Repository',
        url: 'https://github.com/aryankumar120/Amazon-Fine-Food-Reviews', // <-- TODO: Update with your actual repo URL
      },
    ],
    images: [
      { src: '/projects/model.png', alt: 'Model Performance Comparison' },
      { src: '/projects/sentiment-score.png', alt: 'Sentiment Score Distribution' },
      { src: '/projects/eda.png', alt: 'Exploratory Data Analysis' },
    ],
  },
  {
    // --- NEW REACT PORTFOLIO PROJECT ---
    title: 'Sales for Retail and Food Services in U.S.A.',
    description:
    'This project presents a detailed analysis and visualization of sales trends in the Retail and Food Services sectors across the United States.',    
    techStack: [
      'Python',
      'SQL',
      'PostgreSQL',
    ],
    date: 'March 2025', // <-- TODO: Update with your project date
    links: [
      {
        name: 'Live Demo',
        url: 'https://github.com/aryankumar120/Sales-for-Retail-and-Food-Services-in-USA', // <-- TODO: Update if this is the correct link
      },
      {
        name: 'GitHub Repository',
        url: 'https://github.com/aryankumar120/Sales-for-Retail-and-Food-Services-in-USA', // <-- TODO: Update with your actual repo URL
      },
    ],
    images: [
      { src: '/projects/usa.png', alt: 'USA Sales Analysis' },
      { src: '/projects/usa2.png', alt: 'USA Analysis' },
    ],
  },
  {
    // --- YOUTUBE CLONE PROJECT (FROM YOUR README) ---
    title: 'Cold Email Genertor',
    description:
    'Generative AI project designed to help Software and AI services companies send highly personalized cold emails to their potential clients.',
    techStack: [
      'Python',
      'Streamlit',
      'OpenAI GPT-4',
      'LangChain',
      'Generative AI',
      'Chromadb',
    ],
    date: 'December 2024', // <-- TODO: Update with your project date
    links: [
      {
        name: 'Live Demo',
        url: 'https://github.com/aryankumar120/Cold-Email-Generator', // <-- TODO: Replace with your live deployment URL
      },
      {
        name: 'GitHub Repository',
        url: 'https://github.com/aryankumar120/Cold-Email-Generator', // <-- TODO: Update if your repo name is different
      },
    ],
    images: [
      { src: '/projects/cold-email.png', alt: 'Cold Email Generator Page' },
      // Add more screenshots here if you have them!
    ],
  },
  {
    title: 'Hospital Emergency Room Dashboard',
    description:
    'This interactive ER dashboard dives deep into patient admissions, wait times, peak hours, referrals, and satisfaction scores to uncover critical insights that can help hospitals optimize efficiency and improve patient outcomes.',
    techStack: [
      'Python',
      'POWERBI',
    ],
    date: 'November 2024', // <-- TODO: Update with your project date
    links: [
      {
        name: 'Live Demo',
        url: 'https://github.com/aryankumar120/Hospital-ER-Dashboard', // <-- TODO: Replace with your live deployment URL
      },
      {
        name: 'GitHub Repository',
        url: 'https://github.com/aryankumar120/Hospital-ER-Dashboard', // <-- TODO: Update with your actual repo URL
      },
      ],
    images: [
      { src: '/projects/er1.png',alt: 'Dashboard 1 - Overview of ER Metrics'},
      { src: '/projects/er2.png',alt: 'Dashboard 2 - Patient Wait Times and Satisfaction'},
      { src: '/projects/er3.png',alt: 'Dashboard 3 - Patient Admissions and Referrals'},
      { src: '/projects/er4.png',alt: 'Dashboard 4 - Peak Hours and Resource Utilization'},
    ],
  },
];

// --- COMPONENT & INTERFACE DEFINITIONS ---
// Define interface for project prop
interface ProjectProps {
  title: string;
}

// This component dynamically renders the project details
const ProjectContent = ({ project }: { project: ProjectProps }) => {
  // Find the matching project data from the database
  const projectData = PROJECT_CONTENT.find((p) => p.title === project.title);

  if (!projectData) {
    return <div>Project details not available</div>;
  }

  return (
    <div className="space-y-10">
      {/* Header section with description */}
      <div className="rounded-3xl bg-[#F5F5F7] p-8 dark:bg-[#1D1D1F]">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
            <span>{projectData.date}</span>
          </div>

          <p className="text-secondary-foreground font-sans text-base leading-relaxed md:text-lg">
            {projectData.description}
          </p>

          {/* Tech stack */}
          <div className="pt-4">
            <h3 className="mb-3 text-sm tracking-wide text-neutral-500 uppercase dark:text-neutral-400">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {projectData.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="rounded-full bg-neutral-200 px-3 py-1 text-sm text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Links section */}
      {projectData.links && projectData.links.length > 0 && (
        <div className="mb-24">
          <div className="px-6 mb-4 flex items-center gap-2">
            <h3 className="text-sm tracking-wide text-neutral-500 dark:text-neutral-400">
              Links
            </h3>
            <Link className="text-muted-foreground w-4" />
          </div>
          <Separator className="my-4" />
          <div className="space-y-3">
            {projectData.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#F5F5F7] flex items-center justify-between rounded-xl p-4 transition-colors hover:bg-[#E5E5E7] dark:bg-neutral-800 dark:hover:bg-neutral-700"
              >
                <span className="font-light capitalize">{link.name}</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Images gallery */}
      {projectData.images && projectData.images.length > 0 && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            {projectData.images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-video overflow-hidden rounded-2xl"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// --- MAIN DATA EXPORT ---
// This is the data used by your main portfolio page.
export const data = [
   {
    category: 'AI & ML',
    title: 'AI Resume and Cover Letter Generator',
    src: '/projects/coverletter.png', // <-- TODO: Make sure you have a preview image at this path
    content: (
      // The `title` here MUST match the full title in PROJECT_CONTENT
      <ProjectContent project={{ title: 'AI Resume and Cover Letter Generator' }} />
    ),
  },
  {
    category: 'AWS & Data Engineering',
    title: 'AWS Pipeline for YouTube Trend Analysis',
    src: '/projects/youtube.png', // Use the main homepage screenshot for the preview
    content: (
      <ProjectContent project={{ title: 'AWS Pipeline for YouTube Trend Analysis' }} />
    ),
  },
  {
    category: 'GenAI & NLP',
    title: 'Amazon Review Sentiment Analysis',
    src: '/projects/model.png', // <-- TODO: Make sure you have a preview image at this path
    content: (
      <ProjectContent project={{ title: 'Amazon Review Sentiment Analysis' }} />
    ),
  },
  {
    category: 'Data Analysis & Visualization',
    title: 'Sales for Retail and Food Services in U.S.A.',
    src: '/projects/usa.png', // <-- TODO: Make sure you have a preview image at this path
    content: (
      <ProjectContent project={{ title: 'Sales for Retail and Food Services in U.S.A.' }} />
    ),
  },
  {
    category: 'GenAI & NLP',
    title: 'Cold Email Genertor',
    src: '/projects/cold-email.png', // <-- TODO: Make sure you have a preview image at this path
    content: (
      <ProjectContent project={{ title: 'Cold Email Genertor' }} />
    ),
  },
  {
    category: 'Data Visualization',
    title: 'Hospital Emergency Room Dashboard',
    src: '/projects/er1.png', // Placeholder image
    content: (
      <ProjectContent project={{ title: 'Hospital Emergency Room Dashboard' }} />
    ),
  },
];