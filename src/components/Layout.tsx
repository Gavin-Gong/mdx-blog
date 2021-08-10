import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout(props: any) {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
}
