import React, { useState } from "react";
import { FaBootstrap, FaReact, FaLink, FaNetworkWired, FaLine, FaCreditCard, FaMobileAlt, FaMicrochip } from "react-icons/fa";
// import { SiTailwindcss } from "react-icons/si";
import ServiceItem from "./ServiceItem";
import ServiceModal from "./ServiceModal";

const serviceData = [
  {
    id: 1,
    icon: <FaLink />,
    link: "/",
    title: "크립티드, 미디움",
    workingdate: "2022.09 ~ 2024.04 (1년 7개월)",
    description:
      "주요업무 : 블록체인 기반의 자체 코인 서비스 검증 및 테스트",
    project:
      `
기술 스택 및 도구 : python, selenium, appium, vscode, postman, jmeter

1. 블록체인 기반 검색, 송금 웹 플랫폼 검증 (2023.01 ~ 2024.04)
 • 메타마스크와의 송금, 출금 기능 연동 테스트
 • 수수료, 가격 변동 별 요율 정합성 검토
 • 거래기록 검색 컴포넌트 테스트
 • Explorer (검색) 용 자동화 테스트 환경 구축 및 검사 결과 데일리 리포트 적용

업무성과
1) Bridge (토큰입출금 웹 어플리케이션)/Explorer (거래내역 웹 어플리케이션) 시스템의 버전 안정화 및 릴리즈
2) Explorer 자동화 시스템 구축 및 테스트 리포트 슬랙 전송 구현

2. 블록체인 기반 지갑 어플리케이션 검증 (2023.01 ~ 2024.04)
• 메인넷 거래용 지갑 검증
• 메인넷 어플리케이션 AOS, iOS 기능 검증
• 블록체인 투표기능 및 보상 시스템 정합성 테스트

업무성과 : KSTADIUM (블록체인 코인 지갑 앱) 버전 안정화 및 릴리즈 (v0.9.46 ~ v0.12.5)

3. 메인넷을 이용한 DeFi 플랫폼 검증 (2023.01 ~ 2024.04)
• 유동성 풀을 이용한 DeFi 시스템 기능 및 데이터 정합성 테스트 (swap, staking)
• 테스트 환경 내 트레이딩 봇 가격 조정 자동화 시스템 구축 및 데이터 정밀도 검토

업무성과 : 
1) Atheneswap 신규 버전 출시
2) 테스트용 트레이딩 봇 개발 및 적용

4. Launchpad 플랫폼 검증 (2023.10 ~ 2024.04)
• 신규 IPO 토큰 유효성 검사 및 토큰 배포
• 전체 시스템에 대한 자동화 검증

업무성과 : Launchpad 신규 버전 출시
      `,
  },
  {
    id: 2,
    icon: <FaNetworkWired />,
    link: "/",
    title: "솔메소프트",
    workingdate: "2021.03 ~ 2022.09 (1년 6개월)",
    description:
      "주요 업무 : SKT 테스트 베드의 테스트 환경 구성 지원 및 주/야간 기지국 펌웨어 업데이트 지원",
    project:
      `
기술 스택 및 도구 : linux, shell script, teraterm, filezilla

1. SKT 테스트베드망 LTE/NR 기지국 시스템 운영 (2021.04 ~ 2022.09)
• 필드테스트를 위한 기지국 파라미터 세팅 및 테스팅 서버 로그 디버깅
• LTE, NR 기지국 고객 데이터 통계 분석 및 일일 보고
• 주/야간 시스템 긴급 펌웨어 패치 작업 (테스트베드, 상용기지국)

업무성과 : LTE, NR 기지국 파라미터 패치로 네트워크 속도 향상 및 성능 안정화
      `,
  },
  {
    id: 3,
    icon: <FaLine />,
    link: "/",
    title: "티벨",
    workingdate: "2020.05 ~ 2021.02 (11개월)",
    description:
      "주요 업무 : 고객사(LINE)의 정산 시스템의 테스트 및 업무 협의",
      project:
      `
기술 스택 및 도구 : postman, testrail, jira

1. 고객사의 광고 정산 시스템(LINE JP)의 신뢰성 및 정합성 검토 (2020.05 ~ 2021.03)
• 광고 정산 시스템 API 의 기능 및 데이터 검토
• 각 사용자별 과금 기준에 따른 광고 정산 금액 요율 적용 검토
• 고객사와 주기적인 기능 릴리즈 일정 마다 테스트전략 협의 및 커뮤니케이션

업무성과 : LINE JP 플랫폼 내 광고 정산 시스템의 버전 안정화 및 릴리즈
      `,
  },
  {
    id: 4,
    icon: <FaBootstrap />,
    link: "/",
    title: "BTI Solutions",
    workingdate: "2018.10 ~ 2020.03 (1년 5개월)",
    description:
      "주요 업무 : 필드테스트 및 펌웨어 확인, 구글인증 업무 지원, 직원 입문 교육",
      project:
      `
기술 스택 및 도구 : QXDM, QPST, linux, CTS, VTS
참고 : J1 트레이닝 비자 신분으로 1년 6개월간 미국 뉴저지에 거주 하며 근무

1. Samsung Device Field Verification Test 및 스마트폰 바이너리 적용(NJ 상주)
• 미국 통신사 (T-mobile)의 현지 망연동 테스트
• 미국 통신사 (Verizon)의 현지 망연동 테스트

업무성과 : 미국 통신사의 삼성 스마트폰 상용화 (A시리즈, S시리즈, 플립시리즈, 패드 등)

2. 인증, 데이터 부하 Testing, Log trace, 상용 바이너리 입고 작업
• CTS, VTS(구글 인증) 수행 후 현지 필드 문제점 수원 삼성 측에 리포트
• Data throughput, 배터리소모등 현지 환경 성능 테스트 및 통신사 제출용 바이너리 입고 작업

업무성과 : 측정 데이터를 기반으로 안정화 진행 및 크롬북 등 다양한 제품 상용화

3. 신입 직무기초 교육 담당
• 네트워크 기초 및 툴 사용법 교육

업무성과 : Junior 인력 onboarding
      `,
  },
  {
    id: 4,
    icon: <FaCreditCard />,
    link: "/",
    title: "코이닉스, 모지도코화이어코리아",
    workingdate: "2015.06 ~ 2018.05 (2년 11개월)",
    description:
      "주요 업무 : 사내 인프라 관리, 해외 고객사의 모바일 Gateway API 컨트롤러 개발 및 앱 검증, 산출물 문서 작성",
      project:
      `
기술 스택 및 도구 : SBM(PLM도구), MSSQL, Java, Spring, MySQL, Maven, Nexus, SVN, Postman, Jira, PCI-DSS인증, UL인증, Fortify
참고)
• 실제 개발업무는 3개월, 그외 기간은 QA 및 개발 지원 업무
• 모지도 퇴사 후 프리랜서로 진행 중이었던 프로젝트를 이어서 진행

1. Mobile Gateway API 의 스마트 월렛 컨트롤러 프로토타입 개발 (2017.10 ~ 2018.01)
• inbox, profile, setting 모듈의 API 컨트롤러 개발
• 모바일 앱 내 Tax payable 연동 데이터 연동 지원

업무성과 : twatllet v2.0 안드로이드 버전 출시

2. Telkomsel twallet 모바일 어플리케이션 검증 (2017.10 ~ 2018.05)
• 인도네시아 통신사의 embeded 앱 검증 및 배포 (v2.0 ~ v2.1)
• 인도네시아 Tax payable 연동 테스트

업무성과 : 인도네시아 twallet 모마일 지갑 v2.0, v2.1 상용화

3. Telkomsel VOC 업무 협의 (2017.12 ~ 2018.04)
• 구 버전에 대한 추후 이슈 처리 방법에 대한 고객사와의 이슈 관련 협의
• 버전 별 개발 문서 산출물 작성 및 관리

업무성과 : 인도네시아 twallet 모바일 지갑 v1.0 잔여 이슈 처리 및 Project close 일정 협의

4. 사내 결재 시스템 개발 및 운영 (Serena Business Management) (2015.06 ~ 2017.09)
• Serena Business Management 시스템 결재 프로세스 개발
• 보고서 기안 및 휴가 결재 시스템 유지 보수
• Raw 데이터베이스 현행화

업무성과 : 사내 시스템 구축 및 데이터 베이스 indexing 적용으로 데이터베이스 최적화

5. Mobile Gateway API 의 스마트 월렛 컨트롤러 프로토타입 개발 (2015.10 ~ 2015.12)
• inbox, profile 모듈의 API 컨트롤러 개발
• mobile 유저 데이터와 Admin 시스템 데이터 연동 지원
• 모바일 앱과 HCE 카드 데이터 연동 지원

업무성과 : twMP wallet v1.0 안드로이드 버전 출시

6. twMP twallet 모바일 어플리케이션 검증 (2015.09 ~ 2017.09)
• 대만 은행 연합 (TWMP) 모바일 지갑 어플리케이션 검증 및 배포
   • Wallet Gateway API ↔ HCE ↔ 카드 밴더사간 데이터 연동
   • Admin 관리 및 카드 연동 테스트
• 결제와 관련된 PCI DSS, Master카드 UL 인증 결과 보고서 작성 (결제 보안인증 툴 테스트)

업무성과 : 대만 twMP 모바일 지갑 v1.0 상용화

7. ADTC(고객사)과 업무 협의 (2015.11 ~ 2016.11)
• 고객사 이슈 관련 협의
• 대만 통신사 ATDC 의 이전 계약 종료를 위한 개발 문서 산출물 작성 및 업데이트

업무성과 : 대만 ADTC 어플리케이션 Project close 협의
      `,
  },
  {
    id: 4,
    icon: <FaReact />,
    link: "/",
    title: "에스케이플래닛",
    workingdate: "2013.02 ~ 2015.02 (2년 1개월)",
    description:
      "주요 업무 : 사내 서비스 플랫폼 들에 대한 개발 사전 검증 및 데이터 수집",
      project:
      `
기술 스택 및 도구 : Android Studio, iPhone Utility, Agilent 멀티메터, DSLA, Wireshark, Jira, Collalb valley

1. Tictoc 2.0 mVoIP sdk 탑재 검증 (2013.02 ~ 2015.02)
• mVoIP sdk DSLA 장비를 이용한 MOS 음성 및 코덱 성능 측정 및 테스트
• 해외 server간 latency 성능 평가 지원을 통한 네트워크 간 지연 튜닝
• 단말별 배터리 소모 및 sdk 효율성 테스트

업무성과 : 네트워크 음질 향상 및 Latency 안정화 기여, Tictoc v2.0 에 mVoIP sdk 탑재

2. T-map 4.0 VSM sdk 탑재 검증 (2014.10 ~ 2015.02)
• 벡터스트리밍맵의 Layer 레벨 별 이미지 데이터 성능 테스트 (로딩, 정확도, 품질)
• 샘플데이터 튜닝 필드 테스트 지원 (Rendering, GPS Accuracy)
• 단말별 배터리 소모 및 sdk 효율성 테스트

업무성과 : 소모 전류 안정화 및 T-map v4.0 에 VSM sdk 탑재

3. 사내 내재화 과제 업무 지원 (2013.02 ~ 2015.02)

과제1) play4me SDK 개발 지원
• Media streaming server 성능 측정
• 과제 결과 : 사내 리뷰 및 해외 성능 시연으로 스트리밍 Latency 최적화 라이브러리 개발 진행

과제 2) Geofence SDK 개발 지원
• 위치 기반 데이터 수집 및 sdk 안정화 데이터 분석
• 과제 결과 : OKcashbag 내 라이브러리로 탑재 협의

과제 3) One ID Token authentication SDK 개발지원
• Token 인증 프로토콜 Test
• 과제 결과 : 통합 로그인 토큰 라이브러리로 사용

과제 4) UltraSound SDK 개발지원
• 고주파 데이터 Field 수집
• 과제 결과 : Syrup 앱과의 협업 진행
      `,
  },
  {
    id: 5,
    icon: <FaMobileAlt />,
    link: "/",
    title: "아이엔씨엠",
    workingdate: "2009.10 ~ 2011.08 (1년 10개월)",
    description:
      "주요 업무 : 피쳐폰, 스마트폰 모바일 및 IP 전화기 단말기 기능 테스트, 테스트케이스 유지보수",
      project:
      `
기술 스택 및 도구 : Eclipse, Wireshark, WIPI Tools, QXDM, Jira, Collalb valley, Yammer

1. SKB 전용 IP 전화기 기능 검증 및 필드 테스트 (2009.10 ~ 2010.08)
• VoIP 인터넷 전화기 기능 검증
• JIG Tool 을 통한 펌웨어 패치 작업 및 VOC 처리
• Snipping 적용 및 패킷 부하 테스트

업무성과 : SKB VoIP IP 전화기 상용화 (SKB-IF100, SKB-IF110, SKB-IF200)

2. SKT 전용 스마트폰 기능 검증 및 필드 테스트 (2010.05 ~ 2011.08)
• AOS (droid ~ android 2.3) 의 전반적인 기능 검토 및 타사 단말기 비교 (삼성, 노키아, 모토로라, 블랙베리)
• 테스트케이스 작성 및 관리
• QXDM, Logcat을 이용한 NFC, Call Flow 로직 검증
• 챔버룸 및 음질 측정 장비를 이용한 MOS 음량 측정 및 정량 정성 테스트
• Power supply 장비를 이용한 Power On/Off 성능 측정
• Hoppin 전용단말기 기능 검증

업무성과 : SKT 스마트폰 상용화 (SK-S100, SK-S150)

3. SKT 전용 WCDMA(3G) 피쳐폰 기능 검증 및 필드 테스트 (2009.10 ~ 2011.08)
• 테스트케이스 작성 및 관리
• QXDM을 이용한 Call Flow 시퀀스 검토 및 SMS 기능 검증
• GPS, WIPI, IOT 망연동 테스트 수행
• 시험번호 관리 및 ESN 번호 등록
• PC Sync 프로그램 테스트 및 사용자 버전 관리

업무성과 : SKT CDMA, WCDMA 단말기 상용화 (SK-700, SK-900, SK-T100)
      `,
  },
  {
    id: 6,
    icon: <FaMicrochip />,
    link: "/",
    title: "Others",
    workingdate: "none",
    description:
      "단말기 및 어플리케이션 검증 및 인증 심사 (단기 프리랜서, 단기테스트 아르바이트)",
      project:
      `
-----------------------------------
디바이스인사이드	2012.06.18 ~ 2012.09.15 / 해외단말팀

주요 업무 : 필드테스트 및 상용화 버전 개선 작업 지원
기술 스택 및 도구 : filezilla, Android studio, QXDM, Angry GPS
참고 : ESTA로 장기 출장 진행 (이후 신분 이슈로 퇴사)

1. Samsung Device Field IOT 및 스마트폰 상용화 지원 (2012.06 • 2012.09)
• 미국 통신사 (Sprint)의 Kanas 망연동 테스트
• 미국 통신사 (Verizon)의 Chicago, NYC 현지 망연동 테스트

업무성과 : 다양한 벤더사의 스마트폰 및 CDMA폰 상용화 (GalaxyS3, Galaxy Note2, CDMA Phone)

2. 위치, 데이터 부하 Testing, 실시간 Log trace
• GPS Test (Kansas, NYC)
• 필드 Data throughputs Test (Chicago, NJ, Dallas)
• Google wallet NFC 기능 적용 시험
업무성과 : 현지에서 데이터 수집 및 한국에서의 디버깅 지원으로 최적화 작업

-----------------------------------

와이즈스톤	2011.08.24 ~ 2011.10.29 / T-Store 인증팀

주요 업무 : T-store 마켓 심사
기술 스택 및 도구 : 메뉴얼 테스트 수행

1. SKT T-Store 어플리케이션 심사 (2011.08 ~ 2011.10)
• 과금 컨텐츠의 결제 기능 검증
• 성인 컨텐츠 심의 및 성인 등록 확인
• OS별 어플리케이션 등록 허가 기준 평가

업무성과 : 매주 50여건 이상의 신규/업데이트 앱 마켓 출시

-----------------------------------

키위플	2011.11.28 ~ 2012.01.06, 2012.11.19 ~ 2012.12.14 / QA팀

주요 업무 : 사내 어플리케이션 사전 테스트 및 운영 지원
기술 스택 및 도구 : 메뉴얼 테스트 수행

1. Objet 어플리케이션 테스트 (2011.11 ~ 2012.01, 2012.11 ~ 2012.12)
• AR 기반 앱 동작 확인
• 사용자 운영 및 악성 유저 차단 모니터링

업무성과 : 앱 안정화 및 커뮤니티 활성화

2. Magic hour 어플리케이션 테스트 (2011.11 ~ 2012.01)
• 앱 기능 동작 확인 및 앱 스토어 VOC 처리

업무성과 : VOC 처리 향상 및 인앱 결제 증가
      `,
  },
];

const Service = () => {

  const [modalShow, setModalShow] = useState(false)
  const [selectedService, setSelectedService] = useState(null)

  const handleClick = (service) => {
    setSelectedService(service)
    setModalShow(true)
  }

  return (
    <section className="pb-10">
      <div className="pl-5 ml-5 mt-5 text-lg font-medium text-gray-800 mb-2">Total Carrer : 12년</div>
      <div className="flex flex-wrap md:px-4">
        {serviceData.map((service, id) => (
          <ServiceItem service={service} key={id} onIconClick={() => handleClick(service)} />
        ))}
      </div>
      <ServiceModal show={modalShow} onHide={() => setModalShow(false)} service={selectedService} />
    </section>
  );
};

export default Service;
