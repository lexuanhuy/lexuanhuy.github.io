import { FaReact, FaServer, FaDatabase, FaTools } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiDocker, SiGit } from 'react-icons/si';

const skillGroups = [
  {
    title: "FRONT_END",
    icon: FaReact,
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "SCSS"],
    color: "text-[#00f0ff]" // Cyan
  },
  {
    title: "BACK_END",
    icon: FaServer,
    skills: ["Node.js", "Express.js", "RESTful APIs", "Authentication"],
    color: "text-purple-400" // Purple
  },
  {
    title: "DATABASE",
    icon: FaDatabase,
    skills: ["MongoDB", "PostgreSQL", "Mongoose", "SQL Basics"],
    color: "text-amber-300" // Yellow/Amber
  },
  {
    title: "DEVOPS_TOOLS",
    icon: FaTools,
    skills: ["Git / GitHub", "Docker", "Vite", "CI/CD Pipeline"],
    color: "text-emerald-300" // Green
  },
];

export default function SkillsTerminal({ className }: { className?: string }) {
  return (
    <div className={`relative p-5 bg-[#080c14]/80 border border-[#00f0ff]/45 rounded-sm backdrop-blur-md shadow-[0_0_15px_rgba(0,240,255,0.15)] ${className}`}>
      {/* Các góc trang trí HUD */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#00f0ff]"></div>
      <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#00f0ff]"></div>
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[#00f0ff]"></div>
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#00f0ff]"></div>

      {/* Tiêu đề module */}
      <div className="mb-5 pb-2 border-b border-[#00f0ff]/20">
        <span className="font-mono text-xs uppercase tracking-widest text-[#00f0ff] font-bold">
          {"// SKILL_INDEX"}
        </span>
      </div>

      {/* Nội dung chia nhóm  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 font-mono text-xs">
        {skillGroups.map((group, index) => {
          const Icon = group.icon;
          return (
            <div key={index} className="space-y-3 border-l-2 border-[#00f0ff]/10 pl-3 group hover:border-[#00f0ff]/50 transition-all">
              <div className={`flex items-center gap-2 font-bold ${group.color}`}>
                <Icon size={16} className="shrink-0" />
                <span>{group.title}</span>
              </div>
              <ul className="space-y-1.5 text-slate-300 list-inside list-['-_'] pl-1">
                {group.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="hover:text-white transition-colors duration-200 cursor-default">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Dòng chú thích cuối */}
      <div className="mt-6 pt-3 border-t border-[#00f0ff]/20 text-right">
        <span className="text-[10px] font-mono text-slate-500">
          * Looking for new opportunities & challenges
        </span>
      </div>

    </div>
  );
}