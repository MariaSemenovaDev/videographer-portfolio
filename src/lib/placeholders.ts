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
  "/media/hero-poster.jpg": {
    aspectRatio: "portrait",
    label: "Hero poster placeholder",
    note: "Original cover image not attached."
  },
  "/media/hero-showreel.mp4": {
    aspectRatio: "video",
    label: "Hero showreel placeholder",
    note: "Original showreel file not attached."
  },
  "/media/project-01.jpg": {
    aspectRatio: "portrait",
    label: "Project 01 placeholder",
    note: "Original project still not attached."
  },
  "/media/project-02.jpg": {
    aspectRatio: "portrait",
    label: "Project 02 placeholder",
    note: "Original project still not attached."
  },
  "/media/project-03.jpg": {
    aspectRatio: "portrait",
    label: "Project 03 placeholder",
    note: "Original project still not attached."
  },
  "/media/project-04.jpg": {
    aspectRatio: "portrait",
    label: "Project 04 placeholder",
    note: "Original project still not attached."
  },
  "/media/project-05.jpg": {
    aspectRatio: "portrait",
    label: "Project 05 placeholder",
    note: "Original project still not attached."
  },
  "/media/project-06.jpg": {
    aspectRatio: "portrait",
    label: "Project 06 placeholder",
    note: "Original project still not attached."
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
