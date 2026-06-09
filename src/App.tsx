/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { ProfileInfo, Degree, CourseCategory, Award, Project, TeachingExperience, Hobby } from "./types";
import {
  initialProfile,
  initialDegrees,
  initialCourseCategories,
  initialAwards,
  initialProjects,
  initialTeaching,
  initialHobbies,
  siteContent,
} from "./content/siteContent";
import Sidebar from "./components/Sidebar";
import HomeSection from "./components/HomeSection";
import EducationSection from "./components/EducationSection";
import TeachingSection from "./components/TeachingSection";
import HobbySection from "./components/HobbySection";
import EditorPanel from "./components/EditorPanel";
import { Sparkles, ArrowRight, BookOpen, Heart, GraduationCap, Compass, HelpCircle } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

export default function App() {
  // Navigation active tab
  const [activeTab, setActiveTab] = useState<string>("home");

  // Mobile sidebar open state
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Customizer visible state
  const [customizing, setCustomizing] = useState(false);

  // Portfolio State hooks in sync with LocalStorage for full playability!
  const [profile, setProfile] = useState<ProfileInfo>(initialProfile);
  const [degrees, setDegrees] = useState<Degree[]>(initialDegrees);
  const [courseCategories, setCourseCategories] = useState<CourseCategory[]>(initialCourseCategories);
  const [awards, setAwards] = useState<Award[]>(initialAwards);
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [teaching, setTeaching] = useState<TeachingExperience[]>(initialTeaching);
  const [hobbies, setHobbies] = useState<Hobby[]>(initialHobbies);

  useEffect(() => {
    document.title = `${profile.name} ${siteContent.site.titleSuffix}`;
  }, [profile.name]);

  // Load from local storage on render
  useEffect(() => {
    const loadState = <T,>(key: string, setter: (val: T) => void, fallback: T) => {
      const saved = localStorage.getItem(key);
      if (saved) {
        try {
          const parsed = JSON.parse(saved);

          if (key === "por_profile" && (parsed?.avatarUrl?.includes("chibi_avatar") || parsed?.avatarUrl?.includes("/assets/profile-avatar"))) {
            setter({
              ...parsed,
              avatarUrl: initialProfile.avatarUrl,
            } as T);
            return;
          }

          setter(parsed);
        } catch (e) {
          console.error(`Error loading state for ${key}`, e);
        }
      }
    };

    loadState("por_profile", setProfile, initialProfile);
    loadState("por_degrees", setDegrees, initialDegrees);
    loadState("por_courseCategories", setCourseCategories, initialCourseCategories);
    loadState("por_awards", setAwards, initialAwards);
    loadState("por_projects", setProjects, initialProjects);
    loadState("por_teaching", setTeaching, initialTeaching);
    loadState("por_hobbies", setHobbies, initialHobbies);
  }, []);

  // Sync to local storage state updates
  useEffect(() => {
    localStorage.setItem("por_profile", JSON.stringify(profile));
  }, [profile]);
  useEffect(() => {
    localStorage.setItem("por_degrees", JSON.stringify(degrees));
  }, [degrees]);
  useEffect(() => {
    localStorage.setItem("por_courseCategories", JSON.stringify(courseCategories));
  }, [courseCategories]);
  useEffect(() => {
    localStorage.setItem("por_awards", JSON.stringify(awards));
  }, [awards]);
  useEffect(() => {
    localStorage.setItem("por_projects", JSON.stringify(projects));
  }, [projects]);
  useEffect(() => {
    localStorage.setItem("por_teaching", JSON.stringify(teaching));
  }, [teaching]);
  useEffect(() => {
    localStorage.setItem("por_hobbies", JSON.stringify(hobbies));
  }, [hobbies]);

  // Handle Full Reset
  const handleResetPortfolio = () => {
    localStorage.removeItem("por_profile");
    localStorage.removeItem("por_degrees");
    localStorage.removeItem("por_courseCategories");
    localStorage.removeItem("por_awards");
    localStorage.removeItem("por_projects");
    localStorage.removeItem("por_teaching");
    localStorage.removeItem("por_hobbies");

    setProfile(initialProfile);
    setDegrees(initialDegrees);
    setCourseCategories(initialCourseCategories);
    setAwards(initialAwards);
    setProjects(initialProjects);
    setTeaching(initialTeaching);
    setHobbies(initialHobbies);
    setCustomizing(false);
  };

  // Switch between rendered tabs
  const renderTabContent = () => {
    switch (activeTab) {
      case "home":
        return <HomeSection profile={profile} projects={projects} />;
      case "education":
        return (
          <EducationSection
            degrees={degrees}
            courseCategories={courseCategories}
            awards={awards}
          />
        );
      case "teaching":
        return <TeachingSection teaching={teaching} />;
      case "hobby":
        return <HobbySection hobbies={hobbies} />;
      default:
        return <HomeSection profile={profile} projects={projects} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafc] text-gray-800 flex flex-col md:flex-row font-sans selection:bg-blue-150 selection:text-blue-900 transition-colors duration-300">
      
      {/* Sidebar Navigation */}
      <Sidebar
        profile={profile}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
        customizing={customizing}
        setCustomizing={setCustomizing}
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
              <span>© {new Date().getFullYear()} {profile.name}</span>
            </div>
            <div>
              <span>{siteContent.footer.lastUpdate}</span>
            </div>
          </footer>
        </div>
      </main>

      {/* Slide-out Customization Panel side interface */}
      <AnimatePresence>
        {customizing && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ type: "spring", stiffness: 150, damping: 20 }}
            className="fixed top-0 bottom-0 right-0 z-50 h-full w-full sm:max-w-md bg-white border-l border-gray-100 shadow-2xl flex"
          >
            <EditorPanel
              profile={profile}
              setProfile={setProfile}
              degrees={degrees}
              setDegrees={setDegrees}
              awards={awards}
              setAwards={setAwards}
              projects={projects}
              setProjects={setProjects}
              teaching={teaching}
              setTeaching={setTeaching}
              hobbies={hobbies}
              setHobbies={setHobbies}
              onReset={handleResetPortfolio}
              onClose={() => setCustomizing(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
