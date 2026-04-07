const Goodbye = () => {
  return (
    <div className="w-full my-3 bg-sky-100 border border-sky-300 text-sky-800 rounded-lg px-4 py-3 text-sm md:text-base">
      <p className="font-bold text-base mb-1">👋 Un annuncio importante</p>
      <p>
        Dopo maggio 2026, questo sito non sarà più attivo. Il servizio migrerà
        al nuovo progetto{' '}
        <a
          href="https://raccoly.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-semibold"
        >
          raccoly.com
        </a>
        , sviluppato a seguito di questa fase di test.
      </p>
      <p className="mt-2">
        Grazie a chi ha usato questo servizio! Se vuoi lasciare un messaggio o
        un feedback, passa dalla{' '}
        <a
          href="/contact"
          className="underline font-semibold"
        >
          sezione contatti
        </a>
        .
      </p>
    </div>
  );
};

export default Goodbye;
