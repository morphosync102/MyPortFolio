import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AboutPage } from './AboutPage';
import { BlogPage } from './BlogPage';
import { HomePage } from './HomePage';
import { NotFoundPage } from './NotFoundPage';
import { ProjectsPage } from './ProjectsPage';

function renderWithRouter(element: JSX.Element) {
  return render(<MemoryRouter>{element}</MemoryRouter>);
}

const bodyTextCases = [
  {
    name: 'Home description',
    render: () => renderWithRouter(<HomePage />),
    matcher: /システムエンジニア 石垣雄大のポートフォリオサイトです。/u,
  },
  {
    name: 'Blog description',
    render: () => renderWithRouter(<BlogPage />),
    text: 'これまでに作成した記事をまとめています。',
  },
  {
    name: 'About description',
    render: () => renderWithRouter(<AboutPage />),
    matcher: /上智大学外国語学部卒業。2024年よりシステムエンジニアとして就職。/u,
  },
  {
    name: 'Projects description',
    render: () => renderWithRouter(<ProjectsPage />),
    text: 'これまでに作成した制作物をまとめています。',
  },
  {
    name: 'Not found description',
    render: () => renderWithRouter(<NotFoundPage />),
    text: 'お探しのページは見つかりませんでした。URLをご確認のうえ、もう一度お試しください。',
  },
];

describe('Body text readability', () => {
  bodyTextCases.forEach(({ name, render, text, matcher }) => {
    it(`uses readable body text sizing and wrapping for ${name}`, () => {
      render();
      const paragraph = matcher ? screen.getByText(matcher) : screen.getByText(text);
      const className = paragraph.getAttribute('class') ?? '';

      expect(className).toContain('text-base');
      expect(className).not.toContain('whitespace-nowrap');
    });
  });
});
