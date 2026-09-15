import Image from "next/image";

import { cn } from "@/lib/utils";

const assets = {
  wordmark: {
    src: "/brand/logo-wordmark-color.png",
    width: 1935,
    height: 446,
  },
  "wordmark-white": {
    src: "/brand/logo-wordmark-white.png",
    width: 1934,
    height: 447,
  },
  seal: {
    src: "/brand/logo-seal-color.png",
    width: 1412,
    height: 1413,
  },
  "seal-white": {
    src: "/brand/logo-seal-white.png",
    width: 1122,
    height: 1122,
  },
} as const;

export function BrandLogo({
  variant = "wordmark",
  className,
  priority = false,
}: {
  variant?: keyof typeof assets;
  className?: string;
  priority?: boolean;
}) {
  const asset = assets[variant];
  return (
    <Image
      src={asset.src}
      alt="OUVERT Estratégias Corporativas"
      width={asset.width}
      height={asset.height}
      priority={priority}
      className={cn("object-contain", className)}
    />
  );
}
