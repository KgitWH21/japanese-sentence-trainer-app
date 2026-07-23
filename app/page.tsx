import { useCallback, useEffect, useMemo, useState } from "react";
import {
  categoryMeta,
  levelMeta,
  trainerData,
  type Category,
  type Level,
  type TrainerItem,
} from "./trainer-data";

const categories: Category[] = [
  "starter",
  "pattern",
  "ender",
  "scene",
  "wildcard",
  "idiom",
];

type CardState = {
  category: Category;
  item: TrainerItem;
  locked: boolean;
  active: boolean;
};

function initialCards(level: Level): CardState[] {
  return categories.map((category, index) => ({
    category,
    item: trainerData[level][category][0],
    locked: false,
    active: index === 0,
  }));
}

function randomActiveSet(
  lockedCategories: Category[] = [],
  forceFullSet = false,
): Set<Category> {
  if (forceFullSet) return new Set(categories);

  const targetCount = Math.floor(Math.random() * categories.length) + 1;
  const selected = new Set(lockedCategories);
  const available = categories.filter((category) => !selected.has(category));
  for (let index = available.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [available[index], available[swapIndex]] = [
      available[swapIndex],
      available[index],
    ];
  }
  const effectiveTarget = Math.max(targetCount, selected.size);

  available
    .slice(0, Math.max(0, effectiveTarget - selected.size))
    .forEach((category) => selected.add(category));

  return selected;
}

function pick<T>(items: T[], current?: T): T {
  if (items.length === 1) return items[0];
  let candidate = items[Math.floor(Math.random() * items.length)];
  while (candidate === current) {
    candidate = items[Math.floor(Math.random() * items.length)];
  }
  return candidate;
}

