import React from 'react'

function LeftBanner() {
    return (
        <>
        <div className="w-full lgl:w-1/2 flex flex-col gap-20 b-green-500">
      <div className="flex flex-col gap-5">
        
        <h1 className="text-6xl font-bold text-orange-500">
        Integrates with all the tools you're already using! <span className="text-orange-500 capitalize"></span>
        </h1>
       
        
        <p  className="pt-2 text-xl md:text-xl font-medium">
        Transform Your Marketing with Our Analytics SaaS: Autopilot, AI Predictions, Scalability, 
        Mobile-friendly Dashboard, and More for Effective Insights.
        </p>
          <div>

          <button 
        className="bg-orange-500 text-white border border-white px-8 py-3 rounded-[30px]">Browse all Integrations</button>
          </div>
       
      </div>
     {/* Media */}
     
    </div>
        </>
    )
}

export default LeftBanner
