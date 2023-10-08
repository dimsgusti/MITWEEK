import Link from 'next/link'
import bgpartnership from '../../images/logo/bgpartnership.png'

export default function JoinUs(){
    return(
        <main className="flex justify-center text-white mt-16 p-16" id='bggradient5'>
            <div className="m-2 p-2" id='bgpartnership'>
                <hr className='opacity-20 border-t-2 border-gray-500' />
                <h1 className='text-xl font-bold mt-4' id='joinus'>Join Partnership</h1>
                <h1>Tertarik untuk gabung partnership dengan MIT-WEEK 2023?</h1>
                <h1>Yuk cari tahu selengkapnya!</h1>
                <div className='flex justify-start'>
                    <Link href='mailto:mulawarmaninformaticstechweek@gmail.com' className='mt-4 p-2 bg-blue-300 text-white rounded-lg block hover:bg-blue-500'>
                        <h1>GET IN TOUCH</h1>
                    </Link>
                </div>
            </div>

        </main>
    )
}