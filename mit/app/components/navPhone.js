import Link from 'next/link'

export default function navPhone(){
    return(
        <main className="md:hidden sticky top-0 z-10">
            <div className="md:hidden w-full h-12 bg-[#1e2125] text-[#f9f7f7] flex justify-center items-center gap-4 sticky top-0">
                <Link href='/pages/event' className='hover:border-b-2 font-bold'>EVENT</Link>
                {/* <Link href='/' className='hover:border-b-2 font-bold'>PARTNERSHIP</Link> */}
                {/* <Link href='/' className='hover:border-b-2 font-bold'>CONTACT US</Link> */}
            </div>
        </main>
    )
}