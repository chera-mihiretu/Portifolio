interface SkillItem {
  name: string;
  level: number;
}

interface SkillCategory {
  name: string;
  icon: string;
  items: SkillItem[];
}

export const skills: SkillCategory[] = [
  {
    name: "Frontend Development",
    icon: "/window.svg",
    items: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "Tailwind CSS", level: 85 },
      { name: "HTML/CSS", level: 90 }
    ]
  },
  {
    name: "Backend Development",
    icon: "/file.svg",
    items: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 80 },
      { name: "Python", level: 75 },
      { name: "Django", level: 70 },
      { name: "RESTful APIs", level: 85 }
    ]
  },
  {
    name: "Mobile Development",
    icon: "/globe.svg",
    items: [
      { name: "Flutter", level: 85 },
      { name: "Dart", level: 80 },
      { name: "React Native", level: 75 },
      { name: "Android", level: 70 },
      { name: "iOS", level: 65 }
    ]
  },
  {
    name: "Database",
    icon: "/file.svg",
    items: [
      { name: "MongoDB", level: 80 },
      { name: "PostgreSQL", level: 75 },
      { name: "MySQL", level: 70 },
      { name: "Firebase", level: 75 },
      { name: "Redis", level: 65 }
    ]
  },
  {
    name: "DevOps & Tools",
    icon: "/window.svg",
    items: [
      { name: "Git", level: 85 },
      { name: "Docker", level: 75 },
      { name: "AWS", level: 70 },
      { name: "CI/CD", level: 75 },
      { name: "Linux", level: 80 }
    ]
  },
  {
    name: "Machine Learning",
    icon: "/globe.svg",
    items: [
      { name: "TensorFlow", level: 75 },
      { name: "PyTorch", level: 70 },
      { name: "Scikit-learn", level: 80 },
      { name: "Pandas", level: 85 },
      { name: "NumPy", level: 85 }
    ]
  }
]; 