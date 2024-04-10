import { createSlice } from '@reduxjs/toolkit';

const initialState: InputsFormType = {
  firstStep: {
    vacancyName: '',
    industry: [],
    additionalInfo: '',
    additionalInfoResult: [],
    responsibilities: '',
    responsibilitiesResult: [],
    experience: '',
    education: '',
    type: [],
    additionalResponsibilities: '',
    additionalResponsibilitiesResult: [],
    skills: '',
    salaryMin: '',
    salaryMax: '',
    format: '',
    workFormat: [],
    additionalRequirements: '',
    additionalRequirementsResult: [],
    medical: '',
    bonuses: [],
    additionalWorkConditions: '',
    additionalWorkConditionsResult: [],
    additionalInfo2: '',
    additionalInfo2Result: [],
    location: '',
    banned: '',
    bannedResult: [],
    test: '',
    testResult: [],
  },
  secondStep: {
    payMethod: '',
  },
  thirdStep: {
    compensation: '',
    costForSpeed: '',
    dateForWork: '',
    dateForFirstResume: '',
    recruitCount: '',
    recruitType: [],
    additionalRecruiterRequirements: '',
    additionalRecruiterRequirementsResult: [],
    experienceForRecruiter: '',
    additionalRecruiterConditions: '',
    additionalRecruiterConditionsResult: [],
    additionalRecruiterOtherInfo: [],
    security: '',
    securityResult: [],
  },
};

export const inputsFormSlice = createSlice({
  name: 'inputsForm',
  initialState,
  reducers: {
    // setString: (state, action: PayloadAction<PayloadType>) => {
    //   const { field, value } = action.payload;
    //   state[field] = value;
    // },
    // setArray: (
    //   state,
    //   action: PayloadAction<{ field: string; value: string[] }>,
    // ) => {
    //   const { field, value } = action.payload;
    //   state[field] = value;
    // },
    setVacancyName: (state, action) => {
      state.firstStep.vacancyName = action.payload;
    },
    setIndustry: (state, action) => {
      state.firstStep.industry = action.payload;
    },
    setAdditionalInfo: (state, action) => {
      state.firstStep.additionalInfo = action.payload;
    },
    setAdditionalInfoResult: (state, action) => {
      state.firstStep.additionalInfoResult = action.payload;
    },
    setResponsibilities: (state, action) => {
      state.firstStep.responsibilities = action.payload;
    },
    setResponsibilitiesResult: (state, action) => {
      state.firstStep.responsibilitiesResult = action.payload;
    },
    setSkills: (state, action) => {
      state.firstStep.skills = action.payload;
    },
    setExperience: (state, action) => {
      state.firstStep.experience = action.payload;
    },
    setAdditionalRequirements: (state, action) => {
      state.firstStep.additionalRequirements = action.payload;
    },
    setAdditionalRequirementsResult: (state, action) => {
      state.firstStep.additionalRequirementsResult = action.payload;
    },
    setEducation: (state, action) => {
      state.firstStep.education = action.payload;
    },
    setType: (state, action) => {
      state.firstStep.type = action.payload;
    },
    setAdditionalResponsibilities: (state, action) => {
      state.firstStep.additionalResponsibilities = action.payload;
    },
    setAdditionalResponsibilitiesResult: (state, action) => {
      state.firstStep.additionalResponsibilitiesResult = action.payload;
    },
    setMinSalary: (state, action) => {
      state.firstStep.salaryMin = action.payload;
    },
    setMaxSalary: (state, action) => {
      state.firstStep.salaryMax = action.payload;
    },
    setFormat: (state, action) => {
      state.firstStep.format = action.payload;
    },
    setWorkFormat: (state, action) => {
      state.firstStep.workFormat = action.payload;
    },
    setMedical: (state, action) => {
      state.firstStep.medical = action.payload;
    },
    setBonuses: (state, action) => {
      state.firstStep.bonuses = action.payload;
    },
    setAdditionalWorkConditions: (state, action) => {
      state.firstStep.additionalWorkConditions = action.payload;
    },
    setAdditionalWorkConditionsResult: (state, action) => {
      state.firstStep.additionalWorkConditionsResult = action.payload;
    },
    setAdditionalInfo2: (state, action) => {
      state.firstStep.additionalInfo2 = action.payload;
    },
    setAdditionalInfo2Result: (state, action) => {
      state.firstStep.additionalInfo2Result = action.payload;
    },
    setLocation: (state, action) => {
      state.firstStep.location = action.payload;
    },
    setBanned: (state, action) => {
      state.firstStep.banned = action.payload;
    },
    setBannedResult: (state, action) => {
      state.firstStep.bannedResult = action.payload;
    },
    setTest: (state, action) => {
      state.firstStep.test = action.payload;
    },
    setTestResult: (state, action) => {
      state.firstStep.testResult = action.payload;
    },
    setPayMethod: (state, action) => {
      state.secondStep.payMethod = action.payload;
    },
    setCompensation: (state, action) => {
      state.thirdStep.compensation = action.payload;
    },
    setCostForSpeed: (state, action) => {
      state.thirdStep.costForSpeed = action.payload;
    },
    setDateForWork: (state, action) => {
      state.thirdStep.dateForWork = action.payload;
    },
    setDateForFirstResume: (state, action) => {
      state.thirdStep.dateForFirstResume = action.payload;
    },
    setRecruitCount: (state, action) => {
      state.thirdStep.recruitCount = action.payload;
    },
    setRecruitType: (state, action) => {
      state.thirdStep.recruitType = action.payload;
    },
    setAdditionalRecruiterRequirements: (state, action) => {
      state.thirdStep.additionalRecruiterRequirements = action.payload;
    },
    setAdditionalRecruiterRequirementsResult: (state, action) => {
      state.thirdStep.additionalRecruiterRequirementsResult = action.payload;
    },
    setExperienceForRecruiter: (state, action) => {
      state.thirdStep.experienceForRecruiter = action.payload;
    },
    setSecurity: (state, action) => {
      state.thirdStep.security = action.payload;
    },
    setSecurityResult: (state, action) => {
      state.thirdStep.securityResult = action.payload;
    },
    setAdditionalRecruiterConditions: (state, action) => {
      state.thirdStep.additionalRecruiterConditions = action.payload;
    },
    setAdditionalRecruiterConditionsResult: (state, action) => {
      state.thirdStep.additionalRecruiterConditionsResult = action.payload;
    },
    setAdditionalRecruiterOtherInfo: (state, action) => {
      state.thirdStep.additionalRecruiterOtherInfo = action.payload;
    },
  },
});

export const inputsFormActions = inputsFormSlice.actions;
export default inputsFormSlice.reducer;
