import React from "react";

export default function CustomAuthenticationSuite() {
  return (
    <div className="p-6 bg-white rounded-2xl shadow">
      <h2 className="text-xl font-semibold mb-2">Custom Authentication Suite</h2>
      <p className="mb-4 text-gray-700">
        I built a custom Supabase authentication suite for Duda/static site builders. 
        Each implementation is different, but I have integrated Stripe membership checkout, 
        Stripe multiple product checkouts, free sign ups, and protected content configurations.
      </p>
      <div className="flex flex-wrap gap-2">
        <span className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm">Supabase API</span>
        <span className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm">Google Cloud Serverless Functions</span>
        <span className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm">JavaScript</span>
        <span className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm">HTML</span>
        <span className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm">Handlebars</span>
        <span className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm">CSS</span>
      </div>
    </div>
  );
}
