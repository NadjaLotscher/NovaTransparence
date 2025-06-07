import { Story } from "../types/Story";

export const mockStories: Story[] = [
  {
    id: "1",
    title: "Lucerne Introduces Transparency Law – With Weaknesses",
    content:
      "After years of debate, Lucerne has introduced a transparency law that makes official information generally accessible. However, critics point out weaknesses: authorities may still reject requests if they can justify it based on legal grounds – which may remain a barrier in practice.",
    category: "Politics",
    informationSource: "Öffentlichkeitsgesetz.ch, May 29, 2025",
    author: {
      id: "1",
      name: "Martin Stoll",
      avatar:
        "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
      badges: ["Investigative Journalist"],
    },
    likes: 34,
    comments: [],
    createdAt: "2025-05-29T16:29:00Z",
    featured: true,
    tags: ["lucerne", "transparency", "public-law"],
  },
  {
    id: "2",
    title:
      "Transparence à Crans-Montana : Des rapports sur les remontées mécaniques enfin publics",
    content:
      "Suite à une intervention décisive du préposé valaisan à la transparence, six médias, dont la RTS, ont finalement obtenu l'accès à des rapports confidentiels concernant la société de remontées mécaniques de Crans-Montana-Aminona (CMA). Les documents révèlent des pertes de plusieurs millions pour les communes, ainsi que des soupçons de gestion déloyale et d'escroquerie. Malgré ces éléments, les communes n'ont pas porté plainte, redoutant un conflit avec l'investisseur principal Radovan Vitek.",
    category: "Politique",
    informationSource: "RTS, 7 juin 2025",
    author: {
      id: "2",
      name: "Pauline Turuban",
      avatar:
        "https://images.pexels.com/photos/3772623/pexels-photo-3772623.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
      badges: ["Journaliste"],
    },
    likes: 70,
    comments: [],
    createdAt: "2025-06-07T09:30:00Z",
    featured: true,
    tags: ["crans-montana", "transparence", "justice", "valais"],
    relatedDocuments: [
      {
        id: "1",
        title: "Rapport Altenburger sur les remontées mécaniques",
        url: "https://www.oeffentlichkeitsgesetz.ch/downloads/geschichten/befreite-dokumente/2019-04-25-Beney-CMA.pdf",
      },
    ],
  },
  {
    id: "3",
    title: "Special Regulations Rarely Override Transparency Law",
    content:
      "Court rulings confirm that special regulations from other federal laws cannot be used as a blanket excuse to deny access to information. This strengthens the transparency principle at the federal level.",
    category: "Law",
    informationSource: "Medialex Annual Report, Eva Hirschi",
    author: {
      id: "3",
      name: "Eva Hirschi",
      avatar:
        "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
      badges: ["Legal Analyst"],
    },
    likes: 42,
    comments: [],
    createdAt: "2025-04-28T09:41:00Z",
    tags: ["federal-law", "legal-precedent", "transparency"],
  },
  {
    id: "4",
    title: "Basel Government Must Introduce Ombudsman",
    content:
      "The Basel parliament passed a motion to create an ombudsman office for transparency disputes. Citizens denied access to documents will no longer need to go directly to court. The move was initially opposed by the government.",
    category: "Justice",
    informationSource: "Öffentlichkeitsgesetz.ch, April 17, 2025",
    author: {
      id: "4",
      name: "Eva Hirschi",
      avatar:
        "https://images.pexels.com/photos/3771511/pexels-photo-3771511.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
      badges: ["Civic Reporting"],
    },
    likes: 51,
    comments: [],
    createdAt: "2025-04-17T09:04:00Z",
    tags: ["basel", "ombudsman", "access-rights"],
  },
  {
    id: "5",
    title:
      "Electronic Bracelet Usage in Romandy Shows Striking Canton Disparities",
    content:
      "Thanks to transparency laws, RTS uncovered large differences in how cantons use electronic monitoring instead of prison for short sentences. Vaud leads with high adoption, while Neuchâtel uses the measure far less. Access to this alternative often depends more on location than on law.",
    category: "Info",
    informationSource: "RTS, February 24, 2025",
    author: {
      id: "5",
      name: "Jacqueline Pirszel & Tybalt Félix",
      avatar:
        "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
      badges: ["Data Journalist"],
    },
    likes: 77,
    comments: [],
    createdAt: "2025-02-24T09:32:00Z",
    tags: ["justice", "monitoring", "cantons", "rts"],
  },
  // Additional stories by Sarah Martinez (the current user)
  {
    id: "6",
    title: "Hidden Budget Allocations Revealed Through FOI Request",
    content:
      "After months of persistence, I successfully obtained internal budget documents that reveal how our city council allocated emergency COVID-19 funds. The documents show that over $2.3 million was spent on consulting fees to firms with undisclosed connections to council members. This investigation demonstrates the power of transparency laws in holding local government accountable for public spending decisions.",
    category: "Government",
    informationSource: "City Council FOI Request #2024-089, Internal Budget Documents",
    author: {
      id: "1",
      name: "Sarah Martinez",
      avatar:
        "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
      badges: ["First Story", "Top Contributor", "FOI Expert"],
    },
    likes: 89,
    comments: [],
    createdAt: "2024-03-15T14:22:00Z",
    tags: ["budget", "transparency", "covid-funds", "accountability"],
  },
  {
    id: "7",
    title: "School District's Secret Vendor Contracts Exposed",
    content:
      "Through a series of Freedom of Information requests, I uncovered that our local school district has been awarding lucrative technology contracts to a single vendor without competitive bidding. The contracts, worth over $1.8 million, were signed by the superintendent's brother-in-law's company. This story highlights how transparency tools can expose potential conflicts of interest in public education funding.",
    category: "Education",
    informationSource: "School District FOI Requests, Contract Database Analysis",
    author: {
      id: "1",
      name: "Sarah Martinez",
      avatar:
        "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
      badges: ["First Story", "Top Contributor", "FOI Expert"],
    },
    likes: 156,
    comments: [],
    createdAt: "2024-02-28T10:15:00Z",
    tags: ["education", "contracts", "conflict-of-interest", "procurement"],
  },
  {
    id: "8",
    title: "Environmental Impact Reports Kept from Public for Two Years",
    content:
      "My investigation revealed that the city has been withholding environmental impact reports for a major development project, despite multiple public requests. Using transparency laws, I obtained 847 pages of documents showing that officials knew about potential groundwater contamination but chose not to disclose this information during public hearings. This case shows how persistent FOI requests can uncover environmental cover-ups.",
    category: "Environment",
    informationSource: "Environmental Protection Agency Records, City Planning Documents",
    author: {
      id: "1",
      name: "Sarah Martinez",
      avatar:
        "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
      badges: ["First Story", "Top Contributor", "FOI Expert"],
    },
    likes: 203,
    comments: [],
    createdAt: "2024-01-20T16:45:00Z",
    featured: true,
    tags: ["environment", "development", "contamination", "cover-up"],
  },
  {
    id: "9",
    title: "Police Department's Use of Surveillance Technology Goes Unchecked",
    content:
      "After filing multiple FOI requests, I discovered that our police department has been using facial recognition technology and license plate readers without proper oversight or public disclosure. The documents reveal that the technology was purchased using federal grants, but no privacy impact assessments were conducted. This investigation demonstrates how transparency laws can shed light on surveillance practices that affect civil liberties.",
    category: "Public Safety",
    informationSource: "Police Department Records, Federal Grant Documentation",
    author: {
      id: "1",
      name: "Sarah Martinez",
      avatar:
        "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
      badges: ["First Story", "Top Contributor", "FOI Expert"],
    },
    likes: 134,
    comments: [],
    createdAt: "2024-03-02T11:30:00Z",
    tags: ["surveillance", "privacy", "police", "civil-liberties"],
  },
  {
    id: "10",
    title: "Healthcare System's Financial Mismanagement Exposed",
    content:
      "Through extensive FOI requests to the regional health authority, I uncovered a pattern of financial mismanagement that has cost taxpayers over $4.2 million. The documents show excessive executive compensation, questionable consulting contracts, and delayed infrastructure projects. This investigation highlights how young journalists can use transparency tools to hold healthcare administrators accountable for public funds.",
    category: "Healthcare",
    informationSource: "Regional Health Authority Financial Records, Executive Compensation Data",
    author: {
      id: "1",
      name: "Sarah Martinez",
      avatar:
        "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
      badges: ["First Story", "Top Contributor", "FOI Expert"],
    },
    likes: 178,
    comments: [],
    createdAt: "2024-02-10T09:20:00Z",
    tags: ["healthcare", "financial-mismanagement", "executive-pay", "accountability"],
  },
  {
    id: "11",
    title: "Transportation Department's Road Safety Data Hidden from Public",
    content:
      "My six-month investigation using Freedom of Information laws revealed that the transportation department has been suppressing accident data on several high-risk intersections. The obtained documents show that officials were aware of safety issues but delayed implementing fixes due to budget constraints. This story demonstrates how transparency can literally save lives by forcing accountability in public safety decisions.",
    category: "Transportation",
    informationSource: "Department of Transportation Safety Reports, Accident Database",
    author: {
      id: "1",
      name: "Sarah Martinez",
      avatar:
        "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
      badges: ["First Story", "Top Contributor", "FOI Expert"],
    },
    likes: 167,
    comments: [],
    createdAt: "2024-01-05T13:10:00Z",
    tags: ["transportation", "road-safety", "accidents", "public-safety"],
  },
];