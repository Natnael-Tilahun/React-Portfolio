import React, { useRef } from "react";

const AccordionLayout = ({
  title,
  children,
  index,
  activeIndex,
  setActiveIndex,
}) => {
  const contentRef = useRef(null); // Reference to the content div
  const isOpen = activeIndex === index;

  const handleToggle = () => {
    setActiveIndex(isOpen ? null : index); // Toggle the active index
  };

  return (
    <>
      <div
        onClick={handleToggle}
        className="flex w-full overflow-auto justify-between px-4 py-2 mt-2 rounded bg-red-500 ease-out cursor-pointer"
      >
        <div className="flex">
          <div className="text-white font-bold">{title}</div>
        </div>
        <div className="flex items-center justify-center">
          {activeIndex === index ? (
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

      <div
        ref={contentRef}
        className={`shadow-3xl rounded-2xl shadow-cyan-500/50 transition-all duration-500 ease-in-out ${
          isOpen
            ? "max-h-screen opacity-100 p-4 mb-4"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
        style={{
          maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : "0px", // Set maxHeight dynamically
        }}
      >
        {children}
      </div>
    </>
  );
};

export default AccordionLayout;
