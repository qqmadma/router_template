import { lazy, Suspense } from 'react';
import { useRoutes } from 'react-router-dom';

const lazyLoad = (path: string) => {
  const Comp = lazy(() => import('../pages/' + path));

  return (
    <Suspense>
      <Comp></Comp>
    </Suspense>
  )
};

const routes = [
  {
    path: '/',
    element: lazyLoad('Layout/Layout'),
    children: [
      {
        path: '/',
        element: lazyLoad('Home/Home')
      },
      {
        path: '/navitemone',
        element: lazyLoad('NavItemOne/NavItemOne')
      },
      {
        path: '/navitemtwo',
        element: lazyLoad('NavItemTwo/NavItemTwo')
      },
    ]
  },
];

export default function() {
  return useRoutes(routes);
};