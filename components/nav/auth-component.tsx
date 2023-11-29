"use client";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { LockClosedIcon } from "@radix-ui/react-icons";
import { UserButton } from "@clerk/nextjs";

import React from "react";

function AuthComponent() {
  const { user, isSignedIn, isLoaded } = useUser();
  const outlineButtonVariant = buttonVariants({ variant: "outline" });
  return isSignedIn ? (
    <div className="pr-2">
      <UserButton
        afterSignOutUrl="/"
        userProfileMode="navigation"
        userProfileUrl="/user-profile"
      />
    </div>
  ) : (
    isLoaded && (
      <Link className={outlineButtonVariant} href="/sign-in">
        <div className="flex gap-2 items-center">
          <LockClosedIcon /> <span>Sign In</span>
        </div>
      </Link>
    )
  );
}

export default AuthComponent;
