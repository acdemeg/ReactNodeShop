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
-- Name: enum_orders_status; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.enum_orders_status AS ENUM (
    'Delivering',
    'Done',
    'Canceled'
);


ALTER TYPE public.enum_orders_status OWNER TO postgres;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: email_password_maps; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.email_password_maps (
    id integer NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    "userId" integer NOT NULL
);


ALTER TABLE public.email_password_maps OWNER TO postgres;

--
-- Name: email_password_maps_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.email_password_maps_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.email_password_maps_id_seq OWNER TO postgres;

--
-- Name: email_password_maps_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.email_password_maps_id_seq OWNED BY public.email_password_maps.id;


--
-- Name: orders; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.orders (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    total double precision NOT NULL,
    status public.enum_orders_status DEFAULT 'Delivering'::public.enum_orders_status NOT NULL
);


ALTER TABLE public.orders OWNER TO postgres;

--
-- Name: orders_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.orders_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.orders_id_seq OWNER TO postgres;

--
-- Name: orders_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.orders_id_seq OWNED BY public.orders.id;


--
-- Name: products; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.products (
    id integer NOT NULL,
    "nameProduct" character varying(255) NOT NULL,
    count integer NOT NULL,
    description character varying(255) NOT NULL,
    price double precision NOT NULL,
    "pathImage" character varying(255)
);


ALTER TABLE public.products OWNER TO postgres;

--
-- Name: products_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.products_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.products_id_seq OWNER TO postgres;

--
-- Name: products_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.products_id_seq OWNED BY public.products.id;


--
-- Name: products_into_orders; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.products_into_orders (
    id integer NOT NULL,
    count integer NOT NULL,
    "orderId" integer NOT NULL,
    "productId" integer
);


ALTER TABLE public.products_into_orders OWNER TO postgres;

--
-- Name: products_into_orders_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.products_into_orders_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.products_into_orders_id_seq OWNER TO postgres;

--
-- Name: products_into_orders_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.products_into_orders_id_seq OWNED BY public.products_into_orders.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    phone character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    balance double precision NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: email_password_maps id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.email_password_maps ALTER COLUMN id SET DEFAULT nextval('public.email_password_maps_id_seq'::regclass);


--
-- Name: orders id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders ALTER COLUMN id SET DEFAULT nextval('public.orders_id_seq'::regclass);


--
-- Name: products id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products ALTER COLUMN id SET DEFAULT nextval('public.products_id_seq'::regclass);


--
-- Name: products_into_orders id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products_into_orders ALTER COLUMN id SET DEFAULT nextval('public.products_into_orders_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: email_password_maps; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.email_password_maps (id, email, password, "userId") FROM stdin;
2	ivan@mail.ru	12345	2
3	nastya@mail.ru	54321	1
4	vitya228@mai.ru	parol	3
\.


--
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.orders (id, "userId", total, status) FROM stdin;
7	3	500	Delivering
8	1	22250	Done
\.


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.products (id, "nameProduct", count, description, price, "pathImage") FROM stdin;
1	Ryzen Threadripper 3970X	100	BOX (no cooler)	3000	AMD Ryzen Threadripper 3970X sTRX4 BOX.jpg
3	Thermaltake ToughpowerGrand	100	1250W Titanium ATX 12V V2.31	250	blok_pitaniya_thermaltake_toughpowergrand_1250w_titanium_1250w_titanium_ps_tpg_1250dpcteu_t_rtl_743468_1.jpg
2	Sennheiser GSX 1200 Pro	100	1,5Hz – 48,0kHz 	700	audio_usilitel_dlya_pk_i_mas_sennheiser_gsx_1200_pro_507080__786433_1.jpg
4	Deepcool matrexx 55	1	Midi-Tower	555	korpus_deepcool_matrexx_55_rgb_928202_1.jpeg
5	ASUS PRIME X299	1	EDITION 30 (LGA2066, ATX)	350	materinskaya_plata_asus_prime_x299_edition_30_lga2066_atx__1224770_1.jpg
6	NVIDIA Quadro	1	GP100 16Gb	22250	nvidia_quadro_gp100_16gb_1015275_1.jpg
7	DDR4 G.SKILL	1	TRIDENT Z RGB 32GB (4x8GB kit) 4266MHz CL17	500	operativnaya_pamyat_ddr4_g.skill_trident_z_rgb_32gb_4x8gb_kit_4266mhz_cl17_1.45v_f4_4266c17q_32gtzr_1143926_1.jpg
8	SD disk ADATA 2.5"	1	SU650 120 Гб SATA III TLC 3D NAND (ASU650SS-120GT-R)	84	ssd_disk_adata_2.5_su650_120_gb_sata_iii_tlc_3d_nand_asu650ss_120gt_r__925339_1.jpg
9	PCCooler GI-H58U CORONA B	1	TDP 240W Blue 1000-1800RPM	85	kuler_dlya_protsessora_pccooler_gi_h58u_corona_b_tdp_240w_blue_1000_1800rpm_961130_1.jpg
10	WESTERN DIGITAL 3.5	1	12Tb SATA III, 256Mb, 7200rpm	333.329999999999984	western_digital_zhestkiy_disk_3.5_12.0tb_sata_iii_256_mb_7200_rpm_wd_red_pro_wd121kfbx_1206754_1.jpg
11	Arctic MX-2	1	Thermal Compound 65-gramm 2019 Edition ACTCP00006B	7.5	termopasta_arctic_mx_2_thermal_compound_65_gramm_2019_edition_actcp00006b_1101104_1.jpg
\.


--
-- Data for Name: products_into_orders; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.products_into_orders (id, count, "orderId", "productId") FROM stdin;
6	1	7	7
7	1	8	6
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, name, phone, email, balance) FROM stdin;
1	Nastya	+79993334488	nastya@mail.ru	500
2	Ivan	+79993565656	ivan@mail.ru	100
3	Victor	+79993311111	vitya228@mai.ru	1500
\.


--
-- Name: email_password_maps_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.email_password_maps_id_seq', 4, true);


--
-- Name: orders_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.orders_id_seq', 8, true);


--
-- Name: products_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.products_id_seq', 1, false);


--
-- Name: products_into_orders_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.products_into_orders_id_seq', 7, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 3, true);


--
-- Name: email_password_maps email_password_maps_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.email_password_maps
    ADD CONSTRAINT email_password_maps_pkey PRIMARY KEY (id);


--
-- Name: orders orders_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (id);


--
-- Name: products_into_orders products_into_orders_orderId_productId_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products_into_orders
    ADD CONSTRAINT "products_into_orders_orderId_productId_key" UNIQUE ("orderId", "productId");


--
-- Name: products_into_orders products_into_orders_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products_into_orders
    ADD CONSTRAINT products_into_orders_pkey PRIMARY KEY (id);


--
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: email_password_maps email_password_maps_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.email_password_maps
    ADD CONSTRAINT "email_password_maps_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: orders orders_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT "orders_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: products_into_orders products_into_orders_orderId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products_into_orders
    ADD CONSTRAINT "products_into_orders_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES public.orders(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: products_into_orders products_into_orders_productId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products_into_orders
    ADD CONSTRAINT "products_into_orders_productId_fkey" FOREIGN KEY ("productId") REFERENCES public.products(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

