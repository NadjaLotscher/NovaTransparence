import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { StoriesPage } from './pages/StoriesPage';
import { StoryDetailPage } from './pages/StoryDetailPage';
import { CreateStoryPage } from './pages/CreateStoryPage';
import { ContestPage } from './pages/ContestPage';
import { ContestSubmissionPage } from './pages/ContestSubmissionPage';
import { LearnPage } from './pages/LearnPage';
import { ProfilePage } from './pages/ProfilePage';
import { RankingsPage } from './pages/RankingsPage';
import { RequestGeneratorPage } from './pages/RequestGeneratorPage';

console.log('App component loading...');

function App() {
  console.log('App component rendering...');
  
  try {
    return (
      <AuthProvider>
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex flex-col">
            <Header />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/stories" element={<StoriesPage />} />
                <Route path="/stories/:id" element={<StoryDetailPage />} />
                <Route path="/create-story" element={<CreateStoryPage />} />
                <Route path="/contest" element={<ContestPage />} />
                <Route path="/contest/submit" element={<ContestSubmissionPage />} />
                <Route path="/learn" element={<LearnPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/rankings" element={<RankingsPage />} />
                <Route path="/request-generator" element={<RequestGeneratorPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AuthProvider>
    );
  } catch (error) {
    console.error('Error in App component:', error);
    return (
      <div style={{ padding: '20px', color: 'red' }}>
        <h1>Error loading application</h1>
        <p>{error.toString()}</p>
      </div>
    );
  }
}

export default App;