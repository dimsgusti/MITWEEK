import Image from 'next/image'
import TimelineImage from '../pages/event/components/images/timeline.png'
import Link from 'next/link'

export default function Timeline2(){
    return(
        <main className="text-white">
            <div className='flex justify-center items-center'>
                <div className='flex-col'>
                    <Image 
                        src={TimelineImage}
                        width={1000}
                        height={1000}
                        alt='Timeline'
                        priority
                    />
                    <div className='flex-col justify-center text-center mt-4'>
                        <h1 className='text-xl md:text-3xl font-bold'>Pendaftaran Lomba</h1>
                        <h1 className='text-3xl font-mono'>20 Oktober 2023</h1>
                        <div className='flex justify-center'>
                            <Link target='_blank' href='https://forms.gle/tf3kSXPGKoCfVbUR9' className='p-2 text-white block border-b-2 hover:opacity-70 text-xl font-bold'>
                                Daftar sekarang!
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}