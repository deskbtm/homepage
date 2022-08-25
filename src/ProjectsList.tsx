import "./ProjectsList.css";
import React, { CSSProperties, FC, MouseEventHandler } from "react";
import { Scrollbars } from "rc-scrollbars";
import { Occupy } from "./components/Occupy";
import { products } from "./products";
import { useTranslation } from "react-i18next";
import { useMediaQueries } from "@react-hook/media-query";

interface ProjectsListTileProps {
  leading?: string;
  title?: string;
  subTitle?: string;
  onClick?: MouseEventHandler;
  style?: CSSProperties;
  actions?: { title: string; href: string }[];
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
        <div className="header">
          <div className="listTile-title">{props.title}</div>
          {props.actions?.map((val, index) => {
            return (
              <div className="action" key={String(index)}>
                <a
                  href={val.href}
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(val.href);
                  }}
                >
                  {val.title}
                </a>
              </div>
            );
          })}
        </div>
        <div className="listTile-subTitle">{props.subTitle}</div>
      </div>
    </div>
  );
};

export const ProjectsListTitle: FC = function (props) {
  return <h2 style={{ paddingLeft: 20 }}>{props.children}</h2>;
};

export const ProjectsList: FC = function () {
  const { t } = useTranslation();
  const { matchesAll } = useMediaQueries({
    screen: "screen",
    width: "(max-width: 762px)",
  });

  const appList = products.app.map((item, index) => {
    return (
      <ProjectsListTile
        key={String(index)}
        leading={item.icon}
        title={item.name}
        subTitle={t(item.descId)}
        onClick={() => {
          window.open(item.href);
        }}
      />
    );
  });

  const openSourceList = products.openSource.map((item, index) => {
    return (
      <ProjectsListTile
        key={String(index)}
        leading={item.icon}
        title={item.name}
        subTitle={t(item.descId)}
        actions={item.actions}
        onClick={() => {
          window.open(item.href);
        }}
      />
    );
  });

  return (
    <div className="project-container">
      <div style={{width: 500}}>
        <ProjectsListTitle>{t("Apps")}</ProjectsListTitle>
        {appList}
        {/* {matchesAll ? (
          appList
        ) : (
          <Scrollbars style={{ width: 500, height: 500 }}>{appList}</Scrollbars>
        )} */}
      </div>
      <Occupy width={20} />
      <div style={{width: 500}}>
        <ProjectsListTitle>{t("OpenSource")}</ProjectsListTitle>
        {openSourceList}
        {/* {matchesAll ? (
          openSourceList
        ) : (
          <Scrollbars style={{ width: 500, height: 500 }}>
            {openSourceList}
          </Scrollbars>
        )} */}
      </div>
    </div>
  );
};
