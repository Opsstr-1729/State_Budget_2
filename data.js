// =========================================================
//  Kerala HPC Budget — Data Configuration & Static Fallback
// =========================================================

const CSV_URLS = {
  '21-22': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQetDMjutHx6ElSa_6GeUj4amcUTWcTFJhsPPyQPHPCZvT-dr4EDxpHbODEtPjjtfwPQxevZH5kpCz7/pub?gid=0&single=true&output=csv',
  '22-23': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQetDMjutHx6ElSa_6GeUj4amcUTWcTFJhsPPyQPHPCZvT-dr4EDxpHbODEtPjjtfwPQxevZH5kpCz7/pub?gid=1&single=true&output=csv',
  '23-24': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQetDMjutHx6ElSa_6GeUj4amcUTWcTFJhsPPyQPHPCZvT-dr4EDxpHbODEtPjjtfwPQxevZH5kpCz7/pub?gid=2&single=true&output=csv',
  '24-25': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQetDMjutHx6ElSa_6GeUj4amcUTWcTFJhsPPyQPHPCZvT-dr4EDxpHbODEtPjjtfwPQxevZH5kpCz7/pub?gid=3&single=true&output=csv',
  '25-26': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQetDMjutHx6ElSa_6GeUj4amcUTWcTFJhsPPyQPHPCZvT-dr4EDxpHbODEtPjjtfwPQxevZH5kpCz7/pub?gid=4&single=true&output=csv',
};

const YEAR_LABELS = {
  '21-22': '2021–22',
  '22-23': '2022–23',
  '23-24': '2023–24',
  '24-25': '2024–25',
  '25-26': '2025–26',
};

