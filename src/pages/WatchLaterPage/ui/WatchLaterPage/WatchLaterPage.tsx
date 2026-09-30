import Link from "next/link";
import { redirect } from "next/navigation";
import { Container } from "@/shared/ui/container";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/shared/ui/breadcrumb";
import { RoutePath } from "@/shared/constants/router";
import { withAuth } from "@/shared/lib/api/withAuth";
import { WatchLaterInfiniteList } from "../WatchLaterInfiniteList/WatchLaterInfiniteList";

export const WatchLaterPage = async () => {
  const { userId } = await withAuth();

  if (!userId) {
    redirect(RoutePath.library);
  }

  return (
    <Container className={"lg:pt-8 pt-4"}>
      <Breadcrumb className={"bg-secondary-background lg:mb-8 mb-4 mx-4 lg:mx-0 rounded-lg p-3"}>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href={RoutePath.library}>Library</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Watch Later</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <WatchLaterInfiniteList />
    </Container>
  );
};
