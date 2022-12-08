import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import StudentTab from "./StudentTab";

export default function DetailClassroom() {
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Tabs>
        <TabList>
          <Tab>Danh sách học sinh</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Box>
              <StudentTab />
            </Box>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
