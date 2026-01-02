import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from './analyticsAdapter.js';

export function RouteViewTracker() {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname, document.title);
  }, [location.pathname]);

  return null;
}
