import { ReactNode } from "react";
import classNames from "classnames";
import "./card.scss";

type CardProps = {
  title: ReactNode;
  icon: ReactNode;
  subtitles?: ReactNode;
  toolbar?: ReactNode;
  children: ReactNode;
  className?: string;
};

export function Card({
  title,
  icon,
  subtitles,
  toolbar,
  children,
  className,
  ...props
}: CardProps) {
  const cardClasses = classNames("admin__card", className);

  return (
    <div className={cardClasses} {...props}>
      <div className="admin__card__header">
        <div className="admin__card__header__content">
          <div className="admin__card__header__content__title">
            {icon}
            {title}
          </div>
          {subtitles && (
            <div className="admin__card__header__content__subtitles">
              {subtitles}
            </div>
          )}
        </div>
        {toolbar && (
          <div className="admin__card__header__toolbar">{toolbar}</div>
        )}
      </div>
      <div className="admin__card__body">{children}</div>
    </div>
  );
}
