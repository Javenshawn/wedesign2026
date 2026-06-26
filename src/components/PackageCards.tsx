import { CheckCircle2, Star } from "lucide-react";
import { packages } from "@/data/site";
import { CheckoutButton } from "@/components/CheckoutButton";

export function PackageCards() {
  return (
    <div className="package-grid">
      {packages.map((item) => (
        <article className={item.badge ? "package-card featured" : "package-card"} key={item.id}>
          {item.badge ? (
            <span className="popular-badge">
              <Star size={14} fill="currentColor" />
              {item.badge}
            </span>
          ) : null}
          <h2>{item.name}</h2>
          <div className="price-line">
            <span>${item.originalPrice}</span>
            <strong>${item.price}</strong>
          </div>
          <small className="savings-pill">{item.savings}</small>
          <ul>
            {item.features.map((feature) => (
              <li key={feature}>
                <CheckCircle2 size={18} />
                {feature}
              </li>
            ))}
          </ul>
          <CheckoutButton packageTier={item} variant={item.badge ? "primary" : "secondary"} />
        </article>
      ))}
    </div>
  );
}
