import React from "react";
import { FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa";

const GmailIcon = ({ size = 20 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="0"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path
      d="M22.288 5.006v14H17.99V9.694l-5.991 4.414-6.01-4.414v9.306H1.712V5h1.8l8.476 6.25L20.488 5h1.8z"
      fill="#FFFFFF"
    />
    <path d="M1.712 5h4.277v14H1.712z" fill="#4285F4" />
    <path d="M17.99 5h4.298v14H17.99z" fill="#34A853" />
    <path d="M1.712 5l10.277 7.578L22.288 5H1.712z" fill="#EA4335" />
    <path d="M1.712 19h4.277V9.694L1.712 5z" fill="#C5221F" />
    <path d="M17.99 9.694V19h4.298V5L17.99 9.694z" fill="#00AC47" />
  </svg>
);

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      name: "LinkedIn",
      icon: <FaLinkedin size={20} />,
      href: "https://www.linkedin.com/in/danieldong2001",
      color: "from-blue-500 to-blue-600",
      hoverColor: "from-blue-600 to-blue-700",
    },
    {
      id: 2,
      name: "GitHub",
      icon: <FaGithub size={20} />,
      href: "https://github.com/dongtandung2001",
      color: "from-gray-700 to-gray-800",
      hoverColor: "from-gray-800 to-gray-900",
    },
    {
      id: 3,
      name: "Email",
      icon: <GmailIcon size={20} />,
      href: "mailto:dongtandung2001@gmail.com",
      color: "bg-white",
      hoverColor: "bg-white",
      customBackground: false,
      customIcon: true,
      border: true,
    },
    {
      id: 4,
      name: "Resume",
      icon: <FaFilePdf size={20} />,
      href: "/resume.pdf",
      color: "from-red-500 to-red-600",
      hoverColor: "from-red-600 to-red-700",
    },
  ];

  return (
    <>
      {/* Fixed side links - only visible on large screens */}
      <div className="hidden lg:block fixed left-4 bottom-0 z-20">
        <div className="flex flex-col gap-4 mb-8">
          {links.map(
            ({
              id,
              name,
              icon,
              href,
              color,
              hoverColor,
              customBackground,
              customIcon,
              border,
            }) => (
              <a
                key={id}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group"
                aria-label={name}
              >
                <div className="flex items-center">
                  <div
                    className={`
                    flex items-center justify-center w-10 h-10 rounded-full
                    ${
                      customBackground
                        ? `bg-gradient-to-r ${color}`
                        : border
                        ? `${color} border-2 border-[#EA4335]`
                        : `bg-gradient-to-br ${color}`
                    } ${customIcon ? "" : "text-white"} shadow-lg
                    transition-all duration-300 group-hover:shadow-xl group-hover:scale-110
                    ${
                      customBackground
                        ? `group-hover:bg-gradient-to-r ${hoverColor}`
                        : border
                        ? `${hoverColor} group-hover:border-[#34A853]`
                        : `group-hover:bg-gradient-to-br ${hoverColor}`
                    }
                  `}
                  >
                    {icon}
                  </div>
                  <div className="overflow-hidden">
                    <span
                      className={`
                      pl-2 pr-3 py-1 ml-[-100%] text-sm font-medium ${
                        border
                          ? "text-black border-2 border-[#EA4335]"
                          : "text-white"
                      } rounded-r-full
                      ${
                        border
                          ? "bg-white"
                          : `bg-gradient-to-${
                              customBackground ? "r" : "br"
                            } ${color}`
                      } opacity-0
                      transition-all duration-300 whitespace-nowrap
                      group-hover:ml-1 group-hover:opacity-100
                      ${border ? "group-hover:border-[#34A853]" : ""}
                    `}
                    >
                      {name}
                    </span>
                  </div>
                </div>
              </a>
            )
          )}
        </div>
      </div>

      {/* Section that appears below Skills on medium and small screens */}
      <div id="connect" className="lg:hidden py-16 bg-white dark:bg-dark-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title dark:text-dark-100 mb-6">
              Connect With Me
            </h2>
            <p className="text-gray-600 dark:text-dark-200 text-lg max-w-3xl mx-auto mt-10">
              Let's get in touch! Find me on these platforms.
            </p>
          </div>

          <div className="flex justify-center gap-6 flex-wrap">
            {links.map(
              ({
                id,
                name,
                icon,
                href,
                color,
                hoverColor,
                customBackground,
                customIcon,
                border,
              }) => (
                <a
                  key={id}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col items-center"
                  aria-label={name}
                >
                  <div
                    className={`
                    flex items-center justify-center w-16 h-16 rounded-xl
                    ${
                      customBackground
                        ? `bg-gradient-to-r ${color}`
                        : border
                        ? `${color} border-2 border-[#EA4335]`
                        : `bg-gradient-to-br ${color}`
                    } ${customIcon ? "" : "text-white"} shadow-md
                    transition-all duration-300 group-hover:scale-110 mb-2
                    ${border ? "group-hover:border-[#34A853]" : ""}
                  `}
                  >
                    {customIcon
                      ? React.cloneElement(icon, { size: 28 })
                      : React.cloneElement(icon, { size: 28 })}
                  </div>
                  <span className="text-gray-700 dark:text-dark-200 font-medium">
                    {name}
                  </span>
                </a>
              )
            )}
          </div>
        </div>
      </div>

      {/* Mobile fixed bottom nav */}
      <div className="md:hidden w-full py-4 backdrop-blur-sm bg-white/70 dark:bg-dark-600/70 border-t border-gray-200 dark:border-dark-400 fixed bottom-0 left-0 z-20">
        <div className="flex justify-center gap-6">
          {links.map(
            ({
              id,
              name,
              icon,
              href,
              color,
              hoverColor,
              customBackground,
              customIcon,
              border,
            }) => (
              <a
                key={id}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group"
                aria-label={name}
              >
                <div
                  className={`
                    flex items-center justify-center w-12 h-12 rounded-xl
                    ${
                      customBackground
                        ? `bg-gradient-to-r ${color}`
                        : border
                        ? `${color} border-2 border-[#EA4335]`
                        : `bg-gradient-to-br ${color}`
                    } ${customIcon ? "" : "text-white"} shadow-md
                    transition-all duration-300 group-hover:scale-110
                    ${border ? "group-hover:border-[#34A853]" : ""}
                  `}
                >
                  {icon}
                </div>
                <span className="sr-only">{name}</span>
              </a>
            )
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="py-6 bg-gray-50 dark:bg-dark-500">
        <div className="text-center text-gray-500 dark:text-dark-300 text-sm">
          © {new Date().getFullYear()} Dung Dong. All rights reserved.
        </div>
      </div>
    </>
  );
};

export default SocialLinks;
