import { portfolioData } from "../data/portfolioData";

const Learning = () => {
  const { currentlyLearning, nextGoals } = portfolioData.learning;

  return (
    <section
      id="learning"
      className="fade-in-reveal scroll-mt-16 border-t border-[var(--color-border)] pb-[var(--spacing-section)] pt-[var(--spacing-section)]"
    >
      <header className="mb-10">
        <p className="section-label mb-2">Learning log</p>
        <h2 className="section-title">Current focus</h2>
        <p className="mt-3 max-w-prose body-text">
          Sedang fokus belajar — transparan soal apa yang dikuasai dan apa yang masih
          dalam proses.
        </p>
      </header>

      <div className="mb-10 flex flex-col gap-6">
        <p className="section-label">Sedang dipelajari</p>
        {currentlyLearning.map((block) => (
          <div
            key={block.topic}
            className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 md:p-6"
          >
            <h3 className="mb-3 text-sm font-semibold text-[var(--color-fg)]">
              {block.topic}
            </h3>
            <ul className="flex flex-col gap-2">
              {block.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-[var(--color-muted)]"
                >
                  <span
                    className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)]"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div>
        <p className="section-label mb-4">Next up</p>
        <ol className="flex flex-col gap-3">
          {nextGoals.map((goal, index) => (
            <li
              key={goal}
              className="flex items-center gap-4 text-sm text-[var(--color-fg)]"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[var(--color-border)] text-xs font-medium text-[var(--color-muted)]">
                {index + 1}
              </span>
              {goal}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Learning;
