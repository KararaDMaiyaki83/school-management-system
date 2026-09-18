import { 
  Student, 
  StaffMember, 
  SubjectOrCourse, 
  GradeRecord, 
  InvoiceRecord, 
  Announcement, 
  CBTExam, 
  CBTSubmission,
  SchoolSettings, 
  User, 
  AlumniProfile, 
  CommunityPost, 
  ClassArm, 
  GetoCoreLicenseConfig,
  TenantSchool,
  GlobalSaaSMetrics,
  GlobalBroadcastNotice,
  BursaryPaymentProofTicket,
  ParentBursaryMessage
} from '../types';

export const initialSettings: SchoolSettings = {
  schoolName: "Apex Royal Academy & Polytechnic College",
  motto: "Knowledge, Character, and Innovation for the Nation",
  address: "Plot 14 Independence Way, Central Academic Zone, Abuja, FCT",
  email: "admin@apexroyal.edu.ng",
  phone: "+234 803 555 0199 / +234 812 400 8800",
  currentSession: "2026/2027",
  currentTermOrSemester: "First Term / Harmattan Semester",
  currencySymbol: "₦",
  currencyCode: "NGN",
  tertiaryGradingSystem: "5.0_scale"
};

export const mockUsers: User[] = [
  {
    id: "usr_getocore_admin",
    name: "Engr. Farouk Bello (GetoCore Lead)",
    email: "central.admin@getocore.com",
    role: "getocore_admin",
    tier: "all",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    identifierId: "GETO-HQ-01",
    officeTitle: "GetoCore Digital Innovation - Central Licensing Authority"
  },
  {
    id: "usr_admin",
    name: "Dr. Aliyu Mohammed",
    email: "admin@apexroyal.edu.ng",
    role: "super_admin",
    tier: "all",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    identifierId: "SUPER-001",
    officeTitle: "Office of the Director General / Head of School"
  }
];

export const mockStudents: Student[] = [];

