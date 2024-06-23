import { ReactNode } from "react";
import classNames from "classnames";
import "./card.scss";

type CardProps = {
  title: ReactNode;
  icon: ReactNode;
  subtitles?: ReactNode;
  children: ReactNode;
  className?: string;
};

export function Card({
  title,
  icon,
  subtitles,
  children,
  className,
  ...props
}: CardProps) {
  const cardClasses = classNames("admin__card", className);

  return (
    <div className={cardClasses} {...props}>
      <div className="admin__card__header">
        <div className="admin__card__header__title">
          {icon}
          {title}
        </div>
        {subtitles && (
          <div className="admin__card__header__subtitles">{subtitles}</div>
        )}
      </div>
      <div className="admin__card__body">{children}</div>
    </div>
  );
}
