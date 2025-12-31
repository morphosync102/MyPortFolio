export const headerHeightClasses = 'h-14 sm:h-16';
export const mainOffsetClasses = 'pt-14 sm:pt-16';

export function getHeaderClassName() {
  return `fixed top-0 left-0 right-0 z-50 w-full border-b border-amber-200/80 bg-amber-50/90 backdrop-blur-xl ${headerHeightClasses}`;
}

export function getMainClassName() {
  return mainOffsetClasses;
}
