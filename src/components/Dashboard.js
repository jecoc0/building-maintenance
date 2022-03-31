import React, { useState } from 'react';
import Header from './Header';
import Nav from './Nav';
import Page from './Page';
import Footer from './Footer';

export default function Dashboard() {
<<<<<<< HEAD
  const [error, setError] = useState('');
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
=======
>>>>>>> develop
  const [currentPage, setCurrentPage] = useState('/');

  return (
    <>
      <Header>
        <Nav setCurrentPage={setCurrentPage}></Nav>
      </Header>
      <Page currentPage={currentPage}></Page>
      <Footer></Footer>
    </>
  );
}
