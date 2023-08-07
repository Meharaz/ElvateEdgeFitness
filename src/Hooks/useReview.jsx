import { useEffect, useState } from "react";

const useReview = () => {

    const [loading, setLoading] = useState(true);
    const [review, setReview] = useState([]);

    useEffect(() => {
        fetch('https://elevate-edge-fitness-server.vercel.app/studentReview')
            .then(res => res.json())
            .then(data => {
                setReview(data)
                setLoading(false)
            })
    }, [])
    return [review, loading]
}

export default useReview;