import Link from 'next/link'

export default function navPhone(){
    return(
        <main className="md:hidden">
            <div className="w-full h-12 bg-[#2c3178] text-[#f9f7f7] flex justify-center items-center gap-2">
                <Link href='/' className='hover:border-b-2'>HOME</Link>
                <Link href='/' className='hover:border-b-2'>EVENT</Link>
                <Link href='/' className='hover:border-b-2'>PARTNERSHIP</Link>
                <Link href='/' className='hover:border-b-2'>CONTACT US</Link>
            </div>
        </main>
    )
}