const timelineData = [
  { year: "2025", role: "Senior Frontend Dev", company: "TechCorp", details: "Leading UI modernization initiative..." },
  { year: "2023", role: "Senior Frontend Dev", company: "InnovateHub", details: "Developed complex financial dashboard..." },
  { year: "2020", role: "Fullstack Developer", company: "WebSolutions", details: "Built scalable e-commerce platform..." },
  { year: "2018", role: "Junior Web Developer", company: "StartUp Inc", details: "Maintained client websites, implemented features..." },
];

export default function AboutTimelineGrid() {
  return (
    <div className="relative p-6 bg-[#080c14]/80 border border-[#00f0ff]/45 rounded-sm backdrop-blur-md">
       {/* Tiêu đề */}
      <div className="mb-12 text-center">
        <span className="font-mono text-xs uppercase tracking-widest text-[#00f0ff] font-bold">{"// PROFESSIONAL_PATH_OVERVIEW"}</span>
      </div>

      {/* Lưới timeline (Grid layout) */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-mono text-xs">
        {/* Đường kẻ ngang mờ làm trục */}
        <div className="absolute left-0 right-0 top-[2px] h-px bg-[#00f0ff]/10 hidden md:block"></div>

        {timelineData.map((item, index) => (
          <div key={index} className="relative group flex flex-col">
            {/* Điểm mốc trên trục (Dot) - chỉ hiện trên màn hình lớn */}
            <div className="absolute -top-[5px] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#00f0ff] ring-4 ring-[#080c14] hidden md:block group-hover:animate-ping"></div>
             
            {/* Mốc thời gian */}
            <div className={`text-emerald-300 font-bold text-center mb-4 ${index % 2 === 0 ? 'md:-translate-y-8' : 'md:translate-y-8'}`}>{item.year}</div>

            {/* Card nội dung */}
            <div className="bg-[#111827]/50 p-5 rounded border border-[#00f0ff]/10 group-hover:border-[#00f0ff]/50 transition-all flex-grow shadow-[0_0_10px_rgba(0,240,255,0.05)] hover:shadow-[0_0_20px_rgba(0,240,255,0.1)]">
                <div className="mb-1">
                    <h3 className="text-[#00f0ff] font-semibold text-sm">{item.role}</h3>
                    <span className="text-slate-400 text-[10px]">{item.company}</span>
                </div>
                <p className="text-slate-300 text-xs leading-relaxed">{item.details}</p>
            </div>
             
            {/* Mũi tên chỉ hướng */}
            <div className={`absolute -bottom-3 left-1/2 -translate-x-1/2 text-[#00f0ff]/30 rotate-90 md:hidden`}>▼</div>
          </div>
        ))}
      </div>
    </div>
  );
}