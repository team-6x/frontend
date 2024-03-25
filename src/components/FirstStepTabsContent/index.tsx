import RequestItem from '../RequestItem';
import {
  JobDescription,
  EmployeeResponsibilities,
  EmployeeRequirement,
  WorkingConditions,
  AdditionalInformation,
} from '../CardItems';

const firstStepTabContent: React.ReactNode[] = [
  <JobDescription />,
  <EmployeeResponsibilities />,
  <EmployeeRequirement />,
  <WorkingConditions />,
  <AdditionalInformation />,
];

interface FirstStepTabsContentProps {
  tabState: number;
  tabHandler: (id: number) => void;
}

function FirstStepTabsContent({
  tabState,
  tabHandler,
}: FirstStepTabsContentProps) {
  return (
    <RequestItem
      tabState={tabState}
      tabHandler={tabHandler}
      tabContent={firstStepTabContent}
    />
  );
}

export default FirstStepTabsContent;
