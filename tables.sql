create table routes(
    id serial not null primary key,
    name text not null,
    fare decimal(10,2)
);

create table taxi(
    id serial not null primary key,
    reg_number text not null
);

create table trip(
     id serial not null primary key,
     routes_id int,
     taxi_id int,
     foreign key (routes_id) references routes(id),
     foreign key (taxi_id) references taxi(id)  
);

create table region (
     id serial not null primary key,
     name text not null
);