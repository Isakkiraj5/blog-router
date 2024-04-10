import './App.css';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import CardList from './Card'; 
import { useState } from 'react';

function App() {
  const [data, setData] = useState([ {
    img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/top-ways-to-assess-soft-skills-in-full-stack-developers.webp",
    title: "Top Ways to Assess Soft Skills in Full Stack Developers in 2024",
    description:
      "When you’re hiring a full-stack developer, what are the most important things you look for?",

    content: "Full Stack Development",
  },
  {
    img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Full-Stack-Developer-vs-Software-Engineer-.webp",
    title: "Top Differences: Full Stack Developer vs Software Engineer 2024",
    description:
      "A Full Stack Developer is a tech all-rounder. They work on both the front and",
   
    content: "Full Stack Development",
  },
  {
    img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Horizontal-vs-Vertical-Scaling-for-Efficient-System-Design.webp",
    title: "Horizontal vs Vertical Scaling for Efficient System Design",
    description:
      "In the world of system design, envision a digital skyscraper – a multifaceted structure built",
   
    content: "Full Stack Development",
  },
  {
    img: "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-Books-to-Learn-Full-Stack-Development.webp",
    title: "Best Books to Learn Full-Stack Development",
    description:
      "Are you interested in becoming a full-stack developer but not sure where to start? In",
    
    content: "Full Stack Development",
  },
  {
    img: "https://www.guvi.in/blog/wp-content/uploads/2023/10/Featured-Image-top-product-based-companies-for-full-stack-developers.webp",
    title: "Top 10 Product-Based Companies for Full-Stack Developers [2024]",
    description:
      "In the dynamic landscape of technology, full-stack developers are the architects of the digital world,",
    
    content: "Full Stack Development",
  },
  {
    img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp",
    title: "Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
    description:
      "Are you someone who’s not interested in coding, but wants to get placed in tech",
   
    content: "Data Science",
  },
  {
    img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-1-2048x1024.webp",
    title: "Impact of Certification Programs on Hiring Data Scientists",
    description:
      "Data scientists are the creators behind transforming the raw data into edible data insights. These",
   
    content: "Data Science",
  },
  {
    img: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Top-Product-Based-Companies-for-Data-Scientists.webp",
    title: "Top Product-Based Companies for Data Scientists in 2024",
    description:
      "We all know about the kind of buzz surrounding data science right now, it is",
   
    content: "Data Science",
  },
  {
    img: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Useful-Python-Libraries-and-Tools-For-Data-Science-Beginners.webp",
    title: "Useful Python Libraries & Tools for Data Science Beginners",
    description:
      "In a world filled with information, knowing how to understand and use data is super",
   
    content: "Data Science",
  },
  {
    img: "https://www.guvi.in/blog/wp-content/uploads/2023/08/Data-Science-project-showcase.webp",
    title:
      "Extraordinary Data Science Projects for Beginners As Well as Veterans",
    description:
      "As the demand for data and the people that can conquer it, i.e. Data Scientists",
   
    content: "Data Science",
  },
  {//
    img: "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
    title: "Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
    description:
      "In the rapidly evolving field of cybersecurity, there is a common misconception that coding skills",
    
    content: "Cyber Security",
  },
  
  {//
    img: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
    title: "What Is Hacking? Types of Hacking & More",
    description:
      "Have you ever wondered what hacking is all about? It’s a big deal in today’s",
    
    content: "Cyber Security",
  },

  {
    img: "https://www.guvi.in/blog/wp-content/uploads/2021/03/The-Ultimate-%E2%80%A8Cybersecurity-Roadmap-for-Beginners.webp",
    title: "The Ultimate Cybersecurity Roadmap for Beginners",
    description:
      "Cybersecurity jobs are also one of the most handsomely paying jobs in recent times. Furthermore,",
    
    content: "Cyber Security",
  },

  {
    img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Machine-Learning-Engineer-Resume-Guide.webp",
    title: "Machine Learning Engineer Resume Guide: 11 Important Things To Include!",
    description:
      "The current technological era is full of competition and those who have profound skillset are",
   
    content: "Career",
  },
  {
    img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/top-product-based-companies-for-ai-freshers.webp",
    title: "Top 13 Product Based Companies for AI Freshers",
    description:
      "Artificial intelligence (AI) has revolutionized various industries, and the demand for AI professionals is at",
    
    content: "Career",
  },

  ]);


  const location = useLocation();

  return (
    <>
      <div className='header'>
        <Link to={'/'} className={location.pathname === '/' ? 'active-link' : ''}>All</Link>
        <Link to={'/fullstack'} className={location.pathname === '/fullstack' ? 'active-link' : ''}>Full Stack Development</Link>
        <Link to={'/datascience'} className={location.pathname === '/datascience' ? 'active-link' : ''}>Data Science</Link>
        <Link to={'/cybersecurity'} className={location.pathname === '/cybersecurity' ? 'active-link' : ''}>Cyber Security</Link>
        <Link to={'/career'} className={location.pathname === '/career' ? 'active-link' : ''}>Career</Link>
      </div>

      <Routes>
      <Route path='/' element={<CardList data={data} />} />
        <Route path='/fullstack' element={<CardList data={data.filter(item => item.content === 'Full Stack Development')} />} />
        <Route path='/datascience' element={<CardList data={data.filter(item => item.content === 'Data Science')} />} />
        <Route path='/cybersecurity' element={<CardList data={data.filter(item => item.content === 'Cyber Security')} />} />
        <Route path='/career' element={<CardList data={data.filter(item => item.content === 'Career')} />} />
      </Routes>
    </>
  );
}

export default App;
