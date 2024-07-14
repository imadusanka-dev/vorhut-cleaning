import type { PropsWithChildren } from "react";
import { PublicHeader } from "@/components";

const PublicLayout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <PublicHeader />
      <div className="px-12">{children}</div>
    </div>
  );
};

export default PublicLayout;
