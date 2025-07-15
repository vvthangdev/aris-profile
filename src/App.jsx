import './styles/App.css';
// import VuVanThangImage from '/assets/images/VuVanThang.jpg';

function App() {
  return (
    <main
      className="profile-container"
      role="main"
      aria-label="Profile Card of Vu Van Thang"
      tabIndex="0"
    >
      <div className="profile-row">
        <div className="profile-avatar" tabIndex="0">
          <img
            src="./assets/images/VuVanThang.jpg"
            alt="Vu Van Thang's Avatar"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="profile-info">
          <h1 className="profile-name">Vu Van Thang</h1>
          <div className="profile-nickname">Aris</div>
          <p className="profile-description">
            Hello everyone! I'm Vu Van Thang, a 4th-year student at Hanoi
            University of Science and Technology. Passionate about technology,
            creativity, and always eager to learn new things.
          </p>
        </div>
      </div>
      <nav className="social-links" aria-label="Social Media Links">
        <a
          href="https://github.com/vvthangdev"
          target="_blank"
          rel="noopener"
          aria-label="GitHub Profile"
        >
          <i className="fa-brands fa-github text-2xl"></i> GitHub
        </a>
        <a
          href="https://www.facebook.com/vuthawng/"
          target="_blank"
          rel="noopener"
          aria-label="Facebook Profile"
        >
          <i className="fa-brands fa-facebook text-2xl"></i> Facebook
        </a>
        <a
          href="https://www.instagram.com/vuthawng/"
          target="_blank"
          rel="noopener"
          aria-label="Instagram Profile"
        >
          <i className="fa-brands fa-instagram text-2xl"></i> Instagram
        </a>
        <a
          href="https://www.tiktok.com/@vuthawng?lang=vi-VN"
          target="_blank"
          rel="noopener"
          aria-label="TikTok Profile"
        >
          <i className="fa-brands fa-tiktok text-2xl"></i> TikTok
        </a>
      </nav>
    </main>
  );
}

export default App;
