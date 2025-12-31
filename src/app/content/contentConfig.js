export const contentConfig = {
  siteName: 'NoraGuwa.com',
  navItems: [
    {
      id: 'home',
      label: 'Portfolio',
      href: '/',
      kind: 'internal',
    },
    {
      id: 'about',
      label: 'About',
      href: '/about',
      kind: 'internal',
    },
    {
      id: 'blog',
      label: 'Blog',
      href: '/blog',
      kind: 'internal',
    },
    {
      id: 'projects',
      label: 'Projects',
      href: '/projects',
      kind: 'internal',
    },
  ],
  socialLinks: [
    {
      id: 'github',
      label: 'GitHub',
      href: 'https://github.com/morphosync102',
      icon: 'github',
      openInNewTab: true,
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/yudai-ishigaki-46b7282aa/',
      icon: 'linkedin',
      openInNewTab: true,
    },
  ],
  aboutItems: [
    {
      id: 'philosophy',
      title: 'Human-centered craft',
      body: 'Designing interfaces that feel calm, clear, and intentional.',
    },
    {
      id: 'iteration',
      title: 'Iterate with curiosity',
      body: 'Small experiments and steady refinement over time.',
    },
  ],
  techStackItems: [
    { id: 'react', name: 'React', category: 'Frontend' },
    { id: 'typescript', name: 'TypeScript', category: 'Frontend' },
    { id: 'three', name: 'Three.js', category: '3D' },
  ],
  blogItems: [
    {
      id: 'r3f-notes',
      title: 'Building calm 3D interfaces',
      summary: 'Notes on balancing performance and mood in WebGL scenes.',
      href: 'https://example.com/blog/calm-3d',
    },
  ],
  projectItems: [
    {
      id: 'portfolio',
      name: 'Interactive portfolio',
      summary: 'A 3D-driven landing with focused storytelling.',
      href: 'https://example.com/projects/portfolio',
    },
  ],
};
