import { useEffect, useState } from "react";
import { getRaccolta } from "../firebase/firestore.js";
import Card from "./Card.js";
import { Timestamp } from "firebase/firestore";
import Loading from "./Loading.js";

export type Raccolta = {
    id: number;
    date: Timestamp;
    type: string;
};

const Raccolta = () => {
    const [raccoltaItems, setRaccoltaItems] = useState<Raccolta[]>();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const data = await getRaccolta();
                setRaccoltaItems(data);
            } catch (err) {
                console.log(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className="grid gap-3 grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 mt-2">
            {raccoltaItems?.map((item) => (
                <Card
                    key={item.id}
                    raccolta={item}
                />
            ))}
        </div>
    );
};

export default Raccolta;
