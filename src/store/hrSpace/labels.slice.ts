import { createSlice } from '@reduxjs/toolkit';

interface ILabels {
  [key: string]: boolean;
}

const initialState: ILabels = {
  skills: false,
  medical: false,
  bonuses: false,
  location: false,
  banned: false,
  testTask: false,
  salary: false,
  calendar: false,
  recruiter: false,
  additional: false,
  fileUpload: false,
};

export const labelsSlice = createSlice({
  name: 'labels',
  initialState,
  reducers: {
    setSkillsLabel: state => {
      state.skills = !state.skills;
    },
    setMedicalLabel: state => {
      state.medical = !state.medical;
    },
    setBonusesLabel: state => {
      state.bonuses = !state.bonuses;
    },
    setLocationLabel: state => {
      state.location = !state.location;
    },
    setBannedLabel: state => {
      state.banned = !state.banned;
    },
    setTestLabel: state => {
      state.testTask = !state.testTask;
    },
    setSalaryLabel: state => {
      state.salary = !state.salary;
    },
    setCalendarLabel: state => {
      state.calendar = !state.calendar;
    },
    setRecruiterLabel: state => {
      state.recruiter = !state.recruiter;
    },
    setAdditionalLabel: state => {
      state.additional = !state.additional;
    },
    setFileUploadLabel: state => {
      state.fileUpload = !state.fileUpload;
    },
  },
});

export const labelsActions = labelsSlice.actions;
export default labelsSlice.reducer;
