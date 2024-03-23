export const CANСEL_VACATION_POPUP_CONFIG = {
  title: 'Отменить создание вакансии',
  text: 'Внесённые в форму данные будут потеряны и не будут учтены',
  success: 'Отменить',
  cancel: 'Продолжить',
};

export const CANCEL_RECRUTER_POPUP_CONFIG = {
  title: 'Отменить заполнение условий сотрудничества',
  text: 'Внесённые в форму данные будут потеряны и не будут учтены',
  success: 'Отменить',
  cancel: 'Продолжить',
};

export const SAVE_DRAFT_POPUP_CONFIG = {
  title: 'Внесённые данные будут сохранены в «Черновиках»',
  text: 'Внесённые данные по заявке будут сохранены и доступны в черновиках',
  success: 'Сохранить',
  cancel: 'Отменить',
};

export const VACANCY_TABS = [
  { title: 'Описание вакансии', id: 1 },
  { title: 'Обязанности сотрудника', id: 2 },
  { title: 'Требования к соискателю', id: 3 },
  { title: 'Условия работы', id: 4 },
  { title: 'Дополнительные данные', id: 5 },
];

export const RECRUITER_TABS = [
  { title: 'Вознаграждение', id: 6 },
  { title: 'Сроки', id: 7 },
  { title: 'Требования к рекрутеру', id: 8 },
  { title: 'Дополнительные условия', id: 9 },
];

export const RESULT_TITLE = {
  vacancyName: 'Название вакансии',
  industry: 'Отрасль',
  responsibilities: 'Обязанности',
  skills: 'Навыки',
  experience: 'Опыт работы',
  education: 'Образование',
  type: 'Тип',
  salary: 'Зарплата',
  format: 'Формат',
  medical: 'ДМС',
  bonuses: 'Бонусы',
  location: 'Локация',
  banned: 'Стоп-лист',
  test: 'Тестовое задание',
  compensation: 'Вознаграждение за сотрудника',
  costForSpeed: 'Доплата за срочность',
  dateForFirstResume: 'Желаемая дата получения первых резюме',
  dateForWork: 'Желаемая дата выхода сотрудника на работу',
  recruitCount: 'Кол-во рекрутеров',
  salaryForRecruiter: 'Зарплата для рекрутера',
  recruitType: 'Тип исполнителя',
  experienceForRecruiter: 'Опыт рекрутерской деятельности',
  interviews: 'Предварительные интервью',
  recommendations: 'Запрос рекомендаций с прошлых мест работы',
  security: 'Анкета службы безопасности',
};

export const JOB_DESCRIPTION = {
  inputTitle: 'Название вакансии',
  inputPlaceholder: 'Введите название вакансии',
  tooltip:
    'Уточните специальность, чтобы рекрутер подобрал релевантных кандидатов',
  multiTitle: 'Сфера деятельности',
  multiPlaceholder: 'Выберите сферу деятельности',
  additional: 'Добавить описание вакансии',
};

export const EMPLOYEE_RESPONSIBILITIES = {
  inputTitle: 'Обязанности сотрудника',
  additional: 'Добавить обязанности сотрудника',
};

export const EMPLOYEE_REQUIREMENT = {
  inputTitle: 'Опыт работы',
  selectPlaceholder: 'Выберите опыт работы',
  title2: 'Образование',
  selectPlaceholder2: 'Выберите образование',
  multiTitle: 'Тип занятости',
  multiPlaceholder: 'Выберите тип занятости',
  label: 'Навыки',
  labelDescription: 'Выберите категорию, чтобы добавить доп.информацию',
  additional: 'Добавить требования к соискателю',
  multiTitle2: 'Навыки',
  multiPlaceholder2: 'Введите необходимые навыки',
};

export const WORKING_CONDITIONS = {
  inputTitle: 'Заработная плата',
  inputPlaceholder: 'от',
  inputPlaceholder2: 'до',
  checkbox: 'Не указывать в вакансии',
  selectTitle: 'Формат работы',
  selectPlaceholder: 'Выберите формат работы',
  multiTitle: 'Оформление',
  multiPlaceholder: 'Выберите тип оформления',
  label: 'ДМС',
  label2: 'Бонусы',
  labelDescription: 'Выберите категорию, чтобы добавить доп.информацию',
  additional: 'Добавить условия работы',
  selectTitle2: 'ДМС',
  selectPlaceholder2: 'Выберите вариант',
  multiTitle2: 'Бонусы',
  multiPlaceholder2: 'Добавьте информацию о бонусах, премиях, обучении',
};

export const ADDITIONAL_INFORMATION = {
  label: 'Локация',
  label2: 'Стоп - лист',
  label3: 'Тестовое задание',
  labelDescription: 'Выберите категорию, чтобы добавить доп.информацию',
  additional: 'Добавить дополнительные данные',
  selectTitle: 'Локация',
  selectPlaceholder: 'Выберите город',
  inputTitle: 'Стоп-лист сотрудников или компаний',
  inputPlaceholder: 'Введите данные для стоп-листа',
  tooltip:
    'Перечень сотрудников, компаний или любая другая информация, которую Вы не готовы рассматривать',
  selectTitle2: 'Тестовое задание',
  selectPlaceholder2: 'Выберите вариант',
};
