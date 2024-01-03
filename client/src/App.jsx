import { useState, useEffect } from "react";
import "./App.css";
import About from "./Components/About";

function App() {
  return (
    <>
      <div className="responsive_page_frame with_header">
        <div
          role="navigation"
          className="responsive_page_menu_ctn mainmenu"
        ></div>
        <div className="responsive_local_menu_tab"></div>
        <div className="responsive_page_menu_ctn localmenu"></div>
        <div className="responsive_header"></div>
        <div className="responsive_page_content_overlay"></div>
        <div className="responsive_fixonscroll_ctn nonresponsive_hidden"></div>
        <div className="responsive_page_content">
          <div
            role="main"
            className="responsive_page_template_content"
            id="responsive_page_template_content"
            data-panel='{"autoFocus":true}'
          >
            <About />
          </div>
        </div>
      </div>
      <div className="miniprofile_hover"></div>
      <div className="FullModalOverlay"></div>
      <div id="review_histogram_tooltip"></div>
    </>
  );
}

export default App;
