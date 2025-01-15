import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Ketan',
    lastName:  'Thorat',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Robotics & AI Engineer',
    avatar:    '/images/avatar.jpg',
    location:  'Asia/Kolkata',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English', 'Marathi', 'Hindi', 'German']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about robotics, technology, and share thoughts on innovation in automation and artificial intelligence.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
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
        name: 'Twitter',
        icon: 'x',
        link: 'https://x.com/ketanthorat_ai',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:ketanthorat.ai@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Robotics engineer and innovator</>,
    subline: <>I'm Ketan, a robotics engineer at <InlineCode>Robonex Innovations</InlineCode>, where I build intelligent<br/> systems and innovative solutions. After hours, I create my own projects.</>
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
        description: <>Ketan is a Nashik-based robotics engineer with a passion for creating advanced solutions in automation and artificial intelligence. His work integrates hardware, software, and innovation to tackle complex challenges in the robotics industry.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'Robonex Innovations',
                timeframe: '2021 - Present',
                role: 'Founder and Robotics Engineer',
                achievements: [
                    <>Developed an innovative SLAM-based robotics platform, enhancing automation capabilities by 30%.</>,
                    <>Led a team to build IoT-integrated devices, improving efficiency in industrial automation systems.</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/project-01/cover-01.jpg',
                        alt: 'Robonex Innovations Project',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'ML Nashik',
                timeframe: 'Feb 2024-  Present',
                role: 'Community Manager',
                achievements: [
                    <>Organized AI and robotics workshops, fostering learning and innovation in the community.</>,
                    <>Established partnerships with local industries to promote technology adoption and skill development.</>
                ],
                images: [ ]
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'K. K. Wagh Institute of Engineering Education and Research',
                description: <>Pursuing a B.Tech in Robotics and Automation.</>,
            },
            {
                name: 'Online Certifications',
                description: <>Completed certifications in ROS and AI for robotics from RigBetel Labs.</>,
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'ROS',
                description: <>Expert in developing robotics systems using ROS and ROS2 frameworks.</>,
                // optional: leave the array empty if you don't want to display images
                images: [
                    {
                        src: '/images/projects/project-01/cover-02.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                title: 'Python',
                description: <>Proficient in building automation scripts and machine learning models using Python.</>,
                // optional: leave the array empty if you don't want to display images
                images: [
                    {
                        src: '/images/projects/project-01/cover-03.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    }
                ]
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about robotics and AI...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Robotics and AI projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-08.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-09.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-12.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-13.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-14.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };
