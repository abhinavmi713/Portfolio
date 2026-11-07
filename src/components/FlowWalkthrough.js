"use client";

import { useEffect, useRef, useState } from "react";

const STEPS = [
  { title: "Checkout", sub: "Razorpay · idempotency key", text: "A student pays through Razorpay. The idempotency key means a double-click or a retried request can't create a second charge." },
  { title: "API", sub: "Express · transaction", text: "The order and an outbox event are written in one MongoDB transaction. There's no dual write, so a crash can't lose the event." },
  { title: "Outbox relay", sub: "claims rows · confirms", text: "A relay claims pending rows atomically, publishes them with publisher confirms, and retries with backoff. It's safe to run several." },
  { title: "RabbitMQ", sub: "topic · retry · DLQ", text: "One order.paid event fans out to a queue per consumer. Each has its own retry queues and dead-letter queue, so one failure stays isolated." },
  { title: "Worker", sub: "email · search · refunds", text: "Consumers record processed event ids, so redelivery has no effect. If enrollment can't complete, the order goes refund_pending and the saga refunds it, parking failures for a human." },
];

export default function FlowWalkthrough() {
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) setPlaying(true);
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.25 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!playing || !visible) return;
    const id = setInterval(() => setStep((s) => (s + 1) % STEPS.length), 4200);
    return () => clearInterval(id);
  }, [playing, visible]);

  const stateOf = (i) => (i === step ? "on" : i < step ? "done" : "idle");
  const pick = (i) => {
    setStep(i);
    setPlaying(false);
  };

  return (
    <div className="flow-wrap" ref={ref}>
      <div className="flow-h">
        <div>
          <div className="kicker">Architecture walkthrough</div>
          <div style={{ fontSize: 20, fontWeight: 500, marginTop: 6 }}>How a payment becomes an enrollment, safely</div>
        </div>
        <div className="ctrls">
          <button className="cbtn" type="button" onClick={() => pick((step + STEPS.length - 1) % STEPS.length)} aria-label="Previous step">←</button>
          <button className="cbtn" type="button" onClick={() => setPlaying((p) => !p)}>{playing ? "pause" : "play"}</button>
          <button className="cbtn" type="button" onClick={() => pick((step + 1) % STEPS.length)} aria-label="Next step">→</button>
          <div className="dots">
            {STEPS.map((s, i) => (
              <button
                key={s.title}
                type="button"
                className="dot"
                aria-label={`Step ${i + 1}: ${s.title}`}
                aria-current={i === step ? "step" : undefined}
                onClick={() => pick(i)}
              >
                <i />
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="flow">
        {STEPS.map((s, i) => (
          <div key={s.title} style={{ display: "contents" }}>
            {i > 0 && <div className="edge" data-state={stateOf(i)} aria-hidden="true" />}
            <div className="node" data-state={stateOf(i)}>
              <span className="n-i">0{i + 1}</span>
              <div className="n-t">{s.title}</div>
              <div className="n-s">{s.sub}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="caption" aria-live={playing ? "off" : "polite"}>
        <div className="cap-n" aria-hidden="true">0{step + 1}</div>
        <p key={step} className="cap-t">{STEPS[step].text}</p>
      </div>
    </div>
  );
}
