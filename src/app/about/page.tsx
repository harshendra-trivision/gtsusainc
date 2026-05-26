'use client';

import React from 'react';
import { Shield, Sparkles, Trophy, Users, CheckCircle, Zap } from 'lucide-react';
import Card from '@/components/common/Card';
import ImagePlaceholder from '@/components/common/ImagePlaceholder';

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Page Header */}
      <section className="bg-slate-950 text-white py-20 blueprint-grid relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/70 to-slate-950" />
        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/15 border border-accent/30 text-xs font-mono text-accent-light uppercase tracking-wider">
            About GTS Engineering
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
            Delivering Engineering Excellence
          </h1>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto leading-relaxed">
            Discover who we are, our professional philosophies, and the unique collaborative advantages we offer to manufacturing and plant operations globally.
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual description */}
            <div className="lg:col-span-5 relative">
              <div className="p-2 border border-slate-200 bg-slate-50/50 rounded-2xl shadow-lg">
                <ImagePlaceholder 
                  alt="GTS Engineering Office Team Meeting" 
                  aspectRatio="video" 
                  showOverlay={true} 
                  overlayText="Who We Are - Virtual Extension"
                />
              </div>
            </div>

            {/* Text description */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <div className="text-xs font-mono font-semibold tracking-widest text-accent uppercase">
                  Corporate Profile
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-primary tracking-tight">
                  An Engineering Solution Specialist
                </h2>
                <div className="h-1 w-12 bg-accent rounded-full" />
              </div>
              <p className="text-slate-500 text-xs leading-relaxed">
                GTS Engineering USA Incorporated is a &ldquo;new age&rdquo; technology-driven engineering company. We operate as an end-to-end solutions partner, acting as a direct &ldquo;virtual extension&rdquo; and &ldquo;extended arm&rdquo; of our clients&rsquo; in-house design, analysis, and engineering departments.
              </p>
              <p className="text-slate-500 text-xs leading-relaxed">
                As a mid-sized organization, GTS provides a unique blend of structural agility and scalable capability. We are small enough to make rapid, decisive decisions and adapt immediately to changing project requirements, yet mature enough to handle massive enterprise-scale design and integration projects with absolute technical excellence.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* VISION, MISSION & STRATEGY */}
      <section className="py-16 bg-slate-50 border-y border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Vision */}
          <Card className="bg-white border border-slate-200/60 p-6 flex flex-col space-y-3">
            <div className="p-2.5 bg-accent/10 text-accent rounded-full self-start">
              <Trophy className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-primary text-sm">Vision Statement</h3>
            <p className="text-slate-500 text-xs leading-relaxed">
              Collaboratively delivering Innovative Manufacturing & Plant Solutions to enable our customers to effectively lead their respective global industries.
            </p>
          </Card>

          {/* Mission */}
          <Card className="bg-white border border-slate-200/60 p-6 flex flex-col space-y-3">
            <div className="p-2.5 bg-accent-light/10 text-accent-light rounded-full self-start">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-primary text-sm">Mission Statement</h3>
            <p className="text-slate-500 text-xs leading-relaxed">
              To co-create sustainable value and growth opportunities for our customers through harnessing our combined passion, expertise, and continuous innovation.
            </p>
          </Card>

          {/* 3F Strategy */}
          <Card className="bg-white border border-slate-200/60 p-6 flex flex-col space-y-3">
            <div className="p-2.5 bg-slate-900/10 text-primary rounded-full self-start">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-primary text-sm">3F Execution Strategy</h3>
            <p className="text-slate-500 text-xs leading-relaxed">
              Delivering client delight through being <strong>Fast</strong> (rapid timezone shifted turnarounds), <strong>Flexible</strong> (custom delivery models), and <strong>Focused</strong> (dedicated resource groups).
            </p>
          </Card>
        </div>
      </section>

      {/* OUR ADVANTAGE & QUALITY */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Section: GTS Advantage */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-extrabold font-display text-primary tracking-tight">
                The GTS Engineering Advantage
              </h3>
              <p className="text-slate-400 text-xs font-mono uppercase tracking-widest">Why partner with us</p>
              <div className="h-0.5 w-12 bg-accent" />
            </div>
            
            <div className="space-y-4">
              <div className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <p className="text-slate-500 text-xs leading-relaxed">
                  <strong>Extended Arm Model:</strong> Work directly with our teams as an extension of your own desk. We maintain seamless communication channels to ensure project alignments.
                </p>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <p className="text-slate-500 text-xs leading-relaxed">
                  <strong>Cost Optimization & Efficiency:</strong> By delegating process design, modeling, stress check, or documentation tasks to GTS, you significantly decrease overheads and maximize core executive productivity.
                </p>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <p className="text-slate-500 text-xs leading-relaxed">
                  <strong>Domain Expertise:</strong> Access to a diverse, multi-disciplinary engineering pool with experience in leading industrial software tools (CATIA, NX, Windchill, CAESAR II, ArcGIS).
                </p>
              </div>
            </div>
          </div>

          {/* Section: Quality & Compliance */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-8 space-y-6">
            <div className="space-y-2">
              <div className="p-2 bg-white rounded-lg border border-slate-200 text-accent self-start inline-block">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-primary">
                Relentless Focus on Quality
              </h3>
              <p className="text-slate-400 text-[10px] font-mono uppercase tracking-widest">Zero Defect Environment</p>
            </div>
            
            <p className="text-slate-500 text-xs leading-relaxed">
              We operate under strict quality management processes, ensuring that deliverables pass detailed verification reviews at each stage of design. 
            </p>
            <ul className="text-slate-600 text-xs space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
                <span>Regular cross-department audits to enforce execution consistency.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
                <span>ISO 9001:2015 process compliance for engineering operations.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
                <span>Meticulous data security and physical security to shield intellectual properties.</span>
              </li>
            </ul>
          </div>

        </div>
      </section>
    </div>
  );
}
export { AboutPage };
