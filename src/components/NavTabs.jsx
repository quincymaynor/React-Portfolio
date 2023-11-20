import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import Portfolio from './pages/Portfolio';
import AboutMe from './pages/AboutMe';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

function samePageLinkNavigation(event) {
  if (
    event.defaultPrevented ||
    event.button !== 0 || // ignore everything but left-click
    event.metaKey ||
    event.ctrlKey ||
    event.altKey ||
    event.shiftKey
  ) {
    return false;
  }
  return true;
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        if (samePageLinkNavigation(event)) {
          event.preventDefault();
          handleChange(props.value);
        }
      }}
      {...props}
    />
  );
}

export default function NavTabs({ value, handleChange }) {
  
  // Use the value state to conditionally return the component for the selected page
  const renderPage = () => {
    if (value === 0) {
        return <AboutMe />;
      }
    if (value === 1) {
    return <Portfolio />;
    }
    if (value === 2) {
        return <Resume />;
      }
    if (value === 3) {
      return <Contact />;
    }
  };

  return (
      <Box
        sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', marginBottom: '20px' }}
      >
        <Tabs
          orientation="vertical"
          value={value}
          onChange={handleChange}
          sx={{ borderRight: 1, borderColor: 'divider' }}
        >
          <LinkTab label="Home" href="aboutme" />
          <LinkTab label="Portfolio" href="portfolio" />
          <LinkTab label="Resume" href="resume" />
          <LinkTab label="Contact" href="contact" />
        </Tabs>
        <Container>{renderPage()}</Container>
      </Box >
    );
  
}

// function NavTabs({ currentPage, handlePageChange }) {
//   return (
//     <ul className="nav-tabs">
//       <li className="nav-item">
//         <a
//           href="#aboutme"
//           onClick={() => handlePageChange('AboutMe')}
//           className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
//         >
//           About Me
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           href="#portfolio"
//           onClick={() => handlePageChange('Portfolio')}
//           className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
//         >
//           Portfolio
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           href="#resume"
//           onClick={() => handlePageChange('Resume')}
//           className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
//         >
//           Resume
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           href="#contact"
//           onClick={() => handlePageChange('Contact')}
//           className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
//         >
//           Contact
//         </a>
//       </li>
//     </ul>
//   );
// }
