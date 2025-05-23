import { about_assets } from "@/assets/About/about_assets";

export default function OurStudio() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-16 bg-white p-8">
      <div className="grid gap-16">
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src={about_assets.Our_Studio}
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src={about_assets.Our_Studio}
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src={about_assets.Our_Studio}
            alt=""
          />
        </div>
      </div>
      <div className="grid gap-16">
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src={about_assets.Our_Studio}
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src={about_assets.Our_Studio}
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src={about_assets.Our_Studio}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
