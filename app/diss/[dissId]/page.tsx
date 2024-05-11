import { DissContent } from "@/components/diss-content";
import { prisma } from "@/lib/db";

export default async function DissPage({
    params: { dissId },
}: {
    params: { dissId: string };
}) {
    const tracks1 = await prisma.track.findMany({
        where: {
            dissId,
        },
        orderBy: {
            createdAt: "desc",
        },
    });

    // find all tracks that are responses to the diss track
    const respIds = tracks1.map((track) => track.respId);
    const tracks2 = await prisma.track.findMany({
        where: {
            dissId: {
                in: respIds,
            },
        },
    });

    // unique tracks only (no duplicates)
    const tracks = [...tracks1, ...tracks2].filter(
        (track, index, self) =>
            index === self.findIndex((t) => t.respId === track.respId)
    );

    return <DissContent tracks={tracks} dissId={dissId} />;
}
