import React from "react";
import {
  FaBehance,
  FaDribbble,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaSkype,
  FaTwitter,
  FaBlog,
  FaPencilAlt,
} from "react-icons/fa";
import profile from "../../../images/profile.jpg";

const socials = [
  {
    id: 1,
    icon: <FaGithub />,
    link: "https://github.com/PaulJeoung",
  },
  {
    id: 2,
    icon: <FaBlog />,
    link: "https://passorfail.tistory.com/",
  },
  // {
  //   id: 3,
  //   icon: <FaPencilAlt />,
  //   link: "https://yapyap-engineer.notion.site/QA-Engineer-Applicant-1ab228727bfa80f6a229ef279ce8fa4d?pvs=74",
  // },
  // {
  //   id: 4,
  //   icon: <FaInstagram />,
  //   link: "#0",
  // },
  // {
  //   id: 5,
  //   icon: <FaBehance />,
  //   link: "#0",
  // },
  // {
  //   id: 6,
  //   icon: <FaDribbble />,
  //   link: "#0",
  // },
  // {
  //   id: 7,
  //   icon: <FaSkype />,
  //   link: "#0",
  // },
  // {
  //   id: 7,
  //   icon: <FaTwitter />,
  //   link: "#0",
  // },
];

const Sidebar = () => {
  return (
    <aside className="sticky top-0 bg-white md:mx-8 lg:mx-4 mb-8 p-6 shadow-md rounded-md -mt-40">
      <div className="w-24 h-24 rounded-md overflow-hidden mx-auto mb-5">
        <img src={profile} alt="shafiqhammad" className="w-full" />
      </div>
      <div className="text-center">
        <h1 className="text-xl text-gray-800 font-bold mb-1">Jeoung Byoungow</h1>
        <p className="text-sm text-gray-400 mb-3">
          Full Stack QA Engineer has at
          <a href="#0" className="text-purple-600 pl-1">
            over 10 years
          </a>
        </p>
        <a
          href="https://open.kakao.com/o/sylSc0lh"
          className="inline-block mb-3 rounded bg-purple-600 text-center border-0 py-2 px-6 text-white leading-7 tracking-wide hover:bg-purple-800"
          download="Resume" target="_blank"
        >
          카카오톡 오픈채팅
        </a>
        <ul className="flex flex-wrap justify-center">
          {socials.map((social, id) => (
            <SocialIcon social={social} key={id} />
          ))}
        </ul>
      </div>
      <div className="text-start pt-4">
        <h3 className="text-md mb-2 uppercase font-medium text-gray-800">
          About Me
        </h3>
        <p className="text-gray-400 text font-dark leading-relaxed">
          지금까지 10년 이상의 SW QA와 네트워크 운영, 개발 경험을 가진 Fullstack Engineer 입니다. 
          블록체인, 이커머스플랫폼, 광고정산시스템, 웹서비스, 모바일 어플리케이션, 핀테크, 모바일네트워크, 유무선단말기 등 다양한 도메인에서 품질을 개선해 온 경험을 바탕으로, 서비스의 안정성과 자동화를 통해 신뢰성을 보장 하는데 더욱 기여 하는것이 목표 입니다. 
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;

const SocialIcon = (props) => {
  const { icon, link } = props.social;
  return (
    <li className="m-2">
      <a
        href={link} target="_blank" rel="noopener noreferrer"
        className="w-8 h-8 bg-purple-100 rounded text-purple-800 flex items-center justify-center hover:text-white hover:bg-purple-600"
      >
        {icon}
      </a>
    </li>
  );
};
