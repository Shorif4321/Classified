// @ts-nocheck
import React from 'react';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { GoPrimitiveDot } from 'react-icons/go';
import '../../styles/ChatBox.css';
import { MdCall } from 'react-icons/md';
import Button from '../util/Button';

const ChatBox = function () {
  return (
    <div className="chat-box border rounded row">
      <ChatContacts />
      <ChatMessages />
    </div>
  );
};

const ChatContacts = function () {
  return (
    <div className="col-4 chat-contacts">
      <div className="p-3 border-bottom">My Chats</div>
      <div className="p-3 contacts">
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
      </div>
    </div>
  );
};

const Contact = function () {
  return (
    <div className="p-3 border-bottom">
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <img src="https://via.placeholder.com/50" alt="John" className="rounded-circle" />
          <div className="ms-3">
            <span className="fw-bold">John Doe</span>
            <br />
            <small className="text-muted">
              <b>You:</b>
              {' '}
              Hey John!
            </small>
          </div>
        </div>
        <div>
          <BiDotsVerticalRounded style={{ fontSize: '30px' }} />
        </div>
      </div>
    </div>
  );
};

const ChatMessages = function () {
  return (
    <div className="col-8 border-start chat-messages">
      <Header />
      <Messages />
      <Input />
    </div>
  );
};

const Header = function () {
  return (
    <div className="p-3 border-bottom d-flex justify-content-between">
      <div>
        <img src="https://via.placeholder.com/30" alt="John" className="rounded-circle me-2" />
        <span className="fw-bold">John Doe</span>
      </div>
      <div>
        <span>
          <GoPrimitiveDot style={{ color: '#00EE00' }} />
          {' '}
          Active
        </span>
        <MdCall className="mx-2 rounded-circle p-1" style={{ backgroundColor: '#eee', fontSize: '30px' }} />
      </div>
    </div>
  );
};

const Messages = function () {
  return (
    <div className="p-3 messages">
      <Message text="Hello" align="right" />
      <Message text="Hi" align="left" />
      <Message text="Hello" align="right" />
      <Message text="Hi" align="left" />
      <Message text="Hello" align="right" />
      <Message text="Hi" align="left" />
      <Message text="Hello" align="right" />
      <Message text="Hi" align="left" />
      <Message text="Hello" align="right" />
      <Message text="Hi" align="left" />
      <Message text="Hello" align="right" />
      <Message text="Hi" align="left" />
      <Message text="Hello" align="right" />
      <Message text="Hi" align="left" />
    </div>
  );
};

const Message = function ({ align, text }) {
  const style = {
    float: align, clear: 'both', background: align === 'left' ? 'lightgrey' : '#0089ff', color: align === 'left' ? '#000' : '#fff', borderRadius: '2em',
  };
  return (
    <div style={style} className="message my-2 px-3 py-1">
      {text}
    </div>
  );
};

const Input = function () {
  return (
    <div className="p-3 border-top">
      <form onSubmit={(e) => e.preventDefault()} className="d-flex align-items-center justify-content-between">
        <input type="text" className="form-control" style={{ borderRadius: '2em', marginRight: '-40px' }} />
        <Button style={{ borderRadius: '2em', padding: '8px 40px' }}>Send</Button>
      </form>
    </div>
  );
};

export default ChatBox;
