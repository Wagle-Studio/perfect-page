import { GetServerSidePropsContext } from "next";
import { PageRepository } from "@/cdn/backend/repositories/PageRepository";
import { PageCardForm } from "@/ui/admin/organisms/pageCardForm/PageCardForm";

export default async function DashboardPagesEdit(
  props: GetServerSidePropsContext
) {
  const pageRepository = new PageRepository();
  const page = await pageRepository.getPageBySlug(props.params?.slug as string);

  // TODO: handle case when there is no page to edit.
  return <>{page && <PageCardForm page={page} />}</>;
}
