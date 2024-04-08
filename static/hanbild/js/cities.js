var cities = [
    'м. Дніпро',
    'м. Харків',
    'м. Київ',
    'м. Одеса',
    'м. Львів',
    'м. Луцьк',
    'м. Полтава',
    'м. Кривий Ріг',
    'м. Запоріжжя',
    'м. Кам’янське',
    'м. Євпаторія',
    'м. Єнакієве',
    'м. Ізмаїл',
    'м. Ізюм',
    'м. Ізяслав',
    'м. Іллінці',
    'м. Іловайськ',
    'м. Інкерман',
    'м. Ірміно',
    'м. Ірпінь',
    'м. Іршава',
    'м. Ічня',
    'м. Авдіївка',
    'м. Алмазна',
    'м. Алупка',
    'м. Алушта',
    'м. Алчевськ',
    'м. Амвросіївка',
    'м. Ананьїв',
    'м. Андрушівка',
    'м. Антрацит',
    'м. Апостолове',
    'м. Армянськ',
    'м. Арциз',
    'м. Балаклія',
    'м. Балта',
    'м. Бар',
    'м. Баранівка',
    'м. Барвінкове',
    'м. Батурин',
    'м. Бахмач',
    'м. Бахмут',
    'м. Бахчисарай',
    'м. Баштанка',
    'м. Белз',
    'м. Бердичів',
    'м. Бердянськ',
    'м. Берегове',
    'м. Бережани',
    'м. Березань',
    'м. Березне',
    'м. Березівка',
    'м. Берестечко',
    'м. Берислав',
    'м. Бершадь',
    'м. Благовіщенське',
    'м. Бобринець',
    'м. Бобровиця',
    'м. Богодухів',
    'м. Богуслав',
    'м. Боково-Хрустальне',
    'м. Болград',
    'м. Болехів',
    'м. Борзна',
    'м. Борислав',
    'м. Бориспіль',
    'м. Борщів',
    'м. Боярка',
    'м. Бровари',
    'м. Броди',
    'м. Брянка',
    'м. Бунге',
    'м. Буринь',
    'м. Бурштин',
    'м. Буськ',
    'м. Буча',
    'м. Бучач',
    'м. Бібрка',
    'м. Біла Церква',
    'м. Білгород-Дністровський',
    'м. Білицьке',
    'м. Білогірськ',
    'м. Білозерське',
    'м. Білопілля',
    'м. Біляївка',
    'м. Валки',
    'м. Вараш',
    'м. Васильків',
    'м. Василівка',
    'м. Ватутіне',
    'м. Вашківці',
    'м. Великі Мости',
    'м. Верхньодніпровськ',
    'м. Верхівцеве',
    'м. Вижниця',
    'м. Вилкове',
    'м. Винники',
    'м. Виноградів',
    'м. Вишгород',
    'м. Вишневе',
    'м. Вовчанськ',
    'м. Вознесенськ',
    'м. Вознесенівка',
    'м. Волноваха',
    'м. Володимир-Волинський',
    'м. Волочиськ',
    'м. Ворожба',
    'м. Вуглегірськ',
    'м. Вугледар',
    'м. Вільногірськ',
    'м. Вільнянськ',
    'м. Вінниця',
    'м. Гадяч',
    'м. Гайворон',
    'м. Гайсин',
    'м. Галич',
    'м. Генічеськ',
    'м. Герца',
    'м. Глиняни',
    'м. Глобине',
    'м. Глухів',
    'м. Гнівань',
    'м. Гола Пристань',
    'м. Голубівка',
    'м. Горлівка',
    'м. Городенка',
    'м. Городище',
    'м. Городня',
    'м. Городок',
    'м. Городок',
    'м. Горохів',
    'м. Горішні Плавні',
    'м. Гребінка',
    'м. Гуляйполе',
    'м. Гірник',
    'м. Гірське',
    'м. Дебальцеве',
    'м. Деражня',
    'м. Дергачі',
    'м. Джанкой',
    'м. Дніпрорудне',
    'м. Добромиль',
    'м. Добропілля',
    'м. Довжанськ',
    'м. Докучаєвськ',
    'м. Долина',
    'м. Долинська',
    'м. Донецьк',
    'м. Дрогобич',
    'м. Дружба',
    'м. Дружківка',
    'м. Дубляни',
    'м. Дубно',
    'м. Дубровиця',
    'м. Дунаївці',
    'м. Енергодар',
    'м. Жашків',
    'м. Жданівка',
    'м. Жидачів',
    'м. Житомир',
    'м. Жмеринка',
    'м. Жовква',
    'м. Жовті Води',
    'м. Заводське',
    'м. Залізне',
    'м. Заліщики',
    'м. Заставна',
    'м. Збараж',
    'м. Зборів',
    'м. Звенигородка',
    'м. Здолбунів',
    'м. Зеленодольськ',
    'м. Зимогір’я',
    'м. Зміїв',
    'м. Знам’янка',
    'м. Золоте',
    'м. Золотоноша',
    'м. Золочів',
    'м. Зоринськ',
    'м. Зугрес',
    'м. Зіньків',
    'м. Кагарлик',
    'м. Кадіївка',
    'м. Калинівка',
    'м. Калуш',
    'м. Кальміуське',
    'м. Камінь-Каширський',
    'м. Кам’янець-Подільський',
    'м. Кам’янка',
    'м. Кам’янка-Бузька',
    'м. Кам’янка-Дніпровська',
    'м. Канів',
    'м. Карлівка',
    'м. Каховка',
    'м. Керч',
    'м. Кипуче',
    'м. Кобеляки',
    'м. Ковель',
    'м. Кодима',
    'м. Козятин',
    'м. Коломия',
    'м. Комарно',
    'м. Конотоп',
    'м. Копичинці',
    'м. Корець',
    'м. Коростень',
    'м. Коростишів',
    'м. Корсунь-Шевченківський',
    'м. Корюківка',
    'м. Костопіль',
    'м. Костянтинівка',
    'м. Косів',
    'м. Краматорськ',
    'м. Красилів',
    'м. Красногорівка',
    'м. Красноград',
    'м. Кременець',
    'м. Кременчук',
    'м. Кремінна',
    'м. Кролевець',
    'м. Кропивницький',
    'м. Куп’янськ',
    'м. Курахове',
    'м. Ківерці',
    'м. Кілія',
    'м. Кіцмань',
    'м. Ладижин',
    'м. Ланівці',
    'м. Лебедин',
    'м. Лиман',
    'м. Липовець',
    'м. Лисичанськ',
    'м. Лозова',
    'м. Лохвиця',
    'м. Лубни',
    'м. Луганськ',
    'м. Лутугине',
    'м. Любомль',
    'м. Люботин',
    'м. Макіївка',
    'м. Мала Виска',
    'м. Малин',
    'м. Марганець',
    'м. Маріуполь',
    'м. Мар’їнка',
    'м. Мелітополь',
    'м. Мена',
    'м. Мерефа',
    'м. Миколаїв',
    'м. Миколаїв',
    'м. Миколаївка',
    'м. Миргород',
    'м. Мирноград',
    'м. Миронівка',
    'м. Могилів-Подільський',
    'м. Молодогвардійськ',
    'м. Молочанськ',
    'м. Монастириська',
    'м. Монастирище',
    'м. Моршин',
    'м. Моспине',
    'м. Мостиська',
    'м. Мукачево',
    'м. Міусинськ',
    'м. Надвірна',
    'м. Немирів',
    'м. Нетішин',
    'м. Нова Каховка',
    'м. Нова Одеса',
    'м. Новгород-Сіверський',
    'м. Новий Буг',
    'м. Новий Калинів',
    'м. Новий Розділ',
    'м. Новоазовськ',
    'м. Нововолинськ',
    'м. Новоград-Волинський',
    'м. Новогродівка',
    'м. Новодністровськ',
    'м. Новодружеськ',
    'м. Новомиргород',
    'м. Новомосковськ',
    'м. Новоселиця',
    'м. Новоукраїнка',
    'м. Новояворівськ',
    'м. Носівка',
    'м. Ніжин',
    'м. Нікополь',
    'м. Обухів',
    'м. Овруч',
    'м. Олевськ',
    'м. Олександрівськ',
    'м. Олександрія',
    'м. Олешки',
    'м. Оріхів',
    'м. Остер',
    'м. Острог',
    'м. Охтирка',
    'м. Очаків',
    'м. Павлоград',
    'м. Первомайськ',
    'м. Первомайськ',
    'м. Первомайський',
    'м. Перевальськ',
    'м. Перемишляни',
    'м. Перечин',
    'м. Перещепине',
    'м. Переяслав',
    'м. Першотравенськ',
    'м. Петрово-Красносілля',
    'м. Пирятин',
    'м. Погребище',
    'м. Подільськ',
    'м. Покров',
    'м. Покровськ',
    'м. Пологи',
    'м. Полонне',
    'м. Полтава',
    'м. Помічна',
    'м. Попасна',
    'м. Почаїв',
    'м. Привілля',
    'м. Прилуки',
    'м. Приморськ',
    'м. Прип’ять',
    'м. Пустомити',
    'м. Путивль',
    'м. Південне',
    'м. Підгайці',
    'м. Підгородне',
    'м. П’ятихатки',
    'м. Рава-Руська',
    'м. Радехів',
    'м. Радивилів',
    'м. Радомишль',
    'м. Рахів',
    'м. Рені',
    'м. Решетилівка',
    'м. Ржищів',
    'м. Ровеньки',
    'м. Рогатин',
    'м. Родинське',
    'м. Рожище',
    'м. Роздільна',
    'м. Ромни',
    'м. Рубіжне',
    'м. Рудки',
    'м. Рівне',
    'м. Саки',
    'м. Самбір',
    'м. Сарни',
    'м. Свалява',
    'м. Сватове',
    'м. Святогірськ',
    'м. Світловодськ',
    'м. Світлодарськ',
    'м. Севастополь',
    'м. Селидове',
    'м. Семенівка',
    'м. Середина-Буда',
    'м. Синельникове',
    'м. Скадовськ',
    'м. Скалат',
    'м. Сквира',
    'м. Сколе',
    'м. Славута',
    'м. Славутич',
    'м. Слов’янськ',
    'м. Сміла',
    'м. Сновськ',
    'м. Снятин',
    'м. Снігурівка',
    'м. Сніжне',
    'м. Сокаль',
    'м. Сокиряни',
    'м. Соледар',
    'м. Сорокине',
    'м. Соснівка',
    'м. Старий Крим',
    'м. Старий Самбір',
    'м. Старобільськ',
    'м. Старокостянтинів',
    'м. Стебник',
    'м. Сторожинець',
    'м. Стрий',
    'м. Судак',
    'м. Судова Вишня',
    'м. Суми',
    'м. Суходільськ',
    'м. Сєвєродонецьк',
    'м. Сіверськ',
    'м. Сімферополь',
    'м. Таврійськ',
    'м. Тальне',
    'м. Тараща',
    'м. Татарбунари',
    'м. Теплодар',
    'м. Теребовля',
    'м. Тернопіль',
    'м. Тернівка',
    'м. Тетіїв',
    'м. Тисмениця',
    'м. Тлумач',
    'м. Токмак',
    'м. Торецьк',
    'м. Тростянець',
    'м. Трускавець',
    'м. Тульчин',
    'м. Турка',
    'м. Тячів',
    'м. Угнів',
    'м. Ужгород',
    'м. Узин',
    'м. Українка',
    'м. Українськ',
    'м. Умань',
    'м. Устилуг',
    'м. Фастів',
    'м. Феодосія',
    'м. Харцизьк',
    'м. Херсон',
    'м. Хирів',
    'м. Хмельницький',
    'м. Хмільник',
    'м. Ходорів',
    'м. Хорол',
    'м. Хоростків',
    'м. Хотин',
    'м. Хрестівка',
    'м. Христинівка',
    'м. Хрустальний',
    'м. Хуст',
    'м. Часів Яр',
    'м. Червоноград',
    'м. Черкаси',
    'м. Чернівці',
    'м. Чернігів',
    'м. Чигирин',
    'м. Чистякове',
    'м. Чоп',
    'м. Чорнобиль',
    'м. Чорноморськ',
    'м. Чортків',
    'м. Чугуїв',
    'м. Чуднів',
    'м. Шаргород',
    'м. Шахтарськ',
    'м. Шепетівка',
    'м. Шостка',
    'м. Шпола',
    'м. Шумськ',
    'м. Щастя',
    'м. Щолкіне',
    'м. Южне',
    'м. Южноукраїнськ',
    'м. Яворів',
    'м. Яготин',
    'м. Ялта',
    'м. Ямпіль',
    'м. Яни Капу',
    'м. Яремче',
    'м. Ясинувата',
    'смт Єди-Кую',
    'смт Єзупіль',
    'смт Єланець',
    'смт Єлизаветградка',
    'смт Ємільчине',
    'смт Єрки',
    'смт Єсаулівка',
    'смт Іваничі',
    'смт Іванків',
    'смт Івано-Франкове',
    'смт Іванопіль',
    'смт Іванівка',
    'смт Іванівка',
    'смт Іванівка',
    'смт Іванівське',
    'смт Ізварине',
    'смт Іларіонове',
    'смт Іллінка',
    'смт Ірдинь',
    'смт Іршанськ',
    'смт Іслям-Терек',
    'смт Ічкі',
    'смт Авангард',
    'смт Авіаторське',
    'смт Аграрне',
    'смт Аерофлотський',
    'смт Азовське',
    'смт Албат',
    'смт Андріївка',
    'смт Андріївка',
    'смт Андріївка',
    'смт Андріївка',
    'смт Андріївка',
    'смт Антонівка',
    'смт Антоніни',
    'смт Арбузинка',
    'смт Архангельське',
    'смт Асканія-Нова',
    'смт Аули',
    'смт Бабанка',
    'смт Бабаї',
    'смт Бабинці',
    'смт Багерове',
    'смт Базалія',
    'смт Байрачки',
    'смт Бакачик-Кият',
    'смт Балабине',
    'смт Балахівка',
    'смт Баришівка',
    'смт Батьово',
    'смт Безлюдівка',
    'смт Берегове',
    'смт Берегомет',
    'смт Березанка',
    'смт Березине',
    'смт Березна',
    'смт Березнегувате',
    'смт Березівка',
    'смт Биківка',
    'смт Билбасівка',
    'смт Битків',
    'смт Благодатне',
    'смт Благодатне',
    'смт Благодатне',
    'смт Близнюки',
    'смт Богородчани',
    'смт Божедарівка',
    'смт Бойківське',
    'смт Боково-Платове',
    'смт Бориня',
    'смт Борова',
    'смт Борова',
    'смт Бородянка',
    'смт Бородіно',
    'смт Борівське',
    'смт Бражине',
    'смт Братське',
    'смт Брацлав',
    'смт Браїлів',
    'смт Брилівка',
    'смт Бродецьке',
    'смт Брошнів-Осада',
    'смт Брусилів',
    'смт Брюховичі',
    'смт Бугаївка',
    'смт Буди',
    'смт Букачівці',
    'смт Буки',
    'смт Булавинське',
    'смт Буран',
    'смт Бучмани',
    'смт Буштино',
    'смт Біла Криниця',
    'смт Біла Криниця',
    'смт Біле',
    'смт Біленьке',
    'смт Білий Колодязь',
    'смт Білики',
    'смт Біловодськ',
    'смт Білогорівка',
    'смт Білогір’я',
    'смт Білозерка',
    'смт Білокуракине',
    'смт Білолуцьк',
    'смт Білоріченський',
    'смт Більмак',
    'смт Більшівці',
    'смт Бірки',
    'смт Біюк-Онлар',
    'смт Вакуленчук',
    'смт Вальянівське',
    'смт Вапнярка',
    'смт Варва',
    'смт Васильківка',
    'смт Васищеве',
    'смт Введенка',
    'смт Ведмеже',
    'смт Велика Багачка',
    'смт Велика Березовиця',
    'смт Велика Димерка',
    'смт Велика Лепетиха',
    'смт Велика Михайлівка',
    'смт Велика Новосілка',
    'смт Велика Олександрівка',
    'смт Велика Писарівка',
    'смт Велике Оріхове',
    'смт Великий Березний',
    'смт Великий Бичків',
    'смт Великий Бурлук',
    'смт Великий Лог',
    'смт Великий Любінь',
    'смт Великодолинське',
    'смт Великокам’янка',
    'смт Великі Бірки',
    'смт Великі Коровинці',
    'смт Вендичани',
    'смт Вергулівка',
    'смт Верхньоторецьке',
    'смт Верхнячка',
    'смт Верхнє Синьовидне',
    'смт Верхній Нагольчик',
    'смт Верхній Рогачик',
    'смт Верховина',
    'смт Веселе',
    'смт Веселинове',
    'смт Вигода',
    'смт Вилок',
    'смт Виноградне',
    'смт Високе',
    'смт Високий',
    'смт Високопілля',
    'смт Вишково',
    'смт Вишневе',
    'смт Вишневе',
    'смт Вишнівець',
    'смт Власівка',
    'смт Вовковинці',
    'смт Вовчоярівка',
    'смт Водянське',
    'смт Войнилів',
    'смт Воловець',
    'смт Володарка',
    'смт Володимирець',
    'смт Володимирівка',
    'смт Ворзель',
    'смт Воронове',
    'смт Вороновиця',
    'смт Вороніж',
    'смт Ворохта',
    'смт Воскресенське',
    'смт Восход',
    'смт Врадіївка',
    'смт Врубівка',
    'смт Врубівський',
    'смт Вугляр',
    'смт Відрадне',
    'смт Війтівці',
    'смт Вільне',
    'смт Вільхівка',
    'смт Вільча',
    'смт Вільшана',
    'смт Вільшани',
    'смт Вільшанка',
    'смт Віньківці',
    'смт Ганнівка',
    'смт Гаспра',
    'смт Гвардійське',
    'смт Гвардійське',
    'смт Гвіздець',
    'смт Георгіївка',
    'смт Глеваха',
    'смт Глибока',
    'смт Глибокий',
    'смт Глухівці',
    'смт Гніздичів',
    'смт Гоголеве',
    'смт Голоби',
    'смт Голованівськ',
    'смт Головине',
    'смт Головне',
    'смт Голуба Затока',
    'смт Гольмівський',
    'смт Гончарівське',
    'смт Горбачево-Михайлівка',
    'смт Горностаївка',
    'смт Городище',
    'смт Городниця',
    'смт Городок',
    'смт Гостомель',
    'смт Гостре',
    'смт Гоща',
    'смт Градизьк',
    'смт Гранітне',
    'смт Графське',
    'смт Гребінки',
    'смт Гресівський',
    'смт Гримайлів',
    'смт Гриців',
    'смт Гришківці',
    'смт Гродівка',
    'смт Грузько-Зорянське',
    'смт Грузько-Ломівка',
    'смт Грушове',
    'смт Губиниха',
    'смт Гуйва',
    'смт Гурзуф',
    'смт Гусельське',
    'смт Гусятин',
    'смт Гути',
    'смт Гірне',
    'смт Гірне',
    'смт Гірник',
    'смт Гірник',
    'смт Гірницьке',
    'смт Гірницьке',
    'смт Дашава',
    'смт Дашів',
    'смт Дворічна',
    'смт Делятин',
    'смт Демидівка',
    'смт Демурине',
    'смт Десна',
    'смт Десна',
    'смт Диканька',
    'смт Димер',
    'смт Дмитрівка',
    'смт Дніпровське',
    'смт Дніпряни',
    'смт Добровеличківка',
    'смт Доброслав',
    'смт Добротвір',
    'смт Добрянка',
    'смт Довбиш',
    'смт Долосси',
    'смт Доманівка',
    'смт Донець',
    'смт Донецьке',
    'смт Донецький',
    'смт Донське',
    'смт Дослідницьке',
    'смт Драбів',
    'смт Дробишеве',
    'смт Дружба',
    'смт Дружба',
    'смт Дружба',
    'смт Дружне',
    'смт Дубище',
    'смт Дубляни',
    'смт Дубове',
    'смт Дубове',
    'смт Дубов’язівка',
    'смт Дубівський',
    'смт Дунаївці',
    'смт Діброва',
    'смт Дігтярі',
    'смт Есмань',
    'смт Есхар',
    'смт Жвирка',
    'смт Жденієво',
    'смт Желанне',
    'смт Журавно',
    'смт Заболоття',
    'смт Заболотів',
    'смт Завалля',
    'смт Заводське',
    'смт Зайцеве',
    'смт Закупне',
    'смт Залізничне',
    'смт Залізничне',
    'смт Залізничне',
    'смт Залізці',
    'смт Залісне',
    'смт Замглай',
    'смт Заозерне',
    'смт Запитів',
    'смт Запоріжжя',
    'смт Зарічне',
    'смт Зарічне',
    'смт Затишшя',
    'смт Затока',
    'смт Захарівка',
    'смт Зачепилівка',
    'смт Згурівка',
    'смт Зеленогірське',
    'смт Зеленівка',
    'смт Землянки',
    'смт Знам’янка Друга',
    'смт Зноб-Новгородське',
    'смт Золотий Потік',
    'смт Золочів',
    'смт Зуя',
    'смт Зуївка',
    'смт Зідьки',
    'смт Казанка',
    'смт Кайгадор',
    'смт Каланчак',
    'смт Калинове',
    'смт Калинівка',
    'смт Калинівка',
    'смт Калинівське',
    'смт Калита',
    'смт Кам’яне',
    'смт Кам’яне',
    'смт Кам’яний Брід',
    'смт Капітанівка',
    'смт Карнаухівка',
    'смт Картушине',
    'смт Кар’єрне',
    'смт Катеринопіль',
    'смт Катеринівка',
    'смт Кацівелі',
    'смт Кача',
    'смт Квасилів',
    'смт Кегичівка',
    'смт Кельменці',
    'смт Керамік',
    'смт Кириківка',
    'смт Кирилівка',
    'смт Кирнасівка',
    'смт Клавдієво-Тарасове',
    'смт Клевань',
    'смт Кленовий',
    'смт Клесів',
    'смт Княгинівка',
    'смт Кобилецька Поляна',
    'смт Ков’яги',
    'смт Кодра',
    'смт Кожанка',
    'смт Козацьке',
    'смт Козача Лопань',
    'смт Козелець',
    'смт Козельщина',
    'смт Козин',
    'смт Козлів',
    'смт Козова',
    'смт Коктебель',
    'смт Колки',
    'смт Коломак',
    'смт Колосникове',
    'смт Кольчино',
    'смт Комиш-Зоря',
    'смт Комишани',
    'смт Комишня',
    'смт Комишуваха',
    'смт Комишуваха',
    'смт Комишуваха',
    'смт Комишівка',
    'смт Компаніївка',
    'смт Комісарівка',
    'смт Контарне',
    'смт Копайгород',
    'смт Копані',
    'смт Кореїз',
    'смт Корнин',
    'смт Королево',
    'смт Короп',
    'смт Коропець',
    'смт Коротич',
    'смт Корсунь',
    'смт Кострижівка',
    'смт Костянтинівка',
    'смт Костянтинівка',
    'смт Котельва',
    'смт Коцюбинське',
    'смт Кочеток',
    'смт Краковець',
    'смт Красна Гора',
    'смт Красне',
    'смт Красний Кут',
    'смт Краснодарський',
    'смт Краснокам’янка',
    'смт Краснокутськ',
    'смт Краснопавлівка',
    'смт Краснопілля',
    'смт Красноріченське',
    'смт Красноторка',
    'смт Красноїльськ',
    'смт Красятичі',
    'смт Криве Озеро',
    'смт Крижопіль',
    'смт Криничанське',
    'смт Кринички',
    'смт Кринична',
    'смт Криничне',
    'смт Кріпенський',
    'смт Куликів',
    'смт Куликівка',
    'смт Кулиничі',
    'смт Кундрюче',
    'смт Куп’янськ-Вузловий',
    'смт Курахівка',
    'смт Курдюмівка',
    'смт Курилівка',
    'смт Курман',
    'смт Курортне',
    'смт Курпати',
    'смт Кутейникове',
    'смт Кути',
    'смт Кушугум',
    'смт Ківшарівка',
    'смт Ладан',
    'смт Лазурне',
    'смт Ланчин',
    'смт Ларине',
    'смт Летичів',
    'смт Лиманське',
    'смт Лиманчук',
    'смт Линовиця',
    'смт Липова Долина',
    'смт Липське',
    'смт Лисець',
    'смт Лисянка',
    'смт Лихівка',
    'смт Лозно-Олександрівка',
    'смт Лозове',
    'смт Лозівський',
    'смт Локачі',
    'смт Ломуватка',
    'смт Лопатин',
    'смт Лосинівка',
    'смт Луганське',
    'смт Лугини',
    'смт Лужани',
    'смт Луків',
    'смт Любар',
    'смт Любашівка',
    'смт Любеч',
    'смт Любешів',
    'смт Любимівка',
    'смт Любимівка',
    'смт Люблинець',
    'смт Лівадія',
    'смт Лісне',
    'смт Лісове',
    'смт Літин',
    'смт Магдалинівка',
    'смт Магерів',
    'смт Макарів',
    'смт Макошине',
    'смт Мала Данилівка',
    'смт Мала Дівиця',
    'смт Малинівка',
    'смт Малокатеринівка',
    'смт Маломиколаївка',
    'смт Малорязанцеве',
    'смт Малотаранівка',
    'смт Мангуш',
    'смт Маневичі',
    'смт Манченки',
    'смт Маньківка',
    'смт Марківка',
    'смт Марія',
    'смт Мар’янівка',
    'смт Мар’янівка',
    'смт Мар’ївка',
    'смт Масандра',
    'смт Машівка',
    'смт Маяк',
    'смт Меденичі',
    'смт Меджибіж',
    'смт Межова',
    'смт Межове',
    'смт Мельниця-Подільська',
    'смт Меліоративне',
    'смт Метьолкіне',
    'смт Миколаївка',
    'смт Миколаївка',
    'смт Миколаївка',
    'смт Миколаївка',
    'смт Миколаївка',
    'смт Микулинці',
    'смт Мирна Долина',
    'смт Мирне',
    'смт Мирне',
    'смт Мирне',
    'смт Мирне',
    'смт Мирний',
    'смт Миролюбів',
    'смт Миронівський',
    'смт Миропіль',
    'смт Михайло-Коцюбинське',
    'смт Михайлівка',
    'смт Михайлівка',
    'смт Михайлівка',
    'смт Млинів',
    'смт Молодіжне',
    'смт Молодіжне',
    'смт Московське',
    'смт Муровані Курилівці',
    'смт Міжгір’я',
    'смт Мізоч',
    'смт Мілове',
    'смт Нагольно-Тарасівка',
    'смт Наддніпрянське',
    'смт Наркевичі',
    'смт Народичі',
    'смт Научний',
    'смт Недригайлів',
    'смт Неліпівка',
    'смт Немирів',
    'смт Немішаєве',
    'смт Неполоківці',
    'смт Нижанковичі',
    'смт Нижньогірський',
    'смт Нижня Дуванка',
    'смт Нижня Кринка',
    'смт Нижнє',
    'смт Нижні Сірогози',
    'смт Нижній Нагольчик',
    'смт Низи',
    'смт Никифорове',
    'смт Нова Борова',
    'смт Нова Водолага',
    'смт Нова Галещина',
    'смт Нова Маячка',
    'смт Нова Прага',
    'смт Нова Ушиця',
    'смт Новгородка',
    'смт Новгородське',
    'смт Нове',
    'смт Новий Світ',
    'смт Новий Світ',
    'смт Новий Яричів',
    'смт Новоайдар',
    'смт Новоамвросіївське',
    'смт Новоархангельськ',
    'смт Нововасилівка',
    'смт Нововоронцовка',
    'смт Новогригорівка',
    'смт Новогуйвинське',
    'смт Новодар’ївка',
    'смт Новодонецьке',
    'смт Новоекономічне',
    'смт Новомиколаївка',
    'смт Новомиколаївка',
    'смт Новомиколаївка',
    'смт Новоозерне',
    'смт Новоозерянка',
    'смт Новоолександрівка',
    'смт Новоолексіївка',
    'смт Новооржицьке',
    'смт Новопокровка',
    'смт Новопокровка',
    'смт Новопсков',
    'смт Новосвітлівка',
    'смт Новоселівка',
    'смт Новоселівське',
    'смт Новотошківське',
    'смт Новотроїцьке',
    'смт Новотроїцьке',
    'смт Новофедорівка ',
    'смт Нові Білокоровичі',
    'смт Нові Білярі',
    'смт Нові Санжари',
    'смт Нові Стрілища',
    'смт Нікольське',
    'смт Нікіта',
    'смт Обертин',
    'смт Обухівка',
    'смт Овідіополь',
    'смт Озерне',
    'смт Окни',
    'смт Олександрівка',
    'смт Олександрівка',
    'смт Олександрівка',
    'смт Олександрівка',
    'смт Олександрівка',
    'смт Олександрівка',
    'смт Олександрівське',
    'смт Олександрійське',
    'смт Олексієво-Дружківка',
    'смт Оленівка',
    'смт Оленівка',
    'смт Олесько',
    'смт Олика',
    'смт Олишівка',
    'смт Ольгинка',
    'смт Ольховатка',
    'смт Ольшанське',
    'смт Онуфріївка',
    'смт Опішня',
    'смт Оратів',
    'смт Ореанда',
    'смт Оржиця',
    'смт Оржів',
    'смт Орілька',
    'смт Отинія',
    'смт Очеретине',
    'смт Павлиш',
    'смт Павлівка',
    'смт Пантаївка',
    'смт Пантелеймонівка',
    'смт Панютине',
    'смт Парафіївка',
    'смт Паркове',
    'смт Партеніт',
    'смт Пелагіївка',
    'смт Первомайське',
    'смт Первомайське',
    'смт Первомайське',
    'смт Первомайський',
    'смт Перегінське',
    'смт Пересічне',
    'смт Першотравенськ',
    'смт Першотравневе',
    'смт Петриківка',
    'смт Петрове',
    'смт Петропавлівка',
    'смт Петропавлівка',
    'смт Петрівка',
    'смт Петрівка',
    'смт Печеніги',
    'смт Печеніжин',
    'смт Письменне',
    'смт Побузьке',
    'смт Побєда',
    'смт Покотилівка',
    'смт Покровка',
    'смт Покровське',
    'смт Полянка',
    'смт Поморяни',
    'смт Понизівка',
    'смт Понорниця',
    'смт Понінка',
    'смт Попільня',
    'смт Поштове',
    'смт Приазовське',
    'смт Прибережне',
    'смт Приколотне',
    'смт Приморський',
    'смт Пришиб',
    'смт Приютівка',
    'смт Просяна',
    'смт Прудянка',
    'смт Пулини',
    'смт Путила',
    'смт Південне',
    'смт Північне',
    'смт Підбуж',
    'смт Підволочиськ',
    'смт Підгородна',
    'смт Підкамінь',
    'смт Пісківка',
    'смт Пісочин',
    'смт Піщанка',
    'смт П’ятипілля',
    'смт Радуль',
    'смт Радушне',
    'смт Радісне',
    'смт Райгородок',
    'смт Райське',
    'смт Ратне',
    'смт Раухівка',
    'смт Рафалівка',
    'смт Рикове',
    'смт Рогань',
    'смт Родакове',
    'смт Рожнятів',
    'смт Роздольне',
    'смт Роздори',
    'смт Розділ',
    'смт Розсипне',
    'смт Розівка',
    'смт Рокині',
    'смт Рокитне',
    'смт Рокитне',
    'смт Романів',
    'смт Ромодан',
    'смт Рудне',
    'смт Рудниця',
    'смт Ружин',
    'смт Ріпки',
    'смт Савинці',
    'смт Саврань',
    'смт Сад',
    'смт Садово-Хрустальненський',
    'смт Салькове',
    'смт Санаторне',
    'смт Сарата',
    'смт Сартана',
    'смт Сатанів',
    'смт Сахновщина',
    'смт Свеса',
    'смт Святогорівка',
    'смт Седнів',
    'смт Селезнівка',
    'смт Семенівка',
    'смт Сенкевичівка',
    'смт Сентянівка',
    'смт Сергіївка',
    'смт Сердите',
    'смт Середнє',
    'смт Серпневе',
    'смт Сиваське',
    'смт Сиротине',
    'смт Ситківці',
    'смт Скала-Подільська',
    'смт Скороходове',
    'смт Славгород',
    'смт Славське',
    'смт Слатине',
    'смт Слобожанське',
    'смт Слобожанське',
    'смт Слобожанське',
    'смт Слобідка',
    'смт Слов’яносербськ',
    'смт Смига',
    'смт Смоліне',
    'смт Смотрич',
    'смт Солоне',
    'смт Солоницівка',
    'смт Солотвин',
    'смт Солотвино',
    'смт Сосниця',
    'смт Соснове',
    'смт Софіївка',
    'смт Софіївка',
    'смт Софіївка',
    'смт Софіївський',
    'смт Срібне',
    'смт Ставище',
    'смт Станиця Луганська',
    'смт Стара Вижівка',
    'смт Стара Синява',
    'смт Стара Сіль',
    'смт Стара Ушиця',
    'смт Старий Крим',
    'смт Старий Мерчик',
    'смт Старий Салтів',
    'смт Старобешеве',
    'смт Старомихайлівка',
    'смт Стеблів',
    'смт Степань',
    'смт Степанівка',
    'смт Степногірськ',
    'смт Стрижавка',
    'смт Стіжківське',
    'смт Суворове',
    'смт Сутиски',
    'смт Східниця',
    'смт Сєверне',
    'смт Сєверний',
    'смт Сєверо-Гундорівський',
    'смт Сєдове',
    'смт Сімейкине',
    'смт Сімеїз',
    'смт Талаківка',
    'смт Талалаївка',
    'смт Талове',
    'смт Тарутине',
    'смт Тацине',
    'смт Таїрове',
    'смт Теофіполь',
    'смт Тепле',
    'смт Теплик',
    'смт Терезине',
    'смт Тересва',
    'смт Терни',
    'смт Тернувате',
    'смт Тиврів',
    'смт Товсте',
    'смт Токарівка',
    'смт Томаківка',
    'смт Томашгород',
    'смт Томашпіль',
    'смт Торчин',
    'смт Тошківка',
    'смт Тростянець',
    'смт Троїцьке',
    'смт Троїцько-Харцизьк',
    'смт Турбів',
    'смт Турійськ',
    'смт Угроїди',
    'смт Удачне',
    'смт Улянівка',
    'смт Урало-Кавказ',
    'смт Успенка',
    'смт Устинівка',
    'смт Усть-Чорна',
    'смт Утківка',
    'смт Фащівка',
    'смт Фащівка',
    'смт Федорівка',
    'смт Форос',
    'смт Хлібодарське',
    'смт Холми',
    'смт Холодне',
    'смт Хорошеве',
    'смт Хорошів',
    'смт Хотінь',
    'смт Христофорівка',
    'смт Хрустальне',
    'смт Царичанка',
    'смт Цвіткове',
    'смт Цебрикове',
    'смт Центральний',
    'смт Цибулів',
    'смт Цукурине',
    'смт Цумань',
    'смт Чабани',
    'смт Чаплине',
    'смт Чаплинка',
    'смт Челюскінець',
    'смт Чемерівці',
    'смт Червоне',
    'смт Червоногригорівка',
    'смт Черкаське',
    'смт Черкаське',
    'смт Чернелиця',
    'смт Черняхів',
    'смт Чернівці',
    'смт Чернігівка',
    'смт Чечельник',
    'смт Чинадійово',
    'смт Чкаловське',
    'смт Чоповичі',
    'смт Чорний Острів',
    'смт Чорнобай',
    'смт Чорноморське',
    'смт Чорноморське',
    'смт Чорнухи',
    'смт Чорнухине',
    'смт Чортомлик',
    'смт Чупахівка',
    'смт Чутове',
    'смт Шабельківка',
    'смт Шалигине',
    'смт Шарівка',
    'смт Шахтарське',
    'смт Шахтне',
    'смт Шацьк',
    'смт Шевченко',
    'смт Шевченкове',
    'смт Широке',
    'смт Широке',
    'смт Ширяєве',
    'смт Шишаки',
    'смт Шкло',
    'смт Шпиків',
    'смт Штерівка',
    'смт Щебетовка',
    'смт Щербинівка',
    'смт Щирець',
    'смт Щотове',
    'смт Южна Ломуватка',
    'смт Юр’ївка',
    'смт Юр’ївка',
    'смт Яблунець',
    'смт Яблунів',
    'смт Якимівка',
    'смт Ялта',
    'смт Ямпіль',
    'смт Ямпіль',
    'смт Ямпіль',
    'смт Ярмолинці',
    'смт Ярова',
    'смт Ясенівський',
    'смт Ясинівка',
    'смт Ясна Поляна',
    'смт Ясногірка',
    'смт Ясіня',
    'смт Ящикове',
]