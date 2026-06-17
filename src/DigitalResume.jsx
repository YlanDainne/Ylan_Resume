import { useEffect, useState } from 'react';
import {
  ArrowUpRight,
  Cake,
  CalendarDays,
  Code2,
  Github,
  GraduationCap,
  Loader2,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  School,
  Star,
  BriefcaseBusiness,
  UserRound,
  FileText,
  Globe,
  Award,
} from 'lucide-react';

const personalProfile = {
  name: 'Serge Ylan M. Soldano',
  age: 21,
  birthday: 'May 10, 2005',
  gender: 'Male',
  role: 'IT Student / Developer',
  location: 'Cebu, Philippines',
  email: 'sergeylan.soldano@example.com',
  facebook: 'https://www.facebook.com/soldano.serge.14',
  instagram: 'https://www.instagram.com/ylann_sldn/',
  gmail: 'soldanosy@gmail.com',
};

const educationTimeline = [
  { period: '2023 - Present', level: 'College', institution: 'Cebu Institute of Technology University', icon: GraduationCap },
  { period: '2021 - 2023', level: 'Senior High School', institution: 'Cebu Institute of Technology University', icon: School },
  { period: '2017 - 2021', level: 'Junior High School', institution: 'Cebu Institute of Technology University', icon: School },
  { period: '2011 - 2017', level: 'Elementary', institution: 'Pardo Elementary School', icon: School },
];

const techStack = [
  { name: 'C', tone: 'from-sky-500/90 to-blue-700/90' },
  { name: 'C#', tone: 'from-green-500/90 to-emerald-700/90' },
  { name: 'C++', tone: 'from-cyan-600/90 to-sky-800/90' },
  { name: 'Java', tone: 'from-orange-500/95 to-amber-700/90' },
  { name: 'JavaScript', tone: 'from-yellow-400/95 to-amber-500/90' },
  { name: 'HTML5', tone: 'from-orange-500/95 to-red-600/90' },
  { name: 'Kotlin', tone: 'from-violet-500/95 to-indigo-600/90' },
  { name: 'PHP', tone: 'from-indigo-400/90 to-violet-600/90' },
  { name: 'Python', tone: 'from-blue-500/95 to-sky-700/90' },
  { name: 'PowerShell', tone: 'from-blue-500/95 to-blue-700/90' },
  { name: 'Windows Terminal', tone: 'from-zinc-500/90 to-neutral-700/90' },
  { name: 'Bash Script', tone: 'from-slate-950 to-emerald-950' },
  { name: 'Netlify', tone: 'from-cyan-400/95 to-black' },
  { name: 'Django', tone: 'from-emerald-800/95 to-emerald-950' },
  { name: 'Apache', tone: 'from-red-600/95 to-red-700/90' },
  { name: 'Postgres', tone: 'from-blue-700/95 to-sky-900/90' },
  { name: 'MySQL', tone: 'from-sky-500/95 to-blue-700/90' },
  { name: 'Adobe Photoshop', tone: 'from-sky-400/95 to-blue-500/90' },
  { name: 'Canva', tone: 'from-cyan-400/95 to-teal-500/90' },
  { name: 'Figma', tone: 'from-orange-500/95 to-red-500/90' },
  { name: 'Notion', tone: 'from-black to-zinc-900' },
  { name: 'Gradle', tone: 'from-cyan-950 to-emerald-950' },
  { name: 'Jira', tone: 'from-blue-600/95 to-blue-900/90' },
  { name: 'Steam', tone: 'from-slate-950 to-sky-950' },
];

const githubUsernameSeed = 'YlanDainne';
const profileImageSrc = '/profile.jpg';

function formatStars(count) {
  return new Intl.NumberFormat('en-US').format(count ?? 0);
}

function SectionHeading({ eyebrow, title, description, icon: Icon }) {
  return (
    <div className="mb-6 flex flex-col gap-2">
      <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-400">
        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/30 text-zinc-300 shadow-inner">
          <Icon className="h-4 w-4" />
        </span>
        <span>{eyebrow}</span>
      </div>
      <div className="max-w-2xl space-y-1.5 mt-1">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
        <p className="text-sm leading-relaxed text-zinc-400">{description}</p>
      </div>
    </div>
  );
}

