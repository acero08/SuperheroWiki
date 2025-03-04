import React, { PropsWithChildren } from "react";

const SuperheroLayout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <>
      <nav>
        <h3>Sección tienda</h3>
        <ul>
          <li>Categoría</li>
        </ul>
      </nav>
      <main>{children}</main>
    </>
  );
};

export default SuperheroLayout;
