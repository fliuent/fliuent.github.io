import { NavItem, ProfileInfo } from "../types";
import { Github, Linkedin, Globe, Menu, X, Sparkles, User, GraduationCap, BookOpen, Heart, Code } from "lucide-react";

interface SidebarProps {
  profile: ProfileInfo;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isOpen: boolean; // mobile drawer state
  setIsOpen: (open: boolean) => void;
  customizing: boolean;
  setCustomizing: (val: boolean) => void;
  navigation: NavItem[];
}

export default function Sidebar({
  profile,
  activeTab,
  setActiveTab,
  isOpen,
  setIsOpen,
  customizing,
  setCustomizing,
  navigation,
}: SidebarProps) {
  const menuIcons = {
    home: User,
    education: GraduationCap,
    teaching: BookOpen,
    hobby: Heart,
  };

  const menuItems = navigation.map((item) => ({
    ...item,
    icon: menuIcons[item.id as keyof typeof menuIcons] || User,
  }));

  return (
    <>
      {/* Mobile Top Header Bar */}
      <header className="md:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-100 px-4 flex items-center justify-between z-20" id="mobile-header">
        <div className="flex items-center gap-3">
          <div className="relative w-9 h-9 rounded-full overflow-hidden bg-white border border-gray-100 flex-shrink-0">
            <img
              src={profile.avatarUrl}
              alt={profile.name}
              className="block w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <h1 className="font-heading font-medium text-gray-900 text-sm">{profile.name}</h1>
            <p className="text-[10px] text-gray-400 truncate max-w-[180px] font-mono">{profile.title}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setCustomizing(!customizing)}
            className={`p-2 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors ${
              customizing ? "bg-amber-50 text-amber-700" : "bg-gray-50 text-gray-600 hover:bg-gray-100"
            }`}
            title="Toggle Customize Panel"
          >
            <Sparkles className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Backdrop for mobile drawer */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/30 backdrop-blur-xs z-30 transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Panel - Desktop persistent & Mobile slide-out */}
      <aside
        id="sidebar-container"
        className={`fixed top-0 bottom-0 left-0 w-[240px] md:w-[260px] bg-white border-r border-gray-100 md:border-r-0 md:bg-transparent z-40 transition-transform md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } py-10 px-6 flex flex-col justify-between h-full`}
      >
        <div className="flex flex-col items-center">
          {/* Close button inside mobile menu */}
          <button
            onClick={() => setIsOpen(false)}
            className="md:hidden absolute top-4 right-4 p-1 text-gray-400 hover:text-gray-600 rounded-md hover:bg-gray-50"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Profile Section */}
          <div className="flex flex-col items-center text-center mt-2 md:mt-0">
            <div className="relative w-32 h-32 md:w-36 md:h-36 rounded-full p-[3px] bg-gradient-to-tr from-blue-500 via-indigo-600 to-purple-500 shadow-md">
              <div className="w-full h-full rounded-full overflow-hidden bg-white border-2 border-white">
                <img
                  src={profile.avatarUrl}
                  alt={profile.name}
                  className="block w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <h2 className="mt-4 font-heading text-xl md:text-2xl font-bold tracking-tight text-gray-800">
              {profile.name}
            </h2>

            {/* Social Icons matching photo */}
            <div className="flex items-center gap-4 mt-3 text-gray-500">
              {profile.github && (
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-900 hover:scale-110 transition-all"
                  aria-label="GitHub Feed"
                >
                  <Github className="w-5 h-5" />
                </a>
              )}
              {profile.linkedin && (
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#007bfe] hover:scale-110 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
              {profile.website && (
                <a
                  href={profile.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-600 hover:scale-110 transition-all"
                  aria-label="Personal URL"
                >
                  <Globe className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Navigation Items (Styling matches pictures: solid blue container for active, clear text for inactive) */}
          <nav className="w-full mt-10 space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center gap-3.5 px-4 py-2.5 rounded-lg text-left transition-all text-sm font-medium ${
                    isActive
                      ? "bg-[#007bfe] text-white shadow-sm font-semibold"
                      : "text-[#007bfe] hover:text-[#0052ad] hover:bg-blue-50/50"
                  }`}
                >
                  <Icon className="w-4 h-4 flex-shrink-0" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Bottom copyright & customization panel triggers */}
        <div className="space-y-4">
          <button
            onClick={() => setCustomizing(!customizing)}
            className={`w-full flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg border transition-all ${
              customizing
                ? "bg-amber-500 text-white border-amber-500 hover:bg-amber-600"
                : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50 shadow-xs"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{customizing ? "Close Customizer" : "Customize Content"}</span>
          </button>

          <div className="text-center font-mono text-[10px] text-gray-400">
            <p>© {new Date().getFullYear()} {profile.name}</p>
            <p className="mt-0.5">Last updated: June 2026</p>
          </div>
        </div>
      </aside>
    </>
  );
}
