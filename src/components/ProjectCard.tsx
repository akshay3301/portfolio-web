import Image from 'next/image';

type ProjectCardProps = {
  title: string;
  description: string;
  tags?: string[];
  href?: string;
  imageSrc?: string;
  imageAlt?: string;
};

export default function ProjectCard({ title, description, tags = [], href, imageSrc, imageAlt }: ProjectCardProps) {
  const Wrapper: any = href ? 'a' : 'div';

  return (
    <Wrapper
      {...(href ? { href, target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="group relative block overflow-hidden rounded-xl border border-white/10 bg-zinc-900/60 transition-all hover:border-white/20 hover:bg-zinc-900/80"
    >
      {/* Preview image */}
      <div className="relative aspect-[16/9] overflow-hidden border-b border-white/10 bg-zinc-800">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt || title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            priority={false}
          />
        ) : (
          <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-zinc-900 to-black">
            <div className="h-10 w-10 rounded-full bg-accent/30" />
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-zinc-100">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-zinc-400">{description}</p>
        {tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="rounded-full border border-white/10 bg-black/40 px-2.5 py-1 text-xs text-zinc-300">
                {tag}
              </span>
            ))}
          </div>
        )}
        {href && (
          <span className="mt-4 inline-flex items-center gap-2 text-sm text-accent/90 group-hover:text-accent">
            View project
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 17L17 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M9 7H17V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </span>
        )}
      </div>
    </Wrapper>
  );
} 