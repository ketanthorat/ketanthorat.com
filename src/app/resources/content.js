import React from "react"; // Ensure React is imported for JSX usage

const person = {
    firstName: 'Ketan',
    lastName: 'Thorat',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role: 'Robotics & AI Engineer',
    avatar: '/images/avatar.jpg',
    location: 'Asia/Kolkata',
    languages: ['English', 'Marathi', 'Hindi', 'German']
}

const newsletter = {
    display: true,
    title: `Subscribe to ${person.firstName}'s Newsletter`,
    description: `I occasionally write about robotics, technology, and share thoughts on innovation in automation and artificial intelligence.`
}

const social = [
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/ketanthorat',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/k2thorat/',
    },
    {
        name: 'Instagram',
        icon: 'instagram',
        link: 'https://www.instagram.com/ketanthorat.ai/',
    },
    {
        name: 'X',
        icon: 'x',
        link: 'https://x.com/ketanthorat_ai',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:ketanthorat.ai@gmail.com',
    }
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: 'Robotics engineer and innovator',
    subline: `Hi, I'm Ketan Thorat— a passionate robotics engineer, innovator, and entrepreneur driving advancements in AI, IoT, and automation. With a knack for solving real-world problems, I specialize in creating intelligent systems and building solutions that bridge technology with impact. With over 2.5 years of experience as a community manager, I have honed my skills in fostering collaboration, sharing knowledge, and empowering communities in technology. Explore my portfolio to discover my journey, projects, and vision for the future of robotics and automation.`
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: false
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://calendly.com/ketanthorat'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: `Ketan is a robotics engineer with a passion for creating advanced solutions in automation and artificial intelligence. His work integrates hardware, software, and innovation to tackle complex challenges in the robotics industry.`
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about robotics and AI...',
    description: `Read what ${person.name} has been up to recently`
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Robotics and AI projects by ${person.name}`
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    images: [
        { src: '/images/gallery/img-01.jpg', alt: 'image', orientation: 'vertical' },
        { src: '/images/gallery/img-02.jpg', alt: 'image', orientation: 'horizontal' }
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };
