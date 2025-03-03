
export type Expertise = {
  title: string,
  highlightColor: string,
  icon: string,
  description: string
};

export const expertises: Expertise[] = [
  {
    title: "Software Development",
    highlightColor: "#5192e8",
    icon: "./expertises/device-desktop.svg",
    description: "Experienced in developing front & back end technologies. Java, TypeScript, JavaScript, Python. Experience with Docker, AWS, CI/CD."
  },
  {
    title: "Frontend Development",
    highlightColor: "#4ee550",
    icon: "./expertises/code.svg",
    description: "Passionate for UI. Experience developing and deploying with HTML, CSS, JS, React, NextJS and Angular."
  },
  {
    title: "Backend Development",
    highlightColor: "#ee8a39",
    icon: "./expertises/cloud-bolt.svg",
    description: "Skilled at designing high-quality backends and databases. Experience developing with Spring Boot, NodeJS, SQL and NoSQL databases."
  }
];

export const Icons = {
  user: "./expertises/user.svg",
  java: "./expertises/java.svg",
  javaScript: "./expertises/javascript.svg",
  typeScript: "./expertises/typescript.svg",
  next: "./expertises/next.svg",
  springBoot: "./expertises/springboot.svg",
  node: "./expertises/nodejs.svg",
  sql: "./expertises/sql.svg",
  mongo: "./expertises/mongodb.svg",
  react: "./expertises/react.svg",
  angular: "./expertises/angular.svg"
}