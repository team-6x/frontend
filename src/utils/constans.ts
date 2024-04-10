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
  { title: 'Описание вакансии', id: 0 },
  { title: 'Обязанности сотрудника', id: 1 },
  { title: 'Требования к соискателю', id: 2 },
  { title: 'Условия работы', id: 3 },
  { title: 'Дополнительные данные', id: 4 },
];

export const RECRUITER_TABS = [
  { title: 'Вознаграждение', id: 0 },
  { title: 'Сроки', id: 1 },
  { title: 'Требования к рекрутеру', id: 2 },
  { title: 'Дополнительные условия', id: 3 },
];

export const VACANCY_RESULT_TITLES = [
  { title: 'Описание вакансии', content: ['vacancyName', 'industry'] },
  { title: 'Обязанности сотрудника', content: ['responsibilities'] },
  {
    title: 'Требования к соискателю',
    content: ['skills', 'experience', 'education', 'type'],
  },
  {
    title: 'Условия работы',
    content: ['salary', 'format', 'medical', 'bonuses', 'workType'],
  },
  { title: 'Дополнительные данные', content: ['location', 'banned', 'test'] },
];

export const RECRUITER_RESULT_TITLES = [
  { title: 'Вознаграждение', content: ['compensation', 'costForSpeed'] },
  { title: 'Сроки', content: ['dateForFirstResume', 'dateForWork'] },
  {
    title: 'Требования к рекрутеру',
    content: ['recruitCount', 'experienceForRecruiter', 'recruitType'],
  },
  {
    title: 'Дополнительные условия',
    content: ['interviews', 'recommendations', 'security'],
  },
];

