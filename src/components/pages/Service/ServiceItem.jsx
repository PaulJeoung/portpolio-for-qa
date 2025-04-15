import React from "react";

const ServiceItem = ({ service, onIconClick }) => {
  const { icon, title, workingdate, description } = service;
  return (
    <>
      <div className="w-full lg:w-1/2">
        <div className="my-4 md:mx-4 shadow p-6 rounded-md bg-white group hover:shadow-md">
          <div className="w-16 h-16 flex items-center justify-center rounded-md text-3xl mb-5 bg-purple-100 text-purple-600 transition duration-200 group-hover:bg-purple-600 group-hover:text-white"
                onClick={onIconClick}>
            {icon}
          </div>
          <h3 className="text-lg font-medium text-gray-800 mb-2">{title}</h3>
          <h5 className="text-sm font-medium text-purple-800 mb-2">{workingdate}</h5>
          <p className="text-gray-400">{description}</p>
        </div>
      </div>
    </>
  );
};

export default ServiceItem;
