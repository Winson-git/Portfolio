export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    // { name: "Skills", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "Skilled in various frameworks and languages, focused on creating maintainable, future-ready code and tackling new challenges with a growth mindset",
      description: "I'm a software developer",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/grid.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "Interested in Web3 and its future impact on tech.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "BSc Computer Science with AI (Hons)",
      description: "University of Nottingham",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently building JS and TypeScript (ES6) library",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "AI podcast SaaS - Podcast Application",
      des: "Platform for creating and sharing podcasts with OpenAI-generated voices and images, secured by Clerk authentication ",
      img: "/podcast.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/c.svg", "/oai.svg", "/apw.svg"],
      link: "https://github.com/Winson-git/saas-ai-podcast",
    },
    {
      id: 2,
      title: "Appointment Application",
      des: "An appointment app that lets users submit forms and enables admins to review and manage submissions efficiently.",
      img: "/appoitment.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/apw.svg", "/sentry.svg"],
      link: "https://github.com/Winson-git/carepulse",
    },
    {
      id: 3,
      title: "Expense Tracker Application",
      des: "An Expenses Tracker app with secure login, leveraging Graph API and MongoDB for efficient data management and tracking.",
      img: "/expen.png",
      iconLists: ["/re.svg", "/tail.svg", "/js.svg", "/graph.svg", "/mgdb.svg"],
      link: "https://github.com/Winson-git/ExpensesTrackerApp",
    },
    {
      id: 4,
      title: "Clone Nike Website",
      des: "A responsive, dynamic clone of the Nike website built with React and Tailwind CSS, designed to practice using shadcn and additional plugins.",
      img: "/nike.png",
      iconLists: ["/re.svg", "/tail.svg", "/js.svg","shad.png"],
      link: "https://github.com/Winson-git/Tailwind-CSS",
    },
  ];
  
  export const testimonials = [
    {
      quote:
        "Managed server configuration and security (NGIX, IIS) and built scalable Android applications. Developed responsive front-end interfaces and a reusable CSS library to accelerate project timelines. Enhanced performance by implementing auto-loading and optimizing data handling. Led QA efforts to ensure cross-platform compatibility, managed Agile-based project planning, and conducted code reviews for maintainability and standardization.",
      name: "Silver Sand Sdn Bhd - Software Developer",
      title: "2023-Present",
    },
    {
      quote:
        "Contributed to front-end development with a focus on React Native, creating cross-platform applications for Android (APK) and iOS. Enhanced user experiences by optimizing the applications for seamless functionality across devices.",
      name: "Justag - Part-time Developer",
      title: "2022-2023",
    },
    {
      quote:
        "Performed application testing and developed mobile applications using React Native with NativeBase. Built and tested Android and iOS applications, ensuring robust functionality and compatibility across platforms.",
      name: "Bullmart-Software Intern",
      title: "2022",
    }
  ];
  
  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Software Developer",
      desc: "Dedicated to enhancing interactivity, improving new technologies, and creating reusable libraries for efficient application development.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Code Review",
      desc: "Focus on checking functionality, code clarity, and the use of reusable functions to ensure high-quality standards in development projects",
      className: "md:col-span-2",
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Idea Showcase",
      desc: "Actively showcase creative solutions and best practices, demonstrating my commitment to continuous improvement as a developer.",
      className: "md:col-span-2",
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Project Leadership",
      desc: "Leadership roles in projects, guiding teams to success while fostering collaboration and innovation using methodologies like aglie",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      url: 'https://github.com/Winson-git'
    },
    {
      id: 2,
      img: "/link.svg",
      url: 'https://www.linkedin.com/in/winson-hong-8402b2240/',
    },
    // {
    //   id: 3,
    //   img: "/twit.svg",
    // },

  ];