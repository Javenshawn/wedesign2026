"use client";

import type { LocalOrder, PackageTier } from "@/lib/types";

const STORAGE_KEY = "wedesign-orders";

export function getLocalOrders(): LocalOrder[] {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as LocalOrder[]) : [];
  } catch {
    return [];
  }
}

export function createLocalOrder(packageTier: PackageTier): LocalOrder {
  const order: LocalOrder = {
    id: `WD-LOCAL-${Date.now().toString().slice(-6)}`,
    packageId: packageTier.id,
    packageName: packageTier.name,
    price: packageTier.price,
    createdAt: new Date().toISOString(),
    status: "local checkout"
  };

  const orders = [order, ...getLocalOrders()];
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(orders));
  return order;
}
