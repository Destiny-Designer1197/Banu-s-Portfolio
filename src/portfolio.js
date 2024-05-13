/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Banupriya's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Banupriya Valluvan Portfolio",
    type: "website",
    url: "http://banupriyavalluvan.com/",
  },
};

//Home Page
const greeting = {
  title: "Banupriya Valluvan",
  logo_name: "BanupriyaValluvan",
  subTitle:
    " Skilled full stack developer adept at creating seamless user experiences and architecting scalable backend systems. Proficient in HTML, CSS, JavaScript, Python, Node.js. Passionate about collaborating with diverse teams to deliver exceptional digital solutions.",
  resumeLink:
    "https://drive.google.com/file/d/1bXRknv_h-XI_3CQ3SGPteGODtvEb7YvI/view?usp=sharing",
  portfolio_repository:
    "https://github.com/Destiny-Designer1197/masterPortfolio",
  githubProfile: "https://github.com/Destiny-Designer1197",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/Destiny-Designer1197",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/banupriya-valluvan/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:banupriyavalluvan@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Master Thesis- Prediciting the Evolution of Traceability Graphs",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Conducted comprehensive analysis of traceability graphs, utilizing diverse NLP techniques for enhanced interpretability\
            and effective analysis of evolution patterns and artifact relationships",
        "⚡ Developed machine learning link prediction models for forecasting future growth and changes in static/forzen traceability graphs.",
        "⚡ Designed adaptive link prediction algorithms and customized framework for time series graphs, \
            providing proactive support for maintaining accurate traceability information",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡  Implemented the complete technology stack using the MERN (MongoDB, Express.js, React.js, Node.js) stack for seamless \
        deployment.",
        "⚡  Leveraged SPARQL queries to retrieve components from the RDF Database, ensuring efficient data retrieval",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Stuttgart",
      subtitle: "Masters of Science in Information Technology",
      logo_path: "uni.jpg",
      duration: "2020-2023",
      descriptions: [
        "⚡ With a Master's thesis focused on Predicting the Evolution of Traceability Graphs using Machine Learning, I possess a strong academic background in advanced data analytics",
        "⚡  Additionally, I have pursued rigorous coursework in Deep Learning, Data Science, Full Stack Development, Embedded Systems Engineering, and Advanced Higher Mathematics from this, I have done courses on Deep Learning, Data Science, Full Stack Development , Embedded Systems Engineering , Advanced Higher Mathematics",
        "⚡  My dedication to continuous learning and excellence is reflected in my selection for prestigious full-time scholarships from Udacity and BCAI, awarded to the top 10% of students. was selected for the full time scholarship from Udacity and BCAI which is given to top 10% of students.",
      ],
      website_link: "https://www.uni-stuttgart.de/",
    },
    {
      title: "Sri Krishna College of Engineering and Technology",
      subtitle: "Bachelors degree in Electronics and Communication Engineering",
      logo_path: "SKCET.jpg",
      duration: "2015 - 2019",
      descriptions: [
        "⚡I have pursued a diverse range of courses encompassing Embedded Systems Engineering, Digital System Design, and Advanced Mathematics",
        "⚡ During my academic tenure, I completed my Bachelor's thesis on MQTT-based Smart Waste Collection Management, demonstrating my commitment to practical application and innovative problem-solving",
      ],
      website_link: "https://skcet.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Data Scientist",
      subtitle: "Udacity Nanodgree Program",
      logo_path: "udacity.jpg",
      certificate_link: "https://www.udacity.com/certificate/ZKTAEPQM",
      alt_name: "Udacity and BCAI",
      color_code: "#8C151599",
    },
    {
      title: "Complete ReactJS Course Basics to Advanced(2021)",
      subtitle: "Udemy",
      logo_path: "udemy.jpg",
      certificate_link:
        "https://www.udemy.com/certificate/UC-66bedd08-a643-47a6-88b7-29d90e74d09b/",
      alt_name: "EdYoda Digital University",
      color_code: "#00000099",
    },
    {
      title: "RDF and SPARQL Essentials",
      subtitle: "Udemy",
      logo_path: "udemy.jpg",
      certificate_link:
        "https://www.udemy.com/certificate/UC-c1fcef71-e4b7-4e73-b301-deb8149af227/",
      color_code: "#00000099",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship experience",
  description:
    "I have primarily focused on Full Stack and Frontend development, leveraging JavaScript frameworks. Additionally, I've made significant contributions to my company's achievements through my Master's thesis project, highlighting my passion for both Full Stack development and Data Science",
  header_image_path: "experience.jpg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Master Thesis Project",
          company: "itemis AG",
          company_url: "https://www.itemis.com/",
          logo_path: "itemis.png",
          duration: " May 2023 – November 2023",
          location: "Stuttgart,Germany",
          description:
            "• Developed machine learning link prediction models for forecasting future growth and changes in static/forzen traceability graphs and \
            adaptive link prediction algorithms and customized framework for time series graphs, providing proactive support for maintaining \
            accurate traceability information.",
          color: "#000000",
        },
        {
          title: "Front End Developer",
          company: "itemis AG",
          company_url: "https://www.itemis.com/",
          logo_path: "itemis.png",
          duration: " May 2022 – March 2024",
          location: "Stuttgart,Germany",
          description:
            "Engaged in frontend development using HTML, CSS, and JavaScript frameworksto create dynamic and interactive user interfaces.",
          color: "#0879bf",
        },
        {
          title: "Full Stack Developer",
          company: "Fraunhofer IPA",
          company_url: "https://www.ipa.fraunhofer.de/",
          logo_path: "Fraunhofer-IPA.jpg",
          duration: "January 2021 – December 2021 ",
          location: "Stuttgart,Germany",
          description:
            " Implemented the complete technology stack using the MERN (MongoDB, Express.js, React.js, Node.js) stack for seamless deployment and \
              leveraged SPARQL queries to retrieve components from the RDF Database, ensuring efficient data retrieval.",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Associate Trainee",
          company: "Cognizant Technology Solutions",
          company_url: "https://careers.cognizant.com/in/",
          logo_path: "cts.png",
          duration: "February 2019 – May 2019",
          location: "Coimbatore, India",
          description:
            " Engaged in crafting impactful visualizations and narratives by harnessing potent Business Intelligence tools like Tableau and QlikView, \
              effectively communicating trends, patterns, and projections derived from relevant data.Spearheaded the design and upkeep of data systems and databases, employing SQL and Oracle Database for efficient management. ",
          color: "#fc1f20",
        },
        {
          title: "Data Science Research Intern",
          company: "itemis AG",
          company_url: "https://www.itemis.com/",
          logo_path: "itemis.png",
          duration: "December 2022 - April 2023",
          location: "Stuttgart,Germany",
          description:
            "Conducted comprehensive analysis of traceability graphs, utilizing diverse NLP techniques for enhanced interpretability and effective analysis of evolution patterns and artifact relationships",
          color: "#ee3c26",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects.png",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects.png",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
