import { Story } from '../types/Story';

export const mockStories: Story[] = [
  {
    id: '1',
    title: 'Hidden Budget Allocations Revealed in Municipal Spending',
    content: 'After filing a freedom of information request with our local municipality, I uncovered significant discrepancies in budget allocations for youth programs. The documents revealed that while $2.3 million was allocated for youth services, only 40% was actually spent on programs directly benefiting young people in our community.',
    category: 'Government',
    informationSource: 'Municipal budget documents obtained through FOI request #2024-156',
    author: {
      id: '1',
      name: 'Alex Chen',
      avatar: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      badges: ['FOI Expert', 'First Story']
    },
    likes: 89,
    comments: [
      {
        id: '1',
        author: {
          id: '2',
          name: 'Maria Rodriguez',
          avatar: 'https://images.pexels.com/photos/3771511/pexels-photo-3771511.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
        },
        content: 'This is incredible investigative work! Have you considered sharing this with local news outlets?',
        createdAt: '2024-01-20T10:30:00Z'
      }
    ],
    createdAt: '2024-01-18T14:22:00Z',
    featured: true,
    tags: ['government', 'budget', 'youth-services']
  },
  {
    id: '2',
    title: 'School Lunch Program: Where Does the Money Really Go?',
    content: 'Through careful analysis of public records, I discovered that our school district spends significantly more per meal than neighboring districts, yet students report lower satisfaction. The investigation revealed administrative overhead consuming 35% of the lunch program budget.',
    category: 'Education',
    informationSource: 'School district financial records and comparative analysis',
    author: {
      id: '2',
      name: 'Jordan Williams',
      avatar: 'https://images.pexels.com/photos/3771511/pexels-photo-3771511.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      badges: ['Education Advocate']
    },
    likes: 67,
    comments: [],
    createdAt: '2024-01-17T09:45:00Z',
    tags: ['education', 'school-budget', 'food-services']
  },
  {
    id: '3',
    title: 'Environmental Impact Reports Missing Key Data',
    content: 'A deep dive into environmental impact assessments for a proposed development project revealed significant gaps in air quality monitoring data. The missing information could affect the health and safety of our community.',
    category: 'Environment',
    informationSource: 'Environmental Protection Agency reports and monitoring data',
    author: {
      id: '3',
      name: 'Sam Taylor',
      avatar: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      badges: ['Environmental Watchdog']
    },
    likes: 92,
    comments: [],
    createdAt: '2024-01-16T16:20:00Z',
    featured: true,
    tags: ['environment', 'development', 'public-health']
  },
  {
    id: '4',
    title: 'Public Transportation Delays: The Data Behind the Problems',
    content: 'Using public transit data obtained through FOI requests, I analyzed patterns in bus delays and found that 60% of delays occur on routes serving low-income neighborhoods, highlighting potential equity issues in public transportation.',
    category: 'Transportation',
    informationSource: 'Public transit authority performance data and scheduling records',
    author: {
      id: '4',
      name: 'Casey Johnson',
      avatar: 'https://images.pexels.com/photos/3771511/pexels-photo-3771511.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      badges: ['Data Analyst']
    },
    likes: 54,
    comments: [],
    createdAt: '2024-01-15T11:10:00Z',
    tags: ['transportation', 'equity', 'data-analysis']
  },
  {
    id: '5',
    title: 'Hospital Wait Times: What the Public Data Doesn\'t Show',
    content: 'An investigation into public hospital performance metrics revealed that reported wait times exclude certain categories of patients, potentially painting an incomplete picture of emergency care accessibility.',
    category: 'Healthcare',
    informationSource: 'Hospital performance reports and patient flow data',
    author: {
      id: '5',
      name: 'Morgan Davis',
      avatar: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      badges: ['Healthcare Advocate']
    },
    likes: 73,
    comments: [],
    createdAt: '2024-01-14T13:55:00Z',
    tags: ['healthcare', 'emergency-services', 'patient-care']
  }
];