function SkeletonCard() {
  return (
    <div className="group rounded-2xl border border-zinc-800 bg-zinc-900/30 p-5 shadow-2xl">
      <div className="animate-pulse space-y-3">
        <div className="h-4 w-24 rounded-full bg-zinc-800" />
        <div className="h-5 w-3/4 rounded-full bg-zinc-800" />
        <div className="h-3.5 w-full rounded-full bg-zinc-800" />
        <div className="h-3.5 w-5/6 rounded-full bg-zinc-800" />
        <div className="flex items-center gap-2 pt-1">
          <div className="h-8 w-20 rounded-full bg-zinc-800" />
          <div className="h-8 w-24 rounded-full bg-zinc-800" />
        </div>
      </div>
    </div>
  );
}

function Interactive3DCard({ imageSrc, altText }) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;
    
    const factor = 12;
    const rotateX = -(y / (box.height / 2)) * factor;
    const rotateY = (x / (box.width / 2)) * factor;
    
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div 
      className="relative flex items-center justify-center w-full h-full select-none pt-6 pb-6 sm:pt-24 sm:pb-8 perspective-1200"
    >
      {/* Lanyard Strap */}
      <div 
        className="absolute top-[-250px] left-1/2 -translate-x-1/2 w-4 bg-zinc-800 h-[340px] z-0 overflow-hidden hidden sm:flex flex-col items-center justify-end shadow-[inset_0_0_6px_rgba(0,0,0,0.6)]"
        style={{
          transform: isHovered 
            ? `rotateY(${rotate.y * 0.3}deg) rotateX(${rotate.x * 0.3}deg)`
            : 'none',
          transition: 'transform 0.3s ease-out',
          transformOrigin: 'top center'
        }}
      >
        <span className="text-[6.5px] text-zinc-500 font-mono font-bold tracking-[0.25em] origin-center rotate-90 translate-y-[-12px] select-none whitespace-nowrap opacity-80">
          3D CARD · DESIGN
        </span>
      </div>

      {/* Metal clip */}
      <div 
        className="absolute top-[85px] left-1/2 -translate-x-1/2 w-4 h-6 bg-gradient-to-b from-zinc-700 via-zinc-600 to-zinc-800 rounded-sm border border-zinc-700 shadow-[0_4px_8px_rgba(0,0,0,0.3)] z-10 hidden sm:flex items-center justify-center"
        style={{
          transform: isHovered 
            ? `rotateY(${rotate.y * 0.6}deg) rotateX(${rotate.x * 0.6}deg)`
            : 'none',
          transition: 'transform 0.3s ease-out',
          transformOrigin: 'top center'
        }}
      >
        <div className="w-1.5 h-1.5 rounded-full bg-zinc-950 shadow-inner" />
      </div>

      {/* Ring connector */}
      <div 
        className="absolute top-[103px] left-1/2 -translate-x-1/2 w-7 h-7 rounded-full border-2 border-zinc-700 bg-transparent shadow-[0_2px_4px_rgba(0,0,0,0.2)] z-10 hidden sm:block"
        style={{
          transform: isHovered 
            ? `rotateY(${rotate.y * 0.8}deg) rotateX(${rotate.x * 0.8}deg) translateZ(5px)`
            : 'none',
          transition: 'transform 0.3s ease-out',
          transformOrigin: 'top center'
        }}
      />

      {/* Tilted Card */}
      <div
        className="relative z-20 transition-all duration-300 ease-out cursor-pointer mt-4 sm:mt-12 preserve-3d"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          boxShadow: isHovered 
            ? '0 30px 60px -15px rgba(0, 0, 0, 0.5)' 
            : '0 15px 30px -10px rgba(0, 0, 0, 0.4)'
        }}
      >
        {/* Card Frame */}
        <div 
          className="w-[16rem] sm:w-[17rem] bg-zinc-950 rounded-[1.8rem] border border-zinc-800 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
          style={{ transform: 'translateZ(15px)' }}
        >
          <div className="mx-auto w-10 h-2 rounded-full bg-zinc-900 border border-zinc-800/60 mb-3.5 shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]" />

          {/* Portrait Image */}
          <div className="relative overflow-hidden rounded-[1.2rem] border border-zinc-800 bg-zinc-900 shadow-inner">
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none z-10" />
            
            <img
              src={imageSrc}
              alt={altText}
              className="h-[15rem] sm:h-[16rem] w-full object-cover grayscale contrast-[1.15] brightness-[0.9] hover:grayscale-0 transition-all duration-777"
              onError={(event) => {
                event.currentTarget.style.display = 'none';
                const fallback = event.currentTarget.parentElement?.querySelector('[data-avatar-fallback]');
                if (fallback) fallback.style.display = 'flex';
              }}
            />
            <div data-avatar-fallback className="hidden h-[15rem] sm:h-[16rem] items-center justify-center bg-zinc-950 text-zinc-600">
              <UserRound className="h-16 w-16" />
            </div>
          </div>

          {/* Details */}
          <div className="mt-3.5 pb-1 text-center">
            <h3 className="text-xs font-bold tracking-wider text-zinc-100 uppercase">
              Serge Ylan M. Soldano
            </h3>
            <p className="text-[8.5px] font-semibold tracking-widest text-sky-500 uppercase mt-0.5">
              IT Student / Developer
            </p>
          </div>
        </div>

        {/* Dynamic Highlight Sheen */}
        <div 
          className="absolute inset-0 rounded-[1.8rem] pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${rotate.y * 8 + 50}% ${-rotate.x * 8 + 50}%, rgba(255, 255, 255, 0.08) 0%, transparent 60%)`,
            opacity: isHovered ? 1 : 0,
            transform: 'translateZ(20px)'
          }}
        />
      </div>
    </div>
  );
}

