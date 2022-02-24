import React,{ useState , useEffect} from 'react';

const Search =()=>{
    const [term,setTerm]=useState("");
    console.log('i will run every time');
    useEffect(()=>{
        console.log('i will run only once');
    });
    
    return (
        <div>
            <div className="ui form ">
                <div className='field'>
                    <label>Enter your Term</label>
                    <input
                    value={term}
                    onChange={(e)=>setTerm(e.target.value)}
                     className='input'
                     />
                </div>
            </div>
        </div>
    );
}

export default Search;