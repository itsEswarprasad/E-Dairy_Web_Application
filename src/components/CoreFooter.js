import { Footer } from "react-daisyui";

function LandingFooter(){
    return (
        <Footer className="p-10 bg-zinc-100">
            <div>
                <img src="/img/logo-blue.svg" alt="MindGarden" className="w-10 h-10"/>
                <p>
                E-Dairy Web Application
                    <br />
                   Convert your thoughts in a page which is accessible anytime
                </p>
            </div>
            <div>
                <Footer.Title>Getting Started</Footer.Title>
                <a href="/dashboard" className="link link-hover">Dashboard</a>
                <a href="/login" className="link link-hover">Login</a>
                <a href="/register" className="link link-hover">Register</a>
            </div>
            <div>
                <Footer.Title>Useful Links</Footer.Title>
                <a href="#about" className="link link-hover">About</a>
                
                <a href="#contact" className="link link-hover">Contact</a>
            </div>
        </Footer>
    );
}

export default LandingFooter;