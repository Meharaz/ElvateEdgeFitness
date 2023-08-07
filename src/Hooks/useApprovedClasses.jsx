import { useEffect, useState } from "react";

const useApprovedClasses = () => {
    const [approvedClasses, setApprovedClasses] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://elevate-edge-fitness-server.vercel.app/approvedClasses')
            .then(res => res.json())
            .then(data => {
                setApprovedClasses(data);
                setLoading(false);
            })
    }, [])
    return [approvedClasses, loading]
}

export default useApprovedClasses;