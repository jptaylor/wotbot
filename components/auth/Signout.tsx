"use client";

import { signout } from "@/app/auth/actions";
import { Button } from "@/components/ui/button";
import React from "react";

const Signout: React.FC = () => {
  return (
    <div>
      <Button onClick={() => signout()}>Signout</Button>
    </div>
  );
};

export default Signout;
