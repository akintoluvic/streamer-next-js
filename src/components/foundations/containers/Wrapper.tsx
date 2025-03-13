const variantClasses = {
  // Standard variant
  standard: "max-w-5xl mx-auto",
  // Prose variant for prose blocks
  prose:
    "prose-ul:text-neutral-500 dark:prose-ul:text-neutral-200 prose max-w-3xl pt-0 mx-auto prose-a:text-black dark:prose-a:text-white prose-p:text-neutral-500 dark:prose-p:text-neutral-300 prose-code:text-black prose-strong:text-black dark:prose-strong:text-white prose-ol:text-neutral-500 prose-ul:text-neutral-500 prose-li:text-neutral-500 prose-headings:text-black dark:prose-headings:text-white prose-headings:text-base text-xs",
};

interface WrapperProps {
  variant?: "standard" | "prose"; // Define any variants you need
  className?: string; // Optional prop for additional classes
  children: React.ReactNode;
}

export default function Wrapper({
  children,
  className: extraClass = "",
  variant = "standard",
}: WrapperProps) {
  return (
    <div className={`${variantClasses[variant]} ${extraClass}`.trim()}>
      {children}
    </div>
  );
}
