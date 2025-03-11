import Link from "next/link";

export default function VolunteerPage() {
    return (
      <div>
        <h1>Volunteering</h1>
        <Link href='/volunteer/international'>Internacional</Link>
        <Link href='/volunteer/national'>Nacional</Link>
      </div>
    );
  }