function TopIslandNav({ activeSection }) {
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Floating Logo Top-Left */}
      <div className="fixed left-4 sm:left-8 top-4 z-50 hidden sm:block">
        <a 
          href="#home" 
          className="text-xs font-bold uppercase tracking-[0.18em] text-white border border-zinc-800 bg-zinc-950/75 px-4 py-2.5 rounded-full hover:bg-zinc-800/80 shadow-lg backdrop-blur-xl transition-all duration-300"
        >
          soldanosy
        </a>
      </div>

      {/* Floating Links Top-Center/Right */}
      <div className="fixed left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:right-8 top-4 z-50 w-auto max-w-[calc(100vw-2rem)]">
        <nav className="flex items-center gap-0.5 rounded-full border border-zinc-800/80 bg-zinc-950/75 p-1 shadow-lg backdrop-blur-xl">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.label}
                href={item.href}
                className={`rounded-full px-2.5 sm:px-3 py-1.5 text-[11px] sm:text-xs font-medium transition-all duration-300 ${
                  isActive 
                    ? 'bg-zinc-800 text-white font-semibold shadow-inner' 
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/20'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
      </div>
    </>
  );
}

function FloatingScrollNav({ activeSection }) {
  const sections = ['home', 'about', 'portfolio', 'contact'];
  
  const handleScroll = (direction) => {
    const currentIdx = sections.indexOf(activeSection);
    let nextIdx = currentIdx;
    if (direction === 'up' && currentIdx > 0) {
      nextIdx = currentIdx - 1;
    } else if (direction === 'down' && currentIdx < sections.length - 1) {
      nextIdx = currentIdx + 1;
    }
    
    if (nextIdx !== currentIdx) {
      const element = document.getElementById(sections[nextIdx]);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const currentIdx = sections.indexOf(activeSection);
  const canScrollUp = currentIdx > 0;
  const canScrollDown = currentIdx < sections.length - 1;

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-3">
      <button
        onClick={() => handleScroll('up')}
        disabled={!canScrollUp}
        className={`flex h-12 w-12 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950/80 text-zinc-400 backdrop-blur-md shadow-lg transition-all duration-300 ${
          canScrollUp 
            ? 'hover:border-zinc-600 hover:text-white cursor-pointer hover:-translate-y-0.5' 
            : 'opacity-20 cursor-not-allowed'
        }`}
        aria-label="Scroll Up"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </button>
      <button
        onClick={() => handleScroll('down')}
        disabled={!canScrollDown}
        className={`flex h-12 w-12 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950/80 text-zinc-400 backdrop-blur-md shadow-lg transition-all duration-300 ${
          canScrollDown 
            ? 'hover:border-zinc-600 hover:text-white cursor-pointer hover:translate-y-0.5' 
            : 'opacity-20 cursor-not-allowed'
        }`}
        aria-label="Scroll Down"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>
  );
}

export default function DigitalResume() {
  const githubUsername = githubUsernameSeed;
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [activeSection, setActiveSection] = useState('home');
  const [activeTab, setActiveTab] = useState('projects');
  const [scrollTop, setScrollTop] = useState(0);
  const projectCount = repos.length;

  const handleScroll = (e) => {
    setScrollTop(e.currentTarget.scrollTop);
  };

  useEffect(() => {
    const img = new Image();
    img.src = profileImageSrc;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const size = 128; // standard favicon size
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        // Draw circular clip
        ctx.beginPath();
        ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
        ctx.clip();
        
        // Draw and crop image to fit
        const imgWidth = img.width;
        const imgHeight = img.height;
        const imgRatio = imgWidth / imgHeight;
        let drawWidth = size;
        let drawHeight = size;
        let offsetX = 0;
        let offsetY = 0;
        
        if (imgWidth > imgHeight) {
          // Landscape
          drawWidth = size * imgRatio;
          offsetX = -(drawWidth - size) / 2;
        } else {
          // Portrait
          drawHeight = size / imgRatio;
          offsetY = -(drawHeight - size) / 2;
        }
        
        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
        
        // Update favicon link
        let link = document.querySelector("link[rel~='icon']");
        if (!link) {
          link = document.createElement('link');
          link.rel = 'icon';
          document.getElementsByTagName('head')[0].appendChild(link);
        }
        link.type = 'image/png';
        link.href = canvas.toDataURL('image/png');
      }
    };
  }, []);

  useEffect(() => {
    const wrapper = document.getElementById('scroll-wrapper');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { root: wrapper, threshold: 0.3, rootMargin: '-10% 0px -40% 0px' }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    async function loadRepositories() {
      try {
        setIsLoading(true);
        setError('');

        const response = await fetch(`https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=8`, {
          signal: controller.signal,
          headers: {
            Accept: 'application/vnd.github+json',
          },
        });

        if (!response.ok) {
          throw new Error('Unable to load repositories right now.');
        }

        const data = await response.json();
        const visibleRepos = data
          .filter((repository) => !repository.fork)
          .filter((repository) => !['django-pos-system', 'YlanDainne'].includes(repository.name))
          .sort((left, right) => right.stargazers_count - left.stargazers_count)
          .slice(0, 3);

        setRepos(visibleRepos);
      } catch (fetchError) {
        if (fetchError.name !== 'AbortError') {
          setError(fetchError.message || 'Failed to fetch repositories.');
          setRepos([]);
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    }

    loadRepositories();

    return () => controller.abort();
  }, [githubUsername]);

  return (
    <main className="h-screen h-[100dvh] w-screen overflow-hidden bg-[#090909] text-zinc-100 font-sans relative">
      
      {/* Parallax Background Grid */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 [background-size:72px_72px] [background-image:linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)]"
        style={{
          transform: `translateY(${-scrollTop * 0.12}px) translateZ(0)`,
          willChange: 'transform',
          height: '250%' // Extra height to cover scrolling translations
        }}
      />

      {/* Parallax ambient glows */}
      <div 
        className="pointer-events-none absolute top-[-100px] left-[10%] w-[35rem] h-[35rem] bg-sky-900/10 rounded-full blur-[120px] z-0"
        style={{ transform: `translateY(${scrollTop * 0.15}px) translateZ(0)`, willChange: 'transform' }}
      />
      <div 
        className="pointer-events-none absolute top-[30%] right-[5%] w-[40rem] h-[40rem] bg-purple-950/10 rounded-full blur-[140px] z-0"
        style={{ transform: `translateY(${scrollTop * 0.05}px) translateZ(0)`, willChange: 'transform' }}
      />
      <div 
        className="pointer-events-none absolute top-[70%] left-[20%] w-[35rem] h-[35rem] bg-indigo-950/15 rounded-full blur-[130px] z-0"
        style={{ transform: `translateY(${scrollTop * -0.05}px) translateZ(0)`, willChange: 'transform' }}
      />

      <TopIslandNav activeSection={activeSection} />
      <FloatingScrollNav activeSection={activeSection} />

      {/* Snap Scroll Wrapper Container */}
      <div 
        id="scroll-wrapper"
        onScroll={handleScroll}
        className="h-screen h-[100dvh] w-screen overflow-y-auto md:snap-y md:snap-mandatory scroll-smooth relative z-10"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* HOME SECTION */}
          <section 
            id="home" 
            className="min-h-screen md:h-screen md:h-[100dvh] w-full flex items-center pt-24 pb-12 md:pt-28 md:pb-16 md:snap-start md:snap-always relative"
          >
            <div className="grid w-full gap-8 items-center lg:grid-cols-[1.2fr_0.8fr] pt-12 lg:pt-0">
              <div className="relative flex flex-col justify-center space-y-6 pt-4 lg:pt-0">
                
                {/* Available status */}
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-400">
                  <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                  <span>Available for work</span>
                </div>

                {/* Main giant header */}
                <div className="space-y-1">
                  <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold uppercase leading-[0.85] tracking-[-0.05em] text-white">
                    Frontend
                  </h1>
                  <h2 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold uppercase leading-[0.85] tracking-[-0.05em] text-zinc-600">
                    Developer
                  </h2>
                </div>

                {/* Sub-role text */}
                <div className="text-sm font-semibold tracking-wider text-sky-500 font-mono">
                  IT Student / Developer
                </div>

                {/* Main summary bio description */}
                <p className="max-w-lg text-sm sm:text-base leading-relaxed text-zinc-400">
                  Creating modern websites with clean, responsive, and elegant designs. Turning ideas and designs into engaging and easy-to-use digital experiences.
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {['TypeScript', 'React.js', 'Tailwind'].map((tech) => (
                    <span 
                      key={tech} 
                      className="rounded-lg border border-zinc-800 bg-zinc-900/30 px-4 py-2 text-xs font-semibold tracking-wide text-zinc-300 shadow-inner hover:bg-zinc-800/50 hover:text-white transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Footer notes */}
                <div className="pt-8 space-y-2 font-mono text-xs tracking-wide text-zinc-500">
                  <div className="flex items-center gap-2">
                    <span className="text-zinc-400">↓</span>
                    <span>explore my work below</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-zinc-400">↗</span>
                    <span>open to full-time & freelance opportunities</span>
                  </div>
                </div>

              </div>

              {/* ID Card hanging */}
              <div className="flex items-center justify-center">
                <Interactive3DCard imageSrc={profileImageSrc} altText={`${personalProfile.name} portrait`} />
              </div>
            </div>

            {/* Scroll Down bottom center decoration */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-20 pointer-events-none opacity-50">
              <span className="text-[9px] uppercase tracking-[0.25em] font-bold text-zinc-500">scroll</span>
              <span className="text-xs text-zinc-500 animate-bounce">↓</span>
            </div>
          </section>

          {/* ABOUT SECTION */}
          <section 
            id="about" 
            className="min-h-screen md:h-screen md:h-[100dvh] w-full flex flex-col justify-center py-16 md:py-24 md:snap-start md:snap-always relative"
          >
            <div className="grid w-full gap-6 md:gap-8 items-center lg:grid-cols-[1.2fr_0.8fr] pt-16 lg:pt-0">
              <div className="flex flex-col gap-6 pt-4 md:pt-16 sm:pt-20 lg:pt-12">
                <SectionHeading
                  eyref="about"
                  eybar="About Me"
                  eyebrow="About Me"
                  title="Serge Ylan M. Soldano"
                  description="IT Student and Developer based in Cebu, Philippines"
                  icon={UserRound}
                />

                <p className="text-zinc-400 text-sm leading-relaxed max-w-xl">
                  I am a passionate IT student and frontend developer at Cebu Institute of Technology University. 
                  My focus is on designing and building clean, responsive, and visually powerful web interfaces. 
                  I aim to translate creative designs and technical code into seamless, enjoyable user experiences.
                </p>

                {/* CV and Portfolio links */}
                <div className="flex flex-wrap gap-3 pt-2">
                  <a 
                    href="/Serge_Ylan_Soldano_CV.pdf"
                    download="Serge_Ylan_Soldano_CV.pdf"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-xs font-bold text-zinc-950 shadow-lg hover:bg-zinc-200 transition-all duration-300 hover:-translate-y-0.5 animate-pulse-subtle"
                  >
                    <FileText className="h-4 w-4" />
                    Download CV
                  </a>
                  <a 
                    href="#portfolio"
                    className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-transparent px-6 py-3 text-xs font-bold text-white hover:bg-zinc-900 hover:border-zinc-700 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                    View Projects
                  </a>
                </div>
              </div>

              {/* Circle portrait & Quote Card */}
              <div className="flex flex-col items-center justify-center gap-6 pt-12 lg:pt-0">
                <div className="relative">
                  {/* Spotlight shadow rings */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-sky-500/20 to-purple-500/20 blur-xl -z-10 scale-105" />
                  
                  <div className="w-40 h-40 sm:w-56 sm:h-56 rounded-full border border-zinc-800 p-2 bg-zinc-950/90 shadow-2xl flex items-center justify-center">
                    <div className="w-full h-full rounded-full overflow-hidden border border-zinc-800">
                      <img 
                        src={profileImageSrc} 
                        alt={`${personalProfile.name} portrait`} 
                        className="w-full h-full object-cover grayscale contrast-[1.1] hover:grayscale-0 transition-all duration-700"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          const fallback = e.currentTarget.parentElement?.querySelector('[data-about-fallback]');
                          if (fallback) fallback.style.display = 'flex';
                        }}
                      />
                      <div data-about-fallback className="hidden w-full h-full items-center justify-center bg-zinc-900 text-zinc-500">
                        <UserRound className="h-12 w-12 sm:h-16 sm:w-16" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Monospace Quote Card placed below portrait */}
                <div className="border border-zinc-800 bg-zinc-900/10 p-4 rounded-xl max-w-xs sm:max-w-sm shadow-inner">
                  <blockquote className="border-l-4 border-sky-500/50 pl-3 text-xs italic leading-relaxed text-zinc-300 font-mono">
                    "Turning ideas into clean, modern, and meaningful digital experiences. Design should feel intentional, readable, and personal."
                  </blockquote>
                </div>
              </div>

              {/* Stats Widgets */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mt-4 md:mt-6 w-full col-span-full">
                {[
                  { title: 'PROJECTS', count: projectCount, icon: Code2, href: '#portfolio' },
                  { title: 'CERTIFICATES', count: 4, icon: Award, href: '#portfolio' },
                  { title: 'COMPLETED WORKS', count: projectCount, icon: Globe, href: '#portfolio' },
                ].map((stat) => (
                  <a
                    key={stat.title}
                    href={stat.href}
                    className="flex items-center justify-between rounded-2xl border border-zinc-800/80 bg-zinc-950/60 p-3.5 md:p-4 hover:border-zinc-700 hover:bg-zinc-900/20 transition-all duration-300 cursor-pointer shadow-md group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/50 text-zinc-400 group-hover:text-white transition-colors">
                        <stat.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-500">{stat.title}</p>
                        <p className="text-lg font-bold text-white mt-0.5">{stat.count}</p>
                      </div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-zinc-600 group-hover:text-zinc-300 transition-colors" />
                  </a>
                ))}
              </div>

            </div>
          </section>

          {/* PORTFOLIO SECTION */}
          <section 
            id="portfolio" 
            className="min-h-screen md:h-screen md:h-[100dvh] w-full flex flex-col justify-center py-16 md:py-24 md:snap-start md:snap-always relative"
          >
            <div className="text-center max-w-xl mx-auto mb-6 md:mb-8 pt-16 md:pt-0">
              <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl uppercase">
                Portfolio Showcase
              </h2>
              <p className="text-sm text-zinc-400 mt-2">
                Explore my journey through projects, certifications, and technical expertise.
              </p>
            </div>

            {/* Tab Selector capsule */}
            <div className="flex justify-center mb-8">
              <div className="flex p-1 rounded-full border border-zinc-800 bg-zinc-950/90 shadow-inner">
                {[
                  { id: 'projects', label: 'Projects' },
                  { id: 'certificates', label: 'Certificates' },
                  { id: 'tech', label: 'Tech Stack' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`rounded-full px-5 py-2 text-xs font-semibold tracking-wide transition-all duration-300 ${
                      activeTab === tab.id 
                        ? 'bg-zinc-800 text-white shadow' 
                        : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Panels with internal scroll constraint to guarantee single page budget */}
            <div className="md:max-h-[50vh] md:overflow-y-auto pr-1 flex flex-col">
              
              {/* PROJECTS TAB */}
              {activeTab === 'projects' && (
                <>
                  {isLoading ? (
                    <div className="grid gap-6 md:grid-cols-3 flex-1">
                      {Array.from({ length: 3 }).map((_, index) => (
                        <SkeletonCard key={index} />
                      ))}
                    </div>
                  ) : error ? (
                    <div className="rounded-2xl border border-rose-955 bg-rose-955/25 p-5 text-sm text-rose-400 max-w-md mx-auto text-center w-full shadow-lg">
                      {error}
                    </div>
                  ) : repos.length === 0 ? (
                    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/20 p-5 text-sm text-zinc-400 max-w-md mx-auto text-center w-full">
                      No public repositories found.
                    </div>
                  ) : (
                    <div className="grid gap-6 md:grid-cols-3 flex-1 items-stretch">
                      {repos.map((repository) => (
                        <article
                          key={repository.id}
                          className="group relative flex flex-col justify-between rounded-2xl border border-zinc-800/80 bg-zinc-950/50 p-5 shadow-2xl hover:border-zinc-700/80 transition-all duration-300"
                        >
                          <div>
                            <div className="flex items-start justify-between gap-3">
                              <div>
                                <p className="text-[9px] uppercase tracking-[0.2em] text-sky-500 font-bold font-mono">Repository</p>
                                <h3 className="mt-1 text-base font-bold text-white group-hover:text-sky-400 transition-colors">{repository.name}</h3>
                              </div>
                              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/30 text-zinc-400 transition-colors group-hover:border-zinc-700 group-hover:text-white">
                                <Github className="h-4 w-4" />
                              </div>
                            </div>

                            <p className="mt-4 text-xs leading-relaxed text-zinc-400 line-clamp-3">
                              {repository.description || 'No description provided for this repository.'}
                            </p>
                          </div>

                          <div className="mt-6 pt-4 border-t border-zinc-900 flex flex-col gap-3">
                            <div className="flex flex-wrap gap-2 text-[10px] text-zinc-400">
                              <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-800 bg-zinc-900/20 px-2.5 py-1">
                                <Star className="h-3.5 w-3.5 text-amber-500" />
                                {formatStars(repository.stargazers_count)} Stars
                              </span>
                              <span className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/20 px-2.5 py-1 font-mono">
                                {repository.language || 'Unknown'}
                              </span>
                            </div>
                            
                            <a
                              href={repository.html_url}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1.5 self-start rounded-full border border-zinc-800 bg-zinc-900/50 px-3.5 py-2 text-xs font-semibold text-white hover:bg-zinc-800 hover:border-zinc-600 transition-all duration-300 hover:-translate-y-0.5"
                            >
                              View Code
                              <ArrowUpRight className="h-3.5 w-3.5" />
                            </a>
                          </div>
                        </article>
                      ))}
                    </div>
                  )}
                </>
              )}

              {/* CERTIFICATES TAB */}
              {activeTab === 'certificates' && (
                <div className="max-w-2xl mx-auto w-full flex-1 py-2">
                  <div className="relative border-l border-zinc-800 ml-4 md:ml-6 space-y-6">
                    {educationTimeline.map((item, idx) => (
                      <div key={idx} className="relative pl-8 md:pl-10">
                        {/* Timeline node */}
                        <div className="absolute left-[-13px] md:left-[-17px] top-1.5 flex h-6 w-6 md:h-8 md:w-8 items-center justify-center rounded-full border border-zinc-800 bg-zinc-955 text-zinc-400">
                          <item.icon className="h-3.5 w-3.5 md:h-4.5 md:w-4.5" />
                        </div>
                        
                        <div className="rounded-xl border border-zinc-800/80 bg-zinc-950/45 p-4 shadow-2xl hover:border-zinc-700/85 transition-all">
                          <span className="text-[10px] font-bold text-sky-500 uppercase tracking-widest font-mono">
                            {item.period}
                          </span>
                          <h3 className="mt-1 text-sm font-bold text-white">
                            {item.level}
                          </h3>
                          <p className="mt-1 text-xs text-zinc-400">
                            {item.institution}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TECH STACK TAB */}
              {activeTab === 'tech' && (
                <div className="max-w-3xl mx-auto flex flex-wrap gap-2.5 justify-center items-center py-6 flex-1">
                  {techStack.map((skill, idx) => (
                    <div
                      key={skill.name}
                      className={`inline-flex items-center rounded-full border border-zinc-800 bg-gradient-to-br px-4 py-2 text-xs font-semibold tracking-wider shadow-md hover:border-zinc-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${skill.tone} text-white`}
                      style={{ animationDelay: `${(idx % 4) * 0.05}s` }}
                    >
                      {skill.name}
                    </div>
                  ))}
                </div>
              )}

            </div>
          </section>

          {/* CONTACT SECTION */}
          <section 
            id="contact" 
            className="min-h-screen md:h-screen md:h-[100dvh] w-full flex flex-col justify-center py-16 md:py-24 md:snap-start md:snap-always relative"
          >
            <div className="text-center max-w-xl mx-auto mb-6 md:mb-8 pt-16 md:pt-0">
              <SectionHeading
                eyebrow="Contact"
                title="Let’s Connect"
                description="Drop me a message or find me on social platforms."
                icon={Mail}
              />
            </div>

            <div className="max-w-xl mx-auto w-full grid gap-4">
              {[
                { label: 'Facebook', href: personalProfile.facebook, icon: Facebook, desc: 'Connect with me on Facebook' },
                { label: 'Instagram', href: personalProfile.instagram, icon: Instagram, desc: 'Follow me on Instagram' },
                { label: 'Gmail', href: `mailto:${personalProfile.gmail}`, icon: Mail, desc: 'Send an email to my inbox' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.label === 'Gmail' ? '_self' : '_blank'}
                  rel={social.label === 'Gmail' ? undefined : 'noreferrer'}
                  className="inline-flex items-center justify-between rounded-2xl border border-zinc-800/80 bg-zinc-950/50 px-6 py-4 hover:border-zinc-700 hover:bg-zinc-900/20 transition-all duration-300 hover:-translate-y-0.5 shadow-lg group"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/30 text-zinc-400 group-hover:text-white transition-colors">
                      <social.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">{social.label}</p>
                      <p className="text-xs text-zinc-500 mt-0.5">{social.desc}</p>
                    </div>
                  </div>
                  <ArrowUpRight className="h-4.5 w-4.5 text-zinc-600 group-hover:text-zinc-300 transition-colors" />
                </a>
              ))}
            </div>

            {/* Quick footer card */}
            <div className="mt-6 md:mt-10 max-w-xl mx-auto w-full rounded-2xl border border-zinc-800 bg-zinc-950/20 p-4 text-center shadow-inner">
              <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-500 font-bold font-mono">Location & Information</p>
              <p className="mt-2 text-xs leading-relaxed text-zinc-400">
                Cebu, Philippines · IT Student / Developer · CIT University
              </p>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
