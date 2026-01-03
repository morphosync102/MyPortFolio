import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { Header } from './Header';
import { ThemeProvider } from '../theme/ThemeProvider';
import { contentConfig } from '../content/contentConfig.js';

function renderHeader() {
  return render(
    <MemoryRouter>
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    </MemoryRouter>
  );
}

describe('Header mobile navigation', () => {
  it('renders a hamburger toggle for mobile navigation', () => {
    renderHeader();
    const toggleButton = screen.getByRole('button', { name: /toggle navigation menu/i });
    expect(toggleButton).toBeInTheDocument();
  });

  it('toggles aria-expanded when the menu button is clicked', async () => {
    const user = userEvent.setup();
    renderHeader();
    const toggleButton = screen.getByRole('button', { name: /toggle navigation menu/i });

    expect(toggleButton).toHaveAttribute('aria-expanded', 'false');
    await user.click(toggleButton);
    expect(toggleButton).toHaveAttribute('aria-expanded', 'true');
  });

  it('shows mobile navigation links when the menu is open', async () => {
    const user = userEvent.setup();
    const { container } = renderHeader();

    const mobileNavClosed = container.querySelector('#mobile-navigation');
    expect(mobileNavClosed).not.toBeNull();
    if (!mobileNavClosed) {
      throw new Error('Mobile navigation container not found');
    }
    expect(mobileNavClosed).toHaveAttribute('aria-hidden', 'true');
    expect(mobileNavClosed.className).toContain('opacity-0');

    await user.click(screen.getByRole('button', { name: /toggle navigation menu/i }));

    const mobileNav = container.querySelector('#mobile-navigation');
    expect(mobileNav).not.toBeNull();
    if (!mobileNav) {
      throw new Error('Mobile navigation container not found');
    }
    expect(mobileNav.className).toContain('z-[60]');
    expect(mobileNav.className).toContain('opacity-100');
    expect(mobileNav).toHaveAttribute('aria-hidden', 'false');
    const navItems = contentConfig.navItems.filter((item) => item.id !== 'home');

    navItems.forEach((item) => {
      expect(within(mobileNav).getByRole('link', { name: item.label })).toBeInTheDocument();
    });
  });

  it('applies touch target sizing and active feedback to primary controls', async () => {
    const user = userEvent.setup();
    renderHeader();

    const menuButton = screen.getByRole('button', { name: /toggle navigation menu/i });
    const githubLink = screen.getByRole('link', { name: /github/i });
    const linkedinLink = screen.getByRole('link', { name: /linkedin/i });

    [menuButton, githubLink, linkedinLink].forEach((element) => {
      expect(element.className).toContain('min-h-[44px]');
      expect(element.className).toContain('min-w-[44px]');
      expect(element.className).toContain('active:');
    });

    [githubLink, linkedinLink].forEach((element) => {
      expect(element.className).toContain('inline-flex');
      expect(element.className).toContain('items-center');
      expect(element.className).toContain('justify-center');
    });

    await user.click(menuButton);
    const mobileNav = await screen.findByRole('navigation', { name: /mobile navigation/i });

    const navLinks = within(mobileNav).getAllByRole('link');
    navLinks.forEach((link) => {
      expect(link.className).toContain('min-h-[44px]');
      expect(link.className).toContain('min-w-[44px]');
      expect(link.className).toContain('active:');
    });
  });

  it('animates mobile navigation visibility changes', async () => {
    const user = userEvent.setup();
    const { container } = renderHeader();
    const mobileNav = container.querySelector('#mobile-navigation');

    expect(mobileNav).not.toBeNull();
    if (!mobileNav) {
      throw new Error('Mobile navigation container not found');
    }
    expect(mobileNav.className).toContain('transition');
    expect(mobileNav.className).toContain('duration-300');

    await user.click(screen.getByRole('button', { name: /toggle navigation menu/i }));
    expect(mobileNav.className).toContain('opacity-100');
  });
});
