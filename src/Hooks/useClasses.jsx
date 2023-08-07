import { useEffect, useState } from "react";
import { useQuery } from '@tanstack/react-query'

const useClasses = () => {
    const queryKey = ['classes']
    const { refetch, data: classes } = useQuery({
        queryKey,
        queryFn: async () => {
            const response = await fetch('http://localhost:5000/classes/')
            return response.json();
        }

    })
    return [classes, refetch];


    // const [classes, setClasses] = useState([]);
    // const [loading, setLoading] = useState(true);
    // useEffect(() => {
    //     fetch('http://localhost:5000/classes/')
    //         .then(res => res.json())
    //         .then(data => {
    //             setClasses(data);
    //             setLoading(false);
    //         })
    // }, [])
    // return [classes, loading]
}

export default useClasses;