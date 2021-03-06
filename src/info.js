/* Sitewide variable text */
import React from 'react';
import {SiJava} from "react-icons/si";
import {SiC} from "react-icons/si";
import {SiCsharp} from "react-icons/si";
import {SiJavascript} from "react-icons/si";
import {SiHtml5} from "react-icons/si";
import {SiCss3} from "react-icons/si";
import {SiBootstrap} from "react-icons/si";
import {SiDotnet} from "react-icons/si";
import {SiReact} from "react-icons/si";
import {SiUnity} from "react-icons/si";
import {SiAmazonaws} from "react-icons/si";
import {SiMicrosoftazure} from "react-icons/si";
import {SiMicrosoftteams} from "react-icons/si";
import {SiNetlify} from "react-icons/si";
import {SiVisualstudio} from "react-icons/si";
import {SiAndroidstudio} from "react-icons/si";
import {SiIntellijidea} from "react-icons/si";
import {SiGit} from "react-icons/si";
import {SiNpm} from "react-icons/si";
import {SiPowershell} from "react-icons/si";
import {SiGnubash} from "react-icons/si";
import {SiWindows} from "react-icons/si";
import {SiLinux} from "react-icons/si";
import {SiUbuntu} from "react-icons/si";
import {SiAndroid} from "react-icons/si";



