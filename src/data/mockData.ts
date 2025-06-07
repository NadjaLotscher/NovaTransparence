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
      "Suite à une intervention décisive du préposé valaisan à la transparence, six médias, dont la RTS, ont finalement obtenu l'accès à des rapports confidentiels concernant la société de remontées mécaniques de Crans-Montana-Aminona (CMA). Les documents révèlent des pertes de plusieurs millions pour les communes, ainsi que des soupçons de gestion déloyale et d’escroquerie. Malgré ces éléments, les communes n’ont pas porté plainte, redoutant un conflit avec l’investisseur principal Radovan Vitek.",
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
];
