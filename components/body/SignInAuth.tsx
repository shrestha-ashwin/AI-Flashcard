import { SignInButton, SignedOut } from "@clerk/nextjs";

export default function SignInAuth({ button }: { button: JSX.Element }) {
  return (
    <SignedOut>
      <SignInButton forceRedirectUrl={process.env.NEXT_PUBLIC_DASHBOARD_URL}>
        {button}
      </SignInButton>
    </SignedOut>
  );
}
