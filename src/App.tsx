/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import {
  initialProfile,
  initialDegrees,
  initialCourseCategories,
  initialAwards,
  initialProjects,
  initialTeaching,
  initialHobbies,
  siteCopy,
} from "./content/siteContent";
import Sidebar from "./components/Sidebar";
import HomeSection from "./components/HomeSection";
import EducationSection from "./components/EducationSection";
import TeachingSection from "./components/TeachingSection";
import HobbySection from "./components/HobbySection";
import { AnimatePresence } from "motion/react";

export default function App() {
  // Navigation active tab
  const [activeTab, setActiveTab] = useState<string>("home");

  // Mobile sidebar open state
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Switch between rendered tabs
  const renderTabContent = () => {
    switch (activeTab) {
      case "home":
        return <HomeSection profile={initialProfile} projects={initialProjects} copy={siteCopy} />;
      case "education":
        return (
          <EducationSection
            degrees={initialDegrees}
            courseCategories={initialCourseCategories}
            awards={initialAwards}
            sections={siteCopy.sections}
            emptyState={siteCopy.home.emptyState}
          />
        );
      case "teaching":
        return <TeachingSection teaching={initialTeaching} copy={siteCopy} />;
      case "hobby":
        return <HobbySection hobbies={initialHobbies} title={siteCopy.sections.hobbies} />;
      default:
        return <HomeSection profile={initialProfile} projects={initialProjects} copy={siteCopy} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafc] text-gray-800 flex flex-col md:flex-row font-sans selection:bg-blue-150 selection:text-blue-900 transition-colors duration-300">
      
      {/* Sidebar Navigation */}
      <Sidebar
        profile={initialProfile}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
        navigation={siteCopy.navigation}
      />

      {/* Main Right Content Section */}
      <main className="flex-1 flex flex-col md:ml-[260px] min-w-0">
        
        {/* Core content block wrapper */}
        <div className="flex-1 w-full max-w-4xl mx-auto px-4 md:px-8 lg:px-12 py-10 md:py-20 mt-14 md:mt-0 flex flex-col justify-between min-h-screen">
          
          {/* Active section transition area */}
          <div className="flex-1 pb-16">
            <AnimatePresence mode="wait">
              {renderTabContent()}
            </AnimatePresence>
          </div>

          {/* Bottom Footer block matching image exactly */}
          <footer className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[11px] font-mono text-gray-400">
            <div>
              <span>© {new Date().getFullYear()} {initialProfile.name}</span>
            </div>
            <div>
              <span>{siteCopy.footer.lastUpdatedLabel}</span>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
