--
-- PostgreSQL database dump
--

-- Dumped from database version 11.6 (Debian 11.6-1.pgdg90+1)
-- Dumped by pg_dump version 11.6 (Debian 11.6-1.pgdg90+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: enum_Users_role; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public."enum_Users_role" AS ENUM (
    'USER',
    'ADMIN'
);


ALTER TYPE public."enum_Users_role" OWNER TO postgres;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: Orders; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Orders" (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    total double precision NOT NULL,
    status character varying(255) DEFAULT 'В обработке'::character varying NOT NULL,
    "orderCode" character varying(255) NOT NULL
);


ALTER TABLE public."Orders" OWNER TO postgres;

--
-- Name: Orders_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Orders_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Orders_id_seq" OWNER TO postgres;

--
-- Name: Orders_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Orders_id_seq" OWNED BY public."Orders".id;


--
-- Name: Product_in_Orders; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Product_in_Orders" (
    id integer NOT NULL,
    count integer NOT NULL,
    "orderId" integer NOT NULL,
    "productId" integer NOT NULL
);


ALTER TABLE public."Product_in_Orders" OWNER TO postgres;

--
-- Name: Product_in_Orders_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Product_in_Orders_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Product_in_Orders_id_seq" OWNER TO postgres;

--
-- Name: Product_in_Orders_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Product_in_Orders_id_seq" OWNED BY public."Product_in_Orders".id;


--
-- Name: Products; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Products" (
    id integer NOT NULL,
    "nameProduct" character varying(255) NOT NULL,
    description character varying(255) NOT NULL,
    count integer NOT NULL,
    price double precision NOT NULL,
    "pathImage" text,
    category character varying(255),
    "detailInfo" text
);


ALTER TABLE public."Products" OWNER TO postgres;

--
-- Name: Products_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Products_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Products_id_seq" OWNER TO postgres;

--
-- Name: Products_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Products_id_seq" OWNED BY public."Products".id;


--
-- Name: SequelizeMeta; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);


ALTER TABLE public."SequelizeMeta" OWNER TO postgres;

--
-- Name: Users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Users" (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    phone character varying(255),
    email character varying(255) NOT NULL,
    balance double precision DEFAULT '0'::double precision NOT NULL,
    password character varying(255) NOT NULL,
    role public."enum_Users_role" DEFAULT 'USER'::public."enum_Users_role" NOT NULL,
    "imagePath" character varying(255)
);


ALTER TABLE public."Users" OWNER TO postgres;

--
-- Name: Users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Users_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Users_id_seq" OWNER TO postgres;

--
-- Name: Users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Users_id_seq" OWNED BY public."Users".id;


--
-- Name: Orders id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Orders" ALTER COLUMN id SET DEFAULT nextval('public."Orders_id_seq"'::regclass);


--
-- Name: Product_in_Orders id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Product_in_Orders" ALTER COLUMN id SET DEFAULT nextval('public."Product_in_Orders_id_seq"'::regclass);


--
-- Name: Products id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Products" ALTER COLUMN id SET DEFAULT nextval('public."Products_id_seq"'::regclass);


--
-- Name: Users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Users" ALTER COLUMN id SET DEFAULT nextval('public."Users_id_seq"'::regclass);


--
-- Data for Name: Orders; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Orders" (id, "userId", total, status, "orderCode") FROM stdin;
1	2	21100	В обработке	1957861207
\.


--
-- Data for Name: Product_in_Orders; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Product_in_Orders" (id, count, "orderId", "productId") FROM stdin;
1	1	1	3
\.


