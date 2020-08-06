CREATE TABLE "STAFF" (
  "Dni" varchar(11),
  "Username" varchar(15),
  "Password" varchar(20),
  "Name" varchar(30),
  "LastName" varchar(50),
  "DoB" date,
  "Phone" varchar(15),
  "CP" varchar(5),
  "OtherSigns" varchar(256),
  "StartDate" date,
  "Role" varchar(15),
  PRIMARY KEY ("Dni")
);

CREATE TABLE "PATIENTS" (
  "Dni" varchar(11),
  "Password" varchar(20),
  "Name" varchar(30),
  "LastName" varchar(50),
  "DoB" Date,
  "Sex" varchar(7),
  "Phone" varchar(15),
  "CP" varchar(5),
  "OtherSings" varchar(256),
  PRIMARY KEY ("Dni")
);

CREATE TABLE "PROCEDURES" (
  "Id" uuid,
  "Name" varchar(60),
  "Description" varchar(256),
  "Time" int,
  PRIMARY KEY ("Id")
);

CREATE TABLE "MEDICAL_EQUIPMENT" (
  "Id" uuid,
  "Name" varchar(20),
  "Provider" varchar(30),
  "Qty" int,
  PRIMARY KEY ("Id")
);

CREATE TABLE "ROOMS" (
  "Id" int,
  "BedsQty" int,
  "Floor" int,
  "Name" varchar(20),
  "Type" varchar(20),
  PRIMARY KEY ("Id")
);

CREATE TABLE "BEDS" (
  "Id" uuid,
  "UCI" bool,
  "RoomId" int,
  PRIMARY KEY ("Id")
);

CREATE TABLE "EQUIPMENT_BEDS" (
  "BedID" uuid,
  "EquipmentID" uuid
);

CREATE INDEX "PK, FK" ON  "EQUIPMENT_BEDS" ("BedID", "EquipmentID");

CREATE TABLE "RECORD_TREATMENT" (
  "record_Id" uuid,
  "Name" varchar(60),
  "Description" varchar(256)
);

CREATE INDEX "PK, FK" ON  "RECORD_TREATMENT" ("record_Id");

CREATE TABLE "RESERVATIONS" (
  "Id" uuid,
  "ArrivalDate" Date,
  "DepartureDate" Date,
  "BedId" uuid,
  "PatientDni" varchar(11),
  PRIMARY KEY ("Id")
);

CREATE TABLE "RESERVATION_PROCEDURE" (
  "ReservationId" uuid,
  "ProcedureId" uuid
);

CREATE INDEX "PK, FK" ON  "RESERVATION_PROCEDURE" ("ReservationId", "ProcedureId");

CREATE TABLE "MEDICAL_RECORDS" (
  "Id" uuid,
  "Date" date,
  "ProcedureID" uuid,
  "PatientDni" varchar(11),
  PRIMARY KEY ("Id")
);

CREATE TABLE "ADDRESS" (
  "CP" varchar(5),
  "Province" varchar(10),
  "Canton" varchar(15),
  "District" varchar(15),
  PRIMARY KEY ("CP")
);

CREATE TABLE "PATHOLOGY" (
  "Name" varchar(60),
  "Treatment" varchar(256),
  "PatientDni" varchar(11),
  PRIMARY KEY ("Name")
);

CREATE INDEX "PK FK" ON  "PATHOLOGY" ("PatientDni");

