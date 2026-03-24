interface ComparisonTableProps {
  headers: string[];
  rows: string[][];
  highlightFirst?: boolean;
}

export default function ComparisonTable({ headers = [], rows = [], highlightFirst = false }: ComparisonTableProps) {
  if (!headers?.length || !rows?.length) return null;

  return (
    <div className="overflow-x-auto my-6 -mx-4 sm:mx-0">
      <div className="inline-block min-w-full align-middle">
        <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-gray-50">
            <tr>
              {headers.map((h, i) => (
                <th key={i} className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {rows.map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                {row.map((cell, j) => (
                  <td
                    key={j}
                    className={`px-4 py-3 text-sm ${j === 0 && highlightFirst ? "font-semibold text-gray-900" : "text-gray-600"}`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