--
-- Data for Name: Products; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Products" (id, "nameProduct", description, count, price, "pathImage", category, "detailInfo") FROM stdin;
1	Ryzen Threadripper 3970X	BOX (no cooler)	10	25500	AMD Ryzen Threadripper 3970X sTRX4 BOX.jpg	Процессоры	32 ядра процессора обеспечивают потрясающую мощность для поддержки 64 потоков одновременно, а общий объем кэш-памяти 144 МБ вместе с огромной пропускной способностью шины ввода-вывода на платформе для энтузиастов AMD TRX40 обеспечивает невероятные характеристики. Процессоры Ryzen Threadripper позволяют объединить до шести NVMe-дисков, чтобы добиться высочайшей скорости и надежности. Хотите еще больше расширить возможности? Получите удвоенную пропускную способность благодаря интерфейсу PCIe Gen 4, предназначенному специально для высокотехнологичных настольных ПК на базе материнских плат AMD TRX40.
2	Philips 246e	pls ultra matrix	15	9500	monitor_philips_246e7qdsw_23.6_white_1.jpg	Мониторы	Монитор ЖК PHILIPS 246E7QDSW отличается хорошими техническими характеристиками, благодаря которым вы сможете насладиться качественной и красивой картинкой. Яркое, четкое и живое изображение достигается за счет использования матрицы PLS, которая обеспечивает высокую контрастность 1000:1, яркость экрана в 250 кд/м2, а также широкие угла обзора по вертикали и горизонтали – 178°. Такая область обзора позволит вам вместе с семьей или друзьями смотреть кино или играть в современные компьютерные игры. Монитор ЖК PHILIPS 246E7QDSW оснащается внутренним блоком питания, отличающимся невысоким энергопотреблением, равным всего 19,43 Вт. Это позволит вам значительно сэкономить на расходах электроэнергии. Представленная модель комплектуется стандартным креплением VESA 100×100, которое при наличии отдельного кронштейна позволит закрепить монитор на стене.
3	Acer Aspire A315	15.6 ", 1366x768, AMD A9, 9420e	38	21100	acer aspire.jpg	Ноутбуки	Классический дизайн корпуса и высокотехнологичная аппаратная составляющая − главные, но далеко не все преимущества ноутбука Acer Aspire 3 A315-22-919Z. Вам не нужно будет привыкать к нему, ведь диагональ экрана соответствует 15.6", что является стандартным значением. Стабильная работа достигается благодаря хорошей производительности аппарата, в чем заслуга процессора AMD A9-9420e, обладающего двухъядерной конфигурацией и поддерживающего частоту 2.5 ГГц. Все действия на Acer Aspire 3 A315-22-919Z будут плавными, ведь аппарат задействует в работе модуль DDR4 с памятью 8 ГБ. Взаимодействуя с видеокартой Radeon R5, он сводит к минимуму задержки: все ваши действия будут максимально быстро отображаться на экране. Надежным хранилищем на устройстве выступает диск SSD на 256 ГБ. Преимущества для пользователя дает система Windows 10 Home, которая уже установлена на устройстве, что избавляет от предварительных настроек аппарата.
4	Sennheiser GSX 1200 Pro	1,5Hz – 48,0kHz 	5	7000	audio_usilitel_dlya_pk_i_mas_sennheiser_gsx_1200_pro_507080__786433_1.jpg	Аксессурары	В разработанном для больших профессиональных киберспортивных турниров, аудио усилителе GSX 1200 PRO, используются революционный алгоритм виртуального объемного звука формата 7.1. Точное управление звуком как для игры, так и для голосового чата достигается за счет раздельной регулировки наушников и динамиков, и переключения между ними без отключения кабелей. Готовьтесь к турниру и соединяйте до 8 усилителей GSX 1200 PRO для надежной проводной связи, а также для контроля входящих и исходящих сообщений голосового чата. Помимо ряда настроек эквалайзера, можно также изменять уровень реверберации, чтобы изменить ощущения пользователя в физическом пространстве игры, а также изменять баланс громкости виртуальных тыловых и фронтальных громкоговорителей. Особенности • Технология объемного звука 7.1 Sennheiser Binaural Rendering Engine • Чат-порт – можно подключить до 8 усилителей GSX 1200 PRO для бесперебойного общения в групповом голосовом чате. • Работает с ПК и Мас • Оснащен встроенным чипом ЦАП • Быстрое переключение между гарнитурой и громкоговорителем одним касанием сенсорной панели • Раздельная регулировка уровня звука игры и голосового чата • Регулировка уровня громкости микрофона • Пресеты эквалайзера - речь, музыка, игра, выкл./ровная АЧХ (символы отображаются на дисплее) • 2-летняя гарантия
5	Thermaltake ToughpowerGrand	1250W Titanium ATX 12V V2.31	25	12050	blok_pitaniya_thermaltake_toughpowergrand_1250w_titanium_1250w_titanium_ps_tpg_1250dpcteu_t_rtl_743468_1.jpg	Блоки питания	Toughpower iRGB PLUS 1250W Titanium - TT Premium Edition - первый в мире блок питания с запатентованной кольцевой подсветкой вентилятора на 16.8 млн. цветов. Это технологически самый совершенный БП имеет сертификацию 80 PLUS Titanium в состав которого входят комплектующие самого высокого качества, что гарантирует высочайшую эффективность (КПД) и стабильную работу в течении долгого времени. Ключевой особенностью является наличие специального микропроцессора, позволяющего отслеживать основные параметры работы ПК.Комбинация из Toughpower iRGB PLUS 1250W Titanium и трех интеллектуальных платформ: приложения для ПК DPS G PC App 2.0, облачного сервиса DPS G Smart Power Management (SPM) Cloud 1.0, и мобильного приложения DPS G Mobile App 1.0 позволяет пользователям оценить и оптимизировать электропотребление, тем самым уменьшить выбросы CO2 и сохранить землю для следующих поколений!
6	Deepcool matrexx 55	Midi-Tower	55	3500	korpus_deepcool_matrexx_55_rgb_928202_1.jpeg	Корпуса	Корпус Deepcool MATREXX 55 порадует вас не только привлекательным внешним видом, но и вместительностью. Модель соответствует типоразмеру Midi-Tower. Корпус обладает совместимостью с материнскими платами E-ATX, Micro-ATX, Mini-ITX и Standard-ATX. Вы сможете собрать мощный игровой компьютер. Выбор источника питания предоставлен пользователю: корпус не укомплектован блоком питания.\n        Корпус Deepcool MATREXX 55 рассчитан на монтаж видеоадаптера, длина которого может достигать 370 мм. Максимальная высота процессорного кулера также впечатляет: величина этого показателя равна 168 мм. Присутствует возможность установки системы жидкостного охлаждения. Особенностью корпуса является наличие разноцветной подсветки, которая чрезвычайно эффектно смотрится при любом уровне освещенности. Имеется окно из закаленного стекла.\n        Корпус имеет классический цвет – черный. Длина, ширина и высота корпуса равны 440, 210 и 480 мм соответственно. Масса модели – 6970 г. В комплектацию корпуса входит набор крепежа.
7	ASUS PRIME X299	EDITION 30 (LGA2066, ATX)	15	11000	materinskaya_plata_asus_prime_x299_edition_30_lga2066_atx__1224770_1.jpg	Платы	ASUS Prime X299-A – это материнская плата форм-фактора ATX, созданная для профессиональных разработчиков контента и опытных пользователей, которые оценят ее современную функциональность во время работы и отличные игровые возможности во время отдыха. Эта мощная и инновационная плата отлично подходит для энтузиастов ПК, позволяя им с максимальной легкостью получить для своей системы высокую производительность, эффективное охлаждение и оригинальный стиль. Все кто любит творить, исследовать и наслаждаться жизнью, встречайте Prime X299-A!
8	NVIDIA Quadro RTX 8000	GP100 16Gb	12	12500	nvidia_quadro_gp100_16gb_1015275_1.jpg	Видеокарты	Откройте новую эру в профессиональной графике с непревзойденной производительностью и масштабируемостью, 48 Гб ультраскоростной видеопамяти GDDR6 и интерфейсом NVIDIA NVLink™. Теперь графические художники и дизайнеры могут расширить границы возможного, работая с объемными и сложными задачами трассировки лучей, глубокого обучения и визуальных вычислений
9	DDR4 G.SKILL	TRIDENT Z RGB 32GB (4x8GB kit) 4266MHz CL17	11	5000	operativnaya_pamyat_ddr4_g.skill_trident_z_rgb_32gb_4x8gb_kit_4266mhz_cl17_1.45v_f4_4266c17q_32gtzr_1143926_1.jpg	Оперативная память	Основываясь на сильном успехе G.SKILL, серия AEGIS представляет собой одну из самых высокопроизводительных DDR4-памяти в мире, предназначенную для энтузиастов и экстремальных геймеров. AEGIS - это самое передовое решение DDR4, которое сочетает в себе производительность и красоту для энтузиастов ПК и экстремальных оверклокеров.
10	SD disk ADATA 2.5"	SU650 120 Гб SATA III TLC 3D NAND (ASU650SS-120GT-R)	35	1200	ssd_disk_adata_2.5_su650_120_gb_sata_iii_tlc_3d_nand_asu650ss_120gt_r__925339_1.jpg	Накопители	Твердотельный накопитель ADATA 120GB (ASU650SS-120GT-R) предназначен для увеличения объема памяти ноутбука или компьютера. Модель характеризуется высокой производительностью за счет использования интерфейса SATA III. Устройство оснащено flash-памятью 3D NAND и контроллером с высокой скоростью работы, что способствует быстрой записи и чтению информации. Объем жесткого диска составляет 120 ГБ, чего достаточно для хранения большого количества контента, в том числе видеофайлов. В модели ADATA 120GB (ASU650SS-120GT-R) предусмотрена возможность исправления ошибок и SLC-кэширование, что обеспечивает надежное хранение данных, исключающее риск потери их целостности. После установки жесткого диска запуск системы занимает минимальное количество времени за счет высокой скорости чтения информации (до 520 МБ в секунду). 
11	PCCooler GI-H58U CORONA B	TDP 240W Blue 1000-1800RPM	45	850	kuler_dlya_protsessora_pccooler_gi_h58u_corona_b_tdp_240w_blue_1000_1800rpm_961130_1.jpg	Охлаждение	Кулер PCCooler GI-H58U B CORONA B SilentPro предназначен для отвода тепла от центрального процессора с TDP до 240W. Данная модель отличается эффективным радиатором с 5-ю тепловыми трубками при минимальном уровне шума. Это достигается за счёт проработанного дизайна и специальных «тихих» лопастей кулера. Так же присутствует синяя подсветка, которая придаёт эффектный внешний вид охладителю.
12	WESTERN DIGITAL 3.5	12Tb SATA III, 256Mb, 7200rpm	20	13350	western_digital_zhestkiy_disk_3.5_12.0tb_sata_iii_256_mb_7200_rpm_wd_red_pro_wd121kfbx_1206754_1.jpg	Накопители	Высокое качество исполнения и надежность применяемых конструктивных элементов обеспечивают длительную и бесперебойную работу внутреннего жесткого диска WD Caviar Blue WD10EZEX. Высочайшие требования и цели, которые ставят перед собой создатели данного вида накопителей, предоставляют широкую платформу для реализации повседневных задач разного уровня сложности, а также решения вопросов, связанных с профессиональной деятельностью. Стандартный форм-фактор внутреннего жесткого диска WD Caviar Blue WD10EZEX, равный 3,5 дюйма, позволит устанавливать его в большинстве настольных персональных компьютеров для решения ежедневных задач дома или на рабочем месте. Данный накопитель обеспечит оптимальную скорость работы, не заставляя ожидать длительного ответа. А достаточный объем, составляющий 1 Тб, предоставит место для надежного хранения не только необходимой, но и интересной для вас информации.
13	Электронная лицензия Movavi	Пакетный Фоторедактор. Персональная	1000	500	elektronnaya_litsenziya_movavi_paketniy_fotoredaktor._personalnaya_1.jpg	Программное обеспечение	Movavi Пакетный Фоторедактор – это программа для уменьшения фото и их быстрой обработки, которая позволяет работать одновременно с большим количеством изображений. Вы сможете уменьшать картинки и улучшать качество, чтобы подготовить их к экспорту в интернет или сконвертировать в другой формат, чтобы очистить место на диске. Редактируйте папки с фотографиями за считанные минуты! Как уменьшить фотографии быстро и без потери качества? С этой задачей отлично справится Пакетный Фоторедактор Movavi. Освободите гигабайты места на компьютере при помощи массовой конвертации! К вашим услугам изменение формата и размера всех ваших фотографий одним нажатием, редактирование изображений, а также множество других интересных опций.
14	Arctic MX-2	Thermal Compound 65-gramm 2019 Edition ACTCP00006B	100	80	termopasta_arctic_mx_2_thermal_compound_65_gramm_2019_edition_actcp00006b_1101104_1.jpg	Охлаждение	
\.