export const mockSubjects: SubjectOrCourse[] = [
  // Primary Wing (NERDC Standard)
  { 
    id: "sub_p1", 
    code: "ENG-PRI", 
    name: "English Studies & Phonics", 
    tier: "primary", 
    level: "Primary 1 - 6", 
    category: "Core", 
    periodsPerWeek: 5,
    teacherName: "Unassigned",
    syllabusOutline: "NERDC Primary English: Jolly Phonics, reading comprehension, vocabulary expansion, and composition.",
    approvedByOffice: "Office of the Vice Principal (Academics)",
    status: "active"
  },
  { 
    id: "sub_p2", 
    code: "MTH-PRI", 
    name: "Mathematics & Quantitative Reasoning", 
    tier: "primary", 
    level: "Primary 1 - 6", 
    category: "Core", 
    periodsPerWeek: 5,
    teacherName: "Unassigned",
    syllabusOutline: "Numeracy, mental arithmetic, geometry, word problems, and quantitative aptitude test drills.",
    approvedByOffice: "Office of the Vice Principal (Academics)",
    status: "active"
  },
  { 
    id: "sub_p3", 
    code: "BST-PRI", 
    name: "Basic Science & Technology", 
    tier: "primary", 
    level: "Primary 1 - 6", 
    category: "Science", 
    periodsPerWeek: 4,
    teacherName: "Unassigned",
    syllabusOutline: "Living and non-living things, weather observation, energy forms, basic ICT and computer appreciation.",
    approvedByOffice: "Office of the Vice Principal (Academics)",
    status: "active"
  },
  { 
    id: "sub_p4", 
    code: "NVE-PRI", 
    name: "National Values & Civic Education", 
    tier: "primary", 
    level: "Primary 1 - 6", 
    category: "General", 
    periodsPerWeek: 3,
    teacherName: "Unassigned",
    syllabusOutline: "Civic rights, Nigerian cultural heritage, peace education, social habits, and moral instructions.",
    approvedByOffice: "Office of the Vice Principal (Academics)",
    status: "active"
  },
  { 
    id: "sub_p5", 
    code: "AGR-PRI", 
    name: "Agricultural Science & Nature Studies", 
    tier: "primary", 
    level: "Primary 1 - 6", 
    category: "Vocational", 
    periodsPerWeek: 3,
    teacherName: "Unassigned",
    syllabusOutline: "Soil classification, school garden farm management, domestic animal husbandry, and food storage.",
    approvedByOffice: "Office of the Vice Principal (Academics)",
    status: "active"
  },

  // Junior Secondary Wing (NERDC 9-Year Basic Education Curriculum)
  { 
    id: "sub_j1", 
    code: "ENG-JSS", 
    name: "English Studies & Literature in English", 
    tier: "junior_sec", 
    level: "JSS 1 - 3", 
    category: "Core", 
    periodsPerWeek: 5,
    teacherName: "Unassigned",
    syllabusOutline: "BECE preparation: Grammatical structures, prose, poetry, phonetics (vowel/consonant contrasts), and formal letter writing.",
    approvedByOffice: "Department of Languages & Humanities",
    status: "active"
  },
  { 
    id: "sub_j2", 
    code: "MTH-JSS", 
    name: "General Mathematics", 
    tier: "junior_sec", 
    level: "JSS 1 - 3", 
    category: "Core", 
    periodsPerWeek: 5,
    teacherName: "Unassigned",
    syllabusOutline: "Algebraic expressions, linear equations, plane geometry, statistics, probability, and commercial arithmetic.",
    approvedByOffice: "Department of Mathematics & Computing",
    status: "active"
  },
  { 
    id: "sub_j3", 
    code: "BSC-JSS", 
    name: "Basic Science", 
    tier: "junior_sec", 
    level: "JSS 1 - 3", 
    category: "Science", 
    periodsPerWeek: 4,
    teacherName: "Unassigned",
    syllabusOutline: "Energy quantization, chemical systems, human digestive anatomy, ecosystem interactions, and laboratory safety.",
    approvedByOffice: "Department of Pure Sciences",
    status: "active"
  },
  { 
    id: "sub_j4", 
    code: "BTECH-JSS", 
    name: "Basic Technology & Technical Drawing", 
    tier: "junior_sec", 
    level: "JSS 1 - 3", 
    category: "Vocational", 
    periodsPerWeek: 4,
    teacherName: "Unassigned",
    syllabusOutline: "Orthographic projection, workshop hand tools, woodwork, metalwork joints, basic electronics, and drafting boards.",
    approvedByOffice: "Department of Vocational & Technical Education",
    status: "active"
  },
  { 
    id: "sub_j5", 
    code: "BUS-JSS", 
    name: "Business Studies & Bookkeeping", 
    tier: "junior_sec", 
    level: "JSS 1 - 3", 
    category: "Commercial", 
    periodsPerWeek: 3,
    teacherName: "Unassigned",
    syllabusOutline: "Double-entry bookkeeping, office practice, keyboarding, petty cash book, and entrepreneurial trade.",
    approvedByOffice: "Department of Commercial Studies",
    status: "active"
  },

  // Senior Secondary Wing (WAEC/NECO Standard)
  { 
    id: "sub_s1", 
    code: "ENG-SSS", 
    name: "English Language (WASSCE/SSCE)", 
    tier: "senior_sec", 
    level: "SSS 1 - 3", 
    category: "Core", 
    periodsPerWeek: 5,
    teacherName: "Unassigned",
    syllabusOutline: "WASSCE Syllabus: Essay writing, summary passage synthesis, comprehension, test of orals, and registers.",
    approvedByOffice: "Senior Secondary Academic Directorate",
    status: "active"
  },
  { 
    id: "sub_s2", 
    code: "MTH-SSS", 
    name: "General Mathematics", 
    tier: "senior_sec", 
    level: "SSS 1 - 3", 
    category: "Core", 
    periodsPerWeek: 5,
    teacherName: "Unassigned",
    syllabusOutline: "Trigonometry, quadratic functions, circle geometry theorems, vectors, calculus basics, and cumulative frequency.",
    approvedByOffice: "Senior Secondary Academic Directorate",
    status: "active"
  },
  { 
    id: "sub_s3", 
    code: "PHY-SSS", 
    name: "Physics & Practicals", 
    tier: "senior_sec", 
    level: "SSS 1 - 3", 
    category: "Science", 
    periodsPerWeek: 4,
    teacherName: "Unassigned",
    syllabusOutline: "Mechanics, waves & optics, electricity & electromagnetism, atomic & nuclear physics, and WAEC alternative to practicals.",
    approvedByOffice: "Senior Secondary Academic Directorate",
    status: "active"
  },
  { 
    id: "sub_s4", 
    code: "CHM-SSS", 
    name: "Chemistry & Lab Experiments", 
    tier: "senior_sec", 
    level: "SSS 1 - 3", 
    category: "Science", 
    periodsPerWeek: 4,
    teacherName: "Unassigned",
    syllabusOutline: "Volumetric titration analysis, qualitative cation/anion tests, chemical kinetics, organic chemistry mechanisms, and equilibrium.",
    approvedByOffice: "Senior Secondary Academic Directorate",
    status: "active"
  },
  { 
    id: "sub_s5", 
    code: "BIO-SSS", 
    name: "Biology & Microscopic Studies", 
    tier: "senior_sec", 
    level: "SSS 1 - 3", 
    category: "Science", 
    periodsPerWeek: 4,
    teacherName: "Unassigned",
    syllabusOutline: "Genetics, Mendelian inheritance, ecological field surveys, cellular respiration, plant physiology, and specimen dissection.",
    approvedByOffice: "Senior Secondary Academic Directorate",
    status: "active"
  },
  { 
    id: "sub_s6", 
    code: "ECN-SSS", 
    name: "Economics & Public Finance", 
    tier: "senior_sec", 
    level: "SSS 1 - 3", 
    category: "Commercial", 
    periodsPerWeek: 4,
    teacherName: "Unassigned",
    syllabusOutline: "National income accounting, elasticity of demand/supply, Nigerian fiscal policy, balance of payments, and monetary theory.",
    approvedByOffice: "Senior Secondary Academic Directorate",
    status: "active"
  },

  // Tertiary Wing (NUC/NBTE Standard)
  { 
    id: "sub_u1", 
    code: "CSC 301", 
    name: "Data Structures & Algorithms", 
    tier: "tertiary", 
    level: "300 Level", 
    creditUnits: 3,
    category: "Core", 
    periodsPerWeek: 3,
    teacherName: "Unassigned",
    syllabusOutline: "Asymptotic notation, balanced trees (AVL, Red-Black), dynamic programming, graph algorithms (Dijkstra, Kruskal), and NP-completeness.",
    approvedByOffice: "Departmental Board of Studies (Faculty of Computing)",
    status: "active"
  },
  { 
    id: "sub_u2", 
    code: "CSC 305", 
    name: "Database Design & Management Systems", 
    tier: "tertiary", 
    level: "300 Level", 
    creditUnits: 3,
    category: "Core", 
    periodsPerWeek: 3,
    teacherName: "Unassigned",
    syllabusOutline: "Relational algebra, SQL DDL/DML, BCNF normalization, ACID transactions, indexing, and distributed databases.",
    approvedByOffice: "Departmental Board of Studies (Faculty of Computing)",
    status: "active"
  },

  // Sub-Programs Wing
  { 
    id: "sub_rem1", 
    code: "MTH-IJMB", 
    name: "Advanced Pure Mathematics (IJMB)", 
    tier: "sub_program", 
    level: "IJMB Cohort", 
    category: "Core", 
    periodsPerWeek: 4,
    teacherName: "Unassigned",
    syllabusOutline: "ABU IJMB Syllabus: Differential calculus, vectors, complex numbers, series and differential equations.",
    approvedByOffice: "Directorate of Remedial Studies",
    status: "active"
  }
];

