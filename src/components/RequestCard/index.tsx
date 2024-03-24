import { RequestItem } from '..';
import {
  JobDescription,
  EmployeeResponsibilities,
  EmployeeRequirement,
  WorkingConditions,
  AdditionalInformation,
  Salary,
  Deadlines,
  RecruiterRequirements,
  AdditionalConditions,
} from '../CardItems';

const tabsMap: { [key: number]: React.ReactNode } = {
  1: <JobDescription />,
  2: <EmployeeResponsibilities />,
  3: <EmployeeRequirement />,
  4: <WorkingConditions />,
  5: <AdditionalInformation />,
  6: <Salary />,
  7: <Deadlines />,
  8: <RecruiterRequirements />,
  9: <AdditionalConditions />,
};

interface TabsProps {
  tabState: number;
  tabHandler: (id: number) => void;
}

function RequestCard({ tabState, tabHandler }: TabsProps) {
  return (
    <RequestItem tabState={tabState} tabHandler={tabHandler}>
      {tabsMap[tabState]}
    </RequestItem>
  );
}

export default RequestCard;
