interface ImagePanelProps {
  imageUrl: string
  label?: string
  className?: string
}

export function ImagePanel({ imageUrl, label, className = "" }: ImagePanelProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="relative h-full w-full">
        <img
          src={imageUrl}
          alt={label || "Studio work"}
          className="h-full w-full object-cover filter grayscale"
        />
        {label && (
          <div className="absolute bottom-4 left-4 rounded-lg bg-black/70 px-4 py-2 backdrop-blur-sm">
            <span className="text-lg font-medium text-white">{label}</span>
          </div>
        )}
      </div>
    </div>
  )
}