// Static data extracted from the Excel file (used as fallback if CSV fetch fails)
const STATIC_DATA = {
  '21-22': {
    total: 280.01,
    skill: 108.81,
    nonSkill: 171.29,
    rows: [
      { slNo:'1', adminDept:'Higher Education', agency:'ASAP', functionality:'Core', activity:'The main objective of the project is to create employment opportunities to the unemployed youth and to enhance the skill sets of the populace with Industry Linkage', total:25, skill:25, nonSkill:0, explanation:'-', hoa:'2202-03-105-97', reference:'Demand for Grants Vol 1-420' },
      { slNo:'', adminDept:'Higher Education', agency:'DCE', functionality:'Supportive', activity:'Student Support Welfare and Outreach STEEP (Skill Training and Employability Enhancement Programme)', total:5, skill:0, nonSkill:5, explanation:'-', hoa:'2202-03-103-51', reference:'Demand for Grants Vol 1' },
      { slNo:'2', adminDept:'NORKA ROOTS', agency:'NORKA ROOTS', functionality:'Core', activity:'Skill Upgradation & Re-Integration Training for NRKs (Skill Certification)', total:2.5, skill:2.5, nonSkill:0, explanation:'-', hoa:'2230-01-103-40', reference:'Demand for Grants Vol 2-296' },
      { slNo:'', adminDept:'NORKA ROOTS', agency:'NORKA ROOTS', functionality:'Core', activity:'New Initiative for Market Research, Skilling and Pre Recruitment, Recruitment and Post Recruitment Services', total:2, skill:2, nonSkill:0, explanation:'-', hoa:'2230-01-103-82', reference:'Demand for Grants Vol 2-293' },
      { slNo:'3', adminDept:'Social Security and Welfare', agency:'Social Security and Welfare', functionality:'Supportive', activity:'Career in Automobile Industry through Public Private Participation', total:5, skill:0, nonSkill:5, explanation:'-', hoa:'2225-03-102-99', reference:'Demand for Grants Vol 2-364' },
      { slNo:'5', adminDept:'Labour & Labour Welfare', agency:'Skill Development Programme of ITD (KASE)', functionality:'Core', activity:'Rs 20 Crore Skill development programme of ITD. Equity Contribution of KASE Rs 14 Crore', total:34, skill:2, nonSkill:32, explanation:'Capital Head and Equity Contribution', hoa:'2230-03-001-96,4250-00-190-95', reference:'Demand for Grants Vol 2-310' },
      { slNo:'', adminDept:'Labour & Labour Welfare', agency:'KASE', functionality:'Core', activity:'State Skill Development Mission (KASE)', total:19.8, skill:0, nonSkill:19.8, explanation:'', hoa:'2230-03-101-65', reference:'Demand for Grants Vol 2-318' },
      { slNo:'', adminDept:'Labour & Labour Welfare', agency:'Labour Department', functionality:'Core', activity:'KAIVALYA Rehabilitation and welfare of differently abled registrants of Employment Exchanges', total:3, skill:3, nonSkill:0, explanation:'Subsidy and Rehabilitation', hoa:'2230-02-101-93', reference:'Demand for Grants Vol 2-305' },
      { slNo:'', adminDept:'Labour & Labour Welfare', agency:'National Employment Service', functionality:'Core', activity:'Comprehensive Career Development Programme for Scheduled Tribes & Scheduled Castes (SAMANWAYA)', total:0.25, skill:0.25, nonSkill:0, explanation:'', hoa:'2230-02-101-85', reference:'Demand for Grants Vol 2-299' },
      { slNo:'6', adminDept:'ST Development', agency:'STDD', functionality:'Core', activity:'Assistance for self employment and skill development training to ST youths', total:10, skill:10, nonSkill:0, explanation:'-', hoa:'2225-02-277-42', reference:'Demand for Grants Vol 2-354' },
      { slNo:'7', adminDept:'Other Backward Classes Development', agency:'Other Backward Classes Development', functionality:'Supportive', activity:'Skill Development / Training and tool kit grant for traditional craftsmen among OBCs', total:2.5, skill:2.5, nonSkill:0, explanation:'-', hoa:'2225-03-277-88', reference:'Demand for Grants Vol 2-366' },
      { slNo:'10', adminDept:'SC Department', agency:'SCDD', functionality:'Core', activity:'Assistance for training and Employment', total:50, skill:50, nonSkill:0, explanation:'-', hoa:'2225-01-102-96', reference:'Demand for Grants Vol 2-331' },
      { slNo:'', adminDept:'SC Department', agency:'SCDD', functionality:'', activity:'Development Programmes for Vulnerable Communities among SCs - Skill Development', total:50, skill:0, nonSkill:50, explanation:'-', hoa:'2225-01-102-99', reference:'Demand for Grants Vol 2-331' },
      { slNo:'12', adminDept:'Minorities Department', agency:'Minorities Department', functionality:'Supportive', activity:'Skill Training Reimbursement of Fees to the Minority BPL Students Studying in Two Years Courses in ITC', total:2.96, skill:2.96, nonSkill:0, explanation:'-', hoa:'2225-04-277-94', reference:'Demand for Grants Vol 2-371' },
      { slNo:'', adminDept:'Minorities Department', agency:'Minorities Department', functionality:'Supportive', activity:'Employability enhancement programme/training', total:6, skill:0, nonSkill:6, explanation:'-', hoa:'2225-03-277-90', reference:'Demand for Grants Vol 2-366' },
      { slNo:'13', adminDept:'Industries', agency:'Handloom and Textile', functionality:'Supportive', activity:'Training and Skill Development Programme', total:1.5, skill:0, nonSkill:1.5, explanation:'', hoa:'2851-00-103-74', reference:'Demand for Grants Vol 3-205' },
      { slNo:'15', adminDept:'Women and Child', agency:'Women and Child', functionality:'Supportive', activity:'Skill development training and empowerment for women', total:0.25, skill:0.1, nonSkill:0.24, explanation:'-', hoa:'2235-02-103-51', reference:'Demand for Grants Vol 3-511' },
      { slNo:'18', adminDept:'Electronics and IT', agency:'KSUM', functionality:'Supportive', activity:'Youth Entrepreneurship Development Programme - Knowledge/Skill enhancement', total:58.75, skill:7, nonSkill:51.75, explanation:'', hoa:'3451-00-101-39', reference:'Demand for Grants Vol 1' },
    ]
  },
  '22-23': {
    total: 264.98,
    skill: 134.455,
    nonSkill: 130.525,
    rows: [
      { slNo:'1', adminDept:'Higher Education', agency:'ASAP', functionality:'Core', activity:'The major activities proposed in 2022-23 are training, balance construction of Community Skill Parks (CSPs), CSP maintenance, AMC, IT equipment and support services.', total:35, skill:35, nonSkill:0, explanation:'-', hoa:'2202-03-105-97', reference:'Demand for Grants Vol 1-414' },
      { slNo:'', adminDept:'Higher Education', agency:'Technical Education', functionality:'Supportive', activity:'Teaching-Learning Process Enhancement and Skill Gap Reduction - Industry Institute Interaction Cell (IIIC), Additional Skill Development Programme (ASDP)', total:13.5, skill:6.075, nonSkill:7.425, explanation:'Salary and Other Allowance', hoa:'2203-00-003-89', reference:'Demand for Grants Vol 1-433' },
      { slNo:'2', adminDept:'NORKA ROOTS', agency:'NORKA ROOTS', functionality:'Core', activity:'Skill Upgradation & Re-Integration Training for NRKs (Skill Certification)', total:2.5, skill:2.5, nonSkill:0, explanation:'-', hoa:'2230-01-103-40', reference:'Demand for Grants Vol 2-295' },
      { slNo:'', adminDept:'NORKA ROOTS', agency:'NORKA ROOTS', functionality:'Core', activity:'New Initiative for Market Research, Skilling and Pre Recruitment, Recruitment and Post Recruitment Services', total:2, skill:2, nonSkill:0, explanation:'-', hoa:'2230-01-103-82', reference:'Demand for Grants Vol 2-291' },
      { slNo:'3', adminDept:'Social Security and Welfare', agency:'Social Security and Welfare', functionality:'Supportive', activity:'Career in Automobile Industry through Public Private Participation', total:0.6, skill:0.6, nonSkill:0, explanation:'-', hoa:'2225-03-102-99', reference:'Demand for Grants Vol 2-365' },
      { slNo:'5', adminDept:'Labour & Labour Welfare', agency:'Skill Development Programme of ITD (KASE)', functionality:'Core', activity:'Skill Development Programme for ITD (KASE)', total:37, skill:2, nonSkill:35, explanation:'Capital Head and Equity Contribution', hoa:'2230-03-001-96,4250-00-190-95', reference:'Demand for Grants Vol 2-310' },
      { slNo:'', adminDept:'Labour & Labour Welfare', agency:'Labour Department', functionality:'Core', activity:'KAIVALYA Rehabilitation and welfare of differently abled registrants of Employment Exchanges', total:6.6, skill:3.3, nonSkill:3.3, explanation:'Subsidy and Rehabilitation', hoa:'2230-02-101-93', reference:'Demand for Grants Vol 2-305' },
      { slNo:'', adminDept:'Labour & Labour Welfare', agency:'National Employment Service', functionality:'Core', activity:'Comprehensive Career Development Programme for Scheduled Tribes & Scheduled Castes (SAMANWAYA)', total:0.25, skill:0.25, nonSkill:0, explanation:'', hoa:'2230-02-101-85', reference:'Demand for Grants Vol 2-299' },
      { slNo:'6', adminDept:'ST Development', agency:'STDD', functionality:'Core', activity:'Assistance for self employment and skill development training to ST youths', total:10, skill:10, nonSkill:0, explanation:'-', hoa:'2225-02-277-42', reference:'Demand for Grants Vol 2-354' },
      { slNo:'7', adminDept:'Other Backward Classes Development', agency:'Other Backward Classes Development', functionality:'Supportive', activity:'Skill Development / Training and tool kit grant for traditional craftsmen among OBCs', total:3.2, skill:3.2, nonSkill:0, explanation:'-', hoa:'2225-03-277-88', reference:'Demand for Grants Vol 2-366' },
      { slNo:'8', adminDept:'Tourism', agency:'KITTS', functionality:'Supportive', activity:'State-wide HR development/tourism skill development agenda', total:3.3, skill:0, nonSkill:3.3, explanation:'Infrastructure and administrative minor component for skilling', hoa:'3452-80-003-97-01', reference:'Demand for Grants Vol 3-433' },
      { slNo:'9', adminDept:'SC Department', agency:'SCDD', functionality:'Core', activity:'Assistance for Education to SC Students / Skill development training programmes', total:49, skill:49, nonSkill:0, explanation:'-', hoa:'2225-01-102-96', reference:'Demand for Grants Vol 2-331' },
      { slNo:'', adminDept:'SC Department', agency:'SCDD', functionality:'', activity:'Development Programmes for Vulnerable Communities among SCs - Skill Development', total:50, skill:0, nonSkill:50, explanation:'-', hoa:'2225-01-102-99', reference:'Demand for Grants Vol 2-331' },
      { slNo:'10', adminDept:'Minorities Department', agency:'Minorities Department', functionality:'Supportive', activity:'Skill Training Reimbursement of Fees to the Minority BPL Students Studying in Two Years Courses in ITC', total:4.02, skill:4.02, nonSkill:0, explanation:'-', hoa:'2225-04-277-94', reference:'Demand for Grants Vol 2-371' },
      { slNo:'', adminDept:'Minorities Department', agency:'Minorities Department', functionality:'Supportive', activity:'Employability enhancement programme/training', total:6, skill:0, nonSkill:6, explanation:'-', hoa:'2225-03-277-90', reference:'Demand for Grants Vol 2-366' },
      { slNo:'', adminDept:'Minorities Department', agency:'KSWCFC', functionality:'Supportive', activity:'Skill and entrepreneur development programme', total:3.5, skill:3.5, nonSkill:0, explanation:'Merit Scholarships, Subsidy, Marriage Assistance', hoa:'2235-02-190-97', reference:'Demand for Grants Vol 3-522' },
      { slNo:'11', adminDept:'Industries', agency:'Handloom and Textile', functionality:'Supportive', activity:'Training and Skill Development Programme', total:2.5, skill:0, nonSkill:2.5, explanation:'', hoa:'2851-00-103-74', reference:'Demand for Grants Vol 3-205' },
      { slNo:'12', adminDept:'Fisheries', agency:'Fisheries', functionality:'Supportive', activity:'Coastal Area Development - Educational coaching Programme and Skill Upgradation', total:36, skill:13, nonSkill:23, explanation:'Basic infrastructural facilities and human development of fisherfolk', hoa:'2405-00-103-80-00', reference:'Demand for Grants Vol 3-83' },
      { slNo:'13', adminDept:'Women and Child', agency:'Women and Child', functionality:'Supportive', activity:'Skill development training and empowerment for women', total:0.01, skill:0.01, nonSkill:0, explanation:'-', hoa:'2235-02-103-51', reference:'Demand for Grants Vol 3-511' },
    ]
  },
  '23-24': {
    total: 315.17,
    skill: 141.77,
    nonSkill: 173.4,
    rows: [
      { slNo:'1', adminDept:'Higher Education', agency:'ASAP', functionality:'Core', activity:'Training, human resource development, balance construction of Community Skill Parks and AMC, IT support services and setting up industry relevant Centre of Excellence (CoE).', total:35, skill:35, nonSkill:0, explanation:'-', hoa:'2202-03-105-97', reference:'Demand for Grants Vol 1' },
      { slNo:'', adminDept:'Higher Education', agency:'DCE', functionality:'Supportive', activity:'Student Support Welfare and Outreach STEEP, Lifeskill enhancement, Earn while you learn', total:15, skill:0, nonSkill:15, explanation:'-', hoa:'2202-03-103-51', reference:'Demand for Grants Vol 1' },
      { slNo:'2', adminDept:'NORKA ROOTS', agency:'NORKA ROOTS', functionality:'Core', activity:'Skill Upgradation & Re-Integration Training for NRKs (Skill Certification)', total:2.5, skill:2.5, nonSkill:0, explanation:'-', hoa:'2230-01-103-40', reference:'Demand for Grants Vol 2' },
      { slNo:'', adminDept:'NORKA ROOTS', agency:'NORKA ROOTS', functionality:'Core', activity:'New Initiative for Market Research, Skilling and Pre Recruitment, Recruitment and Post Recruitment Services', total:2, skill:2, nonSkill:0, explanation:'-', hoa:'2230-01-103-82', reference:'Demand for Grants Vol 2' },
      { slNo:'3', adminDept:'Labour and Labour Welfare', agency:'Skill Development Programme of ITD (KASE)', functionality:'Core', activity:'Skill Development Programme for ITD (KASE)', total:37, skill:2, nonSkill:35, explanation:'Capital Head and Equity Contribution', hoa:'2230-03-001-96,4250-00-190-95', reference:'Demand for Grants Vol 2' },
      { slNo:'', adminDept:'Labour and Labour Welfare', agency:'ODEPC', functionality:'Supportive', activity:'Conducting Skill Enhancement Training', total:3.5, skill:0, nonSkill:3.5, explanation:'Skilling Component is there but not specified with split up amount', hoa:'2230-01-103-10', reference:'Demand for Grants Vol 2' },
      { slNo:'', adminDept:'Labour and Labour Welfare', agency:'Labour Department', functionality:'Core', activity:'KAIVALYA - Vocational and career guidance and coaching classes for competitive examinations', total:6.6, skill:3.3, nonSkill:3.3, explanation:'Rehabilitation and Welfare of Differently Abled Registrants', hoa:'2230-02-101-93', reference:'Demand for Grants Vol 2' },
      { slNo:'', adminDept:'Labour and Labour Welfare', agency:'National Employment Service', functionality:'Core', activity:'Comprehensive Career Development Programme for ST & SC (SAMANWAYA)', total:0.25, skill:0.25, nonSkill:0, explanation:'', hoa:'2230-02-101-85', reference:'Demand for Grants Vol 2' },
      { slNo:'4', adminDept:'Other Backward Class', agency:'Other Backward Classes Development', functionality:'Supportive', activity:'Skill Development / Training and tool kit grant for traditional craftsmen among OBCs', total:5.04, skill:3.24, nonSkill:1.8, explanation:'-', hoa:'2225-03-277-88', reference:'Demand for Grants Vol 2' },
      { slNo:'5', adminDept:'Housing', agency:'Kerala State Nirmithi Kendra (KESNIK)', functionality:'Supportive', activity:'Capacity development and Skill Improvement Programme including Vocational training', total:10, skill:1.5, nonSkill:8.5, explanation:'Office upgradation, renovation, new testing labs, 3D Printing Production Units', hoa:'4216-80-190-95', reference:'Demand for Grants Vol 2' },
      { slNo:'6', adminDept:'Social Security and Welfare', agency:'Social Security and Welfare', functionality:'Supportive', activity:'Comprehensive Projects Skill Development to PwDs to ensure sustainable livelihood', total:13, skill:10, nonSkill:3, explanation:'Model programme for support and rehabilitation of adult mentally challenged persons', hoa:'2235-02-101-73', reference:'Demand for Grants Vol 3' },
      { slNo:'', adminDept:'Social Security and Welfare', agency:'Women and Child', functionality:'Supportive', activity:'Skill development training and empowerment for women', total:0.01, skill:0.01, nonSkill:0, explanation:'-', hoa:'2235-02-103-51', reference:'Demand for Grants Vol 3' },
      { slNo:'7', adminDept:'Scheduled Castes Development', agency:'SCDD', functionality:'Core', activity:'Skilling and employment integrated with Kerala Knowledge Economy Mission', total:50, skill:50, nonSkill:0, explanation:'-', hoa:'2225-01-102-96', reference:'Demand for Grants Vol 2' },
      { slNo:'', adminDept:'Scheduled Castes Development', agency:'SCDD', functionality:'', activity:'Development Programmes for Vulnerable Communities among SCs', total:50, skill:0, nonSkill:50, explanation:'Skilling component is one of the heads', hoa:'2225-01-102-99', reference:'Demand for Grants Vol 2' },
      { slNo:'8', adminDept:'ST Development', agency:'STDD', functionality:'Core', activity:'Assistance for self employment and skill development training to ST youths', total:10, skill:10, nonSkill:0, explanation:'-', hoa:'2225-02-277-42', reference:'Demand for Grants Vol 2' },
      { slNo:'9', adminDept:'Welfare of Minorities', agency:'Minorities Department', functionality:'Supportive', activity:'Skill Training Reimbursement of Fees for Minority BPL Students in ITC', total:6.02, skill:4.82, nonSkill:1.2, explanation:'-', hoa:'2225-04-277-94', reference:'Demand for Grants Vol 2' },
      { slNo:'', adminDept:'Welfare of Minorities', agency:'KSWCFC', functionality:'Supportive', activity:'Skill and entrepreneur development programme', total:38.05, skill:3.5, nonSkill:34.55, explanation:'Merit Scholarships, Subsidy, Marriage Assistance', hoa:'2235-02-190-97', reference:'Demand for Grants Vol 3' },
      { slNo:'10', adminDept:'KDISC', agency:'KKEM', functionality:'Core', activity:'Skill development, entrepreneurship and research and development in public-private partnership', total:25, skill:11.75, nonSkill:13.25, explanation:'Knowledge Economy Fund', hoa:'3451-00-092-87', reference:'Demand for Grants Vol 1' },
      { slNo:'11', adminDept:'Industries', agency:'Handloom and Textile', functionality:'Supportive', activity:'Training and Skill Development Programme', total:2.9, skill:0.4, nonSkill:2.5, explanation:'', hoa:'2851-00-103-74', reference:'Demand for Grants Vol 3' },
      { slNo:'12', adminDept:'Tourism', agency:'KITTS', functionality:'Supportive', activity:'State-wide HR development/tourism skill development agenda', total:3.3, skill:1.5, nonSkill:1.8, explanation:'Infrastructure and administrative minor component', hoa:'3452-80-003-97-01', reference:'Demand for Grants Vol 3' },
    ]
  },
  '24-25': {
    total: 376.74,
    skill: 163.88,
    nonSkill: 212.86,
    rows: [
      { slNo:'1', adminDept:'Higher Education', agency:'ASAP', functionality:'Core', activity:'Training, balance construction of Community Skill Parks (CSPs), CSP maintenance, AMC, IT equipment and support services, setting up CoEs and CSPs', total:35.1, skill:35.1, nonSkill:0, explanation:'-', hoa:'2202-03-105-97', reference:'Demand for Grants Vol 1-414' },
      { slNo:'', adminDept:'Higher Education', agency:'DCE', functionality:'Supportive', activity:'Student Support Welfare and Outreach STEEP, Lifeskill enhancement, Earn while you learn, LEAD', total:15.7, skill:0, nonSkill:15.7, explanation:'-', hoa:'2202-03-103-51', reference:'Demand for Grants Vol 1-412' },
      { slNo:'2', adminDept:'NORKA ROOTS', agency:'NORKA ROOTS', functionality:'Core', activity:'Skill Upgradation & Re-Integration Training for NRKs (Skill Certification)', total:2, skill:2, nonSkill:0, explanation:'-', hoa:'2230-01-103-40', reference:'Demand for Grants Vol 2-289' },
      { slNo:'', adminDept:'NORKA ROOTS', agency:'NORKA ROOTS', functionality:'Core', activity:'New Initiative for Market Research, Skilling and Pre Recruitment, Recruitment and Post Recruitment Services', total:2, skill:2, nonSkill:0, explanation:'-', hoa:'2230-01-103-82', reference:'Demand for Grants Vol 2-286' },
      { slNo:'3', adminDept:'Labour and Labour Welfare', agency:'Skill Development Programme of ITD (KASE)', functionality:'Core', activity:'Skill Development Programme for ITD (KASE)', total:33, skill:2, nonSkill:31, explanation:'Capital Head and Equity Contribution', hoa:'2230-03-001-96', reference:'Demand for Grants Vol 2-310' },
      { slNo:'', adminDept:'Labour and Labour Welfare', agency:'KASE', functionality:'Core', activity:'Naipunya Keram', total:1, skill:1, nonSkill:0, explanation:'', hoa:'2230-03-101-48', reference:'Demand for Grants Vol 2-311' },
      { slNo:'', adminDept:'Labour and Labour Welfare', agency:'ODEPC', functionality:'Supportive', activity:'Conducting Skill Enhancement Training', total:3, skill:0, nonSkill:3, explanation:'Skilling Component not specified', hoa:'2230-01-103-10', reference:'Demand for Grants Vol 2-291' },
      { slNo:'', adminDept:'Labour and Labour Welfare', agency:'Labour Department', functionality:'Core', activity:'KAIVALYA - Rehabilitation and welfare of differently abled registrants of Employment Exchanges', total:6, skill:3, nonSkill:3, explanation:'Rehabilitation and Welfare of Differently Abled Registrants', hoa:'2230-02-101-93', reference:'Demand for Grants Vol 2-298' },
      { slNo:'', adminDept:'Labour and Labour Welfare', agency:'National Employment Service', functionality:'Core', activity:'Comprehensive Career Development Programme for ST & SC (SAMANWAYA)', total:0.25, skill:0.25, nonSkill:0, explanation:'', hoa:'2230-02-101-85', reference:'Demand for Grants Vol 2-299' },
      { slNo:'4', adminDept:'Cooperation', agency:'Cooperation', functionality:'Supportive', activity:'Assistance to Miscellaneous Cooperatives', total:18.4, skill:0, nonSkill:18.4, explanation:'Assistance for training and skill development in collaboration with industries department', hoa:'6425-00-108-11', reference:'Demand for Grants Vol 2-421' },
      { slNo:'5', adminDept:'Other Backward Class', agency:'Other Backward Classes Development', functionality:'Supportive', activity:'Skill Development / Training and tool kit grant for traditional craftsmen among OBCs', total:3.09, skill:3.09, nonSkill:0, explanation:'-', hoa:'2225-03-277-88', reference:'Demand for Grants Vol 2-361' },
      { slNo:'6', adminDept:'Fisheries', agency:'Fisheries', functionality:'Supportive', activity:'Coastal Area Development - Educational coaching Programme and Skill Upgradation', total:40, skill:15, nonSkill:25, explanation:'Basic Infrastructural Facilities and Human Development of Fisherfolk', hoa:'2405-00-103-80-00', reference:'Demand for Grants Vol 3-87' },
      { slNo:'7', adminDept:'Housing', agency:'Kerala State Nirmithi Kendra (KESNIK)', functionality:'Supportive', activity:'Capacity development and Skill Improvement Programme including Vocational training', total:10, skill:1.5, nonSkill:8.5, explanation:'Office upgradation, renovation, new testing labs, 3D Printing Production Units', hoa:'4216-80-190-95', reference:'Demand for Grants Vol 2-216' },
      { slNo:'8', adminDept:'Social Security and Welfare', agency:'Social Security and Welfare', functionality:'Supportive', activity:'Comprehensive Projects Skill Development to PwDs to ensure sustainable livelihood', total:13, skill:10, nonSkill:3, explanation:'Model programme for support and rehabilitation', hoa:'2235-02-101-73', reference:'Demand for Grants Vol 3-498' },
      { slNo:'', adminDept:'Social Security and Welfare', agency:'Women and Child', functionality:'Supportive', activity:'Skill development training and empowerment for women', total:0.01, skill:0.01, nonSkill:0, explanation:'-', hoa:'2235-02-103-51', reference:'Demand for Grants Vol 3-516' },
      { slNo:'9', adminDept:'Scheduled Castes Development', agency:'SCDD', functionality:'Core', activity:'Skilling and employment integrated with Kerala Knowledge Economy Mission (KASE, ASAP)', total:55, skill:55, nonSkill:0, explanation:'-', hoa:'2225-01-102-96', reference:'Demand for Grants Vol 2-331' },
      { slNo:'', adminDept:'Scheduled Castes Development', agency:'SCDD', functionality:'', activity:'Development Programmes for Vulnerable Communities among SCs', total:51, skill:0, nonSkill:51, explanation:'Skilling component not directly split', hoa:'2225-01-102-99', reference:'Demand for Grants Vol 2-325' },
      { slNo:'10', adminDept:'ST Development', agency:'STDD', functionality:'Core', activity:'Assistance for self employment and skill development training to ST youths', total:9, skill:9, nonSkill:0, explanation:'-', hoa:'2225-02-277-42', reference:'Demand for Grants Vol 2-354' },
      { slNo:'', adminDept:'ST Development', agency:'STDD', functionality:'', activity:'WINGS - Skill development training programme for employment in Aviation field', total:2, skill:2, nonSkill:0, explanation:'-', hoa:'2225-02-277-24', reference:'Demand for Grants Vol 2-357' },
      { slNo:'11', adminDept:'Welfare of Minorities', agency:'Minorities Department', functionality:'Supportive', activity:'Skill training reimbursement of fees for various training programmes (Umbrella)', total:7.02, skill:5.82, nonSkill:1.2, explanation:'-', hoa:'2225-04-277-94', reference:'Demand for Grants Vol 2-366' },
      { slNo:'', adminDept:'Welfare of Minorities', agency:'Minorities Department', functionality:'Supportive', activity:'Enhancing employability of OBCs through financial assistance for coaching and self-employment', total:5.5, skill:0, nonSkill:5.5, explanation:'-', hoa:'2225-03-277-90', reference:'Demand for Grants Vol 2' },
      { slNo:'', adminDept:'Welfare of Minorities', agency:'KSWCFC', functionality:'Supportive', activity:'Skill and entrepreneur development programme', total:35, skill:6, nonSkill:29, explanation:'Merit Scholarships, Subsidy, Marriage Assistance', hoa:'2235-02-190-97', reference:'Demand for Grants Vol 3-527' },
      { slNo:'12', adminDept:'KDISC', agency:'KKEM', functionality:'Core', activity:'Skill development, entrepreneurship and research and development in public-private partnership', total:23, skill:10.81, nonSkill:12.19, explanation:'Knowledge Economy Fund', hoa:'3451-00-092-87', reference:'Demand for Grants Vol 1-42' },
      { slNo:'13', adminDept:'Industries', agency:'Handloom and Textile', functionality:'Supportive', activity:'Training and Skill Development Programme', total:3.52, skill:0.3, nonSkill:3.22, explanation:'', hoa:'2851-00-103-74', reference:'Demand for Grants Vol 3-216' },
      { slNo:'14', adminDept:'Tourism', agency:'KITTS', functionality:'Supportive', activity:'State-wide HR development/tourism skill development agenda', total:3.15, skill:0, nonSkill:3.15, explanation:'Infrastructure and administrative minor component', hoa:'3452-80-003-97-01', reference:'Demand for Grants Vol 3-446' },
    ]
  },
  '25-26': {
    total: 397.56,
    skill: 169.9252,
    nonSkill: 227.6348,
    rows: [
      { slNo:'1', adminDept:'Higher Education', agency:'ASAP', functionality:'Core', activity:'Training, construction of Community Skill Parks (CSPs), CSP maintenance, AMC, IT equipment, Centre of Excellence (CoEs), OSAT Academy of Excellence in PPP Model with Kaynes Semicon Pvt. Ltd.', total:35.1, skill:35.1, nonSkill:0, explanation:'-', hoa:'2202-03-105-97', reference:'Demand for Grants Vol 1-420' },
      { slNo:'', adminDept:'Higher Education', agency:'DCE', functionality:'Supportive', activity:'Student Support Welfare and Outreach STEEP, Lifeskill enhancement, Earn while you learn, LEAD', total:15.7, skill:0, nonSkill:15.7, explanation:'-', hoa:'2202-03-103-51', reference:'Demand for Grants Vol 1-419' },
      { slNo:'', adminDept:'Higher Education', agency:'Technical Education', functionality:'Supportive', activity:'Teaching-Learning Process Enhancement and Skill Gap Reduction - IIIC, Additional Skill Development Programme (ASDP)', total:13, skill:5.8452, nonSkill:7.1548, explanation:'Salary and Other Allowance', hoa:'2203-00-003-89', reference:'Demand for Grants Vol 1-439' },
      { slNo:'2', adminDept:'NORKA ROOTS', agency:'NORKA ROOTS', functionality:'Core', activity:'Skill Upgradation & Re-Integration Training for NRKs (Skill Certification)', total:2, skill:2, nonSkill:0, explanation:'-', hoa:'2230-01-103-40', reference:'Demand for Grants Vol 2-296' },
      { slNo:'', adminDept:'NORKA ROOTS', agency:'NORKA ROOTS', functionality:'Core', activity:'New Initiative for Market Research, Skilling and Pre Recruitment, Recruitment and Post Recruitment Services', total:2, skill:2, nonSkill:0, explanation:'-', hoa:'2230-01-103-82', reference:'Demand for Grants Vol 2-293' },
      { slNo:'3', adminDept:'Social Security and Welfare', agency:'Social Security and Welfare', functionality:'Supportive', activity:'Career in Automobile Industry through PPP. Placement assured Skill Training for unemployed OBC Youth', total:4.5, skill:4.5, nonSkill:0, explanation:'-', hoa:'2225-03-102-99', reference:'Demand for Grants Vol 2-364' },
      { slNo:'', adminDept:'Social Security and Welfare', agency:'Social Security and Welfare', functionality:'Supportive', activity:'Comprehensive Projects and Skill Development to PwDs for sustainable livelihood', total:11, skill:10, nonSkill:1, explanation:'-', hoa:'2235-02-101-73', reference:'Demand for Grants Vol 3-493' },
      { slNo:'4', adminDept:'Housing', agency:'Kerala State Nirmithi Kendra (KESNIK)', functionality:'Supportive', activity:'Nirmithi Kendra - Capacity development and Skill Improvement Programme including Vocational training', total:10, skill:1.5, nonSkill:8.5, explanation:'Office upgradation, renovation, new testing labs, 3D Printing Production Units', hoa:'4216-80-190-95', reference:'Demand for Grants Vol 2-223' },
      { slNo:'5', adminDept:'Labour & Labour Welfare', agency:'Skill Development Programme of ITD (KASE)', functionality:'Core', activity:'Skill Development Programme for ITD (KASE)', total:33, skill:2, nonSkill:31, explanation:'Capital Head and Equity Contribution', hoa:'2230-03-001-96,4250-00-190-95', reference:'Demand for Grants Vol 2-310' },
      { slNo:'', adminDept:'Labour & Labour Welfare', agency:'KASE', functionality:'Core', activity:'Naipunya Keram', total:1, skill:1, nonSkill:0, explanation:'', hoa:'2230-03-101-48', reference:'Demand for Grants Vol 2-318' },
      { slNo:'', adminDept:'Labour & Labour Welfare', agency:'Labour Department', functionality:'Core', activity:'KAIVALYA - Rehabilitation and welfare of differently abled registrants of Employment Exchanges', total:6, skill:3, nonSkill:3, explanation:'Subsidy and Rehabilitation', hoa:'2230-02-101-93', reference:'Demand for Grants Vol 2-305' },
      { slNo:'', adminDept:'Labour & Labour Welfare', agency:'ODEPC', functionality:'Supportive', activity:'Conducting Skill Enhancement Training', total:3, skill:0, nonSkill:3, explanation:'Skilling Component not specified', hoa:'2230-01-103-10', reference:'Demand for Grants Vol 2-298' },
      { slNo:'', adminDept:'Labour & Labour Welfare', agency:'National Employment Service', functionality:'Core', activity:'Comprehensive Career Development Programme for ST & SC (SAMANWAYA)', total:0.25, skill:0.25, nonSkill:0, explanation:'', hoa:'2230-02-101-85', reference:'Demand for Grants Vol 2-299' },
      { slNo:'6', adminDept:'ST Development', agency:'STDD', functionality:'Core', activity:'Assistance for self employment and skill development training to ST youths', total:9, skill:9, nonSkill:0, explanation:'-', hoa:'2225-02-277-42', reference:'Demand for Grants Vol 2-354' },
      { slNo:'', adminDept:'ST Development', agency:'STDD', functionality:'', activity:'WINGS - Skill development for employment in Aviation field among educated Scheduled Tribes', total:1, skill:1, nonSkill:0, explanation:'-', hoa:'2225-02-277-24', reference:'Demand for Grants Vol 2-357' },
      { slNo:'7', adminDept:'Other Backward Classes Development', agency:'Other Backward Classes Development', functionality:'Supportive', activity:'Skill Development / Training and tool kit grant for traditional craftsmen among OBCs', total:3.5, skill:3.5, nonSkill:0, explanation:'-', hoa:'2225-03-277-88', reference:'Demand for Grants Vol 2-366' },
      { slNo:'9', adminDept:'Tourism', agency:'KITTS', functionality:'Supportive', activity:'State-wide HR development/tourism skill development agenda for youngsters (50% SC/ST and Girls)', total:3.3, skill:0, nonSkill:3.3, explanation:'Infrastructure and administrative minor component', hoa:'3452-80-003-97-01', reference:'Demand for Grants Vol 3-438' },
      { slNo:'10', adminDept:'SC Department', agency:'SCDD', functionality:'Core', activity:'Skilling and employment integrated with Kerala Knowledge Economy Mission (K-DISC, KASE, ASAP)', total:60, skill:60, nonSkill:0, explanation:'-', hoa:'2225-01-102-96', reference:'Demand for Grants Vol 2-331' },
      { slNo:'', adminDept:'SC Department', agency:'SCDD', functionality:'', activity:'Development Programmes for Vulnerable Communities among SCs - Skill Development', total:51, skill:0, nonSkill:51, explanation:'-', hoa:'2225-01-102-99', reference:'Demand for Grants Vol 2-331' },
      { slNo:'12', adminDept:'Minorities Department', agency:'Minorities Department', functionality:'Supportive', activity:'Skill Training Reimbursement of Fees to the Minority BPL Students in ITC', total:7, skill:5.82, nonSkill:1.18, explanation:'-', hoa:'2225-04-277-94', reference:'Demand for Grants Vol 2-371' },
      { slNo:'', adminDept:'Minorities Department', agency:'Minorities Department', functionality:'Supportive', activity:'Enhancing employability of OBCs through financial assistance for coaching and self-employment', total:7, skill:0, nonSkill:7, explanation:'-', hoa:'2225-03-277-90', reference:'Demand for Grants Vol 2-366' },
      { slNo:'', adminDept:'Minorities Department', agency:'KSWCFC', functionality:'Supportive', activity:'Skill and entrepreneur development programme', total:37, skill:7, nonSkill:30, explanation:'Merit Scholarships, Subsidy, Marriage Assistance', hoa:'2235-02-190-97', reference:'Demand for Grants Vol 3-522' },
      { slNo:'13', adminDept:'Industries', agency:'Handloom and Textile', functionality:'Supportive', activity:'Training and Skill Development Programme', total:3.2, skill:0.4, nonSkill:2.8, explanation:'', hoa:'2851-00-103-74', reference:'Demand for Grants Vol 3-205' },
      { slNo:'14', adminDept:'Fisheries', agency:'Fisheries', functionality:'Supportive', activity:'Coastal Area Development - Educational coaching Programme and Skill Upgradation', total:49, skill:16, nonSkill:33, explanation:'Basic Infrastructural Facilities and Human Development of Fisherfolk', hoa:'2405-00-103-80-00', reference:'Demand for Grants Vol 3-83' },
      { slNo:'15', adminDept:'Women and Child', agency:'Women and Child', functionality:'Supportive', activity:'Skill development training and empowerment for women', total:0.01, skill:0.01, nonSkill:0, explanation:'-', hoa:'2235-02-103-51', reference:'Demand for Grants Vol 3-511' },
      { slNo:'16', adminDept:'KDISC', agency:'KKEM', functionality:'Core', activity:'Skill development, entrepreneurship and research and development in public-private partnership', total:30, skill:0, nonSkill:30, explanation:'Knowledge Economy Fund', hoa:'3451-00-092-87', reference:'Demand for Grants Vol 1-42' },
    ]
  },
};

// Utility: parse number safely
function safeNum(v) {
  if (v === null || v === undefined || v === '' || v === '-') return 0;
  const n = parseFloat(String(v).replace(/[^0-9.\-]/g, ''));
  return isNaN(n) ? 0 : n;
}

// Aggregate by admin dept for a year's rows
function aggregateByDept(rows) {
  const map = {};
  rows.forEach(r => {
    const d = r.adminDept || 'Unknown';
    if (!map[d]) map[d] = { name: d, total: 0, skill: 0, nonSkill: 0, agencies: [] };
    map[d].total += safeNum(r.total);
    map[d].skill += safeNum(r.skill);
    map[d].nonSkill += safeNum(r.nonSkill);
    map[d].agencies.push(r);
  });
  return Object.values(map).sort((a, b) => b.total - a.total);
}

// Fetch CSV and parse, fall back to static
async function fetchYearData(yearKey) {
  return STATIC_DATA[yearKey] || null;
}
