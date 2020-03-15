import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Nav, NavItem, NavLink } from "reactstrap";

const PortfolioNavbar = props => {
  const [fashionTab, setfashionTab] = useState(false);
  const [digitalTab, setDigitalTab] = useState(false);
  const [traditionalTab, setTraditionalTab] = useState(false);

  const router = useRouter();
  const pathname = router.pathname;

  useEffect(() => {
    if (pathname == "/fashion") {
      setfashionTab(true);
    } else if (pathname == "/digital") {
      setDigitalTab(true);
    } else {
      setTraditionalTab(true);
    }
  }, []);

  return (
    <div>
      <Nav tabs role="navigation">
        <NavItem className="portfolioTab">
          <NavLink href="/fashion" className={fashionTab ? "active" : ""}>
            Fashion
          </NavLink>
        </NavItem>
        <NavItem className="portfolioTab">
          <NavLink href="/digital" className={digitalTab ? "active" : ""}>
            Digital
          </NavLink>
        </NavItem>
        <NavItem className="portfolioTab">
          <NavLink
            href="/traditional"
            className={traditionalTab ? "active" : ""}
          >
            Traditional
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};

export default PortfolioNavbar;
