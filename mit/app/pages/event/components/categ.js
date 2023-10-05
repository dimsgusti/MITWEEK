import mitevent from './images/mitevent.png'
import Image from 'next/image'
import Link from 'next/link'
import valorant from './images/valorant.png'
import kti from './images/kti.png'
import mobilelegend from './images/mobilelegend.png'
import typingspeed from './images/typingspeed.png'
import robotik from './images/robotik.png'
import videografi from './images/videografi.png'
import jaringan from './images/jaringan.png'
import uiux from './images/UX.png'
import poster from './images/poster.png'
import daftar from './images/daftar.png'

export default function Categ(){
    return(
        <main className='text-[#f9f7f7] mt-12 ml-8 mr-8 md:ml-28 md:mr-28'>
            <div className='flex-col justify-center'>
                <div className=''>
                    <Image 
                        src={mitevent}
                        width={500}
                        height={500}
                        alt='mitevent'
                        priority
                    />
                </div>
                <div className='flex justify-center text-start'>
                    <h1 className='text-lg mb-4'>
                        MIT-week tahun ini mengadakan berbagai macam lomba menarik dengan tema yang beragam, mulai dari e-sport, lomba keilmuan dan Seni. Ayo ikuti dan menangkan hadiah-hadiah menarik. 
                        Untuk info lebih lanjut silahkan download juknis lomba dibawah. 
                    </h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    <div className='hover:opacity-70' style={{width: '100%', height: '100%'}}>
                        <Link href='/'>
                            <Image 
                                src={valorant}
                                alt='valorant'
                                objectFit='contain'
                            />
                        </Link>
                    </div>
                    <div className='hover:opacity-70' style={{width: '100%', height: '100%'}}>
                        <Link href='/'>
                            <Image 
                                src={typingspeed}
                                alt='valorant'
                                objectFit='contain'
                            />
                        </Link>
                    </div>
                    <div className='hover:opacity-70' style={{width: '100%', height: '100%'}}>
                        <Link href='/'>
                            <Image 
                                src={mobilelegend}
                                alt='valorant'
                                objectFit='contain'
                            />
                        </Link>
                    </div>
                    <div className='hover:opacity-70' style={{width: '100%', height: '100%'}}>
                        <Link href='/'>
                            <Image 
                                src={kti}
                                alt='valorant'
                                objectFit='contain'
                            />
                        </Link>
                    </div>
                    <div className='hover:opacity-70' style={{width: '100%', height: '100%'}}>
                        <Link href='/'>
                            <Image 
                                src={jaringan}
                                alt='valorant'
                                objectFit='contain'
                            />
                        </Link>
                    </div>
                    <div className='hover:opacity-70' style={{width: '100%', height: '100%'}}>
                        <Link href='/'>
                            <Image 
                                src={robotik}
                                alt='valorant'
                                objectFit='contain'
                            />
                        </Link>
                    </div>
                    <div className='hover:opacity-70' style={{width: '100%', height: '100%'}}>
                        <Link href='/'>
                            <Image 
                                src={uiux}
                                alt='valorant'
                                objectFit='contain'
                            />
                        </Link>
                    </div>
                    <div className='hover:opacity-70' style={{width: '100%', height: '100%'}}>
                        <Link href='/'>
                            <Image 
                                src={videografi}
                                alt='valorant'
                                objectFit='contain'
                            />
                        </Link>
                    </div>
                    <div className='hover:opacity-70' style={{width: '100%', height: '100%'}}>
                        <Link href='/'>
                            <Image 
                                src={poster}
                                alt='valorant'
                                objectFit='contain'
                            />
                        </Link>
                    </div>
                </div>
                <h1 className='mt-4'>
                    *klik untuk mendownload juknis
                </h1>
                <Link target='_blank' href='https://forms.gle/tf3kSXPGKoCfVbUR9'>
                    <div className='flex justify-center mt-8 hover:opacity-70 mb-8'>
                        <Image 
                            src={daftar}
                            width={300}
                            height={300}
                            alt='daftar'
                            priority
                        />
                    </div>
                
                </Link>
            </div>
        </main>
    )
}