// client/src/components/StatusBadge.jsx
const STATUS_STYLES = {
  "to-read": { label: "To Read", classes: "bg-gray-100 text-gray-700" },
  reading: { label: "Reading", classes: "bg-amber-100 text-amber-800" },
  finished: { label: "Finished", classes: "bg-green-100 text-green-800" },
};

export default function StatusBadge({ status }) {
  const style = STATUS_STYLES[status] ?? STATUS_STYLES["to-read"];

  return (
    <span
      className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium shadow-lg ${style.classes}`}
    >
      {style.label}
    </span>
  );
}