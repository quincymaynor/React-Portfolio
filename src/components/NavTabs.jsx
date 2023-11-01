function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav-tabs">
      <li className="nav-item">
        <a
          href="#aboutme"
          onClick={() => handlePageChange('AboutMe')}
          className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';

// function samePageLinkNavigation(event) {
//   if (
//     event.defaultPrevented ||
//     event.button !== 0 || // ignore everything but left-click
//     event.metaKey ||
//     event.ctrlKey ||
//     event.altKey ||
//     event.shiftKey
//   ) {
//     return false;
//   }
//   return true;
// }

// function LinkTab(props) {
//   return (
//     <Tab
//       component="a"
//       onClick={(event) => {
//         // Routing libraries handle this, you can remove the onClick handle when using them.
//         if (samePageLinkNavigation(event)) {
//           event.preventDefault();
//         }
//       }}
//       {...props}
//     />
//   );
// }

// function NavTabs() {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     // event.type can be equal to focus with selectionFollowsFocus.
//     if (
//       event.type !== 'click' ||
//       (event.type === 'click' && samePageLinkNavigation(event))
//     ) {
//       setValue(newValue);
//     }
//   };

//   return (
//     <Box sx={{ width: '100%' }}>
//       <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
//         <LinkTab label="About Me" href="#aboutme" />
//         <LinkTab label="Portfolio" href="#portfolio" />
//         <LinkTab label="Resume" href="#resume" />
//         <LinkTab label="Contact" href="#contact" />
//       </Tabs>
//     </Box>
//   );
// }

// export default NavTabs;