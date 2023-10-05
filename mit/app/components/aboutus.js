export default function Aboutus(){
    const judul = 'About MIT-WEEK';
    const tag = '#BersaingBerinovasiDenganBerteknologi';
    const deskripsi = 'Mulawarman Informatics Tech Week atau MIT-WEEK adalah event tahunan bersakala nasional yang diadakan oleh Himpunan Mahasiswa Prodi Informatika Universitas Mulawarman. dengan berbagai acara mulai dari Seminar Nasional, Kompetisi, dan Bazaar dan masih banyak lagi.';
    const deskripsi2 = 'MIT-Week Tahun ini Bakal mengadakan beberapa acara yang menarik mulai dari Seminar, Bazaar, dan Lomba-lomba yang mencakup Teknologi, Seni, dan E-sport.';

    return(
        <main className="text-[#f9f7f7] mt-12 mb-12 ml-8 mr-8 md:ml-28 md:mr-28" id="aboutus">
            <div className="flex-col justify-center items-center text-center">
                <h1 className="text-2xl font-bold">
                    {judul}
                </h1>
                <h1 className="text-sm font-mono mt-2">
                    {tag}
                </h1>
                <h1 className="text-lg mt-4">
                    {deskripsi}
                    <br />
                </h1>
                <h1 className="text-lg">
                    {deskripsi2}
                </h1>

            </div>
        </main>
    )
}