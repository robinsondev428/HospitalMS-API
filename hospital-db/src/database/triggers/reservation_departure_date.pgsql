create function reservation_departure_date() returns trigger
    language plpgsql
as
$$
declare
        procedure_time int;
        initial_date date;
        is_first_procedure bool;
    begin
        -- check if is  the first procedure
        select r.departure_date is null
        into is_first_procedure
        from reservation r
        where r.id = new."reservationId";

        -- Get procedure time
        select p.time
        into procedure_time
        from medical_procedure p
        where p.id = new."medicalProcedureId";

        -- Set the start date according to the
        -- procedure number that is entered.
        -- If it is the first, the date will be "start-date"
        -- but it will be the current "departure-date"
        if is_first_procedure then
            select r.arrival_date
            into initial_date
            from reservation r
            where r.id = new."reservationId";
        else
            select r.departure_date
            into initial_date
            from reservation r
            where r.id = new."reservationId";
        end if;

        update reservation
        set departure_date = hfx_calculate_departure_date(initial_date::date, procedure_time)
        where id = new."reservationId";

    return new;
    end;
$$;

create trigger insert_bed_in_room_validation
    after insert
    on reservation_procedures_medical_procedure
    for each row
execute procedure reservation_departure_date();
