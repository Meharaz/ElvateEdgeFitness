import { useEffect, useState } from "react";


const useInstructors = () => {  
    const [instructor, setInstructor] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://elevate-edge-fitness-server.vercel.app/instructors')
            .then(res => res.json())
            .then(data =>{
                // const popularInstructor = data.filter(item => item.numClasses > 3)
                // // console.log(data)
                // // console.log(popularInstructor)
                setInstructor(data)
                setLoading(false)
            })
    }, [])

    return [instructor, loading]
};

export default useInstructors;