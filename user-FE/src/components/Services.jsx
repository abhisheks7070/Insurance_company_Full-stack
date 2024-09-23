import React from 'react';
import Divider from './Divider';

const Services = () => {
  return (<>
    <section id="services" className="bg-white text-center pb-4 md:px-0 h-auto ">
      <Divider />
      <h2 className="text-3xl md:text-4xl blueb500 pt-10 md:pt-20">Our Services</h2>
      <div className="flex flex-wrap justify-center mt-8 gap-4">
        <div className="bg-blue-500 p-6 rounded-lg shadow-md w-full mx-2 sm:w-60">
          <h3 className="text-xl font-bold text-black">Motor Insurance</h3>
          <p className="text-gray-900 mt-2">Reliable two wheeeler and four wheeler insurance to keep you safe on the road.</p>
        </div>
        <div className="bg-blue-500 p-6 rounded-lg shadow-md w-full mx-2 sm:w-60">
          <h3 className="text-xl font-bold text-black">Life Insurance</h3>
          <p className="text-gray-900 mt-2">Comprehensive life insurance policies to protect your loved ones.</p>
        </div>
        <div className="bg-blue-500 p-6 rounded-lg shadow-md w-full mx-2 sm:w-60">
          <h3 className="text-xl font-bold text-black">Health Insurance</h3>
          <p className="text-gray-900 mt-2">Affordable health insurance plans to keep you and your family healthy.</p>
        </div>
        <div className="bg-blue-500 p-6 rounded-lg shadow-md w-full mx-2 sm:w-60">
          <h3 className="text-xl font-bold text-black">Term Insurance</h3>
          <p className="text-gray-900 mt-2">Attractive Term insurance plans to keep your family secure.</p>
        </div>
        <div className="bg-blue-500 p-6 rounded-lg shadow-md w-full mx-2 sm:w-60">
          <h3 className="text-xl font-bold text-black">Money Transfer</h3>
          <p className="text-gray-900 mt-2">Money transfer at cheapest rates.</p>
        </div>
        <div className="bg-blue-500 p-6 rounded-lg shadow-md w-full mx-2 sm:w-60">
          <h3 className="text-xl font-bold text-black">Investments</h3>
          <p className="text-gray-900 mt-2">Investment plans convenient for anyone.</p>
        </div>
        <div className="bg-blue-500 p-6 rounded-lg shadow-md w-full mx-2 sm:w-60">
          <h3 className="text-xl font-bold text-black">Railway and Air tickets</h3>
          <p className="text-gray-900 mt-2">Advance railway and Air ticket booking at affordable rates.</p>
        </div>
        <div className="bg-blue-500 p-6 rounded-lg shadow-md w-full mx-2 sm:w-60">
          <h3 className="text-xl font-bold text-black">Tours and Travels</h3>
          <p className="text-gray-900 mt-2">Providing complete Tour and travel plans.</p>
        </div>
      </div>
    </section>
  </>
  );
};

export default Services;
