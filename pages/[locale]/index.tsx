import React, {
  CSSProperties,
  FC,
  MouseEventHandler,
  PropsWithChildren,
} from "react";
import { Occupy } from "../../components/Occupy";
import { useTranslation } from "next-i18next";
import { getStaticPaths, makeStaticProps } from "../../lib/getStatic";
import languageDetector from "../../lib/languageDetector";
import Image from "next/image";

const products = {
  app: [
    {
      icon: "/nawb.png",
      name: "Nawb (WIP)",
      descId: "app.nawb.desc",
      href: "https://nawb.deskbtm.com/",
    },
    {
      icon: "/indiebase.svg",
      name: "Indiebase (WIP)",
      descId: "app.indiebase.desc",
      href: "https://letscollab.deskbtm.com/",
    },
    {
      icon: "/plugkit.svg",
      name: "PlugKit (WIP)",
      descId: "app.plugkit.desc",
      href: "https://plugkit.deskbtm.com/",
    },
    {
      icon: "/vs_droid.png",
      name: "VS Droid (WIP)",
      descId: "app.vs_droid.desc",
      href: "https://github.com/deskbtm-vsdroid",
    },
    {
      icon: "/aqua.svg",
      name: "Aqua (Archive)",
      descId: "app.aqua.desc",
      href: "https://github.com/deskbtm/aqua",
    },
  ],
  openSource: [
    {
      name: "Android ADB WLAN",
      descId: "openSource.androidADBWLAN.desc",
      href: "https://marketplace.visualstudio.com/items?itemName=HanWang.android-adb-wlan",
      icon: "/android.png",
      actions: [
        {
          title: "repository",
          href: "https://github.com/deskbtm/android-adb-wlan",
        },
      ],
    },
    {
      name: "Colorful Monorepo",
      descId: "openSource.colorfulMonorepo.desc",
      href: "https://marketplace.visualstudio.com/items?itemName=deskbtm.colorful-monorepo",
      icon: "/monorepo.png",
      actions: [
        {
          title: "repository",
          href: "https://github.com/deskbtm/colorful-monorepo",
        },
      ],
    },
    {
      name: "win32-ffi",
      descId: "openSource.win32ffi.desc",
      href: "https://github.com/deskbtm/win32-ffi",
    },
    {
      name: "Lonely (Archive)",
      descId: "openSource.lonely.desc",
      href: "https://nawb.deskbtm.com/more/lonely-mgmt/start",
    },
  ],
};

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
          <Image width={50} height={50} src={props.leading} alt={""} />
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
                    e.stopPropagation();
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

export const ProjectsListTitle: FC<PropsWithChildren> = function (props) {
  return <h2 style={{ paddingLeft: 20 }}>{props.children}</h2>;
};

export const ProjectsList: FC = function () {
  const { t } = useTranslation("common");

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
        onClick={(e) => {
          window.open(item.href);
        }}
      />
    );
  });

  return (
    <div className="project-container">
      <div className="prj-list">
        <ProjectsListTitle>{t("Apps")}</ProjectsListTitle>
        {appList}
      </div>
      <Occupy width={20} />
      <div className="prj-list">
        <ProjectsListTitle>{t("OSS")}</ProjectsListTitle>
        {openSourceList}
      </div>
    </div>
  );
};

const Footer: FC = function () {
  return (
    <footer className="app-footer">
      <div className="content-enter align-enter">
        <a href="https://github.com/deskbtm">
          <i className="header-github-link"></i>
        </a>
        <Occupy width={20} />
        <a href="https://www.zhihu.com/people/mrno-64">
          <i className="zhi-hu-link"></i>
        </a>
      </div>
      <Occupy height={20} />
      <div className="content-enter">
        Copyright© {new Date().getFullYear()} Han(
        <a href="https://github.com/Nawbc">Nawbc</a>)
      </div>
    </footer>
  );
};

export default function Home() {
  const { t, i18n } = useTranslation("common");

  const switchLng = (e: any) => {
    const lng = e.target.value;
    languageDetector.cache?.(lng);
    location.href = "/";
  };

  return (
    <div className="app">
      <div className="navbar">
        <select defaultValue={i18n.language} onChange={switchLng}>
          <option value="en">English</option>
          <option value="zh">简体中文</option>
        </select>
      </div>
      <Occupy height={30} />
      <header>
        <div className="app-logo">
          <Image width={180} height={180} src="/logo.png" alt="logo" />
        </div>
        <div className="slogan">{t("No inspiration is spared.")}</div>
        <p className="sub-slogan">{t("An amateur indie studio")}</p>
      </header>
      <Occupy height={70} />
      <main>
        <div className="projects-list">
          <ProjectsList />
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

const getStaticProps = makeStaticProps(["common"]);

export { getStaticPaths, getStaticProps };
