// layouts are used to wrap pages and provide a consistent UI, like a navbar, footer, etc.

import React from "react";
import Nav from "../components/Nav/Nav";

export default function DefaultLayout({ children }) {
  return (
    <div>
    <Nav/>
    <main> 
      {children}
    </main>
    </div>
  );
}