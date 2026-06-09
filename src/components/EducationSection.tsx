import { Degree, CourseCategory, Award } from "../types";
import { GraduationCap, Award as AwardIcon, BookOpen, ExternalLink, ShieldCheck, Github } from "lucide-react";
import { motion } from "motion/react";

interface EducationSectionProps {
  degrees: Degree[];
  courseCategories: CourseCategory[];
  awards: Award[];
}

export default function EducationSection({ degrees, courseCategories, awards }: EducationSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.35 }}
      className="space-y-12"
    >
      {/* 1. Academic Degrees Section */}
      <section id="academic-degrees" className="space-y-6">
        <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
          <GraduationCap className="w-6 h-6 text-[#007bfe]" />
          <h2 className="font-heading text-2xl font-bold text-[#007bfe]" id="edu-title">
            Education
          </h2>
        </div>

        <div className="space-y-8">
          {degrees.map((degree) => (
            <div key={degree.id} className="group relative flex flex-col gap-1 hover:translate-x-1 transition-all duration-300">
              {/* Header: University on Left, Location on Right */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4">
                <h3 className="font-heading text-lg font-bold text-gray-800 leading-snug">
                  {degree.university}
                </h3>
                <span className="text-xs sm:text-sm font-medium text-gray-400 font-mono sm:text-right">
                  {degree.location}
                </span>
              </div>
              
              {/* Info: Degree detail on Left, Period on Right */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4">
                <p className="text-sm text-gray-600 font-sans">
                  {degree.degreeName} in <span className="font-medium text-gray-700">{degree.field}</span>
                  {degree.gpa && (
                    <>
                      , <span className="text-xs font-semibold text-blue-600 font-mono">GPA: {degree.gpa}</span>
                    </>
                  )}
                  {degree.supervisor && (
                    <>
                      {" "}(Supervisor:{" "}
                      {degree.supervisor === "Ke Wang" ? (
                        <a
                          href="https://www.math.hkust.edu.hk/~kewang/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#007bfe] hover:underline font-medium"
                        >
                          Ke Wang
                        </a>
                      ) : (
                        <span className="font-medium text-gray-800">{degree.supervisor}</span>
                      )}
                      )
                    </>
                  )}
                </p>
                <span className="text-xs text-gray-400 font-mono sm:text-right">
                  {degree.period}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Structured Course Categories Section */}
      <section id="academic-courses" className="space-y-6">
        <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
          <BookOpen className="w-5 h-5 text-[#007bfe]" />
          <h2 className="font-heading text-xl md:text-2xl font-bold text-[#007bfe]" id="courses-title">
            Courses
          </h2>
        </div>

        <div className="space-y-8">
          {courseCategories.map((category) => {
            const isTbdOnly = category.courses.length === 1 && category.courses[0].title === "To Be Done.";
            return (
              <div key={category.id} className="space-y-3">
                {/* Category Subheading matching screenshot styling */}
                <h3 className="font-sans text-sm md:text-[15px] font-bold text-gray-800">
                  {category.name}
                </h3>

                {isTbdOnly ? (
                  <div className="p-4 bg-gray-50/50 border border-dashed border-gray-200 rounded-xl text-center">
                    <span className="font-mono text-xs text-gray-400 font-semibold tracking-wider">
                      To Be Done.
                    </span>
                  </div>
                ) : (
                  <div className="divide-y divide-gray-100/65">
                    {category.courses.map((course) => (
                      <div
                        key={course.id}
                        className="py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs md:text-sm transition-colors hover:bg-black/[0.01] px-1 rounded-sm"
                      >
                        {/* Course Title and Code with inline Links formatted as (Certificate) / (GitHub Repo) */}
                        <div className="text-gray-600 font-sans max-w-xl">
                          {course.code && <span className="font-mono font-medium text-[#007bfe] mr-1.5">{course.code}:</span>}
                          <span>{course.title}</span>

                          {/* Parenthesised action links representing certificates or repositories with custom colors */}
                          <span className="inline-flex gap-1.5 ml-2 font-mono text-[11px]">
                            {course.certificateUrl && (
                              <span className="text-gray-400">
                                (
                                <a
                                  href={course.certificateUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-[#007bfe] hover:underline inline-flex items-center gap-0.5"
                                >
                                  Certificate
                                </a>
                                )
                              </span>
                            )}
                            {course.githubUrl && (
                              <span className="text-gray-400">
                                (
                                <a
                                  href={course.githubUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-[#007bfe] hover:underline inline-flex items-center gap-0.5"
                                >
                                  GitHub Repo
                                </a>
                                )
                              </span>
                            )}
                          </span>
                        </div>

                        {/* Platform & Year right-aligned */}
                        <div className="font-mono text-xs text-gray-500 sm:text-right flex-shrink-0">
                          {course.platform}, {course.year}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Selected Awards Section */}
      <section id="selected-awards" className="space-y-6">
        <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
          <AwardIcon className="w-5 h-5 text-[#007bfe]" />
          <h2 className="font-heading text-xl md:text-2xl font-bold text-[#007bfe]" id="awards-title">
            Awards
          </h2>
        </div>

        <div className="divide-y divide-gray-100/65">
          {awards.map((award) => (
            <div
              key={award.id}
              className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:translate-x-0.5 transition-all duration-300"
            >
              {/* Award Details (Title and conferring Institution) */}
              <div className="text-xs md:text-sm font-sans text-gray-700">
                <span className="font-medium text-gray-800">{award.title}</span>
                <span className="text-gray-400">, {award.institution}</span>
              </div>

              {/* Award Date */}
              <div className="font-mono text-xs text-gray-400 sm:text-right flex-shrink-0">
                {award.date}
              </div>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
