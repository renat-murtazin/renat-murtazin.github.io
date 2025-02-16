export const data = {
    name: "Renat",
    lastName: "Murtazin",
    jobTitle: "Data Engineer / BI Developer",
    photo: "avatar.png",

    contactInfo: [
        {
            iconClass: "fa-phone",
            content: "++90(534)-525-17-12",
            link: null
        },
        {
            iconClass: "fa-envelope",
            content: "renat.murtazin96@gmail.com",
            link: "mailto:renat.murtazin96@gmail.com"
        },
        {
            iconClass: "fa-github",
            content: "renat-murtazin",
            link: "https://renat-murtazin.github.io/"
        },
        {
            iconClass: "fa-linkedin",
            content: "renat-murtazin",
            link: "https://www.linkedin.com/in/renat-murtazin/"
        },
        {
            iconClass: "fa-map-marker",
            content: "Izmir, Turkey",
            link: null,
            additionalContent: "Open for relocation"
        }
    ],

    topSkills: [
        { "name": "Snowflake", "level": "90%" },
        { "name": "SQL", "level": "90%" },
        { "name": "Tableau", "level": "90%" },
        { "name": "Python", "level": "75%" },
        { "name": "AWS", "level": "75%" },
        { "name": "Postgres", "level": "75%" }
    ],

    skillSet: [
        "Snowflake",
        "SQL",
        "Postgres",
        "AWS",
        "Lambda / S3 / CloudFormation / DMS / EC2",
        "Glue / API Gateway / Step Functions",
        "Python",
        "Tableau",
        "Looker",
        "Airflow",
        "Databricks",
        "Git",
        "ETL / ELT",
        "DWH",
        "Scrum / Kanban",
        "Data Modeling",
        "SQLDBM",
        "Spark",
    ],

    languages: [
        { name: "English", level: "C1" },
        { name: "French", level: "B2" },
        { name: "Russian", level: "native" }
    ],

    certifications: [
        {
            name: "Snowflake",
            imageSrc: "img/snowpro.png",
            link: "https://www.credly.com/badges/d970f840-b7ed-4d6d-bc58-44cd610a2c75/public_url"
        },
        {
            name: "Tableau Desktop",
            imageSrc: "img/tableau.png",
            link: "https://www.credly.com/badges/ca4b34db-0f32-4adc-8e90-5223f7c48085/public_url"
        }
    ],

    aboutMe: {
        title: 'ABOUT ME',
        content: `Senior Data Engineer and BI developer with five years of expertise in building
                ETL and ELT data-pipelines, data visualisation and data modeling. Focused on utilizing
                industry-leading technologies like Snowflake, Databricks, Tableau as well as more traditional ones like Postgres
                or Python. Passionate about delivering meaningful data insights to clients by architecting
                robust data solutions that can drive actionable insights.`
    },

    experience: {
        title: "EXPERIENCE",
        projects: [
            {
                company: "EPAM SYSTEMS",
                jobTitle: "Data Engineering & Data Visualisation",
                period: "2023.05 - Present",
                project: "Automative Information",
                stack: ["Databricks", "Python", "Tableau", "AWS", "Airflow"],
                description: `Development of a client-facing Tableau based analytics platform assessing advertising campaign effectiveness by showing vital metrics broken down by a number of segments including geographical performance, sales, and marketing insights.`,
                responsibilities: [
                    "Tableau reporting development and Tableau Server administration.",
                    "ETL jobs development by building Databricks pipelines triggered by Airflow DAGs.",
                    "Maintenance and architectural revision of existing solutions."
                ],
                achievements: [
                    "Developed a Tableau Workbook python parser that helped to analyse workbook metadata and simplified migration of the reports to other BI tools.",
                    "Suggested and implemented redesign of the whole solution that significantly reduced loading time and improved maintainability.",
                    "Identified and resolved more than 10 bugs in the existing solution during the first week of joining the project."
                ]
            },
            {
                company: "EPAM SYSTEMS",
                jobTitle: "Data Engineering",
                period: "2022.10 - 2023.04",
                project: "Pharmaceutical and Healthcare",
                stack: ["Snowflake", "AWS", "SQLDBM", "Power BI"],
                description: "Building of DWH and reporting solutions for a sales department to track the marketing performance of the launched drugs compared to client's competitors.",
                responsibilities: [
                    "DWH design and implementation in Snowflake.",
                    "Communication with Data Integration and Data Visualisation developers to fulfill the needs of both."
                ],
                achievements: [
                    "Built a cost efficient DWH model by utilizing Snowflake Transient tables, FailSafe adjustments, Cloning and Sampling.",
                    "Created a Snowflake role model to guarantee safe and sufficient level of access to different teams.",
                    "Actively collaborated with PowerBI developers to make both backend and frontend data models performance efficient."
                ]
            },
            {
                company: "EPAM SYSTEMS",
                jobTitle: "Data Engineering & Data Visualisation",
                period: "2021.05 - 2022.10",
                project: "Sports and Athleticware Brand",
                stack: ["Snowflake", "Tableau", "Tableau Prep", "MS SQL", "SSIS"],
                description: "Automation of Business processes of the company by providing Tableau reporting solutions, ETL development, and DWH adjustments for FTE reduction.",
                responsibilities: [
                    "Development of Tableau Reports and Tableau Prep flows for ETL / Extract preparation.",
                    "Active collaboration with a BA-team and AutomationAnywhere developers for a setup of Snowflake and MS SQL databases.",
                    "Development of ETL pipelines using SSIS, Snowpipe and Tableau Prep flows for providing PEGA and AutomationAnywhere developers with the clean data."
                ],
                achievements: [
                    "One of the provided solutions reduced Client employees' time taken to complete weekly routines from 12 hours to one hour.",
                    "Participated in the architectural design and suggested Snowflake UDTF usage for customized data retrieval for PEGA application that led to quicker solution delivery.",
                    "Trained a few middle and junior developers in parallel."
                ]
            },
            {
                company: "EPAM SYSTEMS",
                jobTitle: "Non-project activities",
                period: "2021.03 - Present",
                project: "Non-project activities",
                stack: [],
                description: "Non-project related contributions including technical interviews and course creation.",
                responsibilities: [],
                achievements: [
                    "Conducted 100+ technical interviews.",
                    "Created and mentored PostgreSQL course for Senior EPAM developers.",
                    "Mentored Tableau Development course and recorded a set of educational videos for the course globalization."
                ]
            },
            {
                company: "SIBUR",
                jobTitle: "Data Engineering & Data Visualisation",
                period: "2019.05 - 2021.03",
                project: "Oil Refining",
                stack: ["PostgreSQL", "Tableau", "Pentaho", "Power BI", "VBA"],
                description: "Automation of Business processes of the company by providing Tableau reporting solutions, ETL development, and DWH adjustments for FTE reduction.",
                responsibilities: [
                    "Development of Tableau Reports for different BI departments like HR, Sales, Finance, etc.",
                    "Development of ETL pipelines using Pentaho and PostgreSQL.",
                    "Daily / weekly routine automation with VBA macros.",
                    "Maintenance of the existing Power BI reports and their migration to Tableau."
                ],
                achievements: [
                    "Implemented a set of macros for data retrieval from SAP ERP as a part of ETL process.",
                    "Developed a VBA macros that revealed a leakage of funds in the procurement process and consequently was nominated as one of the best employees.",
                    "Trained a few middle and junior developers in parallel."
                ]
            }
        ]
    },

    education: {
        title: "EDUCATION",
        programs: [
            {
                university: "Lobachevsky State University",
                program: "Electronics & Nano-electronics",
                degree: "Master's Degree",
                period: "2018 - 2020"
            },
            {
                university: "Lobachevsky State University",
                program: "Nanotechnologies & Microengineering",
                degree: "Bachelor's Degree",
                period: "2014 - 2018"
            }
        ]
    }

};

