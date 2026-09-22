'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  AlertCircle,
  ArrowRight,
  Box,
  Building,
  Calendar,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock,
  DollarSign,
  FileCheck,
  FileText,
  Flag,
  Globe,
  HelpCircle,
  Layers,
  Lock,
  Mail,
  MapPin,
  Phone,
  Search,
  ShieldCheck,
  Sliders,
  Sparkles,
  UploadCloud,
  Users,
  X,
  Zap
} from 'lucide-react';
import { AnimatedSection, GradientButton, GlassCard } from '@/components/ui';

// Data Constants
const industriesList = [
  'Oil & Gas',
  'Refining & Petrochemicals',
  'LNG & Gas Processing',
  'Power & Utilities',
  'Chemicals & Specialty Chemicals',
  'Water & Wastewater',
  'Mining & Metals',
  'Manufacturing',
  'Food & Beverage',
  'Pharmaceuticals & Healthcare',
  'Automotive',
  'Marine & Offshore',
  'Infrastructure & Transportation',
  'Data Centers',
  'Other'
];

const serviceAreasList = [
  'Plant & Process Engineering',
  'Product Engineering',
  'Simulation & Digital Validation',
  'Automation, AI & Industry 4.0',
  'Steel Detailing & Structural Engineering',
  'Pipeline Engineering',
  'Mechanical Engineering',
  'Electrical Engineering',
  'Instrumentation & Controls',
  'Civil & Infrastructure / BIM',
  'Offshore Engineering',
  'Technical Documentation & Asset Intelligence',
  'Other'
];

const projectTypesList = [
  'New Project (Greenfield)',
  'Expansion (Brownfield)',
  'Revamp / Modernization',
  'Debottlenecking',
  'Engineering Study (FEED / Pre-FEED)',
  'Detailed Engineering',
  'Procurement Support',
  'Construction Support',
  'Operations & Maintenance Support',
  'Other'
];

const projectCapexList = [
  'Under $1 Million',
  '$1M – $5 Million',
  '$5M – $10 Million',
  '$10M – $25 Million',
  '$25M – $50 Million',
  '$50M – $100 Million',
  '$100M – $250 Million',
  '$250M – $500 Million',
  'Above $500 Million',
  'Confidential',
  'Not Yet Determined'
];

const engineeringBudgetsList = [
  'Under $25,000',
  '$25,000 – $100,000',
  '$100,000 – $250,000',
  '$250,000 – $500,000',
  '$500,000 – $1 Million',
  '$1M – $5 Million',
  'Above $5 Million',
  'To Be Determined',
  'Confidential'
];

const timelineList = [
  'Immediately (Within 2 Weeks)',
  'Within 30 Days',
  '1–3 Months',
  '3–6 Months',
  '6–12 Months',
  'More than 12 Months',
  'Planning / Budget Approval Stage',
  'Tender / Bid Stage',
  'Future Engineering Partner'
];

const countriesList = [
  'United States',
  'Canada',
  'Mexico',
  'Brazil',
  'United Kingdom',
  'Germany',
  'Netherlands',
  'Saudi Arabia',
  'UAE',
  'Qatar',
  'Kuwait',
  'Oman',
  'India',
  'Singapore',
  'Australia',
  'South Korea',
  'Japan',
  'Malaysia',
  'Indonesia',
  'Other'
];

const executionModelsList = [
  'Engineering Consulting',
  'FEED / Pre-FEED',
  'Detailed Engineering',
  'EPC Engineering Support',
  'EPCM Support',
  'PMC / Owner\'s Engineering',
  'Dedicated Engineering Team',
  'Staff Augmentation',
  'Offshore Delivery Center',
  'USA + India Hybrid Delivery',
  'AI & Digital Engineering',
  'Asset Lifecycle Support',
  'Long-Term Engineering Partner',
  'Recommend the Best Approach'
];

const prioritiesList = [
  'Normal (Standard Planning)',
  'High (Active Tender / Schedule Sensitive)',
  'Urgent (Turnaround / Outage / Critical Path)',
  'Exploratory / R&D'
];

const disciplinesList = [
  'Process Engineering',
  'Piping & Plant Layout',
  'Mechanical & Equipment',
  'Civil & Structural',
  'Electrical Engineering',
  'Instrumentation & Controls',
  'Process Safety / HAZOP',
  '3D Plant Modeling / BIM',
  'Automation & DCS/PLC',
  'Digital Twin & AI'
];

const standardsList = [
  'API',
  'ASME',
  'ISO',
  'IEC',
  'AWS',
  'AISC',
  'NFPA',
  'IEEE',
  'ASTM',
  'ANSI',
  'Client Specifications'
];

const deliverablesList = [
  'PFDs & P&IDs',
  '3D CAD / BIM Models',
  'Stress Analysis (CAESAR II)',
  'Equipment Datasheets',
  'Piping Isometrics',
  'General Arrangement (GA) Drawings',
  'Single Line Diagrams (SLD)',
  'Cable Schedules & I/O Lists',
  'FEED Package',
  'As-Built Packages'
];

const consultationTypesList = [
  'General Engineering Consultation',
  'Technical Discussion',
  'FEED / Pre-FEED Review',
  'Proposal Request',
  'Engineering Estimate',
  'EPC Support',
  'Staff Augmentation',
  'AI & Digital Engineering',
  'Digital Twin Assessment',
  'Owner\'s Engineering',
  'Simulation Study',
  'Product Development',
  'Emergency Engineering Support'
];

const meetingPreferencesList = [
  'Microsoft Teams',
  'Phone Call',
  'Email Only',
  'Site Visit',
  'In-Person Meeting'
];

const contactTimesList = ['Morning', 'Afternoon', 'Evening', 'Flexible'];

const responseTimesList = ['ASAP', 'Within 24 Hours', 'Within 48 Hours', 'Within This Week'];

const referralSourcesList = [
  'LinkedIn / Social Media',
  'Industry Referral / Colleague',
  'Search Engine (Google)',
  'Conference / Trade Show',
  'Existing GTS Client',
  'Other'
];

interface UploadedFileItem {
  name: string;
  size: string;
}

