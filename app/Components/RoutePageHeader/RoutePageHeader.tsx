import React from "react";
import BreadCrumbs from "../BreadCumbs/BreadCrumbs";
import "./RoutePage.css";

const RoutePageHeader = ({ title, link }: { title: string; link: string }) => {
  return (
    <div className="route-page-main-cont route-page-width">
      <h1 className="self-center ">Viby</h1>
      <div className="flex flex-grow justify-between items-center gap-5 max-sm:flex-col ">
        <h2>{title}</h2>
        <BreadCrumbs title={title} link={link} />
      </div>
    </div>
  );
};

export default RoutePageHeader;
