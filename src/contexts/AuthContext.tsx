import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  points: number;
  badges: string[];
  storiesCount: number;
  joinDate: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>({
    id: '1',
    name: 'Sarah Martinez',
    email: 'sarah@example.com',
    avatar: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    points: 1250,
    badges: ['First Story', 'Top Contributor', 'FOI Expert'],
    storiesCount: 12,
    joinDate: '2024-01-15'
  });

  const login = async (email: string, password: string) => {
    // Mock login implementation
    setUser({
      id: '1',
      name: 'Sarah Martinez',
      email,
      avatar: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      points: 1250,
      badges: ['First Story', 'Top Contributor', 'FOI Expert'],
      storiesCount: 12,
      joinDate: '2024-01-15'
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{
      user,
      login,
      logout,
      isAuthenticated: !!user
    }}>
      {children}
    </AuthContext.Provider>
  );
};