import { AddDissTrack } from "@/components/add-diss-track";

export default function AddDissPage() {
  // Server Action
  async function createDiss(formData: FormData) {
    "use server";

    const rawFormData = {
      dissId: formData.get("diss"),
      responseId: formData.get("response"),
    };
    console.log(rawFormData);

    // mutate data
    // revalidate cache
  }

  return <AddDissTrack action={createDiss} />;
}
