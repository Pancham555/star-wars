import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav
      className={`${
        open ? "h-64" : "h-16"
      } lg:h-auto overflow-hidden duration-200 container p-6 mx-auto lg:flex lg:justify-between lg:items-center sticky top-0 bg-white dark:bg-gray-800 z-50`}
    >
      <div className="flex items-center justify-between my-auto">
        <div>
          <a
            className="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
            href="#"
          >
            Brand
          </a>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
            aria-label="toggle menu"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
              <path
                fillRule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <div className="flex flex-col mt-4 space-y-2 lg:mt-0 lg:flex-row lg:-px-8 lg:space-y-0">
        <a
          className="text-gray-700 transition-colors duration-200 transform lg:mx-8 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500"
          href="#"
        >
          Home
        </a>
        <a
          className="text-gray-700 transition-colors duration-200 transform lg:mx-8 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500"
          href="#"
        >
          Components
        </a>
        <a
          className="text-gray-700 transition-colors duration-200 transform lg:mx-8 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500"
          href="#"
        >
          Pricing
        </a>
        <a
          className="text-gray-700 transition-colors duration-200 transform lg:mx-8 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500"
          href="#"
        >
          Contact
        </a>
      </div>

      <a
        className="block px-5 py-2 mt-4 font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg lg:mt-0 hover:bg-blue-500 lg:w-auto"
        href="#"
      >
        Get started
      </a>
    </nav>
  );
};

export default Navbar;
