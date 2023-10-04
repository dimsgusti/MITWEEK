import Link from 'next/link'
import Image from 'next/image'
import LogoMIT from '../../images/logo/logo1.png'

export default function Navbar(){
    const webName = 'MIT-WEEK 2023'
    return(
        <nav className="bg-[#2c3178] text-[#f9f7f7]">
            <div className="flex justify-center md:justify-evenly items-center p-4">
                <div className="lg:text-lg">
                    {/* <Link href='/' className=''>{webName}</Link> */}
                    <Image
                        src={LogoMIT}
                        width={75}
                        height={75}
                        alt="Logo"
                        priority
                    />
                </div>
                <div className="hidden md:flex gap-8 lg:text-md">
                    <Link href='/' className='hover:border-b-2'>HOME</Link>
                    <Link href='/' className='hover:border-b-2'>EVENT</Link>
                    <Link href='/' className='hover:border-b-2'>PARTNERSHIP</Link>
                    <Link href='/' className='hover:border-b-2'>CONTACT US</Link>
                </div>
                {/* <div className="hidden lg:block"> */}
                <div className="lg:block lg:text-lg">
                    <Link href='/pages/account' className='hidden hover:border-b-2'>LOGIN</Link>
                </div>
            </div>
        </nav>
    )
}