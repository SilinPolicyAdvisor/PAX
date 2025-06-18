"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export function QuoteManagementDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        {isOpen ? (
          <>
            <span>Hide details</span>
            <ChevronUp size={16} className="ml-1" />
          </>
        ) : (
          <>
            <span>Show details</span>
            <ChevronDown size={16} className="ml-1" />
          </>
        )}
      </button>
      
      {isOpen && (
        <div className="mt-4 border-t border-gray-200 dark:border-gray-800 pt-4">
          <p className="text-sm text-muted-foreground">
            Our real-time quote management system gives you complete visibility into the status of every group insurance quote. Track progress, receive alerts when clients view your proposals, and quickly identify which options are most competitive for each prospect.
          </p>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
              <div className="text-xs text-muted-foreground">Active Quotes</div>
              <div className="text-lg font-bold">247</div>
            </div>
            <div className="p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
              <div className="text-xs text-muted-foreground">Avg Response Time</div>
              <div className="text-lg font-bold">2.4 hrs</div>
            </div>
            <div className="p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
              <div className="text-xs text-muted-foreground">Conversion Rate</div>
              <div className="text-lg font-bold">28%</div>
            </div>
            <div className="p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
              <div className="text-xs text-muted-foreground">Avg Deal Size</div>
              <div className="text-lg font-bold">$12.4K</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 