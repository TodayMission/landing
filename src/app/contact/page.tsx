import ContactPageComponent from "../components/contact";
import PreFooter from "../homepage/prefooter";

export default function ContactPage() {
  return (
    <main className="flex-1 pt-15">
      <ContactPageComponent></ContactPageComponent>
      <PreFooter></PreFooter>
    </main>
  );
}