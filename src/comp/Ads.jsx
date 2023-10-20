
import { useEffect, useState} from 'react'
import Ad from './Ad'
import Jobs from './data.json'


function Ads(){ 
    const [filter, setFilter] = useState([]);
    const [filterAdded, setFilterAdded] = useState(false);
    const [filteredJobs, setFilteredJobs] = useState(Jobs);
    

    const addSelected = (param) => {
        
        setFilterAdded(true);
        if(filter.includes(param)){
           return;
        }

        console.log(param)
        setFilter((prev) => [...prev, param])


        console.log()
            setFilteredJobs(filteredJobs.filter((item) => {
           
          return  [...item.languages, ...item.tools, item.role, item.level].includes(param)
        }));
       
    }

    useEffect(() => {
       
        console.log(filter)
    }, [filter])


    const removeElement = (element) => {

        if(filter.length === 1) {
            setFilterAdded(false)
        }
        
        const filteredArray = filter.filter((item) => {
            return item !== element;
        })
        setFilter(filteredArray);        
       

    }

    const clearFilter = () => {
        setFilter([]);
        setFilterAdded(false)
        setFilteredJobs(Jobs);        
    }


    
    return(
        <div>
            <div className='px-4'>
            {filteredJobs.map((job) =>{
                return <Ad job={job} handleSelected = {addSelected}/>
            })}
            </div>
            
           
           { filterAdded && <div className='absolute flex gap-3 bg-white top-16 mx-5 border-2 p-4 shadow-[0px_15px_50px_0px_#4299e1] rounded-lg'>
                <div className='flex flex-wrap gap-4'>
                    {filter.map((element) => {
                    return (
                        <div className='flex'>
                            <p className='px-2 text-cyan-800 font-semibold bg-green-200 rounded-l-lg'>{element}</p>
                            <p className='px-2 bg-cyan-600 text-white font-bold rounded-r-lg' onClick={() => removeElement(element)}> X</p>
                        </div>
                    )
                })}
                </div>

                <div className='flex items-center text-slate-500 font-bold pr-2' onClick={clearFilter}>Clear</div>
               
                </div>
            }
            
        </div>
    )
}

export default Ads;