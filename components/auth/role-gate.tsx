"use client";

import { useCurrentRole } from "@/hooks/useCurrentRole";
import { UserRole } from "@prisma/client";
import { FormError } from "@/components/form-error";
import { Skeleton } from "@/components/ui/skeleton";

interface RoleGateProps {
  allowedRole: UserRole;
  children: React.ReactNode;
}

export const RoleGate = ({ allowedRole, children }: RoleGateProps) => {
  const role = useCurrentRole();

  if (!role) return <Skeleton className="w-full h-4" />;

  if (role !== allowedRole) {
    return <FormError message="You are not allowed to access this page." />;
  }

  return children;
};
