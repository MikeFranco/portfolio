import { IStepperData, IProjectsData } from './types';
import { myStack } from '../home/data';

export const projectsData: IProjectsData[] = [
  {
    image: '/pepsi-logo.png',
    company: 'Pepsi',
    projectType: 'App',
    cardDescription:
      'The Joy App by PepsiCo offers seamless access to PepsiCo products, promotions, and rewards, aiming to enhance customer engagement and satisfaction.',
    isBlurred: false,
    startDate: 'september 2023',
    endDate: 'present',
    overview:
      `Joy App by PepsiCo is the new personalized platform in which you can redeem the strips with codes of the promotions and the participating products of the PepsiCo family, to add points and participate to win unique rewards.`,
    whatIHaveDone:
      'Implemented Firebase remote config for dynamic updates and personalized experiences. Added deep links and events to support marketing campaigns and user redirection. Enhanced UX/UI across all screens for a cohesive interface. Addressed bugs and improved app stability using Firebase Crashlytics.',
    workScheme: 'Remote',
    jobTitle: 'Software Engineer Assoc Manager',
    stack: [
      myStack.languages.technologies.Dart,
      myStack.frontend.technologies.Flutter,
      myStack.backend.technologies.Firebase,
      myStack.dataAnalysis.technologies.AppsFlyer,
    ],
    projectName: 'Joy App',
    images: ['/joyapp-0.webp', '/joyapp-old-1.webp', '/joyapp-old-2.webp', '/joyapp-old-3.webp'],
    aboutTheProject:
      `With this new version of the app we elevate user experience and interface design. With enhanced backend requests, we've optimized performance by up to 10%. Additionally, we can track events within the app and report incidents effortlessly. Also we've introduced deeplinks to enhance UX, allowing users to navigate directly to rewards, campaigns, or games with just a tap. Experience a smoother, more intuitive app journey with our latest update.`,
  },
  {
    image: '/walmart-logo.svg',
    company: 'Walmart',
    projectType: 'App',
    cardDescription:
      'Global retail giant offering a wide range of products including groceries, household goods, electronics, and apparel at competitive prices through its extensive network of stores and online platforms.',
    isBlurred: false,
    startDate: 'august 2023',
    endDate: 'january 2024',
    overview: 'The app for associates and career seekers. It offers scheduling, attendance tracking, metrics, Ask Sam for inquiries, team communication, and more.',
    whatIHaveDone: `Experience in maintaining and enhancing the Me@Walmart International application, with a dedicated focus on elevating the user experience and resolving bugs. Proficient in efficient data management utilizing the Looker platform to visualize both user interactions and application usage patterns. 
    Proficient in creating dashboards within ServiceNow to represent incidents reported by associates, demonstrating a proactive approach in incident management and resolution to enhance the application.
    Utilized feedback from associates to drive improvements, ensuring a responsive and user- centric application experience.`,
    workScheme: 'Remote',
    jobTitle: 'Freelance Software Engineer UP',
    stack: [
      myStack.languages.technologies.TypeScript,
      myStack.frontend.technologies['React Native'],
    ],
    //stack: ['micro-frontends'],
    projectName: 'Me@Walmart International',
    images: ['/me-at-walmart-0.webp', '/me-at-walmart-1.webp', '/me-at-walmart-2.webp'],
    imagesSize: 300,
    aboutTheProject:
      `Me@Walmart is the all-in-one app designed with input from Walmart associates and tailored for customers interested in exploring career opportunities with the retail giant. Through Me@Walmart, users gain insights into Walmart's esteemed history, cultural ethos, and the array of benefits offered to associates. For enrolled associates, the app provides an array of internal functionalities accessible via 2-step verification. These include streamlined Time & Attendance management, convenient shift scheduling tools, real-time store performance metrics monitoring, and a smart search assistant, "Ask Sam," for product and operational inquiries. Additionally, associates can stay connected with their store team through messaging features and access notifications and scheduling updates via the Inbox feature. With more exciting features on the horizon, Me@Walmart is set to revolutionize the Walmart experience for associates and customers alike.`,
  },
  {
    image: '/gulf-logo.png',
    company: 'Gulf',
    projectType: 'Web',
    cardDescription:
      'Gulf is a multinational company specializing in energy, petroleum refining, and related services. It operates across various sectors, including oil exploration, production, refining, and distribution.',
    isBlurred: false,
    startDate: 'june 2023',
    endDate: 'august 2023',
    overview: 'Gulf is a leading energy company, specializing in oil and gas exploration, production, and distribution, with a strong focus on innovation and sustainability.',
    whatIHaveDone: `Increased the development speed in 60% after the migration from Laravel to Typescript. Additionally, the web page bounce rate decreased 15% because we decreased the First Time To Interact from 1.5s to 500ms. AngularJS components were completely refactored, following best practices and adding TypeScript interfaces to improve the functionality of previously coded components.
      Integration of essential third-party libraries.
      Facturador: Streamlined the invoicing process, enabling automatic generation to facilitate tax-related tasks.
      Envia: Implemented automatic generation of shipping labels, allowing users to select carriers and services effortlessly.
      Loyalty: Introduced a comprehensive points rewards program toredeem gained points from the Gulf app.
    `,
    workScheme: 'Remote',
    jobTitle: 'Freelance Lead Developer',
    stack: [
      myStack.languages.technologies.TypeScript,
      myStack.frontend.technologies.Angular,
      myStack.frontend.technologies.HTML,
      myStack.frontend.technologies.CSS,
      //myStack.frontend.technologies.SASS,
      myStack.backend.technologies.Node,
      myStack.backend.technologies.TypeORM,
      myStack.backend.technologies.MySQL,
    ],
    projectName: 'Gulf',
    images: ['/gulf-1.png',],
    imagesSize: 1000,
    aboutTheProject:
      'With this project, we transform from a loyalty app to a full-fledged e-commerce platform. Shop Gulf merchandise and more, paying with money or points. Now users can create invoices, track their shipments, and utilize their points earned each time they refuel gas.',
  },
  {
    image: '/pentalog-logo.webp',
    company: 'Pentalog',
    projectType: 'Web',
    cardDescription:
      'Pentalog is a global digital services platform offering end-to-end IT solutions, including software development, consulting, and digital transformation services.',
    isBlurred: false,
    startDate: 'august 2021',
    endDate: 'august 2023',
    overview: 'Established in 2013, Noodle pioneers infrastructure and online enrollment growth for global academic institutions. Their mission: empower universities to transform education by offering resilient, responsive, and efficient tech solutions.',
    whatIHaveDone: 'During my tenure, I spearheaded the integration of various new features into our platform. This included the addition of new roles to access the admin page, the implementation of comprehensive pages providing detailed information on coaches and universities, and the incorporation of filters to display specific data related to goals and key dates. Additionally, I oversaw the creation of dashboards and cards for data visualization using AntD, ensuring intuitive and insightful representations of our data. Furthermore, I directly engaged with clients to gather requirements and address their needs, fostering strong client relationships. Moreover, I took on the responsibility of reviewing code contributed by my colleagues, meticulously validating that each ticket was fulfilled according to the specified requirements before passing it on to the quality assurance team.',
    workScheme: 'Remote',
    jobTitle: 'Software Engineer',
    stack: [
      myStack.languages.technologies.TypeScript,
      myStack.frontend.technologies.React,
      myStack.uiLibraries.technologies['Ant Design'],
      myStack.backend.technologies.GraphQL,
    ],
    projectName: 'Noodle',
    images: ['/noodle-1.png'],
    imagesSize: 700,
    aboutTheProject:
      'Noodle has developed infrastructure and online enrollment growth for some of the best academic institutions in the world. Their vision is “to empower universities to change the world.” They achieve this vision by offering their partners tech-powered products and services that help them become more resilient, responsive, efficient, and interconnected.',
  },
  {
    image: '/asistensi-logo.svg',
    company: 'Asistensi',
    projectType: 'App',
    cardDescription:
      'Innovative platform connecting users with personalized, on-demand assistance services such as ambulance, medicine delivery and online medical assistance',
    isBlurred: false,
    startDate: 'june 2022',
    endDate: 'april 2023',
    overview: `Asistensi is the best insurance for medical emergencies and immediate medical attention. Get your quote now in the easiest way and take care of your loved ones from a distance. Affiliate them now to the only 100% online and immediate insurance!`,
    whatIHaveDone: `I've managed and maintained five medicine apps with legacy codebases. Additionally, I initiated the creation of a new app to integrate these legacy systems, improving performance by 30% and code quality by 20%. I enhanced the UX/UI of video calls and reviewed colleagues' code to ensure thorough completion before QA. 
    `,
    workScheme: 'Remote',
    jobTitle: 'Mobile Developer',
    stack: [
      myStack.languages.technologies.JavaScript,
      myStack.languages.technologies.TypeScript,
      myStack.frontend.technologies['React Native'],
      myStack.uiLibraries.technologies.Tailwind,
    ],
    projectName: 'Joy App',
    images: ['/asistensi-0.webp', '/asistensi.webp', '/asistensi-2.webp', '/asistensi-3.webp'],
    imagesSize: 200,
    aboutTheProject: `An innovative platform, Asistensi connects users with personalized, on-demand assistance services, offering a comprehensive range of support options including ambulance services, medicine delivery, and online medical assistance. Through intuitive technology and seamless integration, Asistensi ensures quick access to essential medical aid whenever and wherever it's needed, providing peace of mind and reliable assistance to individuals seeking urgent medical support. With a focus on user experience and accessibility, Asistensi aims to enhance healthcare accessibility and improve the overall well-being of its users by delivering prompt and efficient medical assistance services.`,
  },
  {
    image: '/kavak-logo.svg',
    company: 'Kavak',
    projectType: 'App',
    cardDescription:
      'Premier platform for transparent, hassle-free buying and selling of pre-owned cars. Trusted by individuals and dealerships for its reliability and streamlined experience.',
    isBlurred: false,
    startDate: 'august 2021',
    endDate: 'june 2022',
    overview: 'Kavak is transforming the Latin American used car market with an intuitive platform, offering buyers and sellers access to quality vehicles at competitive prices. Leveraging advanced technology for transparency and reliability, Kavak reshapes car buying with innovation and customer-centric focus.',
    whatIHaveDone: `I spearheaded the development of a user interface from scratch for a flow manager dedicated to sending marketing campaigns, ensuring seamless operation and user-friendly functionality. Additionally, I played a pivotal role in introducing new services utilizing GraphQL technology. These services included a system to rate Kavak's theft reporting service, an automated ticket creation service in Jira for reporting stolen cars, and an email service to notify the car insurance company about that stolen cars`,
    workScheme: 'Remote',
    jobTitle: 'Software Engineer Assoc Manager',
    stack: [
      myStack.languages.technologies.TypeScript,
      myStack.frontend.technologies.Angular,
      myStack.frontend.technologies.HTML,
      myStack.frontend.technologies.CSS,
      myStack.backend.technologies.GraphQL,
      myStack.backend.technologies.MongoDB,
      myStack.backend.technologies.MySQL,
    ],
    //stack: [ 'DataDog'],
    projectName: 'Joy App',
    images: ['/kavak-0.png', '/kavak-1.webp', '/kavak-2.png'],
    aboutTheProject:
      'Kavak is a leading platform in the automotive industry, revolutionizing the way people buy and sell used cars across Latin America. With a user-friendly interface and innovative solutions, Kavak offers a seamless experience for both buyers and sellers, providing access to a wide range of high-quality vehicles at competitive prices. By leveraging advanced technology and robust market insights, Kavak ensures transparency, reliability, and convenience throughout the entire car-buying process. With a commitment to customer satisfaction and a vision for transforming the automotive market, Kavak continues to redefine the way people think about purchasing and owning vehicles.',
  },
  {
    image: '/am-logo.jpeg',
    company: 'Advanced Mankind',
    projectType: 'App',
    cardDescription:
      'AM offer expert guidance for optimizing technology infrastructure and processes, including strategic planning, system design, software development, and project management.',
    isBlurred: false,
    startDate: 'july 2020',
    endDate: 'january 2022',
    overview: 'AM provide expert advice and guidance to organizations seeking to optimize their technology infrastructure, systems, and processes. These firms offer a wide range of services, including strategic planning, technology assessment, system design and implementation, software development, cybersecurity analysis, and IT project management.',
    whatIHaveDone: [
      'Xybrid (Oct 2021-Jan 2022): Constructed MySQL and Node.js backend architecture from scratch for a VR golf videogame.',
      'Caplugs (Sept-Nov 2021): Designed HTML and SASS layouts, improving the user experience by 15%.',
      'Beach Body (Jun-Aug 2021): Tracked user events in the hole web app, client interaction with JavaScript and HTML.',
      'AnyClub (Mar-May 2021): Developed Angular 2 layouts, improving the UX/UI for better user-friendly collaborated directly with client',
      'GuideX (Nov 2020-Feb 2021): Created React and React Native website and mobile app, integrated MapBox, engaged with clients using TypeScript.',
      'Chedraui (Jul 2020-Jun 2021): Maintained and enhanced Chedrauis’ app with Flutter and Dart, integrated new features like a convertor kg-pzs and 3D Secure, resolved incidents promptly, direct client interaction.',
    ],
    workScheme: 'Remote',
    jobTitle: 'FullStack Developer',
    stack: [
      myStack.languages.technologies.TypeScript,
      myStack.languages.technologies.JavaScript,
      myStack.languages.technologies.Dart,
      myStack.frontend.technologies.Flutter,
      myStack.frontend.technologies['React Native'],
      myStack.frontend.technologies.Angular,
      myStack.frontend.technologies.HTML,
      myStack.frontend.technologies.CSS,
      //myStack.frontend.technologies.SASS,
      //myStack.uiLibraries.technologies.MapBox,
      myStack.backend.technologies.Node,
      myStack.backend.technologies.MySQL,
    ],
    projectName: 'Xybrid',
    images: ['/chedraui-0.webp', '/chedraui-1.webp', '/chedraui-2.webp', '/chedraui-3.webp'],
    imagesSize: 200,
    aboutTheProject:
      `Throughout my experience with AM, I've engaged in diverse projects spanning backend architecture, UI/UX design, client interaction, and feature integration. From constructing backend systems for VR games to enhancing user experiences with HTML and SASS layouts, I've demonstrated versatility and proficiency in various technologies. My experience includes tracking user events, collaborating on Angular layouts, and integrating advanced features like MapBox using React and React Native. At Chedraui, I excelled in maintaining and enhancing their app, resolving incidents promptly, and fostering positive client relationships. These experiences underscore my adaptability, technical prowess, and dedication to delivering impactful solutions in the dynamic field of software development.`,
  },
  {
    image: '/axend-logo.png',
    company: 'Axend',
    projectType: 'Web',
    cardDescription:
      'Axend is a platform dedicated to fostering growth for individuals and businesses through investments.',
    isBlurred: false,
    startDate: 'february 2019',
    endDate: 'february 2021',
    overview: 'Axend is a comprehensive platform designed to serve as a catalyst for growth, both at the individual and business level, by offering a range of investment opportunities. ',
    whatIHaveDone: 'In my role, I closely coordinate with both marketing and operations teams to ensure seamless alignment on platform objectives. Alongside this, I take charge of maintaining our platform, overseeing the management of five backends and two frontends. I also spearhead the integration of new features, such as recently creating a data visualization dashboard and implementing its functionality using JavaScript. Additionally, I handle SSL certificate renewal to uphold platform security. Lastly, I am responsible for managing and maintaining our infrastructure on Google Cloud Platform (GCP), ensuring its smooth operation and efficiency.',
    workScheme: 'Hybrid',
    jobTitle: 'Chief Technology Officer & Full Stack Developer',
    stack: [
      myStack.languages.technologies.JavaScript,
      myStack.frontend.technologies['Nuxt JS'],
      myStack.frontend.technologies.VueJS,
      myStack.uiLibraries.technologies.Vuetify,
      myStack.backend.technologies.Node,
      myStack.cloud.technologies.GCP
    ],
    projectName: 'Axend webapp',
    images: ['/axend-0.png', '/axend.png', '/axend-2.png', '/axend-3.png'],
    imagesSize: 600,
    aboutTheProject:
      'Axend is a tech-driven platform aimed at facilitating investments for individuals and businesses. It emphasizes the transformative power of investments in fostering growth for both parties. Through innovative technology, the platform creates new opportunities and enhances financial intelligence, enabling the community to reach their goals effectively. Key features include inclusivity, with a focus on removing barriers to investment such as capital constraints, networking limitations, or complex schemes. This is achieved by offering direct, transparent investment options accessible to all. ',
  },
];

export const stepperData: IStepperData[] = [
  {
    date: 'September 15 2023',
    description: 'Started working with PepsiCo for the Joy App',
    icon: '/work.svg',
  },
  {
    date: 'August 31 2023',
    description: "Finished Gulf's project",
    icon: '/work.svg',
  },
  {
    date: 'June 1 2023',
    description: 'Started my first freelance project with Gulf',
    icon: '/work.svg',
  },
  {
    date: 'February 28 2023',
    description: 'Finished all my subjects as a Computer Engineer',
    icon: '/school.svg',
  },
  {
    date: 'August 15 2022',
    description: 'Belog to the top 5% of programmers at Pentalog (2021-2022)',
    icon: '/award.svg',
  },
  {
    date: 'February 1 2021',
    description: 'Started working as a Mobile Developer',
    icon: '/work.svg',
  },
  {
    date: 'February 1 2019',
    description: 'Started working as a Web Developer',
    icon: '/work.svg',
  },
  {
    date: 'December 12 2018',
    description: '3rd place at Local Hack Day by Github',
    icon: '/award.svg',
  },
];
