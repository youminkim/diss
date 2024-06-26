/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/u2AHfmhh4S5
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function AddDissTrack({
    action,
}: {
    action: (formData: FormData) => void;
}) {
    return (
        <main className="flex min-h-screen items-center justify-center bg-gray-100 px-4 py-12 dark:bg-gray-900">
            <div className="w-full max-w-md space-y-4">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                    Add Diss Track
                </h1>
                <form className="space-y-4" action={action}>
                    <div>
                        <Label htmlFor="diss">Diss</Label>
                        <div className="relative">
                            <Input
                                className="mt-1 block w-full"
                                id="diss"
                                name="diss"
                                placeholder="Enter Youtube video link"
                                type="text"
                            />
                        </div>
                    </div>
                    <div>
                        <Label
                            htmlFor="response
            "
                        >
                            Response
                        </Label>
                        <div className="relative">
                            <Input
                                className="mt-1 block w-full"
                                id="response"
                                name="response"
                                placeholder="Enter Youtube link"
                                type="text"
                            />
                        </div>
                    </div>
                    <Button className="w-full" type="submit">
                        Save
                    </Button>
                </form>
            </div>
        </main>
    );
}
