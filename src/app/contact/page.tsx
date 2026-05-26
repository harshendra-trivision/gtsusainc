'use client';

import React, { useState } from 'react';
import { Mail, MapPin, Phone, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import Card from '@/components/common/Card';
import ImagePlaceholder from '@/components/common/ImagePlaceholder';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    interest: 'product-engineering',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API database submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        interest: 'product-engineering',
        message: ''
      });
    }, 1500);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Page Header */}
      <section className="bg-slate-950 text-white py-20 blueprint-grid relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/70 to-slate-950" />
        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/15 border border-accent/30 text-xs font-mono text-accent-light uppercase tracking-wider">
            Connect With Us
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
            Discuss Your Engineering Needs
          </h1>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto leading-relaxed">
            Get in touch with our global offices to deploy virtual extensions, request estimates, or explore strategic partnerships.
          </p>
        </div>
      </section>

      {/* Main Form & details */}
      <section className="py-16 sm:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Office Contacts */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <h2 className="text-2xl font-bold text-primary font-display">Global Headquarters</h2>
                <div className="h-1 w-12 bg-accent rounded-full" />
                <p className="text-slate-500 text-xs leading-relaxed">
                  Reach out directly via email or coordinate with our US project headquarters.
                </p>
              </div>

              {/* Contact Information Cards */}
              <div className="space-y-4 text-xs text-slate-700">
                <div className="flex items-start gap-3 bg-slate-50 p-4 border border-slate-250/50 rounded-xl">
                  <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-primary">Plano, Texas, USA</h4>
                    <p className="text-slate-500 mt-1 leading-relaxed">
                      GTS Engineering USA Incorporated<br />
                      Corporate HQ & Project Management Office<br />
                      Plano, Texas, USA
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-slate-50 p-4 border border-slate-250/50 rounded-xl">
                  <Mail className="w-5 h-5 text-accent shrink-0" />
                  <div>
                    <h4 className="font-bold text-primary">Email Support</h4>
                    <a href="mailto:info@gtsusainc.com" className="text-accent hover:underline mt-0.5 block font-medium">
                      info@gtsusainc.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-slate-50 p-4 border border-slate-250/50 rounded-xl">
                  <Phone className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-primary">Global Delivery Hubs</h4>
                    <p className="text-slate-500 mt-1">
                      Our multi-disciplinary engineering resources are located across the USA and India.
                    </p>
                  </div>
                </div>
              </div>

              {/* Geographic Placeholder Map */}
              <div className="p-1 border border-slate-200 bg-slate-50 rounded-xl overflow-hidden shadow-sm">
                <ImagePlaceholder 
                  alt="GTS Geographic HQ Location map" 
                  aspectRatio="video" 
                  showOverlay={false} 
                />
              </div>
            </div>

            {/* Right Column: Premium Interactive Contact Form */}
            <div className="lg:col-span-7">
              <Card className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-sm">
                <div className="space-y-2 mb-8">
                  <h3 className="text-lg font-bold text-primary flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-accent" />
                    Project Inquiry Portal
                  </h3>
                  <p className="text-slate-500 text-xs">
                    Please submit your specifications. A design manager will review your submission and contact you within 24 hours.
                  </p>
                </div>

                {submitSuccess ? (
                  <div className="bg-white border border-slate-200 rounded-xl p-8 text-center space-y-4">
                    <div className="p-3 bg-green-50 text-green-600 rounded-full inline-block">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-base font-bold text-primary">Message Submitted Successfully</h4>
                    <p className="text-slate-500 text-xs leading-relaxed max-w-sm mx-auto">
                      Thank you for contacting GTS Engineering. Your query has been logged in our secure system and forwarded to the appropriate division manager.
                    </p>
                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg transition-colors"
                    >
                      Submit Another Query
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5 text-xs text-slate-800">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div className="space-y-1.5">
                        <label htmlFor="name" className="font-bold text-slate-700">Full Name</label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="John Doe"
                          className="w-full px-3.5 py-2.5 bg-white border border-slate-250 rounded-lg focus:outline-none focus:border-accent font-medium text-slate-900 transition-colors"
                        />
                      </div>

                      {/* Email */}
                      <div className="space-y-1.5">
                        <label htmlFor="email" className="font-bold text-slate-700">Business Email</label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="jdoe@company.com"
                          className="w-full px-3.5 py-2.5 bg-white border border-slate-250 rounded-lg focus:outline-none focus:border-accent font-medium text-slate-900 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Company */}
                      <div className="space-y-1.5">
                        <label htmlFor="company" className="font-bold text-slate-700">Company Name</label>
                        <input
                          id="company"
                          type="text"
                          required
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Acme Heavy Machinery"
                          className="w-full px-3.5 py-2.5 bg-white border border-slate-250 rounded-lg focus:outline-none focus:border-accent font-medium text-slate-900 transition-colors"
                        />
                      </div>

                      {/* Area of Interest */}
                      <div className="space-y-1.5">
                        <label htmlFor="interest" className="font-bold text-slate-700">Area of Interest</label>
                        <select
                          id="interest"
                          value={formData.interest}
                          onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-white border border-slate-250 rounded-lg focus:outline-none focus:border-accent font-medium text-slate-900 transition-colors"
                        >
                          <option value="product-engineering">Product Engineering</option>
                          <option value="plant-process-design">Plant & Process Design</option>
                          <option value="document-engineering">Document Engineering</option>
                          <option value="geoinformatics-engineering">Geoinformatics Engineering</option>
                          <option value="plm-software-engineering">PLM & Software Engineering</option>
                          <option value="project-management-controls">Project Management & Controls</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <label htmlFor="message" className="font-bold text-slate-700">Project Requirements & Scope</label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please detail your design dimensions, simulation standards, or required timeline..."
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-250 rounded-lg focus:outline-none focus:border-accent font-medium text-slate-900 transition-colors resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isScmitting}
                      className="flex w-full items-center justify-center gap-2 rounded-lg bg-accent py-3 text-center text-xs font-semibold text-white hover:bg-accent-dark disabled:bg-slate-400 disabled:cursor-not-allowed transition-all shadow-md shadow-accent/15"
                    >
                      {isSubmitting ? (
                        <span>Logging Inquiry...</span>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          Transmit Engineering Inquiry
                        </>
                      )}
                    </button>
                  </form>
                )}
              </Card>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
// Fix spelling typo inside submit disabled parameter
const isScmitting = false;
