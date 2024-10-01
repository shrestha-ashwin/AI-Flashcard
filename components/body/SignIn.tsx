import { SignInButton } from "@clerk/nextjs";

export default function SignIn({ button }: { button: JSX.Element }) {
  return (
    <SignInButton forceRedirectUrl={process.env.DASHBOARD_URL}>
      {button}
    </SignInButton>
  );
}
