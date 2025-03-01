// src/pages/ContactPage.jsx
import React from 'react';
import Header from '../components/common/Header/Header.jsx';
import Footer from '../components/common/Footer/Footer.jsx';
import CustomModal from '../components/common/Modal/Modal.jsx';

const ContactPage = () => {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <div>
      <Header />
      <main className="container my-5">
        <h1>Contact Us</h1>
        <button className="btn btn-primary" onClick={() => setShowModal(true)}>
          Open Contact Form
        </button>
        <CustomModal
          show={showModal}
          onHide={() => setShowModal(false)}
          title="Contact Form"
        >
          <p>Fill out the form below to contact us.</p>
        </CustomModal>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;