/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/CJlHcGVWFrn
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import { Track } from "@prisma/client";
import { Video } from "./ui/video";
import Link from "next/link";

/** Add fonts into your Next.js project:

import { Bricolage_Grotesque } from 'next/font/google'
import { Libre_Franklin } from 'next/font/google'

bricolage_grotesque({
  subsets: ['latin'],
  display: 'swap',
})

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
export function DissContent({
    dissId,
    tracks,
}: {
    dissId: string;
    tracks: Track[];
}) {
    return (
        <div className="grid md:grid-cols-1 gap-8 max-w-6xl mx-auto py-12 px-4">
            <div>
                <div className="aspect-video rounded-lg overflow-hidden">
                    <Video id={dissId} />
                </div>
                {/* <div className="mt-6 space-y-4">
                    <h1 className="text-3xl font-bold">
                        The Ultimate Diss Track
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400">
                        This diss track is the most savage thing you'll ever
                        hear. Get ready to be blown away.
                    </p>
                </div> */}
            </div>
            <div className="space-y-6">
                <h2 className="text-2xl font-bold">Responses</h2>
                <div>
                    {tracks.map((track) => {
                        if (!track.respId) return;
                        return (
                            <div key={track.id}>
                                <Video id={track.respId} />
                                <Link href={`/diss/${track.respId}`}>
                                    See tracks
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
