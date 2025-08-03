import { doctors } from "@/lib/data";
import Link from "next/link";

export default function DoctorsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Доктора наук</h1>

      <ul className="space-y-4">
        {doctors.map((doctor) => (
          <li
            key={doctor.id}
            className="p-4 border rounded-md hover:bg-gray-50 transition"
          >
            <Link href={`/doctors/${doctor.id}`}>
              <div className="text-xl font-semibold">{doctor.fullName}</div>
              <div className="text-gray-600">{doctor.scienceField}</div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
