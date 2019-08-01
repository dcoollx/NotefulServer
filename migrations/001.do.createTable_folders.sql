CREATE TABLE "folders" (
  id INT PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  name varchar UNIQUE NOT NULL,
  "date_created" TIMESTAMPTZ DEFAULT now()
);