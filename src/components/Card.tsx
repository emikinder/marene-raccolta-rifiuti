import { Raccolta } from "./Raccolta";

type Props = {
    raccolta: Raccolta;
};

const Card = ({ raccolta }: Props) => {
    const isToday = (someDate: Date) => {
        const today = new Date();
        return (
            someDate.getDate() === today.getDate() &&
            someDate.getMonth() === today.getMonth() &&
            someDate.getFullYear() === today.getFullYear()
        );
    };

    const isTomorrow = (someDate: Date) => {
        const today = new Date();
        return (
            someDate.getDate() === today.getDate() + 1 &&
            someDate.getMonth() === today.getMonth() &&
            someDate.getFullYear() === today.getFullYear()
        );
    };

    const date = raccolta.date.toDate();
    const isRaccoltaToday = isToday(date);
    const isRaccoltaTomorrow = isTomorrow(date);

    const time = raccolta.date.toDate().toLocaleDateString("it-IT");
    const day = raccolta.date.toDate().toLocaleDateString("it-IT", {
        weekday: "long",
    });

    let title = "Più avanti";
    if (isRaccoltaToday) {
        title = "Entro le ore 6";
    } else if (isRaccoltaTomorrow) {
        title = "Prossima raccolta";
    }

    return (
        <div
            className={`card ${
                isRaccoltaToday
                    ? "bg-neutral-400 text-neutral-600"
                    : "bg-sky-600 text-white"
            }`}
        >
            <div className="card-body p-4 gap-0">
                <div className="text-xl mb-1 flex justify-between">
                    <p>{title}</p>
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
                <p className="capitalize">
                    {day} {time}
                </p>
                <section className="flex justify-between">
                    <p>{raccolta.type}</p>
                </section>
            </div>
        </div>
    );
};

export default Card;
