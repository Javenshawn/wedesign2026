"use client";

import { ArrowLeft, X } from "lucide-react";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import type { PackageTier } from "@/lib/types";

type ProjectInformationModalProps = {
  packageTier: PackageTier;
  loading: boolean;
  onClose: () => void;
  onSubmit: (intake: ProjectIntake) => void;
};

export type ProjectIntake = {
  logoName: string;
  industry: string;
  designStyles: string[];
  colorPreference: string;
  description: string;
  referenceFileName?: string;
};

const industries = [
  "Technology",
  "E-commerce",
  "Fashion",
  "Restaurant & Food",
  "Healthcare",
  "Finance",
  "Real Estate",
  "Education",
  "Travel & Hospitality",
  "Beauty & Wellness",
  "Other"
];

const designStyles = [
  "Modern Minimalist",
  "Classic Traditional",
  "Creative Artistic",
  "Corporate Professional",
  "Playful Fun",
  "Luxury Premium",
  "Tech Digital",
  "Handcrafted Organic"
];

const colorPreferences = [
  "No preference",
  "Warm colors",
  "Cool colors",
  "Black and white",
  "Luxury gold",
  "Natural earth tones",
  "Bright and playful",
  "Trustworthy blue"
];

const packageDetails: Record<PackageTier["id"], { title: string; description: string }> = {
  economy: {
    title: "Economy Class",
    description: "Starter essentials for a new brand"
  },
  business: {
    title: "Business Class",
    description: "Expert assistance, essential for market entry"
  },
  "private-jet": {
    title: "Private Jet",
    description: "Premium strategy and fastest delivery"
  }
};

export function ProjectInformationModal({
  packageTier,
  loading,
  onClose,
  onSubmit
}: ProjectInformationModalProps) {
  const [logoName, setLogoName] = useState("");
  const [industry, setIndustry] = useState("");
  const [selectedStyles, setSelectedStyles] = useState<string[]>([]);
  const [colorPreference, setColorPreference] = useState("");
  const [description, setDescription] = useState("");
  const [referenceFileName, setReferenceFileName] = useState("");
  const [mounted, setMounted] = useState(false);

  const packageCopy = useMemo(() => packageDetails[packageTier.id], [packageTier.id]);

  useEffect(() => {
    function handleKeydown(event: KeyboardEvent) {
      if (event.key === "Escape" && !loading) {
        onClose();
      }
    }

    setMounted(true);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeydown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [loading, onClose]);

  function toggleStyle(style: string) {
    setSelectedStyles((current) =>
      current.includes(style) ? current.filter((item) => item !== style) : [...current, style]
    );
  }

  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit({
      logoName,
      industry,
      designStyles: selectedStyles,
      colorPreference,
      description,
      referenceFileName
    });
  }

  if (!mounted) {
    return null;
  }

  return createPortal(
    <div className="project-modal-backdrop" role="presentation">
      <section
        className="project-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-information-title"
      >
        <header className="project-modal-header">
          <button className="project-modal-icon-button" type="button" aria-label="Back" onClick={onClose}>
            <ArrowLeft size={22} />
          </button>
          <h2 id="project-information-title">Project Information</h2>
          <button className="project-modal-icon-button" type="button" aria-label="Close" onClick={onClose}>
            <X size={22} />
          </button>
        </header>

        <form className="project-info-form" onSubmit={submitForm}>
          <div className="selected-package-strip">
            <div>
              <strong>{packageCopy.title}</strong>
              <span>{packageCopy.description}</span>
            </div>
            <strong>{packageTier.price}</strong>
          </div>

          <label className="project-field">
            Logo Name *
            <input
              required
              value={logoName}
              onChange={(event) => setLogoName(event.target.value)}
              placeholder="Enter your company or brand name"
            />
          </label>

          <label className="project-field">
            Industry *
            <select required value={industry} onChange={(event) => setIndustry(event.target.value)}>
              <option value="">Select your industry</option>
              {industries.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>

          <fieldset className="project-field project-chip-field">
            <legend>Preferred Design Styles</legend>
            <div className="style-chip-grid">
              {designStyles.map((style) => (
                <button
                  type="button"
                  key={style}
                  className={selectedStyles.includes(style) ? "style-chip selected" : "style-chip"}
                  onClick={() => toggleStyle(style)}
                  aria-pressed={selectedStyles.includes(style)}
                >
                  {style}
                </button>
              ))}
            </div>
          </fieldset>

          <label className="project-field">
            Color Preferences
            <select value={colorPreference} onChange={(event) => setColorPreference(event.target.value)}>
              <option value="">Select your color preference</option>
              {colorPreferences.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>

          <label className="project-field">
            Design Description *
            <textarea
              required
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              placeholder="Describe your brand, values, target audience, and any special requirements..."
            />
          </label>

          <label className="project-field">
            Reference Files (Optional)
            <input
              type="file"
              onChange={(event) => setReferenceFileName(event.target.files?.[0]?.name || "")}
            />
          </label>

          <div className="project-modal-actions">
            <button className="project-next-button" type="submit" disabled={loading}>
              {loading ? "Preparing..." : "Next"}
            </button>
          </div>
        </form>
      </section>
    </div>,
    document.body
  );
}