export const mockGrades: GradeRecord[] = [];

export const mockInvoices: InvoiceRecord[] = [];

export const mockCBTExams: CBTExam[] = [];

export const mockCBTSubmissions: CBTSubmission[] = [];

export const mockAnnouncements: Announcement[] = [
  {
    id: "ann_01",
    title: "Welcome to GetoCore Unified School Management System",
    content: "The institutional management platform is initialized and ready for active school onboarding. School administrators may configure class arms, allocate curriculum subjects, and enroll students.",
    targetTier: "all",
    priority: "important",
    author: "GetoCore Central Administration",
    date: "2026-09-18"
  }
];

export const mockStaff: StaffMember[] = [
  {
    id: "stf_01",
    staffId: "STF/DIR/001",
    name: "Dr. Aliyu Mohammed",
    role: "Director General & Institutional Lead",
    tier: "all",
    qualification: "Ph.D Educational Management, M.Ed, B.Ed (Hons), TRCN Certified",
    departmentOrClass: "Central School Administration",
    assignedSubjects: [],
    assignedClassArm: "All Academic Wings",
    trcnNumber: "TRCN/HQ/2015/0001",
    trcnStatus: "certified",
    employmentDate: "2024-01-01",
    salaryGrade: "GL 17",
    periodsPerWeek: 0,
    officeJurisdiction: "Office of the Director General",
    email: "admin@apexroyal.edu.ng",
    phone: "+234 803 555 0199",
    status: "active"
  }
];

