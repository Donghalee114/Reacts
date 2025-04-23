import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import protfolio_1 from './assets/portfolio_1.jpg';
import ProjectCard from './projectCard';
import './App.css';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      {/* 상단 메뉴바 */}
      <nav style={{
        position: "fixed",
        top: 0,
        width: "100%",
        height: "60px",
        backgroundColor: "#222",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        fontSize: "1.1rem",
        fontWeight: "bold",
        zIndex: 1000,
      }}>
        <div onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>About</div>
        <div onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}>Skills</div>
        <div onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>Projects</div>
        <div onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Contact</div>
      </nav>

      {/* Hero 섹션 (화면 전체) */}
      <div style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden"
      }}>
        <img
          src={protfolio_1}
          alt="portfolio"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block"
          }}
        />
        <div style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          fontSize: "3rem",
          fontWeight: "bold",
          textShadow: "2px 2px 8px rgba(0,0,0,0.5)",
          background: "rgba(0,0,0,0.4)",
          padding: "20px 40px",
          borderRadius: "10px",
          textAlign: "center"
        }}>
          안녕하세요!<br />개발자를 꿈꾸는 이동하입니다.
        </div>
      </div>

      {/* ⬇️ Hero 섹션 이후 본문 시작 ⬇️ */}
      <div style={{ paddingTop: "60px" }}>

        {/* About Me */}
        <div id="about" data-aos="fade-right" style={{
          width: "100%",
          background: "#F9F9F9",
          color: "#333",
          padding: "80px 20px",
          textAlign: "center"
        }}>
          <h2 style={{ fontSize: "2.5rem", marginBottom: "30px" }}>About Me</h2>
          <p style={{ fontSize: "1.2rem", maxWidth: "700px", margin: "0 auto" }}>
            저는 삼일공업고등학교 사물인터넷과에 재학 중이며, 풀스택 개발자를 목표로 공부 중입니다.
            React와 Node.js로 다양한 프로젝트를 제작하며 실력을 키우고 있습니다.
          </p>
          <div style={{
            marginTop: "40px",
            display: "flex",
            justifyContent: "center",
            gap: "40px",
            fontSize: "1rem",
            flexWrap: "wrap"
          }}>
            <div>👤 이름 : 이동하</div>
            <div>🎂 생년월일 : 2007.05.10</div>
            <div>📞 연락처 : 010-4231-6732</div>
            <div>📧 이메일 : donghalee114@gmail.com</div>
          </div>
        </div>

        {/* Skills */}
        <div id="skills" data-aos="fade-right" style={{
          width: "100%",
          padding: "80px 20px",
          background: "#eeeeee",
          color: "#222",
          textAlign: "center"
        }}>
          <h1 style={{ fontSize: "2.5rem", marginBottom: "40px" }}>🛠️ Skills</h1>
          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: "100px",
            fontSize: "1.2rem",
            flexWrap: "wrap"
          }}>
            <div>
              <h3>🔧 FrontEnd</h3>
              <p>HTML, CSS, JavaScript, TypeScript, React</p>
            </div>
            <div>
              <h3>⚙️ BackEnd</h3>
              <p>Node.js, Express</p>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div id="projects" data-aos="fade-right" style={{
          width: "100%",
          padding: "80px 20px",
          background: "#333321",
          color: "white",
          textAlign: "center"
        }}>
          <h1 style={{ fontSize: "2.5rem", marginBottom: "40px" }}>📁 Projects</h1>
          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: "100px",
            flexWrap: "wrap"
          }}>
            <ProjectCard
              title="My Board"
              desc="React 와 Node.js를 활용해서 만든 간단한 게시판입니다."
              link="https://ty-borad.vercel.app/"
            />
            <ProjectCard
              title="LDH Portfolio"
              desc="React를 사용해서 만든 포트폴리오 사이트입니다. 바로 이 사이트입니다!"
              link="https://reacts-blond.vercel.app/"
            />
          </div>
        </div>

        {/* Contact */}
        <div id="contact" data-aos="fade-up" style={{
          background: "#222",
          color: "white",
          padding: "80px 20px",
          textAlign: "center"
        }}>
          <h2 style={{ fontSize: "2rem" }}>📬 Contact</h2>
          <p>궁금한 점이나 협업 제안은 아래 이메일로 연락 주세요!</p>
          <p style={{ fontSize: "1.2rem", marginTop: "10px" }}>📧 donghalee114@gmail.com</p>
        </div>

      </div>
      {/* ⬆️ 본문 끝 ⬆️ */}
    </>
  );
}

export default App;
