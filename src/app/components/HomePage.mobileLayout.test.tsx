import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { HomePage } from './HomePage';

const headingText = "Hi, I'm Yudai Ishigaki";

function renderHomePage() {
  return render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  );
}

describe('HomePage mobile layout', () => {
  it('keeps a single-column layout within the main content container', () => {
    const { container, getByRole } = renderHomePage();
    expect(getByRole('heading', { name: headingText })).toBeInTheDocument();

    const mainContainer = container.querySelector('.max-w-6xl');
    expect(mainContainer).toBeInTheDocument();
    expect(mainContainer).toHaveClass('flex');
    expect(mainContainer).toHaveClass('flex-col');
  });

  it('prevents horizontal overflow while allowing vertical scroll', () => {
    const { container } = renderHomePage();
    const root = container.firstElementChild;
    expect(root).toBeInTheDocument();
    expect(root).toHaveClass('overflow-x-hidden');
    expect(root).not.toHaveClass('overflow-hidden');
  });
});