--
-- Data for Name: SequelizeMeta; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."SequelizeMeta" (name) FROM stdin;
20200528071645-create-user.js
20200528071717-create-product.js
20200528072332-create-product-in-order.js
20200528072408-create-order.js
\.


--
-- Data for Name: Users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Users" (id, name, phone, email, balance, password, role, "imagePath") FROM stdin;
1	Admin	+79553271244	admin@google.com	0	admin_passw	ADMIN	user_avatar_1.png
2	John Doe	+72478515484	joo@google.com	7000	john_passw	USER	user_avatar_2.png
3	Michail	+75123694596	micha@mail.ru	70000	mich_passw	USER	user_avatar_3.png
4	Ivan	+71247854698	iv@mail.ru	500	iv_passw	USER	user_avatar_4.png
5	Petr	+71254789632	Petr@mail.ru	3000	Petr_passw	USER	user_avatar_5.png
6	Dima	+78951423784	Dima@mail.ru	10000	Dima_passw	USER	user_avatar_6.png
7	Anton	+79823457156	Anton@mail.ru	1200	Anton_passw	USER	user_avatar_7.png
8	Joseph	+41487523249	Joseph@mail.ru	100000	Joseph_passw	USER	user_avatar_8.png
9	Micle	+64268441547	Micle@mail.ru	5000	Micle_passw	USER	user_avatar_9.png
10	Luisa	+31552984687	Luisa@mail.ru	8000	Luisa_passw	USER	user_avatar_10.png
11	Sebastian	+24568742569	Sebastian@mail.ru	2000	Sebastian_passw	USER	user_avatar_11.png
12	Vika	+812141896587	Vika@mail.ru	1500	Vika_passw	USER	user_avatar_12.png
13	Polina	+72111456983	Polina@mail.ru	100	Polina_passw	USER	user_avatar_13.png
14	Achmed	+32585241369	Achmed@mail.ru	13000	Achmed_passw	USER	user_avatar_14.png
15	Kim_Chen_In	+25687413697	Kim_Chen_In@mail.ru	50000	Kim_Chen_In_passw	USER	user_avatar_15.png
\.


