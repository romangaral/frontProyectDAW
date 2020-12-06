import React from "react";
import Events from "./events/Events";
import Advertisements from './advertisements/Advertisements.jsx';
import Links from './links/Links';

function Aside() {

  return (
    <aside className="aside row-3">
      <div className="aside col-md-12">
        <Events />
        <Advertisements />
        <Links />
      </div>
    </aside>
  );
}

export default Aside;