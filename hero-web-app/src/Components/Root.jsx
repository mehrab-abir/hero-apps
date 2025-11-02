import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router';
import Footer from './Footer';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <div className='pt-18'>
                <Outlet></Outlet>
            </div>
            
            <Footer></Footer>
        </div>
    );
};

export default Root;