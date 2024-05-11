import { AddDissTrack } from "@/components/add-diss-track";
import { prisma } from "@/lib/db";
import { getEmbed } from "@/lib/utils";
import { redirect } from "next/navigation";

export default function AddDissPage() {
    // Server Action
    async function createDiss(formData: FormData) {
        "use server";

        const { diss, resp } = {
            diss: formData.get("diss"),
            resp: formData.get("response"),
        };
        console.log(formData);

        if (!diss) {
            return { error: "Diss ID is required" };
        }

        const dissId = getEmbed(diss as string, "youtube");
        const respId = getEmbed(resp as string, "youtube");

        await prisma.track.create({
            data: {
                dissId: dissId as string,
                respId: respId as string,
            },
        });

        redirect(`/diss/${dissId}`);
    }

    return <AddDissTrack action={createDiss} />;
}
