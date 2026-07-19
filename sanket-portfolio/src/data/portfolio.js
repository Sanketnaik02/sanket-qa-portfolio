export const personal = {
  name: 'Sanket Naik',
  role: 'QA Analyst',
  tagline: 'Building Reliable Software Through Systematic Testing',
  summary: 'QA Analyst with 2+ years of IT experience including 1+ year specializing in Quality Assurance. Background in IT Support at Intellect Design Arena, now driving manual testing, API validation, and quality engineering for Capital Market applications at Greeksoft Technologies.',
  location: 'Mumbai, Maharashtra',
  email: 'sanket.naik@email.com',
  linkedin: 'linkedin.com/in/sanket-naik',
  github: 'github.com/sanket-naik',
};

export const journey = [
  {
    year: 'Oct 2022',
    title: 'IT Support Engineer — Intellect Design Arena',
    description: 'Started my IT career providing technical support for enterprise banking and financial software. Gained deep exposure to real-world systems, troubleshooting production issues, and understanding how financial institutions use technology daily.',
    highlight: 'Enterprise banking software support',
  },
  {
    year: 'Jan 2025',
    title: 'Transitioned to QA — Greeksoft Technologies',
    description: 'Moved into Quality Assurance, applying my systems knowledge to structured testing. Now responsible for manual testing, API validation, and defect tracking for Risk Management Systems in the Capital Markets domain.',
    highlight: 'Career pivot into quality engineering',
  },
  {
    year: '2025',
    title: 'Mastered API Testing',
    description: 'Built deep expertise in REST API testing using Postman. Validated request/response payloads, authentication flows, error handling, and schema correctness across 80+ endpoints in the RMS application.',
    highlight: '80+ API endpoints validated',
  },
  {
    year: '2025',
    title: 'Built Testing Artifacts Library',
    description: 'Created comprehensive test case repositories, professional bug reports, and SQL validation scripts for the Capital Markets team. Established repeatable testing patterns used across release cycles.',
    highlight: '500+ test cases documented',
  },
  {
    year: '2025',
    title: 'QA Automation Lab',
    description: 'Building a structured automation testing portfolio with Playwright, Rest Assured, and TypeScript. Creating page object models, API test frameworks, and CI-ready configurations to transition into automation engineering.',
    highlight: 'Playwright + Rest Assured + TypeScript',
  },
];

export const whyQA = [
  {
    icon: 'magnifier',
    title: 'Curiosity-Driven',
    description: 'Every application is a puzzle. I thrive on finding edge cases, boundary conditions, and hidden defects that others overlook — especially in financial systems where precision is non-negotiable.',
  },
  {
    icon: 'shield',
    title: 'User Advocate',
    description: 'I test with the end user in mind. Quality is not just finding bugs — it is ensuring the product delivers on its promise. In Capital Markets, a missed defect can mean real financial impact.',
  },
  {
    icon: 'chart',
    title: 'Systematic Approach',
    description: 'My testing follows structured methodologies: risk-based testing, boundary analysis, equivalence partitioning, and exploratory testing. Every test has a purpose and traceability.',
  },
  {
    icon: 'rocket',
    title: 'Automation Mindset',
    description: 'Manual expertise forms my foundation. I am actively building automation skills with Playwright, Rest Assured, and TypeScript to multiply my impact and enable faster, more reliable release cycles.',
  },
];

