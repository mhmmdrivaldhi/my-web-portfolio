import LogoLoop from '@/components/LogoLoop';
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiHtml5, SiCss3, SiPhp, SiBootstrap, SiGithub, SiJavascript, SiLaravel, SiNodedotjs, SiMysql, SiMongodb, SiRedis, SiPostgresql, SiDocker, SiVercel, SiRailway, SiGo, SiGin, SiLivewire, SiDaisyui } from 'react-icons/si';

const techLogos = [
    { node: <SiHtml5 />, title: "Hypertext Markup Language", href: "https://html.com" },
    { node: <SiPhp />, title: "Hypertext Preprocessor", href: "https://www.php.net" },
    { node: <SiCss3 />, title: "Cascading Style Sheets", href: "https://css.com" },
    { node: <SiBootstrap />, title: "Bootstrap CSS", href: "https://getbootstrap.com/docs/5.0/getting-started/introduction" },
    { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiGithub />, title: "GitHub", href: "https://github.com" },
    { node: <SiJavascript />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org/en" },
    { node: <SiMysql />, title: "MySQL", href: "https://www.mysql.com" },
    { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com" },
    { node: <SiLaravel />, title: "Laravel", href: "https://laravel.com" },
    { node: <SiRedis />, title: "Redis", href: "https://redis.io" },
    { node: <SiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org" },
    { node: <SiGo />, title: "Go", href: "https://golang.org" },
    { node: <SiDocker />, title: "Docker", href: "https://www.docker.com" },
    { node: <SiVercel />, title: "Vercel", href: "https://vercel.com" },
    { node: <SiRailway />, title: "Railway", href: "https://railway.app" },
    { node: <SiGin />, title: "Gin", href: "https://gin-gonic.com" },
    { node: <SiLivewire />, title: "Livewire", href: "https://laravel-livewire.com" },
    { node: <SiDaisyui />, title: "DaisyUI", href: "https://daisyui.com" },
];

function App() {
  return (
    <div style={{ height: '60px', position: 'relative', overflow: 'hidden'}}>
      <LogoLoop
        logos={techLogos}
        speed={120}
        direction="right"
        logoHeight={50}
        gap={50}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#ffffff"
        ariaLabel="Technology partners"
      />
    </div>
  );
}

export default App;