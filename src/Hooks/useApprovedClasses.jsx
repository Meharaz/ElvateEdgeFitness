import { useEffect, useState } from "react";

const useApprovedClasses = () => {
    const [approvedClasses, setApprovedClasses] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/approvedClasses')
            .then(res => res.json())
            .then(data => {
                setApprovedClasses(data);
                setLoading(false);
            })
    }, [])
    return [approvedClasses, loading]
}

export default useApprovedClasses;