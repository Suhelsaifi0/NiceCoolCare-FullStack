import React from "react";
import Footer from "../components/Footer";

function Service() {
  return (
    <div className="w-full bg-white">

      {/* ===== PAGE HEADER ===== */}
      <div className="bg-[#00194B] py-16 text-center text-white">
        <h1 className="text-4xl font-bold mb-2">Our Services</h1>
        <p className="text-sm">Home / Services</p>
      </div>

      {/* ===== SERVICES SECTION ===== */}
      <div className="max-w-[1200px] mx-auto px-6 py-20">

        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-[#00194B] mb-4">
            Professional AC Services by Nice Cool Care
          </h2>
          <p className="text-gray-600 max-w-[700px] mx-auto">
            Nice Cool Care provides reliable, affordable, and professional air
            conditioning services for homes and offices in Lohia Nagar,
            Ghaziabad. Our expert technicians ensure fast service and complete
            customer satisfaction.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Service Card 1 */}
          <div className="border p-6 rounded-lg hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-[#00194B] mb-3">
              Split AC Repair & Service
            </h3>
            <p className="text-gray-600 text-sm">
              Complete repair and maintenance services for split air conditioners,
              including cooling issues, gas leakage, and performance problems.
            </p>
          </div>

          {/* Service Card 2 */}
          <div className="border p-6 rounded-lg hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-[#00194B] mb-3">
              Window AC Repair & Service
            </h3>
            <p className="text-gray-600 text-sm">
              Expert window AC repair services to fix noise, cooling problems,
              water leakage, and electrical faults.
            </p>
          </div>

          {/* Service Card 3 */}
          <div className="border p-6 rounded-lg hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-[#00194B] mb-3">
              AC Installation & Uninstallation
            </h3>
            <p className="text-gray-600 text-sm">
              Safe and professional installation and uninstallation services for
              both split and window air conditioners.
            </p>
          </div>

          {/* Service Card 4 */}
          <div className="border p-6 rounded-lg hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-[#00194B] mb-3">
              AC Gas Refilling
            </h3>
            <p className="text-gray-600 text-sm">
              Accurate AC gas refilling services to restore cooling efficiency
              and improve the overall performance of your AC.
            </p>
          </div>

          {/* Service Card 5 */}
          <div className="border p-6 rounded-lg hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-[#00194B] mb-3">
              AC Maintenance & Cleaning
            </h3>
            <p className="text-gray-600 text-sm">
              Regular AC servicing and deep cleaning to ensure better cooling,
              lower electricity bills, and longer AC life.
            </p>
          </div>

          {/* Service Card 6 */}
          <div className="border p-6 rounded-lg hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-[#00194B] mb-3">
              PCB & Electrical Repair
            </h3>
            <p className="text-gray-600 text-sm">
              Advanced PCB repair and electrical fault diagnosis handled by
              experienced technicians using proper tools.
            </p>
          </div>

        </div>

        {/* SERVICE AREA */}
        <div className="mt-20 bg-gray-100 p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold text-[#00194B] mb-3">
            Service Location
          </h3>
          <p className="text-gray-600">
            📍 A-8, Lohia Nagar, Near Railway Station, Ghaziabad <br />
            We provide doorstep AC services for homes and offices in nearby areas.
          </p>
        </div>
      </div>
      <Footer/>

    </div>
  );
}

export default Service;
