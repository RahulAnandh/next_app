"use client";
import classNames from "classnames";
import React, { useState } from "react";
// import LogoIcon from "./icons/LogoIcon.jpg";
const Sidebar = () => {
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [isCollapsable, setIsCollpsable] = useState(false);

  const wrapperClasses = classNames(
    "h-screen px-4 pt-8 pb-4 bg-light justify-between flex-col border border-dashed w-80",
    {
      ["w-80"]: !toggleCollapse,
      ["w-20"]: toggleCollapse,
    }
  );
  const collapseIconClasses = classNames(
    "p-4 rounded bg-light-lighter absolute right-0",
    {
      "rotate-180": toggleCollapse,
    }
  );
  const onMouseOver = () => {
    setIsCollpsable(!isCollapsable);
  };
  return (
    <div
      className={wrapperClasses}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseOver}
    >
      <div className="flex flex-col">
        <div className="flex items-center pl-1 gap-4">
          {/* <LogoIcon /> */}
          LogoIcon
          <span
            className={classNames("mt-2 text-lg font-medium text-text", {
              hidden: toggleCollapse,
            })}
          ></span>
        </div>
        {isCollapsable && (
          <button className="collapseIconClasses">Collapse</button>
        )}
      </div>
      <div>Icon</div>
    </div>
  );
};

export default Sidebar;
