import React from "react";
import Link from "next/link";
import { Layout, Menu } from "antd";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

const { Header } = Layout;

const Navigation: React.FC = () => (
  <Header style={{ background: "#fff", padding: 0 }}>
    <div className="max-w-7xl mx-auto flex justify-between  items-center h-full">
      <div className="text-xl font-bold mr-8">
        <Link href="/">🧈 Makkhan</Link>
      </div>
      <div className="flex items-center gap-4 ml-auto">
        <SignedOut>
          <SignInButton mode="modal" />
        </SignedOut>
        <SignedIn>
          <UserButton /> 
        </SignedIn>
      </div>
    </div>
  </Header>
);

export default Navigation;