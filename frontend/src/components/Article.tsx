"use client"

import { ReactNode } from "react";

type ArticleProps = {
  children: ReactNode;
};

export function Article(props: ArticleProps) {
  return <>{props.children}</>;
}
