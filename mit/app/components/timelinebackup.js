<main className='flex items-center justify-center border-t-2 border-gray-600'>
    <div className="bg-[#20245a] text-[#f9f7f7] h-auto w-10/12 rounded-bl-3xl rounded-br-3xl">
        <div className='md:flex justify-center text-center gap-24 mb-8'>
            <h1 className='pt-6 text-2xl font-bold text-[#f9f7f7] md:mt-48 md:pl-8'>OUR TIMELINE</h1>
            <Stepper />
            <div className='flex-col'>
                <h1 className='pt-6 text-xl font-bold md:mt-44 md:pr-4 md:pl-2'>Pendaftaran Lomba</h1>
                <h1 className='font-mono text-lg pb-6 text-[#f9f7f7] md:pr-4 md:pl-2' id='countdown'></h1>
                <Link href='#' className='md:pr-4 md:pl-21'>
                    <div className='m-2 p-2 bg-red-200 text-black rounded-lg'>
                        <h1 id=''>Pelajari selengkapnya</h1>
                    </div>
                </Link>
            </div>
        </div>
    </div>
</main>