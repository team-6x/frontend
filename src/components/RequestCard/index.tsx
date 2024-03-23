import { RequestItem } from '..';
import {
  JobDescription,
  EmployeeResponsibilities,
  EmployeeRequirement,
  WorkingConditions,
  AdditionalInformation,
} from '../CardItems';

const tabsMap: { [key: number]: React.ReactNode } = {
  1: <JobDescription />,
  2: <EmployeeResponsibilities />,
  3: <EmployeeRequirement />,
  4: <WorkingConditions />,
  5: <AdditionalInformation />,
};

function RequestCard() {
  const tabState = 5;

  return <RequestItem>{tabsMap[tabState]}</RequestItem>;
}

export default RequestCard;
