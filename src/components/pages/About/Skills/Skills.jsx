import React from "react";
import SkillItem from "./SkillItem";

const skillData = [
  {
    id: 1,
    title: "프로젝트경험",
    percentage: "90%",
  },
  {
    id: 2,
    title: "팀커뮤니케이션",
    percentage: "90%",
  },
  {
    id: 3,
    title: "테스트계획 수립, 문서작성",
    percentage: "90%",
  },
  {
    id: 4,
    title: "테스트수행능력, 리포트",
    percentage: "85%",
  },
  {
    id: 5,
    title: "협업&소통도구 (Github, Wiki, Jira, Slack, Testrail, PLM)",
    percentage: "80%",
  },
  {
    id: 6,
    title: "개발도구 (Android Studio, InteliJ, Eclipse, VSCode",
    percentage: "70%",
  },
  {
    id: 7,
    title: "API테스트 (Postman)",
    percentage: "75%",
  },
  {
    id: 8,
    title: "부하테스트 (Jmeter)",
    percentage: "60%",
  },
  {
    id: 9,
    title: "전력성능테스트 (멀티메터)",
    percentage: "60%",
  },
  {
    id: 10,
    title: "자동화테스트 (Python, Selenium, Appium)",
    percentage: "65%",
  },
  {
    id: 11,
    title: "FE 개발능력 (HTML5, CSS3, JS, react.js, bootstrap",
    percentage: "55%",
  },
  {
    id: 12,
    title: "BE 개발능력 (Java, Springboot)",
    percentage: "65%",
  },
];

const Skills = () => {
  return (
    <div className="py-4">
      <div className="flex flex-wrap">
        <div className="w-full">
          <div className="md:mx-4">
            <h3 className="text-2xl text-gray-800 font-bold mb-4">Available</h3>
          </div>
        </div>
        {skillData.map((skill, id) => (
          <SkillItem skill={skill} key={id} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
