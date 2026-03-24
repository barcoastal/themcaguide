interface CalloutBoxProps {
  type: "warning" | "tip" | "info";
  title?: string;
  children: React.ReactNode;
}

const styles = {
  warning: { bg: "bg-amber-50", border: "border-amber-400", icon: "\u26a0\ufe0f", text: "text-amber-800" },
  tip: { bg: "bg-green-50", border: "border-green-400", icon: "\ud83d\udca1", text: "text-green-800" },
  info: { bg: "bg-blue-50", border: "border-blue-400", icon: "\u2139\ufe0f", text: "text-blue-800" },
};

export default function CalloutBox({ type, title, children }: CalloutBoxProps) {
  const s = styles[type];
  return (
    <div className={`${s.bg} ${s.border} border-l-4 rounded-r-lg p-4 my-6`}>
      {title && (
        <p className={`${s.text} font-semibold mb-1`}>
          {s.icon} {title}
        </p>
      )}
      <div className={`${s.text} text-sm`}>{children}</div>
    </div>
  );
}
