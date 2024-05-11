import { prisma } from "@/lib/db";

export default async function DissListPage() {
    const tracks = await prisma.track.findMany();

    return (
        <ul>
            {tracks.map((track) => (
                <li key={track.id}>
                    {track.dissId} - {track.respId}
                </li>
            ))}
        </ul>
    );
}
