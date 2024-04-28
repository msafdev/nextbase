import Brand from "@/components/macro/brand-assets";
import StyledButton from "@/components/macro/button";

import { RxRocket, RxStack } from "react-icons/rx";

export default function Page() {
  return (
    <main className="flex h-auto w-full grow flex-col items-center justify-center gap-y-4">
      <Brand />
      <h1 className="text-balance text-center text-xl capitalize md:text-2xl">
        Fastest way to build your <span className="font-semibold">Next.js</span>{" "}
        app with <span className="font-semibold">Supabase</span>
      </h1>
      <div className="flex flex-wrap justify-center gap-x-3 gap-y-3">
        <StyledButton
          variant="3d"
          className="text-lg"
          href="/component"
        >
          <RxRocket size={16} /> Components
        </StyledButton>
        <StyledButton
          variant="3d"
          className="text-lg"
          href="https://github.com/msafdev"
          theme="secondary"
        >
          <RxStack size={16} /> Read the Docs
        </StyledButton>
      </div>
    </main>
  );
}
