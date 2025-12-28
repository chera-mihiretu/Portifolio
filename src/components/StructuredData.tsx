export default function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Chera Mihiretu",
    "url": "https://chera-mihiretu.vercel.app",
    "image": "https://chera-mihiretu.vercel.app/assets/me.png",
    "sameAs": [
      "https://github.com/chera-mihiretu",
      "https://leetcode.com/cheramihiretu",
      "https://codeforces.com/profile/chera_mihiretu",
      "https://www.credly.com/users/chera-mihiretu"
    ],
    "jobTitle": "Software Engineer",
    "worksFor": {
      "@type": "EducationalOrganization",
      "name": "Adama Science and Technology University"
    },
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "Adama Science and Technology University",
        "location": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Adama",
            "addressRegion": "Oromia",
            "addressCountry": "Ethiopia"
          }
        }
      },
      {
        "@type": "EducationalOrganization",
        "name": "Africa To Silicon Valley (A2SV)",
        "url": "https://www.a2sv.org"
      }
    ],
    "award": [
      "ACPC 2025 Finalist",
      "Top Ethiopia GitHub Contributor",
      "AWS Certified Solutions Architect - Associate",
      "AWS Certified Cloud Practitioner",
      "ICPC Ethiopian Collegiate 12th Place",
      "A2SV Hackathon Top 8"
    ],
    "knowsAbout": [
      "Software Engineering",
      "Full Stack Development",
      "Mobile Development",
      "Cloud Computing",
      "Competitive Programming",
      "Algorithms",
      "Data Structures",
      "Artificial Intelligence",
      "Machine Learning",
      "AWS",
      "React",
      "Next.js",
      "React Native",
      "TypeScript",
      "Python",
      "Django",
      "Node.js"
    ],
    "nationality": {
      "@type": "Country",
      "name": "Ethiopia"
    },
    "description": "Software Engineering student at Adama Science and Technology University, 2025 ACPC Finalist, Africa To Silicon Valley Graduate, and Top Ethiopia GitHub Contributor. Specializing in Full-Stack Development, Mobile Apps, AI/ML, and Competitive Programming."
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Chera Mihiretu Portfolio",
    "url": "https://chera-mihiretu.vercel.app",
    "description": "Portfolio website of Chera Mihiretu - Ethiopian Software Engineer",
    "author": {
      "@type": "Person",
      "name": "Chera Mihiretu"
    },
    "inLanguage": "en-US"
  };

  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": {
      "@type": "Person",
      "name": "Chera Mihiretu",
      "alternateName": "Chera",
      "description": "Software Engineer | ACPC 2025 Finalist | Top Ethiopia GitHub Contributor",
      "url": "https://chera-mihiretu.vercel.app"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://chera-mihiretu.vercel.app"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Projects",
        "item": "https://chera-mihiretu.vercel.app/#projects"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Skills",
        "item": "https://chera-mihiretu.vercel.app/#skills"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Education",
        "item": "https://chera-mihiretu.vercel.app/#education"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Achievements",
        "item": "https://chera-mihiretu.vercel.app/#achievements"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}

