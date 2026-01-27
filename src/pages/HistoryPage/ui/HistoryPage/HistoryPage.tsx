import Link from "next/link";
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
import { VideoHistoryInfiniteList } from "../VideoHistoryInfiniteList/VideoHistoryInfiniteList";

export const HistoryPage = async () => {
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
            <BreadcrumbPage>History</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <VideoHistoryInfiniteList />
    </Container>
  );
};
