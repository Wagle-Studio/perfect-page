import { Pages } from "@prisma/client";
import { format, parseISO } from "date-fns";
import { Card } from "@/ui/admin/atoms/card/Card";
import { Link } from "@/ui/admin/atoms/link/Link";
import { PageIcon } from "@/ui/admin/atoms/icons/PageIcon";
import { PlusIcon } from "@/ui/admin/atoms/icons/PlusIcon";
import { EditIcon } from "@/ui/admin/atoms/icons/EditIcon";
import { TrashIcon } from "@/ui/admin/atoms/icons/TrashIcon";
import "./page_table.scss";

type PageTableProps = {
  pages: Pages[];
};

export function PageTable(props: PageTableProps) {
  function formatDate(date: Date) {
    return format(new Date(date).toLocaleString(), "MM/dd/yyyy - hh:mm aaa");
  }

  return (
    <Card
      title={<h2>Pages</h2>}
      icon={<PageIcon size="large" />}
      toolbar={
        <Link href="/dashboard/pages/new" variant="button" severity="secondary">
          Register page
          <PlusIcon size="small" />
        </Link>
      }
      className="admin__page-table__body"
    >
      <table className="admin__page-table__body__table">
        <thead className="admin__page-table__body__table__head">
          <tr className="admin__page-table__body__table__head__row">
            <th className="admin__page-table__body__table__head__row__item">
              <p>Title</p>
            </th>
            <th className="admin__page-table__body__table__head__row__item admin__page-table__body__table__head__row__item--date">
              <p>Created At</p>
            </th>
            <th className="admin__page-table__body__table__head__row__item admin__page-table__body__table__head__row__item--date">
              <p>Updated At</p>
            </th>
            <th className="admin__page-table__body__table__head__row__item admin__page-table__body__table__head__row__item--actions">
              <p>Actions</p>
            </th>
          </tr>
        </thead>
        <tbody className="admin__page-table__body__table__body">
          {props.pages.map((page, index) => (
            <tr
              key={index}
              className="admin__page-table__body__table__body__row"
            >
              <td className="admin__page-table__body__table__body__row__item admin__page-table__body__table__body__row__item--title">
                <p>{page.title}</p>
              </td>
              <td className="admin__page-table__body__table__body__row__item admin__page-table__body__table__body__row__item--date">
                <p>{formatDate(page.createdAt)}</p>
              </td>
              <td className="admin__page-table__body__table__body__row__item admin__page-table__body__table__body__row__item--date">
                <p>{formatDate(page.updatedAt)}</p>
              </td>
              <td className="admin__page-table__body__table__body__row__item admin__page-table__body__table__body__row__item--actions">
                <Link href={`/dashboard/pages/edit/${page.id}`}>
                  <EditIcon size="small" />
                </Link>
                <TrashIcon size="small" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}
