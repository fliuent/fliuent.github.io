export interface ProfileInfo {
  name: string;
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