--
-- Name: Orders_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Orders_id_seq"', 1, true);


--
-- Name: Product_in_Orders_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Product_in_Orders_id_seq"', 1, true);


--
-- Name: Products_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Products_id_seq"', 14, true);


--
-- Name: Users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Users_id_seq"', 15, true);


--
-- Name: Orders Orders_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Orders"
    ADD CONSTRAINT "Orders_pkey" PRIMARY KEY (id);


--
-- Name: Product_in_Orders Product_in_Orders_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Product_in_Orders"
    ADD CONSTRAINT "Product_in_Orders_pkey" PRIMARY KEY (id);


--
-- Name: Products Products_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Products"
    ADD CONSTRAINT "Products_pkey" PRIMARY KEY (id);


--
-- Name: SequelizeMeta SequelizeMeta_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);


--
-- Name: Users Users_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key" UNIQUE (email);


--
-- Name: Users Users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_pkey" PRIMARY KEY (id);


--
-- Name: Orders Orders_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Orders"
    ADD CONSTRAINT "Orders_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."Users"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Product_in_Orders Product_in_Orders_orderId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Product_in_Orders"
    ADD CONSTRAINT "Product_in_Orders_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES public."Orders"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Product_in_Orders Product_in_Orders_productId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Product_in_Orders"
    ADD CONSTRAINT "Product_in_Orders_productId_fkey" FOREIGN KEY ("productId") REFERENCES public."Products"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

