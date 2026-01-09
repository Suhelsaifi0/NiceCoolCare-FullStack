import React from "react";
import Footer from "../components/Footer";
function Privacy() {
  return (
    <div className="w-full bg-white">
      {/* ===== PAGE HEADER ===== */}
      <div className="bg-[#00194B] py-16 text-center text-white">
        <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-sm">Home / Privacy Policy</p>
      </div>

      {/* ===== PRIVACY CONTENT ===== */}
      <div className="max-w-[1000px] mx-auto px-6 py-20 text-gray-700 leading-relaxed">
        <h2 className="text-2xl font-bold text-[#00194B] mb-4">Introduction</h2>
        <p className="mb-6">
          At <strong>Nice Cool Care</strong>, we respect your privacy and are
          committed to protecting your personal information. This Privacy Policy
          explains how we collect, use, and safeguard your data when you visit
          our website or contact us for AC services.
        </p>

        <h2 className="text-2xl font-bold text-[#00194B] mb-4">
          Information We Collect
        </h2>
        <p className="mb-4">
          We may collect the following information when you contact us or fill
          out a form on our website:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>Name</li>
          <li>Phone number</li>
          <li>Email address</li>
          <li>Service details or messages you provide</li>
        </ul>

        <h2 className="text-2xl font-bold text-[#00194B] mb-4">
          How We Use Your Information
        </h2>
        <p className="mb-4">
          The information collected is used only for the following purposes:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>To respond to your service requests and inquiries</li>
          <li>To provide AC repair, installation, and maintenance services</li>
          <li>To contact you regarding appointments or service updates</li>
          <li>To improve our customer service experience</li>
        </ul>

        <h2 className="text-2xl font-bold text-[#00194B] mb-4">
          Data Protection
        </h2>
        <p className="mb-6">
          We take appropriate security measures to protect your personal data
          from unauthorized access, alteration, disclosure, or destruction. Your
          information is never sold, traded, or shared with third parties
          without your consent.
        </p>

        <h2 className="text-2xl font-bold text-[#00194B] mb-4">Cookies</h2>
        <p className="mb-6">
          Our website may use cookies to enhance user experience. Cookies help
          us understand website usage and improve our services. You can choose
          to disable cookies through your browser settings.
        </p>

        <h2 className="text-2xl font-bold text-[#00194B] mb-4">
          Third-Party Links
        </h2>
        <p className="mb-6">
          Our website may contain links to third-party websites. We are not
          responsible for the privacy practices or content of those external
          sites.
        </p>

        <h2 className="text-2xl font-bold text-[#00194B] mb-4">
          Changes to This Policy
        </h2>
        <p className="mb-6">
          Nice Cool Care reserves the right to update or modify this Privacy
          Policy at any time. Any changes will be posted on this page.
        </p>

        <h2 className="text-2xl font-bold text-[#00194B] mb-4">Contact Us</h2>
        <p>
          If you have any questions regarding this Privacy Policy or how your
          information is handled, please contact us at:
        </p>
        <p className="mt-2">
          <strong>Nice Cool Care</strong>
          <br />
          A-8, Lohia Nagar, Near Railway Station, Ghaziabad
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Privacy;
