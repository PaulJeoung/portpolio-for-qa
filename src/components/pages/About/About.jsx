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
              IT 분야에서 10여년 넘게 다양한 도메인에서 경력을 쌓은 정병오 라고 합니다.
              모바일, 플랫폼, 블록체인 등의 SW 검증을 했고, 통신사 기지국 운영, 그리고 프로토타입의 개발 경험과 개발자교육을 통해 프론트엔드, 백엔드 시스템간의 이해를 하고 있습니다.
              모바일기기는 통신사 요구사항을 기준으로 하는 피쳐폰 부터 안드로이드 단말까지 망연동과 WIPI TEST, GPS, Callflow 등 기능 뿐만 아니라 네트워크 전반에 대한 검증 경험이 있으며,
              플랫폼은 모바일플랫폼, 이커머스, 핀테크등 다양한 형태의 플랫폼 서비스 경험을 가지고, 테스트 뿐만 아니라 개발 설계 부터 QA 관련 문서 작성, 테스트 환경 구축, UI기능 및 성능 검증, 결과에 대한 리포트 고객에게 제품 설명 및 인수 테스트 까지 제안부터 계약 종료까지 필요한 전반적인 과정에 참여한 경험이 있습니다.
              개발 능력은 초급단계 수준으로 Profile, Setting등의 API 컨트롤러 개발을 했었고, 개발자 교육을 통해 자바와 스프링부트를 이용한 백엔드/서버 개발 및 React와 bootstrap을 활용한 프론트엔드 개발 과정에도 참여 했습니다.
              전문적인 수준은 아니지만 Jmeter를 이용한 성능측정, Postman을 이용한 API 자동화, Selenium을 서비스 자동화 제작 경험을 가지고 있습니다. 최근에는 ChatGPT를 이용하여 PRA와 Python으로 다양한 자동화시스템 적용 교육을 받았습니다.
            </p>
            <p className="text-sm text-gray-400 leading-6 mb-3">
            I have over 10 years of experience in various domains in the IT field.
            I have verified SW such as mobile, platform, and blockchain, and I have an understanding of front-end and back-end systems through experience in operating base stations for telecommunication companies, developing prototypes, and developer training.
            For mobile devices, I have experience in verifying not only network connectivity and WIPI TEST, GPS, and Callflow functions, but also the entire network, from feature phones to Android terminals based on telecommunication company requirements.
            For platforms, I have experience in various forms of platform services such as mobile platforms, e-commerce, and fintech. In addition to testing, I have experience in developing design, writing QA-related documents, building test environments, verifying UI functions and performance, and reporting results to customers, explaining products to them, and accepting tests, and participating in the entire process from proposal to contract termination.
            My development skills are at the beginner level, and I have developed API controllers such as Profile and Setting, and through developer training, I have participated in back-end/server development using Java and Spring Boot, and front-end development using React and Bootstrap. Although not at a professional level, I have experience in performance measurement using Jmeter, API automation using Postman, and service automation production using Selenium. Recently, I received training in applying various automation systems using PRA and Python using ChatGPT.
            </p>
            <p>
              <a href="https://drive.google.com/file/d/1aSs4FaEItPETTjBebivSlCVQZbj7oFC-/view?usp=drive_link"
                className="inline-block mt-3 mb-3 rounded bg-purple-600 text-center border-0 py-2 px-6 text-white leading-7 tracking-wide hover:bg-purple-800"
                download="Resume" target="_blank" >
                정병오의 자세한 소개서 다운받기
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
