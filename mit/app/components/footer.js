import LogoMIT from '../../images/logo/logo1.png'
import Image from 'next/image'
import Link from 'next/link'
import LogoInstagram from '../../images/svgmedia/ins.svg'
import LogoEmail from '../../images/svgmedia/mail.svg'
import LogoTiktok from '../../images/svgmedia/tiktok.svg'
import LogoLinkedIn from '../../images/svgmedia/linkedin.svg'

export default function Footer(){
    return(
        <footer className="bg-[#39393B] text-[#F2F0E9] rounded-lg shadow m-4 bottom-0">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-center">
                    <a href="https://google.com/" className="flex items-center mb-4 sm:mb-0">
                        {/* Logo */}
                        <Image 
                            src={LogoMIT}
                            width={100}
                            height={100}
                            className='mr-3'
                            alt='Logo'
                        />
                        <span className='self-center text-2xl font-semibold whitespace-nowrap mr-16'>MIT-WEEK 2023</span>
                    </a>
                    <ul className='flex-col flex-wrap items-center mb-6 text-sm font-medium text-[#F2F0E9] sm:mb-0'>
                        <div className='flex'>
                            <li>
                                <Link href='/' className='mr-4 hover:underline md:mr-6'>About</Link>
                            </li>
                            <li>
                                <Link href='/' className='hover:underline'>Contact</Link>
                            </li>
                        </div>
                        <div className='flex mt-4'>
                            <Link href='/'>
                                <Image 
                                    src={LogoInstagram}
                                    width={50}
                                    height={50}
                                    className='mr-3'
                                    alt='Logo'
                                />
                            </Link>
                            <Link href='/'>
                                <Image 
                                    src={LogoEmail}
                                    width={50}
                                    height={50}
                                    className='mr-3'
                                    alt='Logo'
                                />
                            </Link>
                            <Link href='/'>
                                <Image 
                                    src={LogoTiktok}
                                    width={50}
                                    height={50}
                                    className='mr-3'
                                    alt='Logo'
                                />
                            </Link>
                            <Link href='/'>
                                <Image 
                                    src={LogoLinkedIn}
                                    width={50}
                                    height={50}
                                    className='mr-3'
                                    alt='Logo'
                                />
                            </Link>
                        </div>
                    </ul>
                </div>
                <hr className='my-6 border-gray-200 sm:mx-auto lg:my-8'></hr>
                <span className='block text-sm text-center text-[#F2F0E9] sm:text-center'>© 2023 <a href='https://google.com/' className='hover:underline'>MIT-WEEK</a>. All Rights Reserved.</span>
            </div>

        </footer>
    )
}