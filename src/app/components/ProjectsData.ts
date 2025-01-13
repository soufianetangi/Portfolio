interface ProjectDataTypes {
    id: number;
    projectImgURL: string;
    projectTitle: string;
    ProjectAbout: string;
    stack: string;
    projectGithubURL: string;
    projectLiveURL: string;
  }
  
  const ProjectData: ProjectDataTypes[] = [
    {
        id: 2,
        projectImgURL: "/img/qrcodego.png",
        projectTitle: "QR-Go",
        ProjectAbout: "A QR-Code generator website that allows authenticated users to effortlessly generate a downloadable QR codes that safeguards their data and help them advertise their businesses or idea either by file upload or via inputting a valid URL",
        stack: "NextJS | Typescript | TailwindCSS | Framer-Motion | Firebase Auth | Firestore | Firebase Storage",
        projectGithubURL: "https://github.com/soufianetangi/qr-go",
        projectLiveURL: "https://qrcode-go.vercel.app/",
    },

    {
        id: 1,
        projectImgURL: "/img/getlinked.png",
        projectTitle: "Get-Linked",
        ProjectAbout: "A technology innovation Hackathon established by a group of organizations with the aim of showcasing young and talented individuals in the field of technology",
        stack: "Javascript |Node.js | React.js | Vite | Typescript | TailwindCSS",
        projectGithubURL: "https://github.com/soufianetangi/getlinked",
        projectLiveURL: "https://mygetlinked.",
    },
    
    {
        id: 2,
        projectImgURL: "/img/portfolio.png",
        projectTitle: "Portfolio",
        ProjectAbout: "This is the website you are currently on. My portfolio website that showcases my about, what I do, stack, journey, projects and contact information.",
        stack: "NextJS | Typescript | TailwindCSS | AOS",
        projectGithubURL: "https://github.com/soufianetangi/portfolio",
        projectLiveURL: "https://lordwill1.vercel.app/",
    },
    
    {
        id: 3,
        projectImgURL: "/img/jadoo.png",
        projectTitle: "Jadoo",
        ProjectAbout: "A travel agency landing web page that shows the services offered by the agency, the destinations and booking options associated with the agency",
        stack: "NextJS | Typescript | TailwindCSS",
        projectGithubURL: "https://github.com/soufianetangi/jadoo",
        projectLiveURL: "https://gojadoo./",
    },
    
     {
         id: 4,
         projectImgURL: "/img/just-do-it.png",
         projectTitle: "Just Do It",
         ProjectAbout: "A responsi, dynamic and aesthetic to-do list web app for keeping track of schedules and activties.",
         stack: "HTML | CSS | Javaript | Local Storage",
         projectGithubURL: "https://github.com/soufianetangi/todo-list",
         projectLiveURL: "https://soufianetangi.github.io/todo-list/",
     },
  ]

  export default ProjectData
