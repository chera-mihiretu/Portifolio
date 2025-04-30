interface Education {
  institution: string;
  degree: string;
  duration: string;
  location: string;
  gpa?: string;
  logo: string;
  courses?: string[];
}

export const education: Education[] = [
  {
    institution: "Addis Ababa Science and Technology University",
    degree: "Bachelor of Science in Computer Science",
    duration: "2019 - 2023",
    location: "Addis Ababa, Ethiopia",
    gpa: "3.8/4.0",
    logo: "/education/astu-logo.png",
    courses: [
      "Data Structures and Algorithms",
      "Database Systems",
      "Computer Networks",
      "Software Engineering",
      "Artificial Intelligence",
      "Machine Learning",
      "Web Development",
      "Mobile Application Development"
    ]
  },
  {
    institution: "A2SV",
    degree: "Software Engineering Training",
    duration: "2022 - 2023",
    location: "Remote",
    logo: "/education/a2sv-logo.png",
    courses: [
      "Advanced Data Structures",
      "System Design",
      "Interview Preparation",
      "Team Projects",
      "Technical Communication"
    ]
  },
  {
    institution: "ALX",
    degree: "Software Engineering Program",
    duration: "2023 - 2024",
    location: "Remote",
    logo: "/education/alx-logo.png",
    courses: [
      "Full Stack Development",
      "DevOps",
      "Cloud Computing",
      "Agile Methodologies",
      "Project Management"
    ]
  }
]; 