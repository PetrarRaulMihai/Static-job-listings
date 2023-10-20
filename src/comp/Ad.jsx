
function Ad ({job, handleSelected}){
    return(
        <div className={`p-8 relative mt-20 rounded-lg shadow-[0px_15px_50px_0px_#4299e1] ${job.postedAt === '1d ago' ? 'border-l-4 border-cyan-800' : ''}`}>
            <img className="absolute -top-12 lg:top-16" src={job.logo}></img>
            <div className="lg:flex lg:flex-row lg:justify-between">
                <div className="flex flex-col gap-4 lg:ml-36">
                    <div className="flex flex-row gap-3 pt-6">
                        <p className="pr-6 text-cyan-800 font-bold whitespace-nowrap">{job.company}</p>
                        <p className={`${job.new ? "rounded-2xl bg-cyan-800 text-white px-3 text-base font-bold" : ''}`}>{job.new ? 'NEW!' : ''}</p>
                        <p className={`${job.featured ? 'rounded-2xl bg-black text-white px-3 text-base font-bold' : ''}`}>{job.featured ? 'FEATURED' : ''}</p>
                    </div>
                    <p className="font-bold">{job.position}</p>
                    <p className='border-b-2 pb-6 text-gray-400 text-lg'><span>{job.postedAt}</span> &bull; <span>{job.contract}</span> &bull; <span>{job.location}</span></p>
                </div>
                <div className='flex flex-wrap gap-6 text-xl font-bold text-cyan-800 pt-7 lg:items-center'>
                    <p onClick = {() => handleSelected(job.role)} className="bg-slate-300 px-2 py-1 rounded-md">{job.role}</p>
                    <p onClick={() => {handleSelected(job.level)}} className="bg-slate-300 px-2 py-1 rounded-md">{job.level}</p>
                    {job.languages.map((language) =>{
                        return <p onClick={() => {handleSelected(language)}} className="bg-slate-300 px-2 py-1 rounded-md">{language}</p>
                    })}     
                    {job.tools.map((tool) => {
                        return <p onClick={() => {handleSelected(tool)}} className="bg-slate-300 px-2 py-1 rounded-md">{tool}</p>
                    })}          
                </div>
            </div>
            
        </div>
    )
}

export default Ad;