import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      tabs: [
        {
          id: "0",
          title: "Холодная штамповка",
          url: "https://downloader.disk.yandex.ru/preview/1e8c7115f64afe9e794c9e7d8a248edcebb54868b9661a3c2290a3eebc1dae88/65cf87d9/WzWiVhhiyyXjU4fFNd5s3E7QIo-gQ_BfQgwz-T9RgSgMtD_1Na4lEgJB3lXrcwwUScrouFi8Yp_5rNcCQR3Zeg%3D%3D?uid=0&filename=%D0%A5%D0%BE%D0%BB%D0%BE%D0%B4%D0%BD%D0%B0%D1%8F%20%D0%BB%D0%B8%D1%81%D1%82%D0%BE%D0%B2%D0%B0%D1%8F%20%D1%88%D1%82%D0%B0%D0%BC%D0%BF%D0%BE%D0%B2%D0%BA%D0%B0.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1903x894",
          description:
            "это вид обработки металлов давлением, при котором листовой материал деформируется в холодном или подогретом состоянии. Этот метод позволяет создавать различные детали и компоненты с высокой точностью и повторяемостью.",
        },
        {
          id: "1",
          title: "Лазерная резка",
          url: "https://downloader.disk.yandex.ru/preview/65d474786e315f6452d3ff979cc3e49bf2ab5eac7a17da0071446a3eed770e96/65cf87d9/UUAECSdoGi4aPEcWxNltUU7QIo-gQ_BfQgwz-T9RgShfhL2a5Zwjfk8-hu50vdywgLe0_8-Teic7y6IEiYLD0A%3D%3D?uid=0&filename=%D0%9B%D0%B0%D0%B7%D0%B5%D1%80%D0%BD%D0%B0%D1%8F%20%D1%80%D0%B5%D0%B7%D0%BA%D0%B0.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1903x894",
          description:
            "использование лазерного луча для точной и чистой резки различных материалов, включая металлы. Лазерная резка предоставляет возможность создавать сложные формы и контуры, а также выполнять высокоточные операции без необходимости дополнительной обработки.",
        },
        {
          id: "2",
          title: "Гибка метала",
          url: "https://downloader.disk.yandex.ru/preview/324c1e65ed75d0146d5aa05e0adbdbcbed091b6833c37aabce7a346de3a09641/65cf87d9/NyOAeEA9LvbwhkslWC5qnKArbuUsgqTXRM42oAu3BnMo75-2qt7plDqJTooVZzelg8J-xPfANXtD-lOS5V_Mbw%3D%3D?uid=0&filename=%D0%93%D0%B8%D0%B1%D0%BA%D0%B0.jpeg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1903x894",
          description:
            "создание изгибов и форм в металлических изделиях с помощью специализированного оборудования. Гибка метала позволяет создавать различные изделия стребуемыми геометрическими параметрами, такими как углы, радиусы и длины.",
        },
        {
          id: "3",
          title: "Слесарные работы",
          url: "https://downloader.disk.yandex.ru/preview/1a6770f23f3514b9a34e968aed6309173801d7b0b05c95636a54d55de9ead543/65cf87d9/Vj2J_6OQ-r8ijnJqzfqh-clc9SGyibxXtKcsvpsFyaGJI4bN9vxzOnkZ1_nGRzWPdXf6pZO6zouTUq3T4F64Cg%3D%3D?uid=0&filename=%D0%A1%D0%BB%D0%B5%D1%81%D0%B0%D1%80%D0%BD%D1%8B%D0%B5%20%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1903x894",
          description:
            "ремонт, обслуживание и изготовление деталей и узлов из различных материалов. Слесарные работы включают в себя механическую обработку деталей, сборку и регулировку механизмов, а также проведение различных видов ремонтных работ",
        },
        {
          id: "4",
          title: "Изготовление и ремонт фильер",
          url: "https://downloader.disk.yandex.ru/preview/bddec3f5cef3a10c5ec70bde32d8f51704623e96f0e6195129c88c529e10bf1b/65cf87d9/yG0u4L2BtP1LqmVGuacWnFLe6SHG11s4OpztmDZPPke8-uc3pAUOdWC5uPZYrEaS_5I-zjw1JUK5cl7qN8Eoyw%3D%3D?uid=0&filename=%D0%A4%D0%B8%D0%BB%D1%8C%D0%B5%D1%80%D0%B0.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=1903x894",
          description:
            " включает в себя процесс создания и восстановления специальных высокопрочных форм, таких как пластины или колпачки с тарированными отверстиями, расположенными в определенном порядке.",
        },
        {
          id: "5",
          title: "Фрезерная гравировка с ЧПУ",
          url: "https://downloader.disk.yandex.ru/preview/81476b67a934c37c934e4e9da74da3b3ee5f95fc35afc9b569ba9fe1a7ea2485/65cf87d9/sUrvZ7UR174USWuMu6ORiOSrH1aSPa2YZnrfBrptdoOeW4RSr5AltFuDoHyURtDUHRRq04bO2-M58aiVjZ6EwA%3D%3D?uid=0&filename=%D0%A4%D1%80%D0%B5%D0%B7%D0%B5%D1%80%D0%BD%D0%B0%D1%8F%20%D0%B3%D1%80%D0%B0%D0%B2%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1903x894",
          description:
            "использование компьютерно-управляемого фрезерного станка для создания точных гравировок и вырезания на различных материалах. Этот метод позволяет создавать сложные узоры, тексты и рисунки на поверхностях металла, дерева, пластика и других материалов.",
        },
        {
          id: "6",
          title: "Токарно-фрезерные работы",
          url: "https://downloader.disk.yandex.ru/preview/68c53b096c84e863ce50e662015af22b8240b2196f85e454306608efc02ab6c8/65cf87d9/xHMbSoLQFDXpchkpSKeCvlLe6SHG11s4OpztmDZPPkcR2wSLTvwiccla_GO13JXRKWLpHY2T_AeLKDq09-GbWA%3D%3D?uid=0&filename=%D0%A4%D1%80%D0%B5%D0%B7%D0%B5%D0%BD%D1%8B%D0%B5%20%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1903x894",
          description:
            "комбинирование операций токарной и фрезерной обработки для создания сложных деталей и изделий из металла. Токарно-фрезерные работы позволяют выполнять различные операции обработки, такие как нарезание резьбы, создание отверстий, фрезерование контуров и т.д.",
        },
        {
          id: "7",
          title: "Виброгальтовка",
          url: "https://downloader.disk.yandex.ru/preview/300ac715baf2ec81543542e1e7658e25b3e11fc1725a917d3cb26a7c14418bd8/65cf87d9/TIG_hpEqH8LCkhNKNwBMxVLe6SHG11s4OpztmDZPPkfU0EPVjmv4PphvIyHjeR6_v_9hyCtKJDtK6wTkY7Bu9w%3D%3D?uid=0&filename=%D0%92%D0%B8%D0%B1%D1%80%D0%BE%D0%B3%D0%B0%D0%BB%D1%82%D0%BE%D0%B2%D0%BA%D0%B0.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1903x894",
          description:
            "применение специализированного оборудования для доводки и отделки поверхностей вибрационным методом. Виброгальтовка позволяет удалить остаточные материалы, сгладить поверхность и придать ей требуемую шероховатость.",
        },
        {
          id: "8",
          title: "Электроэрозия",
          url: "https://downloader.disk.yandex.ru/preview/72b87fd5df4c37a7b44c48f6e01d03b6fee23684b70a74fd28fcc473bfbca210/65cf87d9/wmxgx_J1hUBAQstl1iQKK1Le6SHG11s4OpztmDZPPkc_yyQ0qJ9QVFBedmLuD2GTEbaVWgzbEIbehyaxUlDrDw%3D%3D?uid=0&filename=%D0%AD%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D1%8D%D1%80%D1%80%D0%BE%D0%B7%D0%B8%D1%8F.jpeg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1903x894",
          description:
            " процесс удаления материала с помощью электрической искры между электродом и обрабатываемым предметом. Электроэрозия позволяет выполнить точную и узкую обработку деталей с высокой степенью детализации.",
        },
        {
          id: "9",
          title: "Ленточнопильная резка метала",
          url: "https://downloader.disk.yandex.ru/preview/b75ed33bbac588fbd1142a1274d112720fc7cf055cb50723de864ec50d5dd01c/65cf87d9/O_O8FgacYMLiLPlf-kTPeU7QIo-gQ_BfQgwz-T9RgSgJT5PkP1AV3Ea_l4BisNMvTE97U6cJ5ECHMWxHdYs-Jw%3D%3D?uid=0&filename=%D0%9B%D0%B5%D0%BD%D1%82%D0%BE%D1%87%D0%BD%D0%BE%D0%BF%D0%B8%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F%20%D1%80%D0%B5%D0%B7%D0%BA%D0%B0%20%D0%BC%D0%B5%D1%82%D0%B0%D0%BB%D0%BB%D0%B0.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1903x894",
          description:
            "использование ленточной пилы для создания прямых или криволинейных резов в металле. Ленточнопильная резка обеспечивает быстрое и точное разделение металлических листов, профилей и труб на требуемые размеры.",
        },
        {
          id: "10",
          title: "Гальваническое покрытие",
          url: "https://downloader.disk.yandex.ru/preview/2c79621f0d656c0dd32291973c83c6ae2b43a843d89a1d351a60fef87a524920/65cf87d9/GadVb0E7ij9AESesEwfflU7QIo-gQ_BfQgwz-T9RgSjib5ZYJOUxCXKcQDA1Dqq3m5_NLesIstPZf4XQ7IWq1w%3D%3D?uid=0&filename=%D0%93%D0%B0%D0%BB%D1%8C%D0%B2%D0%B0%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B5%20%D0%BF%D0%BE%D0%BA%D1%80%D1%8B%D1%82%D0%B8%D0%B5.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1903x894",
          description:
            "нанесение защитного или декоративного покрытия на металлические поверхности с использованием электрохимического процесса. Гальваническое покрытие позволяет улучшить внешний вид изделий, увеличить их стойкость к коррозии и износу, а также обеспечить лучшую проводимость электрического тока.",
        },
        {
          id: "11",
          title: "Покраска",
          url: "https://downloader.disk.yandex.ru/preview/37cd6d9f7f2629b6a59dee59e08a51e270ab65ea1c5ea1d630225e8fa5a91335/65cf87d9/YgAWFr1vJHk_O_uT15w--U7QIo-gQ_BfQgwz-T9RgSgyM5ajGYGjcYHelHUWWoOfK2pXVfQxQUd-3EWVqvzCkQ%3D%3D?uid=0&filename=%D0%9F%D0%BE%D0%BA%D1%80%D0%B0%D1%81%D0%BA%D0%B0.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1903x894",
          description:
            "нанесение красочного покрытия на металлические поверхности для защиты от коррозии или создания эстетического вида. Покраска позволяет улучшить защитные свойства металла, придать ему желаемый цвет или текстуру, а также сделать изделия более привлекательными для конечных потребителей.             ",
        },
        {
          id: "12",
          title: "Термообработка",
          url: "https://zdm.ru/wp-content/uploads/2019/04/induktsionnaya-TVCH-pech-v-rabote.jpg",
          description:
            "использование тепла для изменения физических свойств металлических изделий, таких как прочность и твердость. Термообработка позволяет достичь требуемой механической характеристики материала, а также устранить внутренние напряжения и дефекты.",
        },
        {
          id: "13",
          title: "Накатка резьбы",
          url: "https://downloader.disk.yandex.ru/preview/c080558ae4ea1bbbda4445f9dc58e358a2d403d096d717d55c99941e46164ec9/65cf87d9/LUiRSdPB2XQthtZo9xxbmvLN-SdQUyvfKq26sP3Gjt9qiLYrbUsADQx5xcLEtqUYjz4T6gX7YSE0g-V5c6R94w%3D%3D?uid=0&filename=%D0%9D%D0%B0%D0%BA%D0%B0%D1%82%D0%BA%D0%B0%20%D1%80%D0%B5%D0%B7%D1%8C%D0%B1%D1%8B.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=1903x894",
          description:
            "процесс создания резьбы на металлической поверхности с помощью специализированного инструмента. Накатка резьбы позволяет создавать резьбовые соединения с высокой точностью и повторяемостью, обеспечивая надежность и герметичность соединений.  ",
        },
        {
          id: "14",
          title: "Формовка",
          url: "https://downloader.disk.yandex.ru/preview/e3f638ef5117783d1bfa05f2a8c64830c55258a2fd11677f8e7937f77d6b58f5/65cf87d9/NLTPw6632pDj0meMBSkPZFLe6SHG11s4OpztmDZPPke0iWRBh2KOkeh-h9rNW9ka_Kc62aniKKOryCiT8KYjFA%3D%3D?uid=0&filename=%D0%A4%D0%BE%D1%80%D0%BC%D0%BE%D0%B2%D0%BA%D0%B0.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1903x894",
          description:
            "создание трехмерных форм или изделий путем деформации материала. Формовка позволяет создавать сложные конструкции, особенно из пластика и металла, с использованием различных методов, таких как штамповка, прессование, выдавливание и гидроформинг.",
        },
        {
          id: "15",
          title: "Вакуумная метализация",
          url: "https://downloader.disk.yandex.ru/preview/4ff909254e47017d65c058a8d038bdc60cfb8819ba2f02a175ac3b690b8abfd7/65cf87d9/J-bi-_jYU-SA8IX9i7LqrlLe6SHG11s4OpztmDZPPkcn_5cHd8gVnpYw4DJ2GgnsNzCpngylBX2HospzIHGvuA%3D%3D?uid=0&filename=%D0%92%D0%B0%D0%BA%D1%83%D1%83%D0%BC%D0%BD%D0%B0%D1%8F%20%D0%BC%D0%B5%D1%82%D0%B0%D0%BB%D0%BB%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1903x894",
          description:
            "нанесение тонкого металлического покрытия на поверхности различных материалов с использованием вакуумной технологии. Вакуумная метализация позволяет придать изделиям металлический вид, улучшить их защиту от коррозии и повысить электропроводность.",
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
