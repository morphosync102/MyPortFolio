const supportedIcons = new Set(['github', 'linkedin']);

export function getVisibleSocialLinks(links) {
  if (!Array.isArray(links)) {
    return [];
  }
  return links.filter((link) => {
    if (!link || !link.href || typeof link.href !== 'string') {
      return false;
    }
    return supportedIcons.has(link.icon);
  });
}
