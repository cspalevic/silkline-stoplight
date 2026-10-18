import { useEffect, useState, type CSSProperties } from "react";
import { defaultStoplightConfig, type StoplightConfig, type StoplightState } from "./config.ts";
import "./index.css";

type StoplightProps = {
  config?: StoplightConfig;
  className?: string;
};

type Phase = {
  id: string;
  state: StoplightState;
};

export function Stoplight({ config = defaultStoplightConfig, className }: StoplightProps) {
  const [phase, setPhase] = useState<Phase>(() => ({
    id: config.initial,
    state: config.states.get(config.initial)!,
  }));

  const states = config.states;
  const current = states.get(phase.id);
  const duration = current?.duration;
  const next = current?.next;

  useEffect(() => {
    const nextState = states.get(next ?? "");
    if (next === undefined || nextState === undefined || duration === undefined) return;
    if (!Number.isFinite(duration) || duration <= 0) return;

    const timeout = window.setTimeout(() => {
      setPhase({ id: next, state: nextState });
    }, duration);

    return () => window.clearTimeout(timeout);
  }, [phase, states, duration, next]);

  return (
    <div
      className={className ? `stoplight ${className}` : "stoplight"}
      role="img"
      aria-label={current ? `${phase.id} light` : "Traffic light"}
    >
      <div className="stoplight-housing" aria-hidden="true">
        {[...config.states.entries()].map(([id, state]) => {
          const lit = phase.id === id;
          return (
            <div
              key={id}
              className="stoplight-well"
              data-active={lit || undefined}
              style={{ "--lens": lit ? state.activeColor : state.inactiveColor } as CSSProperties}
            >
              <span className="stoplight-lens" />
            </div>
          );
        })}
      </div>
      <div className="stoplight-pole" aria-hidden="true" />
      <div className="stoplight-base" aria-hidden="true" />
    </div>
  );
}
