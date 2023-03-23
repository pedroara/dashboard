import { css } from "glamor";
import { ReactNode } from "react";
import { customTheme } from "../Library";

const container = css({
  padding: customTheme.spacing.l,
  maxWidth: 1200,
  margin: "0 auto",
}).toString();

const titleClass = css({
  marginBottom: customTheme.spacing.m,
}).toString();

export default function Page(props: {
  title: string | undefined;
  children: ReactNode;
}) {
  const { title, children } = props;

  return (
    <div className={container}>
      <h2 className={titleClass}>{title}</h2>
      {children}
    </div>
  );
}
