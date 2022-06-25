import React from 'react';
import DashboardCallUs from './DashboardCallUs';

const ClientDashboard = () => {
    return (
        <div className='py-10 border-y-black border'>
            <div className='w-11/12 mx-auto'>
                <h3 className='text-[#0E2E67] text-4xl font-bold text-center px-5'>Our Clients Get Full Access To The State-Of-The-Art <span className='text-secondary'>Client Dashboard</span> Project Management Tool!</h3>
                <p className='text-[#0E2E67] text-2xl text-center italic py-6'>Salient Features Of Our <span className='text-secondary'>Client Dashboard:</span></p>
                <div className=''>
                    <img className='mx-auto' src="https://i.ibb.co/rtQp2J1/client-dashboard-image.webp" alt="" />
                </div>
                
            </div>
            <DashboardCallUs />
        </div>
    );
};

export default ClientDashboard;