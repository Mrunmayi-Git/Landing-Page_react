import React from "react";
import slack from "../assets/slack.png"
import amazon from "../assets/amazon.png"
import woocommerce from "../assets/woocommerce.png"
import meundies from "../assets/meundies.png"
import sitepoint from "../assets/sitepoint.png"
import intercom from "../assets/intercom.png"
import adobe from "../assets/adobe.png"
import mixpanel from "../assets/mixpanel.png"

const CompanyLogo = () =>{
    const logos =[slack, amazon, woocommerce, meundies, sitepoint,adobe, intercom,mixpanel]
    return(
        <div className='w-full overflow-hiddencontainer mx-auto py-20 px-8 gap-8 flex sm:flex-row flex-col sm:items-center  '>
            <div className='w-[300px] shrink-0 px-5 text-gray-600 border-l-4 border-blue-500 bg-white py-2 z-10 sm:text-base text-xl font-semibold text-left sm:mr-10"'>proud partner at <br/>HubSpot & Segment</div>
            <div className='flex animate-marquee whitespace-nowrap'>
            {logos.map((logo,index)=>(
                <img src={logo} alt="companylogo" className="mx-12 h-8 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"/>
            ))}
        </div>
        </div>
       
    )
}
export default CompanyLogo