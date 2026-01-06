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
        <a
  href="https://testflight.apple.com/join/pDXYmMhf"
  target="_blank"
  rel="noopener noreferrer"
  className="ios-beta-button"
>
  <span className="beta-badge">iOS BETA</span>
  Try Town Wall on iPhone
</a>
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

      {/* ================= COMMUNITY GUIDELINES ================= */}
      {openModal === "guidelines" && (
        <>
          <h3>Community Guidelines</h3>

          <p>
            Town Wall is a place for local people, local businesses, and local
            communities to connect in a meaningful and respectful way.
            Everything posted here should serve a genuine local purpose.
          </p>

          <p>
            We expect all users to treat others with respect. Harassment,
            hate speech, threats, bullying, discrimination, or abuse of any
            kind will not be tolerated.
          </p>

          <p>
            Content should be relevant to towns, zones, or the wider local
            community. Spam, misleading posts, excessive self-promotion,
            or irrelevant content may be removed.
          </p>

          <p>
            Do not impersonate others, misrepresent businesses, or post
            content intended to deceive or exploit users.
          </p>

          <p>
            Illegal content, encouragement of harm, or activity that puts
            others at risk is strictly prohibited and may result in account
            removal.
          </p>

          <p>
            Moderation decisions are made to keep Town Wall safe, useful,
            and human. Repeated violations may lead to suspension or
            permanent removal from the platform.
          </p>

          <p className="footer">
            Let’s keep Town Wall respectful, local, and built for real
            communities.
          </p>
        </>
      )}

      {/* ================= PRIVACY POLICY ================= */}
      {openModal === "privacy" && (
        <>
          <h3>Privacy Policy</h3>

          <p>
            Town Wall prioritises privacy, pseudonymity, and minimal data
            collection. The platform is designed so you can participate
            without revealing unnecessary personal information.
          </p>

          <p>
            We do not require real names. You are free to use a pseudonym
            or handle that represents you locally.
          </p>

          <p>
            We do not require an email address or phone number to use the
            core features of Town Wall.
          </p>

          <p>
            Town Wall does not track precise GPS location. Location data,
            where used, is limited to broad town or zone-level context to
            support local relevance.
          </p>

          <p>
            We do not sell personal data. We do not run shadowy algorithms
            or behavioural tracking designed to manipulate engagement.
          </p>

          <p>
            Basic technical data may be processed to operate the service
            securely and reliably, including moderation and abuse
            prevention.
          </p>

          <p>
            By using Town Wall, you acknowledge that content you post is
            visible to other users within the app. You remain responsible
            for what you choose to share.
          </p>

          <p className="footer">
            Last updated: December 27, 2025
          </p>

          {/* ================= DELETE ACCOUNT ================= */}
          <h4>Delete Account</h4>

          <p>
            You have the right to request deletion of your account and
            associated data at any time.
          </p>

          <p>
            To request account deletion, please contact us at:
            <br />
            <strong>andyblewett991@gmail.com</strong>
          </p>

          <p>
            A self-service <strong>Delete Account</strong> button is also
            being added directly inside the app in an upcoming update,
            allowing you to delete your account instantly without
            contacting support.
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
        .ios-beta-button {
  margin-top: 22px;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 14px 22px;
  border-radius: 16px;
  background: linear-gradient(
    135deg,
    rgba(124,58,237,1),
    rgba(167,139,250,1)
  );
  color: white;
  font-weight: 800;
  font-size: 15px;
  text-decoration: none;
  box-shadow:
    0 12px 30px rgba(124,58,237,0.45),
    inset 0 0 0 1px rgba(255,255,255,0.18);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.ios-beta-button:hover {
  transform: translateY(-2px);
  box-shadow:
    0 18px 42px rgba(124,58,237,0.6),
    inset 0 0 0 1px rgba(255,255,255,0.22);
}

.beta-badge {
  background: rgba(0,0,0,0.28);
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 900;
  letter-spacing: 0.06em;
  text-transform: uppercase;
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
