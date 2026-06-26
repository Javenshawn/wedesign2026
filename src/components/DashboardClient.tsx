"use client";

import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { CheckCircle2, FileText, MessageSquare, UploadCloud } from "lucide-react";
import { getLocalOrders } from "@/lib/localOrders";
import type { LocalOrder } from "@/lib/types";

const briefFields = [
  "Brand name",
  "Industry",
  "Target audience",
  "Style direction",
  "Colors to use or avoid",
  "Competitors or references"
];

export function DashboardClient() {
  const [orders, setOrders] = useState<LocalOrder[]>([]);
  const [saved, setSaved] = useState(false);
  const [brief, setBrief] = useState<Record<string, string>>({});

  useEffect(() => {
    setOrders(getLocalOrders());
    const rawBrief = window.localStorage.getItem("wedesign-brief");
    if (rawBrief) {
      setBrief(JSON.parse(rawBrief) as Record<string, string>);
    }
  }, []);

  function saveBrief(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.localStorage.setItem("wedesign-brief", JSON.stringify(brief));
    setSaved(true);
  }

  return (
    <div className="dashboard-layout">
      <section className="dashboard-hero">
        <div>
          <span className="eyebrow">Customer Workspace</span>
          <h1>Your logo projects</h1>
          <p>
            This is the local version of the future customer account area. After Supabase is connected,
            projects, briefs, messages, and deliverables will sync to your database.
          </p>
        </div>
        <Link className="button button-primary" href="/logo-design">
          Start another project
        </Link>
      </section>

      <div className="dashboard-grid">
        <section className="workspace-card">
          <h2>Recent Orders</h2>
          {orders.length ? (
            <div className="order-list">
              {orders.map((order) => (
                <article key={order.id} className="order-row">
                  <div>
                    <strong>{order.id}</strong>
                    <span>{order.packageName} package</span>
                  </div>
                  <span>${order.price}</span>
                  <small>{order.status}</small>
                </article>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <FileText size={32} />
              <h3>No local orders yet</h3>
              <p>Choose a package to create your first local project record.</p>
              <Link className="button button-ghost" href="/logo-design">
                View packages
              </Link>
            </div>
          )}
        </section>

        <section className="workspace-card">
          <h2>Project Timeline</h2>
          <div className="timeline-list compact">
            <span>
              <CheckCircle2 size={18} /> Package selected
            </span>
            <span>
              <FileText size={18} /> Brand brief pending
            </span>
            <span>
              <MessageSquare size={18} /> Designer review
            </span>
            <span>
              <UploadCloud size={18} /> Logo delivery
            </span>
          </div>
        </section>
      </div>

      <section className="workspace-card">
        <div className="card-header-row">
          <div>
            <h2>Brand Brief</h2>
            <p>Save your requirements locally tonight. Supabase will store this after integration.</p>
          </div>
          {saved ? <span className="status-pill status-green">saved locally</span> : null}
        </div>
        <form className="brief-form" onSubmit={saveBrief}>
          {briefFields.map((field) => (
            <label key={field}>
              {field}
              <textarea
                value={brief[field] || ""}
                onChange={(event) => setBrief((current) => ({ ...current, [field]: event.target.value }))}
                placeholder={`Add ${field.toLowerCase()}...`}
              />
            </label>
          ))}
          <button className="button button-primary" type="submit">
            Save Brief
          </button>
        </form>
      </section>
    </div>
  );
}
