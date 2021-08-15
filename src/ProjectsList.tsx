import React, { CSSProperties, FC, MouseEventHandler } from "react";
import { Scrollbars } from "rc-scrollbars";
import "./ProjectsList.css";
import { Occupy } from "./components/Occupy";

const projectsList = [
  {
    icon: "nawb-logo.svg",
    name: "nawb",
    desc: "Nawb是一个强大的跨平台 javascript 脚本插件应用环境",
    url: "https://nawb.deskbtm.com/",
  },
  {
    icon: "aqua-logo.svg",
    name: "Aqua",
    desc: "使用Flutter开发的一款优雅至极的文件管理器",
    url: "https://github.com/deskbtm/aqua",
  },
];

const freeProjectsList = [
  {
    name: "Lonely",
    desc: "独立开发者的软件管理工具 支付无需签约，高效管理用户",
    url: "https://nawb.deskbtm.com/more/lonely-mgmt/start",
  },
  {
    name: "win-win-api",
    desc: "使用ffi实现的js对win32 api的绑定",
    url: "https://github.com/sewerganger/win-win-api",
  },
  {
    name: "android-adb-wlan",
    desc: "vscode插件, 安卓无线调试, 支持多台设备",
    url: "https://github.com/sewerganger/android-adb-wlan",
  },
];

interface ProjectsListTileProps {
  leading?: string;
  title?: string;
  subTitle?: string;
  onClick?: MouseEventHandler;
  style?: CSSProperties;
}

export const ProjectsListTile: FC<ProjectsListTileProps> = function (props) {
  return (
    <div
      className="listTile bg-effect"
      onClick={props.onClick}
      style={props.style}
    >
      {props.leading && (
        <div className="listTile-leading">
          <img src={props.leading} />
        </div>
      )}
      <div className="listTile-wrapper">
        <div className="listTile-title">{props.title}</div>
        <div className="listTile-subTitle">{props.subTitle}</div>
      </div>
    </div>
  );
};

export const ProjectsListTitle: FC = function (props) {
  return <h2 style={{ paddingLeft: 20 }}>{props.children}</h2>;
};

export const ProjectsList: FC = function () {
  return (
    <div className="project-container">
      <div>
        <ProjectsListTitle>应用软件</ProjectsListTitle>
        {projectsList.map((item, index) => {
          return (
            <ProjectsListTile
              key={String(index)}
              leading={item.icon}
              title={item.name}
              subTitle={item.desc}
              onClick={() => {
                window.open(item.url);
              }}
            />
          );
        })}
      </div>
      <Occupy width={20} />
      <div>
        <ProjectsListTitle>开源免费工具</ProjectsListTitle>
        <Scrollbars
          className="open-source-list"
          style={{ width: 400, height: 500 }}
          autoHide
        >
          {freeProjectsList.map((item, index) => {
            return (
              <ProjectsListTile
                key={String(index)}
                title={item.name}
                subTitle={item.desc}
                onClick={() => {
                  window.open(item.url);
                }}
              />
            );
          })}
        </Scrollbars>
      </div>
    </div>
  );
};
