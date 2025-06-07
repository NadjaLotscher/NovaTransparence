import { Story } from '../types/Story';

export const mockStories: Story[] = [
  {
    id: '1',
    title: 'Lucerne Introduces Transparency Law – With Weaknesses',
    content: 'After years of debate, Lucerne has introduced a transparency law that makes official information generally accessible. However, critics point out weaknesses: authorities may still reject requests if they can justify it based on legal grounds – which may remain a barrier in practice.',
    category: 'Politics',
    informationSource: 'Öffentlichkeitsgesetz.ch, May 29, 2025',
    author: {
      id: '1',
      name: 'Martin Stoll',
      avatar: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      badges: ['Investigative Journalist']
    },
    likes: 34,
    comments: [],
    createdAt: '2025-05-29T16:29:00Z',
    featured: true,
    tags: ['lucerne', 'transparency', 'public-law']
  },
  {
    id: '2',
    title: 'Lobbying Campaign Exposed Through Leaked Emails',
    content: 'Journalist Anina Ritscher used freed emails to expose how the Swiss shipping giant MSC influences politics in Bern. Her research revealed lobbying strategies by the company, despite Switzerland being a landlocked country.',
    category: 'Business',
    informationSource: 'Öffentlichkeitsgesetz.ch, May 26, 2025',
    author: {
      id: '2',
      name: 'Anina Ritscher',
      avatar: 'https://images.pexels.com/photos/3771511/pexels-photo-3771511.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      badges: ['Transparency Award Winner']
    },
    likes: 58,
    comments: [],
    createdAt: '2025-05-26T10:18:00Z',
    tags: ['lobbying', 'MSC', 'email-investigation']
  },
  {
    id: '3',
    title: 'Special Regulations Rarely Override Transparency Law',
    content: 'Court rulings confirm that special regulations from other federal laws cannot be used as a blanket excuse to deny access to information. This strengthens the transparency principle at the federal level.',
    category: 'Law',
    informationSource: 'Medialex Annual Report, Eva Hirschi',
    author: {
      id: '3',
      name: 'Eva Hirschi',
      avatar: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      badges: ['Legal Analyst']
    },
    likes: 42,
    comments: [],
    createdAt: '2025-04-28T09:41:00Z',
    tags: ['federal-law', 'legal-precedent', 'transparency']
  },
  {
    id: '4',
    title: 'Basel Government Must Introduce Ombudsman',
    content: 'The Basel parliament passed a motion to create an ombudsman office for transparency disputes. Citizens denied access to documents will no longer need to go directly to court. The move was initially opposed by the government.',
    category: 'Justice',
    informationSource: 'Öffentlichkeitsgesetz.ch, April 17, 2025',
    author: {
      id: '4',
      name: 'Eva Hirschi',
      avatar: 'https://images.pexels.com/photos/3771511/pexels-photo-3771511.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      badges: ['Civic Reporting']
    },
    likes: 51,
    comments: [],
    createdAt: '2025-04-17T09:04:00Z',
    tags: ['basel', 'ombudsman', 'access-rights']
  },
  {
    id: '5',
    title: 'Transparency Pioneer Honored with Journalism Award',
    content: 'Martin Stoll, founder of Öffentlichkeitsgesetz.ch, was awarded the Zurich Journalism Prize for his lifelong efforts toward transparency and investigative reporting. His work has had a lasting impact on Swiss journalism.',
    category: 'Media',
    informationSource: 'Zurich Journalism Prize, May 2025',
    author: {
      id: '5',
      name: 'Award Jury',
      avatar: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      badges: ['Award Committee']
    },
    likes: 66,
    comments: [],
    createdAt: '2025-05-14T10:47:00Z',
    tags: ['journalism', 'award', 'martin-stoll']
  }
];
