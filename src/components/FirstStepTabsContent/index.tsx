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
  nextStepHandleClick?: () => void;
}

function FirstStepTabsContent({
  tabState,
  tabHandler,
  nextStepHandleClick,
}: FirstStepTabsContentProps) {
  return (
    <RequestItem
      tabState={tabState}
      tabHandler={tabHandler}
      tabContent={firstStepTabContent}
      nextStepHandleClick={nextStepHandleClick}
    />
  );
}

export default FirstStepTabsContent;
