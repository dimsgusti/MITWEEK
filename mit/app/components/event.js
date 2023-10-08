import Link from 'next/link'
import Image from 'next/image'
import mitevent from '../../images/eventlogo/mitevent.png'
import seminarmit from '../../images/eventlogo/seminarmit.png'
import mitpeduli from '../../images/eventlogo/mitpeduli.png'
import mitfest from '../../images/eventlogo/mitfest.png'

export default function Event(){
    return(
        <main className="text-[#f9f7f7] mt-12 ml-8 mr-8 md:ml-28 md:mr-28">
            <hr className=' hidden opacity-20 border-t-2 border-gray-500' id='mitevent' />
            <div className='h-auto flex-col justify-center items-center'>
                <div className='flex justify-center'>
                    <Image 
                        src={mitevent}
                        width={300}
                        height={250}
                        alt='mitevent'
                        id='bggradient'
                        priority
                    />
                </div>
                <div className='sm:ml-8 sm:mr-8 md:ml-32 md:mr-32'>
                    <h1 className="text-sm">Valorant - Mobile Legend - Kompetisi Mengetik Cepat - Karya Tulis Ilmiah - Jaringan - Robotik - UI/UX Design - Videografi - Desain Poster</h1>
                    <div className='flex justify-center'>
                        <Link href='#' className='m-4 p-2 text-white block border-b-2 hover:opacity-70'>
                            <h1 className='font-bold'>Learn more</h1>
                        </Link>
                    </div>
                </div>
            </div>
            <hr className='opacity-20 border-t-2 border-gray-500' id='seminarmit' />
            <div className='h-auto flex-col justify-center items-center'>
                <div className='flex justify-center'>
                    <Image 
                        src={seminarmit}
                        width={300}
                        height={250}
                        alt='mitevent'
                        id='bggradient2'
                        priority
                    />
                </div>
                <div className='sm:ml-8 sm:mr-8 md:ml-32 md:mr-32'>
                    <h1 className="text-sm text-center">Seminar MIT salah satu 4 event MIT yang berisikan tentang seminar nasional yang bertemakan AI dan akan di sampaikan oleh salah satu dosen serta satu pemateri dari diskominfo.</h1>
                    <div className='flex justify-center'>
                        <Link href='#' className='m-4 p-2 text-white block border-b-2 hover:opacity-70'>
                            <h1 className='font-bold'>Learn more</h1>
                        </Link>
                    </div>
                </div>
            </div>
            <hr className='opacity-20 border-t-2 border-gray-500' id='mitpeduli' />
            <div className='h-auto flex-col justify-center items-center'>
                <div className='flex justify-center'>
                    <Image 
                        src={mitpeduli}
                        width={300}
                        height={250}
                        alt='mitevent'
                        id='bggradient2'
                        priority
                    />
                </div>
                <div className='sm:ml-8 sm:mr-8 md:ml-32 md:mr-32'>
                    <h1 className="text-sm text-center">MIT peduli kegiatan donor darah yang bekerjasama langsung dengan KSR Universitas Mulawarman. Dimana kegiatan ini Sebagai bentuk peduli kemanusiaan yang akan di laksanakan di Gedung Baru fakultas teknik Universitas Mulawarman.</h1>
                    <div className='flex justify-center'>
                        <Link href='#' className='m-4 p-2 text-white block border-b-2 hover:opacity-70'>
                            <h1 className='font-bold'>Learn more</h1>
                        </Link>
                    </div>
                </div>
            </div>
            <hr className='opacity-20 border-t-2 border-gray-500' id='mitfest' />
            <div className='h-auto flex-col justify-center items-center'>
                <div className='flex justify-center'>
                    <Image 
                        src={mitfest}
                        width={300}
                        height={250}
                        alt='mitevent'
                        id='bggradient2'
                        priority
                    />
                </div>
                <div className='sm:ml-8 sm:mr-8 md:ml-32 md:mr-32'>
                    <h1 className="text-sm text-center">MIT fest merupakan puncak acara atau grand closing dari rangkaian acara MIT yang berisikan festival musik serta acara pengunguman juara dan ada beberapa tenan tenan dari mahasiswa fakultas teknik untuk memeriahkan MIT fest ini.</h1>
                    <div className='flex justify-center'>
                        <Link href='#' className='m-4 p-2 text-white block border-b-2 hover:opacity-70'>
                            <h1 className='font-bold' id='gotopartner'>Learn more</h1>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}