"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";

interface SubmitBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function SubmitBtn({ children, className = "", ...props }: SubmitBtnProps) {
  return (
    <button
      type="submit"
      {...props}
      className={`bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4 rounded-lg hover:opacity-90 transition-all ${className}`}
    >
      {children}
    </button>
  );
}