export default
  {
    personal: [
      {
        section: 'Personal',
        name: 'Jeffrey Hernandez',
        email: 'JeffreyGHJ@gmail.com',
        domain: 'http://lawrencecastillo.com',
        keywords: 'jeffrey hernandez, computer science, software engineer, fl, front-end developer, orlando, florida, fullstack developer, developer, engineer, backend developer, backend engineer, jeffrey g hernandez, javascript, js, react.js, node.js, sql, nosql',
        background_url: 'https://images.unsplash.com/photo-1503149779833-1de50ebe5f8a',
        location: 'FL',
        headline: 'Software Engineer',
        description: 'I\'m a software engineer in Orlando Florida. Welcome to my website, have a look around and feel free to contact me!',
        image: '/images/Me.jpg',
        about: 'Hello, I\'m Jeff and I graduated from Florida International University with a Bachelors of Science in Computer Science. I am currently looking for a backend or fullstack position where I could work across the entire tech stack and be hands-on with as much of the product as possible. In my spare time I like to tinker with game development on PC, in VR, and on mobile. When I\'m not behind a computer I like going to the gym, playing the guitar or piano, improving my culinary skills, and snowboarding. Thank you for checking out my site -- I can\'t wait to make great software for you!',
        skills:
        [
          <SiJava />, <SiC/>, <SiCsharp/>, <SiJavascript/>, <SiHtml5/>, <SiCss3/>, 
        ],
        frameworks:
        [
            <SiBootstrap/>, <SiDotnet/>, <SiReact/>, <SiUnity/>,
        ],
        software:
        [
            <SiAmazonaws/>, <SiMicrosoftazure/>, <SiMicrosoftteams/>, <SiNetlify/>,
        ],
        editors:
        [
            <SiVisualstudio/>, <SiAndroidstudio/>, <SiIntellijidea/>,
        ],
        tools:
        [
            <SiGit/>, <SiNpm/>, <SiPowershell/>, <SiGnubash/>,
        ],
        environments:
        [
            <SiWindows/>, <SiLinux/>, <SiUbuntu/>, <SiAndroid/>,
        ],
        social:       
        [
          {
            id: 1,
            name: 'Github',
            icon_url: '/images/social-icons/Octicons-mark-github1.svg',
            profile_url: 'https://github.com/jeffreyghj'
          },
          {
            id: 2,
            name: 'LinkedIn',
            icon_url: '/images/social-icons/linkedin-icon-white.svg',
            profile_url: 'https://www.linkedin.com/in/jeffreyghj/'
          },
          {
            id: 3,
            name: 'Resume',
            icon_url: '/images/social-icons/file-icon-white.svg',
            profile_url: '/docs/Jeffrey-Hernandez-Resume.pdf'
          },
        ],
        interests:
        [
          'Learning new algorithms', 'Playing with VR', 'Developing videogames', '3D Modeling', 'Video and photo editing, Snowboarding',
        ],
      },
    ],
    groups: [
      {
        experience: 
        [
          {
            id: 1,
            name: 'React Monster Cards',
            image_url: '',
            site_url: 'https://github.com/JeffreyGHJ/react-monster-cards',
            location: 'Remote',
            timeframe: 'May 2022 - Jul. 2022',
            role: 'Full Stack Engineer - Personal Project',
            description: 'A React online game demo where users can login to create player accounts and battle monster cards for a spot on the leaderboard.',
            highlights: ['Refactored multilevel component prop chains into reactive store slices using reducers via Redux Toolkit',
              'Reduced complexity of component code by creating and utilizing custom hooks to decouple business logic',
              'Migrated create-react-app to Next.js project for leveraging API routes in order to secure API request credentials',
              'Implemented authentication with Firebase to allow users to persist individual account details.]',
            ]
          },
          {
            id: 2,
            name: 'Spring Boot User Authentication Web App',
            image_url: '',
            site_url: 'https://github.com/JeffreyGHJ/spring-users',
            location: 'Remote',
            timeframe: 'Dec. 2021 - Jan. 2022',
            role: 'Full Stack Engineer - Personal Project',
            description: 'A Spring Boot web application that allows users to create a \'User\', persist the User entity to a database, and securely log into an account represented by the saved \'User\'',
            highlights: ['Designed SQL database tables to store registered User entities and enabled persistence of database between sessions', 'Configured web security policies and developed custom validation procedures to allow for secure user authentication','Exposed REST endpoints providing standard C.R.U.D operations for User database entities via HTTP requests'],
          },
          {
            id: 3,
            name: 'Voice-Controlled Virtual Reality App',
            image_url: '',
            site_url: '',
            location: 'FIU',
            timeframe: 'Aug. 2019 - Dec. 2019',
            role: 'Full Stack Engineer - Course: Senior Project',
            description: 'Architected and implemented a multi-platform VR/360 video player for Windows, Android, and iOS using Unity 3D',
            highlights: ['Ensured on-time feature delivery by following Agile practices and holding regular Scrum meetings','Implemented speech recognition, VR display settings, file loading, playback control, and corresponding UI elements','Tested and developed Java plugin for Android native file-selection interface using an emulated mobile environment'],
          },
          {
            id: 4,
            name: 'Multi-Process Matrix Multiplier',
            image_url: '',
            site_url: 'https://github.com/JeffreyGHJ/Multi-ProcessMatrixMultiplication',
            location: 'FIU',
            timeframe: 'Apr. 2019',
            role: 'Backend Engineer - Course: Parallel Computing',
            description: 'Developed matrix multiplication program in C that shares work using a number of parallel processes specified by the user',
            highlights: ['Decomposed matrix data dynamically into horizontal rows determined by the user-specified number of processes','Maximized efficiency by distributing rows evenly between processes in order to solve sub-problems concurrently','Prevented race conditions and deadlock by organizing the flow of critical data between processes'],
          },
          {
            id: 5,
            name: 'Automated RuneScape Botting Farm',
            image_url: '',
            site_url: 'https://github.com/JeffreyGHJ/RuneScapeBotting',
            location: 'Remote',
            timeframe: 'Aug. 2017 - Apr. 2020',
            role: 'Backend Engineer - Personal Project',
            description: 'Authored libraries of scripts and utilities to automate gameplay for the MMORPG ???OldSchool Runescape???',
            highlights: ['Contributed to an open-source repository available for public use following a rigorous approval process by admins','Established scalability, ensured efficiency, and enabled remote access via SSH and VNC by deploying on AWS server','Maintained quality and usability by adding and changing features based on user requests and game updates','Evaluated advantages relating to efficiency, simplicity, and detectability for multiple botting clients and APIs'],
          },
          {
            id: 6,
            name: 'Multi-Threaded Office Hours Simulation',
            image_url: '',
            site_url: 'https://github.com/JeffreyGHJ/Multi-ThreadedOfficeHoursSimulator',
            location: 'FIU',
            timeframe: 'Jul. 2019',
            role: 'Backend Engineer - Course: Operating Systems',
            description: 'Simulates students entering a professor\'s office. The office capacity is limited and other students may not enter the office until the students inside the office have had their questions answered',
            highlights: ['Written using the POSIX thread library and rewritten using the OpenMP library to compare efficiency','Protected the consistency of shared data through the use of mutex locks in critical sections','Increased runtime efficiency by introducing random sleep times when threads attempt to access a resource shared by many other threads'],
          },
          {
            id: 7,
            name: 'Text Editor',
            image_url: '',
            site_url: 'https://github.com/JeffreyGHJ/TextEditor',
            location: 'FIU',
            timeframe: 'Aug. 2019 - Dec. 2019',
            role: 'Backend Engineer - Course: Adv. Windows Programming',
            description: 'Developed core features for a Windows Forms application that transforms input text into movable objects similar to refrigerator magnets',
            highlights: ['Collaborated with multiple small teams remotely over two-week sprints via Slack and shared Git repositories','Implemented responsive text wrapping, text dragging, and databinding tokenized strings to UI controls','Handled serialization of text and document properties to be saved and loaded as a custom file type'],
          },
          {
            id: 8,
            name: 'Shape Editor',
            image_url: '',
            site_url: 'https://github.com/JeffreyGHJ/ShapeEditor',
            location: 'FIU',
            timeframe: 'Aug. 2019 - Dec. 2019',
            role: 'Backend Engineer - Course: Adv. Windows Programming',
            description: 'Developed core features for a Windows Forms application that allows the user to draw, manipulate, and edit shapes, similar to MS Paint',
            highlights: ['Designed features and UI to make user-drawn shapes??? properties editable via a separate menu','Enabled multi-SDI and single-instance interfaces and built controls for multi-window navigation and management','Handled serialization of shape properties to be saved and loaded as a custom file type'],
          },
          /* {
            id: 9,
            name: 'Spring Hibernate Web Customer Tracker',
            image_url: '',
            site_url: 'https://github.com/JeffreyGHJ/SpringHibernateWebCustomerTracker',
            location: 'Remote',
            timeframe: 'Nov. 2021',
            role: 'Full Stack Engineer - Udemy Course',
            description: 'A Spring web application developed following a Spring Framework tutorial -- This tutorial app is a basic database for Customer entities',
            highlights: ['Developed as a part of Udemy Tutorial on the Spring Framework','features a full set of C.R.U.D. operations to interact with the database', 'Developed with the MVC design pattern', 'A prototype to my Spring Boot User Authentication Web App'],
          }, */
        ],
      },
      {
        projects: 
        [
          {
            id: 1,
            name: 'React Template: "Ada"',
            image_url: 'https://lh3.googleusercontent.com/pw/ACtC-3d2kAf93fcQGJgm-55gw7IQDa98EtejQB8M3KizMIY3zEhUdnA2HqWasuOhLFQw-pKk0b9unaRqUD0Yd38cfaZ4urUS_39vQZyiU9NeW4jcIVUaK4xcAfUF0S8fMpJubn_Go0BYDwcgBxekuci35UMJYw=w1000-h667-no?authuser=0',
            site_url: 'https://github.com/LawrenceCastillo/ada-theme-react-template',
            location: 'NYC',
            timeframe: '2020',
            role: 'Front-end',
            description: 'While developing this website for my personal use, I decided early on I wanted to be able to share the site. React templates are often hard to decipher so I made this one simple by putting all data in one place and creating simple switches to change a collection look instantly. Deployed via Netlify.',
          },
          {
            id: 2,
            name: 'Matchmaking App',
            image_url: 'https://lh3.googleusercontent.com/pw/ACtC-3fusEHLl4ACUV4rFYIevm9KlvF4jOBseiPCqnu3XKbHVMxCgvRoRHXfbzqvqYdhQcWZq1PRe2fFTsgraTDTfOrsIDUSgmXA80FyOlcnh6j1PY0hOwSNu6Qrhjz6DXf-uMxrBge3SYSyz9hZF8EZcQkkuQ=w1000-h667-no?authuser=0',
            site_url: 'https://github.com/LawrenceCastillo/LLL',
            location: 'NYC',
            timeframe: '2019',
            role: 'Fullstack',
            description: 'Matchmaking application created to blindly pair individuals based on guidelines from "The Four Tendencies" by Gretchen Rubin -- but only for a limited time. I designed and developed the app in PHP and MySQL (LAMP) and deployed it (temporarily) from my home network via Raspberry Pi/ Apache server with port-forwarding.',
          },
          {
            id: 3,
            name: 'Silent Alarm App',
            image_url: 'https://lh3.googleusercontent.com/pw/ACtC-3dElfLFMyuw3N8_IzplwCHqEjq2FNAuvqWvCAHtPEx1aFN2qNs1UHG5VpvllMy69DADZfudA9aSoNf79TjrZofbMR8qey8CDnLLnsVb5ef5NJl2WCjHjefuZcAvYfchqv-_W_MAZ8nk2xgZqJYe0FNkLg=w1000-h667-no?authuser=0',
            site_url: 'https://github.com/LawrenceCastillo/fashion_forward',
            location: 'NYC',
            timeframe: '2019',
            role: 'Team back-end developer',
            description: 'Official HackNY entry & winner of best social good. This app is designed to curb domestic abuse by fronting as a clothing outlet but hiding panic buttons capable of auto-texting local PD. I implemented parts of the backend (Node.js) including connectivity to MongoDB, authentication (Passport), and Twilio for messaging.',
          },
          {
            id: 4,
            name: 'Photowall App',
            image_url: 'https://lh3.googleusercontent.com/pw/ACtC-3dXeKyUpoUXt8Ujb_m_nqZUQVnmWycwq4R80SrfoOkc_ZLLVhz6SHxIWDB9Kpo0wYGA7jqiAbFyIInHLfWcEMSSSienpjzuyQHW_1PcQPiPfVbGEpQ5djOyZ0MOCPF7gqjULSZ5B6VXzl8o8Ysr_MA3IA=w1000-h667-no?authuser=0',
            site_url: 'https://github.com/LawrenceCastillo/photowall',
            location: 'NYC',
            timeframe: '2020',
            role: 'Fullstack',
            description: 'The Photowall app allows users to create image posts with descriptions, delete posts, and add comments. Built with React, Redux, React-router, Firebase, and deployed via Netlify, the app is the result of completing an online course I undertook in order to refine my React/Redux skillset.',
          },
        ],
      },
      {
        education:
        [
          {
            id: 1,
            name: 'University of Central Florida (UCF)',
            image_url: '/images/test.svg',
            site_url: 'https://www.ucf.edu/',
            location: 'Orlando, FL',
            timeframe: '2012 - 2017 (Transferred)',
            role: 'Bachelor of Science (BS) degree in Computer Science',
            description: 'Studied here from Jun. 2012, to Dec. 2017. Initially began studying Electrical Engineering with coursework focused on Math, Chemistry, and Physics. Later switched to a Computer Science major where coursework centered on Object Oriented Programming, Data Structures, Algorithms, Discrete Math, Computer Architecture, and Security. ',
            highlights: [],
          },
          {
            id: 2,
            name: 'Florida International University (FIU)',
            image_url: '/images/FIU_logo.svg',
            site_url: 'https://www.fiu.edu/',
            location: 'Miami, FL',
            timeframe: '2018 - 2019 (Graduated)',
            role: 'Bachelor of Science (BS) degree in Computer Science',
            description: 'Transferred credits from UCF and completed my Computer Science degree here. My coursework at this university included additional studies in Data Structures and Algorithms, Multi-Process and Multi-Threaded programming, Cloud Computing, Networks, Operating Systems, Databases, Functional Programming, and Agile/Scrum methodologies.',
            highlights: [],
          },/*
          {
            id: 3,
            name: 'Allan Hancock College',
            image_url: '',
            site_url: 'https://www.hancockcollege.edu/',
            location: 'CA',
            timeframe: 'Completed 2009',
            role: 'Associate of Science (AS) degree in Electronics',
            description: 'AS degree completed in \'09. Coursework included digital circuit design and analysis, measurement and instrumentation, and programming',
            highlights: [],
          },*/
        ],
      },
    ],
  }
