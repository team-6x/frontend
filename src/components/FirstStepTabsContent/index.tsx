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

interface IFirstStepTabsContent {
  tabState: number;
  tabHandler: (id: number) => void;
  nextStepHandleClick?: () => void;
}

const FirstStepTabsContent: React.FC<IFirstStepTabsContent> = ({
  tabState,
  tabHandler,
  nextStepHandleClick,
}) => {
  return (
    <RequestItem
      tabState={tabState}
      tabHandler={tabHandler}
      tabContent={firstStepTabContent}
      nextStepHandleClick={nextStepHandleClick}
    />
  );
};

export default FirstStepTabsContent;
