import { FaGithub, FaLinkedin } from 'react-icons/fa';
import {
  FiHome,
  FiUser,
  FiFolder,
  FiCode,
  FiMail,
} from "react-icons/fi";
import myPhoto from "../assets/My_Photo.jpeg";

const navigation = [
  { label: "Home", href: "#home", icon: FiHome },
  { label: "About", href: "#about", icon: FiUser },
  { label: "Projects", href: "#projects", icon: FiFolder },
  { label: "Skills", href: "#skills", icon: FiCode },
  { label: "Contact", href: "#contact", icon: FiMail },
];

function sidebar() {
  return (
    <aside className="sidebar">
      <div className="profile">
        <img
      src={myPhoto}
      alt="Foto profil"
      className="profile-avatar"
    />

        <p className="profile-role">
          Frontend Developer
        </p>

        <h2 className="profile-name">
          Muhammad Iqbal Fadhilah
        </h2>
      </div>

      <div className="profile-socials">
        <a
          href="https://github.com/IqbalFadhilah"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <FaGithub size={18} />
        </a>

        <a
          href="https://www.linkedin.com/in/iqbalfadhilah"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={18} />
        </a>
      </div>

      <nav className="sidebar-nav">
        {navigation.map((item) => {
          const Icon = item.icon;

          return (
            <a
              key={item.label}
              href={item.href}
              className="sidebar-link"
            >
              <Icon size={18} strokeWidth={1.8} />
              <span>{item.label}</span>
            </a>
          );
        })}
      </nav>

    </aside>
  );
}

export default sidebar;
