import StyledButton from "@/components/macro/button";
import StyledCard from "@/components/macro/card";
import StyledLink from "@/components/macro/link";

export default function Page() {
  return (
    <main className="relative flex h-auto w-full grow flex-col items-center justify-center gap-y-4">
      <section className="flex flex-col gap-y-4">
        <h2 className="text-balance text-center text-lg font-medium capitalize md:text-xl">
          Buttons
        </h2>
        <div className="mb-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-4">
          <StyledButton theme="default" variant="3d" className="">
            Button
          </StyledButton>
          <StyledButton theme="secondary" variant="3d" className="">
            Button
          </StyledButton>
          <StyledButton theme="outline" variant="3d" className="">
            Button
          </StyledButton>
        </div>
        <h2 className="text-balance text-center text-lg font-medium capitalize md:text-xl">
          Links
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-x-3">
          <StyledLink
            href="/components"
            variant="underline"
            className="[&>div]:bg-primary"
          >
            Link
          </StyledLink>
          <StyledLink href="/components" variant="underline">
            Link
          </StyledLink>
          <StyledLink
            href="/components"
            variant="underline"
            className="[&>div]:bg-gray-400"
          >
            Link
          </StyledLink>
        </div>
        <h2 className="text-balance text-center text-lg font-medium capitalize md:text-xl">
          Cards
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-x-3">
          <StyledCard header="Card" subheader="Lorem ipsum dolor sit ammet." />
        </div>
      </section>
    </main>
  );
}
