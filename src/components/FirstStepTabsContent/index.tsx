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
  setOpenSecondStep?: () => void;
}

function FirstStepTabsContent({
  tabState,
  tabHandler,
  setOpenSecondStep,
}: FirstStepTabsContentProps) {
  return (
    <RequestItem
      tabState={tabState}
      tabHandler={tabHandler}
      tabContent={firstStepTabContent}
      setOpenSecondStep={setOpenSecondStep}
    />
  );
}

export default FirstStepTabsContent;
