import type { MetaFunction } from "@remix-run/node";
import { IdCard } from "~/components/ui/id-card";

export const meta: MetaFunction = () => {
  return [
    { title: "Junbeom" },
    {
      name: "description",
      content: "This is Junbeom aka. Laughing_egg Portfolio Page",
    },
  ];
};

export default function Index() {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center gap-8 pt-80">
        <div className="relative mb-8">
          <h1 className="text-4xl md:text-7xl font-bold text-gray-900 text-center">
            Hi there, I'm{' '}
            <span className="relative inline-block">
            <span className="absolute bottom-0 left-1 right-1 h-8 bg-purple-400 "></span>
            <span className="relative">Junbeom</span>
          </span>
            !<br />
            Welcome to my portfolio page.
          </h1>
        </div>
        {/*<IdCard />*/}
      </div>
    </>
  );
}
