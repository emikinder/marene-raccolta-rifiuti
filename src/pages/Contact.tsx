import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { submitMessage } from "../firebase/firestore";

interface Toast {
    message: string;
    alertType: string;
}

type Inputs = {
    name: string;
    email: string;
    message: string;
};

const Contact = () => {
    const [toast, setToast] = useState<Toast>();
    const [isLoading, setIsLoading] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        console.log(data);
        setIsLoading(true);
        const response = await submitMessage(
            data.name,
            data.email,
            data.message
        );

        if (response.success) {
            reset();
            setToast({
                message: "Messagio inviato!",
                alertType: "alert-success",
            });
        } else {
            setToast({
                message: "Messagio non inviato, riprova.",
                alertType: "alert-error",
            });
        }
        setIsLoading(false);

        setTimeout(() => {
            // remove last toast message after 2 seconds
            setToast({ message: "", alertType: "" });
        }, 3000);
    };

    return (
        <section className="p-2">
            <div className="text-sky-600 mb-3">
                <h1 className="text-3xl font-bold">Parla con noi!</h1>
                <h2 className="text-2xl">
                    Lascia il tuo messaggio, opinione o suggerimento 😀
                </h2>
            </div>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-4 w-full md:w-1/3"
            >
                <div className="flex flex-col gap-1">
                    <input
                        type="text"
                        placeholder="Nome"
                        className="input input-bordered w-full"
                        {...register("name", { required: true })}
                    />
                    {errors.name?.type === "required" && (
                        <small
                            role="alert"
                            className="ml-auto"
                        >
                            Inserisci il tuo nome
                        </small>
                    )}
                </div>
                <div className="flex flex-col gap-1">
                    <input
                        type="email"
                        placeholder="Email"
                        className="input input-bordered w-full"
                        {...register("email", { required: true })}
                    />
                    {errors.email?.type === "required" && (
                        <small
                            role="alert"
                            className="ml-auto"
                        >
                            Inserisci il tuo email
                        </small>
                    )}
                </div>
                <div className="flex flex-col gap-1">
                    <textarea
                        className="textarea textarea-bordered text-area-md max-h-44"
                        placeholder="Il tuo messaggio"
                        rows={3}
                        {...register("message", { required: true })}
                    ></textarea>
                    {errors.message?.type === "required" && (
                        <small
                            role="alert"
                            className="ml-auto"
                        >
                            Inserisci il tuo messagio
                        </small>
                    )}
                </div>
                <button
                    className="btn bg-sky-600 text-white"
                    type="submit"
                >
                    {isLoading ? (
                        <span className="loading loading-dots loading-md"></span>
                    ) : (
                        "Invia"
                    )}
                </button>
            </form>
            {toast?.alertType && (
                <div className="toast toast-center toast-middle">
                    <div className={`alert ${toast.alertType} text-white`}>
                        <span>{toast.message}</span>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Contact;
