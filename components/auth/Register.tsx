"use client";

import { Button } from "@/components/ui/button";
import React from "react";

const Register: React.FC = () => {
  async function signUpNewUser() {
    try {
      const response = await fetch("/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        console.log("ERROR");
      }
    } catch (error) {
      // Handle fetch error
    }
  }

  return (
    <div>
      <Button onClick={() => signUpNewUser()}>Sign-up</Button>
    </div>
  );
};

export default Register;
