import { useState } from 'react';
import NavTabs from './NavTabs';
import Portfolio from './pages/Portfolio';
import AboutMe from './pages/AboutMe';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // Use the current page state to conditionally return the component for the selected page
  const renderPage = () => {
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <AboutMe />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <header class="siteheader">
        <h1>Quincy Maynor</h1>
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange}/>
      </header>
      <main className="mx-3">{renderPage()}</main>
      <footer>
        <div class="contactme-content"> 
            <section class="button">
              <p>Phone: (612) 442 3948</p>
            </section>   
            <section class="button">
                <p>Email: quincymaynor@gmail.com</p>
            </section>
            <section class="button">
                <a href="https://github.com/quincymaynor">GitHub: quincymaynor</a>
            </section>
        </div>
      </footer>
    </div>
  );
}
