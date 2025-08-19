// React import not required with new JSX transform
import Layout from './components/Layout';
import Hero from './components/Hero';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectPage from './pages/ProjectPage';
import ResearchPage from './pages/ResearchPage';
import ContactPage from './pages/ContactPage';
import BlogIndex from './pages/BlogIndex';
import BlogPostPage from './pages/BlogPostPage';
import AuthorPage from './pages/AuthorPage';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectPage />} />
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/author/:name" element={<AuthorPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Hero />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;