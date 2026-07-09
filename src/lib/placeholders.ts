export type MediaKind = "image" | "video";

export type MediaAsset = {
  alt: string;
  kind: MediaKind;
  src: string;
};

type PlaceholderDescriptor = {
  aspectRatio: "landscape" | "portrait" | "video";
  label: string;
  note: string;
};

type ResolvedMediaAsset =
  | (MediaAsset & { available: true })
  | (MediaAsset & PlaceholderDescriptor & { available: false });

const placeholderRegistry: Record<string, PlaceholderDescriptor> = {
  "/media/hero-poster.mp4": {
    aspectRatio: "video",
    label: "Hero poster video placeholder",
    note: "Original cover video not attached."
  },
  "/media/hero-showreel.mp4": {
    aspectRatio: "video",
    label: "Hero showreel placeholder",
    note: "Original showreel file not attached."
  },
  "/media/project-01.mp4": {
    aspectRatio: "video",
    label: "Project 01 video placeholder",
    note: "Original project video not attached."
  },
  "/media/project-02.mp4": {
    aspectRatio: "video",
    label: "Project 02 video placeholder",
    note: "Original project video not attached."
  },
  "/media/project-03.mp4": {
    aspectRatio: "video",
    label: "Project 03 video placeholder",
    note: "Original project video not attached."
  },
  "/media/project-04.mp4": {
    aspectRatio: "video",
    label: "Project 04 video placeholder",
    note: "Original project video not attached."
  },
  "/media/project-05.mp4": {
    aspectRatio: "video",
    label: "Project 05 video placeholder",
    note: "Original project video not attached."
  },
  "/media/project-06.mp4": {
    aspectRatio: "video",
    label: "Project 06 video placeholder",
    note: "Original project video not attached."
  }
};

export function resolveMediaAsset(asset: MediaAsset): ResolvedMediaAsset {
  const placeholder = placeholderRegistry[asset.src];

  if (!placeholder) {
    return {
      ...asset,
      available: true
    };
  }

  return {
    ...asset,
    ...placeholder,
    available: false
  };
}
