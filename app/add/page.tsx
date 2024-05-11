import { AddDissTrack } from "@/components/add-diss-track";
import { prisma } from "@/lib/db";
import { redirect } from "next/navigation";

export default function AddDissPage() {
  // Server Action
  async function createDiss(formData: FormData) {
    "use server";

    const { dissId, respId } = {
      dissId: formData.get("diss"),
      respId: formData.get("response"),
    };
    console.log(formData);

    if (!dissId) {
      return { error: "Diss ID is required" };
    }

    await prisma.track.create({
      data: {
        dissId: dissId as string,
        respId: respId as string,
      },
    });

    redirect(`/track/${dissId}`);
  }

  return <AddDissTrack action={createDiss} />;
}
