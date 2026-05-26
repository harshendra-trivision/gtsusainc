'use client';

import React from 'react';
import { ShieldAlert, Server, Network, ShieldCheck, HelpCircle, Activity, Globe } from 'lucide-react';
import Card from '@/components/common/Card';
import ImagePlaceholder from '@/components/common/ImagePlaceholder';

export default function InfrastructurePage() {
  return (
    <div className="flex flex-col w-full">
      {/* Page Header */}
      <section className="bg-slate-950 text-white py-20 blueprint-grid relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/70 to-slate-950" />
        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/15 border border-accent/30 text-xs font-mono text-accent-light uppercase tracking-wider">
            Operational Backbone
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
            Delivery Enablers & Infrastructure
          </h1>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto leading-relaxed">
            Delivering robust execution environments, secure IT boundaries, and flexible engagement models to guarantee intellectual property safety and delivery timelines.
          </p>
        </div>
      </section>

      {/* SECTION 1: IT & DATA SECURITY (ISO 27001 principles) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Text data */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="text-xs font-mono font-semibold tracking-widest text-accent uppercase">
                IP PROTECTION
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-primary tracking-tight">
                Mature Physical & Network Security
              </h2>
              <div className="h-1 w-12 bg-accent rounded-full" />
            </div>
            
            <p className="text-slate-500 text-xs leading-relaxed">
              Protecting client intellectual property (IP) is a cornerstone of our delivery enablers. GTS maintains an advanced Information Security Management System compliant with the standard recommendations of **ISO 27001** to manage security parameters, defend data endpoints, and avoid risks to project repositories.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex gap-2.5 items-start">
                <div className="p-1 rounded bg-slate-100 text-accent mt-0.5 shrink-0">
                  <ShieldAlert className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xs">Network Segregation</h4>
                  <p className="text-slate-500 text-[10px] leading-relaxed mt-0.5">Isolated networks and project directories accessible only to authorized engineers.</p>
                </div>
              </div>

              <div className="flex gap-2.5 items-start">
                <div className="p-1 rounded bg-slate-100 text-accent mt-0.5 shrink-0">
                  <Server className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xs">Hardware Firewalls</h4>
                  <p className="text-slate-500 text-[10px] leading-relaxed mt-0.5">Active packet filtering, data encryption protocols, and dynamic threat scanning.</p>
                </div>
              </div>

              <div className="flex gap-2.5 items-start">
                <div className="p-1 rounded bg-slate-100 text-accent mt-0.5 shrink-0">
                  <Network className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xs">Redundant Backups</h4>
                  <p className="text-slate-500 text-[10px] leading-relaxed mt-0.5">Automated secure off-site incremental backups to guard against hardware disasters.</p>
                </div>
              </div>

              <div className="flex gap-2.5 items-start">
                <div className="p-1 rounded bg-slate-100 text-accent mt-0.5 shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xs">Access Audits</h4>
                  <p className="text-slate-500 text-[10px] leading-relaxed mt-0.5">Regular physical card entries, CCTV logs, and digital endpoint logging cycles.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Visual placeholder */}
          <div className="lg:col-span-5">
            <div className="p-2 border border-slate-200 bg-slate-50 rounded-2xl shadow-sm">
              <ImagePlaceholder 
                alt="GTS Secure Servers Data Center" 
                aspectRatio="video" 
                showOverlay={true} 
                overlayText="ISO 27001 Data Security Environment"
              />
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: GLOBAL ENGAGEMENT MODELS */}
      <section className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="text-xs font-mono font-semibold tracking-widest text-accent uppercase">
              Flexible Frameworks
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-primary tracking-tight">
              Global Engagement Models
            </h2>
            <p className="text-slate-500 text-xs leading-relaxed">
              We align our teams to match your development workflows, proposing flexible delivery structures that balance onshore oversight and offshore cost savings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            
            {/* Model 1: On-Site Model */}
            <Card className="bg-white border border-slate-200/70 p-6 flex flex-col justify-between">
              <div>
                <div className="text-[10px] font-mono text-accent font-semibold tracking-wider uppercase mb-1.5">Model 01</div>
                <h3 className="font-bold text-primary text-sm mb-3">On-Site Model</h3>
                <p className="text-slate-500 text-xs leading-relaxed">
                  GTS senior design engineers deploy directly to your domestic technical facilities, coordinating in real-time, matching project phases, and integrating with your design group.
                </p>
              </div>
              <div className="text-[10px] font-semibold text-slate-400 bg-slate-50 border border-slate-100 rounded px-2 py-0.5 mt-6 self-start">
                Best for complex early-stage specs
              </div>
            </Card>

            {/* Model 2: Offshore Model */}
            <Card className="bg-white border border-slate-200/70 p-6 flex flex-col justify-between">
              <div>
                <div className="text-[10px] font-mono text-accent font-semibold tracking-wider uppercase mb-1.5">Model 02</div>
                <h3 className="font-bold text-primary text-sm mb-3">Offshore Model</h3>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Execution and calculations take place at our mature international delivery centers in India. Highly optimized for volume drawings, CAD detailing, and continuous stress simulations.
                </p>
              </div>
              <div className="text-[10px] font-semibold text-slate-400 bg-slate-50 border border-slate-100 rounded px-2 py-0.5 mt-6 self-start">
                Maximizes cost-efficiency
              </div>
            </Card>

            {/* Model 3: On-Shore Model */}
            <Card className="bg-white border border-slate-200/70 p-6 flex flex-col justify-between">
              <div>
                <div className="text-[10px] font-mono text-accent font-semibold tracking-wider uppercase mb-1.5">Model 03</div>
                <h3 className="font-bold text-primary text-sm mb-3">On-Shore Model</h3>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Executed by dedicated project engineers situated directly in local US offices, delivering quick turnarounds and local alignment without timezone shifts.
                </p>
              </div>
              <div className="text-[10px] font-semibold text-slate-400 bg-slate-50 border border-slate-100 rounded px-2 py-0.5 mt-6 self-start">
                Eliminates timezone offsets
              </div>
            </Card>

            {/* Model 4: Hybrid/Blended Model */}
            <Card className="bg-white border border-slate-200/70 p-6 flex flex-col justify-between">
              <div>
                <div className="text-[10px] font-mono text-accent font-semibold tracking-wider uppercase mb-1.5">Model 04</div>
                <h3 className="font-bold text-primary text-sm mb-3">Hybrid Model</h3>
                <p className="text-slate-500 text-xs leading-relaxed">
                  A blended delivery model combining localized onshore project managers to handle requirements and dedicated, cost-effective offshore support teams for 24-hour execution cycles.
                </p>
              </div>
              <div className="text-[10px] font-semibold text-slate-400 bg-slate-50 border border-slate-100 rounded px-2 py-0.5 mt-6 self-start">
                Highly Recommended (Best of both)
              </div>
            </Card>

          </div>

        </div>
      </section>
    </div>
  );
}
export { InfrastructurePage };