export const coreExpertise = [
  {
    category: 'Manual Testing',
    color: 'from-indigo-500 to-blue-500',
    skills: [
      { name: 'Functional Testing', level: 95 },
      { name: 'Regression Testing', level: 90 },
      { name: 'Smoke & Sanity Testing', level: 92 },
      { name: 'UAT Coordination', level: 88 },
      { name: 'Exploratory Testing', level: 85 },
    ],
  },
  {
    category: 'API Testing',
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'Postman Collections', level: 92 },
      { name: 'REST API Validation', level: 90 },
      { name: 'Authentication Testing', level: 85 },
      { name: 'Response Schema Validation', level: 88 },
      { name: 'Error Handling Verification', level: 86 },
    ],
  },
  {
    category: 'Database & SQL',
    color: 'from-cyan-500 to-teal-500',
    skills: [
      { name: 'SQL Queries', level: 82 },
      { name: 'Data Integrity Validation', level: 85 },
      { name: 'Test Data Preparation', level: 80 },
    ],
  },
  {
    category: 'Tools & Platforms',
    color: 'from-amber-500 to-orange-500',
    skills: [
      { name: 'Jira / Defect Tracking', level: 90 },
      { name: 'Postman', level: 92 },
      { name: 'GitHub', level: 80 },
      { name: 'VS Code', level: 85 },
    ],
  },
];

export const rmsProject = {
  name: 'Risk Management System (RMS)',
  company: 'Greeksoft Technologies',
  domain: 'Capital Markets',
  description: 'Enterprise-grade Risk Management System for broking firms, handling real-time margin calculations, position monitoring, and regulatory compliance reporting for NSE and BSE segments.',
  modules: [
    {
      name: 'Margin Calculator',
      description: 'Validated real-time SPAN + exposure margin computations across equity, F&O, and currency segments. Ensured calculation accuracy against exchange-published margin files.',
      testFocus: 'Calculation accuracy, edge-case positions, multi-exchange scenarios',
    },
    {
      name: 'Position Monitor',
      description: 'Tested live position tracking with real-time market data feeds, P&L calculations, and threshold-based alerts for risk managers.',
      testFocus: 'Data synchronization, alert triggers, real-time feed handling',
    },
    {
      name: 'Risk Reports',
      description: 'Validated regulatory report generation (RMS reports for NSE/BSE), PDF exports, data completeness, and format compliance for compliance teams.',
      testFocus: 'Report accuracy, format compliance, large data volumes',
    },
    {
      name: 'API Layer',
      description: 'Tested 80+ REST API endpoints powering the RMS dashboard, including market data feeds, order APIs, and authentication flows.',
      testFocus: 'Payload validation, auth tokens, error codes, response times',
    },
  ],
  metrics: [
    { label: 'API Endpoints Tested', value: 80, suffix: '+' },
    { label: 'Test Scenarios', value: 400, suffix: '+' },
    { label: 'Bugs Identified', value: 120, suffix: '+' },
    { label: 'Release Cycles', value: 15, suffix: '+' },
  ],
};

export const automationLab = {
  name: 'QA Automation Lab',
  description: 'A growing collection of test automation frameworks built with Playwright, Rest Assured, and TypeScript. Demonstrates page object models, data-driven testing, API automation, and CI-ready configurations.',
  stack: ['Playwright', 'Rest Assured', 'TypeScript', 'Java', 'Node.js', 'GitHub Actions', 'Allure Reports'],
  projects: [
    {
      name: 'E2E Test Suite — SplitMate',
      description: 'Full end-to-end tests for SplitMate covering authentication flows, group CRUD, expense operations, and settlement calculations using Playwright.',
      features: ['Page Object Model pattern', 'Data-driven test fixtures', 'API request interception', 'Visual regression snapshots'],
      status: 'In Progress',
    },
    {
      name: 'API Test Framework',
      description: 'REST API testing framework using Rest Assured and Playwright\'s request context. Validates 50+ endpoints with schema assertions and environment-based configs.',
      features: ['Schema validation with Zod', 'Rest Assured + Playwright requests', 'Parallel execution', 'HTML + Allure reporting'],
      status: 'In Progress',
    },
    {
      name: 'CI/CD Pipeline Template',
      description: 'GitHub Actions workflow template for running automated test suites on push/PR with artifact uploads, parallel shards, and failure notifications.',
      features: ['Multi-browser matrix', 'Sharded execution', 'Slack notifications', 'Docker-based runners'],
      status: 'Planned',
    },
  ],
};

