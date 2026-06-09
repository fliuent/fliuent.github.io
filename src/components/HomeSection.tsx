import React, { useState, useEffect } from "react";
import { ProfileInfo, Project } from "../types";
import { Mail, MapPin, Phone, MessageSquarePlus, Send, MessageSquareDot, CheckSquare, Sparkles, FolderKanban, Link as LinkIcon } from "lucide-react";
import { motion } from "motion/react";
import { siteContent } from "../content/siteContent";

interface HomeSectionProps {
  profile: ProfileInfo;
  projects: Project[];
}

interface Message {
  id: string;
  name: string;
  email: string;
  text: string;
  date: string;
}

export default function HomeSection({ profile, projects }: HomeSectionProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("guestbook_messages");
    if (saved) {
      try {
        setMessages(JSON.parse(saved));
      } catch (e) {
        console.error("Error parsing saved guest messages", e);
      }
    }
  }, []);

  const handleSubmitMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !text) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      name,
      email,
      text,
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    const updated = [newMessage, ...messages];
    setMessages(updated);
    localStorage.setItem("guestbook_messages", JSON.stringify(updated));

    setName("");
    setEmail("");
    setText("");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const { home, placeholders } = siteContent;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.35 }}
      className="space-y-10"
    >
      {/* Hero Header Banner */}
      <div className="bg-gradient-to-r from-blue-500/10 via-indigo-500/5 to-transparent rounded-2xl p-6 md:p-8 border border-blue-500/10 relative overflow-hidden" id="home-banner">
        <div className="absolute top-0 right-0 w-48 h-48 bg-blue-400/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-1/3 w-32 h-32 bg-indigo-400/10 rounded-full blur-2xl -z-10" />
        
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{home.badge}</span>
          </div>
          <h1 className="font-heading text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-none mb-3">
            {home.welcomePrefix} {profile.name}
          </h1>
          <p className="text-sm md:text-base text-gray-500 font-medium">
            {profile.title}
          </p>
        </div>
      </div>

      {/* Narrative {home.biographyTitle} Statement */}
      <section className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-xs" id="biography">
        <h2 className="font-heading text-xl md:text-2xl font-bold text-gray-900 border-b border-gray-100 pb-3 mb-4">
          {home.biographyTitle}
        </h2>
        <p className="text-gray-600 leading-relaxed text-sm md:text-[15px] whitespace-pre-line">
          {profile.bio}
        </p>
      </section>

      {/* Grid: Contact Information & Focus Areas */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Contact info cards */}
        <div className="lg:col-span-6 bg-white rounded-2xl p-6 border border-gray-100 shadow-xs" id="contact-details">
          <h2 className="font-heading text-lg font-bold text-gray-900 pb-2 mb-4 border-b border-gray-100">
            {home.emailTitle}
          </h2>
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-blue-50 text-[#007bfe] rounded-lg">
              <Mail className="w-4 h-4" />
            </div>
            <a href={`mailto:${profile.email}`} className="text-sm md:text-base text-gray-700 hover:text-[#007bfe] hover:underline font-medium break-all">
              {profile.email}
            </a>
          </div>
        </div>

        {/* Focus Areas */}
        <div className="lg:col-span-6 bg-white rounded-2xl p-6 border border-gray-100 shadow-xs" id="scientific-interests">
          <h2 className="font-heading text-lg font-bold text-gray-900 pb-2 mb-4 border-b border-gray-100">
            {home.fieldsOfInterestTitle}
          </h2>
          <div className="flex items-center min-h-[44px]">
            <p className="text-sm md:text-base text-gray-700 font-medium">
              {home.fieldsOfInterest.join(", ")}
            </p>
          </div>
        </div>
      </div>

      {/* {home.projectsTitle} Showcase Section directly from Image 3 */}
      <section id="personal-projects" className="space-y-6">
        <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
          <FolderKanban className="w-5 h-5 text-[#007bfe]" />
          <h2 className="font-heading text-xl md:text-2xl font-bold text-[#007bfe]">
            {home.projectsTitle}
          </h2>
        </div>

        <div className="space-y-10">
          {projects.length === 0 || (projects.length === 1 && projects[0].title === placeholders.toBeDone) ? (
            <div className="p-8 bg-gray-50/50 border border-dashed border-gray-200 rounded-2xl text-center">
              <span className="font-mono text-xs text-gray-400 font-semibold tracking-wider">
                {placeholders.toBeDone}
              </span>
            </div>
          ) : (
            projects.map((proj) => (
              <div key={proj.id} className="group relative space-y-2 hover:translate-x-0.5 transition-all duration-300">
                {/* Project Title & Date Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4">
                  <h3 className="font-sans text-sm md:text-base font-bold text-gray-800 leading-snug">
                    {proj.title}
                  </h3>
                  <span className="text-xs md:text-sm font-medium text-gray-400 font-mono sm:text-right flex-shrink-0">
                    {proj.period}
                  </span>
                </div>

                {/* Project Website Link */}
                {proj.url && (
                  <div className="text-xs md:text-sm">
                    <a
                      href={proj.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#007bfe] hover:underline hover:text-blue-600 font-sans inline-flex items-center gap-1 font-medium"
                    >
                      {proj.url.replace("https://", "").replace("http://", "")}
                    </a>
                  </div>
                )}

                {/* Description Body */}
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-sans font-light">
                  {proj.description}
                </p>

                {/* Key Features bullet detail */}
                {proj.keyFeatures && (
                  <div className="text-xs md:text-sm font-sans pt-1">
                    <p className="text-gray-500 font-light">
                      <span className="font-bold text-[#007bfe] mr-1.5">{home.keyFeaturesLabel}</span>
                      {proj.keyFeatures}
                    </p>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </section>

      {/* Multi-User Guestbook Message Panel */}
      <section className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-xs" id="collaboration-board">
        <div className="flex items-center gap-2 mb-5">
          <MessageSquarePlus className="w-5 h-5 text-[#007bfe]" />
          <h2 className="font-heading text-xl font-bold text-gray-900">
            {home.guestbookTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Guest message submission form */}
          <form onSubmit={handleSubmitMessage} className="lg:col-span-6 space-y-4">
            <div>
              <label htmlFor="guest-name" className="block text-xs font-semibold text-gray-600 mb-1">{home.guestbookNameLabel}</label>
              <input
                id="guest-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={home.guestbookNamePlaceholder}
                className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#007bfe] focus:bg-white transition-all"
              />
            </div>

            <div>
              <label htmlFor="guest-email" className="block text-xs font-semibold text-gray-600 mb-1">{home.guestbookEmailLabel}</label>
              <input
                id="guest-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={home.guestbookEmailPlaceholder}
                className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#007bfe] focus:bg-white transition-all"
              />
            </div>

            <div>
              <label htmlFor="guest-msg" className="block text-xs font-semibold text-gray-600 mb-1">{home.guestbookMessageLabel}</label>
              <textarea
                id="guest-msg"
                required
                rows={4}
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder={home.guestbookMessagePlaceholder}
                className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#007bfe] focus:bg-white transition-all"
              />
            </div>

            <button
              type="submit"
              className="px-4 py-2 bg-[#007bfe] hover:bg-blue-600 text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition-all w-full sm:w-auto cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{home.guestbookSubmitLabel}</span>
            </button>

            {submitted && (
              <div className="flex items-center gap-2 text-xs text-emerald-600 bg-emerald-50 px-3 py-2.5 rounded-lg border border-emerald-100">
                <CheckSquare className="w-4 h-4 flex-shrink-0" />
                <span>{home.guestbookSuccessMessage}</span>
              </div>
            )}
          </form>

          {/* Guestbook messages list */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
              <MessageSquareDot className="w-4 h-4 text-gray-300" />
              <span>{home.guestbookNotesLabel} ({messages.length})</span>
            </h3>

            {messages.length === 0 ? (
              <div className="text-center py-10 px-4 border border-dashed border-gray-100 rounded-xl">
                <p className="text-gray-400 text-xs">{home.guestbookEmptyTitle}</p>
                <p className="text-[10px] text-gray-300 mt-1">{home.guestbookEmptySubtitle}</p>
              </div>
            ) : (
              <div className="max-h-[300px] overflow-y-auto space-y-3 pr-2">
                {messages.map((item) => (
                  <div key={item.id} className="p-3.5 bg-gray-50 rounded-xl border border-gray-100 relative">
                    <div className="flex justify-between items-start gap-4 mb-1.5">
                      <span className="text-xs font-semibold text-gray-800">{item.name}</span>
                      <span className="text-[10px] text-gray-400 font-mono">{item.date}</span>
                    </div>
                    <p className="text-xs text-gray-600 whitespace-pre-line leading-relaxed italic">
                      "{item.text}"
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
