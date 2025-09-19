import { ArrowRight, Code } from "lucide-react"

// lib/content.ts
export const siteInfo = {
  logo: "/images/logo.jpg", // Updated to use the new logo.jpg
  name: "Crystallattice Ltd",
  tagline: "Empowering firms, governments, and students with world-class software solutions and training.",
  description:
    "Crystallattice Ltd is a tech start-hub made up of expert engineers focused on providing software development solutions, embedded systems, and training programs. We partner with universities and schools to offer internships, equipping students with the know-how to excel in the tech world.",
  brandColors: {
    primary: "#B4E9A9",
    accent: "#FFB84F",
  },
  heroSection: {
    backgroundImage: "/images/embedded systems.jpg", // Updated hero background image to use embedded systems.jpg
    titlePart1: "Crystallattice Ltd",
    titlePart2: "Tech Start-Hub",
    // ✅ Move CTA buttons here
    ctaButtons: [
      {
        text: "Our Services",
        href: "/services",
        isPrimary: true,
        icon: ArrowRight,
      },
      {
        text: "Training Programs",
        href: "/training",
        icon: Code,
        variant: "outline",
      },
    ],
  },
}

export const homePageCta = {
  title: "Ready to Start Your Tech Journey?",
  description: "Join our community of learners and professionals. Get access to world-class training programs and connect with industry experts.",
  primaryButtonText: "Get Started Today",
  primaryButtonLink: "/login",
  secondaryButtonText: "Contact Us",
  secondaryButtonLink: "/contact",
}

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Training", href: "/training" },
  { name: "Blogs", href: "/blogs" },
  { name: "Contact", href: "/contact" },
  { name: "Login", href: "/login" },
]

export const servicesSection = {
  title: "Our Services",
  description: "Comprehensive solutions for software development, embedded systems, and professional training",
}

export const servicesPage = {
  hero: {
    title: "Our Services",
    description: "Comprehensive solutions designed to empower your organization with cutting-edge technology and expertise",
  },
  cta: {
    title: "Ready to Get Started?",
    description: "Let's discuss how our services can help transform your organization",
    buttonText: "Contact Us Today",
    buttonLink: "/contact",
  },
}

export const services = [
  {
    title: "Software Development Solutions",
    description: "We build scalable, secure, and user-centric software for firms and government organizations.",
    icon: "Code", // lucide-react icon reference
  },
  {
    title: "Embedded Systems",
    description: "Designing and implementing efficient embedded systems for industry and research applications.",
    icon: "Cpu",
  },
  {
    title: "Training & Mentorship",
    description: "We train students and professionals to thrive in the tech world with practical skills and projects.",
    icon: "GraduationCap",
  },
  {
    title: "Internships & Partnerships",
    description:
      "Partnering with universities and schools to offer internship opportunities and collaborative training programs.",
    icon: "Handshake",
  },
]

export const trainingPage = {
  hero: {
    title: "Training Programs",
    description: "Industry-focused courses designed to equip you with practical skills and real-world experience",
  },
  features: [
    {
      icon: "Users",
      title: "Expert Instructors",
      description: "Learn from industry professionals with years of real-world experience",
    },
    {
      icon: "Code",
      title: "Hands-on Projects",
      description: "Build real applications and systems that you can showcase in your portfolio",
    },
    {
      icon: "GraduationCap",
      title: "Career Support",
      description: "Get internship opportunities and career guidance to launch your tech career",
    },
  ],
  cta: {
    title: "Start Your Learning Journey",
    description: "Join hundreds of students who have transformed their careers with our training programs",
    primaryButtonText: "Get Started Today",
    primaryButtonLink: "/login",
    secondaryButtonText: "Learn More",
    secondaryButtonLink: "/contact",
  },
}

export const courses = [
  {
    id: 1,
    title: "Fullstack Web Development",
    description: "Learn Next.js, React, Node.js, and modern web technologies.",
    media: "/images/courses/webdev.jpg",
  },
  {
    id: 2,
    title: "Embedded Systems Programming",
    description: "Master microcontrollers, IoT devices, and real-time systems.",
    media: "/images/courses/dev.jpg", // Updated to use the new image
  },
  {
    id: 3,
    title: "AI & Machine Learning",
    description: "Dive into machine learning models, AI applications, and data pipelines.",
    media: "/videos/courses/ai-preview.mp4", // Updated to use the local placeholder video
  },
]

