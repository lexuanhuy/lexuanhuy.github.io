// File: components/AboutTimelineVertical.tsx
const timelineData = [
  { year: "2025", role: "Senior Frontend Dev", company: "TechCorp", details: "Leading UI modernization initiative..." },
  { year: "2023", role: "Senior Frontend Dev", company: "InnovateHub", details: "Developed complex financial dashboard..." },
  { year: "2020", role: "Fullstack Developer", company: "WebSolutions", details: "Built scalable e-commerce platform..." },
  { year: "2018", role: "Junior Web Developer", company: "StartUp Inc", details: "Maintained client websites, implemented features..." },
];

export default function AboutTimelineVertical() {
  return (
    <div className="relative p-6 bg-[#080c14]/80 border border-[#00f0ff]/45 rounded-sm backdrop-blur-md max-w-3xl mx-auto">
      {/* Tiêu đề */}
      <div className="mb-8 pb-3 border-b border-[#00f0ff]/20">
        <span className="font-mono text-xs uppercase tracking-widest text-[#00f0ff] font-bold">{"// CAREER_DEPLOYMENT_LOGS"}</span>
      </div>

      {/* Trục thời gian dọc */}
      <div className="relative pl-10 space-y-8 font-mono text-xs">
        {/* Đường kẻ dọc chính */}
        <div className="absolute left-3 top-3 bottom-3 w-0.5 bg-[#00f0ff]/20"></div>

        {timelineData.map((item, index) => (
          <div key={index} className="relative group">
            {/* Dấu chấm trạng thái (Dot) */}
            <div className="absolute -left-7 top-1 w-6 h-6 rounded-full border-2 border-[#00f0ff] bg-[#080c14] flex items-center justify-center group-hover:scale-110 transition-transform">
                <div className="w-2 h-2 rounded-full bg-[#00f0ff] animate-pulse"></div>
            </div>

            {/* Mốc thời gian */}
            <div className="text-emerald-300 font-bold tracking-wider mb-1">{item.year}</div>

            {/* Nội dung card nhỏ gọn */}
            <div className="bg-[#111827]/50 p-4 rounded border border-[#00f0ff]/10 group-hover:border-[#00f0ff]/50 transition-colors">
                <div className="flex justify-between items-start mb-1">
                    <h3 className="text-[#00f0ff] font-semibold text-sm">{item.role}</h3>
                    <span className="text-slate-400 text-[10px]">{item.company}</span>
                </div>
                <p className="text-slate-300 text-xs leading-relaxed">{item.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}