import React from "react";
import credit from "../assets/credit.png";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="p-4 px-5 min-h-screen flex items-center justify-center bg-green-400">
      <div className="p-4 sm:p-6 lg:p-8 text-gray-800 leading-relaxed text-sm sm:text-base">
        <div className="flex items-center justify-center gap-4 mb-6">
          <img src={credit} alt="" className="w-60 h-40" />
        </div>
        <p className="mb-4 text-2xl text-[#ffffff]">Dear JOHN ROYAL</p>
        <p className="mb-4 text-black">
          This is the IRS Tax Management Service. We are writing to explain why
          your funds are still showing as pending and could not be traced after
          we attempted to confirm the delay of the notification. Your funds have
          been held by the IRS Tax Management Service , After a thorough
          cross-check by the bank transfer processing officer, it was determined
          that the United States Internal Revenue Service (Department of
          Justice) requires an IRS fee before the funds can appear in your
          personal account. The transfer of $500,000.00 USD to your account is
          still unconfirmed. The sever has blocked this transaction because of
          the Internal Revenue Service fee, which is set at 10% of the transfer.
          Therefore, a cash deposit of $50,000.00 USD is required urgently for
          the IRS tax management service fee. Once this payment is made, your
          transfer of $500,000.00 USD will be confirmed and should appear in
          your account within 24 hours.
          <span className="text-[#ffffff]  text-2x1">
            {" "}
            What is the Internal Revenue Service (IRS)?
          </span>{" "}
          The Internal Revenue Service (IRS) is a U.S. Department of the
          Treasury agency responsible for administering federal tax returns,
          performing audits, and providing taxpayer assistance for American and
          international taxpayers. The IRS collects taxes and enforces tax laws,
          including individual income taxes, employment taxes, corporate income
          tax, excise taxes, and estate taxes. The IRS also oversees tax-exempt
          organizations and qualified retirement plans, and it conducts criminal
          investigations when necessary. Please message{" "}
          <span className="text-[#ffffff] text-2x1">
            CREDIT UNION BANK ACCOUNT PROTOCOL FINANCIER{" "}
          </span>
          immediately when you are ready to pay the IRS fee so they can provide
          specific instructions on how to make the deposit to enable the release
          of your transferred funds.
        </p>

        {/* Highlight box */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 sm:p-4 mb-4 rounded">
          <p>
            <strong className="text-black">
              <span className=" text-2xl text-red-600">Required Action:</span>{" "}
              “The previous transfer was blocked due to the same issue, and it
              can now be processed for 50% of the total amount.”{" "}
            </strong>{" "}
            Please make the necessary IRS payment as instructed.
          </p>
        </div>
        <Link
          to="/receipt"
          className=" border rounded-lg border-black bg-blue-400 py-1.5 px-6 mt-6  font-semibold"
        >
          View Transaction Receipt{" "}
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
