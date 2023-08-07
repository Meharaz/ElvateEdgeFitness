import { useEffect, useState } from 'react';

const useUsers = () => {
    const [users, setUsers] = useState();
    const [loading, setLoading] = useState();
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data)
                setLoading(false)
            })
    }, [])
    return [users, loading]
};

export default useUsers;