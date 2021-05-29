import React, { FC } from "react";
import { Occupy } from "./components/Occupy";
import "./Footer.css";

export const Footer: FC = function () {
  return (
    <footer className="app-footer">
      <div className="content-enter align-enter">
        <a href="https://github.com/deskbtm" target="_blank_">
          <i className="header-github-link"></i>
        </a>
        <Occupy width={20} />
        <a href="https://www.zhihu.com/people/mrno-64" target="_blank_">
          <i className="zhi-hu-link"></i>
        </a>
      </div>
      <Occupy height={20} />
      <div className="content-enter">
        Copyright© {new Date().getFullYear()} HangWang(maxcalibur)
      </div>
    </footer>
  );
};
