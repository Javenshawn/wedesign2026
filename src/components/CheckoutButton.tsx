"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { createLocalOrder } from "@/lib/localOrders";
import { ProjectInformationModal, type ProjectIntake } from "@/components/ProjectInformationModal";
import type { PackageTier } from "@/lib/types";

type CheckoutButtonProps = {
  packageTier: PackageTier;
  variant?: "primary" | "secondary";
};

export function CheckoutButton({ packageTier, variant = "primary" }: CheckoutButtonProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  async function startCheckout(intake: ProjectIntake) {
    setLoading(true);
    const order = createLocalOrder(packageTier);
    window.localStorage.setItem(
      "wedesign-project-intake",
      JSON.stringify({
        ...intake,
        orderId: order.id,
        packageId: packageTier.id,
        packageName: packageTier.name,
        savedAt: new Date().toISOString()
      })
    );

    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        packageId: packageTier.id,
        orderId: order.id
      })
    });

    const payload = (await response.json()) as { url: string };
    router.push(payload.url);
  }

  return (
    <>
      <button
        type="button"
        className={variant === "primary" ? "button button-primary" : "button button-ghost"}
        onClick={() => setModalOpen(true)}
        disabled={loading}
      >
        {loading ? "Preparing..." : `Choose ${packageTier.name}`}
      </button>

      {modalOpen ? (
        <ProjectInformationModal
          packageTier={packageTier}
          loading={loading}
          onClose={() => setModalOpen(false)}
          onSubmit={startCheckout}
        />
      ) : null}
    </>
  );
}
