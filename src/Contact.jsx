function Contact({ name, email, phone, profile_picture }) {
  return (
    <div className="contact-card">
      <div className="avatar-wrapper">
        <img src={profile_picture} alt={name} className="pfp" />
      </div>

      <div className="contact-header">
        <h2 className="contact-name">{name}</h2>
      </div>

      <div className="contact-details">
        <a href={`mailto:${email}`} className="contact-item">
          <div className="icon-box">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
          </div>
          <div className="item-text">
            <span className="item-label">Email</span>
            <span className="item-value">{email}</span>
          </div>
        </a>

        <a href={`tel:${phone.replace(/\s+/g, '')}`} className="contact-item">
          <div className="icon-box">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
          </div>
          <div className="item-text">
            <span className="item-label">Phone</span>
            <span className="item-value">{phone}</span>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Contact;