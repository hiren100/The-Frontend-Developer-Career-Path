import logo from './assets/react.svg';
import './App.css';

function App() {
  return (
    <div className="business-container">
      <div className="business-card">
        <div className="business-img">
            <img src="https://i.pravatar.cc/600" alt=""/>
        </div>
        <div className="business-content">
            <div className="card-bio">
                <h4 className="card-name">Laura Smith</h4>
                <h6 className="card-designation">Frontend Developer</h6>
                <a href="#" className="card-website" target="_blank">laurasmith.website</a>
            </div>
            <div className="card-buttons">
                <button className="email-btn">
                    Email
                </button>
                <button className="linkedin-btn">
                    LinkedIn
                </button>                    
            </div>
            <div className="card-texts">
                <h5>About</h5>
                <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                <h5>Interests</h5>
                <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>                   
            </div>
        </div>
      <div className="business-footer">
        Social media links will come here...
      </div>
      </div>
    </div>
  );
}

export default App;
