import Link from 'next/link'
import Image from 'next/link'

export default function Event(){
    return(
        <main className="text-[#f9f7f7] mt-12 ml-8 mr-8 md:ml-28 md:mr-28">
            <div className="flex justify-center">
                <div className="w-1/2 h-72 flex-col">
                    <Image 
                        href=''
                        width={10}
                        height={10}
                    />
                    <div className='flex justify-center items-center' id='bggradient'>
                        <div className='flex-col'>
                            <div className='flex'>
                                <h1 className="text-3xl font-bold">MIT</h1>
                                <h1 className='text-xl'>event</h1>
                            </div>
                            <h1 className='float-left'>Competition</h1>
                        </div>
                    </div>
                </div>
                <div className='w-1/2 flex items-center justify-center'>
                    <div className='flex flex-col items-center text-center'>
                        <h1 className="text-sm">Valorant - Mobile Legend - Kompetisi Mengetik Cepat - Karya Tulis Ilmiah - Jaringan - Robotik - UI/UX Design - Videografi - Desain Poster</h1>
                        <Link href='#' className='m-4 p-2 bg-red-200 text-black rounded-lg block'>
                            <h1>Learn more</h1>
                        </Link>
                    </div>
                </div>
            </div>
            <hr className='opacity-20 border-t-2 border-gray-500' />
            <div className="flex justify-center">
                <div className='w-1/2 flex items-center justify-center'>
                    <div className='flex flex-col items-center text-center'>
                        <h1 className="text-sm text-left md:text-center">Seminar MIT salah satu 4 event MIT yang berisikan tentang seminar nasional yang bertemakan AI dan akan di sampaikan oleh salah satu dosen serta satu pemateri <br />dari diskominfo</h1>
                        <Link href='#' className='m-4 p-2 bg-red-200 text-black rounded-lg block'>
                            <h1>Learn more</h1>
                        </Link>
                    </div>
                </div>
                <div className="w-1/2 h-72 flex-col">
                    <Image 
                        href=''
                        width={10}
                        height={10}
                    />
                    <div className='flex justify-center items-center' id='bggradient2'>
                        <div className='flex-col'>
                            <div className='flex'>
                                <h1 className="text-3xl font-bold">seminar</h1>
                                <h1 className='text-xl'>MIT</h1>
                            </div>
                            <h1 className='float-left'>Grand Opening & Seminar Nasional</h1>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='opacity-20 border-t-2 border-gray-500' />
            <div className="flex justify-center">
                <div className="w-1/2 h-72 flex-col">
                    <Image 
                        href=''
                        width={10}
                        height={10}
                    />
                    <div className='flex justify-center items-center' id='bggradient3'>
                        <div className='flex-col'>
                            <div className='flex'>
                                <h1 className="text-3xl font-bold">MIT</h1>
                                <h1 className='text-xl'>peduli</h1>
                            </div>
                            <h1 className='float-left'>Donor Darah</h1>
                        </div>
                    </div>
                </div>
                <div className='w-1/2 flex items-center justify-center'>
                    <div className='flex flex-col items-center text-center'>
                        <h1 className="text-sm text-right md:text-center">MIT peduli kegiatan donor darah yang bekerjasama langsung dengan KSR Universitas Mulawarman. Dimana kegiatan ini Sebagai bentuk peduli kemanusiaan yang akan di laksanakan di Gedung Baru fakultas teknik Universitas Mulawarman.</h1>
                        <Link href='#' className='m-4 p-2 bg-red-200 text-black rounded-lg block'>
                            <h1>Learn more</h1>
                        </Link>
                    </div>
                </div>
            </div>
            <hr className='opacity-20 border-t-2 border-gray-500' />
            <div className="flex justify-center">
                <div className='w-1/2 flex items-center justify-center'>
                    <div className='flex flex-col items-center text-center'>
                        <h1 className="text-sm text-left md:text-center">MIT fest merupakan puncak acara atau grand closing dari rangkaian acara MIT yang berisikan festival musik serta acara pengunguman juara dan ada beberapa tenan tenan dari mahasiswa fakultas teknik untuk memeriahkan MIT fest ini</h1>
                        <Link href='#' className='m-4 p-2 bg-red-200 text-black rounded-lg block'>
                            <h1>Learn more</h1>
                        </Link>
                    </div>
                </div>
                <div className="w-1/2 h-72 flex-col">
                    <Image 
                        href=''
                        width={10}
                        height={10}
                    />
                    <div className='flex justify-center items-center' id='bggradient4'>
                        <div className='flex-col'>
                            <div className='flex'>
                                <h1 className="text-3xl font-bold">MIT</h1>
                                <h1 className='text-xl'>fest</h1>
                            </div>
                            <h1 className='float-left'>Grand Closing</h1>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}