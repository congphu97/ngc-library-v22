import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';

interface CompanyExperience {
  company: string;
  location: string;
  role: string;
  period: string;
  site?: string;
  project: string;
  projectDesc: string;
  techStack: string;
  highlights: string[];
}

@Component({
  selector: 'guideline-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: false,
})
export class ContactComponent implements OnInit {
  public isDarkMode = false;
  public activeView: 'profile' | 'pdf' = 'profile';

  public pdfUrl = 'assets/docs/tran-cong-phu-cv.pdf';
  public pdfSafeUrl: SafeResourceUrl;
  public currentPage = 1;
  public totalPages = 3;

  public copiedField: string | null = null;
  public activeCategory = 'FRONTEND';
  public categories = [
    'CORE & LANGUAGES',
    'FRONTEND',
    'MOBILE',
    'UI & DESIGN SYSTEMS',
    'STATE & PATTERNS',
    'ANALYTICS & TRACKING',
    'DEVOPS & PRACTICES',
    'SOFT SKILLS'
  ];

  public skillsData: { [key: string]: string[] } = {
    'CORE & LANGUAGES': [
      'HTML',
      'CSS/SCSS',
      'TypeScript',
      'JavaScript (ES6+)',
      'Web Accessibility (a11y)',
      'Firebase'
    ],
    'FRONTEND': [
      'Angular',
      'ReactJS',
      'NextJS'
    ],
    'MOBILE': [
      'React Native',
      'Ionic',
      'Capacitor',
      'Cordova'
    ],
    'UI & DESIGN SYSTEMS': [
      'StencilJS',
      'Angular Library',
      'Angular Material (CDK)',
      'Ant Design',
      'Bootstrap',
      'Micro-frontends',
      'Component-driven UI'
    ],
    'STATE & PATTERNS': [
      'NgRx',
      'RxJS',
      'Modular Architecture'
    ],
    'ANALYTICS & TRACKING': [
      'Firebase Analytics',
      'GA4',
      'Matomo',
      'Google Tag Manager'
    ],
    'DEVOPS & PRACTICES': [
      'GitOps',
      'CI/CD pipelines'
    ],
    'SOFT SKILLS': [
      'Problem Solving & Analytical Thinking: Strong ability to diagnose complex frontend bugs, optimize performance bottlenecks, and architect efficient solutions.',
      'AI Integration & Workflow Automation: Leveraging AI workflows and generative tools to optimize development tasks, reduce boilerplate code, and enhance overall engineering efficiency.',
      'Agile & Scrum Methodologies: Experienced in working in fast-paced Agile environments, participating in sprint planning, retrospectives, and code reviews.',
      'Mentorship & Leadership: Guiding developers, promoting best coding practices, and fostering technical knowledge sharing within the team.',
      'Adaptability & Continuous Learning: Quickly adapting to new technologies, frameworks, and AI-driven workflows to enhance productivity.'
    ]
  };

  public selectedCompany: string | null = 'Mercatus';