export const mockAlumniProfiles: AlumniProfile[] = [];

export const mockCommunityPosts: CommunityPost[] = [];

export const mockClasses: ClassArm[] = [
  // Primary Wing (Nursery & Basic 1-6)
  {
    id: "cls_nur1",
    name: "Nursery 1",
    tier: "primary",
    gradeLevel: "Nursery 1",
    armOrStream: "Main Arm",
    capacity: 25,
    enrolledCount: 0,
    formTeacherName: "Unassigned",
    classroomBlock: "Early Childhood Block, Room N01",
    classPrefect: "Unassigned",
    status: "active"
  },
  {
    id: "cls_nur2",
    name: "Nursery 2",
    tier: "primary",
    gradeLevel: "Nursery 2",
    armOrStream: "Main Arm",
    capacity: 25,
    enrolledCount: 0,
    formTeacherName: "Unassigned",
    classroomBlock: "Early Childhood Block, Room N02",
    classPrefect: "Unassigned",
    status: "active"
  },
  {
    id: "cls_pri1",
    name: "Basic 1",
    tier: "primary",
    gradeLevel: "Basic 1",
    armOrStream: "Gold Arm",
    capacity: 35,
    enrolledCount: 0,
    formTeacherName: "Unassigned",
    classroomBlock: "Primary Block A, Room 101",
    classPrefect: "Unassigned",
    status: "active"
  },
  {
    id: "cls_pri2",
    name: "Basic 2",
    tier: "primary",
    gradeLevel: "Basic 2",
    armOrStream: "Gold Arm",
    capacity: 35,
    enrolledCount: 0,
    formTeacherName: "Unassigned",
    classroomBlock: "Primary Block A, Room 102",
    classPrefect: "Unassigned",
    status: "active"
  },
  {
    id: "cls_pri3",
    name: "Basic 3",
    tier: "primary",
    gradeLevel: "Basic 3",
    armOrStream: "Gold Arm",
    capacity: 35,
    enrolledCount: 0,
    formTeacherName: "Unassigned",
    classroomBlock: "Primary Block A, Room 103",
    classPrefect: "Unassigned",
    status: "active"
  },
  {
    id: "cls_pri4",
    name: "Basic 4",
    tier: "primary",
    gradeLevel: "Basic 4",
    armOrStream: "Gold Arm",
    capacity: 35,
    enrolledCount: 0,
    formTeacherName: "Unassigned",
    classroomBlock: "Primary Wing, Floor 1, Room 104",
    classPrefect: "Unassigned",
    status: "active"
  },
  {
    id: "cls_pri5",
    name: "Basic 5",
    tier: "primary",
    gradeLevel: "Basic 5",
    armOrStream: "Gold Arm",
    capacity: 35,
    enrolledCount: 0,
    formTeacherName: "Unassigned",
    classroomBlock: "Primary Wing, Floor 2, Room 201",
    classPrefect: "Unassigned",
    status: "active"
  },
  {
    id: "cls_pri6",
    name: "Basic 6",
    tier: "primary",
    gradeLevel: "Basic 6",
    armOrStream: "Gold Arm",
    capacity: 35,
    enrolledCount: 0,
    formTeacherName: "Unassigned",
    classroomBlock: "Primary Wing, Floor 2, Room 202",
    classPrefect: "Unassigned",
    status: "active"
  },

  // Junior Secondary Wing (JSS 1-3 & BECE)
  {
    id: "cls_jss1",
    name: "JSS 1",
    tier: "junior_sec",
    gradeLevel: "JSS 1",
    armOrStream: "Arm A",
    capacity: 40,
    enrolledCount: 0,
    formTeacherName: "Unassigned",
    classroomBlock: "Junior Secondary Block, Room J101",
    classPrefect: "Unassigned",
    status: "active"
  },
  {
    id: "cls_jss2",
    name: "JSS 2",
    tier: "junior_sec",
    gradeLevel: "JSS 2",
    armOrStream: "Arm A",
    capacity: 40,
    enrolledCount: 0,
    formTeacherName: "Unassigned",
    classroomBlock: "Junior Secondary Block, Room J201",
    classPrefect: "Unassigned",
    status: "active"
  },
  {
    id: "cls_jss3",
    name: "JSS 3 (BECE Class)",
    tier: "junior_sec",
    gradeLevel: "JSS 3",
    armOrStream: "Arm A",
    capacity: 40,
    enrolledCount: 0,
    formTeacherName: "Unassigned",
    classroomBlock: "Junior Secondary Block, Room J301",
    classPrefect: "Unassigned",
    status: "active"
  },

  // Senior Secondary Wing (SSS 1-3 & WAEC/NECO)
  {
    id: "cls_sss1",
    name: "SSS 1",
    tier: "senior_sec",
    gradeLevel: "SSS 1",
    armOrStream: "General Stream",
    capacity: 40,
    enrolledCount: 0,
    formTeacherName: "Unassigned",
    classroomBlock: "Senior Secondary Complex, Room S1",
    classPrefect: "Unassigned",
    status: "active"
  },
  {
    id: "cls_sss2_sci",
    name: "SSS 2 Science",
    tier: "senior_sec",
    gradeLevel: "SSS 2",
    armOrStream: "Science Stream",
    capacity: 40,
    enrolledCount: 0,
    formTeacherName: "Unassigned",
    classroomBlock: "Senior Science Complex, Lab 1",
    classPrefect: "Unassigned",
    status: "active"
  },
  {
    id: "cls_sss3_sci",
    name: "SSS 3 Science (WAEC/NECO Set)",
    tier: "senior_sec",
    gradeLevel: "SSS 3",
    armOrStream: "Pure Science Stream",
    capacity: 40,
    enrolledCount: 0,
    formTeacherName: "Unassigned",
    classroomBlock: "Senior Science Complex, Hall S3",
    classPrefect: "Unassigned",
    status: "active"
  },
  {
    id: "cls_sss3_comm",
    name: "SSS 3 Commercial",
    tier: "senior_sec",
    gradeLevel: "SSS 3",
    armOrStream: "Commercial Stream",
    capacity: 35,
    enrolledCount: 0,
    formTeacherName: "Unassigned",
    classroomBlock: "Senior Commerce Wing, Room C3",
    classPrefect: "Unassigned",
    status: "active"
  },
  {
    id: "cls_sss3_arts",
    name: "SSS 3 Arts & Humanities",
    tier: "senior_sec",
    gradeLevel: "SSS 3",
    armOrStream: "Arts & Humanities Stream",
    capacity: 35,
    enrolledCount: 0,
    formTeacherName: "Unassigned",
    classroomBlock: "Senior Arts Wing, Room A3",
    classPrefect: "Unassigned",
    status: "active"
  },

  // Tertiary Wing (When Unlocked)
  {
    id: "cls_uni_csc3",
    name: "Computer Science (300L)",
    tier: "tertiary",
    gradeLevel: "300 Level",
    armOrStream: "Faculty of Computing",
    capacity: 60,
    enrolledCount: 0,
    formTeacherName: "Unassigned",
    classroomBlock: "Computing Complex, Lecture Theatre 1",
    classPrefect: "Unassigned",
    status: "active"
  },

  // Sub-Programs Wing (When Unlocked)
  {
    id: "cls_sub_ijmb",
    name: "IJMB 'A' Level Direct Entry",
    tier: "sub_program",
    gradeLevel: "Cohort 2026",
    armOrStream: "Remedial Sciences",
    capacity: 45,
    enrolledCount: 0,
    formTeacherName: "Unassigned",
    classroomBlock: "Remedial Center, Room R01",
    classPrefect: "Unassigned",
    status: "active"
  }
];

