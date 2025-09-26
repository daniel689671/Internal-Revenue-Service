import React from "react";
import semi from "../assets/images/credit2.png";
import outhere from "../assets/images/credit2.png";
import { Link } from "react-router-dom";

const OffMe = () => {
  return (
    <div className="p-6 px-5 min-h-screen flex items-center justify-center bg-green-400">
      <div className="relative bg-white w-full max-w-2xl rounded-lg shadow-lg p-8 overflow-hidden">
        <img
          src={semi}
          alt=""
          className="absolute m-auto inset-0 opacity-10 w-2/3 pointer-events-none"
        />
        {/* ====== */}
        <div className="flex items-center justify-center gap-10 mb-6">
          <div className="relative z-10 mb-6">
            <h2 className="text-lg font-semibold text-sky-700 uppercase">
              Wire Transfer Services
            </h2>
            <p className="text-sm text-gray-800">
              Outgoing Wire Transfer Request
            </p>
          </div>
          {/* Bank Logo */}
          <div className="relative z-10 flex gap-9  justify-end mb-4">
            <div className="text-right flex">
              <img src={outhere} alt="" className=" h-12 w-17" />
              <h3 className="text-base font-semibold text-sky-700">
                CREDIT UNION BANK
              </h3>
            </div>
          </div>
        </div>
        {/* ========= */}
        <hr className="border-t border-gray-500 mb-6" />
        <div className="relative z-10 text-gray-800 leading-relaxed text-sm sm:text-base mb-5">
          <p>
            {" "}
            <span className="mb-4 text-black font-simibold">
              Lodgement Receipt:
            </span>{" "}
            Money Transfer
          </p>
          <p>
            <span className="font-semibold text-blue-500">Date:</span>{" "}
            09/24/2025
          </p>
        </div>
        <hr className="border-t border-gray-500 mb-6" />
        {/* Beneficiary bank details */}
        <div className="relative z-10 text-gray-800 leading-relaxed text-sm sm:text-base mb-5">
          <h4 className="text-sky-600 font-simibold text-sm mb-2">
            {" "}
            Beneficiary bank details
          </h4>

          <div className="text-sm space-y-2 ">
            <p className="text-gray-800">
              Routing number: <span className="font-medium">061000227</span>
            </p>
            <p className="text-gray-800">
              Bank / branch:{" "}
              <span className="font-medium">WELLS FARGO BANK</span>
            </p>
            <p className="text-gray-800">UNITED STATES OF AMERICA</p>
            <p className="text-gray-800">
              Account number: <span className="font-medium">7075129457</span>
            </p>
            <p className="text-gray-800">
              Account name:{" "}
              <span className="font-medium">ROYAL ADVISORY GROUP</span>
            </p>
          </div>
        </div>
        <hr className="border-t border-gray-500 mb-6" />
        {/* Transfer details */}
        <div className="relative z-10 text-gray-800 leading-relaxed text-sm sm:text-base mb-5">
          <h4 className="text-sky-600 font-simibold text-sm mb-2">
            {" "}
            Transfer details
          </h4>
          <div className="text-sm space-y-2">
            <p>
              From Account:{" "}
              <span className="font-medium">
                CREDIT UNION Remittance Dept (000144 - 8909376204)
              </span>
            </p>
            <p>
              Transfer Currency:{" "}
              <span className="font-medium">USD - United States Dollar</span>
            </p>
            <p>
              Transfer Amount:{" "}
              <span className="font-medium">$500,000.00 USD</span>
            </p>
          </div>
        </div>
        <hr className="border-t border-gray-500 mb-6" />
        {/* Important notice */}
        <div className="relative z-10 bg-yellow-200 border-l-4 border-yellow-500 p-4 mb-4 rounded">
          <h4 className="text-sky-700 font-semibold text-sm mb-1">
            Other details
          </h4>
          <div className="text-sm space-y-2">
            <p>
              {" "}
              Purpose of transfer:
              <span className=" font-medium">Beneficiary/claims</span>
            </p>
          </div>
        </div>
        <hr className="border-t border-gray-500 mb-6" />
        {/*  Transfer Instructions */}
        <div className="relative z-10 text-gray-800 leading-relaxed text-sm sm:text-base">
          <h4 className="text-sky-700 font-semibold text-sm mb-2">
            Transfer Instructions
          </h4>
          <p className="text-gray-800 text-sm">
            This is to certify that the above wire transfer request has been
            received and processed by CREDIT UNION BANK. The funds will be
            credited to the beneficiary's account as per the details provided.
            Please allow 1-5 business days for the transfer to be completed. For
            any inquiries, please contact our customer service.
          </p>
        </div>
        {/* Lodgement Numbers */}
        <div className="relative z-10 text-gray-800 leading-relaxed text-sm sm:text-base  mt-6">
          <p>
            Lodgement number: <span className="font-medium">8835603232</span>
          </p>
          <p>
            Reference number: <span className="font-medium">36p55hed45b00</span>
          </p>
          <Link
            to="/"
            className=" border rounded-lg border-black bg-blue-400 py-1.5 px-6 mt-6  font-semibold"
          >
            back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OffMe;
