import React from "react";

const OffMe = () => {
  return (
    <div className="p-6 px-5 min-h-screen flex items-center justify-center bg-green-400">
      <div className="relative bg-white w-full max-w-2xl rounded-lg shadow-lg p-8 overflow-hidden">
        <img src="" alt="" />
        {/* ====== */}
        <div className="flex items-center justify-center gap-4 mb-6">
        <div className="relative z-10 mb-6">
          <h2 className="text-lg font-semibold text-sky-700 uppercase">
            Wire Transfer Services
          </h2>
          <p className="text-sm text-gray-600">
            Outgoing Wire Transfer Request
          </p>
        </div>
        {/* Bank Logo */}
        <div className="relative z-10 flex gap-50  justify-end mb-4">
            <img src="" alt="" />
          <div className="text-right">
            <h3 className="text-base font-semibold text-sky-700">
              CREDIT UNION
            </h3>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default OffMe;