export default function App() {
  const [level, setLevel] = useState<Level>("beginner");
  const [cards, setCards] = useState<CardState[]>(() =>
    initialCards("beginner"),
  );
  const [showRomaji, setShowRomaji] = useState(false);
  const [recallMode, setRecallMode] = useState(false);
  const [fullSet, setFullSet] = useState(false);
  const [revealed, setRevealed] = useState<Partial<Record<Category, boolean>>>(
    {},
  );
  const [rollCount, setRollCount] = useState(1);
  const [mobileDrawMinimized, setMobileDrawMinimized] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const savedRomaji = window.localStorage.getItem("jst-romaji");
      const savedRecall = window.localStorage.getItem("jst-recall");
      const activeCategories = randomActiveSet();
      if (savedRomaji !== null) setShowRomaji(savedRomaji === "true");
      if (savedRecall !== null) setRecallMode(savedRecall === "true");
      setCards((current) =>
        current.map((card) => ({
          ...card,
          item: pick(trainerData.beginner[card.category], card.item),
          active: activeCategories.has(card.category),
        })),
      );
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("jst-romaji", String(showRomaji));
  }, [showRomaji]);

  useEffect(() => {
    window.localStorage.setItem("jst-recall", String(recallMode));
  }, [recallMode]);

  const shuffle = useCallback(() => {
    setCards((previous) => {
      const lockedCategories = previous
        .filter((card) => card.locked && card.active)
        .map((card) => card.category);
      const activeCategories = randomActiveSet(lockedCategories, fullSet);

      return previous.map((card) => {
        return {
          ...card,
          item: card.locked
            ? card.item
            : pick(trainerData[level][card.category], card.item),
          active: activeCategories.has(card.category),
        };
      });
    });
    setRevealed({});
    setRollCount((count) => count + 1);
  }, [fullSet, level]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;
      if (
        event.code === "Space" &&
        !["INPUT", "TEXTAREA", "BUTTON", "SELECT"].includes(target.tagName)
      ) {
        event.preventDefault();
        shuffle();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [shuffle]);

  const selectLevel = (nextLevel: Level) => {
    const activeCategories = randomActiveSet([], fullSet);
    setLevel(nextLevel);
    setCards(
      initialCards(nextLevel).map((card) => ({
        ...card,
        item: pick(trainerData[nextLevel][card.category]),
        active: activeCategories.has(card.category),
      })),
    );
    setRevealed({});
    setRollCount((count) => count + 1);
  };

  const toggleCard = (category: Category, key: "locked" | "active") => {
    setCards((previous) =>
      previous.map((card) =>
        card.category === category
          ? key === "locked" && !card.locked
            ? { ...card, locked: true, active: true }
            : { ...card, [key]: !card[key] }
          : card,
      ),
    );
  };

  const activeCount = cards.filter((card) => card.active).length;
  const levelNumber = useMemo(
    () => ({ beginner: "01", intermediate: "02", advanced: "03" })[level],
    [level],
  );

  return (
    <main className="site-shell">
      <div className="paper-noise" aria-hidden="true" />
      <header className="masthead">
        <a className="brand" href="#top" aria-label="Japanese Sentence Trainer">
          <span className="brand-mark">文</span>
          <span>
            <b>日本語</b>
            <small>SENTENCE TRAINER</small>
          </span>
        </a>
        <div className="masthead-note">
          <span>自主練習</span>
          <span>INDEPENDENT PRACTICE</span>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="kicker">
            <span>BUILD BY CONSTRAINT</span>
            <i aria-hidden="true" />
            <span>ROLL {String(rollCount).padStart(2, "0")}</span>
          </p>
          <h1>
            Make one sentence.
            <span>自分の日本語で。</span>
          </h1>
          <p className="hero-intro">
            Draw a structure, a situation, and an unexpected word. Then make
            the sentence yours—out loud, in your head, or on paper.
          </p>
        </div>
        <div className="hero-seal" aria-hidden="true">
          <span>文</span>
          <small>TRAIN / 2026</small>
        </div>
      </section>

      <section className="control-deck" aria-label="Trainer controls">
        <div className="level-group">
          <p className="control-label">SELECT LEVEL / 難易度</p>
          <div className="level-tabs" role="tablist" aria-label="Difficulty">
            {(Object.keys(levelMeta) as Level[]).map((key) => (
              <button
                key={key}
                type="button"
                className={level === key ? "active" : ""}
                onClick={() => selectLevel(key)}
                role="tab"
                aria-selected={level === key}
              >
                <span>{levelMeta[key].jp}</span>
                <small>{levelMeta[key].en}</small>
              </button>
            ))}
          </div>
        </div>

        <div className="setting-group">
          <p className="control-label">DISPLAY / 表示</p>
          <div className="switch-row">
            {level === "beginner" && (
              <label className="switch">
                <input
                  type="checkbox"
                  checked={showRomaji}
                  onChange={(event) => setShowRomaji(event.target.checked)}
                />
                <span aria-hidden="true" />
                <b>Romaji</b>
              </label>
            )}
            <label className="switch">
              <input
                type="checkbox"
                checked={recallMode}
                onChange={(event) => {
                  setRecallMode(event.target.checked);
                  setRevealed({});
                }}
              />
              <span aria-hidden="true" />
              <b>Recall mode</b>
            </label>
            <label className="switch">
              <input
                type="checkbox"
                checked={fullSet}
                onChange={(event) => {
                  const checked = event.target.checked;
                  setFullSet(checked);
                  if (checked) {
                    setCards((current) =>
                      current.map((card) => ({ ...card, active: true })),
                    );
                  }
                }}
              />
              <span aria-hidden="true" />
              <b>Full set</b>
            </label>
          </div>
        </div>
      </section>

      <section className="challenge-heading">
        <div>
          <p>
            LEVEL {levelNumber} · {levelMeta[level].jp}
          </p>
          <h2>今日の構文</h2>
          <span>{levelMeta[level].descriptor}</span>
        </div>
        <div className="challenge-count">
          <b>{activeCount}</b>
          <span>ACTIVE<br />CONSTRAINTS</span>
        </div>
      </section>

      <section className="card-grid" aria-label="Sentence constraints">
        {cards.map((card) => {
          const meta = categoryMeta[card.category];
          const detailsHidden = recallMode && !revealed[card.category];
          return (
            <article
              className={`trainer-card card-${card.category} ${
                card.active ? "" : "inactive"
              }`}
              key={card.category}
            >
              <div className="card-topline">
                <span className="card-number">{meta.number}</span>
                <div>
                  <p>{meta.eyebrow}</p>
                  <h3>{meta.title}</h3>
                </div>
                <button
                  type="button"
                  className={`lock-button ${card.locked ? "locked" : ""}`}
                  onClick={() => toggleCard(card.category, "locked")}
                  aria-label={`${card.locked ? "Unlock" : "Lock"} ${meta.title}`}
                  aria-pressed={card.locked}
                >
                  <span aria-hidden="true">{card.locked ? "●" : "○"}</span>
                  {card.locked ? "LOCKED" : "LOCK"}
                </button>
              </div>

              <div className="card-content">
                <p className="japanese">{card.item.jp}</p>
                {level === "beginner" &&
                  showRomaji &&
                  card.item.romaji && (
                    <p className="romaji">{card.item.romaji}</p>
                  )}

                {detailsHidden ? (
                  <button
                    type="button"
                    className="reveal-button"
                    onClick={() =>
                      setRevealed((current) => ({
                        ...current,
                        [card.category]: true,
                      }))
                    }
                  >
                    <span>答えを表示</span>
                    Reveal meaning & note
                  </button>
                ) : (
                  <div className="card-details">
                    <p className="meaning">{card.item.en}</p>
                    {card.item.note && (
                      <p className="note">{card.item.note}</p>
                    )}
                    {card.item.example && (
                      <p className="example">
                        <span>例</span>
                        {card.item.example}
                      </p>
                    )}
                  </div>
                )}
              </div>

              <button
                type="button"
                className="use-toggle"
                onClick={() => toggleCard(card.category, "active")}
                aria-pressed={card.active}
              >
                <span aria-hidden="true">{card.active ? "✓" : "+"}</span>
                {card.active ? "IN THIS ROUND" : "ADD TO ROUND"}
              </button>
            </article>
          );
        })}
      </section>

      <section className="roll-zone">
        <div>
          <p>LOCK WHAT WORKS. ROLL WHAT DOESN’T.</p>
          <span>
            Each draw selects one to six cards. Full set keeps all six in play.
          </span>
        </div>
        <button type="button" className="roll-button" onClick={shuffle}>
          <span className="roll-kanji">引</span>
          <span>
            <b>DRAW NEW CHALLENGE</b>
            <small>SPACE BAR</small>
          </span>
          <span className="arrow" aria-hidden="true">↗</span>
        </button>
      </section>

      <div
        className={`mobile-draw-dock ${
          mobileDrawMinimized ? "minimized" : ""
        }`}
        aria-label="Mobile challenge controls"
      >
        <button
          type="button"
          className="mobile-draw-tab"
          onClick={() => setMobileDrawMinimized((current) => !current)}
          aria-label={
            mobileDrawMinimized
              ? "Expand draw controls"
              : "Minimize draw controls"
          }
          aria-expanded={!mobileDrawMinimized}
        >
          <span aria-hidden="true">
            {mobileDrawMinimized ? "⌃" : "⌄"}
          </span>
          {mobileDrawMinimized ? "OPEN" : "MINIMIZE"}
        </button>
        <button
          type="button"
          className="mobile-draw-main"
          onClick={shuffle}
          aria-label="Draw new challenge"
        >
          <span className="mobile-draw-kanji">引</span>
          {!mobileDrawMinimized && (
            <span className="mobile-draw-label">
              <b>DRAW NEW CHALLENGE</b>
              <small>1–6 CONSTRAINTS</small>
            </span>
          )}
          <span className="mobile-draw-arrow" aria-hidden="true">↗</span>
        </button>
      </div>

      <footer>
        <span>日本語 SENTENCE TRAINER</span>
        <span>HAC SOFTWARE / 2026</span>
      </footer>
    </main>
  );
}
