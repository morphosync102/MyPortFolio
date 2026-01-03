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

const responsiveHeadingIds = [
  { name: "Hi, I'm Yudai Ishigaki", render: () => renderWithRouter(<HomePage />) },
  { name: '作成した記事', render: () => renderWithRouter(<BlogPage />) },
  { name: '石垣雄大 / Yudai Ishigaki', render: () => renderWithRouter(<AboutPage />) },
  { name: '制作したプロダクト', render: () => renderWithRouter(<ProjectsPage />) },
  { name: '404', render: () => renderWithRouter(<NotFoundPage />) },
];

describe('Responsive page headings', () => {
  responsiveHeadingIds.forEach(({ name, render }) => {
    it(`applies responsive sizing for "${name}"`, () => {
      render();
      const heading = screen.getByRole('heading', { name });
      const className = heading.getAttribute('class') ?? '';

      expect(className).toContain('text-3xl');
      expect(className).toMatch(/sm:text-\d+xl/);
    });
  });
});
