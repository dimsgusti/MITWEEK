import Stepper from './stepper'
import Link from 'next/link'

const Timeline = () => {
    return(
        <main className='flex items-center justify-center border-t-2 border-gray-600'>
            <div className="bg-[#2B3179] text-[#f9f7f7] h-auto w-10/12 rounded-bl-3xl rounded-br-3xl">
                <div className='md:flex justify-center text-center gap-24 mb-8'>
                    <h1 className='pt-6 text-2xl font-bold text-[#f9f7f7] md:mt-48 md:pl-8'>OUR TIMELINE</h1>
                    <Stepper />
                    <div className='flex-col'>
                        <h1 className='pt-6 text-2xl font-bold md:mt-44 md:pr-4 md:pl-2'>Pendaftaran Lomba<br />Sebelum</h1>
                        <h1 className='font-mono text-xl pb-6 text-[#f9f7f7] md:pr-4 md:pl-2 font-bold'>20 Oktober 2023</h1>
                        {/* <Link href='../pages/event/page' className='md:pr-4 md:pl-21'> */}
                        <Link href='/pages/event' className='md:pr-4 md:pl-21'>
                            <div className='m-2 p-2 bg-[#63C7C3] text-white rounded-lg hover:opacity-70'>
                                <h1 id=''>Daftar sekarang!</h1>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Timeline;