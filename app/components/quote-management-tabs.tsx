"use client";

import { useState } from "react";
import { Clock, Activity, BarChart2 } from "lucide-react";
import Image from "next/image";

type TabItem = {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: string;
  imageSrc?: string;
};

export function QuoteManagementTabs() {
  const [activeTab, setActiveTab] = useState("quick-quote");
  
  const tabs: TabItem[] = [
    {
      id: "quick-quote",
      title: "Quick Quote Generation",
      icon: <Clock size={18} />,
      content: "Generate multiple carrier quotes simultaneously and track proposal status from initial inquiry to final enrollment."
    },
    {
      id: "advanced-proposal",
      title: "Advanced Proposal Analytics",
      icon: <Activity size={18} />,
      content: "Monitor quote performance, client engagement metrics, and identify the most competitive options for each prospect."
    },
    {
      id: "smart-comparison",
      title: "Smart Quote Comparison",
      icon: <BarChart2 size={18} />,
      content: "AI-powered algorithms automatically rank carrier options based on client needs, budget, and coverage requirements."
    }
  ];
  
  return (
    <div className="mt-8">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Vertical tabs on left */}
        <div className="w-full md:w-auto md:min-w-[260px]">
          <div className="flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-4 py-3 rounded-lg text-sm transition-all whitespace-nowrap md:whitespace-normal
                  ${activeTab === tab.id 
                    ? 'bg-blue-50 text-blue-600 font-medium border-l-4 border-blue-500 pl-3' 
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100 border-l-4 border-transparent pl-3'
                  }`}
              >
                <div className={`flex items-center justify-center mr-3 ${activeTab === tab.id ? 'text-blue-600' : 'text-gray-500'}`}>
                  {tab.icon}
                </div>
                {tab.title}
              </button>
            ))}
          </div>
        </div>
        
        {/* Content on right */}
        <div className="flex-1">
          {tabs.map((tab) => (
            activeTab === tab.id && (
              <div key={tab.id} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mr-4 text-blue-600">
                    {tab.icon}
                  </div>
                  <h4 className="text-lg font-semibold pt-1">{tab.title}</h4>
                </div>
                <p className="text-gray-600 ml-0 md:ml-14">{tab.content}</p>
                
                {/* Feature illustration based on tab */}
                <div className="mt-6 ml-0 md:ml-14 rounded-lg overflow-hidden border border-gray-200">
                  {tab.id === "quick-quote" && (
                    <div className="bg-white p-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <div className="h-6 w-36 bg-blue-200 rounded"></div>
                            <div className="h-6 w-20 bg-green-200 rounded"></div>
                          </div>
                          <div className="h-4 w-full bg-gray-200 rounded"></div>
                          <div className="grid grid-cols-3 gap-3">
                            <div className="h-16 bg-white rounded shadow-sm"></div>
                            <div className="h-16 bg-white rounded shadow-sm"></div>
                            <div className="h-16 bg-white rounded shadow-sm"></div>
                          </div>
                          <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
                          <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {tab.id === "advanced-proposal" && (
                    <div className="bg-white p-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <div className="flex justify-between mb-4">
                          <div className="space-y-1">
                            <div className="h-4 w-20 bg-blue-200 rounded"></div>
                            <div className="h-6 w-32 bg-gray-800 rounded"></div>
                          </div>
                          <div className="flex space-x-2">
                            <div className="h-8 w-8 bg-blue-200 rounded-full"></div>
                            <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
                          </div>
                        </div>
                        <div className="h-40 bg-white rounded-lg shadow-sm p-3">
                          <div className="h-4 w-full bg-gray-100 rounded mb-3"></div>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="h-12 bg-blue-100 rounded"></div>
                            <div className="h-12 bg-green-100 rounded"></div>
                          </div>
                          <div className="mt-3 h-12 bg-gray-100 rounded"></div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {tab.id === "smart-comparison" && (
                    <div className="bg-white p-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <div className="mb-3 flex justify-between">
                          <div className="h-6 w-40 bg-gray-800 rounded"></div>
                          <div className="h-6 w-20 bg-blue-200 rounded"></div>
                        </div>
                        <div className="space-y-2">
                          <div className="h-10 bg-white rounded shadow-sm flex items-center px-3">
                            <div className="h-4 w-4 bg-green-400 rounded-full mr-3"></div>
                            <div className="h-4 w-32 bg-gray-200 rounded"></div>
                            <div className="ml-auto h-4 w-16 bg-blue-200 rounded"></div>
                          </div>
                          <div className="h-10 bg-white rounded shadow-sm flex items-center px-3">
                            <div className="h-4 w-4 bg-blue-400 rounded-full mr-3"></div>
                            <div className="h-4 w-40 bg-gray-200 rounded"></div>
                            <div className="ml-auto h-4 w-16 bg-blue-200 rounded"></div>
                          </div>
                          <div className="h-10 bg-white rounded shadow-sm flex items-center px-3">
                            <div className="h-4 w-4 bg-gray-400 rounded-full mr-3"></div>
                            <div className="h-4 w-36 bg-gray-200 rounded"></div>
                            <div className="ml-auto h-4 w-16 bg-blue-200 rounded"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
} 