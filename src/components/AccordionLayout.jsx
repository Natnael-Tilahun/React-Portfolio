import React from "react";

// import {
//   BsFillArrowDownCircleFill,
//   BsFillArrowUpCircleFill,
// } from "react-icons/bs";

const AccordionLayout = ({
  title,
  children,
  index,
  activeIndex,
  setActiveIndex,
}) => {
  const handleSetIndex = (index) =>
    activeIndex !== index && setActiveIndex(index);

  function collapseAccordion() {
    if (activeIndex == index) {
      setActiveIndex(0);
    }
  }

  return (
    <>
      <div
        onClick={() => {
          handleSetIndex(index);
          collapseAccordion();
        }}
        className="flex w-full overflow-auto justify-between p-2 mt-2 rounded bg-red-500"
      >
        <div className="flex">
          <div className="text-white font-bold">{title}</div>
        </div>
        <div className="flex items-center justify-center">
          {activeIndex === index ? (
            // <BsFillArrowDownCircleFill className="w-8 h-8" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                fill="white"
                d="M12 10.828l-4.95 4.95-1.414-1.414L12 8l6.364 6.364-1.414 1.414z"
              />
            </svg>
          ) : (
            // <BsFillArrowUpCircleFill className="w-8 h-8" />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"
                fill="white"
              />
            </svg>
          )}
        </div>
      </div>

      {activeIndex === index && (
        <div className="shadow-3xl rounded-2xl shadow-cyan-500/50 p-4 mb-6">
          {children}
        </div>
      )}
    </>
  );
};

export default AccordionLayout;
