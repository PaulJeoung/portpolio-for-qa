import React from "react";
import { FaBootstrap, FaCode, FaHtml5, FaReact, FaLink, FaNetworkWired, FaLine, FaCreditCard, FaMobileAlt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import ServiceItem from "./ServiceItem";

const serviceData = [
  {
    id: 1,
    icon: <FaLink />,
    title: "크립티드, 미디움",
    workingdate: "2022.09 ~ 2024.04 (1년 7개월)",
    description:
      "주요업무 : 블록체인 기반의 자체 코인 서비스 검증 및 테스트",
  },
  {
    id: 2,
    icon: <FaNetworkWired />,
    title: "솔메소프트",
    workingdate: "2021.03 ~ 2022.09 (1년 6개월)",
    description:
      "주요 업무 : SKT 테스트 베드의 테스트 환경 구성 지원 및 주/야간 기지국 펌웨어 업데이트 지원",
  },
  {
    id: 3,
    icon: <FaLine />,
    title: "티벨",
    workingdate: "2020.05 ~ 2021.02 (11개월)",
    description:
      "주요 업무 : 고객사(LINE)의 정산 시스템의 테스트 및 업무 협의",
  },
  {
    id: 4,
    icon: <FaBootstrap />,
    title: "BTI Solutions",
    workingdate: "2018.10 ~ 2020.03 (1년 5개월)",
    description:
      "주요 업무 : 필드테스트 및 펌웨어 확인, 구글인증 업무 지원, 직원 입문 교육",
  },
  {
    id: 4,
    icon: <FaCreditCard />,
    title: "코이닉스, 모지도코화이어코리아",
    workingdate: "2015.06 ~ 2018.05 (2년 11개월)",
    description:
      "주요 업무 : 사내 인프라 관리, 해외 고객사의 모바일 Gateway API 컨트롤러 개발 및 앱 검증, 산출물 문서 작성",
  },
  {
    id: 4,
    icon: <FaReact />,
    title: "에스케이플래닛",
    workingdate: "2013.02 ~ 2015.02 (2년 1개월)",
    description:
      "주요 업무 : 사내 서비스 플랫폼 들에 대한 개발 사전 검증 및 데이터 수집",
  },
  {
    id: 5,
    icon: <FaMobileAlt />,
    title: "아이엔씨엠",
    workingdate: "2009.10 ~ 2011.08 (1년 10개월)",
    description:
      "주요 업무 : 피쳐폰, 스마트폰 모바일 및 IP 전화기 단말기 기능 테스트, 테스트케이스 유지보수",
  },
];

const Service = () => {
  return (
    <section className="pb-10">
      <div className="pl-5 ml-5 mt-5 text-lg font-medium text-gray-800 mb-2">Total Carrer : 12년 3개월</div>
      <div className="flex flex-wrap md:px-4">
        {serviceData.map((service, id) => (
          <ServiceItem service={service} key={id} />
        ))}
      </div>
    </section>
  );
};

export default Service;
