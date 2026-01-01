import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { BlogPage } from './components/BlogPage';
import { AboutPage } from './components/AboutPage';
import { ProjectsPage } from './components/ProjectsPage';
import { NotFoundPage } from './components/NotFoundPage';
import { Header } from './components/Header';
import { getMainClassName } from './components/layoutUtils.js';

export default function App() {
  return (
    <Router>
      <div className="site-shell">
        <Header />
        <main className={getMainClassName()}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<AboutPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
