import { Text, Group } from "@mantine/core";
import { type FooterProps } from "../libs/Footer.ts";
export default function Footer({ courseName, year, fullName, studentId }: FooterProps) {
  return (
    <Group p="md" justify="center">
      <Text>
        © All rights reserved. {fullName} {studentId} {courseName} {year}
      </Text>
    </Group>
  );
}
