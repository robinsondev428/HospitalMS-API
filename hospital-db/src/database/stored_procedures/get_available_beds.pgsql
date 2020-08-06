create function hsp_get_available_beds(dni character varying, _arrival_date date, _departure_date date)
    returns TABLE(bed_id uuid)
    language plpgsql
as
$$
declare
        room_type varchar := hfx_get_section(dni);
        available_rooms int[];
    begin
        -- Update the status of reservations first.
        call hsp_free_reservations();

        -- Select the rooms that are of the type and that have beds
        -- available on the required dates.
        available_rooms := array(
        select r.id
        from room r
        where r.type = room_type and
              hfx_get_beds_available_qty(r.id, _arrival_date,_departure_date) > 0);

        -- Now, a left outer join of the beds and reservations is made in order to
        -- obtain only the beds that are not reserved.
        return query
            select distinct b.id
            from
                 bed b left outer join
                 reservation r on b.id = r.bed_id
            where
                b.room_id = any(available_rooms) and
                r.id is null or -- There are no associated reservations.
                (r.arrival_date not between _arrival_date::date and _departure_date::date) or
                (r.departure_date not between _arrival_date::date and _departure_date::date);
    end;
$$;