type Props = {
    children: React.ReactNode;
};

const Indicator = ({ children }: Props) => {
    return (
        <div className="flex gap-2 items-center">
            {children}
            <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-warning opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-warning"></span>
            </span>
        </div>
    );
};

export default Indicator;
