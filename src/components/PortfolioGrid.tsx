"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { portfolioItems } from "@/data/site";

export function PortfolioGrid() {
  const [query, setQuery] = useState("");
  const [industry, setIndustry] = useState("All Industries");
  const [color, setColor] = useState("All Colors");

  const industries = ["All Industries", ...Array.from(new Set(portfolioItems.map((item) => item.industry)))];
  const colors = ["All Colors", ...Array.from(new Set(portfolioItems.map((item) => item.color)))];

  const filtered = useMemo(() => {
    return portfolioItems.filter((item) => {
      const matchesQuery = `${item.title} ${item.industry}`.toLowerCase().includes(query.toLowerCase());
      const matchesIndustry = industry === "All Industries" || item.industry === industry;
      const matchesColor = color === "All Colors" || item.color === color;
      return matchesQuery && matchesIndustry && matchesColor;
    });
  }, [color, industry, query]);

  return (
    <div className="portfolio-shell">
      <div className="portfolio-controls">
        <label className="search-field">
          <Search size={16} />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search logos..."
            aria-label="Search logos"
          />
        </label>
        <select value={industry} onChange={(event) => setIndustry(event.target.value)} aria-label="Filter by industry">
          {industries.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
        <select value={color} onChange={(event) => setColor(event.target.value)} aria-label="Filter by color">
          {colors.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
        <span>{filtered.length} results</span>
      </div>

      <div className="portfolio-grid">
        {filtered.map((item) => (
          <article className="portfolio-card" key={item.title}>
            <img src={item.image} alt={item.title} />
            <div>
              <h3>{item.title}</h3>
              <span>{item.industry}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
