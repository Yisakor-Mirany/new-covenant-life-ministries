import { Reveal } from "@/components/shared/reveal";

export function ContactMap() {
  return (
    <Reveal className="overflow-hidden rounded-3xl border border-border shadow-sm">
      <iframe
        title="New Covenant Life Ministries location on OpenStreetMap"
        className="h-96 w-full"
        loading="lazy"
        src="https://www.openstreetmap.org/export/embed.html?bbox=38.74%2C8.96%2C38.80%2C9.02&layer=mapnik&marker=8.99%2C38.77"
      />
    </Reveal>
  );
}
