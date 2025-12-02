import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function WorkProcessTimeline() {
  const carRef = useRef(null);
  const signalRef = useRef(null);
  const stepsRef = useRef([]);

  // Add step refs, avoiding duplicates
  const addToStepsRef = (el) => {
    if (el && !stepsRef.current.includes(el)) stepsRef.current.push(el);
  };

const steps = [
  { 
    title: "Diagnose", 
    desc: "Full inspection and computer diagnostics.", 
    icon: "fa-solid fa-magnifying-glass" 
  },
  { 
    title: "Repair & Service", 
    desc: "Repairs or services with high-quality tools.", 
    icon: "fa-solid fa-tools" 
  },
  { 
    title: "Quality Check", 
    desc: "Thorough inspection for perfect performance.", 
    icon: "fa-solid fa-check-circle" 
  },
  { 
    title: "Delivery", 
    desc: "Car cleaned, polished, and delivered on time", 
    icon: "fa-solid fa-car" 
  },
];


 useEffect(() => {
  const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

  // Hide all steps except the first
  stepsRef.current.forEach((step, i) => {
    gsap.set(step, { autoAlpha: i === 0 ? 1 : 0 });
    gsap.set(step.querySelector(".step-content"), { autoAlpha: 0 });
  });

  // Place car at first step
  const firstStep = stepsRef.current[0];
  const initialX =
    firstStep.offsetLeft +
    firstStep.offsetWidth / 2 -
    carRef.current.offsetWidth / 2;
  tl.set(carRef.current, { x: initialX, y: 0 });

  const signal = signalRef.current;
  gsap.set(signal, { autoAlpha: 0 });
  gsap.set(signal.querySelector(".light.red"), { opacity: 0 });
  gsap.set(signal.querySelector(".light.green"), { opacity: 0 });

  // Animate steps
  stepsRef.current.forEach((step, index) => {
    const stepContent = step.querySelector(".step-content");
    const targetX =
      step.offsetLeft + step.offsetWidth / 2 - carRef.current.offsetWidth / 2;

    if (index !== 0) tl.to(step, { autoAlpha: 1, duration: 0.3 });

    tl.to(carRef.current, { x: targetX, duration: 2 });

    if (index < stepsRef.current.length - 1) {
      // Show red light first
      tl.to(signal, { x: targetX, autoAlpha: 1, duration: 0.3 });
      tl.to(signal.querySelector(".light.red"), { opacity: 1 }, "<");
      tl.to(signal.querySelector(".light.green"), { opacity: 0 }, "<");

      // Fade in step content **with red light**
      tl.to(stepContent, { autoAlpha: 1, duration: 0.6 }, "<");

      // Hold for 2 seconds
      tl.to({}, { duration: 2 });

      // Switch to green
      tl.to(signal.querySelector(".light.red"), { opacity: 0 });
      tl.to(signal.querySelector(".light.green"), { opacity: 1 });

      // Hide signal
      tl.to(signal, { autoAlpha: 0, duration: 0.3 });
    } else {
      // Last step: just show content
      tl.to(stepContent, { autoAlpha: 1, duration: 0.6 });
    }
  });
}, []);

  return (
    <section className="timeline-wrapper">
      {/* Section Title and Subtitle */}
      <div className="timeline-header">
        <h6 className="timeline-small-title">// Our Work Process //</h6>
        <h2 className="timeline-title">
          How we handle your vehicle from check-in to handover
        </h2>
      </div>

      <div className="timeline-road">
        {/* SVG Car */}
        <div className="car" ref={carRef}>
          <img
            src="https://img.freepik.com/premium-vector/sedan-car-yellow-coloured-flat-style-vector-illustration_787461-1613.jpg"
            alt="Car"
            width="100"
            height="100"
          />
        </div>

        {/* Signal above road */}
        <div className="signal" ref={signalRef}>
          <div className="signal-box">
            <span className="light red"></span>
            <span className="light green"></span>
          </div>
          <div className="signal-pole"></div>
        </div>

        {/* Steps */}
        <div className="steps-container">
          {steps.map((step, i) => (
            <div className="step" key={i} ref={addToStepsRef}>
              <div className="step-content">
                <i className={`${step.icon}step-icon`} aria-hidden="true"></i>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .timeline-wrapper {
          padding: 60px 20px;
          width: 100%;
          overflow-x: hidden;
        }

        .step-icon {
  font-size: 30px;
  color: #1a3a7c;
  margin-bottom: 12px;
}

        .timeline-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .timeline-small-title {
          color: #d81324;
          font-weight: 700;
          font-size: 16px;
          margin-bottom: 10px;
          letter-spacing: 1.5px;
        }

        .timeline-title {
          font-size: 32px;
          font-weight: 700;
          color: #1a3a7c;
          margin: 0;
        }

        .timeline-road {
          position: relative;
          border-top: 4px solid #1a73e8;
          padding-top: 120px;
          margin: 0 auto;
          width: 100%;
          max-width: 1200px;
          overflow: visible;
        }

        .steps-container {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          position: relative;
          width: 100%;
        }

        .step {
          width: 220px;
          background: #fff;
          padding: 25px 20px 30px;
          border-radius: 14px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          text-align: center;
          position: relative;
        }

        .step-content {
          opacity: 0;
        }

        .step h4 {
          font-size: 20px;
          margin-bottom: 12px;
          color: #1a3a7c;
          font-weight: 700;
        }

        .step p {
          font-size: 15px;
          color: #555;
          line-height: 1.4;
        }

        .car {
          width: 65px;
          height: 32px;
          position: absolute;
          top: 14px;
          left: 0;
          z-index: 10;
        }

        .signal {
  position: absolute;
  top: -65px; /* moved down from -100px to -70px */
  width: 30px; /* match smaller signal-box width */
  left: 0; /* will move horizontally with GSAP */
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  z-index: 9;
}

.signal-box {
  background: #111;
  padding: 8px 6px;    /* smaller padding */
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 6px;            /* smaller gap between lights */
  align-items: center;
  width: 30px;          /* reduced width */
  box-shadow: 0 0 4px #000;
}

.light {
  width: 14px;          /* smaller light size */
  height: 14px;
  border-radius: 50%;
}



        .red {
          background: #ff4c4c;
        }

        .green {
          background: #00e600;
        }

        @media (max-width: 768px) {
          .timeline-road {
            border-top: none;
            border-left: 6px solid #444;
            padding-top: 0;
            padding-left: 70px;
            height: 600px;
          }

          .steps-container {
            flex-direction: column;
            gap: 130px;
            max-width: 350px;
            margin: 0 auto;
          }

          .step {
            width: 100%;
            margin-left: 40px;
            text-align: left;
          }

          .signal {
            top: -100px !important;
          }
        }
          @media (max-width: 1024px) { /* Adjust 1024px if needed */
    .timeline-wrapper {
      display: none;
    }
  }
      `}</style>
    </section>
  );
}
