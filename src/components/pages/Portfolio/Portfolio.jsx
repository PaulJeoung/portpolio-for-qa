import React from "react";
import image1 from "../../../images/portfolio/project-01.jpg";
import image2 from "../../../images/portfolio/project-02.jpg";
import image3 from "../../../images/portfolio/project-03.jpg";
import image4 from "../../../images/portfolio/project-04.jpg";
import image5 from "../../../images/portfolio/project-05.jpg";
import image6 from "../../../images/portfolio/project-06.jpg";
import image7 from "../../../images/portfolio/project-07.jpg";

import PortfolioItem from "./PortfolioItem";

const portfolioData = [
  {
    id: 1,
    image: image1,
    title: "블록체인 기반 서비스 및 메인넷 지갑 검증",
    link: "https://yapyap-engineer.notion.site/Trading-Bot-1ab228727bfa80799249c30f1f3ddf5a",
    description:
      "블록체인 메인넷에서 Defi 서비스를 운용함에 있어 내부 수익의 목적 및 시장 안정화를 위해 Trading Bot 시스템을 개발 하고 이를 테스트넷 환경에서 검증 하기 위한 데이터 정합성 업무 수행",
  },
  {
    id: 2,
    image: image2,
    title: "모바일 & 웹 서비스 테스트 환경 구축 및 검증",
    link: "https://yapyap-engineer.notion.site/Postman-1ab228727bfa809eb9c3d954647f1413",
    description:
      "비즈니스 로직 흐름을 모두 충족하는 Postman 테스트 환경 구성",
  },
  {
    id: 3,
    image: image3,
    title: "테스트 횐경에서의 성능 측정",
    link: "https://yapyap-engineer.notion.site/jmeter-1ab228727bfa8004b718d88dbf05b9c9",
    description:
      "블록체인 메인넷에 Defi 시스템을 적용 하기 전, 블록당 최대 txs 처리량 확인 및 메인넷 ↔ Defi 간 응답 속도  성능 확인",
  },
  {
    id: 4,
    image: image4,
    title: "대용량 서버 데이터 로그마스크 자동화 처리",
    link: "https://yapyap-engineer.notion.site/Teraterm-1ab228727bfa80daaac4d6379d37bad8",
    description:
      "기지국 내의 DU, MMU 등의 장비 내 장애 로그를 스크립트를 이용해 로컬 환경으로 추출",
  },
  {
    id: 5,
    image: image5,
    title: "모바일기기의 전력소모량 측정",
    link: "https://passorfail.tistory.com/41",
    description:
      "통신사에 embeded 되어 출시되는 앱서비스의 전력 소모량을 측정 후 전력 효율성 개선 (Agilent 멀티메터)",
  },
  {
    id: 6,
    image: image6,
    title: "페이지 정보 크롤링 자동화 적용",
    link: "https://passorfail.tistory.com/184",
    description:
      "파이썬을 이용한 데이터 크롤링 후 데이터 정제",
  },
  {
    id: 7,
    image: image7,
    title: "API 테스트용 로컬 서버",
    link: "https://passorfail.tistory.com/187",
    description:
      "연습용 Restful API 구현 (로그인 기능 추가중), API 테스트 및 Selenum 자동화 기능 연습",
  },
];

const Portfolio = () => {
  return (
    <section className="pb-10">
      <div className="flex flex-wrap md:px-4">
        {portfolioData.map((portfolio, id) => (
          <PortfolioItem portfolio={portfolio} key={id} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
