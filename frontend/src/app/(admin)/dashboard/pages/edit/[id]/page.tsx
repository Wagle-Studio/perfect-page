import { GetServerSidePropsContext } from "next";
import { getServerSession } from "next-auth";
import { UserRepository } from "@/cdn/backend/repositories/UserRepository";
import { PageRepository } from "@/cdn/backend/repositories/PageRepository";
import { PageCard } from "@/ui/admin/organisms/pageCard/PageCard";

export default async function DashboardPagesEdit(
  props: GetServerSidePropsContext
) {
  const session = await getServerSession();

  const userRepository = new UserRepository();
  const user = await userRepository.getUser(session?.user.email);

  const pageRepository = new PageRepository();
  const page = await pageRepository.getPage(props.params?.id as string);

  return <>{user && page && <PageCard user={user} page={page} />}</>;
}
