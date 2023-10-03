import react from 'react';
import Image from 'next/image';
import GPlogo from 'public/GPlogo.png';
import ASlogo from 'public/ASlogo.png';
import facebook from 'public/facebook.svg';
import twitter from 'public/twitter.svg';
import youtube from 'public/youtube.svg';
import instagram from 'public/instagram.svg';
import ret from 'public/return.png';
import original from 'public/original.png';

function Footer(){
    return(
        <div className='bg-[#FAFBFC] font-sans antialiased text-[14px]'>
            <div className='mx-[20%] flex pt-[40px]'>
            <div className='basis-1/6 flex-row'>
                <div>
                    <p className='mb-[20px] font-bold text-[12px]'>ONLINE SHOPPING</p>
                    <ul className='mb-[20px] font-extralight'>
                        <li className='mb-[2px]'>
                            Men
                        </li>
                        <li className='mb-[2px]'>
                            Women
                        </li>
                        <li className='mb-[2px]'>
                            Kids
                        </li>
                        <li className='mb-[2px]'>
                            Home and Living
                        </li>
                        <li className='mb-[2px]'>
                            Gift Cards
                        </li>
                        <li className='mb-[2px]'>
                            Myntra Insider
                        </li>
                    </ul>
                </div>
                <div>
                    <p className='mb-[20px] font-bold text-[12px]'>USEFUL LINKS</p>
                    <ul className='font-extralight'>
                        <li className='mb-[2px]'>
                            Blog
                        </li>
                        <li className='mb-[2px]'>
                            Careers
                        </li>
                        <li className='mb-[2px]'>
                            Site Map
                        </li>
                        <li className='mb-[2px]'>
                            Corporation Information
                        </li>
                        <li className='mb-[2px]'>
                            Whitehat
                        </li>
                    </ul>
                </div>
            </div>
            <div className='basis-1/6'>
            <div>
                    <p className='mb-[20px] font-bold text-[12px]'>CUSTOMER POLICIES</p>
                    <ul className='font-extralight'>
                        <li className='mb-[2px]'>
                            Contact Us
                        </li>
                        <li className='mb-[2px]'>
                            FAQ
                        </li>
                        <li className='mb-[2px]'>
                            T&C
                        </li>
                        <li className='mb-[2px]'> 
                            Terms Of Use
                        </li>
                        <li className='mb-[2px]'>
                            Track Orders
                        </li>
                        <li className='mb-[2px]'>
                            Shipping
                        </li>
                        <li className='mb-[2px]'>
                            Cancellation
                        </li>
                        <li className='mb-[2px]'>
                            Returns
                        </li>
                        <li className='mb-[2px]'>
                            Privacy Policy
                        </li>
                        <li className='mb-[2px]'>
                            Greivance Officers
                        </li>
                    </ul>
                </div>
            </div>
            <div className='basis-1/3'>
                <p className='mb-[20px] font-bold text-[12px]'>EXPERIENCE MYNTRA APP ON MOBILE</p>
                <div className='flex mb-[20px]'> 
                    <Image src={GPlogo} className='w-[42%] h-[40px] pr-2'/>
                    <Image src={ASlogo} className='w-[33%] h-[40px]'/>
                </div>

                <p className='mb-[5px] font-bold text-[12px]'>KEEP IN TOUCH</p>
                <div className='flex'> 
                    <Image src={facebook} height={8} width={20} className='mr-[8px]'/>
                    <Image src={twitter} height={8} width={20} className='mx-[8px]'/>
                    <Image src={youtube} height={12} width={22}className='mx-[8px]'/>
                    <Image src={instagram} height={8} width={20}className='mx-[8px]'/>
                </div>
            </div>
            <div className='basis-1/3'>
                <div>
                    <div className='flex flex-row mb-[20px]'>
                        <Image src={original} className='w-[15%] h-[15%] pr-2'/>
                        <p className='w-[60%] font-extralight'><span className='font-bold'>100% ORIGINAL</span> guarantee for all products at myntra.com</p>
                    </div>
                    <div className='flex flex-row'>
                        <Image src={ret} className='w-[15%] h-[15%] pr-2'/>
                        <p className='w-[60%] font-extralight'><span className='font-bold'>Return within 14days </span>of receiving your order</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    ) 
}

export default Footer;