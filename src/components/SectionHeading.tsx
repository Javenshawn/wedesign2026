type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, body, align = "center" }: SectionHeadingProps) {
  return (
    <div className={`section-heading ${align === "left" ? "align-left" : ""}`}>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h1>{title}</h1>
      {body ? <p>{body}</p> : null}
    </div>
  );
}