export const initialLicenseConfig: GetoCoreLicenseConfig = {
  schoolTierMode: 'basic_secondary',
  unlockedTiers: ['primary', 'junior_sec', 'senior_sec'],
  unlockedServices: {
    cbt: true,
    alumniCommunity: true,
    digitalIdStudio: true,
    parentPortal: true,
    bursaryGateways: true
  },
  adminMasterKey: "GETO-2026-HQ",
  licenseStatus: 'active',
  tenantTierDescription: "Basic & Secondary Enterprise License (Nursery, Primary, JSS 1-3, SSS 1-3)",
  lastUpdated: "2026-09-18"
};

export const mockTenantSchools: TenantSchool[] = [
  {
    id: "tenant_apex",
    slug: "apexroyal",
    name: "Apex Royal Academy & Polytechnic College",
    motto: "Knowledge, Character, and Innovation for the Nation",
    country: "Nigeria",
    countryCode: "NG",
    flagEmoji: "🇳🇬",
    city: "Abuja",
    stateOrRegion: "Federal Capital Territory",
    currencySymbol: "₦",
    currencyCode: "NGN",
    primaryEmail: "admin@apexroyal.edu.ng",
    phone: "+234 803 555 0199",
    subdomain: "apexroyal.getocore.edu",
    logoUrl: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=100&auto=format&fit=crop&q=80",
    subscriptionPlan: "enterprise_global",
    billingCycle: "annual",
    annualPriceFormatted: "₦3,500,000 / yr",
    subscriptionStatus: "active",
    subscriptionExpiry: "2027-10-31",
    schoolTierMode: "basic_secondary",
    unlockedTiers: ["primary", "junior_sec", "senior_sec"],
    unlockedServices: {
      cbt: true,
      alumniCommunity: true,
      digitalIdStudio: true,
      parentPortal: true,
      bursaryGateways: true
    },
    stats: {
      totalStudents: 0,
      totalStaff: 1,
      totalClasses: 0,
      activeSession: "2026/2027",
      totalRevenueCollected: 0
    },
    createdAt: "2026-09-18"
  }
];