export const JOB_DESCRIPTION = {
  inputTitle: 'Название вакансии',
  inputPlaceholder: 'Начните вводить название вакансии',
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
  selectTitle: 'Опыт работы',
  selectPlaceholder: 'Выберите опыт работы',
  selectTitle2: 'Образование',
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

export const SALARY = {
  inputTitle: 'Вознаграждение за сотрудника',
  inputPlaceholder: 'Введите сумму вознаграждения',
  tooltip: 'Рекомендуемая сумма — среднемесячный доход кандидата и выше',
  label: 'Срочная вакансия',
  labelDescription: 'Выберите категорию, чтобы добавить доп.информацию',
  inputTitle2: 'Доплата за срочность',
  inputPlaceholder2: 'Введите сумму доплаты',
  tooltip2:
    'Через две недели будут доступны первые резюме по указанной цене в данной профессиональной области. Желаете получить их через неделю? В таком случае, рекомендуем увеличить цену на 10 000',
};

export const DEADLINES = {
  inputTitle: 'Желаемая дата выхода сотрудника на работу',
  label: 'Дата первых интервью',
  labelDescription: 'Выберите категорию, чтобы добавить доп.информацию',
  inputTitle2: 'Желаемая дата получения первых резюме',
  tooltip:
    'Минимально возможная дата - через неделю от создания заявки на поиск',
};

export const RECRUITER_REQUIREMENTS = {
  selectTitle: 'Кол-во рекрутеров',
  selectPlaceholder: 'Выберите количество рекрутеров для работы',
  tooltip: 'Максимальное количество рекрутеров для каждой вакансии — 3',
  multiTitle: 'Тип исполнителя',
  multiPlaceholder: 'Выберите тип исполнителя',
  label: 'Стаж',
  labelDescription: 'Выберите категорию, чтобы добавить доп.информацию',
  additional: 'Добавить требования к рекрутеру',
  selectTitle2: 'Опыт рекрутерской деятельности',
  selectPlaceholder2: 'Выберите опыт работы',
};

export const ADDITIONAL_CONDITIONS = {
  label: 'Дополнительные обязанности',
  label2: 'Анкета СБ',
  labelDescription: 'Выберите категорию, чтобы добавить доп.информацию',
  additional: 'Добавить дополнительные условия',
  multiTitle: 'Дополнительные обязанности',
  multiPlaceholder: 'Выберите доп.обязанности рекрутера',
  selectTitle: 'Анкета службы безопасности',
  selectPlaceholder: 'Выберите вариант',
};

export const RESULT_TITLE = {
  vacancyName: JOB_DESCRIPTION.inputTitle,
  industry: JOB_DESCRIPTION.multiTitle,
  additionalInfoResult: 'Дополнительная информация',
  responsibilitiesResult: EMPLOYEE_RESPONSIBILITIES.inputTitle,
  skills: EMPLOYEE_REQUIREMENT.multiTitle2,
  experience: EMPLOYEE_REQUIREMENT.selectTitle,
  education: EMPLOYEE_REQUIREMENT.selectTitle2,
  additionalResponsibilitiesResult: ADDITIONAL_CONDITIONS.multiTitle,
  type: EMPLOYEE_REQUIREMENT.multiTitle,
  salaryMin: 'Зарплата минимум',
  salaryMax: 'Зарплата максимум',
  format: WORKING_CONDITIONS.selectTitle,
  workFormat: WORKING_CONDITIONS.multiTitle,
  additionalRequirementsResult: 'Дополнительные требования',
  medical: WORKING_CONDITIONS.selectTitle2,
  bonuses: WORKING_CONDITIONS.multiTitle2,
  additionalWorkConditionsResult: 'Дополнительные условия работы',
  additionalInfo2Result: 'Дополнительная информация',
  location: ADDITIONAL_INFORMATION.selectTitle,
  bannedResult: ADDITIONAL_INFORMATION.label2,
  testResult: ADDITIONAL_INFORMATION.selectTitle2,
  compensation: 'Вознаграждение за сотрудника',
  costForSpeed: 'Доплата за срочность',
  dateForFirstResume: 'Желаемая дата получения первых резюме',
  dateForWork: 'Желаемая дата выхода сотрудника на работу',
  recruitCount: 'Кол-во рекрутеров',
  recruitType: 'Тип исполнителя',
  experienceForRecruiter: 'Опыт рекрутерской деятельности',
  interviews: 'Предварительные интервью',
  recommendations: 'Запрос рекомендаций с прошлых мест работы',
  securityResult: 'Анкета службы безопасности',
  additionalRecruiterConditionsResult: 'Дополнительные условия к рекрутеру',
  additionalRecruiterRequirementsResult: 'Дополнительные обязанности рекрутера',
  additionalRecruiterOtherInfo: 'Дополнительные условия',
};

export const EXPERIENCE_OPTIONS = [
  { name: 'Не требуется', id: '1' },
  { name: 'От 1 года до 3 лет', id: '2' },
  { name: 'От 3 до 5 лет', id: '3' },
  { name: 'Больше 5 лет', id: '4' },
  { name: 'Не имеет значения', id: '5' },
];

export const EDUCATION_OPTIONS = [
  { name: 'Не требуется', id: '1' },
  { name: 'Среднее', id: '2' },
  { name: 'Среднее специальное', id: '3' },
  { name: 'Высшее', id: '4' },
  { name: 'Не имеет значения', id: '5' },
];

export const TYPE_OPTIONS = [
  { name: 'Полная занятость', id: '1' },
  { name: 'Частичная занятость', id: '2' },
  { name: 'Проектная работа', id: '3' },
  { name: 'Стажировка', id: '4' },
  { name: 'Волонтерство', id: '5' },
];

export const FORMAT_OPTIONS = [
  { name: 'Офис', id: '1' },
  { name: 'Удаленка', id: '2' },
  { name: 'Гибрид', id: '3' },
];

export const WORK_FORMAT_OPTIONS = [
  { name: 'Оформление по ТК РФ', id: '1' },
  { name: 'Трудовой договор', id: '2' },
  { name: 'ГПХ', id: '3' },
  { name: 'ИП', id: '4' },
  { name: 'Самозанятость', id: '5' },
];

export const MEDICAL_OPTIONS = [
  { name: 'Да', id: '1' },
  { name: 'Нет', id: '2' },
];

export const BONUSES_OPTIONS = [
  { name: 'Квартальные и/или годовые премии', id: '1' },
  { name: 'Разовые премии', id: '2' },
  { name: 'Обучение на курсах за счет компании', id: '3' },
  { name: 'Компенсация питания', id: '4' },
  { name: 'Скидки в магазинах-партнерах', id: '5' },
  { name: 'Оплата сессий с психологом', id: '6' },
];

export const LOCATION_OPTIONS = [
  { name: 'Москва', id: '1' },
  { name: 'Санкт-Петербург', id: '2' },
  { name: 'Екатеринбург', id: '3' },
  { name: 'Новосибирск', id: '4' },
  { name: 'Казань', id: '5' },
  { name: 'Самара', id: '6' },
  { name: 'Краснодар', id: '7' },
  { name: 'Красноярск', id: '8' },
  { name: 'Челябинск', id: '9' },
  { name: 'Омск', id: '10' },
  { name: 'Владивосток', id: '11' },
  { name: 'Волгоград', id: '12' },
  { name: 'Саратов', id: '13' },
  { name: 'Ростов-на-Дону', id: '14' },
];

export const TEST_TASK_OPTIONS = [
  { name: 'Да', id: '1' },
  { name: 'Нет', id: '2' },
];

export const RECRUIT_COUNT_OPTIONS = [
  { name: '1', id: '1' },
  { name: '2', id: '2' },
  { name: '3', id: '3' },
];

export const RECRUIT_TYPE_OPTIONS = [
  { name: 'Юр.лица, ИП и самозанятые', id: '1' },
  { name: 'Физ. лица', id: '2' },
];

export const EXPERIENCE_FOR_RECRUITER_OPTIONS = [
  { name: 'Не требуется', id: '1' },
  { name: 'От 1 года до 3 лет', id: '2' },
  { name: 'От 3 до 5 лет', id: '3' },
  { name: 'Больше 5 лет', id: '4' },
  { name: 'Не имеет значения', id: '5' },
];

export const ADDITIONAL_RECRUITER_INFO_OPTIONS = [
  { name: 'Поиск и предоставление релевантных резюме', id: '1' },
  { name: 'Организация собеседований с заказчиком', id: '2' },
  { name: 'Запрос рекомендаций с прошлых мест работы', id: '3' },
  { name: 'Отправка финалисту пришлашения на работу', id: '4' },
];

export const SECURITY_OPTIONS = [
  { name: 'Да', id: '1' },
  { name: 'Нет', id: '2' },
];

export const INITIAL_DATE = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
export const INITIAL_DATE_STR = INITIAL_DATE.toLocaleString().split(',')[0];
