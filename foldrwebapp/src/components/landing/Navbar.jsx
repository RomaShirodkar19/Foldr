import { Folder } from "lucide-react";
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/react";

export default function Navbar() {

    const { isSignedIn } = useUser();
    
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FFF0E4]/80 backdrop-blur-md border-b border-[#FFE0C5]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo + Name */}
        <a href="/" className="flex items-center gap-2 group">
          <div className="relative w-8 h-8">
            {/* Folded-corner icon using teal palette */}
            <div className="w-8 h-8 bg-[#007979] rounded-md flex items-center justify-center">
              <Folder size={18} className="text-[#FFF0E4]" strokeWidth={2} />
            </div>
            {/* Folded corner accent */}
            <div
              className="absolute bottom-0 right-0 w-0 h-0"
              style={{
                borderStyle: "solid",
                borderWidth: "0 0 8px 8px",
                borderColor: "transparent transparent #FFF0E4 transparent",
              }}
            />
          </div>
          <span className="text-[#007979] font-semibold text-xl tracking-tight">
            Foldr
          </span>
        </a>

        {/* Auth buttons */}
        {!isSignedIn ? (
          <div className="flex items-center gap-3">
            <SignInButton mode="modal">
              <button className="text-sm font-medium text-[#007979] cursor-pointer hover:text-[#24B1B1] transition-colors px-3 py-1.5">
                Sign in
              </button>
            </SignInButton>

            <SignUpButton mode="modal">
              <button className="text-sm font-medium bg-[#007979] cursor-pointer text-[#FFF0E4] px-4 py-2 rounded-md hover:bg-[#24B1B1] transition-colors">
                Get started
              </button>
            </SignUpButton>
          </div>
        ) : (
          <UserButton />
        )}
      </div>
    </nav>
  );
}