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

type FileType = {
  name: string;
  size: number;
  type: string;
};

type InputsFormType = {
  // [key: string]: string | string[];
  firstStep: {
    vacancyName: string;
    additionalInfo: string;
    additionalInfoResult: string[];
    industry: string[];
    responsibilities: string;
    responsibilitiesResult: string[];
    skills: string;
    experience: string;
    additionalResponsibilities: string;
    additionalResponsibilitiesResult: string[];
    education: string;
    type: string[];
    workFormat: string[];
    salaryMin: string;
    salaryMax: string;
    format: string;
    additionalRequirements: string;
    additionalRequirementsResult: string[];
    medical: string;
    bonuses: string[];
    additionalWorkConditions: string;
    additionalWorkConditionsResult: string[];
    additionalInfo2: string;
    additionalInfo2Result: string[];
    location: string;
    banned: string;
    bannedResult: string[];
    test: string;
    testResult: FileType[];
  };
  secondStep: {
    payMethod: string;
  };
  thirdStep: {
    compensation: string;
    costForSpeed: string;
    dateForWork: string;
    dateForFirstResume: string;
    recruitCount: string;
    recruitType: string[];
    additionalRecruiterRequirements: string;
    additionalRecruiterRequirementsResult: string[];
    experienceForRecruiter: string;
    additionalRecruiterConditions: string;
    additionalRecruiterConditionsResult: string[];
    additionalRecruiterOtherInfo: string[];
    security: string;
    securityResult: FileType[];
  };
};
