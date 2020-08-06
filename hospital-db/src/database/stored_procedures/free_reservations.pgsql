create procedure hsp_free_reservations()
    language plpgsql
as
$$
begin
        -- First, delete the procedures that were associated with expired reservations.
        delete from reservation_procedures_medical_procedure rpmp
        where rpmp."reservationId" in ( --@ using sub-query
            select r.id
            from reservation r
            where r.departure_date < (now()::date + interval '-2' day)
        );


        -- Then, delete the tuples from the expired reservations.
        delete from reservation r
        where r.departure_date < (now()::date + interval '-2' day);
    end;
$$;