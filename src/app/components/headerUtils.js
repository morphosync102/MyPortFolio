export function isNavActive(currentPath, href) {
  if (href === '/') {
    return currentPath === '/';
  }

  const normalized = currentPath.endsWith('/')
    ? currentPath.slice(0, -1)
    : currentPath;
  return normalized === href || normalized.startsWith(`${href}/`);
}
