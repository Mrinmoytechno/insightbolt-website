"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const BUILDER_SPRINT_URL =
  "https://contribebuildersprint.vercel.app";

const SESSION_KEY =
  "insightbolt-buildersprint-popup-dismissed";

export default function BuilderSprintPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(SESSION_KEY) === "true") {
        return;
      }
    } catch {
      // Continue if session storage is unavailable.
    }

    const timer = window.setTimeout(() => {
      setIsOpen(true);
    }, 4500);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closePopup();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  function closePopup() {
    try {
      sessionStorage.setItem(SESSION_KEY, "true");
    } catch {
      // Dismissal still works for this visit.
    }

    setIsOpen(false);
  }

  if (!isOpen) return null;

  return (
    <>
      <div
        className="bs-popup-overlay"
        onMouseDown={(event) => {
          if (event.target === event.currentTarget) {
            closePopup();
          }
        }}
      >
        <section
          className="bs-popup"
          role="dialog"
          aria-modal="true"
          aria-labelledby="bs-popup-title"
        >
          <button
            type="button"
            className="bs-popup-close"
            onClick={closePopup}
            aria-label="Close announcement"
          >
            ×
          </button>

          <div className="bs-popup-content">
            <div className="bs-popup-eyebrow">
              CONTRIBE × INSIGHTBOLT
            </div>

            <h2 id="bs-popup-title">
              Got an idea?
              <br />
              <span>Build something real.</span>
            </h2>

            {/* Partnership banner: landscape 16:9 */}
            <a
              href={BUILDER_SPRINT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bs-popup-banner"
              aria-label="Explore CONTRIBE Builder Sprint"
            >
              <Image
                src="/images/insightbolt-partnership-banner.webp"
                alt="Explore the CONTRIBE and InsightBolt partnership"
                width={1200}
                height={675}
                sizes="(max-width: 600px) 100vw, 520px"
                priority
                className="bs-popup-banner-image"
              />
            </a>

            <p className="bs-popup-description">
              Turn your idea into a real project through
              CONTRIBE&apos;s 14-day Builder Sprint.
            </p>

            <div className="bs-popup-offer">
              <span className="bs-popup-offer-label">
                A BENEFIT FOR ELIGIBLE BUILDERS
              </span>

              <strong>50% OFF</strong>

              <span>One eligible monthly plan for 3 months</span>
            </div>

            <p className="bs-popup-note">
              The discount is conditional on meeting the
              project submission requirements. Eligible
              participants will receive redemption
              instructions by email during December 25–30,
              2026. Terms and conditions apply.
            </p>

            <a
              href={BUILDER_SPRINT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bs-popup-cta"
            >
              Explore Builder Sprint →
            </a>

            <button
              type="button"
              onClick={closePopup}
              className="bs-popup-dismiss"
            >
              Maybe later
            </button>
          </div>
        </section>
      </div>

      <style jsx global>{`
        .bs-popup-overlay {
          position: fixed;
          inset: 0;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow-y: auto;
          padding: 20px;
          background: rgba(5, 5, 8, 0.78);
          backdrop-filter: blur(8px);
        }

        .bs-popup {
          position: relative;
          width: 100%;
          max-width: 540px;
          max-height: calc(100dvh - 40px);
          overflow-y: auto;
          background: #0b0b0d;
          color: #f4f6f8;
          border: 1px solid #303037;
          border-radius: 12px;
          box-shadow: 0 24px 100px rgba(0, 0, 0, 0.4);
          animation: bs-popup-enter 0.25s ease-out;
        }

        .bs-popup-content {
          padding: 30px;
        }

        .bs-popup-close {
          position: absolute;
          top: 12px;
          right: 12px;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border: 1px solid #3b3b42;
          border-radius: 50%;
          background: #0b0b0d;
          color: white;
          font-size: 28px;
          line-height: 1;
          cursor: pointer;
        }

        .bs-popup-eyebrow {
          padding-right: 42px;
          color: #60a5fa;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.15em;
        }

        .bs-popup-content h2 {
          margin-top: 18px;
          margin-bottom: 22px;
          color: #f4f6f8;
          font-size: clamp(30px, 6vw, 42px);
          line-height: 1.1;
          letter-spacing: -0.045em;
        }

        .bs-popup-content h2 span {
          color: #60a5fa;
        }

        .bs-popup-banner {
          display: block;
          overflow: hidden;
          width: 100%;
          aspect-ratio: 16 / 9;
          border: 1px solid #303037;
          border-radius: 8px;
          background: #111114;
        }

        .bs-popup-banner-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .bs-popup-banner:hover .bs-popup-banner-image {
          transform: scale(1.025);
        }

        .bs-popup-description {
          margin-top: 18px;
          color: #c4c7ce;
          font-size: 14px;
          line-height: 1.7;
        }

        .bs-popup-offer {
          display: flex;
          flex-direction: column;
          gap: 5px;
          margin-top: 20px;
          padding: 20px;
          border: 1px solid rgba(37, 99, 235, 0.5);
          border-radius: 8px;
          background: rgba(37, 99, 235, 0.09);
        }

        .bs-popup-offer-label {
          color: #93c5fd;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.1em;
        }

        .bs-popup-offer strong {
          color: #60a5fa;
          font-size: 36px;
          font-weight: 800;
          line-height: 1.2;
        }

        .bs-popup-offer > span:last-child {
          color: #e5e7eb;
          font-size: 12px;
          line-height: 1.6;
        }

        .bs-popup-note {
          margin-top: 16px;
          color: #898b93;
          font-size: 11px;
          line-height: 1.7;
        }

        .bs-popup-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 50px;
          margin-top: 22px;
          padding: 12px 18px;
          border-radius: 7px;
          background: #2563eb;
          color: white;
          font-size: 13px;
          font-weight: 700;
          text-align: center;
          transition: background 0.2s ease;
        }

        .bs-popup-cta:hover {
          background: #1d4ed8;
        }

        .bs-popup-dismiss {
          display: block;
          margin: 12px auto 0;
          padding: 8px 14px;
          border: 0;
          background: transparent;
          color: #898b93;
          font-size: 12px;
          cursor: pointer;
        }

        .bs-popup-dismiss:hover {
          color: #f4f6f8;
        }

        @keyframes bs-popup-enter {
          from {
            opacity: 0;
            transform: translateY(12px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 480px) {
          .bs-popup-overlay {
            padding: 12px;
          }

          .bs-popup {
            max-height: calc(100dvh - 24px);
          }

          .bs-popup-content {
            padding: 22px 18px;
          }

          .bs-popup-content h2 {
            font-size: 31px;
          }

          .bs-popup-offer {
            padding: 16px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .bs-popup {
            animation: none;
          }

          .bs-popup-banner-image {
            transition: none;
          }
        }
      `}</style>
    </>
  );
  }
