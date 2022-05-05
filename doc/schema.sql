CREATE TABLE web_user (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    passwd character varying(255) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE post_type (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE post (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    description text NOT NULL,
    authorId integer NOT NULL,
    createTime character varying(255) NOT NULL,
    imagePath character varying(255) NOT NULL,
    path character varying(255) NOT NULL,
    PRIMARY KEY(id)
);
