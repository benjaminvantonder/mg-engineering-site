interface BrandMarkProps {
  className?: string;
  imageClassName?: string;
  alt?: string;
  priority?: boolean;
}

export function BrandMark({
  className = "",
  imageClassName = "",
  alt = "MG Engineering logo",
  priority = false,
}: BrandMarkProps) {
  return (
    <span className={`grid shrink-0 place-items-center bg-white ${className}`}>
      <img
        src={`${import.meta.env.BASE_URL}assets/mg-logo.png`}
        alt={alt}
        width={360}
        height={360}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className={`h-full w-full object-contain ${imageClassName}`}
      />
    </span>
  );
}
