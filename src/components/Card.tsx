import { IRaccolta } from "./../firebase/firestore";

import { format } from "date-fns";
import { it } from "date-fns/locale";

import { isToday, isTomorrow } from "../utils/dateUtils";

type Props = {
    raccolta: IRaccolta;
};

const Card = ({ raccolta }: Props) => {
    const date = raccolta.date.toDate();
    const isRaccoltaToday = isToday(date);
    const isRaccoltaTomorrow = isTomorrow(date);

    const day = format(date, "EEEE d LLLL, yyyy", { locale: it });

    const raccoltaDays = raccolta.type.split(",");

    return (
        <div
            className={`card ${
                isRaccoltaToday
                    ? "bg-neutral-400 text-neutral-600"
                    : "bg-sky-600 text-white"
            }`}
        >
            <div className="card-body p-4 gap-0">
                <div className="text-lg mb-1 flex justify-between">
                    <p>
                        {isRaccoltaToday
                            ? "Entro le ore 6"
                            : "Prossima raccolta"}
                    </p>
                    {isRaccoltaToday && (
                        <div className="badge badge-accent text-white">
                            OGGI
                        </div>
                    )}
                    {isRaccoltaTomorrow && (
                        <div className="badge badge-success text-white">
                            DOMANI
                        </div>
                    )}
                </div>
                <div>
                    <p className="capitalize text-xl">{day}</p>
                </div>
                <ul className="mt-1 list-disc list-inside">
                    {raccoltaDays.map((day, i) => (
                            <li key={i}>{day}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Card;
