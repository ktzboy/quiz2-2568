import { Outlet } from "react-router-dom";
import { AppShell, AppShellFooter } from "@mantine/core";
import HeaderComponent from "../components/Header";
import FooterComponet from "../components/Footer";
import { useDisclosure } from "@mantine/hooks";

export default function MainLayout() {
  const [opened, { toggle }] = useDisclosure();
  return (
    <AppShell
      padding="md"
      header={{ height: 70 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
      footer={{ height: 50 }}
    >
      <AppShell.Header>
        <HeaderComponent opened={opened} toggle={toggle} />
      </AppShell.Header>
      <AppShell.Footer>
        <FooterComponet courseName="BASICCOMPUTERLAB-261207" year="2025" fullName="Pongpol Sritalanut" studentId="670610718"/>
      </AppShell.Footer>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}
