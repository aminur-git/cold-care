import React, { useContext } from 'react';
import Navbar from '../Components/Navbar';
import Banner from '../Components/Banner';
import { AuthContext } from '../Providers/AuthProvider';
import Campaigns from '../Components/CampaignCard';
import CampaignsLayout from './CampaignsLayout';

const HomeLayout = () => {
    const {name} = useContext(AuthContext)


    return (
        <div className='poppins'>
            <header className=''>
                <Banner></Banner>
            </header>
           
            <footer>

            </footer>
        </div>
    );
};

export default HomeLayout;