export const mockGlobalSaaSMetrics: GlobalSaaSMetrics = {
  totalSchools: 1,
  activeSchools: 1,
  totalStudents: 0,
  totalStaff: 1,
  annualRecurringRevenueUSD: 2300,
  annualRecurringRevenueNGN: 3500000,
  serverClusters: [
    { region: "Africa West", location: "Lagos (LOS-1)", pingMs: 12, status: "optimal" },
    { region: "Africa Central", location: "Abuja (ABV-2)", pingMs: 14, status: "optimal" },
    { region: "Europe West", location: "London (LHR-1)", pingMs: 78, status: "optimal" },
    { region: "US East", location: "Virginia (IAD-1)", pingMs: 95, status: "optimal" }
  ]
};

export const mockGlobalBroadcasts: GlobalBroadcastNotice[] = [
  {
    id: "gb_01",
    title: "GetoCore School Management System Initialized",
    content: "Platform is ready for school onboarding. GetoCore Central Admin can onboard new schools, configure tier locks, and issue institutional Super Admin credentials.",
    priority: "info",
    targetRegion: "all_regions",
    sender: "GetoCore Digital Innovation - Central Licensing Authority",
    createdAt: "2026-09-18"
  }
];

export const mockBursaryPaymentProofs: BursaryPaymentProofTicket[] = [];

export const mockParentBursaryMessages: ParentBursaryMessage[] = [];