export default function ConsultationSection() {
  const [step, setStep] = useState<number>(1);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [inquiryId, setInquiryId] = useState<string>('');

  // Step 1 State
  const [industry, setIndustry] = useState<string>('Oil & Gas');
  const [selectedServices, setSelectedServices] = useState<string[]>([
    'Plant & Process Engineering'
  ]);
  const [isServicesOpen, setIsServicesOpen] = useState<boolean>(false);
  const [projectType, setProjectType] = useState<string>('New Project (Greenfield)');
  const [projectCapex, setProjectCapex] = useState<string>('$5M – $10 Million');
  const [engineeringBudget, setEngineeringBudget] = useState<string>('$100,000 – $250,000');
  const [timeline, setTimeline] = useState<string>('1–3 Months');
  const [country, setCountry] = useState<string>('United States');
  const [stateProvince, setStateProvince] = useState<string>('Texas');
  const [city, setCity] = useState<string>('Houston');
  const [projectSite, setProjectSite] = useState<string>('');
  const [executionModel, setExecutionModel] = useState<string>('Detailed Engineering');
  const [priority, setPriority] = useState<string>('High (Active Tender / Schedule Sensitive)');

  // Step 2 State
  const [projectOverview, setProjectOverview] = useState<string>('');
  const [selectedDisciplines, setSelectedDisciplines] = useState<string[]>([
    'Process Engineering',
    'Piping & Plant Layout'
  ]);
  const [selectedStandards, setSelectedStandards] = useState<string[]>(['API', 'ASME', 'ISO']);
  const [selectedDeliverables, setSelectedDeliverables] = useState<string[]>([
    'PFDs & P&IDs',
    '3D CAD / BIM Models'
  ]);
  const [consultationType, setConsultationType] = useState<string>('Proposal Request');
  const [preferredMeeting, setPreferredMeeting] = useState<string>('Microsoft Teams');
  const [preferredTime, setPreferredTime] = useState<string>('Flexible');
  const [preferredResponse, setPreferredResponse] = useState<string>('Within 24 Hours');
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFileItem[]>([]);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Step 3 State
  const [companyName, setCompanyName] = useState<string>('');
  const [contactName, setContactName] = useState<string>('');
  const [jobTitle, setJobTitle] = useState<string>('');
  const [workEmail, setWorkEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [website, setWebsite] = useState<string>('');
  const [hearAbout, setHearAbout] = useState<string>('LinkedIn / Social Media');
  const [contactMethod, setContactMethod] = useState<'Email' | 'Phone' | 'Either'>('Email');

  // Step 4 State
  const [agreedNda, setAgreedNda] = useState<boolean>(true);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Toggle helpers
  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
  };

  const toggleDiscipline = (disc: string) => {
    setSelectedDisciplines((prev) =>
      prev.includes(disc) ? prev.filter((d) => d !== disc) : [...prev, disc]
    );
  };

  const toggleStandard = (std: string) => {
    setSelectedStandards((prev) =>
      prev.includes(std) ? prev.filter((s) => s !== std) : [...prev, std]
    );
  };

  const toggleDeliverable = (del: string) => {
    setSelectedDeliverables((prev) =>
      prev.includes(del) ? prev.filter((d) => d !== del) : [...prev, del]
    );
  };

  // Add scope bullet helper
  const addHintToOverview = (hint: string) => {
    const textToAppend = `\n• ${hint.replace('✓ ', '')}: `;
    if (!projectOverview.includes(textToAppend.trim())) {
      setProjectOverview((prev) => (prev ? prev + textToAppend : textToAppend.trimStart()));
    }
  };

  // File Handlers
  const handleFileDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const newFiles: UploadedFileItem[] = Array.from(e.dataTransfer.files).map((f) => ({
        name: f.name,
        size: `${(f.size / (1024 * 1024)).toFixed(1)} MB`
      }));
      setUploadedFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles: UploadedFileItem[] = Array.from(e.target.files).map((f) => ({
        name: f.name,
        size: `${(f.size / (1024 * 1024)).toFixed(1)} MB`
      }));
      setUploadedFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const generatedId = `GTS-RFQ-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      setInquiryId(generatedId);
      setIsSubmitted(true);
    }, 1200);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setStep(1);
    setProjectOverview('');
    setUploadedFiles([]);
  };

  return (
    <section id="consultation" className="relative overflow-hidden bg-[#071328] py-20 text-white sm:py-28">
      {/* Background Industrial Overlay behind the Left Column */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-full lg:w-1/2 overflow-hidden opacity-30 select-none">
        <Image
          src="/image/OUR ENGINEERING SOLUTION.jpg"
          alt="Industrial Engineering Background"
          fill
          className="object-cover object-left"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071328]/80 via-[#071328]/95 to-[#071328]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#071328] via-transparent to-[#071328]" />
      </div>

      <AnimatedSection as="div" className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-start">
          {/* ================= LEFT COLUMN ================= */}
          <div className="lg:col-span-4 xl:col-span-4 flex flex-col justify-between space-y-8 pr-0 lg:pr-4">
            <div>
              {/* Eyebrow */}
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold uppercase tracking-[0.24em] text-cyan-400">
                  CONTACT / CONSULTATION
                </span>
                <span className="h-px w-10 bg-cyan-400/60" />
              </div>

              {/* Title */}
              <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl font-display leading-[1.15]">
                Let&apos;s Engineer <br />
                the Future <br />
                <span className="text-cyan-400">Together</span>
              </h2>

              {/* Description */}
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-300">
                Tell us about your project and our engineering experts will respond with tailored
                solutions, relevant experience, and next steps.
              </p>

              {/* 4 Value Pillars */}
              <div className="mt-8 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 border border-blue-400/30 text-cyan-400">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Expert Guidance</h4>
                    <p className="text-xs text-slate-400 leading-snug mt-0.5">
                      From concept to commissioning
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 border border-blue-400/30 text-cyan-400">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Right Team</h4>
                    <p className="text-xs text-slate-400 leading-snug mt-0.5">
                      Matched to your project needs
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 border border-blue-400/30 text-cyan-400">
                    <Layers className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Tailored Solutions</h4>
                    <p className="text-xs text-slate-400 leading-snug mt-0.5">
                      Across disciplines and industries
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 border border-blue-400/30 text-cyan-400">
                    <Globe className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Global Delivery</h4>
                    <p className="text-xs text-slate-400 leading-snug mt-0.5">
                      USA leadership. India execution.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Frosted Dark Glass Stats Box */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md shadow-xl">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-2xl font-black text-white font-display">500+</div>
                  <div className="text-xs text-slate-400 mt-0.5 font-medium">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-white font-display">15+</div>
                  <div className="text-xs text-slate-400 mt-0.5 font-medium">Industries Served</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-white font-display">20+</div>
                  <div className="text-xs text-slate-400 mt-0.5 font-medium">Years of Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-cyan-400 font-display">Global</div>
                  <div className="text-xs text-slate-400 mt-0.5 font-medium">Delivery Model</div>
                </div>
              </div>
            </div>

            {/* Left Watermark & LinkedIn */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/company/gts-usa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-300 hover:text-white transition-colors"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                  Connect on LinkedIn &rarr;
                </a>
              </div>
              <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                <span>PEOPLE | TECHNOLOGY | SOLUTIONS | GLOBAL IMPACT</span>
                <br />
                <span className="text-slate-400">A SMARTER TOMORROW</span>
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN (THE 4-STEP WIZARD) ================= */}
          <div className="lg:col-span-8 xl:col-span-8">
            <div className="rounded-[2rem] border border-slate-200/80 bg-white p-6 sm:p-8 lg:p-10 text-slate-900 shadow-2xl">
              {/* Top Wizard Stepper Navigation */}
              <div className="border-b border-slate-100 pb-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  {/* Stepper Tabs */}
                  <div className="grid grid-cols-2 gap-2 sm:flex sm:items-center sm:gap-3 flex-1">
                    {[
                      { num: 1, label: 'Project Details', sub: 'Tell us about your needs' },
                      { num: 2, label: 'Requirements', sub: 'Share key information' },
                      { num: 3, label: 'Your Information', sub: 'Contact details' },
                      { num: 4, label: 'Review & Submit', sub: 'Confirm and send' }
                    ].map((s) => {
                      const isActive = step === s.num;
                      const isDone = step > s.num;
                      return (
                        <button
                          key={s.num}
                          type="button"
                          onClick={() => !isSubmitted && setStep(s.num)}
                          className={`flex items-center gap-2.5 text-left transition-all p-1.5 sm:p-2 rounded-xl ${
                            isActive
                              ? 'bg-blue-50/80'
                              : 'hover:bg-slate-50 opacity-80 hover:opacity-100'
                          }`}
                        >
                          <div
                            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-colors ${
                              isActive
                                ? 'bg-[#0070f3] text-white shadow-sm'
                                : isDone
                                ? 'bg-emerald-500 text-white'
                                : 'bg-slate-100 text-slate-600 border border-slate-200'
                            }`}
                          >
                            {isDone ? <Check className="h-4 w-4" /> : s.num}
                          </div>
                          <div className="hidden xl:block">
                            <div
                              className={`text-xs font-bold leading-tight ${
                                isActive ? 'text-[#0070f3]' : 'text-slate-800'
                              }`}
                            >
                              {s.label}
                            </div>
                            <div className="text-[10px] text-slate-400 leading-none mt-0.5">
                              {s.sub}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Top-Right Help Badge */}
                  <div className="shrink-0 flex items-center justify-end">
                    <a
                      href="mailto:info@gtsengineering.com"
                      className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/60 px-3 py-1.5 text-xs font-semibold text-[#0070f3] hover:bg-blue-100 transition-colors"
                    >
                      <HelpCircle className="h-3.5 w-3.5" />
                      <span>Need help? Talk to our team</span>
                      <ArrowRight className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </div>

              {/* ================= STEP CONTENT ================= */}
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="mt-6">
                  {/* ========== STEP 1: PROJECT DETAILS ========== */}
                  {step === 1 && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-extrabold text-slate-900 tracking-tight font-display">
                          Project Details
                        </h3>
                        <p className="mt-1 text-xs sm:text-sm text-slate-500">
                          Help us understand your project so we can connect you with the right experts.
                        </p>
                      </div>

                      {/* Row 1: Industry, Service Area, Project Type */}
                      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {/* Industry */}
                        <div className="space-y-1.5">
                          <label className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                            <Box className="h-3.5 w-3.5 text-[#0070f3]" />
                            <span>Industry *</span>
                          </label>
                          <div className="relative">
                            <select
                              value={industry}
                              onChange={(e) => setIndustry(e.target.value)}
                              className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50/80 px-3.5 py-2.5 text-xs sm:text-sm font-medium text-slate-800 outline-none transition focus:border-[#0070f3] focus:bg-white"
                            >
                              {industriesList.map((ind) => (
                                <option key={ind} value={ind}>
                                  {ind}
                                </option>
                              ))}
                            </select>
                            <ChevronDown className="pointer-events-none absolute right-3 top-3 h-4 w-4 text-slate-400" />
                          </div>
                          <div className="flex justify-between items-center text-[11px] text-slate-400">
                            <span>Primary sector</span>
                            <Link href="/solutions" className="text-[#0070f3] hover:underline">
                              View all industries &rarr;
                            </Link>
                          </div>
                        </div>

                        {/* Service Area(s) (Multi-Select with Dropdown Checkboxes) */}
                        <div className="space-y-1.5 relative">
                          <label className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                            <Layers className="h-3.5 w-3.5 text-[#0070f3]" />
                            <span>Service Area(s) *</span>
                          </label>
                          <button
                            type="button"
                            onClick={() => setIsServicesOpen(!isServicesOpen)}
                            className="flex w-full items-center justify-between rounded-xl border border-slate-200 bg-slate-50/80 px-3.5 py-2.5 text-xs sm:text-sm font-medium text-slate-800 outline-none transition focus:border-[#0070f3] focus:bg-white text-left"
                          >
                            <span className="truncate">
                              {selectedServices.length === 0
                                ? 'Select service area(s)'
                                : `${selectedServices.length} selected (${selectedServices[0]}${
                                    selectedServices.length > 1 ? ', ...' : ''
                                  })`}
                            </span>
                            <ChevronDown
                              className={`h-4 w-4 text-slate-400 transition-transform ${
                                isServicesOpen ? 'rotate-180' : ''
                              }`}
                            />
                          </button>

                          {/* Popover Menu with Checkboxes */}
                          {isServicesOpen && (
                            <div className="absolute left-0 right-0 top-full z-30 mt-1 max-h-60 overflow-y-auto rounded-xl border border-slate-200 bg-white p-2 shadow-xl">
                              <div className="p-1 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                                Select all that apply
                              </div>
                              {serviceAreasList.map((area) => {
                                const isChecked = selectedServices.includes(area);
                                return (
                                  <label
                                    key={area}
                                    className="flex items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-slate-700 hover:bg-blue-50 cursor-pointer transition-colors"
                                  >
                                    <input
                                      type="checkbox"
                                      checked={isChecked}
                                      onChange={() => toggleService(area)}
                                      className="h-4 w-4 rounded border-slate-300 text-[#0070f3] focus:ring-[#0070f3]"
                                    />
                                    <span>{area}</span>
                                  </label>
                                );
                              })}
                            </div>
                          )}
                          <div className="text-[11px] text-slate-400">Choose one or more areas</div>
                        </div>

                        {/* Project Type */}
                        <div className="space-y-1.5">
                          <label className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                            <FileText className="h-3.5 w-3.5 text-[#0070f3]" />
                            <span>Project Type *</span>
                          </label>
                          <div className="relative">
                            <select
                              value={projectType}
                              onChange={(e) => setProjectType(e.target.value)}
                              className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50/80 px-3.5 py-2.5 text-xs sm:text-sm font-medium text-slate-800 outline-none transition focus:border-[#0070f3] focus:bg-white"
                            >
                              {projectTypesList.map((type) => (
                                <option key={type} value={type}>
                                  {type}
                                </option>
                              ))}
                            </select>
                            <ChevronDown className="pointer-events-none absolute right-3 top-3 h-4 w-4 text-slate-400" />
                          </div>
                          <div className="text-[11px] text-slate-400">Scope category</div>
                        </div>
                      </div>

                      {/* Row 2: CAPEX, Engineering Budget, Start Timeline */}
                      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {/* 1. Project Value (Overall CAPEX) */}
                        <div className="space-y-1.5">
                          <label className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                            <DollarSign className="h-3.5 w-3.5 text-[#0070f3]" />
                            <span>Project Value (Overall CAPEX) *</span>
                          </label>
                          <div className="relative">
                            <select
                              value={projectCapex}
                              onChange={(e) => setProjectCapex(e.target.value)}
                              className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50/80 px-3.5 py-2.5 text-xs sm:text-sm font-medium text-slate-800 outline-none transition focus:border-[#0070f3] focus:bg-white"
                            >
                              {projectCapexList.map((capex) => (
                                <option key={capex} value={capex}>
                                  {capex}
                                </option>
                              ))}
                            </select>
                            <ChevronDown className="pointer-events-none absolute right-3 top-3 h-4 w-4 text-slate-400" />
                          </div>
                          <div className="text-[11px] text-slate-400">
                            Total capital value of project (not engineering fees)
                          </div>
                        </div>

                        {/* 2. Estimated Engineering Services Budget */}
                        <div className="space-y-1.5">
                          <label className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                            <ShieldCheck className="h-3.5 w-3.5 text-[#0070f3]" />
                            <span>Estimated Engineering Budget *</span>
                          </label>
                          <div className="relative">
                            <select
                              value={engineeringBudget}
                              onChange={(e) => setEngineeringBudget(e.target.value)}
                              className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50/80 px-3.5 py-2.5 text-xs sm:text-sm font-medium text-slate-800 outline-none transition focus:border-[#0070f3] focus:bg-white"
                            >
                              {engineeringBudgetsList.map((b) => (
                                <option key={b} value={b}>
                                  {b}
                                </option>
                              ))}
                            </select>
                            <ChevronDown className="pointer-events-none absolute right-3 top-3 h-4 w-4 text-slate-400" />
                          </div>
                          <div className="text-[11px] text-slate-400">
                            Budget for engineering, design, or EPC support
                          </div>
                        </div>

                        {/* 3. Expected Start Timeline */}
                        <div className="space-y-1.5">
                          <label className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                            <Clock className="h-3.5 w-3.5 text-[#0070f3]" />
                            <span>Expected Project Start *</span>
                          </label>
                          <div className="relative">
                            <select
                              value={timeline}
                              onChange={(e) => setTimeline(e.target.value)}
                              className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50/80 px-3.5 py-2.5 text-xs sm:text-sm font-medium text-slate-800 outline-none transition focus:border-[#0070f3] focus:bg-white"
                            >
                              {timelineList.map((t) => (
                                <option key={t} value={t}>
                                  {t}
                                </option>
                              ))}
                            </select>
                            <ChevronDown className="pointer-events-none absolute right-3 top-3 h-4 w-4 text-slate-400" />
                          </div>
                          <div className="text-[11px] text-slate-400">Target kickoff timeline</div>
                        </div>
                      </div>

                      {/* Row 3: Country / Smart Location, Execution Model, Priority */}
                      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {/* 4. Country / Location */}
                        <div className="space-y-1.5">
                          <label className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                            <MapPin className="h-3.5 w-3.5 text-[#0070f3]" />
                            <span>Project Location (Country) *</span>
                          </label>
                          <div className="relative">
                            <select
                              value={country}
                              onChange={(e) => setCountry(e.target.value)}
                              className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50/80 px-3.5 py-2.5 text-xs sm:text-sm font-medium text-slate-800 outline-none transition focus:border-[#0070f3] focus:bg-white"
                            >
                              {countriesList.map((c) => (
                                <option key={c} value={c}>
                                  {c}
                                </option>
                              ))}
                            </select>
                            <ChevronDown className="pointer-events-none absolute right-3 top-3 h-4 w-4 text-slate-400" />
                          </div>
                          <div className="text-[11px] text-slate-400">
                            Where will the project be executed?
                          </div>
                        </div>

                        {/* Execution Model */}
                        <div className="space-y-1.5">
                          <label className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                            <Sliders className="h-3.5 w-3.5 text-[#0070f3]" />
                            <span>Execution Model</span>
                          </label>
                          <div className="relative">
                            <select
                              value={executionModel}
                              onChange={(e) => setExecutionModel(e.target.value)}
                              className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50/80 px-3.5 py-2.5 text-xs sm:text-sm font-medium text-slate-800 outline-none transition focus:border-[#0070f3] focus:bg-white"
                            >
                              {executionModelsList.map((m) => (
                                <option key={m} value={m}>
                                  {m}
                                </option>
                              ))}
                            </select>
                            <ChevronDown className="pointer-events-none absolute right-3 top-3 h-4 w-4 text-slate-400" />
                          </div>
                          <div className="text-[11px] text-slate-400">
                            How would you like to work with GTS?
                          </div>
                        </div>

                        {/* Priority */}
                        <div className="space-y-1.5">
                          <label className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                            <Flag className="h-3.5 w-3.5 text-[#0070f3]" />
                            <span>Priority</span>
                          </label>
                          <div className="relative">
                            <select
                              value={priority}
                              onChange={(e) => setPriority(e.target.value)}
                              className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50/80 px-3.5 py-2.5 text-xs sm:text-sm font-medium text-slate-800 outline-none transition focus:border-[#0070f3] focus:bg-white"
                            >
                              {prioritiesList.map((p) => (
                                <option key={p} value={p}>
                                  {p}
                                </option>
                              ))}
                            </select>
                            <ChevronDown className="pointer-events-none absolute right-3 top-3 h-4 w-4 text-slate-400" />
                          </div>
                          <div className="text-[11px] text-slate-400">Helps us respond faster</div>
                        </div>
                      </div>

                      {/* Smart Sub-Location: State/Province, City, Project Site */}
                      <div className="rounded-xl border border-slate-200/80 bg-slate-50/60 p-4">
                        <div className="text-xs font-bold text-slate-700 mb-2.5 flex items-center gap-1.5">
                          <MapPin className="h-3.5 w-3.5 text-[#0070f3]" />
                          <span>Detailed Site Information (Optional)</span>
                        </div>
                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                          <div>
                            <label className="text-[11px] font-semibold text-slate-600 block mb-1">
                              State / Province
                            </label>
                            <input
                              type="text"
                              value={stateProvince}
                              onChange={(e) => setStateProvince(e.target.value)}
                              placeholder="e.g. Texas, Louisiana, Alberta"
                              className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-800 outline-none focus:border-[#0070f3]"
                            />
                          </div>
                          <div>
                            <label className="text-[11px] font-semibold text-slate-600 block mb-1">
                              City
                            </label>
                            <input
                              type="text"
                              value={city}
                              onChange={(e) => setCity(e.target.value)}
                              placeholder="e.g. Houston, Calgary, Mumbai"
                              className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-800 outline-none focus:border-[#0070f3]"
                            />
                          </div>
                          <div>
                            <label className="text-[11px] font-semibold text-slate-600 block mb-1">
                              Project Site / Facility
                            </label>
                            <input
                              type="text"
                              value={projectSite}
                              onChange={(e) => setProjectSite(e.target.value)}
                              placeholder="e.g. Corpus Christi LNG Terminal"
                              className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-800 outline-none focus:border-[#0070f3]"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Bottom Controls */}
                      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100">
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                          <Lock className="h-3.5 w-3.5 text-emerald-600" />
                          <span>
                            Your information is secure and will only be used to respond to your inquiry.
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => setStep(2)}
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#0070f3] px-6 py-3 text-sm font-bold text-white shadow-md hover:bg-blue-600 transition-colors"
                        >
                          <span>Next: Technical Requirements</span>
                          <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* ========== STEP 2: TECHNICAL REQUIREMENTS ========== */}
                  {step === 2 && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-extrabold text-slate-900 tracking-tight font-display">
                          Technical Requirements & Scope
                        </h3>
                        <p className="mt-1 text-xs sm:text-sm text-slate-500">
                          Define engineering disciplines, applicable codes, deliverables, and attach
                          project documents.
                        </p>
                      </div>

                      {/* 5. Project Description & Overview */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <label className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                            <FileText className="h-3.5 w-3.5 text-[#0070f3]" />
                            <span>Project Description & Scope *</span>
                          </label>
                          <span
                            className={`text-xs font-mono font-semibold ${
                              projectOverview.length > 1400 ? 'text-amber-600' : 'text-slate-400'
                            }`}
                          >
                            {projectOverview.length} / 1500 Characters
                          </span>
                        </div>
                        <textarea
                          rows={4}
                          maxLength={1500}
                          value={projectOverview}
                          onChange={(e) => setProjectOverview(e.target.value)}
                          placeholder="Please describe your project objectives, scope, current phase, technical challenges, required engineering disciplines, expected deliverables, and any important project requirements."
                          className="w-full rounded-xl border border-slate-200 bg-slate-50/60 p-3.5 text-xs sm:text-sm font-medium text-slate-800 outline-none transition focus:border-[#0070f3] focus:bg-white leading-relaxed"
                        />

                        {/* Helpful Hints clickable pills */}
                        <div className="flex flex-wrap items-center gap-1.5 pt-1">
                          <span className="text-[11px] font-bold text-slate-400 mr-1">
                            Click to include:
                          </span>
                          {[
                            '✓ Project Background',
                            '✓ Current Engineering Phase',
                            '✓ Deliverables Required',
                            '✓ Applicable Standards',
                            '✓ Schedule Constraints',
                            '✓ Procurement Model',
                            '✓ Existing Engineering Data'
                          ].map((hint) => (
                            <button
                              key={hint}
                              type="button"
                              onClick={() => addHintToOverview(hint)}
                              className="rounded-full border border-slate-200 bg-white px-2.5 py-0.5 text-[11px] font-medium text-slate-600 hover:border-[#0070f3] hover:text-[#0070f3] transition-colors"
                            >
                              {hint}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Engineering Disciplines Needed */}
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-800 block">
                          Engineering Disciplines Needed
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {disciplinesList.map((disc) => {
                            const isSelected = selectedDisciplines.includes(disc);
                            return (
                              <button
                                key={disc}
                                type="button"
                                onClick={() => toggleDiscipline(disc)}
                                className={`rounded-xl px-3 py-1.5 text-xs font-semibold transition-all flex items-center gap-1.5 ${
                                  isSelected
                                    ? 'bg-[#0070f3] text-white shadow-sm'
                                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                }`}
                              >
                                {isSelected ? <Check className="h-3 w-3" /> : null}
                                <span>{disc}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Standards & Deliverables Grid */}
                      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                        {/* Applicable Standards */}
                        <div className="space-y-2 rounded-xl border border-slate-200/80 bg-slate-50/50 p-3.5">
                          <label className="text-xs font-bold text-slate-800 block">
                            Applicable Standards & Codes
                          </label>
                          <div className="flex flex-wrap gap-1.5">
                            {standardsList.map((std) => {
                              const isSelected = selectedStandards.includes(std);
                              return (
                                <button
                                  key={std}
                                  type="button"
                                  onClick={() => toggleStandard(std)}
                                  className={`rounded-lg px-2.5 py-1 text-xs font-bold transition-all ${
                                    isSelected
                                      ? 'bg-blue-600 text-white shadow-xs'
                                      : 'bg-white border border-slate-200 text-slate-700 hover:border-blue-300'
                                  }`}
                                >
                                  {std}
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        {/* Deliverables Required */}
                        <div className="space-y-2 rounded-xl border border-slate-200/80 bg-slate-50/50 p-3.5">
                          <label className="text-xs font-bold text-slate-800 block">
                            Expected Deliverables
                          </label>
                          <div className="flex flex-wrap gap-1.5">
                            {deliverablesList.map((del) => {
                              const isSelected = selectedDeliverables.includes(del);
                              return (
                                <button
                                  key={del}
                                  type="button"
                                  onClick={() => toggleDeliverable(del)}
                                  className={`rounded-lg px-2.5 py-1 text-xs font-medium transition-all ${
                                    isSelected
                                      ? 'bg-[#0070f3] text-white shadow-xs font-bold'
                                      : 'bg-white border border-slate-200 text-slate-700 hover:border-blue-300'
                                  }`}
                                >
                                  {del}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      </div>

                      {/* Consultation Type & Preferred Meeting */}
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 rounded-xl border border-slate-200/80 bg-slate-50/50 p-3.5">
                        {/* Consultation Type */}
                        <div>
                          <label className="text-[11px] font-bold text-slate-700 block mb-1">
                            Consultation Type
                          </label>
                          <select
                            value={consultationType}
                            onChange={(e) => setConsultationType(e.target.value)}
                            className="w-full rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-800 outline-none focus:border-[#0070f3]"
                          >
                            {consultationTypesList.map((c) => (
                              <option key={c} value={c}>
                                {c}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Preferred Meeting */}
                        <div>
                          <label className="text-[11px] font-bold text-slate-700 block mb-1">
                            Preferred Meeting
                          </label>
                          <select
                            value={preferredMeeting}
                            onChange={(e) => setPreferredMeeting(e.target.value)}
                            className="w-full rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-800 outline-none focus:border-[#0070f3]"
                          >
                            {meetingPreferencesList.map((m) => (
                              <option key={m} value={m}>
                                {m}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Preferred Contact Time */}
                        <div>
                          <label className="text-[11px] font-bold text-slate-700 block mb-1">
                            Preferred Contact Time
                          </label>
                          <select
                            value={preferredTime}
                            onChange={(e) => setPreferredTime(e.target.value)}
                            className="w-full rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-800 outline-none focus:border-[#0070f3]"
                          >
                            {contactTimesList.map((ct) => (
                              <option key={ct} value={ct}>
                                {ct}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Preferred Response Time */}
                        <div>
                          <label className="text-[11px] font-bold text-slate-700 block mb-1">
                            Preferred Response Time
                          </label>
                          <select
                            value={preferredResponse}
                            onChange={(e) => setPreferredResponse(e.target.value)}
                            className="w-full rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-800 outline-none focus:border-[#0070f3]"
                          >
                            {responseTimesList.map((rt) => (
                              <option key={rt} value={rt}>
                                {rt}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* 6. Upload RFQ / Scope / Drawings */}
                      <div className="space-y-2">
                        <label className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                          <UploadCloud className="h-3.5 w-3.5 text-[#0070f3]" />
                          <span>Upload Project Documents (Optional)</span>
                        </label>

                        <div
                          onDragOver={(e) => {
                            e.preventDefault();
                            setIsDragging(true);
                          }}
                          onDragLeave={() => setIsDragging(false)}
                          onDrop={handleFileDrop}
                          onClick={() => fileInputRef.current?.click()}
                          className={`flex flex-col items-center justify-center rounded-2xl border-2 border-dashed p-6 text-center cursor-pointer transition-colors ${
                            isDragging
                              ? 'border-[#0070f3] bg-blue-50/60'
                              : 'border-slate-200 bg-slate-50/60 hover:bg-slate-50 hover:border-slate-300'
                          }`}
                        >
                          <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleFileInput}
                            multiple
                            className="hidden"
                          />
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-[#0070f3] mb-2">
                            <UploadCloud className="h-6 w-6" />
                          </div>
                          <div className="text-xs sm:text-sm font-bold text-slate-800">
                            Drag & drop files here or <span className="text-[#0070f3] underline">browse</span>
                          </div>
                          <div className="text-[11px] text-slate-500 mt-1 max-w-lg">
                            Supported: RFQ, RFP, Scope of Work, PFD, P&ID, Plot Plans, GA Drawings, CAD Files
                            (DWG/DXF), PDFs, Datasheets, Specifications, ZIP (Max 50 MB per file)
                          </div>
                        </div>

                        {/* Uploaded File List */}
                        {uploadedFiles.length > 0 && (
                          <div className="flex flex-wrap gap-2 pt-2">
                            {uploadedFiles.map((file, idx) => (
                              <div
                                key={idx}
                                className="inline-flex items-center gap-2 rounded-lg border border-blue-200 bg-blue-50/80 px-3 py-1.5 text-xs font-medium text-slate-800"
                              >
                                <FileCheck className="h-3.5 w-3.5 text-[#0070f3]" />
                                <span>{file.name}</span>
                                <span className="text-[10px] text-slate-500 font-mono">({file.size})</span>
                                <button
                                  type="button"
                                  onClick={() => removeFile(idx)}
                                  className="text-slate-400 hover:text-red-500"
                                >
                                  <X className="h-3.5 w-3.5" />
                                </button>
                              </div>
                            ))}
                          </div>
                        )}

                        <div className="text-[11px] text-slate-500 flex items-center gap-1.5">
                          <Lock className="h-3 w-3 text-emerald-600 shrink-0" />
                          <span>
                            🔒 Your documents remain confidential and are used only for proposal preparation.
                          </span>
                        </div>
                      </div>

                      {/* Navigation Controls */}
                      <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="rounded-xl border border-slate-200 px-5 py-2.5 text-xs sm:text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors"
                        >
                          &larr; Back to Project Details
                        </button>
                        <button
                          type="button"
                          onClick={() => setStep(3)}
                          className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0070f3] px-6 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-blue-600 transition-colors"
                        >
                          <span>Next: Your Information</span>
                          <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* ========== STEP 3: CONTACT INFORMATION ========== */}
                  {step === 3 && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-extrabold text-slate-900 tracking-tight font-display">
                          Your Information
                        </h3>
                        <p className="mt-1 text-xs sm:text-sm text-slate-500">
                          Please provide your contact information so our engineering leads can reach out directly.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                        {/* Company Name */}
                        <div className="space-y-1.5">
                          <label className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                            <Building className="h-3.5 w-3.5 text-[#0070f3]" />
                            <span>Company / Organization *</span>
                          </label>
                          <input
                            type="text"
                            required
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                            placeholder="e.g. Chevron, Shell, Jacobs, Bechtel"
                            className="w-full rounded-xl border border-slate-200 bg-slate-50/80 px-3.5 py-2.5 text-xs sm:text-sm font-medium text-slate-800 outline-none transition focus:border-[#0070f3] focus:bg-white"
                          />
                        </div>

                        {/* Contact Person */}
                        <div className="space-y-1.5">
                          <label className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                            <Users className="h-3.5 w-3.5 text-[#0070f3]" />
                            <span>Contact Person (Full Name) *</span>
                          </label>
                          <input
                            type="text"
                            required
                            value={contactName}
                            onChange={(e) => setContactName(e.target.value)}
                            placeholder="e.g. Robert Miller"
                            className="w-full rounded-xl border border-slate-200 bg-slate-50/80 px-3.5 py-2.5 text-xs sm:text-sm font-medium text-slate-800 outline-none transition focus:border-[#0070f3] focus:bg-white"
                          />
                        </div>

                        {/* Job Title */}
                        <div className="space-y-1.5">
                          <label className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                            <ShieldCheck className="h-3.5 w-3.5 text-[#0070f3]" />
                            <span>Job Title / Role *</span>
                          </label>
                          <input
                            type="text"
                            required
                            value={jobTitle}
                            onChange={(e) => setJobTitle(e.target.value)}
                            placeholder="e.g. VP Engineering, Project Director"
                            className="w-full rounded-xl border border-slate-200 bg-slate-50/80 px-3.5 py-2.5 text-xs sm:text-sm font-medium text-slate-800 outline-none transition focus:border-[#0070f3] focus:bg-white"
                          />
                        </div>

                        {/* Work Email */}
                        <div className="space-y-1.5">
                          <label className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                            <Mail className="h-3.5 w-3.5 text-[#0070f3]" />
                            <span>Business Email *</span>
                          </label>
                          <input
                            type="email"
                            required
                            value={workEmail}
                            onChange={(e) => setWorkEmail(e.target.value)}
                            placeholder="robert@company.com"
                            className="w-full rounded-xl border border-slate-200 bg-slate-50/80 px-3.5 py-2.5 text-xs sm:text-sm font-medium text-slate-800 outline-none transition focus:border-[#0070f3] focus:bg-white"
                          />
                        </div>

                        {/* Phone Number */}
                        <div className="space-y-1.5">
                          <label className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                            <Phone className="h-3.5 w-3.5 text-[#0070f3]" />
                            <span>Phone Number *</span>
                          </label>
                          <input
                            type="tel"
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="+1 (713) 555-0199"
                            className="w-full rounded-xl border border-slate-200 bg-slate-50/80 px-3.5 py-2.5 text-xs sm:text-sm font-medium text-slate-800 outline-none transition focus:border-[#0070f3] focus:bg-white"
                          />
                        </div>

                        {/* Website */}
                        <div className="space-y-1.5">
                          <label className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                            <Globe className="h-3.5 w-3.5 text-[#0070f3]" />
                            <span>Company Website (Optional)</span>
                          </label>
                          <input
                            type="url"
                            value={website}
                            onChange={(e) => setWebsite(e.target.value)}
                            placeholder="https://company.com"
                            className="w-full rounded-xl border border-slate-200 bg-slate-50/80 px-3.5 py-2.5 text-xs sm:text-sm font-medium text-slate-800 outline-none transition focus:border-[#0070f3] focus:bg-white"
                          />
                        </div>
                      </div>

                      {/* How Did You Hear About Us & Preferred Contact Method */}
                      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 rounded-xl border border-slate-200/80 bg-slate-50/50 p-4">
                        {/* How did you hear about us */}
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-slate-800 block">
                            How did you hear about us?
                          </label>
                          <select
                            value={hearAbout}
                            onChange={(e) => setHearAbout(e.target.value)}
                            className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs sm:text-sm font-medium text-slate-800 outline-none focus:border-[#0070f3]"
                          >
                            {referralSourcesList.map((src) => (
                              <option key={src} value={src}>
                                {src}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Preferred Contact Method */}
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-slate-800 block">
                            Preferred Contact Method
                          </label>
                          <div className="flex items-center gap-4 pt-1">
                            {(['Email', 'Phone', 'Either'] as const).map((m) => (
                              <label
                                key={m}
                                className="flex items-center gap-1.5 text-xs font-medium text-slate-700 cursor-pointer"
                              >
                                <input
                                  type="radio"
                                  name="contactMethod"
                                  checked={contactMethod === m}
                                  onChange={() => setContactMethod(m)}
                                  className="text-[#0070f3] focus:ring-[#0070f3]"
                                />
                                <span>{m}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Navigation Controls */}
                      <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                        <button
                          type="button"
                          onClick={() => setStep(2)}
                          className="rounded-xl border border-slate-200 px-5 py-2.5 text-xs sm:text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors"
                        >
                          &larr; Back to Requirements
                        </button>
                        <button
                          type="button"
                          onClick={() => setStep(4)}
                          className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0070f3] px-6 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-blue-600 transition-colors"
                        >
                          <span>Next: Review & Submit</span>
                          <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* ========== STEP 4: REVIEW & SUBMIT ========== */}
                  {step === 4 && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-extrabold text-slate-900 tracking-tight font-display">
                          Review & Submit Consultation Request
                        </h3>
                        <p className="mt-1 text-xs sm:text-sm text-slate-500">
                          Please verify your entries before submitting. All information is handled with enterprise-grade
                          confidentiality.
                        </p>
                      </div>

                      {/* Executive RFQ Review Cards */}
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                        {/* 1. Project Details Card */}
                        <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-4 relative">
                          <div className="flex items-center justify-between pb-2 border-b border-slate-200/80 mb-3">
                            <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                              <Box className="h-3.5 w-3.5 text-[#0070f3]" />
                              Project Details
                            </span>
                            <button
                              type="button"
                              onClick={() => setStep(1)}
                              className="text-[11px] font-bold text-[#0070f3] hover:underline"
                            >
                              Edit
                            </button>
                          </div>
                          <div className="space-y-1.5 text-xs text-slate-700">
                            <div>
                              <span className="text-slate-400">Industry:</span>{' '}
                              <span className="font-semibold">{industry}</span>
                            </div>
                            <div>
                              <span className="text-slate-400">Services:</span>{' '}
                              <span className="font-semibold">
                                {selectedServices.join(', ') || 'General'}
                              </span>
                            </div>
                            <div>
                              <span className="text-slate-400">Project Type:</span>{' '}
                              <span className="font-semibold">{projectType}</span>
                            </div>
                            <div>
                              <span className="text-slate-400">CAPEX Value:</span>{' '}
                              <span className="font-semibold text-[#0070f3]">{projectCapex}</span>
                            </div>
                            <div>
                              <span className="text-slate-400">Eng. Budget:</span>{' '}
                              <span className="font-semibold">{engineeringBudget}</span>
                            </div>
                            <div>
                              <span className="text-slate-400">Timeline:</span>{' '}
                              <span className="font-semibold">{timeline}</span>
                            </div>
                            <div>
                              <span className="text-slate-400">Location:</span>{' '}
                              <span className="font-semibold">
                                {country}
                                {stateProvince ? `, ${stateProvince}` : ''}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* 2. Technical Scope Card */}
                        <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-4 relative">
                          <div className="flex items-center justify-between pb-2 border-b border-slate-200/80 mb-3">
                            <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                              <Layers className="h-3.5 w-3.5 text-[#0070f3]" />
                              Technical Scope
                            </span>
                            <button
                              type="button"
                              onClick={() => setStep(2)}
                              className="text-[11px] font-bold text-[#0070f3] hover:underline"
                            >
                              Edit
                            </button>
                          </div>
                          <div className="space-y-1.5 text-xs text-slate-700">
                            <div>
                              <span className="text-slate-400">Disciplines:</span>{' '}
                              <span className="font-semibold">
                                {selectedDisciplines.slice(0, 3).join(', ')}
                                {selectedDisciplines.length > 3
                                  ? ` +${selectedDisciplines.length - 3} more`
                                  : ''}
                              </span>
                            </div>
                            <div>
                              <span className="text-slate-400">Codes:</span>{' '}
                              <span className="font-semibold">{selectedStandards.join(', ')}</span>
                            </div>
                            <div>
                              <span className="text-slate-400">Meeting:</span>{' '}
                              <span className="font-semibold">{preferredMeeting}</span>
                            </div>
                            <div>
                              <span className="text-slate-400">Response:</span>{' '}
                              <span className="font-semibold text-emerald-600">{preferredResponse}</span>
                            </div>
                            <div>
                              <span className="text-slate-400">Attached:</span>{' '}
                              <span className="font-semibold">
                                {uploadedFiles.length > 0
                                  ? `${uploadedFiles.length} file(s)`
                                  : 'None'}
                              </span>
                            </div>
                            {projectOverview && (
                              <div className="pt-1 text-[11px] text-slate-500 italic line-clamp-2">
                                &ldquo;{projectOverview}&rdquo;
                              </div>
                            )}
                          </div>
                        </div>

                        {/* 3. Contact Card */}
                        <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-4 relative">
                          <div className="flex items-center justify-between pb-2 border-b border-slate-200/80 mb-3">
                            <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                              <Users className="h-3.5 w-3.5 text-[#0070f3]" />
                              Contact Info
                            </span>
                            <button
                              type="button"
                              onClick={() => setStep(3)}
                              className="text-[11px] font-bold text-[#0070f3] hover:underline"
                            >
                              Edit
                            </button>
                          </div>
                          <div className="space-y-1.5 text-xs text-slate-700">
                            <div>
                              <span className="text-slate-400">Name:</span>{' '}
                              <span className="font-semibold">{contactName || 'Not specified'}</span>
                            </div>
                            <div>
                              <span className="text-slate-400">Company:</span>{' '}
                              <span className="font-semibold">{companyName || 'Not specified'}</span>
                            </div>
                            <div>
                              <span className="text-slate-400">Title:</span>{' '}
                              <span className="font-semibold">{jobTitle || 'Not specified'}</span>
                            </div>
                            <div>
                              <span className="text-slate-400">Email:</span>{' '}
                              <span className="font-semibold">{workEmail || 'Not specified'}</span>
                            </div>
                            <div>
                              <span className="text-slate-400">Phone:</span>{' '}
                              <span className="font-semibold">{phone || 'Not specified'}</span>
                            </div>
                            <div>
                              <span className="text-slate-400">Via:</span>{' '}
                              <span className="font-semibold">{contactMethod}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Confidentiality & NDA Agreement Checkbox */}
                      <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-4">
                        <label className="flex items-start gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={agreedNda}
                            onChange={(e) => setAgreedNda(e.target.checked)}
                            className="mt-0.5 h-4 w-4 rounded border-emerald-400 text-[#0070f3] focus:ring-[#0070f3]"
                          />
                          <div className="text-xs text-slate-700 leading-relaxed">
                            <span className="font-bold text-slate-900">
                              Enterprise Confidentiality & Mutual Non-Disclosure
                            </span>
                            <p className="mt-0.5 text-slate-600">
                              I confirm this request and accept GTS&apos;s Confidentiality Terms. All shared technical
                              documentation, engineering scope, and consultation details are protected under strict
                              confidentiality and standard non-disclosure obligations.
                            </p>
                          </div>
                        </label>
                      </div>

                      {/* Direct Contacts & LinkedIn Callout */}
                      <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600 pt-2">
                        <div className="flex items-center gap-2">
                          <Mail className="h-3.5 w-3.5 text-[#0070f3]" />
                          <span>Direct inquiries: info@gtsengineering.com</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <a
                            href="https://www.linkedin.com/company/gts-usa/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 font-bold text-[#0070f3] hover:underline"
                          >
                            <span>GTS USA on LinkedIn</span>
                            <ArrowRight className="h-3 w-3" />
                          </a>
                        </div>
                      </div>

                      {/* Submit Action Controls */}
                      <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                        <button
                          type="button"
                          onClick={() => setStep(3)}
                          className="rounded-xl border border-slate-200 px-5 py-2.5 text-xs sm:text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors"
                        >
                          &larr; Back to Contact Information
                        </button>
                        <button
                          type="submit"
                          disabled={!agreedNda || isSubmitting}
                          className={`inline-flex items-center justify-center gap-2 rounded-xl px-8 py-3 text-sm font-bold text-white shadow-lg transition-all ${
                            agreedNda && !isSubmitting
                              ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700'
                              : 'bg-slate-400 cursor-not-allowed'
                          }`}
                        >
                          {isSubmitting ? (
                            <>
                              <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                              <span>Submitting Consultation...</span>
                            </>
                          ) : (
                            <>
                              <span>Submit Consultation Request</span>
                              <ArrowRight className="h-4 w-4" />
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  )}
                </form>
              ) : (
                /* ========== SUCCESS CONFIRMATION STATE ========== */
                <div className="py-8 text-center space-y-5">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>

                  <div>
                    <span className="inline-block rounded-full bg-blue-50 border border-blue-200 px-3 py-1 text-xs font-mono font-bold text-[#0070f3] mb-2">
                      Reference #{inquiryId}
                    </span>
                    <h3 className="text-2xl font-black text-slate-900 tracking-tight font-display">
                      Consultation Request Received
                    </h3>
                    <p className="mt-2 max-w-lg mx-auto text-sm text-slate-600 leading-relaxed">
                      Thank you{contactName ? `, ${contactName}` : ''}! Your technical inquiry has been
                      securely received. A dedicated GTS Lead Engineering Partner has been assigned to
                      review your scope and will connect with you{' '}
                      <span className="font-bold text-slate-800">{preferredResponse}</span> via{' '}
                      <span className="font-bold text-slate-800">{contactMethod}</span>.
                    </p>
                  </div>

                  {/* Next Steps Timeline */}
                  <div className="max-w-md mx-auto text-left rounded-2xl border border-slate-200 bg-slate-50/80 p-5 space-y-3">
                    <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                      Next Steps
                    </div>
                    <div className="flex items-start gap-3 text-xs text-slate-700">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0070f3] text-white font-bold text-[10px]">
                        1
                      </div>
                      <div>Technical scope assessment by Discipline Lead</div>
                    </div>
                    <div className="flex items-start gap-3 text-xs text-slate-700">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0070f3] text-white font-bold text-[10px]">
                        2
                      </div>
                      <div>Formal NDA & confidential scoping confirmation</div>
                    </div>
                    <div className="flex items-start gap-3 text-xs text-slate-700">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0070f3] text-white font-bold text-[10px]">
                        3
                      </div>
                      <div>Interactive discovery call & tailored engineering proposal</div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
                    <button
                      type="button"
                      onClick={resetForm}
                      className="rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-xs sm:text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                    <Link
                      href="/solutions"
                      className="rounded-xl bg-[#0070f3] px-6 py-2.5 text-xs sm:text-sm font-bold text-white hover:bg-blue-600 transition-colors"
                    >
                      Explore GTS Solution Areas
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}

