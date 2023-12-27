import { Raccolta } from "./Raccolta";

type Props = {
    raccolta: Raccolta;
};

const Card = ({ raccolta }: Props) => {
    const time = raccolta.date.toDate().toLocaleDateString("it-IT");
    const day = raccolta.date.toDate().toLocaleDateString("it-IT", {
        weekday: "long",
    });

    return (
        <div className="card bg-sky-600 text-white">
            <div className="card-body p-4 gap-0">
                <h3 className="card-title">Prossima raccolta</h3>
                <p>
                    {day} {time}
                </p>
                <p>{raccolta.type}</p>
                <small>
                    {raccolta.urbano ? "Area urbana" : "Area esterna"}
                </small>
                <div className="card-actions justify-end"></div>
            </div>
        </div>
    );
};

export default Card;
