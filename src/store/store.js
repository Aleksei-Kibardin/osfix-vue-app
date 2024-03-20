import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      tabs: [
        {
          isActive: false,
          id: "0",
          title: "Холодная штамповка",
          url: "https://downloader.disk.yandex.ru/preview/75bbc8d2692f19f69ba8a990e38d78cdd51ff54cbe90c3afade93c298cd5297f/65fb1738/WzWiVhhiyyXjU4fFNd5s3E7QIo-gQ_BfQgwz-T9RgSgMtD_1Na4lEgJB3lXrcwwUScrouFi8Yp_5rNcCQR3Zeg%3D%3D?uid=0&filename=%D0%A5%D0%BE%D0%BB%D0%BE%D0%B4%D0%BD%D0%B0%D1%8F%20%D0%BB%D0%B8%D1%81%D1%82%D0%BE%D0%B2%D0%B0%D1%8F%20%D1%88%D1%82%D0%B0%D0%BC%D0%BF%D0%BE%D0%B2%D0%BA%D0%B0.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1903x894",
          description:
            "это вид обработки металлов давлением, при котором листовой материал деформируется в холодном или подогретом состоянии. Этот метод позволяет создавать различные детали и компоненты с высокой точностью и повторяемостью.",
        },
        {
          isActive: false,
          id: "1",
          title: "Лазерная резка",
          url: "https://downloader.disk.yandex.ru/preview/d1fdffd243b025ef57c9eb9d8ef4452fab759acc8467f6be4527e48340ed79da/65fb1738/UUAECSdoGi4aPEcWxNltUU7QIo-gQ_BfQgwz-T9RgShfhL2a5Zwjfk8-hu50vdywgLe0_8-Teic7y6IEiYLD0A%3D%3D?uid=0&filename=%D0%9B%D0%B0%D0%B7%D0%B5%D1%80%D0%BD%D0%B0%D1%8F%20%D1%80%D0%B5%D0%B7%D0%BA%D0%B0.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1903x894",
          description:
            "использование лазерного луча для точной и чистой резки различных материалов, включая металлы. Лазерная резка предоставляет возможность создавать сложные формы и контуры, а также выполнять высокоточные операции без необходимости дополнительной обработки.",
        },
        {
          isActive: false,
          id: "2",
          title: "Гибка метала",
          url: "https://downloader.disk.yandex.ru/preview/070ff60c31b657bef2fb4549f4980c4b4738a3c3b25bafc5f2f5adffe6fa279a/65fb1738/NyOAeEA9LvbwhkslWC5qnKArbuUsgqTXRM42oAu3BnMo75-2qt7plDqJTooVZzelg8J-xPfANXtD-lOS5V_Mbw%3D%3D?uid=0&filename=%D0%93%D0%B8%D0%B1%D0%BA%D0%B0.jpeg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1903x894",
          description:
            "создание изгибов и форм в металлических изделиях с помощью специализированного оборудования. Гибка метала позволяет создавать различные изделия стребуемыми геометрическими параметрами, такими как углы, радиусы и длины.",
        },
        {
          isActive: false,
          id: "3",
          title: "Слесарные работы",
          url: "https://downloader.disk.yandex.ru/preview/a0df87c7ac5d90f88113b99d4a8b3a35bed7ff0c51e6d00b24e1dd159adbb469/65fb1738/Vj2J_6OQ-r8ijnJqzfqh-clc9SGyibxXtKcsvpsFyaGJI4bN9vxzOnkZ1_nGRzWPdXf6pZO6zouTUq3T4F64Cg%3D%3D?uid=0&filename=%D0%A1%D0%BB%D0%B5%D1%81%D0%B0%D1%80%D0%BD%D1%8B%D0%B5%20%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1903x894",
          description:
            "ремонт, обслуживание и изготовление деталей и узлов из различных материалов. Слесарные работы включают в себя механическую обработку деталей, сборку и регулировку механизмов, а также проведение различных видов ремонтных работ",
        },
        {
          isActive: false,
          id: "4",
          title: "Изготовление и ремонт фильер",
          url: "https://downloader.disk.yandex.ru/preview/627634919a015e00a6b587671ccc6deda924f769a8baf0f2fb363a5e43324d48/65fb1738/yG0u4L2BtP1LqmVGuacWnFLe6SHG11s4OpztmDZPPke8-uc3pAUOdWC5uPZYrEaS_5I-zjw1JUK5cl7qN8Eoyw%3D%3D?uid=0&filename=%D0%A4%D0%B8%D0%BB%D1%8C%D0%B5%D1%80%D0%B0.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=1903x894",
          description:
            " включает в себя процесс создания и восстановления специальных высокопрочных форм, таких как пластины или колпачки с тарированными отверстиями, расположенными в определенном порядке.",
        },
        {
          isActive: false,
          id: "5",
          title: "Фрезерная гравировка с ЧПУ",
          url: "https://downloader.disk.yandex.ru/preview/f06b40ace5f332a446fc2db8eda7c5b2f326c173e44b523b1b3d2ca32184ebc4/65fb1738/sUrvZ7UR174USWuMu6ORiOSrH1aSPa2YZnrfBrptdoOeW4RSr5AltFuDoHyURtDUHRRq04bO2-M58aiVjZ6EwA%3D%3D?uid=0&filename=%D0%A4%D1%80%D0%B5%D0%B7%D0%B5%D1%80%D0%BD%D0%B0%D1%8F%20%D0%B3%D1%80%D0%B0%D0%B2%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1903x894",
          description:
            "использование компьютерно-управляемого фрезерного станка для создания точных гравировок и вырезания на различных материалах. Этот метод позволяет создавать сложные узоры, тексты и рисунки на поверхностях металла, дерева, пластика и других материалов.",
        },
        {
          isActive: false,
          id: "6",
          title: "https://downloader.disk.yandex.ru/preview/21762130e45577b9e98987d1a095b76d1a9116ac723e77c1c2cd9063ac832f9a/65fb1738/xHMbSoLQFDXpchkpSKeCvlLe6SHG11s4OpztmDZPPkcR2wSLTvwiccla_GO13JXRKWLpHY2T_AeLKDq09-GbWA%3D%3D?uid=0&filename=%D0%A4%D1%80%D0%B5%D0%B7%D0%B5%D0%BD%D1%8B%D0%B5%20%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1903x894",
          url: "./src/assets/Токарные.png",
          description:
            "комбинирование операций токарной и фрезерной обработки для создания сложных деталей и изделий из металла. Токарно-фрезерные работы позволяют выполнять различные операции обработки, такие как нарезание резьбы, создание отверстий, фрезерование контуров и т.д.",
        },
        {
          isActive: false,
          id: "7",
          title: "Виброгальтовка",
          url: "https://downloader.disk.yandex.ru/preview/4599053953087374a8ca5f21849c63c528c664ad43ca66ba71a892f368bfc0b2/65fb1738/TIG_hpEqH8LCkhNKNwBMxVLe6SHG11s4OpztmDZPPkfU0EPVjmv4PphvIyHjeR6_v_9hyCtKJDtK6wTkY7Bu9w%3D%3D?uid=0&filename=%D0%92%D0%B8%D0%B1%D1%80%D0%BE%D0%B3%D0%B0%D0%BB%D1%82%D0%BE%D0%B2%D0%BA%D0%B0.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1903x894",
          description:
            "применение специализированного оборудования для доводки и отделки поверхностей вибрационным методом. Виброгальтовка позволяет удалить остаточные материалы, сгладить поверхность и придать ей требуемую шероховатость.",
        },
        {
          isActive: false,
          id: "8",
          title: "Электроэрозия",
          url: "https://downloader.disk.yandex.ru/preview/0ffb4f19239b42e9248e488d4dd6e402736cc8b8c423e5ddf8d31d521b05a866/65fb1738/wmxgx_J1hUBAQstl1iQKK1Le6SHG11s4OpztmDZPPkc_yyQ0qJ9QVFBedmLuD2GTEbaVWgzbEIbehyaxUlDrDw%3D%3D?uid=0&filename=%D0%AD%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D1%8D%D1%80%D1%80%D0%BE%D0%B7%D0%B8%D1%8F.jpeg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1903x894",
          description:
            " процесс удаления материала с помощью электрической искры между электродом и обрабатываемым предметом. Электроэрозия позволяет выполнить точную и узкую обработку деталей с высокой степенью детализации.",
        },
        {
          isActive: false,
          id: "9",
          title: "Ленточнопильная резка метала",
          url: "https://downloader.disk.yandex.ru/preview/aa2684dec5af3897f75e8fe7f271366f1fa6d7b447d0d272180b78e825c84670/65fb1738/O_O8FgacYMLiLPlf-kTPeU7QIo-gQ_BfQgwz-T9RgSgJT5PkP1AV3Ea_l4BisNMvTE97U6cJ5ECHMWxHdYs-Jw%3D%3D?uid=0&filename=%D0%9B%D0%B5%D0%BD%D1%82%D0%BE%D1%87%D0%BD%D0%BE%D0%BF%D0%B8%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F%20%D1%80%D0%B5%D0%B7%D0%BA%D0%B0%20%D0%BC%D0%B5%D1%82%D0%B0%D0%BB%D0%BB%D0%B0.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1903x894",
          description:
            "использование ленточной пилы для создания прямых или криволинейных резов в металле. Ленточнопильная резка обеспечивает быстрое и точное разделение металлических листов, профилей и труб на требуемые размеры.",
        },
        {
          isActive: false,
          id: "10",
          title: "Гальваническое покрытие",
          url: "https://downloader.disk.yandex.ru/preview/ed1528a3116dad282ae9f65e348034e6593dd3f44172c92fc613678ef0923a88/65fb1738/-EbKCpCF93krDC2eIswDJUb9YEZyAmQzR2CbY6mMMX9itK07gfv6RplZ53wOs49SpXOCQ6TjXyZ9K3okxRzvGA%3D%3D?uid=0&filename=%D0%93%D0%B0%D0%BB%D1%8C%D0%B2%D0%B0%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B5%20%D0%BF%D0%BE%D0%BA%D1%80%D1%8B%D1%82%D0%B8%D0%B5.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1903x894",
          description:
            "нанесение защитного или декоративного покрытия на металлические поверхности с использованием электрохимического процесса. Гальваническое покрытие позволяет улучшить внешний вид изделий, увеличить их стойкость к коррозии и износу, а также обеспечить лучшую проводимость электрического тока.",
        },
        {
          isActive: false,
          id: "11",
          title: "Покраска",
          url: "https://downloader.disk.yandex.ru/preview/ddd24e47d06e188f861ce97a2dd53940dd988effa2f987077312f82f5ec9eeda/65fb1738/YgAWFr1vJHk_O_uT15w--U7QIo-gQ_BfQgwz-T9RgSgyM5ajGYGjcYHelHUWWoOfK2pXVfQxQUd-3EWVqvzCkQ%3D%3D?uid=0&filename=%D0%9F%D0%BE%D0%BA%D1%80%D0%B0%D1%81%D0%BA%D0%B0.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1903x894",
          description:
            "нанесение красочного покрытия на металлические поверхности для защиты от коррозии или создания эстетического вида. Покраска позволяет улучшить защитные свойства металла, придать ему желаемый цвет или текстуру, а также сделать изделия более привлекательными для конечных потребителей.             ",
        },
        {
          isActive: false,
          id: "12",
          title: "Термообработка",
          url: "https://zdm.ru/wp-content/uploads/2019/04/induktsionnaya-TVCH-pech-v-rabote.jpg",
          description:
            "использование тепла для изменения физических свойств металлических изделий, таких как прочность и твердость. Термообработка позволяет достичь требуемой механической характеристики материала, а также устранить внутренние напряжения и дефекты.",
        },
        {
          isActive: false,
          id: "13",
          title: "Накатка резьбы",
          url: "https://downloader.disk.yandex.ru/preview/2d456608f0719a4b90a628211b00be7270421f3334451260d237e0241448f996/65fb1738/LUiRSdPB2XQthtZo9xxbmvLN-SdQUyvfKq26sP3Gjt9qiLYrbUsADQx5xcLEtqUYjz4T6gX7YSE0g-V5c6R94w%3D%3D?uid=0&filename=%D0%9D%D0%B0%D0%BA%D0%B0%D1%82%D0%BA%D0%B0%20%D1%80%D0%B5%D0%B7%D1%8C%D0%B1%D1%8B.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=1903x894",
          description:
            "процесс создания резьбы на металлической поверхности с помощью специализированного инструмента. Накатка резьбы позволяет создавать резьбовые соединения с высокой точностью и повторяемостью, обеспечивая надежность и герметичность соединений.  ",
        },
        {
          isActive: false,
          id: "14",
          title: "Формовка",
          url: "https://downloader.disk.yandex.ru/preview/bd0984d0aea8b595fd607491ef733428ee33a86df3624f5b0b02d76110cdd228/65fb1738/NLTPw6632pDj0meMBSkPZFLe6SHG11s4OpztmDZPPke0iWRBh2KOkeh-h9rNW9ka_Kc62aniKKOryCiT8KYjFA%3D%3D?uid=0&filename=%D0%A4%D0%BE%D1%80%D0%BC%D0%BE%D0%B2%D0%BA%D0%B0.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1903x894",
          description:
            "создание трехмерных форм или изделий путем деформации материала. Формовка позволяет создавать сложные конструкции, особенно из пластика и металла, с использованием различных методов, таких как штамповка, прессование, выдавливание и гидроформинг.",
        },
        {
          isActive: false,
          id: "15",
          title: "Вакуумная метализация",
          url: "https://downloader.disk.yandex.ru/preview/86df627bc468e457c3994ae38a0714ac632ed9ffdb07c83f02a1906f0263fb6d/65fb1738/J-bi-_jYU-SA8IX9i7LqrlLe6SHG11s4OpztmDZPPkcn_5cHd8gVnpYw4DJ2GgnsNzCpngylBX2HospzIHGvuA%3D%3D?uid=0&filename=%D0%92%D0%B0%D0%BA%D1%83%D1%83%D0%BC%D0%BD%D0%B0%D1%8F%20%D0%BC%D0%B5%D1%82%D0%B0%D0%BB%D0%BB%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1903x894",
          description:
            "нанесение тонкого металлического покрытия на поверхности различных материалов с использованием вакуумной технологии. Вакуумная метализация позволяет придать изделиям металлический вид, улучшить их защиту от коррозии и повысить электропроводность.",
        },
        {
          isActive: false,
          id: "16",
          title: "Сварка MIG",
          url: "https://downloader.disk.yandex.ru/preview/8bbc25da610e41a233a9695523a245743949916e563ac74b89eb7d070b26c66c/65fb1738/T4_5_Yxw4kGwNc9bSOmy_5qqBuePYYD3i9SKQkRj3Lir9Jn8ue-YoPbBMB9sj5dQStbRqvrO0n-KpzFbo8gwiw%3D%3D?uid=0&filename=%D0%A1%D0%B2%D0%B0%D1%80%D0%BA%D0%B0%20MIG.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=1903x894",
          description:
            "Автоматизированный процесс сварки, где металлический электрод плавится и соединяется с металлом под защитой инертного газа, обеспечивая высокую скорость и эффективность, и более подходит для массового производства.",
        },
        {
          isActive: false,
          id: "17",
          title: "Сварка TIG",
          url: "https://downloader.disk.yandex.ru/preview/43e484349b30dbfee0e5d095561ada44540550f4ce2f90067ba4635d968b01d9/65fb1738/oIuNyYtm5X9U3dvwC5AS8IRld9pdoZf0uMUhuzd91soRGlcVqbRc9OJOX1WlomchaqthYt9fNt4VcAiUB9pxEw%3D%3D?uid=0&filename=TIG%20%D0%A1%D0%B2%D0%B0%D1%80%D0%BA%D0%B0.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1903x894",
          description:
            "Метод сварки, использующий дугу между вольфрамовым электродом и свариваемым материалом. Один из главных плюсов TIG-сварки - возможность сварки широкого спектра материалов и тонких деталей, так как процесс обеспечивает более точный и управляемый сварочный шов. В сравнении с MIG-сваркой, TIG-сварка более медленная и требует больше опыта и умения от сварщика. ",
        },
        {
          isActive: false,
          id: "18",
          title: "Точечная сварка",
          url: "https://downloader.disk.yandex.ru/preview/61007b802458605b861035d674dee6ee6538d85e330657f1bb7d467cebabcfaa/65fb1738/_rl5Mb3xj4_2YW0Az6bUEx_186V_YIATsx2WaKEmhmu-e_vYGPLAuFa7b0whKKcZvJ6Tm4B9WrTslEiVVgH94g%3D%3D?uid=0&filename=%D1%82%D0%BE%D1%87%D0%B5%D1%87%D0%BD%D0%B0%D1%8F%20%D1%81%D0%B2%D0%B0%D1%80%D0%BA%D0%B0.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1903x894",
          description:
            "Это метод сварки, при котором свариваемые материалы соединяются точечными или небольшими линейными точками, создаваемыми электрическим разрядом. Точечная сварка часто используется для сварки листового металла, таких как кузова автомобилей. Отличительной чертой точечной сварки является то, что она использует высокую энергию для быстрого плавления и сварки материалов. В отличие от MIG и TIG-сварки, где электрод непрерывно подается, точечная сварка работает практически мгновенно, что делает ее идеальным выбором для сварки на производственных линиях.",
        },
      ],
      news: [
        {
          smallTitle: "Закупка новых станков",
          title: "Повышаем производство с новыми станками",
          date: 5,
          smallDesc:
            "Новое оборудование поможет нам не только увеличить производственную мощность, но и повысить качество нашей продукции.",
          description:
            'Мы объявляем об радостном событии нашего завода – успешной закупке новых станков, которые заметно укрепят наши производственные мощности. Новое оборудование,для обработки металла, поможет нам не только увеличить производственную мощность на 20%, но и повысить качество нашей продукции.          Этот важный шаг подчеркивает наше стремление к инновациям и постоянному совершенствованию. Новые станки не только улучшат эффективность нашего производства, но и сделают нас еще более конкурентоспособными на рынке металлических изделий.     "Мы убеждены, что инвестиции в современные технологии – залог нашего успеха. Это также подчеркивает нашу приверженность созданию рабочих мест и развитию промышленности города", - отметил генеральный директор нашего завода.          Наша компания, гордится упорному стремлению стать лидером в индустрии и вносить вклад в технологическое развитие нашего региона.',
        },
        {
          smallTitle: " запускаем программу обучения",
          title: " запускаем программу по обучению сотрудников",
          date: 2,
          smallDesc:
            "Старт программы обучения для сотрудников. Обучение будет охватывать разнообразные навыки, начиная от использования нового оборудования до повышения навыков командной работы.",
          description:
            'Мы рады объявить о старте нашей новой программы обучения для сотрудников. Завод №1 в Санкт-Петербурге активно внедряет инициативу по повышению квалификации персонала. Обучение будет охватывать разнообразные навыки, начиная от использования нового оборудования до повышения навыков командной работы.          Цель программы – не только поддерживать наших сотрудников в совершенствовании своих профессиональных умений, но и создавать благоприятную среду для развития талантов внутри коллектива.                   "Мы уверены, что инвестиции в образование наших сотрудников – это инвестиции в будущее завода. Наша команда - наш самый ценный актив, и мы готовы сделать всё возможное, чтобы помочь каждому сотруднику раскрыть свой потенциал", - отметил представитель отдела кадров завода.                    Эта инициатива демонстрирует наше стремление к созданию поддерживающей среды, где каждый член нашей команды имеет возможность расти и развиваться вместе с нами.',
        },
        {
          smallTitle: "внедряем энергосберегающие меры",
          title: "внедряем энергосберегающие меры",
          date: 17,
          smallDesc:
            "Энергосберегающие меры включают в себя модернизацию системы освещения, внедрение системы автоматизации для более эффективного управления энергопотреблением.          ",
          description:
            'Мы приступили к реализации нового проекта по снижению энергопотребления нашего предприятия. Внедрение современных технологий и оптимизация энергопроцессов позволят нам существенно уменьшить негативное воздействие на окружающую среду.          Энергосберегающие меры включают в себя модернизацию системы освещения, внедрение системы автоматизации для более эффективного управления энергопотреблением.         "Мы принимаем ответственность за наш вклад в сохранение окружающей среды. Этот проект – шаг в направлении более устойчивого будущего, где эффективность производства сочетается с заботой о окружающей среде", - отметил главный инженер завода.          Этот шаг подчеркивает нашу постоянную готовность адаптироваться к новым условиям.',
        },
        {
          smallTitle: "внедрение системы очистки СОЖ",
          title: "модернизируем производство с внедрением системы очистки СОЖ",
          date: 13,
          smallDesc:
            "внедрении системы очистки СОЖ (стружко-масляных эмульсий) для обработки металла на наших станках. Что повысит срок и производительность станков          ",
          description:
            'Сообщаем о новом этапе совершенствования нашего производства – внедрении передовой системы очистки СОЖ (стружко-масляных эмульсий) для обработки металла на наших станках. Эта инновационная система будет способствовать более эффективной и устойчивой работе нашего оборудования.          Система предусматривает использование современных методов очистки и фильтрации СОЖ, что не только повысит производительность станков, но и снизит негативное воздействие на окружающую среду. Это важный шаг в направлении более ответственного и экологически устойчивого производства.          "Мы стремимся к постоянному улучшению условий труда наших сотрудников и снижению влияния производства на окружающую среду", - отметил главный инженер завода.          ',
        },
      ],
      engineeringCards: [
        {
          name: "engineeringBureau",
          title: "Разработка конструкторской документации",
          txt: "Все чертежи и конструкторская документация (КД) разрабатываются согласно нормам ЕСКД.",
          icon: "",
        },
        {
          name: "DevelopmentTecDoc",
          title: "Разработка технической документации",
          txt: "Общий термин для ряда графических и текстовых материалов, необходимых для производства, сборки и эксплуатации изделий (паспорт, руководства, инструкции и т.п.)",
          icon: "",
        },
        {
          name: "tecDoc",
          title: "Технологическая документация",
          txt: "Совокупность текстовых и графических документов, определяющих процесс и порядок изготовления изделия (маршрутная карта, операционная карта и др)",
          icon: "",
        },
        {
          name: "IndustrialDesign",
          title: "Промышленный дизайн",
          txt: "Разработка внешнего облика и конструктива объекта проектирования с учётом поставленных задач",
          icon: "",
        },
        {
          name: "productDev",
          title: "Разработка изделий",
          txt: "Разработка изделий или устройств с нуля на основании техзадания",
          icon: "",
        },
        {
          name: "reverseEngineering",
          title: "Реверс инжиниринг",
          txt: "Требуется, когда необходимо изготовить аналог или заменить изношенные и повреждённые образцы. Это одна из самых часто запрашиваемых услуг, в которой у наших специалистов накоплен большой опыт",
          icon: "",
        },
        {
          name: "orderingDrawings",
          title: "Чертежи на заказ",
          txt: "Все материалы оформляются по нормам ЕСКД, проходят технический и нормативный контроль",
          icon: "",
        },
        {
          name: "digitizationDrawings",
          title: "Оцифровка чертежей",
          txt: "Векторизация и оцифровка — это способы перевода графических материалов в электронный вид с применением современного программного обеспечения (ПО)",
          icon: "",
        },
        {
          name: "3Dscan",
          title: "3D Сканирование",
          txt: "Используем трехмерное сканирование в решении задач обратного проектирования частей станков и механизмов по образцу",
          icon: "",
        },
        {
          name: "3Dmodel",
          title: "3Д модель",
          txt: "3D-моделирование — это процесс построения трехмерного цифрового облика изделия в электронном виде",
          icon: "",
        },
        {
          name: "scanProcessing",
          title: "Обработка 3D сканирования",
          txt: "Создание трёхмерной модели на основе материалов, полученных 3D сканером (облака точек)",
          icon: "",
        },
      ],
    };
  },
  mutations: {
    uploadPage(state, newState) {
      state.currentPage = newState;
    },
    uploadMenu(state, newState) {
      state.currentMenu = newState;
    },
  },
});

export default store;
