import { useEffect, useState } from 'react';

const useUsers = () => {
    const [users, setUsers] = useState();
    const [loading, setLoading] = useState();
    useEffect(() => {
        fetch('https://elevate-edge-fitness-server.vercel.app/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data)
                setLoading(false)
            })
    }, [])
    return [users, loading]
};

export default useUsers;