export interface Author {
  id: string;
  name: string;
  avatar: string;
  badges?: string[];
}

export interface Comment {
  id: string;
  author: Author;
  content: string;
  createdAt: string;
  isReported?: boolean;
}

export interface Story {
  id: string;
  title: string;
  content: string;
  category?: string;
  informationSource?: string;
  author: Author;
  likes: number;
  comments?: Comment[];
  createdAt: string;
  updatedAt?: string;
  isLikedByUser?: boolean;
  featured?: boolean;
  tags?: string[];
}