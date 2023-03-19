"use client";

import React from "react";

export const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="p-4 mt-10">{children}</div>;
};