export const blogsPage = {
  hero: {
    title: "Tech Insights & Updates",
    description: "Stay updated with the latest trends, insights, and developments in technology and software engineering",
  },
  newsletterCta: {
    title: "Stay Updated",
    description: "Get the latest tech insights and updates delivered to your inbox",
  },
}

export const blogDetailPage = {
  relatedArticles: {
    title: "Related Articles",
  },
  cta: {
    title: "Ready to Transform Your Tech Skills?",
    description: "Join our training programs and stay ahead of the latest technology trends",
    primaryButtonText: "Explore Training Programs",
    primaryButtonLink: "/training",
    secondaryButtonText: "Contact Us",
    secondaryButtonLink: "/contact",
  },
}

export const blogs = [
  {
    id: 1,
    title: "5 Emerging Trends in Software Development",
    excerpt: "Explore the technologies shaping the future of software engineering in 2025.",
    date: "2025-08-01",
    author: "Admin",
    image: "/images/blogs/blog.jpg", // Updated to use the new image
    content: `
      <p>In the rapidly evolving world of technology, staying ahead of the curve is crucial for developers, businesses, and tech enthusiasts alike. As we move through 2025, several emerging trends are reshaping how we approach software development.</p>
      
      <h2>1. AI-Powered Development Tools</h2>
      <p>Artificial Intelligence is revolutionizing the development process. From code generation to automated testing, AI tools are becoming indispensable for modern developers. These tools not only increase productivity but also help maintain code quality and reduce bugs.</p>
      
      <h2>2. Edge Computing Integration</h2>
      <p>With the growing demand for real-time applications, edge computing is becoming more prominent. This trend allows for faster data processing by bringing computation closer to the data source, reducing latency and improving user experience.</p>
      
      <h2>3. Sustainable Software Development</h2>
      <p>Environmental consciousness is driving the adoption of green coding practices. Developers are increasingly focusing on writing efficient code that consumes less energy and resources, contributing to a more sustainable digital future.</p>
      
      <h2>4. Low-Code/No-Code Platforms</h2>
      <p>The democratization of software development continues with the rise of low-code and no-code platforms. These tools enable non-technical users to create applications, while also speeding up development for experienced developers.</p>
      
      <h2>5. Enhanced Security Measures</h2>
      <p>With cyber threats becoming more sophisticated, security-first development approaches are gaining traction. DevSecOps practices are being integrated into development workflows to ensure security is considered at every stage.</p>
      
      <p>These trends represent just the beginning of what promises to be an exciting year for software development. At Crystallattice Ltd, we're committed to staying at the forefront of these innovations and helping our clients leverage these technologies for their success.</p>
    `,
  },
  {
    id: 2,
    title: "Why Embedded Systems are the Future of IoT",
    excerpt: "From smart homes to industrial automation, embedded systems are everywhere.",
    date: "2025-07-20",
    author: "Crystallattice Team",
    image: "/images/blogs/blog1.jpg", // Updated to use the new image
    content: `
      <p>Embedded systems are the unsung heroes of the modern technological landscape, quietly powering everything from consumer electronics to complex industrial machinery. In the context of the Internet of Things (IoT), their role is becoming increasingly pivotal.</p>
      
      <h2>1. The Foundation of IoT Devices</h2>
      <p>At its core, IoT relies on devices that can collect data, communicate, and often perform actions autonomously. Embedded systems, with their specialized hardware and firmware, are perfectly suited for this. They provide the computational backbone for sensors, actuators, and communication modules in IoT ecosystems.</p>
      
      <h2>2. Real-time Processing at the Edge</h2>
      <p>One of the key advantages of embedded systems in IoT is their ability to perform real-time data processing at the 'edge' – close to where the data is generated. This minimizes latency, reduces bandwidth requirements for cloud communication, and enhances the responsiveness of IoT applications.</p>
      
      <h2>3. Energy Efficiency</h2>
      <p>Many IoT devices are battery-powered or operate in environments where energy conservation is critical. Embedded systems are designed for efficiency, often consuming minimal power while delivering significant processing capabilities. This makes them ideal for long-duration deployments in smart homes, wearables, and remote monitoring systems.</p>
      
      <h2>4. Enhanced Security</h2>
      <p>Security is a paramount concern in IoT. Embedded systems can be designed with robust security features at the hardware level, offering better protection against cyber threats compared to general-purpose computing platforms. Secure boot, hardware-level encryption, and tamper detection are common features.</p>
      
      <h2>5. Customization and Optimization</h2>
      <p>Unlike off-the-shelf solutions, embedded systems can be highly customized to meet the specific requirements of an IoT application. This allows for optimal performance, cost-effectiveness, and integration with other components, leading to more efficient and specialized IoT devices.</p>
      
      <p>As the IoT landscape continues to expand, the demand for sophisticated and reliable embedded systems will only grow. Crystallattice Ltd specializes in designing and implementing cutting-edge embedded solutions, helping businesses harness the full potential of IoT.</p>
    `,
  },
]

