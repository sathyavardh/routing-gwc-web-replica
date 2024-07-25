import React from 'react';


export default function Home() {
  return (
    <>
        <div className="home-background h-screen flex flex-col justify-center items-start mt-4 ml-14">
            <b className="gradient-text text-6xl ml-28">Solution Matters</b>
            <p className="text-white mt-4 ml-28 text-2xl">Empowering Business with Data & AI Insights to Drive Informed Actions.</p>
            <div className='flex justify-center items-center mt-20 ml-28 bg-white text-black border border-gray-300 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-orange-500'>
                  <button className='bg-transparent border-none text-black'>Learn More</button>
                  <svg className="mx-2" xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="currentColor">
                    <path d="M1 8.61035H15M15 8.61035L8 1.61035M15 8.61035L8 15.6104" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
            </div>

        </div>
        <div>
            <h2 className='text-3xl ml-10 font-bold text-blue w-full mt-10'>Fast-Track The Integration of AI Throughout Your Entire business Value Chain</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-6 p-6'>
  <div className='bg-red-50 border border-gray-200 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-red-400 hover:text-white'>
    <h2 className='text-2xl font-semibold mb-3'>Data Strategy & Engineering</h2>
    <p className='text-gray-800'>
      We establish a customized data strategy aligned with your business goals, incorporating enhanced data management, compliance, IT 
      infrastructure optimization and governance practices. This holistic approach accelerates digital transformation and drives informed 
      decision-making.
    </p>
  </div>

  <div className='bg-yellow-50 border border-gray-200 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-yellow-400 hover:text-white'>
    <h2 className='text-2xl font-semibold mb-3'>Business Intelligence & Analytics</h2>
    <p className='text-gray-800'>
      We craft scalable Business Intelligence (BI) solutions capable of handling your data's increasing volume and complexity. We 
      assist your teams in creating a roadmap to identify and address business gaps, establishing a best-in-class BI and analytics 
      practice for your organization.
    </p>
  </div>

  <div className='bg-green-50 border border-gray-200 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-green-400 hover:text-white'>
    <h2 className='text-2xl font-semibold mb-3'>Data Governance</h2>
    <p className='text-gray-800'>
      Our proficiency in data governance serves as a cornerstone for empowering businesses to seamlessly integrate and deploy cutting-edge 
      AI solutions. We apply best-in-class data governance practices to establish robust frameworks for complex and large-scale 
      enterprises.
    </p>
  </div>

  <div className='bg-orange-50 border border-gray-200 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-orange-400 hover:text-white'>
    <h2 className='text-2xl font-semibold mb-3'>Cloud Transformation</h2>
    <p className='text-gray-800'>
      Our cloud transformation solutions using Google Cloud Platform and Microsoft Azure optimize operational efficiency, foster rapid innovation 
      and agility, and ensure robust security measures for your business data integrity and compliance.
    </p>
  </div>

  <div className='bg-amber-50 border border-gray-200 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-amber-400 hover:text-white'>
    <h2 className='text-2xl font-semibold mb-3'>Industrial Internet of Things (IIoT)</h2>
    <p className='text-gray-800'>
        Our IIoT solutions envision Industry 4.0 with a wealth of actionable data derived from Manufacturing and Engineering Industry. Utilizing 24*7 machine monitoring, our solution enhances profits by minimizing machine capacity wastage, boosts Overall Equipment Effectiveness and productivity.
    </p>
  </div>

  <div className='bg-lime-50 border border-gray-200 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-lime-400 hover:text-white'>
    <h2 className='text-2xl font-semibold mb-3'>Artificial Intelligence</h2>
    <p className='text-gray-800'>
       Embark on a journey towards implementing innovative and responsible & Generative AI solutions tailored to elevate your business to new heights, in the ‘right’ way. At GWC, we help you learn the art of harnessing ethical AI while safeguarding your data
    </p>
  </div>


</div>


        </div>
    </>
  );
}
