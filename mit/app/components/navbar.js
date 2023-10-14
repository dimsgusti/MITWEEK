import Link from 'next/link'
import Image from 'next/image'
import LogoMIT from '../../images/logo/logo1.png'
import LogoMITDesktop from '../../images/logo/logodesktop.png'

export default function Navbar(){
    const webName = 'MIT-WEEK 2023'
    return(
        <nav className="bg-[#1e2125] text-[#f9f7f7] z-10">
            <div className="flex justify-center md:justify-evenly items-center p-4">
                <div className="lg:text-lg">
                    <Link href='/'>
                        <Image
                            src={LogoMITDesktop}
                            width={150}
                            height={150}
                            alt="Logo"
                            priority
                        />
                    </Link>
                </div>
                <div className="hidden md:flex gap-8 lg:text-md">
                    <Link href='/' className='hover:border-b-2 font-bold'>HOME</Link>
                    <Link href='/pages/event' className='hover:border-b-2 font-bold'>EVENT</Link>
                    <Link href='/#gotopartner' className='hover:border-b-2 font-bold'>PARTNERSHIP</Link>
                    {/* <Link href='/' className='hover:border-b-2 font-bold'>CONTACT US</Link> */}
                </div>
                <div className="lg:block lg:text-lg">
                    <Link href='/pages/account' className='hidden hover:border-b-2'>LOGIN</Link>
                </div>
            </div>
        </nav>
    )
}