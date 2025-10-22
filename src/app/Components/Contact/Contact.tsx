import React from "react";
const contactItems = [
  {
    contact: "+62 8122 9346 165",
    account: "Whatsapp",
    color: "border-green-500",
    icon: "ri-whatsapp-line",
  },
  {
    contact: "fauzansulthoni",
    account: "Instagram",
    color: "border-purple-500",
    icon: "ri-instagram-line",
  },
  {
    contact: "fauzansulthoni92@gmail.com",
    account: "Email",
    color: "border-red-500",
    icon: "ri-google-fill",
  },
];
const Contact = ({
  selectedMenu,
  setSelectedMenu,
}: {
  selectedMenu: string;
  setSelectedMenu: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div
      className="h-screen w-full flex items-center justify-end sm:px-8"
      id="contact"
    >
      <div className="bg-slate-50 dark:bg-slate-700 w-full rounded-lg p-4 sm:p-8 shadow-lg h-fit">
        <div className="grid grid-cols-2 gap-5">
          {/* Form Data Start */}
          <div className="xl:col-span-1 col-span-2">
            <div className="mb-8">
              <h1 className="font-outfit font-bold xl:text-[4rem] text-4xl mb-2 dark:text-slate-50 ">
                {" "}
                Let's Work Together
              </h1>
              <p className="text-slate-500 text-[1.5rem] dark:text-slate-400">
                Feel free to reach out for more details or collaboration
              </p>
            </div>
            {/* <div className="flex flex-col justify-center items-center gap-2 rounded-xl h-fit">
              <form
                action=""
                method="post"
                className="flex gap-2 flex-col w-full lg:max-w-[600px] text-lg"
              >
                <div className="flex flex-col w-full">
                  <label
                    className="text-gray-600 dark:text-slate-200"
                    htmlFor="contact-name"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    className="bg-gray-200 border-gray-400 border-1 text-lg p-2 rounded-xl lg:min-w-[400px]"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label
                    className="text-gray-600 dark:text-slate-200"
                    htmlFor="contact-name"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    className="bg-gray-200 border-gray-400 border-1 text-lg p-2 rounded-xl lg:min-w-[400px]"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label
                    className="text-gray-600 dark:text-slate-200"
                    htmlFor="contact-message"
                  >
                    Message
                  </label>
                  <textarea
                    rows={4}
                    id="contact-message"
                    className="bg-gray-200 border border-gray-400 text-lg p-2 rounded-xl lg:min-w-[400px]"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <button
                    type="submit"
                    className="px-3 py-2 cursor-pointer bg-blue-500 hover:bg-blue-600 w-full text-slate-50 rounded-lg transition-all duration-200"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div> */}
            <div className="col-span-2 xl:col-span-1">
              <ul className="space-y-6 my-8">
                {contactItems.map((item, index) => (
                  <li
                    key={index}
                    className={`border-l-4 ${item.color} pl-4 flex items-center gap-4`}
                  >
                    <div className="xl:p-2 p-2 bg-slate-200 rounded-full flex items-center justify-center">
                      {/* Optional inner content */}
                      <span className="text-4xl text-gray-600">
                        <i className={`${item.icon}`}></i>
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-slate-50">
                        {item.contact}
                      </h3>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Form Data End*/}
        </div>
      </div>
    </div>
  );
};

export default Contact;
