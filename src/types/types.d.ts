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
