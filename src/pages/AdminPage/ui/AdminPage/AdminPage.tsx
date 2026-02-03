import dynamic from "next/dynamic";
import { withAuth } from "@/shared/lib/api/withAuth";
import { prisma } from "@/shared/lib/prisma/prismaClient";
import type { NextRequest } from "next/server";

const AdminForm = dynamic(() => import("../AdminForm/AdminForm"));

export const AdminPage = async (req: NextRequest) => {
  const { userId, error } = await withAuth();

  if (error) {
    return <div>Error</div>;
  }

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (user?.role !== "ADMIN") {
    return <div>Access denied</div>;
  }

  return (
    <div className={"bg-white p-6"}>
      <div className={"mb-3"}>
        <h5 className={"text-2xl font-bold"}>Admin page</h5>
        <p>Welcome {user.name}</p>
      </div>

      <div>
        <h6>Add new video here</h6>
        <AdminForm />
      </div>
    </div>
  );
};
