import Link from 'next/link'
import Image from 'next/image'
import IconLoading from './svg/loading.svg'
import IconLoading2 from './svg/loading_line.svg'
import done from './svg/done.svg'
import schedule from './svg/schedule.svg'

export default function Stepper(){
    return(
        <div className="flex items-center justify-center mt-8" style={{ zIndex: 1 }}>
            <ol className="relative text-white border-l border-gray-200">                  
                <Link href='/'>
                    <li className="mb-10 ml-6">            
                        <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -left-4 ring-4 ring-white">
                            <Image 
                                src={IconLoading}
                                width={20}
                                height={20}
                                alt='Icon'
                            />
                        </span>
                        <h3 className="font-medium leading-tight ml-2">Pendaftaran Lomba</h3>
                    </li>
                </Link>
                <Link href='#mitevent'>
                    <li className="mb-10 ml-6">            
                        <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full -left-4 ring-4 ring-white">
                            <Image 
                                src={schedule}
                                width={20}
                                height={20}
                                alt='Icon'
                            />
                        </span>
                        <h3 className="font-medium leading-tight">MITevent</h3>
                        <p className="text-sm">Competition</p>
                    </li>
                </Link>
                <Link href='#seminarmit'>
                    <li className="mb-10 ml-6">
                        <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full -left-4 ring-4 ring-white">
                            <Image 
                                src={schedule}
                                width={20}
                                height={20}
                                alt='Icon'
                            />
                        </span>
                        <h3 className="font-medium leading-tight">SeminarMIT</h3>
                        <p className="text-sm">Grand Opening &<br /> Seminar Nasional</p>
                    </li>
                </Link>
                <Link href='#mitpeduli'>
                    <li className="mb-10 ml-6">
                        <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full -left-4 ring-4 ring-white">
                            <Image 
                                src={schedule}
                                width={20}
                                height={20}
                                alt='Icon'
                            />
                        </span>
                        <h3 className="font-medium leading-tight">MITpeduli</h3>
                        <p className="text-sm">Donor Darah</p>
                    </li>
                </Link>
                <Link href='#mitfest'>
                    <li className="ml-6">
                        <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full -left-4 ring-4 ring-white">
                            <Image 
                                src={schedule}
                                width={20}
                                height={20}
                                alt='Icon'
                            />
                        </span>
                        <h3 className="font-medium leading-tight">MITfest</h3>
                        <p className="text-sm">Grand Closing</p>
                    </li>
                </Link>
                {/* <Link href='#'>
                    <li className="mb-10 ml-6">            
                        <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full -left-4 ring-4 ring-white">
                            <Image 
                                src={schedule}
                                width={20}
                                height={20}
                                alt='Icon'
                            />
                        </span>
                        <h3 className="font-medium leading-tight">MITfest</h3>
                        <p className="text-sm">Grand Closing</p>
                    </li>
                </Link> */}
                
            </ol>
        </div>
    )
}

// Done SVG
{/* <svg class="w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
</svg> */}