import React from "react";

const Contact = () => {
  return (
    <div>
      <div class="max-w-2xl mx-auto bg-gray-100 rounded-lg shadow-lg p-8">
        <h2 class="text-3xl font-bold text-center text-blue-600 mb-6">
          Contact Us
        </h2>
        <p class="text-center text-gray-600 mb-8">
          Have a question about your next adventure? We'd love to hear from you!
        </p>

        <form action="#" method="POST" class="space-y-6">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="John Doe"
              required
              class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 bg-white p-2"
            />
          </div>

          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="you@example.com"
              required
              class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 bg-white p-2"
            />
          </div>

          <div>
            <label
              for="subject"
              class="block text-sm font-medium text-gray-700"
            >
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Booking inquiry, feedback, etc."
              class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 bg-white p-2"
            />
          </div>

          <div>
            <label
              for="message"
              class="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="5"
              placeholder="Write your message here..."
              required
              class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 bg-white p-2"
            ></textarea>
          </div>

          <div class="text-center">
            <button
              type="submit"
              class="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
