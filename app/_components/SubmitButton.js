"use client";
import { useFormStatus } from "react-dom";

//! Display a loading indicator with useForStatus Hook
export default function SubmitButton({ children, pendingLabel }) {
  const { pending } = useFormStatus();
  return (
    <button
      disable={pending}
      className="bg-accent-500 rounded-sm px-4 py-2 lg:px-8 lg:py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300 text-sm lg:text-base"
    >
      {pending ? pendingLabel : children}
    </button>
  );
}
