--
-- PostgreSQL database dump
--

\restrict gHtN7sDPeRaVOnFhNw2di0eBNsnRFznQY5eP4prJqzyxMH0hKCfCQdDu7gVSSTf

-- Dumped from database version 18.3
-- Dumped by pg_dump version 18.3

-- Started on 2026-05-09 16:19:09

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 221 (class 1259 OID 16403)
-- Name: Favoritos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Favoritos" (
    id_favoritos integer NOT NULL,
    usuario_id integer NOT NULL,
    receta_id integer NOT NULL
);


ALTER TABLE public."Favoritos" OWNER TO postgres;

--
-- TOC entry 225 (class 1259 OID 16449)
-- Name: Favoritos_id_favoritos_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public."Favoritos" ALTER COLUMN id_favoritos ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."Favoritos_id_favoritos_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 220 (class 1259 OID 16396)
-- Name: Ingredientes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Ingredientes" (
    id_ingredientes integer NOT NULL,
    nombre character varying(100) NOT NULL
);


ALTER TABLE public."Ingredientes" OWNER TO postgres;

--
-- TOC entry 226 (class 1259 OID 16467)
-- Name: Ingredientes_id_ingredientes_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public."Ingredientes" ALTER COLUMN id_ingredientes ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."Ingredientes_id_ingredientes_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 222 (class 1259 OID 16411)
-- Name: Receta; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Receta" (
    id_receta integer NOT NULL,
    titulo character varying(30) NOT NULL,
    descripcion character varying(100) NOT NULL,
    imagenlink character varying(50) NOT NULL
);


ALTER TABLE public."Receta" OWNER TO postgres;

--
-- TOC entry 223 (class 1259 OID 16420)
-- Name: Receta_Ingredientes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Receta_Ingredientes" (
    receta_id integer NOT NULL,
    ingrediente_id integer NOT NULL
);


ALTER TABLE public."Receta_Ingredientes" OWNER TO postgres;

--
-- TOC entry 227 (class 1259 OID 16468)
-- Name: Receta_id_receta_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public."Receta" ALTER COLUMN id_receta ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."Receta_id_receta_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 219 (class 1259 OID 16389)
-- Name: Usuario; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Usuario" (
    id_usuario integer NOT NULL,
    nombre character varying(100) NOT NULL,
    email character varying(50),
    "contraseña" character varying(50)
);


ALTER TABLE public."Usuario" OWNER TO postgres;

--
-- TOC entry 224 (class 1259 OID 16448)
-- Name: Usuario_id_usuario_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public."Usuario" ALTER COLUMN id_usuario ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."Usuario_id_usuario_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 5038 (class 0 OID 16403)
-- Dependencies: 221
-- Data for Name: Favoritos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Favoritos" (id_favoritos, usuario_id, receta_id) FROM stdin;
\.


--
-- TOC entry 5037 (class 0 OID 16396)
-- Dependencies: 220
-- Data for Name: Ingredientes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Ingredientes" (id_ingredientes, nombre) FROM stdin;
1	tomate
\.


--
-- TOC entry 5039 (class 0 OID 16411)
-- Dependencies: 222
-- Data for Name: Receta; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Receta" (id_receta, titulo, descripcion, imagenlink) FROM stdin;
2	pizza	comestible	----
\.


--
-- TOC entry 5040 (class 0 OID 16420)
-- Dependencies: 223
-- Data for Name: Receta_Ingredientes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Receta_Ingredientes" (receta_id, ingrediente_id) FROM stdin;
2	1
\.


--
-- TOC entry 5036 (class 0 OID 16389)
-- Dependencies: 219
-- Data for Name: Usuario; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Usuario" (id_usuario, nombre, email, "contraseña") FROM stdin;
1	pablo	pablo@gmail.com	pablo
\.


--
-- TOC entry 5050 (class 0 OID 0)
-- Dependencies: 225
-- Name: Favoritos_id_favoritos_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Favoritos_id_favoritos_seq"', 1, false);


--
-- TOC entry 5051 (class 0 OID 0)
-- Dependencies: 226
-- Name: Ingredientes_id_ingredientes_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Ingredientes_id_ingredientes_seq"', 1, true);


--
-- TOC entry 5052 (class 0 OID 0)
-- Dependencies: 227
-- Name: Receta_id_receta_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Receta_id_receta_seq"', 2, true);


--
-- TOC entry 5053 (class 0 OID 0)
-- Dependencies: 224
-- Name: Usuario_id_usuario_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Usuario_id_usuario_seq"', 1, true);


--
-- TOC entry 4880 (class 2606 OID 16410)
-- Name: Favoritos Favoritos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Favoritos"
    ADD CONSTRAINT "Favoritos_pkey" PRIMARY KEY (id_favoritos);


--
-- TOC entry 4878 (class 2606 OID 16402)
-- Name: Ingredientes Ingredientes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Ingredientes"
    ADD CONSTRAINT "Ingredientes_pkey" PRIMARY KEY (id_ingredientes);


--
-- TOC entry 4884 (class 2606 OID 16461)
-- Name: Receta_Ingredientes Receta_Ingredientes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Receta_Ingredientes"
    ADD CONSTRAINT "Receta_Ingredientes_pkey" PRIMARY KEY (receta_id, ingrediente_id);


--
-- TOC entry 4882 (class 2606 OID 16419)
-- Name: Receta Receta_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Receta"
    ADD CONSTRAINT "Receta_pkey" PRIMARY KEY (id_receta);


--
-- TOC entry 4876 (class 2606 OID 16395)
-- Name: Usuario Usuario_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Usuario"
    ADD CONSTRAINT "Usuario_pkey" PRIMARY KEY (id_usuario);


--
-- TOC entry 4887 (class 2606 OID 16469)
-- Name: Receta_Ingredientes fk_ingrediente; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Receta_Ingredientes"
    ADD CONSTRAINT fk_ingrediente FOREIGN KEY (ingrediente_id) REFERENCES public."Ingredientes"(id_ingredientes);


--
-- TOC entry 4885 (class 2606 OID 16455)
-- Name: Favoritos fk_receta; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Favoritos"
    ADD CONSTRAINT fk_receta FOREIGN KEY (receta_id) REFERENCES public."Receta"(id_receta);


--
-- TOC entry 4888 (class 2606 OID 16462)
-- Name: Receta_Ingredientes fk_receta; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Receta_Ingredientes"
    ADD CONSTRAINT fk_receta FOREIGN KEY (receta_id) REFERENCES public."Receta"(id_receta);


--
-- TOC entry 4886 (class 2606 OID 16450)
-- Name: Favoritos fk_usuario; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Favoritos"
    ADD CONSTRAINT fk_usuario FOREIGN KEY (usuario_id) REFERENCES public."Usuario"(id_usuario);


-- Completed on 2026-05-09 16:19:09

--
-- PostgreSQL database dump complete
--

\unrestrict gHtN7sDPeRaVOnFhNw2di0eBNsnRFznQY5eP4prJqzyxMH0hKCfCQdDu7gVSSTf

