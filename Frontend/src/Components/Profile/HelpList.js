<<<<<<< HEAD
import { useState } from "react";
import HelpCardComp from "../Help/HelpCardComp";

function HelpList() {
    const [activeTab, setActiveTab] = useState("Pending");
=======
import { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaExclamationTriangle } from "react-icons/fa";
import SliderProfile from "./SliderProfile";
import { useNavigate } from "react-router-dom";

function HelpList() {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
>>>>>>> 31c5cba0fd154de8888518f490b074762aa72a90

    const helpRequests = [
        {
            id: 1,
            title: "Food Donation Drive",
            date: "Feb 15, 2025",
            location: "New York, USA",
            category: "Charity",
            status: "Pending",
            image: "https://via.placeholder.com/200",
        },
        {
            id: 2,
            title: "Car Breakdown Assistance",
            date: "Jan 28, 2025",
            location: "Los Angeles, USA",
            category: "Emergency",
            status: "Completed",
            image: "https://via.placeholder.com/200",
        },
        {
            id: 3,
            title: "Blood Donation Camp",
            date: "March 10, 2025",
            location: "Chicago, USA",
            category: "Health",
            status: "Pending",
            image: "https://via.placeholder.com/200",
        },
        {
            id: 4,
            title: "Blood Donation Camp",
            date: "March 10, 2025",
            location: "Chicago, USA",
            category: "Health",
            status: "Completed",
            image: "https://via.placeholder.com/200",
        },

        {
            id: 5, 
            title: "Blood Donation Camp",
            date: "March 10, 2025",
            location: "Chicago, USA",
            category: "Health",
            status: "Completed",
            image: "https://via.placeholder.com/200",
        },
    ];

    return (
        <div className="flex-1 p-5">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-left">Your Help Requests</h2>

            {/* Tabs for Completed & Pending */}
            <div className="flex gap-3 mb-6">
                <button
                    className={`px-5 py-2 rounded-md font-semibold ${
                        activeTab === "Completed"
                            ? "bg-green-600 text-white"
                            : "border border-gray-400 text-gray-600"
                    }`}
                    onClick={() => setActiveTab("Completed")}
                >
                    Completed
                </button>
                <button
                    className={`px-5 py-2 rounded-md font-semibold ${
                        activeTab === "Pending"
                            ? "bg-yellow-500 text-white"
                            : "border border-gray-400 text-gray-600"
                    }`}
                    onClick={() => setActiveTab("Pending")}
                >
                    Pending
                </button>
            </div>

<<<<<<< HEAD
            {/* Help Cards - Filtering based on Active Tab */}
            <div className="space-y-4">
                {helpRequests.filter((help) => help.status === activeTab).length > 0 ? (
                    helpRequests
                        .filter((help) => help.status === activeTab)
                        .map((help) => <HelpCardComp key={help.id} help={help} />)
                ) : (
                    <p className="text-gray-500 text-center">No {activeTab} helps available.</p>
                )}
=======
                    {/* Category Tabs */}
                    <div className="flex gap-3 mb-4">
                        <button className="bg-green-500 text-white px-4 py-2 rounded-md">Complete</button>
                        <button className="border border-gray-400 text-gray-600 px-4 py-2 rounded-md">Pending</button>
                    </div>

                    {/* Scrap Products Section */}

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 mt-4">
                        {products.map((product) => (
                            <div key={product.id} className="flex items-center border rounded-lg p-4 shadow-md">
                                {/* Product Image */}
                                <div className="w-16 h-16 rounded-full overflow-hidden border border-gray-400">
                                    <img src={product.image} alt="Product" className="w-full h-full object-cover" />
                                </div>

                                {/* Product Details */}
                                <div className="ml-4 flex-1">
                                    <h4 className="font-semibold text-lg">{product.name}</h4>
                                    <p className="flex items-center text-sm text-gray-500 mt-1">
                                        <FaMapMarkerAlt className="mr-1" />
                                        {product.location}
                                    </p>
                                    <p className="text-sm text-gray-400">{product.date}</p>
                                </div>

                                {/* Status */}
                                <span className="text-blue-600 text-xs border border-blue-400 px-2 py-1 rounded-md">
                                    {product.status}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Add Product Button */}
                    <div className="mt-6">
                        <button onClick={()=>navigate("/create-help")} className="border border-green-500 text-green-600 px-4 py-2 rounded-lg hover:bg-green-100 flex items-center">
                            Add Help <FaExclamationTriangle className="ml-2" />
                        </button>
                    </div>
                </div>
>>>>>>> 31c5cba0fd154de8888518f490b074762aa72a90
            </div>
        </div>
    );
}

export default HelpList;
