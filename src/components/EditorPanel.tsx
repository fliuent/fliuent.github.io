import React, { useState } from "react";
import { ProfileInfo, Degree, Award, Project, TeachingExperience, Hobby } from "../types";
import { Save, RotateCcw, X, Edit3, Plus, Trash2, Smartphone, Home, BookOpen, Heart, Award as AwardIcon, User } from "lucide-react";

interface EditorPanelProps {
  profile: ProfileInfo;
  setProfile: (val: ProfileInfo) => void;
  degrees: Degree[];
  setDegrees: (val: Degree[]) => void;
  awards: Award[];
  setAwards: (val: Award[]) => void;
  projects: Project[];
  setProjects: (val: Project[]) => void;
  teaching: TeachingExperience[];
  setTeaching: (val: TeachingExperience[]) => void;
  hobbies: Hobby[];
  setHobbies: (val: Hobby[]) => void;
  onReset: () => void;
  onClose: () => void;
}

export default function EditorPanel({
  profile,
  setProfile,
  degrees,
  setDegrees,
  awards,
  setAwards,
  projects,
  setProjects,
  teaching,
  setTeaching,
  hobbies,
  setHobbies,
  onReset,
  onClose,
}: EditorPanelProps) {
  const [activeTab, setActiveTab] = useState<"profile" | "education" | "projects" | "experiences">("profile");

  // Local Form States
  const [name, setName] = useState(profile.name);
  const [title, setTitle] = useState(profile.title);
  const [avatar, setAvatar] = useState(profile.avatarUrl);
  const [email, setEmail] = useState(profile.email);
  const [bio, setBio] = useState(profile.bio);

  const [newDegreeUni, setNewDegreeUni] = useState("");
  const [newDegreeField, setNewDegreeField] = useState("");
  const [newDegreeGpa, setNewDegreeGpa] = useState("");
  const [newDegreeLocation, setNewDegreeLocation] = useState("");
  const [newDegreePeriod, setNewDegreePeriod] = useState("");

  const [newAwardTitle, setNewAwardTitle] = useState("");
  const [newAwardInst, setNewAwardInst] = useState("");
  const [newAwardDate, setNewAwardDate] = useState("");

  const [newProjTitle, setNewProjTitle] = useState("");
  const [newProjRole, setNewProjRole] = useState("");
  const [newProjUrl, setNewProjUrl] = useState("");
  const [newProjPeriod, setNewProjPeriod] = useState("");
  const [newProjDesc, setNewProjDesc] = useState("");

  const handleUpdateProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setProfile({
      ...profile,
      name,
      title,
      avatarUrl: avatar,
      email,
      bio,
    });
  };

  const handleAddDegree = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newDegreeUni || !newDegreeField) return;
    const newDeg: Degree = {
      id: "deg-" + Date.now(),
      university: newDegreeUni,
      degreeName: "Degree",
      field: newDegreeField,
      gpa: newDegreeGpa || "3.5",
      location: newDegreeLocation || "California",
      period: newDegreePeriod || "2024 - 2026",
    };
    setDegrees([...degrees, newDeg]);
    setNewDegreeUni("");
    setNewDegreeField("");
    setNewDegreeGpa("");
    setNewDegreeLocation("");
    setNewDegreePeriod("");
  };

  const handleDeleteDegree = (id: string) => {
    setDegrees(degrees.filter((d) => d.id !== id));
  };

  const handleAddAward = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAwardTitle) return;
    const newAw: Award = {
      id: "aw-" + Date.now(),
      title: newAwardTitle,
      institution: newAwardInst || "Institution",
      date: newAwardDate || "2026",
    };
    setAwards([...awards, newAw]);
    setNewAwardTitle("");
    setNewAwardInst("");
    setNewAwardDate("");
  };

  const handleDeleteAward = (id: string) => {
    setAwards(awards.filter((a) => a.id !== id));
  };

  const handleAddProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProjTitle || !newProjDesc) return;
    const newProj: Project = {
      id: "proj-" + Date.now(),
      title: newProjTitle,
      role: newProjRole || "Developer",
      url: newProjUrl || "",
      period: newProjPeriod || "2026",
      description: newProjDesc,
    };
    setProjects([newProj, ...projects]);
    setNewProjTitle("");
    setNewProjRole("");
    setNewProjUrl("");
    setNewProjPeriod("");
    setNewProjDesc("");
  };

  const handleDeleteProject = (id: string) => {
    setProjects(projects.filter((p) => p.id !== id));
  };

  return (
    <div
      className="bg-slate-50 border-l border-gray-200 w-full lg:w-[350px] xl:w-[380px] h-full flex flex-col justify-between"
      id="editor-panel"
    >
      {/* Header */}
      <div className="p-4 bg-white border-b border-gray-200 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Edit3 className="w-5 h-5 text-amber-500" />
          <h2 className="font-heading font-bold text-gray-800 text-sm">Portfolio Editor</h2>
        </div>
        <button
          onClick={onClose}
          className="p-1 text-gray-400 hover:text-gray-600 rounded-md hover:bg-gray-100 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Internal Tabs navigation */}
      <div className="bg-white border-b border-gray-100 grid grid-cols-4 gap-0 text-center">
        <button
          onClick={() => setActiveTab("profile")}
          className={`py-2 text-[11px] font-bold border-b-2 transition-all ${
            activeTab === "profile" ? "border-amber-500 text-amber-600 bg-amber-50/20" : "border-transparent text-gray-500 hover:text-gray-700"
          }`}
        >
          Profile
        </button>
        <button
          onClick={() => setActiveTab("education")}
          className={`py-2 text-[11px] font-bold border-b-2 transition-all ${
            activeTab === "education" ? "border-amber-500 text-amber-600 bg-amber-50/20" : "border-transparent text-gray-500 hover:text-gray-700"
          }`}
        >
          Education
        </button>
        <button
          onClick={() => setActiveTab("projects")}
          className={`py-2 text-[11px] font-bold border-b-2 transition-all ${
            activeTab === "projects" ? "border-amber-500 text-amber-600 bg-amber-50/20" : "border-transparent text-gray-500 hover:text-gray-700"
          }`}
        >
          Projects
        </button>
        <button
          onClick={() => setActiveTab("experiences")}
          className={`py-2 text-[11px] font-bold border-b-2 transition-all ${
            activeTab === "experiences" ? "border-amber-500 text-amber-600 bg-amber-50/20" : "border-transparent text-gray-500 hover:text-gray-700"
          }`}
        >
          Info List
        </button>
      </div>

      {/* Editor Content Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {activeTab === "profile" && (
          <form onSubmit={handleUpdateProfile} className="space-y-4">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-gray-400" />
              <span>Basic Contact Profile</span>
            </h3>

            <div>
              <label className="block text-[11px] font-medium text-gray-500 mb-1">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-2 py-1.5 text-xs bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-amber-500"
              />
            </div>

            <div>
              <label className="block text-[11px] font-medium text-gray-500 mb-1">Title / Subtitle</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-2 py-1.5 text-xs bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-amber-500"
              />
            </div>

            <div>
              <label className="block text-[11px] font-medium text-gray-500 mb-1">Avatar Image URL</label>
              <input
                type="text"
                value={avatar}
                onChange={(e) => setAvatar(e.target.value)}
                className="w-full px-2 py-1.5 text-xs bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-amber-500"
              />
            </div>

            <div>
              <label className="block text-[11px] font-medium text-gray-500 mb-1">Email Connection</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-2 py-1.5 text-xs bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-amber-500"
              />
            </div>

            <div>
              <label className="block text-[11px] font-medium text-gray-500 mb-1">Narrative Bio</label>
              <textarea
                rows={5}
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="w-full px-2 py-1.5 text-xs bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-amber-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Apply Changes</span>
            </button>
          </form>
        )}

        {activeTab === "education" && (
          <div className="space-y-6">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-gray-400" />
              <span>Academic History</span>
            </h3>

            {/* List existing */}
            <div className="space-y-2">
              {degrees.map((deg) => (
                <div key={deg.id} className="p-2.5 bg-white border border-gray-150 rounded-xl flex items-center justify-between text-xs">
                  <div>
                    <h4 className="font-bold text-gray-800">{deg.university}</h4>
                    <p className="text-[10px] text-gray-500">{deg.field} (GPA: {deg.gpa})</p>
                  </div>
                  <button
                    onClick={() => handleDeleteDegree(deg.id)}
                    className="p-1 text-red-400 hover:text-red-600 hover:bg-red-50 rounded"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>

            {/* Add new Degree Form */}
            <form onSubmit={handleAddDegree} className="p-3 bg-white border border-gray-100 rounded-xl space-y-3">
              <span className="text-[10px] font-bold text-amber-600 block uppercase">Add University Degree</span>
              
              <input
                type="text"
                required
                value={newDegreeUni}
                onChange={(e) => setNewDegreeUni(e.target.value)}
                placeholder="University (e.g. Stanford University)"
                className="w-full p-1.5 text-xs bg-gray-50 border border-gray-200 rounded focus:outline-none"
              />

              <input
                type="text"
                required
                value={newDegreeField}
                onChange={(e) => setNewDegreeField(e.target.value)}
                placeholder="Major / Field (e.g. Physics)"
                className="w-full p-1.5 text-xs bg-gray-50 border border-gray-200 rounded focus:outline-none"
              />

              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  value={newDegreeGpa}
                  onChange={(e) => setNewDegreeGpa(e.target.value)}
                  placeholder="GPA"
                  className="p-1.5 text-xs bg-gray-50 border border-gray-200 rounded focus:outline-none"
                />
                <input
                  type="text"
                  value={newDegreeLocation}
                  onChange={(e) => setNewDegreeLocation(e.target.value)}
                  placeholder="Location"
                  className="p-1.5 text-xs bg-gray-50 border border-gray-200 rounded focus:outline-none"
                />
              </div>

              <input
                type="text"
                value={newDegreePeriod}
                onChange={(e) => setNewDegreePeriod(e.target.value)}
                placeholder="Period (e.g. Sep 2021 - Sep 2023)"
                className="w-full p-1.5 text-xs bg-gray-50 border border-gray-200 rounded focus:outline-none"
              />

              <button
                type="submit"
                className="w-full py-1.5 bg-gray-800 hover:bg-gray-900 text-white rounded text-[11px] font-bold flex items-center justify-center gap-1 cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Degree Record</span>
              </button>
            </form>
          </div>
        )}

        {activeTab === "projects" && (
          <div className="space-y-6">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
              <Heart className="w-3.5 h-3.5 text-gray-400" />
              <span>Projects Showcase</span>
            </h3>

            {/* List existing */}
            <div className="space-y-2">
              {projects.map((p) => (
                <div key={p.id} className="p-2.5 bg-white border border-gray-150 rounded-xl flex items-center justify-between text-xs">
                  <div className="max-w-[80%]">
                    <h4 className="font-bold text-gray-800 truncate">{p.title}</h4>
                    <p className="text-[10px] text-gray-500 truncate">{p.role}</p>
                  </div>
                  <button
                    onClick={() => handleDeleteProject(p.id)}
                    className="p-1 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg flex-shrink-0"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>

            {/* Add Project Form */}
            <form onSubmit={handleAddProject} className="p-3 bg-white border border-gray-100 rounded-xl space-y-3">
              <span className="text-[10px] font-bold text-amber-600 block uppercase">Add Portfolio Project</span>
              
              <input
                type="text"
                required
                value={newProjTitle}
                onChange={(e) => setNewProjTitle(e.target.value)}
                placeholder="Project Title"
                className="w-full p-1.5 text-xs bg-gray-50 border border-gray-200 rounded focus:outline-none"
              />

              <input
                type="text"
                value={newProjRole}
                onChange={(e) => setNewProjRole(e.target.value)}
                placeholder="Role (e.g. Lead Designer)"
                className="w-full p-1.5 text-xs bg-gray-50 border border-gray-200 rounded focus:outline-none"
              />

              <input
                type="text"
                value={newProjUrl}
                onChange={(e) => setNewProjUrl(e.target.value)}
                placeholder="Website URL (e.g. https://domain.com)"
                className="w-full p-1.5 text-xs bg-gray-50 border border-gray-200 rounded focus:outline-none"
              />

              <input
                type="text"
                value={newProjPeriod}
                onChange={(e) => setNewProjPeriod(e.target.value)}
                placeholder="Period (e.g. Feb 2026 - Now)"
                className="w-full p-1.5 text-xs bg-gray-50 border border-gray-200 rounded focus:outline-none"
              />

              <textarea
                required
                rows={3}
                value={newProjDesc}
                onChange={(e) => setNewProjDesc(e.target.value)}
                placeholder="Detailed Description..."
                className="w-full p-1.5 text-xs bg-gray-50 border border-gray-200 rounded focus:outline-none"
              />

              <button
                type="submit"
                className="w-full py-1.5 bg-gray-800 hover:bg-gray-900 text-white rounded text-[11px] font-bold flex items-center justify-center gap-1 cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Publish Project</span>
              </button>
            </form>
          </div>
        )}

        {activeTab === "experiences" && (
          <div className="space-y-6">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
              <AwardIcon className="w-3.5 h-3.5 text-gray-400" />
              <span>Awards & Honors</span>
            </h3>

            {/* List existing */}
            <div className="space-y-2">
              {awards.map((a) => (
                <div key={a.id} className="p-2.5 bg-white border border-gray-150 rounded-xl flex items-center justify-between text-xs">
                  <div>
                    <h4 className="font-bold text-gray-800">{a.title}</h4>
                    <p className="text-[10px] text-gray-500">{a.institution}, {a.date}</p>
                  </div>
                  <button
                    onClick={() => handleDeleteAward(a.id)}
                    className="p-1 text-red-400 hover:text-red-600 hover:bg-red-50 rounded"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>

            {/* Add Award Form */}
            <form onSubmit={handleAddAward} className="p-3 bg-white border border-gray-100 rounded-xl space-y-3">
              <span className="text-[10px] font-bold text-amber-600 block uppercase">Add Selected Award</span>
              
              <input
                type="text"
                required
                value={newAwardTitle}
                onChange={(e) => setNewAwardTitle(e.target.value)}
                placeholder="Award Title (e.g. First Prize)"
                className="w-full p-1.5 text-xs bg-gray-50 border border-gray-200 rounded focus:outline-none"
              />

              <input
                type="text"
                value={newAwardInst}
                onChange={(e) => setNewAwardInst(e.target.value)}
                placeholder="Institution (e.g. USTC)"
                className="w-full p-1.5 text-xs bg-gray-50 border border-gray-200 rounded focus:outline-none"
              />

              <input
                type="text"
                value={newAwardDate}
                onChange={(e) => setNewAwardDate(e.target.value)}
                placeholder="Date (e.g. Oct 2025)"
                className="w-full p-1.5 text-xs bg-gray-50 border border-gray-200 rounded focus:outline-none"
              />

              <button
                type="submit"
                className="w-full py-1.5 bg-gray-800 hover:bg-gray-900 text-white rounded text-[11px] font-bold flex items-center justify-center gap-1 cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Award Citation</span>
              </button>
            </form>
          </div>
        )}
      </div>

      {/* Footer operations (Reset Option) */}
      <div className="p-4 bg-white border-t border-gray-200">
        <button
          onClick={() => {
            if (confirm("Are you sure you want to reset all portfolio fields to Jingning Zhang defaults? This wipes customized data.")) {
              onReset();
            }
          }}
          className="w-full py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Restore Original Profile</span>
        </button>
      </div>
    </div>
  );
}
