// pages/townwall.jsx
import React, { useState } from "react";
import Layout from "../components/Layout";

export default function TownWall() {
  const [openModal, setOpenModal] = useState(null);

  return (
    <Layout>
      {/* ================= HERO ================= */}
      <section className="hero">
        <img
          src="https://ucarecdn.com/d8da2fdb-f7f4-4dcd-94fe-531c7a08fd51/-/format/auto/"
          alt="Town Wall logo"
          className="townwall-logo"
        />

        <h1 className="title">Town Wall</h1>
        <p className="subtitle">
          A community platform built around real towns, real zones,
          and shared public spaces.
        </p>
      </section>

      {/* ================= INTRO ================= */}
      <section className="card">
        <h2>What Town Wall Is</h2>
        <p>
          Town Wall is a location-first community platform. Instead of
          algorithm-driven feeds and disappearing posts, everything on Town
          Wall is anchored to real towns and neighbourhood zones.
        </p>
        <p>
          It’s designed for people who want to talk about where they live,
          support local businesses, discover talent, and share information
          that actually matters to their area.
        </p>
        <p>
          You can stay local, explore globally, or do both — without losing
          context or relevance.
        </p>
      </section>

      {/* ================= CORE MECHANICS ================= */}
      <section className="card">
        <h2>How It Works</h2>

        <ul className="feature-list">
          <li>
            <strong>Towns & Zones</strong>
            <span>
              Every post belongs to a real town, broken down into local
              neighbourhood zones.
            </span>
          </li>

          <li>
            <strong>Manual Location Control</strong>
            <span>
              You decide where you post and what you view — no forced geo-tracking.
            </span>
          </li>

          <li>
            <strong>Local Feeds</strong>
            <span>
              See what’s happening nearby without global noise.
            </span>
          </li>

          <li>
            <strong>Global Feed</strong>
            <span>
              Explore popular discussions across all towns and regions.
            </span>
          </li>

          <li>
            <strong>Sorting & Discovery</strong>
            <span>
              Switch between newest posts or what the community values most.
            </span>
          </li>

          <li>
            <strong>Followers & Engagement</strong>
            <span>
              Follow people, businesses, or topics without algorithm tricks.
            </span>
          </li>
        </ul>
      </section>

      {/* ================= FEEDS ================= */}
      <section className="card">
        <h2>Feeds & Conversations</h2>
        <p>
          Town Wall supports multiple ways to engage:
        </p>
        <ul>
          <li>Town-specific feeds</li>
          <li>Zone-level neighbourhood feeds</li>
          <li>A global feed for wider discovery</li>
          <li>A global chat space</li>
        </ul>
        <p>
          Content doesn’t vanish, get buried by ads, or disappear because it
          didn’t perform in the first hour.
        </p>
      </section>

    
      {/* ================= MODERATION ================= */}
      <section className="card">
        <h2>Moderation & Safety</h2>
        <p>
          Town Wall uses a mix of automated moderation tools and human review
          to keep communities usable and safe.
        </p>
        <p>
          The goal isn’t over-policing — it’s maintaining spaces where people
          actually want to participate.
        </p>
        <ul>
          <li>Automated filtering for harmful content</li>
          <li>Human moderation where context matters</li>
          <li>Appeal processes for decisions</li>
        </ul>
      </section>

      {/* ================= PHILOSOPHY ================= */}
      <section className="card">
        <h2>Why Town Wall Exists</h2>
        <p>
          Modern platforms optimise for engagement, not usefulness.
          Town Wall exists to do the opposite.
        </p>
        <p>
          It’s built for slower, more meaningful interaction — grounded in
          real places and real communities.
        </p>
        <p>
          No chasing trends. No shadowy algorithms. Just people, towns,
          and shared spaces.
        </p>
      </section>

      {/* ================= LEGAL ================= */}
      <section className="legal">
        <button onClick={() => setOpenModal("guidelines")}>
          Community Guidelines
        </button>
        <button onClick={() => setOpenModal("privacy")}>
          Privacy Policy
        </button>
      </section>

      {/* ================= MODALS ================= */}
      {openModal && (
        <div className="modal-backdrop" onClick={() => setOpenModal(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            {openModal === "guidelines" && (
              <>
                <h3>Community Guidelines</h3>

                <p>
                  Town Wall is built on respect, relevance, and local value.
                  Harassment, hate speech, and abuse are not tolerated.
                </p>

                <p>
                  Content should contribute positively to towns, zones, or
                  the wider community.
                </p>

                <p className="footer">
                  Let’s keep Town Wall useful, safe, and human.
                </p>
              </>
            )}

            {openModal === "privacy" && (
              <>
                <h3>Privacy Policy</h3>

                <p>
                  Town Wall prioritises pseudonymity and minimal data collection.
                </p>

                <ul>
                  <li>No real names required</li>
                  <li>No email or phone number required</li>
                  <li>No precise GPS tracking</li>
                </ul>

                <p className="footer">
                  Last updated: December 27, 2025
                </p>
              </>
            )}

            <button className="close" onClick={() => setOpenModal(null)}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* ================= STYLES ================= */}
      <style jsx>{`
        .hero {
          text-align: center;
          margin-bottom: 42px;
        }

        .townwall-logo {
          width: 90px;
          margin-bottom: 14px;
        }

        .title {
          font-size: 38px;
          font-weight: 900;
        }

        .subtitle {
          opacity: 0.85;
          margin-top: 10px;
        }

        .card {
          margin-bottom: 26px;
          padding: 22px;
          border-radius: 18px;
          border: 1px solid rgba(255,255,255,0.18);
          background: rgba(10,10,22,0.32);
          backdrop-filter: blur(12px);
        }

        .feature-list {
          list-style: none;
          padding-left: 0;
          display: grid;
          gap: 16px;
        }

        .feature-list li strong {
          display: block;
          font-weight: 700;
        }

        .feature-list li span {
          font-size: 14px;
          opacity: 0.85;
        }

        .screenshots {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 16px;
        }

        .shot {
          text-align: center;
        }

        .placeholder {
          height: 170px;
          border-radius: 14px;
          border: 1px dashed rgba(255,255,255,0.35);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0.7;
          margin-bottom: 8px;
        }

        .legal {
          display: flex;
          justify-content: center;
          gap: 16px;
          margin: 36px 0;
        }

        .legal button,
        .close {
          padding: 12px 16px;
          border-radius: 12px;
          border: none;
          background: rgba(124,58,237,0.9);
          color: white;
          font-weight: 700;
        }

        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.75);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .modal {
          max-height: 80vh;
          overflow-y: auto;
          width: 92%;
          max-width: 640px;
          background: rgba(10,10,22,0.96);
          border-radius: 18px;
          padding: 22px;
          border: 1px solid rgba(255,255,255,0.18);
        }

        .footer {
          margin-top: 18px;
          font-style: italic;
          opacity: 0.8;
        }
      `}</style>
    </Layout>
  );
}
