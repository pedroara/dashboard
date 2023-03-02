import { AppProps } from "../../types/components/app";

export default function App(props: AppProps) {
  return <div>App{props.children}</div>;
}
