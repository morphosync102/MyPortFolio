export const contentConfig = {
  siteName: 'noraguwa.com',
  lastUpdated: '2025.12.31',
  analyticsConfig: {
    measurementId: 'G-697ZRDS79V',
    enableInDev: false,
    engagementEvents: ['scroll_depth', 'outbound_click', 'cta_click'],
  },
  navItems: [
    {
      id: 'home',
      label: 'noraguwa.com',
      href: '/',
      kind: 'internal',
    },
    {
      id: 'profile',
      label: 'Profile',
      href: '/profile',
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
  rolesItems: [
    {
      id: 'HPE',
      company: '日本ヒューレット・パッカード合同会社 (2024年4月 〜 )',
      title: 'システムエンジニア',
      summary: 'セキュリティ専門のシステムエンジニアとして、セキュリティソリューションの導入案件にPLとして参画。運用案件の担当経験もあり。',
    },
  ],
  skillsItems: [
    { id: 'security', name: 'Security', description: 'Splunk, Deep Security, LogStorageなど案件参画経験あり' },
    { id: 'AI', name: 'Generative AI', description: '生成AI活用によるコンテンツ制作' },
    { id: 'Python', name: 'Python', description: 'PythonでAtCoder茶' },
  ],
  hobbiesItems: [
    {
      id: 'coffee',
      name: 'コーヒー',
      description: '学生時代にコーヒーサークルに加入',
    },
    {
      id: 'game',
      name: 'ゲーム',
      description: 'どうぶつの森とインディーゲームが好き',
    },
    {
      id: 'darts',
      name: 'ダーツ',
      description: '家にダーツ盤を置いて練習中',
    },
    {
      id: 'genAI',
      name: 'バイブコーディング',
      description: '棋士の藤井聡太さんと同じ',
    },
    {
      id: 'books',
      name: '読書',
      description: 'ビジネス本を読むのが趣味になりつつある',
    },
  ],
  blogItems: [
    {
      id: 'r3f-notes',
      title: '年末帰省するエンジニアよ、VPNで自宅のRaspberry Piに遠隔で接続しよう！',
      summary: 'VPNサーバーを構築して、遠隔で自宅のRaspberry Piに接続する方法を紹介',
      href: 'https://qiita.com/molphosync102/items/2018711bbd42d9a764cc',
    },
  ],
  projectItems: [
    {
      id: 'portfolio',
      name: 'ポートフォリオサイト公開',
      summary: 'システムエンジニアとしての経歴、スキル、趣味をまとめたポートフォリオサイトを公開',
      href: 'https://example.com/projects/portfolio',
    },
  ],
};
