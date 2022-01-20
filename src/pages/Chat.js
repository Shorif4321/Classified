import React from 'react';
import ChatBox from '../components/chat/ChatBox';
import Footer from '../components/global/Footer';
import Navbar from '../components/global/Navbar';
import NavDropdown from '../components/global/NavDropdown';

const Chat = function () {
  document.title = 'Chat - Classified';
  return (
    <>
      <Navbar />
      <NavDropdown />
      <main className="chat mb-4">
        <div className="container">
          <ChatBox />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Chat;
