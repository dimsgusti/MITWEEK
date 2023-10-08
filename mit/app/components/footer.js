import LogoMIT from '../../images/logo/logo1.png'
import Image from 'next/image'
import Link from 'next/link'
import LogoInstagram from '../../images/svgmedia/ins.svg'
import LogoEmail from '../../images/svgmedia/mail.svg'
import LogoTiktok from '../../images/svgmedia/tiktok.svg'
import LogoLinkedIn from '../../images/svgmedia/linkedin.svg'

export default function Footer(){
    return(
        <footer className="bg-[#1e2125] text-[#F2F0E9] rounded-lg shadow m-4 bottom-0">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-center">
                    <a href="/" className="flex items-center mb-4 sm:mb-0">
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
                                <Link href='#aboutus' className='mr-4 hover:underline md:mr-6'>About</Link>
                            </li>
                            <li>
                                <Link href='mailto:mulawarmaninformaticstechweek@gmail.com' className='hover:underline'>Contact</Link>
                            </li>
                        </div>
                        <div className='flex mt-4'>
                            <Link target='_blank' href='https://instagram.com/mit_week?igshid=MzRlODBiNWFlZA=='>
                                <Image 
                                    src={LogoInstagram}
                                    width={25}
                                    height={25}
                                    className='mr-3'
                                    alt='Logo'
                                />
                            </Link>
                            <Link target='_blank' href='mailto:mulawarmaninformaticstechweek@gmail.com'>
                                <Image 
                                    src={LogoEmail}
                                    width={25}
                                    height={25}
                                    className='mr-3'
                                    alt='Logo'
                                />
                            </Link>
                            <Link target='_blank' href='https://www.tiktok.com/@mitweek22?is_from_webapp=1&sender_device=pc'>
                                <Image 
                                    src={LogoTiktok}
                                    width={25}
                                    height={25}
                                    className='mr-3'
                                    alt='Logo'
                                />
                            </Link>
                            {/* <Link href='/'>
                                <Image 
                                    src={LogoLinkedIn}
                                    width={25}
                                    height={25}
                                    className='mr-3'
                                    alt='Logo'
                                />
                            </Link> */}
                        </div>
                    </ul>
                </div>
                <hr className='my-6 border-gray-200 sm:mx-auto lg:my-8'></hr>
                <span className='block text-sm text-center text-[#F2F0E9] sm:text-center'>© 2023 MIT-WEEK. All Rights Reserved.</span>
            </div>

        </footer>
    )
}