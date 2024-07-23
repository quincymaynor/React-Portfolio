import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { styled } from '@mui/material/styles';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PermMediaOutlinedIcon from '@mui/icons-material/PermMediaOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

import Portfolio from './pages/Portfolio';
import AboutMe from './pages/AboutMe';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

const StyledTabs = styled((props) => (
  <Tabs
    sx={{ bgcolor: '#354936', borderRadius: '35px', marginRight: '10px'}}
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  
});

// const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
//   ({ theme }) => ({
//     textTransform: 'none',
//     fontWeight: theme.typography.fontWeightRegular,
//     fontSize: theme.typography.pxToRem(15),
//     marginRight: theme.spacing(1),
//     color: 'rgba(255, 255, 255, 0.7)',
//     '&.Mui-selected': {
//       color: '#fff',
//     },
//     '&.Mui-focusVisible': {
//       backgroundColor: 'rgba(100, 95, 228, 0.32)',
//     },
//   }),
// );

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
          // handleChange(props.value);
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
        sx={{ flexGrow: 1, display: 'flex', marginBottom: '20px'}}
      >
        <StyledTabs
          orientation="vertical"
          value={value}
          onChange={handleChange}
        >
          <LinkTab icon={<HomeOutlinedIcon />} label="Home" href="aboutme" />
          <LinkTab icon={<PermMediaOutlinedIcon />} label="Portfolio" href="portfolio" />
          <LinkTab icon={<ArticleOutlinedIcon />} label="Resume" href="resume" />
          <LinkTab icon={<EmailOutlinedIcon />} label="Contact" href="contact" />
        </StyledTabs>
        <Container sx={{}}>
          {renderPage()}
        </Container>
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
