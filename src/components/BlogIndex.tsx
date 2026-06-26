"use client";

import { ArrowRight, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { posts } from "@/data/site";

const categories = ["All", "Design Psychology", "Trends", "Brand Strategy", "Business", "Case Study"];

export function BlogIndex() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory = category === "All" || post.category === category;
      const matchesQuery = `${post.title} ${post.excerpt} ${post.category}`.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <div className="blog-layout">
      <section className="blog-filter-card">
        <div>
          <label>Search Articles</label>
          <div className="search-field">
            <Search size={16} />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Type keywords, topics, or design terms..."
              aria-label="Search articles"
            />
          </div>
        </div>
        <div>
          <label>Filter by Category</label>
          <div className="category-buttons">
            {categories.map((item) => (
              <button
                type="button"
                key={item}
                className={category === item ? "active" : ""}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <p>
          <strong>{filtered.length}</strong> articles found
        </p>
      </section>

      <div className="blog-content-grid">
        <div className="post-list">
          {filtered.map((post) => (
            <article className="post-card" key={post.title}>
              <img src={post.image} alt={post.title} />
              <div className="post-body">
                <div className="post-meta-row">
                  <span className="category-pill">{post.category}</span>
                  <span>{post.readTime}</span>
                </div>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <div className="post-foot">
                  <span>
                    {post.author}
                    <small>{post.date}</small>
                  </span>
                  <button type="button" aria-label={`Read ${post.title}`}>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <aside className="blog-sidebar">
          <div className="sidebar-card">
            <h3>Recent Posts</h3>
            {posts.slice(0, 3).map((post) => (
              <a href="#" key={post.title}>
                {post.title}
                <small>{post.date}</small>
              </a>
            ))}
          </div>
          <div className="sidebar-card">
            <h3>Categories</h3>
            {categories.slice(1).map((item) => (
              <button type="button" key={item} onClick={() => setCategory(item)}>
                {item}
              </button>
            ))}
          </div>
          <div className="sidebar-card accent">
            <h3>Stay Updated</h3>
            <p>Get the latest design insights delivered to your inbox.</p>
            <input placeholder="your@email.com" aria-label="Blog newsletter email" />
            <button type="button" className="button button-light">
              Subscribe Now
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}
