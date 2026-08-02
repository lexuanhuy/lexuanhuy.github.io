export default function QuickContact({ className }: { className?: string }) {
  return (
    <div className={`relative p-5 bg-[#080c14]/80 border border-[#00f0ff]/45 rounded-sm backdrop-blur-md shadow-[0_0_15px_rgba(0,240,255,0.15)] ${className}`}>
      <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#00f0ff]"></div>
      <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#00f0ff]"></div>
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[#00f0ff]"></div>
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#00f0ff]"></div>

      <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#00f0ff]/20">
        <span className="font-mono text-xs uppercase tracking-widest text-[#00f0ff] font-bold">
          {'// QUICK_CONTACT'}
        </span>
        <span className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          ONLINE
        </span>
      </div>

      <div className="space-y-2.5 font-mono text-xs text-slate-300">
        <div className="flex flex-col sm:flex-row sm:items-center gap-1">
          <span className="text-purple-400">const</span>
          <span className="text-[#00f0ff]">location</span>
          <span className="text-slate-500">=</span>
          <span className="text-emerald-300">{`"Ho Chi Minh City, VN"`}</span>;
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-1">
          <span className="text-purple-400">const</span>
          <span className="text-[#00f0ff]">status</span>
          <span className="text-slate-500">=</span>
          <span className="text-amber-300">{`"Available for Hire"`}</span>;
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-1">
          <span className="text-purple-400">const</span>
          <span className="text-[#00f0ff]">email</span>
          <span className="text-slate-500">=</span>
          <a
            href="mailto:lexuanhuy1994@gmail.com"
            className="text-pink-400 hover:underline truncate"
          >
            {`"lexuanhuy1994@gmail.com"`}
          </a>;
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-1">
          <span className="text-purple-400">const</span>
          <span className="text-[#00f0ff]">phone</span>
          <span className="text-slate-500">=</span>
          <a
            href="tel:+84977221643"
            className="text-amber-400 hover:underline truncate"
          >
            {`"+84 977 221 643"`}
          </a>;
        </div>
      </div>

      <div className="mt-5 pt-3 border-t border-[#00f0ff]/20 flex items-center justify-between">
        <span className="text-[10px] font-mono text-slate-400">
          * Drop a message to connect
        </span>
        <a
          href="mailto:lexuanhuy1994@gmail.com"
          className="relative inline-flex items-center px-4 py-1.5 text-xs font-mono text-[#00f0ff] border border-[#00f0ff]/60 bg-[#00f0ff]/10 hover:bg-[#00f0ff] hover:text-black transition-all duration-300 group"
        >
          <span>SEND_EMAIL()</span>
        </a>
      </div>
    </div>
  );
}