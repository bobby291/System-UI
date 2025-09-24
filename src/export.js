import { IoMdCloudDone } from "react-icons/io";
import { SiCyberdefenders } from "react-icons/si";
import { FaUserEdit } from "react-icons/fa";
import project1 from '../src/assets/project1.jpg'
import port2 from '../src/assets/port2.jpg'
import port3 from '../src/assets/port3.jpg'
import port4 from '../src/assets/port4.jpg'
import twitterIcon from '../src/assets/twitterIcon.svg'
import { BookOpen, Briefcase, LayoutDashboard, LayoutGrid, PanelsTopLeft, Settings, Target, Terminal, Users, Wrench } from "lucide-react";


export const services = [
  {
    icon: IoMdCloudDone,
    title:'Cloud Solutions',
    para:'Sagittis donec cursus sed pretium varius non sagittis ut. Amet mi augue purus malesuada pulvinar.',
  },
  {
    icon: SiCyberdefenders,
    title:'Cybersecurity',
    para:'Sagittis donec cursus sed pretium varius non sagittis ut. Amet mi augue purus malesuada pulvinar.',
  },
  {
    icon: FaUserEdit,
    title:'IT Consulting',
    para:'Sagittis donec cursus sed pretium varius non sagittis ut. Amet mi augue purus malesuada pulvinar.',
  }
]

export const assets = [
  twitterIcon,
]


export const projects = [
  {
    img: project1,
    title: 'AI Automation',
    para: 'Showcasing intelligent solutions that streamline workflows, cut cost, and boost productivity. Delivery real business value.',
  },
  {
    img: port2,
    title: 'Software Development',
    para: 'Buidling reliable, scalable, and user-friendly software that drives business success. Delivery high performance application with innovation at the core.',
  },
  {
    img: port3,
    title: 'Management Systemn for Industries',
    para: 'A centralied dashboard that gives industries real-time control, insights, and efficiency. Transforming complex operation into simple, actionable insights.',
  },
  {
    img: port4,
    title: 'Cloud Migration for Scalability',
    para: 'Seamlessly moving business to the cloud for unlimited growth and agility. Scaling enterprise with scalable cloud migration solutions.',
  },
]

export const Menus = [
  {
    name: "Company",
    subMenuHeading: ["Design", "Scale"],
    subMenu : [
      {
        name: "Mission",
        desc: "Responsive",
        icon: Target
      },
      {
        name: "Team",
        desc: "Collaboration",
        icon: Users,
      },
      {
        name: "Overview",
        desc: "Cyclax Pitch Deck",
        icon: LayoutDashboard,
      },
    ],
    gridCols: 2,
  },
  {
    name: "Resources",
    subMenuHeading: ["Design", "Scale"],
    subMenu : [
      {
        name: "Use cases",
        desc: "Reviews",
        icon: PanelsTopLeft
      },
      {
        name: "Tools",
        desc: "Production",
        icon: Settings,
      },
      {
        name: "Blog",
        desc: "Newsletter",
        icon: BookOpen,
      },
    ],
    gridCols: 3,
  },
  {
    name: "Feature",
    subMenuHeading: ["Design", "Scale"],
    subMenu : [
      {
        name: "Software",
        desc: "Development and Design",
        icon: Terminal
      },
      {
        name: "Management",
        desc: "Workingflow",
        icon: Briefcase,
      },
      {
        name: "CMS",
        desc: "Project",
        icon: LayoutGrid,
      },
    ],
    gridCols: 4,
  },
  {
    name: "Solution",
  },
];

export const reviews = [
  {
    rating:'4.8',
    about:'Feugiat malesuada convallis egestas bibendum. Justo sit mattis sit suspendisse non fermentum egestas morbi sit. Pretium placerat elementum dignissim vel.',
    name:'John Doe',
    role: 'software developer'
  },
  {
    rating:'3.5',
    about:'Augue purus malesuada pulvinar faucibus vel id hac. Sed duis sit vitae platea nulla nunc egestas pellentesque et',
    name:'Robert Doe',
    role: 'android developer'
  },
  {
    rating:'4.2',
    about:'Feugiat malesuada convallis egestas bibendum. Justo sit mattis sit suspendisse non fermentum egestas morbi sit. Pretium placerat elementum dignissim vel.',
    name:'Steve Kingson',
    role: 'UI/UX designer'
  },
  {
    rating:'3.9',
    about:'Augue purus malesuada pulvinar faucibus vel id hac. Sed duis sit vitae platea nulla nunc egestas pellentesque et',
    name:'Alex Grim',
    role: 'Web Developer'
  },
  {
    rating:'4.7',
    about:'Feugiat malesuada convallis egestas bibendum. Justo sit mattis sit suspendisse non fermentum egestas morbi sit. Pretium placerat elementum dignissim vel.',
    name:'Supria Sakura',
    role: 'Head Designer'
  },
  {
    rating:'4.8',
    about:'Augue purus malesuada pulvinar faucibus vel id hac. Sed duis sit vitae platea nulla nunc egestas pellentesque et',
    name:'John Doe',
    role: 'software developer'
  },
  {
    rating:'4.8',
    about:'Feugiat malesuada convallis egestas bibendum. Justo sit mattis sit suspendisse non fermentum egestas morbi sit. Pretium placerat elementum dignissim vel.',
    name:'John Doe',
    role: 'software developer'
  },
  {
    rating:'4.8',
    about:'Augue purus malesuada pulvinar faucibus vel id hac. Sed duis sit vitae platea nulla nunc egestas pellentesque et',
    name:'John Doe',
    role: 'software developer'
  },
]