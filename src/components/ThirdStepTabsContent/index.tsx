import RequestItem from '../RequestItem';
import {
  Salary,
  Deadlines,
  RecruiterRequirements,
  AdditionalConditions,
} from '../CardItems';

const thirdStepTabsContent: React.ReactNode[] = [
  <Salary />,
  <Deadlines />,
  <RecruiterRequirements />,
  <AdditionalConditions />,
];

interface ThirdStepTabsContentProps {
  tabState: number;
  tabHandler: (id: number) => void;
}

function ThirdStepTabsContent({
  tabState,
  tabHandler,
}: ThirdStepTabsContentProps) {
  return (
    <RequestItem
      tabState={tabState}
      tabHandler={tabHandler}
      tabContent={thirdStepTabsContent}
    />
  );
}

export default ThirdStepTabsContent;
