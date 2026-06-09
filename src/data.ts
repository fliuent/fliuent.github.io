import { ProfileInfo, Degree, CourseCategory, Award, Project, TeachingExperience, Hobby } from "./types";
import chibiAvatar from "./chibi_avatar.svg";

export const initialProfile: ProfileInfo = {
  name: "Fengkai Liu",
  title: "PhD Student in Mathematics at HKUST",
  avatarUrl: chibiAvatar, // beautiful chibi avatar matching user requested sketch details
  email: "fliuar@connect.ust.hk",
  phone: "",
  address: "",
  bio: "Hi, I am Fengkai Liu.",
  github: "https://github.com/wxdins", // personal github link
  linkedin: "https://linkedin.com/in/fengkai-liu",
  website: "https://fengkai.connect.ust.hk",
};

export const initialDegrees: Degree[] = [
  {
    id: "deg-1",
    university: "Hong Kong University of Science and Technology",
    degreeName: "Doctor of Philosophy",
    field: "Mathematics",
    gpa: "", // GPA field left empty as requested
    location: "Clear Water Bay, Hong Kong",
    period: "Aug 2024 - Now",
    supervisor: "Ke Wang",
  },
  {
    id: "deg-2",
    university: "University of Science and Technology of China",
    degreeName: "Bachelor of Science",
    field: "Mathematics and Applied Mathematics",
    gpa: "", // GPA field left empty as requested
    location: "Hefei, China",
    period: "Sept 2020 - Jun 2024",
  },
];

export const initialCourseCategories: CourseCategory[] = [
  {
    id: "cat-1",
    name: "Coursework & Curriculum",
    courses: [
      {
        id: "c-tbd",
        title: "To Be Done.",
        platform: "HKUST / USTC",
        year: "Aug 2024 - Present",
      }
    ],
  },
];

export const initialAwards: Award[] = [
  {
    id: "aw-1",
    title: "Postgraduate Studentship",
    institution: "HKUST",
    date: "2024 - 2028",
  },
  {
    id: "aw-2",
    title: "JAC-NIO Scholarship",
    institution: "USTC",
    date: "2023",
  },
  {
    id: "aw-3",
    title: "Outstanding Student Scholarship, Silver Award",
    institution: "USTC",
    date: "2021, 2022",
  },
  {
    id: "aw-4",
    title: "35th Chinese Mathematics Olympiad, Silver Medal",
    institution: "Chinese Mathematical Society",
    date: "2019",
  },
];

export const initialProjects: Project[] = [
  {
    id: "proj-1",
    title: "To Be Done.",
    role: "",
    period: "",
    description: "",
  },
];

export const initialTeaching: TeachingExperience[] = [
  {
    id: "teach-1",
    role: "TA",
    courseName: "MATH 2421 - Probability",
    studentsCount: 50,
    instructor: "Ke Wang",
    institution: "HKUST",
    period: "2025 Spring",
    description: "Conducted tutorials, held office hours, and graded assignments.",
  },
  {
    id: "teach-2",
    role: "TA",
    courseName: "MATH 2121 - Linear Algebra",
    studentsCount: 52,
    instructor: "Min Yan",
    institution: "HKUST",
    period: "2025 Fall",
    description: "Conducted tutorials, held office hours, and graded assignments.",
  },
  {
    id: "teach-3",
    role: "TA",
    courseName: "MATH 2421 - Probability",
    studentsCount: 55,
    instructor: "Ke Wang",
    institution: "HKUST",
    period: "2026 Spring",
    description: "Conducted tutorials, held office hours, and graded assignments.",
  },
];

export const initialHobbies: Hobby[] = [
  {
    id: "hob-1",
    title: "Billiards",
    category: "Precision Sports",
    description: "Calculating precise physical collision paths, bounce angles, spin friction coefficients, and optimal cue-ball velocity vectors. Love playing both 8-ball and 9-ball pools.",
    imageUrl: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=600",
    iconName: "Sliders",
  },
  {
    id: "hob-2",
    title: "Gourmet",
    category: "Gastronomy",
    description: "Savoring cultural cuisines from classic Hong Kong dim sum and traditional USTC student canteens, to fine global dining. I also enjoy baking and exploring molecular gastronomy.",
    imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=600",
    iconName: "Heart",
  },
  {
    id: "hob-3",
    title: "Hiking",
    category: "Recreation",
    description: "Scrambling through vertical summits and scenic lines across Hong Kong peak trails, such as Dragon's Back and Lantau, plus various nature reserves in China.",
    imageUrl: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&q=80&w=600",
    iconName: "Compass",
  },
  {
    id: "hob-4",
    title: "Travel",
    category: "Geographic Interests",
    description: "Traveling to experience diverse cultural heritages, regional languages, architecture, and beautiful pristine landscapes. Documenting travel journeys with photo logs.",
    imageUrl: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=600",
    iconName: "Telescope",
  },
];
