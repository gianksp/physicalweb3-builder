import { useEffect, useState } from 'react';
import { useMoralis } from 'react-moralis';

// ==============================|| ELEMENT REFERENCE HOOKS  ||============================== //

const useAppCatalog = () => {
    const { Moralis } = useMoralis();
    const [appCatalog, setAppCatalog] = useState([]);

    const loadApps = async () => {
        const Controller = Moralis.Object.extend('Controller');
        const query = new Moralis.Query(Controller);
        query.limit(100);
        query.descending('updatedAt');
        const items = await query.find();
        setAppCatalog(items);
    };

    useEffect(() => {
        if (Moralis) {
            loadApps();
        }
    }, [Moralis]);

    return { appCatalog, setAppCatalog, loadApps };
};

export default useAppCatalog;
