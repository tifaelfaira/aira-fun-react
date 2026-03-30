import './custom.css';

// Child Component 1: ProfilePicture
function ProfilePicture() {
    return (
        <div className="profile-picture">
            <img 
                src="/aii.jpeg" 
                alt="Profile" 
                className="avatar"
            />
        </div>
    );
}

// Child Component 2: FullName
function FullName({ name, nickname }) {
    return (
        <div className="name-section">
            <h2 className="full-name">{name}</h2>
            <p className="nickname">"{nickname}"</p>
        </div>
    );
}

// Child Component 3: ContactInfo
function ContactInfo({ email, phone, address }) {
    return (
        <div className="contact-info">
            <h3>📞 Kontak</h3>
            <p>📧 {email}</p>
            <p>📱 {phone}</p>
            <p>📍 {address}</p>
        </div>
    );
}

// Child Component 4: Education
function Education({ school, major, year }) {
    return (
        <div className="education">
            <h3>🎓 Pendidikan</h3>
            <p><strong>{school}</strong></p>
            <p>{major}</p>
            <p>{year}</p>
        </div>
    );
}

// Child Component 5: Skills
function Skills({ skills }) {
    return (
        <div className="skills">
            <h3>⚡ Skill</h3>
            <div className="skills-list">
                {skills.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                ))}
            </div>
        </div>
    );
}

// Child Component 6: SocialMedia
function SocialMedia({ socials }) {
    return (
        <div className="social-media">
            <h3>🌐 Sosial Media</h3>
            <div className="social-links">
                {socials.map((social, index) => (
                    <a 
                        key={index} 
                        href={social.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="social-link"
                    >
                        {social.platform}
                    </a>
                ))}
            </div>
        </div>
    );
}

// Parent Component: BiodataDiri
export default function BiodataDiri() {
    // Data untuk props
    const userData = {
        name: "Roujwa Tifaelfaira NL",
        nickname: "Aira",
        email: "aira@gmail.com",
        phone: "+62 812 6690 3256",
        address: "Pekanbaru, Riau",
        school: "Politeknik Caltex Riau",
        major: "Sistem Informasi",
        year: "2024 - Sekarang",
        skills: ["Ngoding", "Data analyst", "HTML/CSS", "Git", "Node.js", "Tailwind CSS"],
        socials: [
            { platform: "GitHub", link: "https://github.com/aira" },
            { platform: "LinkedIn", link: "https://linkedin.com/in/aira" },
            { platform: "Instagram", link: "https://instagram.com/aira" },
            { platform: "facebook", link: "https://facebook.com/aira" },
            { platform: "tiktok", link: "https://tiktok.com/aira" },
            { platform: "twitter", link: "https://twitter.com/aira" }
        ]
    };

    return (
        <div className="biodata-card">
            <ProfilePicture />
            <FullName 
                name={userData.name} 
                nickname={userData.nickname}
            />
            <ContactInfo 
                email={userData.email}
                phone={userData.phone}
                address={userData.address}
            />
            <Education 
                school={userData.school}
                major={userData.major}
                year={userData.year}
            />
            <Skills skills={userData.skills} />
            <SocialMedia socials={userData.socials} />
        </div>
    );
}