  public companySummaries: { [key: string]: CompanyExperience } = {
    'Mercatus': {
      company: 'MERCATUS',
      location: 'Canada',
      role: 'Mobile Developer',
      period: '06/2023 – present',
      site: 'https://www.mercatus.com/platform-overview/',
      project: 'DXPro E-Commerce Platform',
      projectDesc: 'Enterprise-grade, multi-tenant commerce ecosystem deployed across multiple regional grocery & retail chains, serving millions of active shoppers.',
      techStack: 'Angular, Angular Signals, Ionic, Capacitor, StencilJS, TypeScript, Firebase, Git',
      highlights: [
        'Cross-Platform UI Architecture: Built reusable Web Components, build core frontend modules used on Web/Mobile/Tablet apps (Ionic/Capacitor/Cordova).',
        'Multi-Tenant & Dynamic CMS: Built dynamic UI widgets integrated with CMS, user independently customize and publish custom layouts on Web/Mobile/Tablet without code deployments.',
        'AI & Architecture Docs: Applied AI coding assistants to generate boilerplate code, write test cases, and create structured TSD/TSA documentation',
        'Solution Architecture: Provided frontend technical design and solution for core e-commerce features to enterprise grocery requirements.',
        'Internal CLI & Automation: Created an internal CLI tool to automate daily internal workflows.',
        'Third-Party & SDK Integrations: Integrated enterprise SDKs using clean adapter layers to support implement third-party vendors across different clients.',
        'Mobile Builds & Production Releases: Managed hybrid mobile builds (Ionic/Capacitor/Cordova), resolving iOS/Android native issues and releasing client apps to the App Store and Google Play.'
      ]
    },
    'Cubable': {
      company: 'CUBABLE',
      location: 'Vietnam',
      role: 'Front-End Developer',
      period: '04/2021 – 04/2023',
      site: 'https://cubable.com/',
      project: 'Cubable — No-Code & Workflow Automation Platform',
      projectDesc: 'No-Code & Workflow Automation Platform enabling businesses to build relational databases and automate custom operational workflows.',
      techStack: 'Angular, Angular CDK, TypeScript, NodeJS, Git',
      highlights: [
        'Scalable UI Architecture: Designed and built core frontend modules and an extensive reusable UI component library supporting real-time data binding, dynamic grids, and drag-and-drop workflow builders.',
        'Multi-Workspace & Performance Optimization: Engineered scalable multi-workspace architectures and optimized client-side performance.',
        'Reusable Components & Library Extension: Customized UI components and customized open-source libraries, standardizing UI behaviors, and improving overall maintainability across engineering teams.',
        'Collaboration & Standards: Worked directly with Product Managers and UI/UX designers to translate ambiguous product requirements into technical specs, establishing coding standards.'
      ]
    },
    'FPT Information System': {
      company: 'FPT INFORMATION SYSTEM',
      location: 'Vietnam',
      role: 'Full-Stack Developer',
      period: '01/2020 – 04/2021',
      site: 'https://multigo.golabs.vn/',
      project: 'Go!Bus (Public Transit Navigation app for HCMC, currently is MultiGo) & Enterprise Smart City Solutions',
      projectDesc: 'Public Transit Navigation app for HCMC (currently is MultiGo) & Enterprise Smart City Solutions.',
      techStack: 'Angular, Angular Material, Ionic, Cordova, ThingsBoard, NestJS, TypeScript, Git',
      highlights: [
        'Enterprise Application Delivery: Developed end-user features and responsive web/mobile interfaces for large-scale public initiatives across Smart City, Healthcare, Banking and social services.',
        'API & Data Layer: Designed backend REST endpoints and connected them with Angular clients, implementing client-side caching strategies and robust error interceptors.',
        'Containerization & Deployment: Maintained production application health, diagnosed bottlenecks in live environments, and supported containerized deployments via Docker and Kubernetes.',
        'Technical Documentation: Authored technical design documents (TDD), system interaction diagrams, and integration guides for municipal and enterprise clients.'
      ]
    }
  };

  constructor(
    private sanitizer: DomSanitizer,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {
    this.updatePdfUrl();
  }

  public goHome() {
    this.router.navigate(['/components']);
  }

  ngOnInit() {
    this.isDarkMode = document.body.classList.contains('dark-theme');
    this.cdr.markForCheck();
  }

  onThemeToggle(isDark: boolean) {
    this.isDarkMode = isDark;
    this.cdr.detectChanges();
  }

  setActiveView(mode: 'profile' | 'pdf') {
    this.activeView = mode;
    if (mode === 'pdf') {
      this.updatePdfUrl();
    }
  }

  public setPage(page: number) {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.updatePdfUrl();
  }

  private updatePdfUrl() {
    this.pdfSafeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      `${this.pdfUrl}#page=${this.currentPage}&view=FitH`
    );
  }

  setActiveCategory(category: string) {
    this.activeCategory = category;
  }

  selectCompany(companyKey: string) {
    if (this.selectedCompany === companyKey) {
      this.selectedCompany = null;
    } else {
      this.selectedCompany = companyKey;
    }
  }

  copyInfo(text: string, field: string) {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        this.copiedField = field;
        setTimeout(() => {
          if (this.copiedField === field) {
            this.copiedField = null;
          }
        }, 2200);
      });
    }
  }
}