export const testArtifacts = {
  testCases: [
    { id: 'TC-001', module: 'RMS Login', title: 'Verify login with valid broker credentials', priority: 'High', type: 'Positive' },
    { id: 'TC-002', module: 'RMS Login', title: 'Verify error message for invalid password', priority: 'High', type: 'Negative' },
    { id: 'TC-003', module: 'RMS Login', title: 'Verify session expiry after 15 min idle', priority: 'Medium', type: 'Security' },
    { id: 'TC-004', module: 'Margin Calc', title: 'Validate SPAN margin for NIFTY CE 1 lot', priority: 'Critical', type: 'Calculation' },
    { id: 'TC-005', module: 'Margin Calc', title: 'Verify margin call trigger at 80% threshold', priority: 'High', type: 'Business Logic' },
    { id: 'TC-006', module: 'Positions', title: 'Verify real-time P&L update on tick data', priority: 'Critical', type: 'Integration' },
    { id: 'TC-007', module: 'Reports', title: 'Validate daily RMS report PDF completeness', priority: 'Medium', type: 'Data' },
    { id: 'TC-008', module: 'API', title: 'Verify GET /margins/calculate returns correct schema', priority: 'High', type: 'API' },
  ],
  bugs: [
    {
      id: 'BUG-2041',
      title: 'SPAN margin miscalculated for multi-leg option strategies',
      severity: 'Critical',
      priority: 'P1',
      status: 'Fixed',
      module: 'Margin Calculator',
      description: 'When a user has a multi-leg options position (e.g., bull call spread), the SPAN margin is calculated independently for each leg instead of applying the spread benefit, resulting in inflated margin requirements.',
      steps: [
        'Login as broker user with F&O segment enabled',
        'Create a bull call spread: Buy NIFTY 24000 CE + Sell NIFTY 24500 CE',
        'Navigate to Margin Calculator module',
        'Observe margin requirement shows full margin for both legs',
        'Expected: Reduced margin with spread benefit applied per NSE rules',
      ],
    },
    {
      id: 'BUG-2058',
      title: 'Position monitor shows stale data after EOD reconciliation',
      severity: 'Major',
      priority: 'P2',
      status: 'Fixed',
      module: 'Position Monitor',
      description: 'After market hours end and system processes end-of-day reconciliation, the position monitor still shows intraday values instead of carried-forward positions. Data refreshes only after manual page reload.',
      steps: [
        'Hold positions overnight across trading sessions',
        'Wait for EOD processing to complete (post 3:30 PM IST)',
        'Refresh position monitor page',
        'Observe stale intraday P&L instead of carried-forward values',
        'Expected: Auto-refresh to show carried-forward positions',
      ],
    },
  ],
  apiTests: [
    { method: 'GET', endpoint: '/api/v1/margins/calculate', status: 200, time: '180ms', description: 'Calculate margin for given positions' },
    { method: 'POST', endpoint: '/api/v1/positions/snapshot', status: 201, time: '95ms', description: 'Capture position snapshot' },
    { method: 'GET', endpoint: '/api/v1/reports/daily-rms', status: 200, time: '340ms', description: 'Fetch daily RMS report data' },
    { method: 'PUT', endpoint: '/api/v1/alerts/threshold', status: 200, time: '110ms', description: 'Update margin alert threshold' },
    { method: 'POST', endpoint: '/api/v1/auth/refresh-token', status: 200, time: '65ms', description: 'Refresh auth session token' },
    { method: 'GET', endpoint: '/api/v1/clients/:id/exposure', status: 200, time: '130ms', description: 'Fetch client exposure data' },
  ],
  sqlQueries: [
    { query: "SELECT client_id, SUM(net_margin) AS total_margin FROM positions WHERE trade_date = CURRENT_DATE GROUP BY client_id HAVING total_margin < 50000", purpose: 'Identify clients below minimum margin threshold', rows: 12 },
    { query: "SELECT p.client_id, p Scrip, p.net_qty, p.unrealized_pnl FROM positions p WHERE p.unrealized_pnl < -100000 ORDER BY p.unrealized_pnl ASC", purpose: 'Find positions with high unrealized losses', rows: 5 },
    { query: "UPDATE margin_alerts SET status = 'triggered', triggered_at = NOW() WHERE client_id IN (SELECT id FROM clients WHERE net_margin < maintenance_margin)", purpose: 'Trigger margin call alerts for under-margined clients', rows: 8 },
  ],
};

