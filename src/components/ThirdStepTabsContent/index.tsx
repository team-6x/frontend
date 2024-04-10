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

interface IThirdStepTabsContent {
  tabState: number;
  tabHandler: (id: number) => void;
}

const ThirdStepTabsContent: React.FC<IThirdStepTabsContent> = ({
  tabState,
  tabHandler,
}) => {
  return (
    <RequestItem
      tabState={tabState}
      tabHandler={tabHandler}
      tabContent={thirdStepTabsContent}
    />
  );
};

export default ThirdStepTabsContent;
