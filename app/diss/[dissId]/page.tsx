import { DissContent } from "@/components/diss-content";
import { prisma } from "@/lib/db";

export default async function DissPage({ dissId }: { dissId: string }) {
  const tracks = await prisma.track.findMany({
    where: {
      dissId,
    },
  });
  return <DissContent tracks={tracks} />;
}
