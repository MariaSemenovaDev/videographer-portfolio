import Image from "next/image";

import { cn } from "@/lib/cn";
import { type MediaAsset, resolveMediaAsset } from "@/lib/placeholders";

type MediaFrameProps = {
  asset: MediaAsset;
  className?: string;
};

const aspectRatioClassMap = {
  landscape: "aspect-[16/10]",
  portrait: "aspect-[4/5]",
  video: "aspect-[16/9]"
} as const;

const imageDimensions = {
  landscape: {
    height: 1000,
    width: 1600
  },
  portrait: {
    height: 1500,
    width: 1200
  },
  video: {
    height: 1080,
    width: 1920
  }
} as const;

export function MediaFrame({ asset, className }: MediaFrameProps) {
  const resolvedAsset = resolveMediaAsset(asset);

  if (resolvedAsset.available) {
    if (resolvedAsset.kind === "video") {
      return (
        <video
          aria-label={resolvedAsset.alt}
          autoPlay
          className={cn("w-full object-cover", className)}
          loop
          muted
          playsInline
          src={resolvedAsset.src}
        />
      );
    }

    const dimensions = imageDimensions.landscape;

    return (
      <Image
        alt={resolvedAsset.alt}
        className={cn("h-full w-full object-cover", className)}
        height={dimensions.height}
        src={resolvedAsset.src}
        unoptimized
        width={dimensions.width}
      />
    );
  }

  return (
    <div
      className={cn(
        "placeholder-block flex h-full w-full flex-col justify-between p-5",
        aspectRatioClassMap[resolvedAsset.aspectRatio],
        className
      )}
    >
      <div className="eyebrow">{resolvedAsset.kind} placeholder</div>
      <div className="space-y-2">
        <p className="section-title text-[clamp(1.5rem,3vw,2.25rem)]">
          {resolvedAsset.label}
        </p>
        <p className="meta-text">{resolvedAsset.note}</p>
        <p className="meta-text">{resolvedAsset.src}</p>
      </div>
    </div>
  );
}
