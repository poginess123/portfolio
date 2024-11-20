export interface Experience {
  start_year: string;
  end_year: string;
  company_name: string;
  details: string;
  tools: string[];
  samples?: {
    title?: string;
    link?: string;
    img?: string;
    description?: string;
  }[]
}

export const experiences: Experience[] = [
  {
    start_year: "Nov 2023",
    end_year: "Present",
    company_name: "Complete Business Online",
    details: "As a frontend developer at Complete Business Online, I focus on creating modular and reusable code components that streamline development processes and ensure scalability. I maintain high-quality, clean code that aligns with W3C, Google Lighthouse, and SEO standards. By optimizing page load speeds through caching and code minimization, I have achieved measurable performance improvements. Additionally, I oversee version control using Git to manage branching, merging, and effective collaboration.",
    tools: ["Javascript", "Vue3", "GraphQL", "PlatformOS", "Insites.io"],
    samples: [
      {
        title: "Ecommerce Module",
        link: "https://www.insites.io/modules/ecommerce",
        img: "",
        description: "Released multiple versions from v5.7.4 to 5.8.0. This includes bugfix, feature requests and improvements"
      },
      {
        title: "Pipeline Module",
        link: "https://www.insites.io/modules/pipelines",
        img: "",
        description: "Released multiple versions from v5.8.4 to v5.9.2. This includes bugfix, feature requests and improvements"
      },
      {
        title: "Locator Module",
        link: "https://www.insites.io/modules/locator",
        img: "",
        description: "Released multiple versions from v5.1.1 to v5.1.3. This includes bugfix, feature requests and improvements"
      },
      {
        title: "Events Module",
        link: "https://www.insites.io/modules/events",
        img: "",
        description: "Helped develop the first version of the module.",
      }
    ]
  },
  {
    start_year: "Feb 2020",
    end_year: "June 2023",
    company_name: "Top of Line Inc.",
    details: "During my time at Top of Line Inc.,I worked as a part time consultant for their Vue project and then worked full time on April 2021. I provided technical leadership by guiding feature enhancements and addressing critical bug fixes. I played a key role in automating internal processes, resulting in significant operational efficiency across various departments. Furthermore, I developed scalable and user-friendly applications, leveraging user feedback to deliver continuous improvements.",
    tools: ["Vue2", "Vue3", "Quasar"],
    samples:[
      {
         title: "Global Reliability Solutions",
         link: "",
         img: "",
         description: "CRM for managing and tracking manufacturing progress for different departments of the factory."
      },
    ]
  },
  {
    start_year: "April 2016",
    end_year: "July 2021",
    company_name: "Eflexervices Philippines Inc.",
    details: "At Eflexervices Philippines Inc., I developed a real estate platform with a custom CMS using VueJS and FeathersJS. I created internal tools for productivity tracking, custom reporting, and time management, enhancing transparency and operational efficiency. My work involved integrating third-party tools like Campaign Monitor, Mapbox, and Elavon, which significantly expanded the platform's capabilities. I also implemented SEO strategies and added Google Ads to client websites, resulting in increased traffic and engagement.",
    tools: ["Javascript", "NodeJS", "AdonisJS", "ExpressJS", "KoaJS", "Vue2", "ReactJS", "C#", "MongoDB"],
    samples:[
      {
         title: "Real Estate Platform with custom CRM ",
         link: "",
         img: ""  ,
         description: "Developed and implemented the initial user interface and core features for the platform during 2016-2018. The website has since undergone further modifications. Note: Website has been redesigned since I left the project."
      },
      {
        title: "Company Website",
        link: "https://www.eflexervices.com/",
        img: "",
        description: "Note: Website has been redesigned"
      },
      {
        title: "Victorious CRM",
        link: "",
        img: "",
        description: "Helped develop a feature for tracking employee task progress."
      }
    ]
  }
]