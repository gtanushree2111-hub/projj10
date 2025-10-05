import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "3D modelling",
      icon: web,
    },
    {
      title: "Animation and Filmmaking",
      icon: mobile,
    },
    {
      title: "2D Illustration and Graphic Design",
      icon: backend,
    },
    {
      title: "Video editing",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Photoshop",
      icon: html,
    },
    {
      name: "Premiere pro",
      icon: css,
    },
    {
      name: "After effects",
      icon: javascript,
    },
    {
      name: "Audition",
      icon: typescript,
    },
    {
      name: "Animate cc",
      icon: reactjs,
    },
    {
      name: "Da vinci resolve",
      icon: redux,
    },
    {
      name: "Blender",
      icon: tailwind,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Branding and Digital Marketing Intern",
      company_name: "Smoky beans cafe",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Nov 2023 - Dec 2023",
      points: [
        "Designed social media deliverables like festive posts",
        "managed social media account (Instagram) in content enhancement and Interaction",
        "Designed advertising and marketing deliverables including flyers and posters",
        "Designed packaging designs for products.",
      ],
    },
    {
      title: "Design and Content creation Intern",
      company_name: "Early Brain Magic",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Nov 2024 - Apr 2025",
      points: [
        "Contributed in designing and creating content for kids book.",
        "Contributed in designing modules, worksheets and lesson plans.",
        "Contributed in the sector of research and development.",
        "Content creation in the form of short videos",
      ],
    },
    {
      title: "Pitch film (short film) crew",
      company_name: "MWM movies- youtube",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jun 2025 - Aug 2025",
      points: [
        "Worked as one of the assistant directors.",
        "Contributed in the department of Make up and Costumes.",
        "Worked as Motion graphics artist for the film.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "She is a very good student, has good grasping power.",
      name: "Sarah",
      designation: "Teacher",
      company: "Christ Uni",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like she does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "She is one of the very creative and hardworking person I've ever met",
      name: "Nidhi P",
      designation: "CEO",
      company: "EBM",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Solar system- Unity",
      description:
        "Realistic Solar system created on Unity with textures and sound effects for school going children for their educational purposes.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://gtanushree2111-hub.github.io/AR-VR-Assignment-01--solar-system-new/",
    },
    {
      name: "Visiting card- DDP",
      description:
        "Visiting card developed on coding- Augmented Reality",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://gtanushree2111-hub.github.io/Tanushree-Visiting-Card-1-/",
    },
    {
      name: "Proto- IDLY shortfilm",
      description:
        "My upcoming 3D shortfilm prototype",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://youtu.be/Uz_SWnHh6EY?si=sbtbwPtzQZstGgfk",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };