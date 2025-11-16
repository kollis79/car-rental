"use client";

import { useState } from "react";
import Image from "next/image";

export default function Book() {
  const [formData, setFormData] = useState({
    pickupDate: "",
    pickupTime: "",
    rentalType: "hourly",
    hours: 1, // default 1 hour
    paymentMethod: "card",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "hours" ? parseInt(value) : value,
    }));
  };

  // Handle form submission
  const handleBooking = (e) => {
    e.preventDefault();
    alert(
      `✅ Booking Confirmed!\n\nPickup: ${formData.pickupDate} at ${formData.pickupTime}\nRental: ${formData.rentalType}${
        formData.rentalType === "hourly" ? ` for ${formData.hours} hour(s)` : ""
      }\nPayment: ${formData.paymentMethod}`
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col lg:flex-row justify-center items-center gap-6 p-6">
      {/* Booking Form */}
      <div className="w-full lg:w-[40%] bg-black/70 text-white shadow-2xl p-8 rounded-lg flex flex-col gap-6">
        <h2 className="text-2xl font-semibold text-center tracking-wide">
          2008 HONDA ACCORD
        </h2>

        <p className="text-gray-300 text-center text-sm leading-relaxed">
            Experience unmatched comfort and sophistication with Kollis
              Logistics executive luxury car service, ideal for business travel,
              special occasions, and exclusive nightlife services with presence
              in Lagos..
        </p>

        <form
          onSubmit={handleBooking}
          className="flex flex-col gap-4 text-left mt-4"
        >
          {/* Pickup Date */}
          <div>
            <label className="block text-sm mb-1 text-gray-300">
              Pickup Date
            </label>
            <input
              type="date"
              name="pickupDate"
              value={formData.pickupDate}
              onChange={handleChange}
              required
              className="w-full p-2 rounded bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Pickup Time */}
          <div>
            <label className="block text-sm mb-1 text-gray-300">
              Pickup Time
            </label>
            <input
              type="time"
              name="pickupTime"
              value={formData.pickupTime}
              onChange={handleChange}
              required
              className="w-full p-2 rounded bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Rental Type */}
          <div>
            <label className="block text-sm mb-1 text-gray-300">
              Rental Type
            </label>
            <select
              name="rentalType"
              value={formData.rentalType}
              onChange={handleChange}
              className="w-full p-2 rounded bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              <option value="hourly">Hourly Rental</option>
              <option value="24hours">24 Hours Rental</option>
            </select>
          </div>

          {/* Number of Hours (only show if hourly) */}
          {formData.rentalType === "hourly" && (
            <div>
              <label className="block text-sm mb-1 text-gray-300">
                Number of Hours
              </label>
              <input
                type="number"
                name="hours"
                min={1}
                max={24}
                value={formData.hours}
                onChange={handleChange}
                required
                className="w-full p-2 rounded bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
          )}

          {/* Payment Method */}
          <div>
            <label className="block text-sm mb-1 text-gray-300">
              Payment Method
            </label>
            <select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              className="w-full p-2 rounded bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              <option value="card">Credit / Debit Card</option>
              <option value="transfer">Bank Transfer</option>
              <option value="cash">Cash on Pickup</option>
            </select>
          </div>

          <button
            type="submit"
            className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-6 rounded transition-all"
          >
            BOOK NOW
          </button>
        </form>
      </div>

      {/* Car Image */}
      <Image
        src="/prado.webp"
        alt="Luxury SUV for hire"
        width={800}
        height={400}
        className="w-full lg:w-[40%] h-80 object-cover rounded-lg shadow-lg"
      />
    </div>
  );
}