export const dashboard = {
  student: {
    welcome: "Welcome Back, Student!",
    description: "Your personalized learning journey awaits.",
    stats: [
      { title: 'Courses Enrolled', value: '5', icon: 'BookOpen', description: 'Active courses' },
      { title: 'Hours Learned', value: '24.5', icon: 'Clock', description: 'This month' },
      { title: 'Certificates', value: '2', icon: 'Trophy', description: 'Completed' },
      { title: 'Progress', value: '67%', icon: 'TrendingUp', description: 'Overall completion' },
    ],
    recentCourses: [
      { id: '1', title: 'Full-Stack Web Development', progress: 75, nextLesson: 'React State Management', instructor: 'Marcus Rodriguez', thumbnail: '/images/courses/webdev.jpg' },
      { id: '2', title: 'Embedded Systems Programming', progress: 45, nextLesson: 'Arduino Programming Basics', instructor: 'Dr. Sarah Chen', thumbnail: '/images/courses/dev.jpg' },
      { id: '3', title: 'AI & Machine Learning', progress: 30, nextLesson: 'Docker Containerization', instructor: 'James Thompson', thumbnail: '/images/blogs/blog-ai.jpg' },
    ],
    achievements: [
      { title: 'First Course Completed', description: 'Completed your first course', date: '2 weeks ago', icon: 'Trophy' },
      { title: 'Week Streak', description: 'Learned for 7 consecutive days', date: '1 week ago', icon: 'TrendingUp' },
    ],
    cta: {
      title: "Explore More Courses",
      description: "Ready to dive deeper? Check out our extensive course catalog and unlock new skills.",
      primaryButtonText: "Browse Courses",
      primaryButtonLink: "/training",
      secondaryButtonText: "Contact Support",
      secondaryButtonLink: "/contact",
    },
  },
  instructor: {
    welcome: "Welcome Back, Instructor!",
    description: "Manage your courses, track student progress, and upload resources.",
    stats: [
      { title: 'Courses Created', value: '7', icon: 'BookOpen', description: 'Active courses' },
      { title: 'Active Students', value: '180', icon: 'Users', description: 'Currently enrolled' },
      { title: 'Assignments Graded', value: '15', icon: 'FileText', description: 'This week' },
      { title: 'Pending Reviews', value: '3', icon: 'Clock', description: 'Awaiting feedback' },
    ],
    recentCourses: [
      { id: '1', title: 'Full-Stack Web Development', progress: 90, nextLesson: 'Review Module 5 Submissions', instructor: 'You', thumbnail: '/images/courses/webdev.jpg' },
      { id: '2', title: 'Embedded Systems Programming', progress: 60, nextLesson: 'Prepare IoT Lecture', instructor: 'You', thumbnail: '/images/courses/dev.jpg' },
      { id: '3', title: 'AI & Machine Learning', progress: 40, nextLesson: 'Grade ML Project', instructor: 'You', thumbnail: '/images/blogs/blog-ai.jpg' },
    ],
    achievements: [
      { title: 'Top Rated Instructor', description: 'Received 5-star ratings from 50+ students', date: '1 month ago', icon: 'Trophy' },
      { title: 'Course Creator Award', description: 'Created 5 new courses this year', date: '3 months ago', icon: 'Trophy' },
    ],
    cta: {
      title: "Expand Your Reach",
      description: "Ready to share more knowledge? Create new courses and engage with a growing student community.",
      primaryButtonText: "Create New Course",
      primaryButtonLink: "/dashboard/create-course",
      secondaryButtonText: "View All Students",
      secondaryButtonLink: "/dashboard/students",
    },
  },
}

