import Link from "next/link";

export function BrandLogo() {
  return (
    <Link href="/" className="brand-logo" aria-label="WeDesign home">
      <span className="brand-mark" aria-hidden="true">
        W
      </span>
      <span className="brand-copy">
        <strong>WEDESIGN</strong>
        <small>Worldwide Design Best Delivered</small>
      </span>
    </Link>
  );
}
