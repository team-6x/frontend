type IndustryResponseType = {
  id: string;
  name: string;
  industries: Industry[];
};

type Industry = {
  id: string;
  name: string;
};

interface CardProps {
  img: string;
  title: string;
  text: string;
}

type ProfessionalRoleResponseType = {
  items: ProfessionalRoleItemType[];
};

type ProfessionalRoleItemType = {
  id: string;
  professional_roles: ProfessionalRole[];
  text: string;
};

type ProfessionalRole = {
  accept_incomplete_resumes: boolean;
  id: string;
  name: string;
};

type SkillsResponseType = {
  items: Item[];
};

type SkillsType = {
  id: string;
  text: string;
};

type ResultsType = {
  firstResult: FirstResult;
  secondResult: SecondResult;
  thirdResult: ThirdResult;
};

type FirstResultType = {
  vacancyName: string;
  additionalInfo: string;
  industry: string[];
  responsibilities: string[];
  skills: string[];
  experience: string;
  additionalRequirements: string;
  education: string;
  type: string[];
  workFormal: string[];
  salaryMin: string;
  salaryMax: string;
  format: string[];
  medical: string;
  bonuses: string[];
  location: string;
  banned: string;
  test: string;
  additionalInfo2: string;
  additionalWorkConditions: string;
};

type SecondResultType = {
  payMethod: string;
};

type ThirdResultType = {
  compensation: string;
  costForSpeed: string;
  dateForWork: string;
  dateForFirstResume: string;
  recruitCount: string;
  workType: string;
  recruitType: string[];
  experienceForRecruiter: string;
  interviews: string;
  recommendations: string;
  security: string;
  additionalRecruiterСonditions: string;
  additionalRecruiterRequirements: string[];
  additionalRecruiterOtherInfo: string;
};
