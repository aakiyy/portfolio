import React from 'react';

const Contact: React.FC = () => {
  return (
    <section>
      <h2>Contact</h2>
      <p>If you would like to get in touch, feel free to reach out via email or connect with me on LinkedIn.</p>
      <p>Email: <a href="mailto:your.email@example.com">your.email@example.com</a></p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">My LinkedIn Profile</a></p>
    </section>
  );
}

export default Contact;