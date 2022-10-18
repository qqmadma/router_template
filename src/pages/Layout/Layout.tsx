import React from 'react';
import LayoutHeader from './LayoutHeader/LayoutHeader';
import LayoutMain from './LayoutMain/LayoutMain';
import LayoutFooter from './LayoutFooter/LayoutFooter';

function Layout() {
  return (
    <div>
      <LayoutHeader></LayoutHeader>
      <LayoutMain></LayoutMain>
      <LayoutFooter></LayoutFooter>
    </div>
  )
}

export default Layout