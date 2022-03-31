import React from 'react';
import Overview from './Overview';
import Projects from './Projects';
import Contact from './Contact';
import Profile from './Profile';

function Page(props) {
  const { currentPage } = props;

  const switchPage = () => {
    switch (currentPage) {
      case 'overview':
        return <Overview />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      case 'profile':
        return <Profile />;
      default:
        return <Overview />;
    }
  };

  return <main>{switchPage()}</main>;
}

export default Page;
