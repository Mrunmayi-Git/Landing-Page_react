import React, { useState } from 'react';
import { FaCheckCircle, FaStar } from 'react-icons/fa';

const Pricingsection = () => {
    const [productcount, setProductCount] = useState(1);

    // Calculate product price
    const starterPrice = Math.round(4000 * (productcount / 50));
    const businessPrice = Math.round(7500 * (productcount / 50));

    return (
        <section className="py-20 px-4 bg-gradient-to-br from-indigo-50 to-purple-100">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    Flexible & Transparent <span className="text-indigo-600">Pricing</span>
                </h2>
                <p className="text-gray-600 mb-12">Choose the perfect plan that scales with your business.</p>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {/* Starter Plan */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 transform">
                        <h3 className="text-xl font-semibold text-gray-700">Starter</h3>
                        <p className="text-5xl font-bold my-4 text-indigo-600">${starterPrice}</p>
                        <p className="text-gray-500 mb-4">per month</p>
                        <ul className="text-gray-600 space-y-3">
                            <li className="flex items-center gap-2">
                                <FaCheckCircle className="text-green-500" /> 24/7 Support
                            </li>
                            <li className="flex items-center gap-2">
                                <FaCheckCircle className="text-green-500" /> Basic Analytics
                            </li>
                        </ul>
                    </div>

                    {/* Business Plan */}
                    <div className="relative bg-gradient-to-r from-indigo-500 to-purple-500 p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 transform text-white">
                        <span className="absolute top-3 right-3 bg-yellow-400 text-black text-xs px-3 py-1 rounded-full flex items-center gap-1">
                            <FaStar className="text-yellow-700" /> Best Value
                        </span>
                        <h3 className="text-xl font-semibold">Business</h3>
                        <p className="text-5xl font-bold my-4">${businessPrice}</p>
                        <p className="text-gray-200 mb-4">per month</p>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2">
                                <FaCheckCircle className="text-green-200" /> Priority Support
                            </li>
                            <li className="flex items-center gap-2">
                                <FaCheckCircle className="text-green-200" /> Advanced Analytics
                            </li>
                            <li className="flex items-center gap-2">
                                <FaCheckCircle className="text-green-200" /> Custom Integrations
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Product Count Slider */}
                <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-lg">
                    <p className="text-center text-gray-700 mb-4">
                        Manage up to <span className="font-bold text-indigo-600">{productcount}</span> products
                    </p>
                    <div className="relative px-4">
                        <div className="flex items-center gap-2">
                            <span className="text-xs sm:text-sm text-gray-600">1</span>
                            <input
                                className="flex-1 h-2 bg-indigo-300 rounded-lg appearance-none cursor-pointer transition-all focus:outline-none focus:ring-4 focus:ring-indigo-500/50"
                                type="range"
                                min="1"
                                max="50"
                                value={productcount}
                                onChange={(e) => setProductCount(parseInt(e.target.value))}
                            />
                            <span className="text-xs sm:text-sm text-gray-600">50</span>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-12">
                    <p className="text-xl text-gray-700 mb-4">Ready to get started?</p>
                    <button className="bg-indigo-600 text-white px-8 py-3 rounded-full shadow-md hover:shadow-xl hover:bg-indigo-700 transition-all transform hover:-translate-y-1">
                        Get Started
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Pricingsection;
