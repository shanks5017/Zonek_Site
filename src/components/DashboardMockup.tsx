import React, { useState } from 'react';
import {
  LayoutDashboard,
  Lightbulb,
  MapPin,
  Users2,
  Bookmark,
  Search,
  Info,
  Layers,
} from 'lucide-react';

export const DashboardMockup: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'ideas' | 'locations' | 'competition' | 'saved'>('overview');

  return (
    <div className="w-full bg-white text-[#202832]">
      {/* Restrained Browser/Workspace Top Header */}
      <div className="bg-[#FAF8F5] border-b border-[#D9D5CD]/90 px-4 py-2.5 flex items-center justify-between text-xs text-[#707782]">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D9D5CD]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#D9D5CD]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#D9D5CD]" />
          </div>
          <span className="ml-2 font-mono text-[11px] text-[#707782] hidden sm:inline">
            zonek.in/research/preview
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium tracking-wide uppercase bg-[#EAE6DE] text-[#226192] border border-[#D9D5CD]">
            Illustrative Preview
          </span>
        </div>
      </div>

      {/* Main Dashboard Layout */}
      <div className="flex flex-col md:flex-row min-h-[530px]">
        {/* Deep Editorial Blue Left Sidebar */}
        <aside className="w-full md:w-44 lg:w-48 bg-[#226192] text-white p-3.5 shrink-0 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#1c507a]">
          <div>
            {/* Sidebar Brand Wordmark */}
            <div className="pb-3 border-b border-white/10 flex items-center justify-between">
              <span className="font-heading font-bold text-base tracking-tight text-white">
                ZONEK
              </span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/10 text-white/70 font-mono">
                Preview
              </span>
            </div>

            {/* Sidebar Navigation */}
            <nav className="mt-3 space-y-0.5">
              {[
                { id: 'overview', label: 'Overview', icon: LayoutDashboard },
                { id: 'ideas', label: 'Business Ideas', icon: Lightbulb },
                { id: 'locations', label: 'Location Insights', icon: MapPin },
                { id: 'competition', label: 'Competition', icon: Users2 },
                { id: 'saved', label: 'Saved Items', icon: Bookmark },
              ].map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id as any)}
                    className={`w-full flex items-center gap-2 px-2.5 py-1.5 rounded text-xs font-medium transition-all text-left cursor-pointer ${
                      isActive
                        ? 'bg-white/15 text-white font-semibold shadow-xs'
                        : 'text-white/70 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5 shrink-0 opacity-80" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="mt-4 pt-3 border-t border-white/10 text-[10px] text-white/60">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#EF8557]" />
              <span>Mangaluru Cluster</span>
            </div>
            <p className="mt-0.5 text-[9px] text-white/40">Demonstration workspace</p>
          </div>
        </aside>

        {/* White Main Workspace */}
        <main className="flex-1 bg-white p-4 sm:p-5 flex flex-col gap-3.5 overflow-x-hidden">
          {/* Top Bar with Search */}
          <div className="flex items-center justify-between gap-3 pb-2.5 border-b border-[#D9D5CD]">
            <div className="relative flex-1 max-w-sm">
              <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-[#707782]" />
              <input
                type="text"
                readOnly
                value="Search for a business, location or industry..."
                className="w-full h-7 pl-7 pr-3 text-xs bg-[#FAF8F5] border border-[#D9D5CD] rounded text-[#707782] cursor-default select-none focus:outline-none"
              />
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <div className="w-6 h-6 rounded-full bg-[#EAE6DE] border border-[#D9D5CD] flex items-center justify-center text-[10px] font-bold text-[#226192]">
                Z
              </div>
            </div>
          </div>

          {/* Business & Location Header */}
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="font-heading font-semibold text-base sm:text-lg text-[#226192] leading-tight">
                  Laundry Business
                </h3>
                <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-medium text-[#707782] bg-[#FAF8F5] border border-[#D9D5CD]">
                  <Info className="w-3 h-3 text-[#EF8557]" />
                  Illustrative Preview
                </span>
              </div>
              <p className="text-xs text-[#707782] mt-0.5 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#226192]" />
                Mangaluru, Karnataka • Sample Research Profile
              </p>
            </div>
          </div>

          {/* Metric Concept Cards Grid (4 Compact Cards) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
            {/* Card 1 */}
            <div className="p-2.5 bg-[#FAF8F5] border border-[#D9D5CD] rounded-md transition-colors hover:border-[#b8b3a8]">
              <span className="text-[10px] font-medium text-[#707782] block">
                Business Opportunity
              </span>
              <div className="mt-0.5">
                <span className="text-xs sm:text-sm font-semibold font-heading text-[#226192]">
                  Explore a business idea
                </span>
              </div>
              <span className="text-[9px] text-[#707782] block mt-0.5 leading-tight">
                Indicative assessment
              </span>
            </div>

            {/* Card 2 */}
            <div className="p-2.5 bg-[#FAF8F5] border border-[#D9D5CD] rounded-md transition-colors hover:border-[#b8b3a8]">
              <span className="text-[10px] font-medium text-[#707782] block">
                Estimated Setup Cost
              </span>
              <div className="mt-0.5">
                <span className="text-xs sm:text-sm font-semibold font-heading text-[#202832]">
                  ₹8L – ₹14L
                </span>
              </div>
              <span className="text-[9px] text-[#707782] block mt-0.5 leading-tight">
                Illustrative estimate
              </span>
            </div>

            {/* Card 3 */}
            <div className="p-2.5 bg-[#FAF8F5] border border-[#D9D5CD] rounded-md transition-colors hover:border-[#b8b3a8]">
              <span className="text-[10px] font-medium text-[#707782] block">
                Location Insights
              </span>
              <div className="mt-0.5">
                <span className="text-xs sm:text-sm font-semibold font-heading text-[#202832]">
                  Compare potential locations
                </span>
              </div>
              <span className="text-[9px] text-[#707782] block mt-0.5 leading-tight">
                5 Nearby identified
              </span>
            </div>

            {/* Card 4 */}
            <div className="p-2.5 bg-[#FAF8F5] border border-[#D9D5CD] rounded-md transition-colors hover:border-[#b8b3a8]">
              <span className="text-[10px] font-medium text-[#707782] block">
                Market Research
              </span>
              <div className="mt-0.5">
                <span className="text-xs sm:text-sm font-semibold font-heading text-[#27845D]">
                  Review available evidence
                </span>
              </div>
              <span className="text-[9px] text-[#707782] block mt-0.5 leading-tight">
                Residential & student signals
              </span>
            </div>
          </div>

          {/* Central Workspace: Map & Chart (Left) + Notes & Next Steps (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
            {/* Left Column: Stylised Map + Bar Chart */}
            <div className="lg:col-span-7 flex flex-col gap-2.5">
              {/* Map Panel */}
              <div className="bg-[#FAF8F5] border border-[#D9D5CD] rounded-md p-2.5 relative flex flex-col">
                <div className="flex items-center justify-between pb-1.5 border-b border-[#D9D5CD]/80 mb-1.5">
                  <div className="flex items-center gap-1.5">
                    <Layers className="w-3 h-3 text-[#226192]" />
                    <span className="text-xs font-semibold text-[#226192] font-heading">
                      Location Mapping Preview
                    </span>
                  </div>
                  <span className="text-[9px] text-[#707782]">
                    Sample Grid Layout
                  </span>
                </div>

                {/* SVG Stylised Map Graphic */}
                <div className="relative w-full h-32 bg-[#EAE6DE]/50 rounded border border-[#D9D5CD] overflow-hidden">
                  <svg
                    viewBox="0 0 400 160"
                    className="w-full h-full object-cover"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <pattern id="dashgrid" width="28" height="28" patternUnits="userSpaceOnUse">
                        <path d="M 28 0 L 0 0 0 28" fill="none" stroke="#D9D5CD" strokeWidth="0.65" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#dashgrid)" />

                    {/* Coastal/River Curve */}
                    <path
                      d="M -10,80 Q 70,110 160,75 T 320,100 T 420,60"
                      fill="none"
                      stroke="#226192"
                      strokeWidth="2.5"
                      strokeOpacity="0.2"
                    />

                    {/* Road Network */}
                    <path
                      d="M 40,-10 L 120,85 L 360,120"
                      fill="none"
                      stroke="#707782"
                      strokeWidth="1.5"
                      strokeDasharray="4 2"
                    />
                    <path
                      d="M 180,-10 L 190,170"
                      fill="none"
                      stroke="#707782"
                      strokeWidth="1.2"
                    />

                    {/* Area Polygon */}
                    <polygon
                      points="130,35 180,30 175,75 125,65"
                      fill="#226192"
                      fillOpacity="0.08"
                      stroke="#226192"
                      strokeWidth="1"
                    />

                    {/* Target Marker in Orange */}
                    <g transform="translate(150, 52)">
                      <circle r="6" fill="#EF8557" />
                      <circle r="2.5" fill="#FFFFFF" />
                    </g>
                    <text x="163" y="55" fontSize="8.5" fill="#202832" fontWeight="500">
                      Target Area (Demo)
                    </text>

                    {/* Competitor Markers in Blue */}
                    <g transform="translate(245, 65)">
                      <circle r="4" fill="#226192" />
                      <circle r="1.5" fill="#FFFFFF" />
                    </g>
                    <g transform="translate(90, 95)">
                      <circle r="4" fill="#226192" />
                      <circle r="1.5" fill="#FFFFFF" />
                    </g>
                    <g transform="translate(305, 105)">
                      <circle r="4" fill="#226192" />
                      <circle r="1.5" fill="#FFFFFF" />
                    </g>
                  </svg>

                  <div className="absolute bottom-1 left-1.5 bg-white/90 px-1.5 py-0.5 rounded text-[8.5px] text-[#707782] border border-[#D9D5CD]">
                    Visual demonstration only. No actual business locations represented.
                  </div>
                </div>
              </div>

              {/* Chart Panel */}
              <div className="bg-[#FAF8F5] border border-[#D9D5CD] rounded-md p-2.5">
                <div className="flex items-center justify-between pb-1.5 border-b border-[#D9D5CD]/80 mb-1.5">
                  <span className="text-xs font-semibold text-[#226192] font-heading">
                    Population & Households
                  </span>
                  <span className="text-[9px] text-[#707782]">
                    Illustrative visualisation
                  </span>
                </div>

                <div className="space-y-1.5 mt-1.5">
                  {[
                    { label: 'Cluster Zone A (College Hub)', pct: 82, val: 'High density' },
                    { label: 'Cluster Zone B (Residential)', pct: 64, val: 'Medium density' },
                    { label: 'Cluster Zone C (Commercial)', pct: 45, val: 'Transit focus' },
                  ].map((row, idx) => (
                    <div key={idx} className="space-y-0.5">
                      <div className="flex justify-between text-[9px] text-[#202832]">
                        <span className="text-[#707782]">{row.label}</span>
                        <span className="font-mono text-[#226192] font-medium">{row.val}</span>
                      </div>
                      <div className="w-full h-1.5 bg-[#EAE6DE] rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all"
                          style={{
                            width: `${row.pct}%`,
                            backgroundColor: idx === 0 ? '#EF8557' : '#226192',
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Research Notes & Suggested Next Steps */}
            <div className="lg:col-span-5 flex flex-col gap-2.5">
              {/* Research Notes Panel */}
              <div className="bg-[#FAF8F5] border border-[#D9D5CD] rounded-md p-2.5 flex-1">
                <div className="flex items-center justify-between pb-1.5 border-b border-[#D9D5CD]/80 mb-2">
                  <h4 className="text-xs font-semibold text-[#226192] font-heading">
                    Research Notes
                  </h4>
                  <span className="text-[9px] text-[#707782]">Guidance</span>
                </div>
                <ul className="space-y-1.5">
                  {[
                    'Review local customer demand.',
                    'Identify nearby alternatives.',
                    'Verify costs and operating requirements.',
                  ].map((note, i) => (
                    <li key={i} className="flex items-start gap-1.5 text-xs text-[#202832]/85">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#EF8557] mt-1 shrink-0" />
                      <span className="leading-snug text-[11px]">{note}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Suggested Next Steps Panel */}
              <div className="bg-[#FAF8F5] border border-[#D9D5CD] rounded-md p-2.5 flex-1">
                <div className="flex items-center justify-between pb-1.5 border-b border-[#D9D5CD]/80 mb-2">
                  <h4 className="text-xs font-semibold text-[#226192] font-heading">
                    Suggested Next Steps
                  </h4>
                  <span className="text-[9px] text-[#707782]">Actionable</span>
                </div>
                <ol className="space-y-1.5">
                  {[
                    'Validate demand locally.',
                    'Compare available alternatives.',
                    'Estimate initial costs.',
                  ].map((step, i) => (
                    <li key={i} className="flex items-center gap-1.5 text-xs text-[#202832]">
                      <span className="w-3.5 h-3.5 rounded bg-[#EAE6DE] text-[#226192] border border-[#D9D5CD] flex items-center justify-center font-mono font-bold text-[9px] shrink-0">
                        {i + 1}
                      </span>
                      <span className="text-[#202832]/90 leading-tight text-[11px]">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>

          {/* Bottom Trust/Disclaimer Line */}
          <div className="pt-1.5 border-t border-[#D9D5CD] flex items-center justify-between text-[9px] text-[#707782]">
            <span>ZONEK Research Intelligence • Illustrative interface preview</span>
            <span className="text-[#226192] font-medium hidden sm:inline">
              Evidence-based framework
            </span>
          </div>
        </main>
      </div>
    </div>
  );
};
