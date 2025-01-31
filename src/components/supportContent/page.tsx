import React from "react";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

const SupportContent = ({ slug }: { slug: string }) => {
  const contentData: Record<string, { title: string; content: JSX.Element }> = {
    /** 🔹 Help & Support Page */
    "help-and-support": {
      title: "Help & Support | Comforty Furniture Store",
      content: (
        <>
          <p className="text-gray-600 leading-relaxed">
            Looking for assistance with your furniture purchase? Welcome to
            Comforty&apos;s <strong>Help & Support</strong> page. We provide quick
            solutions for orders, shipping, returns, and customer service
            inquiries.
          </p>

          <h2 className="mt-6 text-xl font-semibold text-black">
            🔹 Common Support Topics
          </h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>
              <strong>Track Your Order:</strong>{" "}
              <Link
                href="/track-order"
                className="text-blue-600 hover:underline"
              >
                Order Tracking Tool
              </Link>
            </li>
            <li>
              <strong>Shipping & Delivery:</strong> Learn about estimated
              delivery times and costs.
            </li>
            <li>
              <strong>Returns & Refunds:</strong> Hassle-free returns within 14
              days.
            </li>
            <li>
              <strong>Warranty & Repairs:</strong> All products come with a{" "}
              <strong>1-year warranty</strong>.
            </li>
          </ul>

          <h2 className="mt-6 text-xl font-semibold text-black">
            📞 Contact Our Support Team
          </h2>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md mt-3">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-second" />
                <Link
                  href="mailto:support@furniro.com"
                  className="hover:text-second"
                >
                  support@comforty.com
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-second" />
                <span className="hover:text-second cursor-pointer">
                  +1 (123) 456-7890
                </span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-second" />
                {/* KEY CHANGE: Added &apos; */}
                <span className="hover:text-second cursor-pointer">
                  123 Comforty Lane&apos; FC 12345
                </span>
              </div>
            </div>
          </div>

          <h2 className="mt-6 text-xl font-semibold text-black">
            🔗 Related Pages:
          </h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>
              <Link href="/faq" className="text-blue-600 hover:underline">
                FAQs
              </Link>
            </li>
            <li>
              <Link href="/needhelp" className="text-blue-600 hover:underline">
                Return Policy
              </Link>
            </li>
          </ul>
        </>
      ),
    },

    /** 🔹 Terms & Conditions Page */
    "terms-and-condition": {
      title: "Terms & Conditions | Comforty Online Furniture Store",
      content: (
        <>
          <p className="text-gray-600 leading-relaxed">
            Welcome to Comforty&apos;s <strong>Terms & Conditions</strong> page. By
            using our website, you agree to our policies and guidelines.
          </p>

          <h2 className="mt-6 text-xl font-semibold text-black">
            📌 Key Terms
          </h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>
              <strong>User Agreement:</strong> You must provide accurate
              information when placing orders.
            </li>
            <li>
              <strong>Pricing Policy:</strong> Prices may change without prior
              notice.
            </li>
            <li>
              <strong>Order Processing:</strong> Orders are processed within{" "}
              <strong>24-48 hours</strong>.
            </li>
            <li>
              <strong>Returns & Cancellations:</strong> Items must be returned
              within <strong>14 days</strong> for a refund.
            </li>
            <li>
              <strong>Liability Disclaimer:</strong> Comforty is not responsible
              for damage due to improper use.
            </li>
          </ul>

          <p className="mt-6">
            📖{" "}
            <Link href="/needhelp" className="text-blue-600 hover:underline">
              Full Terms & Conditions
            </Link>
          </p>
        </>
      ),
    },

    /** 🔹 Privacy Policy Page */
    "privacy-policy": {
      title: "Privacy Policy | Secure Online Shopping with Comforty",
      content: (
        <>
          <p className="text-gray-600 leading-relaxed">
            At <strong>Comforty</strong>, we prioritize your privacy and data
            security. This <strong>Privacy Policy</strong> explains how we
            collect, store, and use your personal information.
          </p>

          <h2 className="mt-6 text-xl font-semibold text-black">
            🔐 How We Protect Your Data
          </h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>
              <strong>🔒 Secure Payments:</strong> All transactions are
              encrypted via **SSL technology**.
            </li>
            <li>
              <strong>🛡️ Data Protection:</strong> Your information is{" "}
              <strong>never shared</strong> with third parties.
            </li>
            <li>
              <strong>📡 Cookies & Tracking:</strong> We use cookies to{" "}
              <strong>enhance user experience</strong>.
            </li>
          </ul>

          <p className="mt-6">
            📜{" "}
            <Link href="/needhelp" className="text-blue-600 hover:underline">
              Full Privacy Policy
            </Link>
          </p>
        </>
      ),
    },

    /** 🔹 Help Center Page */
    help: {
      title: "Help Center | Comforty Furniture Support",
      content: (
        <>
          <p className="text-gray-600 leading-relaxed">
            Need quick answers? Visit our <strong>Help Center</strong> for
            frequently asked questions and detailed guides.
          </p>

          <h2 className="mt-6 text-xl font-semibold text-black">🔍 FAQs</h2>
          <p className="text-gray-700 mt-2">
            <strong>Q: How do I track my order?</strong> <br />✅ Use our{" "}
            <Link href="/track-order" className="text-blue-600 hover:underline">
              Order Tracking Tool
            </Link>
          </p>

          <p className="text-gray-700 mt-4">
            <strong>Q: What is the return policy?</strong> <br />✅ Returns are
            accepted within <strong>14 days</strong> (see{" "}
            <Link href="/needhelp" className="text-blue-600 hover:underline">
              Return Policy
            </Link>
            ).
          </p>

          <h2 className="mt-6 text-xl font-semibold text-black">
            🔹 Need More Help?
          </h2>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md mt-3">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-second" />
                <Link
                  href="mailto:support@furniro.com"
                  className="hover:text-second"
                >
                  support@comforty.com
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-second" />
                <span className="hover:text-second cursor-pointer">
                  +1 (123) 456-7890
                </span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-second" />
                {/* KEY CHANGE: Added &apos; */}
                <span className="hover:text-second cursor-pointer">
                  123 Comforty Lane&apos; FC 12345
                </span>
              </div>
            </div>
          </div>
        </>
      ),
    },
  };

  return contentData[slug] ? (
    <div className="max-w-3xl mx-auto py-10 px-6 bg-white shadow-lg rounded-md">
      <h1 className="text-3xl font-semibold text-center text-black">
        {contentData[slug].title}
      </h1>
      <div className="mt-6 text-gray-700">{contentData[slug].content}</div>
    </div>
  ) : null;
};

export default SupportContent;