export const projects = [
  {
    name: 'QA Automation Lab',
    tagline: 'Primary Project',
    description: 'A structured automation testing portfolio demonstrating Playwright, Rest Assured, and TypeScript skills. Includes E2E test suites, API test frameworks, and CI/CD pipeline templates designed for real-world testing workflows.',
    tech: ['Playwright', 'Rest Assured', 'TypeScript', 'Java', 'GitHub Actions', 'Allure'],
    features: ['Page Object Models', 'Data-Driven Testing', 'API Automation', 'CI/CD Pipelines'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    name: 'SplitMate',
    tagline: 'Side Project',
    description: 'A modern expense-splitting SaaS for groups. Built with a QA-first mindset — features comprehensive test coverage for authentication, group management, expense tracking, and settlement calculations.',
    tech: ['React', 'Vite', 'Supabase', 'Vercel'],
    features: ['Authentication & Groups', 'Expense Tracking', 'Smart Settlements', 'Real-time Updates'],
    liveUrl: '#',
    githubUrl: '#',
  },
];

export const certifications = [
  { name: 'Manual Testing Certification', subtitle: 'Functional & Regression Testing', status: 'Completed', progress: 100 },
  { name: 'ISTQB Foundation Level', subtitle: 'International Software Testing Qualification', status: 'In Progress', progress: 40 },
  { name: 'Automation Testing', subtitle: 'Playwright + Rest Assured + TypeScript', status: 'In Progress', progress: 30 },
];

export const roadmap = [
  {
    phase: 'Foundation',
    status: 'completed',
    items: ['Manual Testing Fundamentals', 'Test Case Design Techniques', 'Bug Reporting & Defect Lifecycle in Jira', 'SQL for Test Data Validation', 'Postman API Testing'],
  },
  {
    phase: 'Intermediate',
    status: 'current',
    items: ['Playwright + TypeScript', 'Rest Assured API Automation', 'Page Object Model Pattern', 'CI/CD with GitHub Actions', 'Allure Reporting'],
  },
  {
    phase: 'Advanced',
    status: 'upcoming',
    items: ['Visual Regression Testing', 'Performance Testing (k6 / JMeter)', 'Security Testing Basics', 'Test Architecture Design', 'Lead QA Initiatives'],
  },
];

export const githubRepos = [
  { name: 'qa-automation-lab', description: 'Playwright + TypeScript E2E test suites and frameworks', language: 'TypeScript', stars: 12, forks: 3, updated: '2 days ago' },
  { name: 'api-testing-framework', description: 'Rest Assured + Playwright API validation suite', language: 'Java', stars: 8, forks: 2, updated: '1 week ago' },
  { name: 'splitmate', description: 'Expense sharing SaaS with comprehensive test coverage', language: 'JavaScript', stars: 15, forks: 4, updated: '3 days ago' },
  { name: 'sql-practice-queries', description: 'SQL exercises for Capital Markets test data validation', language: 'SQL', stars: 5, forks: 1, updated: '2 weeks ago' },
];

export const navLinks = [
  { label: 'Journey', href: '#journey' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'RMS Project', href: '#rms' },
  { label: 'Automation Lab', href: '#automation' },
  { label: 'Artifacts', href: '#artifacts' },
  { label: 'Projects', href: '#projects' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Contact', href: '#contact' },
];
