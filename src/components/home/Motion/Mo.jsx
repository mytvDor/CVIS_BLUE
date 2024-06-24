import React, { useEffect } from "react";

const Timeline = () => {
  useEffect(() => {
    const items = document.querySelectorAll(".timeline li");

    const isElementInViewport = (el) => {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    const callbackFunc = () => {
      for (let i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
          if (!items[i].classList.contains("in-view")) {
            items[i].classList.add("in-view");
          }
        } else if (items[i].classList.contains("in-view")) {
          items[i].classList.remove("in-view");
        }
      }
    };

    window.addEventListener("load", callbackFunc);
    window.addEventListener("scroll", callbackFunc);

    return () => {
      window.removeEventListener("load", callbackFunc);
      window.removeEventListener("scroll", callbackFunc);
    };
  }, []);

  return (
    <section className="timeline">
      <ul>
        {/* Timeline items */}
        {[...Array(12)].map((_, index) => (
          <li key={index} className="timeline-item">
            <div className="timeline-content">
              <time>{1687 + index}</time>
              <div className="discovery">
                <h1>Discovery</h1>
                <p>Laws of motion</p>
              </div>
              <div className="scientists">
                <h1>Scientists</h1>
                <span>Newton</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Timeline;
