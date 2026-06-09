import { Award, CourseCategory, Degree, Hobby, ProfileInfo, Project, TeachingExperience } from "../types";

export const siteContent = {
  site: {
    titleSuffix: "Portfolio",
  },

  profile: {
    name: "Fengkai Liu",
    title: "PhD Student in Mathematics at HKUST",
    avatarUrl: "/images/profile-avatar.png",
    avatarAlt: "Profile avatar",
    email: "fliuar@connect.ust.hk",
    phone: "",
    address: "",
    bio: "Hi, I am Fengkai Liu.",
    github: "https://github.com/wxdins",
    linkedin: "https://linkedin.com/in/fengkai-liu",
    website: "https://fengkai.connect.ust.hk",
  } satisfies ProfileInfo & { avatarAlt: string },

  navigation: [
    { id: "home", label: "Home", iconName: "User" },
    { id: "education", label: "Education", iconName: "GraduationCap" },
    { id: "teaching", label: "Teaching", iconName: "BookOpen" },
    { id: "hobby", label: "Hobbies", iconName: "Heart" },
  ],

  home: {
    badge: "Graduate Portfolio",
    welcomePrefix: "Welcome, I'm",
    biographyTitle: "Biography",
    emailTitle: "Email",
    fieldsOfInterestTitle: "Fields of Interest",
    fieldsOfInterest: ["Probability", "Random Matrix Theory"],
    projectsTitle: "Personal Projects",
    keyFeaturesLabel: "Key Features:",
    guestbookTitle: "Send a Message or Question",
    guestbookNameLabel: "Your Name *",
    guestbookNamePlaceholder: "Name",
    guestbookEmailLabel: "Your Email (Optional)",
    guestbookEmailPlaceholder: "Email address",
    guestbookMessageLabel: "Message Detail *",
    guestbookMessagePlaceholder: "Leave notes, feedback, or general questions...",
    guestbookSubmitLabel: "Submit Message",
    guestbookSuccessMessage: "Thank you! Your message was saved locally in guestbook.",
    guestbookNotesLabel: "Submitted Notes",
    guestbookEmptyTitle: "No local guest records yet.",
    guestbookEmptySubtitle: "Be the first to submit a custom note above!",
  },

  educationSection: {
    educationTitle: "Education",
    coursesTitle: "Courses",
    awardsTitle: "Awards",
    degreeConnector: "in",
    gpaLabel: "GPA:",
    supervisorLabel: "Supervisor:",
    certificateLabel: "Certificate",
    githubRepoLabel: "GitHub Repo",
  },

  teachingSection: {
    title: "Teaching Experience",
    intro: "I have about two years of Teaching Assistant experience, the list is as follows.",
    tableHeaders: {
      course: "Course Name (# of students)",
      instructor: "Instructor",
      position: "Position",
      university: "Univ",
      time: "Time",
    },
    emptyInstructor: "None",
    dutiesButtonLabel: "TA duties",
    evaluationButtonLabel: "Students's Evaluation",
    dutiesBadge: "Recitation & Lab Tasks",
    evaluationBadge: "Student Comments & Metrics",
    dutiesTitle: "Official Teaching Assistant Duties",
    evaluationTitle: "Evaluation Summaries",
    dutiesResponsibilitySuffix: "System Core Responsibilities",
    closePanelLabel: "Close panel",
    duties: [
      {
        univ: "UCSD",
        tasks: [
          "Led weekly discussion sessions for 20+ engineering undergraduates.",
          "Graded exams, quizzes, and weekly homework assignments with strict mechanical guidelines.",
          "Held office hours to help students resolve equations, state parameters, and vector systems.",
        ],
      },
      {
        univ: "USTC",
        tasks: [
          "Prepared laboratory equipment and supervised weekly physics experiments for undergraduate classes.",
          "Conducted homework evaluation, tutorial presentation, and clarified difficult optics / solid-state physics concepts.",
          "Formulated comprehensive reference sheets, scoring guides, and MATLAB/Python simulation scripts.",
        ],
      },
    ],
    evaluations: [
      {
        metric: "Overall TA Approval Rating",
        value: "96.4%",
        details: "Consistently rated in the top decile of department teaching assistants for clarity and responsiveness.",
      },
      {
        metric: "Student Comments Quote",
        value: "Excellent Guidance!",
        details: "'Fengkai was patient in explaining complex mechanical diagrams and multi-stage physics equations during late office hours.'",
      },
      {
        metric: "Average Response Latency",
        value: "< 2 Hours",
        details: "Maintained active communication on student forums (Piazza) resolving queries promptly.",
      },
    ],
  },

  hobbySection: {
    title: "Hobbies & Recreation",
    intro: "Outside mathematics, I enjoy exploring precision sports, food culture, outdoor trails, and travel experiences.",
    selectedBadge: "Selected Hobby",
    activeSimulationLabel: "Active Simulator Running",
    launchSimulationLabel: "Launch Billiards sandbox",
    simulatorTitle: "Billiard Trajectory & Collision Simulator",
    simulatorSubtitle: "Dynamic math modeling of billiard-ball reflection vectors",
    elasticityLabel: "Elasticity:",
    ballCountLabel: "Ball Count:",
    resetSimulationLabel: "Reset billiard balls",
    demonstrationLabel: "Physics Demonstration",
    demonstrationHint: "Hover to guide ball coordinates and watch kinetic energy scatter",
  },

  footer: {
    lastUpdated: "Last updated: June 2026",
    lastUpdate: "Last Update: June 2026",
  },

  ui: {
    toggleCustomizerTitle: "Toggle Customize Panel",
    toggleMenuLabel: "Toggle menu",
    closeCustomizerLabel: "Close Customizer",
    customizeContentLabel: "Customize Content",
  },

  placeholders: {
    toBeDone: "To Be Done.",
  },

  degrees: [
    {
      id: "deg-1",
      university: "Hong Kong University of Science and Technology",
      degreeName: "Doctor of Philosophy",
      field: "Mathematics",
      gpa: "",
      location: "Clear Water Bay, Hong Kong",
      period: "Aug 2024 - Now",
      supervisor: "Ke Wang",
      supervisorUrl: "https://www.math.hkust.edu.hk/~kewang/",
    },
    {
      id: "deg-2",
      university: "University of Science and Technology of China",
      degreeName: "Bachelor of Science",
      field: "Mathematics and Applied Mathematics",
      gpa: "",
      location: "Hefei, China",
      period: "Sept 2020 - Jun 2024",
    },
  ] satisfies Degree[],

  courseCategories: [
    {
      id: "cat-1",
      name: "Coursework & Curriculum",
      courses: [
        {
          id: "c-tbd",
          title: "To Be Done.",
          platform: "HKUST / USTC",
          year: "Aug 2024 - Present",
        },
      ],
    },
  ] satisfies CourseCategory[],

  awards: [
    { id: "aw-1", title: "Postgraduate Studentship", institution: "HKUST", date: "2024 - 2028" },
    { id: "aw-2", title: "JAC-NIO Scholarship", institution: "USTC", date: "2023" },
    { id: "aw-3", title: "Outstanding Student Scholarship, Silver Award", institution: "USTC", date: "2021, 2022" },
    { id: "aw-4", title: "35th Chinese Mathematics Olympiad, Silver Medal", institution: "Chinese Mathematical Society", date: "2019" },
  ] satisfies Award[],

  projects: [
    {
      id: "proj-1",
      title: "To Be Done.",
      role: "",
      period: "",
      description: "",
    },
  ] satisfies Project[],

  teaching: [
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
  ] satisfies TeachingExperience[],

  hobbies: [
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
  ] satisfies Hobby[],
};

export const initialProfile = siteContent.profile;
export const initialDegrees = siteContent.degrees;
export const initialCourseCategories = siteContent.courseCategories;
export const initialAwards = siteContent.awards;
export const initialProjects = siteContent.projects;
export const initialTeaching = siteContent.teaching;
export const initialHobbies = siteContent.hobbies;
