import React from "react";
import Skills from "./Skills/Skills";

const About = () => {
  return (
    <section className="py-8">
      <div className="flex flex-wrap md:px-4">
        <div className="w-full">
          <div className="md:mx-4">
            <h3 className="text-2xl text-gray-800 font-bold mb-4">Who am I?</h3>
            <p className="text-sm text-gray-400 leading-6 mb-3">
              모바일 기기, 기지국 시스템, 웹/앱 서비스, 핀테크, 정산 플랫폼, 블록체인 등 다양한 도메인에서 테스트, 검증, 운영, 개발까지 폭넓은 경험을 쌓아왔습니다.
              이를 바탕으로 고품질의 제품을 출시하고, 검증 과정을 보다 효율적으로 개선하는 방법을 끊임없이 고민하고 실현하고 있습니다.
              저는 QA가 프로젝트의 시작부터 끝까지 함께해야 한다고 생각합니다. 
              설계부터 출시까지, 개발 프로세스 전반에서 QA 전략을 수립하고, 계획 • 설계 • 구현 • 테스트 • 결과 분석까지의 반복적인 과정이 체계적으로 녹아들 수 있도록 노력 하고 있습니다.
              또한, 반복되는 작업의 효율성을 높이기 위해 자동화 환경을 구축하고 있습니다. 단순한 UI 테스트뿐만 아니라, 제품 내 다양한 자원을 활용해 검증 활동을 최적화하는 데 집중하고 있습니다. 
              이를 위해 다양한 툴과 개발 언어를 학습하며 능동적으로 블로그나 커뮤니티에서 활동 하고 있습니다.
            </p>
            <p className="text-sm text-gray-400 leading-6 mb-3">
              We have gained extensive experience in testing, verification, operation, and development in various domains such as mobile devices, base station systems, web/app services, fintech, settlement platforms, and blockchains.
              Based on this, we are constantly thinking about and implementing ways to release high-quality products and improve the verification process more efficiently.
              I believe that QA should be with the project from the beginning to the end.
              We are establishing QA strategies throughout the development process, from design to release, and are working to systematically integrate the repetitive processes from planning, design, implementation, testing, and result analysis.
              In addition, we are building an automation environment to increase the efficiency of repetitive tasks. In addition to simple UI testing, we are focusing on optimizing verification activities by utilizing various resources within the product.
              To this end, we are learning various tools and development languages ​​and actively participating in blogs and communities.
            </p>
            <p className="text-lg text-gray-400 leading-6 mb-3">
              이력서 & 자기소개서 다운로드 🖇️ 

            </p>
            <p>
              <a href="https://drive.google.com/file/d/1TetU34RUef_ZJPTQ4cNfXRD_3BKvfjHO/view?usp=sharing"
                className="inline-block mt-3 mb-3 rounded bg-blue-600 text-center border-0 py-2 px-6 text-white leading-7 tracking-wide hover:bg-purple-800"
                download="Resume" target="_blank" rel="noopener noreferrer">
                📄 이력서.pdf
              </a>
              <span>&nbsp;&nbsp;</span>
              <a href="https://drive.google.com/file/d/1qhwwXh50Qykzw1IzDk6XOFxLQ3JggJTb/view?usp=sharing"
                className="inline-block mt-3 mb-3 rounded bg-yellow-600 text-center border-0 py-2 px-6 text-white leading-7 tracking-wide hover:bg-purple-800"
                download="Resume" target="_blank" rel="noopener noreferrer">
                📄 자기소개서.pdf
              </a>
            </p>
          </div>
          <Skills />
        </div>
      </div>
    </section>
  );
};

export default About;
