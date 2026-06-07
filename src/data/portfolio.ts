// ─── Portfolio Data ───────────────────────────────────────
// Single source of truth for all content. Update here and
// every section reflects the change automatically.

export const profile = {
  name: "Agathamudi Mahesh",
  initials: "AM",
  role: "Software Engineer",
  tagline: "Open to Work",
  bio: "CS graduate building cloud systems with Python & AWS. Driven by clean code and real impact.",
  description:
    "Passionate about building scalable cloud infrastructure, automating deployment pipelines, and improving application reliability. Specializing in transforming complex technical challenges into clean, efficient solutions using Python, AWS, Docker, CI/CD, and infrastructure automation tools to deliver secure, high-performance, and production-ready applications.",
  email: "maheshagathamudi@gmail.com",
  location: "India",
  github: "https://github.com/Maheshagathamudi",
  linkedin: "https://www.linkedin.com/in/maheshagathamudi/",
};

export const stats = [
  { value: "+5", label: "Projects Completed" },
  { value: "+3", label: "Certifications Earned" },
  { value: "2+", label: "Years Learning" },
];

export const skills = [
  { name: "AWS (EC2, S3, Lambda, ECS)", level: 90, category: "cloud" },
  { name: "Python", level: 85, category: "language" },
  { name: "Docker & Kubernetes", level: 80, category: "devops" },
  { name: "Terraform & Ansible", level: 78, category: "devops" },
  { name: "CI/CD (Jenkins, GitHub Actions)", level: 82, category: "devops" },
  { name: "Linux & Bash Scripting", level: 88, category: "language" },
  { name: "Git & GitHub", level: 90, category: "tool" },
  { name: "Monitoring (CloudWatch, Prometheus)", level: 70, category: "cloud" },
];

export const techStack = [
  "AWS",
  "Python",
  "Docker",
  "Kubernetes",
  "Terraform",
  "Ansible",
  "Jenkins",
  "GitHub Actions",
  "Linux",
  "Bash",
  "Git",
  "CloudFormation",
  "Lambda",
  "EC2",
  "S3",
  "CloudWatch",
];

export const projects = [
  {
    id: 1,
    title: "ExpenseIQ - Finance Dashboard",
    description:
      "A smart personal finance dashboard to track income, expenses, and analyze spending with a modern fintech UI. Features charts, OCR receipt scanning, and CSV import.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    category: "web",
    github: "https://github.com/Maheshagathamudi/ExpenseIQ",
    live: "https://expense-gyupqcpi5-maheshagathamudi-1027s-projects.vercel.app",
    image: "/projects/expenseiq.png",
  },
  {
    id: 2,
    title: "AIOS - Autonomous AI Developer",
    description:
      "An AI-powered autonomous software generation platform. Given a high-level objective, it autonomously researches, plans, generates code, runs QA, and self-heals builds. Built with NVIDIA Llama 3.3, FastAPI, a 7-agent pipeline, SQLite, and a React dashboard.",
    tags: ["Llama 3.3", "FastAPI", "React", "SQLite", "Agents"],
    category: "ai",
    github: "https://github.com/Maheshagathamudi",
    live: "",
    image: "/projects/aios.png",
  },
  {
    id: 3,
    title: "Market Sentiment vs Trader Behavior",
    description:
      "An analysis of how market sentiment (Fear vs Greed) impacts trader behavior (profitability, volume, and activity). Correlates historical trading data with the Fear-Greed Index to extract data-driven behavioral insights.",
    tags: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    category: "data-science",
    github: "https://github.com/Maheshagathamudi/Market-Sentiment-vs-Trader-Behavior",
    live: "",
    image: "/projects/sentiment.png",
  },
  {
    id: 4,
    title: "Monitoring & Alerting Stack",
    description:
      "Deployed Prometheus + Grafana monitoring stack on EKS. Created custom dashboards and CloudWatch alarms for proactive incident response with 99.9% uptime tracking.",
    tags: ["Prometheus", "Grafana", "AWS CloudWatch"],
    category: "cloud",
    github: "https://github.com/Maheshagathamudi/Mahesh_portfolio",
    live: "",
    image: "/projects/monitoring.png",
  },
  {
    id: 5,
    title: "Serverless API Gateway",
    description:
      "Designed a serverless REST API using AWS Lambda, API Gateway, and DynamoDB. Implemented request validation, rate limiting, and IAM authentication.",
    tags: ["AWS Lambda", "API Gateway", "DynamoDB"],
    category: "cloud",
    github: "https://github.com/Maheshagathamudi/Mahesh_portfolio",
    live: "",
    image: "/projects/serverless-api.png",
  },
  {
    id: 6,
    title: "Container Orchestration Platform",
    description:
      "Set up a production Kubernetes cluster on EKS with Helm charts, auto-scaling, and rolling updates. Managed microservices architecture with service mesh integration.",
    tags: ["Kubernetes", "Docker", "Helm"],
    category: "devops",
    github: "https://github.com/Maheshagathamudi/Mahesh_portfolio",
    live: "",
    image: "/projects/k8s-platform.png",
  },
];

export const experience = [
  {
    id: 1,
    role: "AWS DevOps Engineer",
    company: "TechCorp Solutions",
    period: "Jan 2024 — Present",
    description:
      "Designing and managing AWS cloud infrastructure. Implementing CI/CD pipelines, container orchestration with ECS/EKS, and infrastructure automation with Terraform. Reduced deployment failures by 40% through automated testing integration.",
    tags: ["AWS", "Terraform", "Docker", "Jenkins"],
  },
  {
    id: 2,
    role: "Cloud Engineering Intern",
    company: "StartupXYZ",
    period: "Jun 2023 — Dec 2023",
    description:
      "Assisted in migrating on-premise applications to AWS. Set up monitoring dashboards with CloudWatch, automated EC2 instance management with Lambda functions, and documented infrastructure runbooks.",
    tags: ["AWS", "Python", "CloudWatch", "Lambda"],
  },
  {
    id: 3,
    role: "B.Tech in Computer Science",
    company: "University of Technology",
    period: "2020 — 2024",
    description:
      "Graduated with a focus on cloud computing and distributed systems. Completed capstone project on auto-scaling microservices architecture. Active member of the coding club and AWS student community.",
    tags: ["CS Degree", "Cloud Computing", "Distributed Systems"],
  },
];

export const certifications = [
  "AWS Solutions Architect – Associate",
  "AWS Cloud Practitioner",
  "HashiCorp Terraform Associate",
];