export const partners = [
  {
    name: "Tech University",
    logo: "/images/partners/uniuyo.jpg", // Updated to use the new image
  },
  {
    name: "Global IT Solutions",
    logo: "/images/partners/organizations.jpg", // Updated to use the new image
  },
  {
    name: "EduTech Hub",
    logo: "/images/partners/schtech.jpg", // Updated to use the new image
  },
  {
    name: "Gov Digital Agency",
    logo: "/images/placeholder-logo.png", // Reusing generic placeholder for now
  },
]

export const partnersSection = {
  title: "Our Partners",
  description: "Collaborating with leading institutions and organizations",
}

export const contactPage = {
  hero: {
    title: "Get In Touch",
    description: "Ready to transform your organization with cutting-edge technology? Let's discuss how we can help you achieve your goals.",
  },
  introduction: {
    title: "Let's Start a Conversation",
    description: "Whether you're looking for software development solutions, embedded systems expertise, or training programs, we're here to help. Reach out to us and let's discuss how Crystallattice Ltd can support your success.",
  },
  contactInfo: [
    {
      icon: "Mail",
      title: "Email Us",
      details: ["info@crystallattice.com", "support@crystallattice.com"],
      color: "primary",
    },
    {
      icon: "Phone",
      title: "Call Us",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      color: "accent",
    },
    {
      icon: "MapPin",
      title: "Visit Us",
      details: ["123 Tech Hub Street", "Innovation District, CA 94105"],
      color: "primary",
    },
    {
      icon: "Clock",
      title: "Business Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 4:00 PM"],
      color: "accent",
    },
  ],
}

export const footerContent = {
  contactInfo: {
    address: "123 Tech Hub Street, Innovation District, CA 94105",
    email: "info@crystallattice.com",
    phone: "+1 (555) 123-4567",
  },
  newsletter: {
    title: "Newsletter",
    description: "Subscribe to our newsletter for the latest updates and offers.",
    placeholder: "Your email",
    buttonText: "Subscribe",
  },
  socialLinks: [
    { name: "Facebook", href: "#", icon: "Facebook" },
    { name: "Instagram", href: "#", icon: "Instagram" },
    { name: "Twitter", href: "#", icon: "Twitter" },
    { name: "LinkedIn", href: "#", icon: "Linkedin" },
  ],
}

export const loginPage = {
  hero: {
    title: "Welcome Back",
    description: "Access your learning dashboard or instructor portal to continue your journey with Crystallattice Ltd",
  },
  studentLogin: {
    title: "Student Portal",
    description: "Access your courses, track progress, and continue learning",
    emailPlaceholder: "student@example.com",
    defaultEmail: "student@crystallattice.com",
    defaultPassword: "student123",
    buttonText: "Sign In as Student",
  },
  instructorLogin: {
    title: "Instructor Portal",
    description: "Manage courses, track student progress, and upload resources",
    emailPlaceholder: "instructor@example.com",
    defaultEmail: "instructor@crystallattice.com",
    defaultPassword: "instructor123",
    buttonText: "Sign In as Instructor",
  },
  demoCredentials: {
    title: "Demo Credentials",
    description: "Use these credentials to explore the platform",
    student: {
      label: "Student Account:",
      email: "student@crystallattice.com",
      password: "student123",
    },
    instructor: {
      label: "Instructor Account:",
      email: "instructor@crystallattice.com",
      password: "instructor123",
    },
  },
}
