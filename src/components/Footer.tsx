import linkedinIcon from "../assets/linkedin-icon.svg";
import githubIcon from "../assets/github-icon.svg";
import webIcon from "../assets/web-icon.svg";

const Footer = () => {
  return (
    <div className="fixed bottom-0 z-10 mt-16 flex h-24 w-full items-center justify-center bg-black">
      <div>
        <div className="mb-2 flex gap-4 text-white">
          <img src={linkedinIcon} alt="linkedinIcon" />
          <img src={githubIcon} alt="githubIcon" />
          <img src={webIcon} alt="webIcon" />
        </div>
        <p className="text-center font-light text-white">Made by R2</p>
      </div>
    </div>
  );
};

export default Footer;
