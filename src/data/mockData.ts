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
      "Suite à une intervention décisive du préposé valaisan à la transparence, six médias, dont la RTS, ont finalement obtenu l'accès à des rapports confidentiels concernant la société de remontées mécaniques de Crans-Montana-Aminona (CMA). Ces documents, très attendus, se penchent sur des soupçons d’infractions pénales liées à une transaction de recapitalisation qui a permis à l'investisseur tchèque Radovan Vitek de renforcer son contrôle sur la station.\n\nLes analyses juridiques et fiduciaires, s'étalant sur plus de 130 pages, mettent en lumière des faits troublants. L'un des rapports chiffre la perte subie par les communes à plus de 2,6 millions de francs. Cette perte découlerait de la vente de la société CMA Immobilier à CMA par Radovan Vitek, à un prix qui excéderait sa valeur réelle de 25 millions de francs. Les experts soulignent également que cette opération a 'drastiquement' réduit l'influence et le pouvoir décisionnel des communes, tandis que d'autres évoquent une possible violation du Code des obligations et des devoirs de diligence, qualifiant l'affaire de 'hold-up presque parfait'.\n\nMalgré la gravité des conclusions, qui ouvraient la porte à une plainte pénale pour gestion déloyale ou escroquerie, les communes ont renoncé à agir en justice. Elles craignaient de perdre le soutien de Radovan Vitek, 'poumon économique du Haut-Plateau', et de s'engager dans une longue bataille judiciaire. De son côté, le président de CMA a vivement rejeté les accusations, qualifiant les rapports d''inexacts' et 'sans valeur probante'. L'affaire a néanmoins pris une tournure judiciaire, le procureur général du canton s'étant auto-saisi du dossier pour lancer une enquête pénale préliminaire.",
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
    title: "Transparency Pioneer Honored with Journalism Award",
    content:
      "Martin Stoll, founder of Öffentlichkeitsgesetz.ch, was awarded the Zurich Journalism Prize for his lifelong efforts toward transparency and investigative reporting. His work has had a lasting impact on Swiss journalism.",
    category: "Media",
    informationSource: "Zurich Journalism Prize, May 2025",
    author: {
      id: "5",
      name: "Award Jury",
      avatar:
        "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
      badges: ["Award Committee"],
    },
    likes: 66,
    comments: [],
    createdAt: "2025-05-14T10:47:00Z",
    tags: ["journalism", "award", "martin-stoll"],
  },
];
