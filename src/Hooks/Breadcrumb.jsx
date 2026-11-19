import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

export const Breadcrumbs = () => {
  const location = useLocation();

  const pathnames = location.pathname
    .split("/")
    .filter((x) => x);

  return (
    <div className="breadcrumb-wrapper">
      <Breadcrumb className="mb-0">

        {/* Home */}
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
          Home
        </Breadcrumb.Item>

        {pathnames.map((name, index) => {
          const routeTo = "/" + pathnames.slice(0, index + 1).join("/");

          const isLast = index === pathnames.length - 1;

          const pageName =
            name.charAt(0).toUpperCase() + name.slice(1);

          return isLast ? (
            <Breadcrumb.Item active key={name}>
              {pageName}
            </Breadcrumb.Item>
          ) : (
            <Breadcrumb.Item
              key={name}
              linkAs={Link}
              linkProps={{ to: routeTo }}
            >
              {pageName}
            </Breadcrumb.Item>
          );
        })}

      </Breadcrumb>
    </div>
  );
};