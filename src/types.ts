export interface ProfileInfo {
  name: string;
  avatarPath?: string;
  avatarUrl: string;
  title: string;
  email: string;
  phone?: string;
  address: string;
  bio: string;
  github: string;
  linkedin: string;
  website: string;
}

export interface Degree {
  id: string;
  university: string;
  degreeName: string;
  field: string;
  gpa: string;
  location: string;
  period: string;
  supervisor?: string;
}

export interface Course {
  id: string;
  code?: string;
  title: string;
  certificateUrl?: string;
  githubUrl?: string;
  platform: string;
  year: string;
}

export interface CourseCategory {
  id: string;
  name: string;
  courses: Course[];
}

export interface Award {
  id: string;
  title: string;
  institution: string;
  date: string;
}

export interface Project {
  id: string;
  title: string;
  role: string;
  url?: string;
  period: string;
  description: string;
  bullets?: string[];
  keyFeatures?: string;
}

export interface TeachingExperience {
  id: string;
  role: string;
  courseName: string;
  institution: string;
  period: string;
  description: string;
  instructor?: string;
  studentsCount?: string | number;
  materials?: { label: string; url: string }[];
}

export interface Hobby {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  category: string;
  iconName: string; // Lucide icon name
}

export interface NavItem {
  id: string;
  label: string;
}

export interface TeachingDutyGroup {
  university: string;
  tasks: string[];
}

export interface TeachingEvaluation {
  metric: string;
  value: string;
  details: string;
}

export interface SiteCopy {
  navigation: NavItem[];
  sections: {
    homeBadge: string;
    biography: string;
    email: string;
    interests: string;
    projects: string;
    guestbook: string;
    education: string;
    courses: string;
    awards: string;
    teaching: string;
    hobbies: string;
  };
  home: {
    welcomePrefix: string;
    interestsText: string;
    emptyState: string;
  };
  teaching: {
    intro: string;
    columns: {
      course: string;
      instructor: string;
      position: string;
      university: string;
      time: string;
    };
    dutiesButton: string;
    evaluationsButton: string;
    dutiesLabel: string;
    evaluationsLabel: string;
    dutiesTitle: string;
    evaluationsTitle: string;
    duties: TeachingDutyGroup[];
    evaluations: TeachingEvaluation[];
  };
  footer: {
    lastUpdatedLabel: string;
  };
}
